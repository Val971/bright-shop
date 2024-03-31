/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { H as Heading, B as Button, d as cart, g as loadingPlaceOrder, h as errorPlaceOrder, p as placeOrderRequest, L as Loader, M as Message, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useStore } from '@nanostores/react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const handleSavePaymentMethod = useCallback((e) => {
    e.preventDefault();
    localStorage.setItem("paymentMethod", JSON.stringify({ paymentMethod }));
    window.location.replace("/checkout?segment=place-order");
  }, []);
  useEffect(() => {
    const paymentMethodStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod") || "") : null;
    if (paymentMethodStorage) {
      setPaymentMethod(paymentMethodStorage?.paymentMethod);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSavePaymentMethod, className: "max-w-[500px] mx-auto py-6 pb-28", children: [
    /* @__PURE__ */ jsx(Heading, { text: "Payment Method", variant: "h3" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "paystack", children: "Paystack:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          name: "paymentMethod",
          id: "paystack",
          required: true,
          className: "border-2 border-slate-400 p-2 rounded-lg",
          value: "paystack",
          checked: paymentMethod === "paystack",
          onChange: (e) => {
            setPaymentMethod(e.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "paypal", children: "Paypal:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          name: "paymentMethod",
          id: "paypal",
          className: "border-2 border-slate-400 p-2 rounded-lg",
          value: "paypal",
          checked: paymentMethod === "paypal",
          disabled: true,
          onChange: (e) => {
            setPaymentMethod(e.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Button, { children: "Save" })
  ] }) });
};

const formatWithDecimals = (value) => {
  return (Math.round(value * 100) / 100).toFixed(2);
};
const PlaceOrder = () => {
  const cartItems = useStore(cart);
  const loading = useStore(loadingPlaceOrder);
  const error = useStore(errorPlaceOrder);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const priceSummation = useMemo(() => {
    const itemsPrice = formatWithDecimals(
      (cartItems || [])?.reduce((cummulation, item) => cummulation + item.price * item.qty, 0)
    );
    const shippingFee = 50;
    const taxFee = 0;
    const totalPrice = formatWithDecimals(Number(itemsPrice) + Number(shippingFee) + Number(taxFee));
    return {
      itemsPrice,
      shippingFee,
      taxFee,
      totalPrice
    };
  }, [cartItems]);
  const handlePlaceOrder = useCallback(async () => {
    if (!address || !city || !postalCode || !country || !paymentMethod) {
      return;
    }
    const shippingAddress = { address, city, postalCode, country };
    await placeOrderRequest(
      cartItems || [],
      shippingAddress,
      paymentMethod,
      Number(priceSummation?.itemsPrice),
      priceSummation?.taxFee,
      Number(priceSummation?.totalPrice),
      priceSummation?.shippingFee
    );
  }, [address, city, postalCode, country, paymentMethod, priceSummation, cartItems]);
  useEffect(() => {
    const shippingStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress") || "") : null;
    if (shippingStorage) {
      setAddress(shippingStorage?.address);
      setCity(shippingStorage?.city);
      setPostalCode(shippingStorage?.postalCode);
      setCountry(shippingStorage?.country);
    }
    const paymentMethodStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod") || "") : null;
    if (paymentMethodStorage) {
      setPaymentMethod(paymentMethodStorage?.paymentMethod);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[900px] mx-auto py-6 pb-28", children: [
    loading && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    error && /* @__PURE__ */ jsx(Message, { variant: "danger", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6 justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[500px] flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b-2 p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl  pt-6 pb-2 mx-auto uppercase text-gray-700", children: "Shipping Address " }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
            address,
            ", ",
            postalCode,
            ", ",
            city,
            ", ",
            country,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-b-2 p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl  pt-6 pb-2 mx-auto uppercase text-gray-700", children: "Payment Method " }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 capitalize", children: paymentMethod })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-b-2 p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl  pt-6 pb-2 mx-auto uppercase text-gray-700", children: "Order Items " }),
          cartItems?.map((cartItem, index) => /* @__PURE__ */ jsx(PlaceOrderItem, { cartItem }, `${cartItem?.name}${index}`))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-[400px] py-6", children: [
        /* @__PURE__ */ jsx("div", { className: "  text-gray-700", children: /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl border-2   pb-2 mx-auto uppercase text-gray-700  p-4", children: "Order Summary" }) }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-t-0 flex justify-between text-gray-600 p-2 py-4", children: [
          /* @__PURE__ */ jsx("p", { children: "Items Price:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-left", children: [
            "$",
            priceSummation?.itemsPrice
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-t-0 flex justify-between text-gray-600 p-2 py-4", children: [
          /* @__PURE__ */ jsx("p", { children: "Shipping fee:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-left", children: [
            "$",
            priceSummation?.shippingFee
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-t-0 flex justify-between text-gray-600 p-2 py-4", children: [
          /* @__PURE__ */ jsx("p", { children: "Tax fee:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-left", children: [
            "$",
            priceSummation?.taxFee
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-t-0 flex justify-between text-gray-600 p-2 py-4", children: [
          /* @__PURE__ */ jsx("p", { children: "Total fee:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-left", children: [
            "$",
            priceSummation?.totalPrice
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm flex gap-4   mx-auto border-2 border-t-0 px-4 pb-3 justify-center", children: /* @__PURE__ */ jsxs(
          Button,
          {
            size: "small",
            type: "button",
            disabled: !address || !city || !postalCode || !country || !paymentMethod || loading,
            onClick: handlePlaceOrder,
            children: [
              "Place Order ",
              loading && /* @__PURE__ */ jsx(Loader, { variant: "small" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
};
const PlaceOrderItem = ({ cartItem }) => {
  return /* @__PURE__ */ jsxs("div", { className: "text-gray-600 flex justify-between mb-4 items-end", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { style: { width: "50px" }, children: /* @__PURE__ */ jsx("img", { src: cartItem?.image, className: "w-full h-full object-cover" }) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: cartItem?.name }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      cartItem?.qty,
      " x $",
      cartItem?.price,
      " = $",
      cartItem?.qty * cartItem?.price
    ] })
  ] });
};

const Shipping = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const handleSaveShippingAddress = useCallback(
    (e) => {
      e.preventDefault();
      localStorage.setItem("shippingAddress", JSON.stringify({ address, city, postalCode, country }));
      window.location.replace("/checkout?segment=payment");
    },
    [address, city, postalCode, country]
  );
  useEffect(() => {
    const shippingStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress") || "") : null;
    if (shippingStorage) {
      setAddress(shippingStorage?.address);
      setCity(shippingStorage?.city);
      setPostalCode(shippingStorage?.postalCode);
      setCountry(shippingStorage?.country);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSaveShippingAddress, className: "max-w-[500px] mx-auto py-6 pb-28", children: [
    /* @__PURE__ */ jsx(Heading, { text: "Shipping Address", variant: "h3" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "address", children: "Address:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "address",
          id: "address",
          required: true,
          placeholder: "Enter address",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: address,
          onChange: (e) => {
            setAddress(e.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "city", children: "City:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "city",
          id: "city",
          required: true,
          placeholder: "Enter city",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: city,
          onChange: (e) => {
            setCity(e.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "postalCode", children: "Postal Code" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "postalCode",
          id: "postalCode",
          required: true,
          placeholder: "Enter postal Code",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: postalCode,
          onChange: (e) => {
            setPostalCode(e.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "country", children: "Country" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "country",
          id: "country",
          required: true,
          placeholder: "Enter country",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: country,
          onChange: (e) => {
            setCountry(e.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Button, { children: "Save" })
  ] }) });
};

const CheckoutCart = ({ segment }) => {
  return /* @__PURE__ */ jsxs("section", { className: "px-4 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6 mb-8", children: [
      /* @__PURE__ */ jsx("a", { href: "/checkout?segment=shipping", className: segment !== "shipping" ? "text-gray-500" : "text-gray-800", children: "Shipping" }),
      /* @__PURE__ */ jsx("a", { href: "/checkout?segment=payment", className: segment !== "payment" ? "text-gray-500" : "text-gray-800", children: "Payment" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/checkout?segment=place-order",
          className: segment !== "place-order" ? "text-gray-500" : "text-gray-800",
          children: "Place Order"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      segment === "shipping" && /* @__PURE__ */ jsx(Shipping, {}),
      segment === "payment" && /* @__PURE__ */ jsx(Payment, {}),
      segment === "place-order" && /* @__PURE__ */ jsx(PlaceOrder, {})
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const segment = Astro2.url?.search?.split("=")[1] || "shipping";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout ", "description": "Checkout" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "Checkout", "variant": "h1", "textAlign": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Heading", "client:component-export": "Heading" })} ${renderComponent($$result2, "CheckoutCart", CheckoutCart, { "segment": segment, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/CheckoutCart", "client:component-export": "CheckoutCart" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/checkout.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/checkout.astro";
const $$url = "/checkout";

export { $$Checkout as default, $$file as file, $$url as url };
