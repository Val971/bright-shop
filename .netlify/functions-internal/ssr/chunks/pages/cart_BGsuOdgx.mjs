/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as addToCart, r as removeFromCart, c as Select, d as cart, M as Message, H as Heading, f as Breadcrumb, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState, useCallback, useMemo } from 'react';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({
  image,
  name,
  price,
  variation,
  id,
  qty,
  _id,
  countInStock
}) => {
  const [quantity, setQuantity] = useState(qty);
  const handleCartQuantityUpdate = useCallback(async (quantity2) => {
    await addToCart(_id, Number(quantity2), variation, true);
  }, []);
  const handleRemoveFromCart = useCallback(async () => {
    await removeFromCart(id);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "mx-auto p-4 b", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-center  w-full  flex-row", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-[100px] h-[100px] ", children: /* @__PURE__ */ jsx("img", { src: image, className: "w-[100px] h-[100px] object-cover" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "whitespace-nowrap", children: /* @__PURE__ */ jsx("a", { href: `/product/${_id}`, children: /* @__PURE__ */ jsx("p", { children: name }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: variation }),
        /* @__PURE__ */ jsxs("p", { className: "font-bold", children: [
          "$",
          price
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full min-w-[120px] mx-auto flex justify-center", children: /* @__PURE__ */ jsx(
          Select,
          {
            length: countInStock,
            onChange: (e) => {
              handleCartQuantityUpdate(e.target.value);
              setQuantity(e.target.value);
            },
            value: quantity,
            maxWidth: "120px"
          }
        ) }),
        /* @__PURE__ */ jsx(
          FaTrash,
          {
            className: "text-gray-700 cursor-pointer",
            size: 20,
            onClick: handleRemoveFromCart
          }
        )
      ] })
    ] })
  ] }) });
};

const MyComponent = [
  { label: "Home", url: "/" },
  { label: "Store", url: "/products" },
  { label: "Shopping cart", url: "/cart" }
];
const CartList = () => {
  const cartItems = useStore(cart);
  useMemo(() => {
    return cartItems?.reduce((cummulation, item) => cummulation + item.qty, 0);
  }, [cartItems]);
  const subTotalAmount = useMemo(() => {
    return cartItems?.reduce(
      (cummulation, item) => cummulation + item.qty * item.price,
      0
    ).toFixed(2);
  }, [cartItems]);
  return /* @__PURE__ */ jsxs("section", { className: "p-6", children: [
    !cartItems?.length && /* @__PURE__ */ jsxs(Message, { variant: "secondary", children: [
      "You have selected no items",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/", className: "underline text-blue-500", children: "Go Home" })
    ] }),
    cartItems && cartItems?.length >= 1 && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full mx-auto max-w-[600px]", children: [
        /* @__PURE__ */ jsx(Heading, { text: "Shopping cart", variant: "h1", textAlign: "left" }),
        /* @__PURE__ */ jsx(Breadcrumb, { items: MyComponent }),
        cartItems?.map((cartItem) => {
          return /* @__PURE__ */ jsx(
            CartItem,
            {
              _id: cartItem._id,
              variation: cartItem.variation,
              countInStock: cartItem?.countInStock,
              image: cartItem?.image,
              name: cartItem?.name,
              price: cartItem?.price,
              id: cartItem?.id,
              qty: cartItem?.qty
            },
            cartItem.id
          );
        }),
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-5", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold md:text-2xl  pb-2 uppercase", children: "Total" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xl flex font-bold gap-4  pt-4 pb-3", children: [
            "$",
            subTotalAmount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 mx-auto py-4", children: [
        /* @__PURE__ */ jsx(Heading, { text: "Checkout", variant: "h1", textAlign: "left" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx("p", { children: "Enter your email address. This address will be used to send you order status updates." }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: " border-black text-black bg-lightPink border-[1px] p-2.5 w-full min-w-[12rem]",
              placeholder: "Enter your email"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => void 0,
              className: "bg-black p-3 min-w-[9rem] text-[#fff] w-full",
              children: "PROCEED TO CHECKOUT"
            }
          )
        ] })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cart Items", "description": "Cart Items" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1500px] mx-auto "> ${renderComponent($$result2, "CartList", CartList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/CartList", "client:component-export": "CartList" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/cart.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/cart.astro";
const $$url = "/cart";

export { $$Cart as default, $$file as file, $$url as url };
