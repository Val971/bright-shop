import axios from 'axios';
import { atom, map } from 'nanostores';
import { SERVER_URL } from './auth';

interface IReview {
  name: string;
  rating: number;
  comment: string;
  user: string;
}
export interface options {
  key: String;
  value: string;
}

export type IProduct = {
  uuid: string;
  user?: any;
  name: string;
  image: string;
  brand?: string;
  category?: string;
  description: string;
  reviews?: Array<IReview>;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  featured: boolean;
  material: string;
  size: options[];
};

export type ProductListRequest = {
  products?: Array<IProduct> | undefined;
  page?: number;
  pages?: number;
};

export const loadingProductList = atom<boolean>(false);
export const errorProductList = atom<string | undefined>(undefined);
export const productListState = map<ProductListRequest>({
  page: 0,
  pages: 0,
  products: undefined,
});

export const loadingCreateProduct = atom<boolean>(false);
export const errorCreateProduct = atom<string | undefined>(undefined);

export const loadingDeleteProduct = atom<boolean>(false);
export const errorDeleteProduct = atom<string | undefined>(undefined);

export const loadingGetProduct = atom<boolean>(false);
export const errorGetProduct = atom<string | undefined>(undefined);
export const productGetState = map<IProduct>();

export const loadingReviewProduct = atom<boolean>(false);
export const errorReviewProduct = atom<string | undefined>(undefined);
export const productReviewState = map<IProduct>();

export const listProductRequest = async (keyword = '', pageNumber = '') => {
  errorProductList.set(undefined);
  loadingProductList.set(true);
  try {
    // const response = await axios.get<ProductListRequest>(
    //   `${SERVER_URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
    // );

    fetch('/mocks/products.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem('products', JSON.stringify(data));
        productListState.set({ ...productListState.get(), products: data });
      })
      .catch((error) => console.error('Error fetching products: ', error));
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    errorProductList.set(message);
  } finally {
    loadingProductList.set(false);
  }
};

export const createProductRequest = async (
  name: string,
  price: string,
  brand: string,
  category: string,
  countInStock: string,
  description: string,
  image: string
) => {
  errorCreateProduct.set(undefined);
  loadingCreateProduct.set(true);
  try {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    const response = await axios.post<IProduct>(
      `${SERVER_URL}/api/products`,
      { name, price, brand, category, countInStock, description, image },
      config
    );

    console.log({ productCreated: response });
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    errorCreateProduct.set(message);
  } finally {
    loadingCreateProduct.set(false);
  }
};

export const deleteProductRequest = async (id: string) => {
  errorDeleteProduct.set(undefined);
  loadingDeleteProduct.set(true);
  try {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    const response = await axios.delete<ProductListRequest>(
      `${SERVER_URL}/api/products/${id}`,
      config
    );

    console.log({ data: response.data });
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    errorDeleteProduct.set(message);
  } finally {
    loadingDeleteProduct.set(false);
  }
};

export const getProductRequest = async (
  id: string,
  ui: boolean = true
): Promise<IProduct | undefined> => {
  {
    ui && errorGetProduct.set(undefined);
  }
  {
    ui && loadingGetProduct.set(true);
  }
  try {
    const cachedProducts = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products') || '')
      : null;

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${user?.token}`,
    //   },
    // };

    // const response = await axios.get<IProduct>(
    //   `${SERVER_URL}/api/products/${id}`,
    //   config
    // );

    // {
    //   ui && productGetState.set(response?.data);
    // }
    if (cachedProducts) {
      const selected = cachedProducts.find(
        (prod: IProduct) => prod.uuid === id
      );
      productGetState.set(selected!);
      window.localStorage.setItem('selectedProductId', id);
      return selected;
    } else {
      fetch('/src/mocks/products.json')
        .then((response) => response.json())
        .then((data) => {
          const selected = data.find((prod: IProduct) => prod.uuid === id);
          productGetState.set(selected);
          window.localStorage.setItem('selectedProductId', id);
          return data;
        })
        .catch((error) => console.error('Error fetProductById: ', error));
    }
    //return response?.data;
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    {
      ui && errorGetProduct.set(message);
    }
    return undefined;
  } finally {
    loadingGetProduct.set(false);
  }
};

export const reviewProductRequest = async (
  id: string,
  rating: string,
  comment: string
): Promise<IProduct | undefined> => {
  errorReviewProduct.set(undefined);
  loadingReviewProduct.set(true);

  try {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    const response = await axios.post<IProduct>(
      `${SERVER_URL}/api/products/${id}/reviews`,
      { rating: Number(rating), comment },
      config
    );

    productReviewState.set(response?.data);

    return response?.data;
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    errorReviewProduct.set(message);

    return undefined;
  } finally {
    loadingReviewProduct.set(false);
  }
};
