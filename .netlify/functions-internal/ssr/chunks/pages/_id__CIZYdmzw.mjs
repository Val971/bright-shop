/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_BbK_17MB.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import 'kleur/colors';
import 'html-escaper';
import { useStore } from '@nanostores/react';
import { atom, map } from 'nanostores';
import axios from 'axios';
import 'react-paystack';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import 'clsx';
import { FaCartPlus } from 'react-icons/fa';

const Heading = ({ text, variant = "h1", textAlign = "left" }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    variant === "h1" && /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-3xl font-bold py-6 mx-auto", style: { textAlign }, children: text }),
    variant === "h2" && /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-2xl font-bold mx-auto", style: { textAlign }, children: text }),
    variant === "h3" && /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl mx-auto", style: { textAlign }, children: text })
  ] });
};

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/dev/Astro/bright-shop/node_modules/astro/components/ViewTransitions.astro", void 0);

const authInitialState = {
  id: "",
  name: "",
  email: "",
  isAdmin: false,
  token: ""
};
const loadingRegister = atom(false);
const errorRegister = atom(void 0);
const loadingLogin = atom(false);
const errorLogin = atom(void 0);
const authState = map(authInitialState);
const SERVER_URL = "http://localhost:5211";
const registerRequest = async (name, email, password) => {
  errorRegister.set(void 0);
  loadingRegister.set(true);
  try {
    const response = await axios.post(`${SERVER_URL}/api/users/register`, { name, email, password });
    authState.set({ ...authState.get(), ...response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorRegister.set(message);
  } finally {
    loadingRegister.set(false);
  }
};
const loginRequest = async (email, password) => {
  errorLogin.set(void 0);
  loadingLogin.set(true);
  try {
    const response = await axios.post(`${SERVER_URL}/api/users/login`, { email, password });
    authState.set({ ...authState.get(), ...response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorLogin.set(message);
  } finally {
    loadingLogin.set(false);
  }
};

const loadingProductList = atom(false);
const errorProductList = atom(void 0);
const productListState = map({
  page: 0,
  pages: 0,
  products: void 0
});
const loadingCreateProduct = atom(false);
const errorCreateProduct = atom(void 0);
const loadingDeleteProduct = atom(false);
const errorDeleteProduct = atom(void 0);
const loadingGetProduct = atom(false);
const errorGetProduct = atom(void 0);
const productGetState = map();
atom(false);
atom(void 0);
map();
const listProductRequest = async (keyword = "", pageNumber = "") => {
  errorProductList.set(void 0);
  loadingProductList.set(true);
  try {
    fetch("/src/mocks/products.json").then((response) => response.json()).then((data) => {
      window.localStorage.setItem("products", JSON.stringify(data));
      productListState.set({ ...productListState.get(), products: data });
    }).catch((error) => console.error("Error fetching products: ", error));
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorProductList.set(message);
  } finally {
    loadingProductList.set(false);
  }
};
const createProductRequest = async (name, price, brand, category, countInStock, description, image) => {
  errorCreateProduct.set(void 0);
  loadingCreateProduct.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.post(
      `${SERVER_URL}/api/products`,
      { name, price, brand, category, countInStock, description, image },
      config
    );
    console.log({ productCreated: response });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorCreateProduct.set(message);
  } finally {
    loadingCreateProduct.set(false);
  }
};
const deleteProductRequest = async (id) => {
  errorDeleteProduct.set(void 0);
  loadingDeleteProduct.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.delete(
      `${SERVER_URL}/api/products/${id}`,
      config
    );
    console.log({ data: response.data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorDeleteProduct.set(message);
  } finally {
    loadingDeleteProduct.set(false);
  }
};
const getProductRequest = async (id, ui = true) => {
  {
    ui && errorGetProduct.set(void 0);
  }
  {
    ui && loadingGetProduct.set(true);
  }
  try {
    const cachedProducts = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products") || "") : null;
    if (cachedProducts) {
      const selected = cachedProducts.find((prod) => prod._id === id);
      productGetState.set(selected);
      window.localStorage.setItem("selectedProductId", id);
      return selected;
    } else {
      fetch("/src/mocks/products.json").then((response) => response.json()).then((data) => {
        const selected = data.find((prod) => prod._id === id);
        productGetState.set(selected);
        window.localStorage.setItem("selectedProductId", id);
        return data;
      }).catch((error) => console.error("Error fetProductById: ", error));
    }
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    {
      ui && errorGetProduct.set(message);
    }
    return void 0;
  } finally {
    loadingGetProduct.set(false);
  }
};

const loadingAddCart = atom(false);
const errorAddCart = atom(void 0);
const cart = atom([]);
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};
const addToCart = async (id, qty, variation, isIncart = false) => {
  try {
    errorAddCart.set(void 0);
    loadingAddCart.set(true);
    const productResponse = await getProductRequest(id, false);
    if ((productResponse?.countInStock || 0) < qty || !productResponse?.countInStock) {
      console.log("Check the stock");
      throw new Error("Few items remaining... Reduce quantity");
    }
    let updatedCartItems;
    let updatedCartItem;
    let newCartItem;
    const cartItems = cart?.get() || [];
    const existingCartItem = cartItems?.filter(
      (item) => item._id === productResponse?._id
    );
    if (existingCartItem.length >= 1) {
      const exactItem = existingCartItem.find(
        (prod) => prod.variation === variation
      );
      if (exactItem) {
        updatedCartItem = {
          ...exactItem,
          qty: isIncart ? qty : qty + exactItem.qty
        };
        updatedCartItems = cartItems?.map(
          (cartItem) => cartItem?.id === exactItem.id ? updatedCartItem : cartItem
        );
      } else {
        newCartItem = {
          id: generateUniqueId(),
          _id: productResponse._id,
          image: productResponse?.image,
          name: productResponse?.name,
          price: productResponse?.price,
          qty,
          variation,
          countInStock: productResponse?.countInStock
        };
        updatedCartItems = [...cartItems, newCartItem];
      }
      cart.set(updatedCartItems);
    }
    if (existingCartItem.length === 0) {
      newCartItem = {
        id: generateUniqueId(),
        _id: productResponse._id,
        image: productResponse?.image,
        name: productResponse?.name,
        price: productResponse?.price,
        qty,
        variation,
        countInStock: productResponse?.countInStock
      };
      updatedCartItems = [...cartItems, newCartItem];
      cart.set(updatedCartItems);
    }
    localStorage.setItem("cart", JSON.stringify(cart?.get()));
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorAddCart.set(message);
  } finally {
    loadingAddCart.set(false);
  }
};
const removeFromCart = async (id) => {
  try {
    const cartItems = cart?.get() || [];
    const updatedCartItem = cartItems?.filter(
      (cartItem) => cartItem?.id !== id
    );
    cart.set(updatedCartItem);
    localStorage.setItem("cart", JSON.stringify(cart?.get()));
  } catch (error) {
    console.log({ RemoveFromCartError: error });
  } finally {
  }
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const user = useStore(authState);
  Boolean(user.token);
  Boolean(user.isAdmin);
  const cartItems = useStore(cart);
  useEffect(() => {
    const authStateStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    if (authStateStorage) {
      authState.set(authStateStorage);
    }
    const cartStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : null;
    if (cartStorage) {
      cart.set(cartStorage);
    }
    if (window.location.pathname === "/") {
      setIsHome(!isHome);
    }
  }, []);
  return /* @__PURE__ */ jsx("header", { className: `${isHome ? "bg-[#fff]" : "bg-[#F9F9F9]"}`, children: /* @__PURE__ */ jsxs("nav", { className: "flex justify-between cursor-pointer items-center w-[92%] p-4  mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-20", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "font-extrabold text-2xl", children: "Bright" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `nav-links ${openMenu ? "top-[9%]" : "top-[-100%]"} ${isHome ? "bg-[#fff]" : "bg-[#F9F9F9]"} duration-500 md:static z-20 h-full items-start md:items-center md:h-auto  absolute  md:min-h-fit min-h-[37vh] left-0  md:w-auto  w-full flex  px-5`,
          children: /* @__PURE__ */ jsxs("ul", { className: "flex w-full md:flex-row mt-10 md:mt-auto flex-col md:items-center md:gap-[4vw] gap-8 font-semibold text-4xl md:text-base", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-gray-500 ", href: "/products", children: "Store" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-gray-500", href: "/#about", children: "About Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#contact", className: "hover:text-gray-500", children: "Contact" }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx("img", { alt: "icon search", src: "/src/assets/search.png" }),
      /* @__PURE__ */ jsx("a", { href: "/account/", children: /* @__PURE__ */ jsx("img", { alt: "icon search", src: "/src/assets/account.png" }) }),
      /* @__PURE__ */ jsxs("a", { href: "/cart", className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative", children: [
          /* @__PURE__ */ jsx(FaCartPlus, { size: 20 }),
          " ",
          cartItems && cartItems?.length >= 1 && /* @__PURE__ */ jsx("span", { className: "absolute -right-1 -top-1 rounded-full bg-red-600 w-4 h-4  right text-white font-mono text-[10px]  leading-tight text-center flex justify-center items-center", children: cartItems.reduce((total, item) => total + item.qty, 0) }),
          " "
        ] }),
        "Cart"
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "text-3xl cursor-pointer md:hidden",
          onClick: () => setOpenMenu(!openMenu),
          alt: "icon menu",
          src: "/src/assets/menu.png"
        }
      )
    ] })
  ] }) });
};

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="px-4 divide-y bg-[#000] text-[#fff]"> <div class="container text-lg flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"> <div class="lg:w-1/3"> <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start"> <span class="self-center text-2xl font-semibold">Bright</span> </a> </div> <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4"> <div class="space-y-3"> <h3 class="tracking-wide uppercase dark:text-gray-900">
Products
</h3> <ul class="space-y-1"> <li> <a rel="noopener noreferrer" href="#">
Featured
</a> </li> <li> <a rel="noopener noreferrer" href="#">
Sérum
</a> </li> <li> <a rel="noopener noreferrer" href="#">
body wash
</a> </li> <li> <a rel="noopener noreferrer" href="#">
Oils
</a> </li> </ul> </div> <div class="space-y-3"> <h3 class="tracking-wide uppercase dark:text-gray-900">
Company
</h3> <ul class="space-y-1"> <li> <a rel="noopener noreferrer" href="#">
Privacy
</a> </li> <li> <a rel="noopener noreferrer" href="#">
Terms of Service
</a> </li> </ul> </div> <div class="space-y-3"> <h3 class="uppercase dark:text-gray-900">Developers</h3> <ul class="space-y-1"> <li> <a rel="noopener noreferrer" href="#">
Contact
</a> </li> <li> <a rel="noopener noreferrer" href="#">
About Us
</a> </li> </ul> </div> <div class="space-y-3"> <div class="uppercase dark:text-gray-900">Social media</div> <div class="flex justify-start space-x-3"> <a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current"> <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path> </svg> </a> <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current"> <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path> </svg> </a> <a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current"> <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path> </svg> </a> </div> </div> </div> </div> <div class="py-6 text-sm text-center dark:text-gray-600">
© 1968 Company Co. All rights reserved.
</div> </footer>`;
}, "C:/dev/Astro/bright-shop/src/layouts/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-[#F9F9F9]"> <div> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/layouts/Header", "client:component-export": "Header" })} <div${addAttribute({ minHeight: "calc(100vh - 130px)" }, "style")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/dev/Astro/bright-shop/src/layouts/Layout.astro", void 0);

const loadingPlaceOrder = atom(false);
const errorPlaceOrder = atom(void 0);
const loadingGetOrder = atom(false);
const errorGetOrder = atom(void 0);
const orderGetState = map();
const loadingPay = atom(false);
const errorPay = atom(void 0);
map();
const loadingDelivery = atom(false);
const errorDelivery = atom(void 0);
const loadingOrderList = atom(false);
const errorOrderList = atom(void 0);
const orderListState = atom([]);
const loadingMyOrderList = atom(false);
const errorMyOrderList = atom(void 0);
const myOrderListState = atom([]);
const placeOrderRequest = async (orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, totalPrice, shippingPrice) => {
  errorPlaceOrder.set(void 0);
  loadingPlaceOrder.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.post(
      `${SERVER_URL}/api/orders`,
      {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,
        shippingPrice
      },
      config
    );
    localStorage.removeItem("cart");
    window.location.href = `/order/${response?.data?._id}`;
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorPlaceOrder.set(message);
  } finally {
    loadingPlaceOrder.set(false);
  }
};
const getOrderDetailsRequest = async (id) => {
  errorGetOrder.set(void 0);
  loadingGetOrder.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.get(`${SERVER_URL}/api/orders/${id}`, config);
    orderGetState.set(response.data);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorGetOrder.set(message);
  } finally {
    loadingGetOrder.set(false);
  }
};
const payRequest = async (id, paymentResult) => {
  errorPay.set(void 0);
  loadingPay.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.put(`${SERVER_URL}/api/orders/${id}/pay`, paymentResult, config);
    console.log({ response });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorPay.set(message);
  } finally {
    loadingPay.set(false);
  }
};
const deliveryRequest = async (id) => {
  errorDelivery.set(void 0);
  loadingDelivery.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.put(`${SERVER_URL}/api/orders/${id}/deliver`, {}, config);
    console.log({ response });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorDelivery.set(message);
  } finally {
    loadingDelivery.set(false);
  }
};
const listOrdersRequest = async () => {
  errorOrderList.set(void 0);
  loadingOrderList.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.get(`${SERVER_URL}/api/orders`, config);
    console.log({ hhh: response });
    orderListState.set(response.data);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorOrderList.set(message);
  } finally {
    loadingOrderList.set(false);
  }
};
const listMyOrdersRequest = async () => {
  errorMyOrderList.set(void 0);
  loadingMyOrderList.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.get(`${SERVER_URL}/api/orders/myorders`, config);
    console.log({ hhh: response });
    myOrderListState.set(response.data);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorMyOrderList.set(message);
  } finally {
    loadingMyOrderList.set(false);
  }
};

const Loader = ({ variant }) => {
  if (variant === "small") {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500 border-solid" }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid" }) });
};

const Button = ({
  children,
  loading,
  size = "large",
  onClick,
  type = "submit",
  disabled
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      onClick,
      className: "bg-black text-white px-5 py-2 text-lg md:text-xl font-medium w-full max-w-[250px] flex gap-3 justify-center mt-8 cursor-pointer hover:bg-slate-800",
      children: [
        children,
        " ",
        loading && /* @__PURE__ */ jsx(Loader, { variant: "small" })
      ]
    }
  );
};

const Message = ({ variant, children }) => {
  if (variant === "secondary") {
    return /* @__PURE__ */ jsx("div", { className: "bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative my-2", role: "alert", children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children }) });
  }
  if (variant === "danger") {
    return /* @__PURE__ */ jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-2", role: "alert", children: [
      /* @__PURE__ */ jsx("strong", { className: "font-bold mr-3", children: "Error!" }),
      /* @__PURE__ */ jsx("span", { className: "block sm:inline", children })
    ] });
  }
  if (variant === "info") {
    return /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-300 text-blue-600 px-4 py-3 rounded relative my-2", role: "alert", children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-2", role: "alert", children: [
    /* @__PURE__ */ jsx("strong", { className: "font-bold mr-3", children: "Successful!" }),
    /* @__PURE__ */ jsx("span", { className: "block sm:inline", children })
  ] });
};

const Select = ({
  value,
  onChange,
  name = "count in stock",
  length,
  maxWidth = "100px"
}) => {
  return /* @__PURE__ */ jsx(
    "select",
    {
      name,
      onChange,
      value,
      className: "border-2 border-slate-400 p-2 rounded-lg w-full",
      style: { maxWidth },
      children: [...Array.from({ length }).keys()].map((num) => {
        return /* @__PURE__ */ jsx("option", { value: num + 1, children: num + 1 }, num);
      })
    }
  );
};

const PaymentProcessor = ({ amount, onPlaceOrder }) => {
  const user = useStore(authState);
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  ({
    reference: (/* @__PURE__ */ new Date()).getTime().toString(),
    email: user?.email,
    amount: amount * 100,
    //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test"
  });
  useCallback((reference) => {
    onPlaceOrder({
      message: reference?.message,
      reference: reference?.reference,
      status: reference?.status,
      transactionId: reference?.transaction
    });
  }, []);
  const handleMockSuccessAction = useCallback(() => {
    onPlaceOrder({
      message: "Approved",
      reference: "Mock-1234",
      status: "success",
      transactionId: "Mock-1234"
    });
  }, []);
  useCallback(() => {
    console.log("closed");
  }, []);
  useEffect(() => {
    const paymentMethodStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod") || "") : null;
    if (paymentMethodStorage) {
      setPaymentMethod(paymentMethodStorage?.paymentMethod);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { children: paymentMethod === "paystack" && /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleMockSuccessAction,
      className: "bg-slate-900 text-white rounded-2xl px-5 py-2 text-lg md:text-xl font-medium w-full  flex gap-3 justify-center cursor-pointer hover:bg-slate-800",
      children: "Make payment"
    }
  ) });
};

const OrderDetails = ({ id }) => {
  const loadingOrder = useStore(loadingGetOrder);
  const errorOrder = useStore(errorGetOrder);
  const order = useStore(orderGetState);
  const user = useStore(authState);
  const isAdminLoggedIn = Boolean(user.isAdmin);
  const loadingPayment = useStore(loadingPay);
  const errorPayment = useStore(errorPay);
  const loadingDeliver = useStore(loadingDelivery);
  const errorDeliver = useStore(errorDelivery);
  const handleUpdatePaymentStatus = useCallback(
    async (paymentResult) => {
      payRequest(id, paymentResult).then(() => {
        getOrderDetailsRequest(id);
      });
    },
    [id]
  );
  const handleUpdateDeliveryStatus = useCallback(async () => {
    deliveryRequest(id).then(() => {
      getOrderDetailsRequest(id);
    });
  }, [id]);
  useEffect(() => {
    getOrderDetailsRequest(id);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "max-w-[1000px] mx-auto", children: [
    errorOrder && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorOrder }),
    loadingOrder && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    /* @__PURE__ */ jsx(Heading, { text: `Order Details: ${order?._id}`, variant: "h1", textAlign: "center" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx(Heading, { text: "Shipping", variant: "h2" }),
          /* @__PURE__ */ jsxs("p", { className: "py-4 text-gray-600", children: [
            /* @__PURE__ */ jsx("strong", { children: "Name: " }),
            " ",
            order?.user?.name
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "pb-4 text-gray-600", children: [
            /* @__PURE__ */ jsx("strong", { children: "Email: " }),
            " ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${order?.user?.email}`, children: order?.user?.email })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "pb-4 text-gray-600", children: [
            /* @__PURE__ */ jsx("strong", { children: "Address:" }),
            order?.shippingAddress?.address,
            ", ",
            order?.shippingAddress?.city,
            " ",
            order?.shippingAddress?.postalCode,
            ",",
            " ",
            order?.shippingAddress?.country
          ] }),
          order?.isDelivered ? /* @__PURE__ */ jsx(Message, { variant: "success", children: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Delivered on ",
            order?.deliveredAt
          ] }) }) : /* @__PURE__ */ jsx(Message, { variant: "secondary", children: "Not Delivered" })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "mt-8", children: [
          /* @__PURE__ */ jsx(Heading, { text: "Payment Method", variant: "h2" }),
          /* @__PURE__ */ jsxs("p", { className: "capitalize", children: [
            /* @__PURE__ */ jsx("strong", { children: "Method: " }),
            order.paymentMethod
          ] }),
          order.isPaid ? /* @__PURE__ */ jsx(Message, { variant: "success", children: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Paid on ",
            order.paidAt
          ] }) }) : /* @__PURE__ */ jsx(Message, { variant: "secondary", children: "Not Paid" })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "mt-8", children: [
          !order?.orderItems?.length && /* @__PURE__ */ jsx(Message, { variant: "danger", children: "You have no order items" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            !order?.orderItems?.length && /* @__PURE__ */ jsx(Message, { variant: "danger", children: "You have no order items" }),
            order?.orderItems?.map((orderItem, index) => {
              return /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-end", children: [
                /* @__PURE__ */ jsx("div", { style: { width: "100px", height: "100px" }, children: /* @__PURE__ */ jsx("img", { src: orderItem?.image, alt: orderItem?.name, className: "w-full h-full object-cover" }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: `/product/${orderItem?.product}`, children: orderItem?.name }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
                  orderItem?.qty,
                  " x $",
                  orderItem.price,
                  " = $",
                  orderItem?.qty * orderItem?.price
                ] }) })
              ] }, `${orderItem?.name}${index}`);
            })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(Heading, { text: "Order Summary", variant: "h2" }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-[300px] border-2 mt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-600 flex justify-between items-center border-b-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Items Price:" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "$",
              order?.itemsPrice
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-600  flex justify-between items-center  border-b-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Shipping fee:" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "$",
              order?.shippingPrice
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-600 flex justify-between items-center  border-b-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Tax:" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "$",
              order?.taxPrice
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-600 flex justify-between items-center  border-b-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Total Price" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "$",
              order?.totalPrice
            ] })
          ] }),
          errorPayment && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorPayment }),
          loadingPayment && /* @__PURE__ */ jsx(Loader, { variant: "small" }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-600 flex justify-between items-center  border-b-2", children: [
            order?.isPaid ? /* @__PURE__ */ jsx("p", { children: "Payment Status:" }) : null,
            /* @__PURE__ */ jsx("p", { className: !order?.isPaid ? "flex-1" : "", children: order?.isPaid ? "Paid" : /* @__PURE__ */ jsx(PaymentProcessor, { amount: order?.totalPrice, onPlaceOrder: handleUpdatePaymentStatus }) })
          ] }),
          errorDeliver && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorDeliver }),
          loadingDeliver && /* @__PURE__ */ jsx(Loader, { variant: "small" }),
          isAdminLoggedIn && /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-600 flex justify-between items-center  border-b-2", children: [
            order?.isDelivered ? /* @__PURE__ */ jsx("p", { children: "Delivery Status:" }) : null,
            /* @__PURE__ */ jsx("p", { className: !order?.isDelivered ? "flex-1" : "", children: order?.isDelivered ? "Delivered" : /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleUpdateDeliveryStatus,
                className: "bg-slate-900 text-white rounded-2xl px-5 py-2 text-lg md:text-xl font-medium w-full  flex gap-3 justify-center cursor-pointer hover:bg-slate-800",
                disabled: !order?.isPaid || order?.isDelivered,
                children: "Mark As Delivered"
              }
            ) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const id = Astro2.url?.pathname?.split("/")[2];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Order", "description": "Manage Order" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto px-4"> ${renderComponent($$result2, "OrderDetails", OrderDetails, { "client:load": true, "id": id || "", "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/OrderDetails", "client:component-export": "OrderDetails" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/order/[id].astro", void 0);

const $$file$1 = "C:/dev/Astro/bright-shop/src/pages/order/[id].astro";
const $$url$1 = "/order/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Breadcrumb = ({ items }) => {
  return /* @__PURE__ */ jsx("ol", { className: "list-none p-0", children: items.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "inline-block text-sm font-thin", children: [
    /* @__PURE__ */ jsx("a", { href: item.url, className: " hover:underline", children: item.label }),
    index !== items.length - 1 && /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" })
  ] }, index)) });
};

const Rating = ({ value, text }) => {
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex  text-yellow-500", children: [
      value >= 1 ? /* @__PURE__ */ jsx(IoMdStar, { size: 20 }) : value >= 0.5 ? /* @__PURE__ */ jsx(IoMdStarHalf, { size: 20 }) : /* @__PURE__ */ jsx(IoMdStarOutline, { size: 20 }),
      value >= 2 ? /* @__PURE__ */ jsx(IoMdStar, { size: 20 }) : value >= 1.5 ? /* @__PURE__ */ jsx(IoMdStarHalf, { size: 20 }) : /* @__PURE__ */ jsx(IoMdStarOutline, { size: 20 }),
      value >= 3 ? /* @__PURE__ */ jsx(IoMdStar, { size: 20 }) : value >= 2.5 ? /* @__PURE__ */ jsx(IoMdStarHalf, { size: 20 }) : /* @__PURE__ */ jsx(IoMdStarOutline, { size: 20 }),
      value >= 4 ? /* @__PURE__ */ jsx(IoMdStar, { size: 20 }) : value >= 3.5 ? /* @__PURE__ */ jsx(IoMdStarHalf, { size: 20 }) : /* @__PURE__ */ jsx(IoMdStarOutline, { size: 20 }),
      value >= 5 ? /* @__PURE__ */ jsx(IoMdStar, { size: 20 }) : value >= 4.5 ? /* @__PURE__ */ jsx(IoMdStarHalf, { size: 20 }) : /* @__PURE__ */ jsx(IoMdStarOutline, { size: 20 })
    ] }),
    text && /* @__PURE__ */ jsx("span", { className: "text-sm block pl-1 capitalize", children: text })
  ] });
};

const MyComponent = [
  { label: "Home", url: "/" },
  { label: "Store", url: "/products" }
];
const ProductDetails = ({ id }) => {
  const [qty, setQty] = useState("1");
  const loadingProduct = useStore(loadingGetProduct);
  const errorProduct = useStore(errorGetProduct);
  const product = useStore(productGetState);
  product?.rating;
  product?.reviews?.length;
  const cartItems = useStore(cart);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm();
  const handleAddToCart = useCallback(async () => {
    const formValues = getValues();
    const name = formValues.variation;
    console.log(name);
    await addToCart(id, Number(formValues.quantity), formValues.variation);
  }, []);
  useEffect(() => {
    getProductRequest(id);
  }, [id]);
  useEffect(() => {
    const cartItem = cartItems?.find((cartItem2) => cartItem2?.id === id);
    setQty(cartItem?.qty || 1);
  }, [cartItems]);
  return /* @__PURE__ */ jsxs("section", { children: [
    errorProduct && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorProduct }),
    loadingProduct && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-4", children: [
      /* @__PURE__ */ jsxs("article", { children: [
        product && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            width: 500,
            src: product.image,
            alt: product.name,
            className: " p-4 object-cover transition-transform duration-300 transform hover:scale-110"
          }
        ) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl  pt-6 pb-2 mx-auto uppercase", children: "Customer Reviews" }),
        !product?.reviews?.length && /* @__PURE__ */ jsx(Message, { variant: "info", children: "There are no Reviews" }),
        product?.reviews?.map((review, index) => {
          return /* @__PURE__ */ jsxs("div", { className: "border-2 mb-4 p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: review?.name }),
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Rating, { text: "", value: review?.rating }) })
            ] }),
            /* @__PURE__ */ jsx("p", { children: review?.comment })
          ] }, index);
        })
      ] }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xl md:text-2xl font-bold flex flex-col  mx-auto border px-4 pt-4 pb-8 uppercase", children: [
          /* @__PURE__ */ jsx(Breadcrumb, { items: MyComponent }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-bold pt-4 pb-2 ", children: product?.name })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(handleAddToCart), children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm flex gap-3 capitalize mx-auto border border-t-0 px-4 pt-4 pb-3", children: product && product.size && product?.size.map((size, index) => {
            return /* @__PURE__ */ jsxs("div", { children: [
              errors.variation && /* @__PURE__ */ jsx("p", { children: "Please a variation is required" }),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: size.value,
                  className: "inline-flex items-center border-[1px] border-[#c6c6c6] px-5 self-center p-5 cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:shadow-sm has-[:checked]:text-white has-[:checked]:bg-slate-800 ",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        required: true,
                        id: size.value,
                        ...register("variation"),
                        type: "radio",
                        className: " hidden form-radio text-blue-500 h-4 w-4",
                        value: size.value
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: ``, children: size.value })
                  ]
                }
              )
            ] }, index);
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "block font-bold text-xl  capitalize mx-auto border border-t-0 px-4 pt-4 pb-3", children: [
            "Price: $",
            product?.price
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm flex gap-4   mx-auto border border-t-0 px-4 pt-4 pb-3", children: [
            "Status: ",
            product?.countInStock ? "In Stock" : "Out of Stock"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm flex gap-4 items-center  mx-auto border border-t-0 px-4 pt-4 pb-3", children: [
            "Quantity:",
            /* @__PURE__ */ jsxs(
              "select",
              {
                ...register("quantity"),
                onChange: (e) => setQty(e.target.value),
                value: qty,
                className: "border-2 border-slate-400 p-2 rounded-lg w-full",
                style: { maxWidth: "100px" },
                children: [
                  /* @__PURE__ */ jsx("option", { value: 1, children: 1 }, 1),
                  [...Array.from({ length: product?.countInStock }).keys()].map(
                    (num) => {
                      const number = num + 1;
                      return /* @__PURE__ */ jsx("option", { value: number + 1, children: number + 1 }, number);
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm block  mx-auto border border-t-0 px-4 pt-4 pb-3", children: [
            "Description: ",
            product?.description
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm flex gap-4   mx-auto border border-t-0 px-4 pb-3 justify-center", children: /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", children: "ADD TO CART" }) })
        ] })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.url?.pathname?.split("/")[2];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Products", "description": "Manage products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1500px] mx-auto "> ${renderComponent($$result2, "ProductDetails", ProductDetails, { "client:load": true, "id": id || "", "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/ProductDetails", "client:component-export": "ProductDetails" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/product/[id].astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, errorCreateProduct as A, Button as B, loadingCreateProduct as C, createProductRequest as D, loadingDeleteProduct as E, errorDeleteProduct as F, deleteProductRequest as G, Heading as H, loadingRegister as I, errorRegister as J, registerRequest as K, Loader as L, Message as M, _id_ as N, SERVER_URL as S, _id_$1 as _, listMyOrdersRequest as a, addToCart as b, Select as c, cart as d, errorMyOrderList as e, Breadcrumb as f, loadingPlaceOrder as g, errorPlaceOrder as h, loadingProductList as i, errorProductList as j, productListState as k, loadingMyOrderList as l, myOrderListState as m, listProductRequest as n, loadingLogin as o, placeOrderRequest as p, errorLogin as q, removeFromCart as r, loginRequest as s, loadingDelivery as t, errorDelivery as u, loadingOrderList as v, errorOrderList as w, orderListState as x, deliveryRequest as y, listOrdersRequest as z };
