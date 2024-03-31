import { atom } from 'nanostores';
import { getProductRequest } from './products';

export interface ICartItem {
  id: string;
  uuid: string;
  qty: number;
  name: string;
  image: string;
  variation: string;
  price: number;
  countInStock: number;
}

export const loadingAddCart = atom<boolean>(false);
export const errorAddCart = atom<string | undefined>(undefined);

export const cart = atom<ICartItem[]>([]);

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const addToCart = async (
  id: string,
  qty: number,
  variation: string,
  isIncart: boolean = false
) => {
  try {
    errorAddCart.set(undefined);
    loadingAddCart.set(true);

    // Get product first
    const productResponse = await getProductRequest(id, false);

    // Check if product is available and not less than requested quantity
    if (
      (productResponse?.countInStock || 0) < qty ||
      !productResponse?.countInStock
    ) {
      console.log('Check the stock');
      throw new Error('Few items remaining... Reduce quantity');
    }
    let updatedCartItems;
    let updatedCartItem: ICartItem;
    let newCartItem: ICartItem;
    // Define cart items from state
    const cartItems = cart?.get() || [];

    // Get existing cart iytem
    const existingCartItem = cartItems?.filter(
      (item) => item.uuid === productResponse?.uuid
    );

    // Selected Cart item has been previously selected
    if (existingCartItem.length >= 1) {
      const exactItem = existingCartItem.find(
        (prod) => prod.variation === variation
      );
      if (exactItem) {
        // Update the existing item's quantity
        updatedCartItem = {
          ...exactItem,
          qty: isIncart ? qty : qty + exactItem.qty,
        };

        // Update the list of cart items with the modified cart item
        updatedCartItems = cartItems?.map((cartItem) =>
          cartItem?.id === exactItem.id ? updatedCartItem : cartItem
        );
      } else {
        newCartItem = {
          id: generateUniqueId(),
          uuid: productResponse.uuid,
          image: productResponse?.image,
          name: productResponse?.name,
          price: productResponse?.price,
          qty,
          variation,
          countInStock: productResponse?.countInStock,
        };
        updatedCartItems = [...cartItems, newCartItem];
      }

      // save the changes to the state
      cart.set(updatedCartItems);
    }

    // Cart item is a new item
    if (existingCartItem.length === 0) {
      // Create a new cart item with data from server and also selected quantity
      newCartItem = {
        id: generateUniqueId(),
        uuid: productResponse.uuid,
        image: productResponse?.image,
        name: productResponse?.name,
        price: productResponse?.price,
        qty,
        variation,
        countInStock: productResponse?.countInStock,
      };

      // Update the list of cart items with the newly added cart items
      updatedCartItems = [...cartItems, newCartItem];

      // Save the  Update to  the state
      cart.set(updatedCartItems);
    }
    localStorage.setItem('cart', JSON.stringify(cart?.get()));
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    errorAddCart.set(message);
  } finally {
    loadingAddCart.set(false);
  }
};

export const removeFromCart = async (id: string) => {
  try {
    // Define cart items from state
    const cartItems = cart?.get() || [];

    const updatedCartItem = cartItems?.filter(
      (cartItem) => cartItem?.id !== id
    );
    cart.set(updatedCartItem);

    localStorage.setItem('cart', JSON.stringify(cart?.get()));
  } catch (error) {
    console.log({ RemoveFromCartError: error });
  } finally {
  }
};
