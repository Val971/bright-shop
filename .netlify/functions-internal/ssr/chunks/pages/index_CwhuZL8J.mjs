/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { i as loadingProductList, j as errorProductList, k as productListState, n as listProductRequest, L as Loader, M as Message, $ as $$Layout } from './_id__CIZYdmzw.mjs';

const Hero = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "bg-lightPink md:h-screen flex flex-col-reverse md:flex-row px-8 md:px-20 justify-center gap-10 items-center py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 w-full md:w-auto  ", children: [
      /* @__PURE__ */ jsxs("div", { className: " flex flex-col", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl", children: "Your " }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl", children: " beautiful " }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl", children: " morning" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "w-60 md:text-md", children: "Perfect your skin care routine with our body and facial products." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/products",
            className: "bg-black p-3 min-w-[9rem] text-center text-[#fff]",
            children: "Shop Now"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#contact",
            className: "border-black border-[1px] text-center p-2.5 min-w-[12rem]",
            children: "Ask Us Anything"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        motion.img,
        {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.5 },
          alt: "hero image",
          className: "absolute z-10 mt-44 ml-8 md:mt-40 lg:mt-72 w-72 md:w-96 lg:w-auto",
          src: `../../src/assets/HeroProduct1.png`
        }
      ),
      /* @__PURE__ */ jsx(
        motion.img,
        {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 },
          alt: "hero image",
          className: "absolute ml-10 z-10 mt-5 md:top-60 md:right-96 lg:top-32 md:ml-auto w-72 md:w-96 lg:w-auto",
          src: `../../src/assets/HeroProduct2.png`
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "hero image",
          className: `${animation ? "opacity-1" : "opacity-0"} w-[45rem] z-0 object-cover h-full transition-opacity duration-1000`,
          src: `../../src/assets/herobg.png`
        }
      )
    ] })
  ] });
};

const Featured = () => {
  const loading = useStore(loadingProductList);
  const error = useStore(errorProductList);
  const productList = useStore(productListState);
  useEffect(() => {
    listProductRequest();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "bg-lightPink px-8 flex flex-col gap-16 py-20 items-center", children: [
    loading && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    error && /* @__PURE__ */ jsx(Message, { variant: "danger", children: error }),
    /* @__PURE__ */ jsx("h2", { className: " text-3xl md:text-4xl", children: "Featured Products" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-20 ", children: productList.products?.filter((product) => product.featured).map((prod) => {
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/product/${prod._id}`,
          className: "flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "mb-5 rounded-full h-32 ",
                alt: "article 1",
                src: prod.image
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: prod.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
              "$",
              prod.price
            ] })
          ]
        },
        prod._id
      );
    }) })
  ] });
};

function TestimonialBanner() {
  return /* @__PURE__ */ jsx("div", { className: "h-20 bg-black", children: "TestimonialBanner" });
}

function Newsletter() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#FCF9F8] justify-center  flex flex-col-reverse md:flex-row  py-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-lightPink p-8 flex flex-col gap-5 text-lg md:max-w-[32rem]", children: [
      /* @__PURE__ */ jsx("h2", { className: " text-3xl md:text-4xl", children: "Even better with subscription" }),
      /* @__PURE__ */ jsx("p", { children: "Take care of your skin, and we will make sure that your care is permanent. Choose a suitable subscription plan and we will deliver your toner monthly or quarterly depending on your choice. You’ll also be the first to receive test samples of our new products when you sign up for an annual subscription, absolutely free of charge." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5 ", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: " border-black text-black bg-lightPink border-[1px] p-2.5 min-w-[12rem]",
            placeholder: "Enter your email"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "bg-black p-3 min-w-[9rem] text-[#fff]", children: "Subscribe" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: " w-[20rem] lg:w-[28.5rem]",
        alt: "hero image",
        width: "150",
        height: "150",
        src: `/src/assets/newsletterImg.png`
      }
    )
  ] });
}

function ChooseUs() {
  const aboutUsRef = useRef(null);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: aboutUsRef,
      id: "about",
      className: "bg-[#FCF9F8]  flex flex-col md:flex-row px-8 justify-center gap-20 items-center py-20",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: "product img",
            width: "450",
            height: "450",
            src: "/src/assets/newProdutImg.png"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "max-w-[25rem]", children: [
          /* @__PURE__ */ jsx("h2", { className: " text-3xl md:text-4xl", children: "Why to choose our product" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("p", { children: "Your skin is sensitive to air pollution, sun, stress, and many other things you are not in control of. We are here to help you win this battle for glorious skin." }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("p", { children: "Natice is a Holy Grail that your skin has been looking for, full of natural ingredients and moisture-attracting buddies like hyaluronic acid to keep your skin looking healthy and happy." })
        ] })
      ]
    }
  );
}

function Contact() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "contact",
      className: "bg-lightPink flex flex-col px-8 justify-center gap-5 items-center py-20",
      children: [
        /* @__PURE__ */ jsx("h2", { className: " text-3xl md:text-4xl", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-lg items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("p", { children: "Daily 10:00 AM — 7:00 PM" }),
          /* @__PURE__ */ jsx("hr", { className: "solid bg-[#191919] w-32" }),
          /* @__PURE__ */ jsx("p", { children: "5th Ave, NY, 10001, USA" }),
          /* @__PURE__ */ jsx("p", { children: "+1-555-777-1234" }),
          /* @__PURE__ */ jsx("p", { children: "hello-there@example.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsx("img", { src: "/src/assets/facebook.png", alt: "facebook logo" }),
          /* @__PURE__ */ jsx("img", { src: "/src/assets/instagram.png", alt: "instagram logo" }),
          /* @__PURE__ */ jsx("img", { src: "/src/assets/twitter.png", alt: "twitter logo" })
        ] })
      ]
    }
  );
}

function DeliveryInfos() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-lightPink flex flex-col md:flex-row px-8 justify-center gap-20 items-center py-20", children: [
    /* @__PURE__ */ jsx("h2", { className: " text-3xl md:text-4xl max-w-[15rem]", children: "Delivery & Returns" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[33rem] text-lg", children: [
      /* @__PURE__ */ jsx("p", { children: "To deliver your favorite products, we have become partners with the most reliable companies. We are ready to entrust them with your orders and are always on your side if something goes wrong." }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("p", { children: "We will be happy to assist you for eligible returns, with a return instructions and the return shipping address. If you need a return or exchange, send us an email so we can discuss a replacement." })
    ] })
  ] });
}

function Banner() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[url('/src/assets/landingBg.png')] text-[#fff] bg-fixed bg-no-repeat flex flex-col px-8 justify-center gap-5 items-center py-20", children: [
    /* @__PURE__ */ jsx("h2", { className: " text-3xl md:text-4xl", children: " Explore Our Catalog" }),
    /* @__PURE__ */ jsx("p", { children: "Find the best product for your face and body" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/products",
        className: "bg-[#fff] p-3 min-w-[9rem] text-black text-center",
        children: "Discover"
      }
    )
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Ecommerce", "description": "We sell high quality stuff" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" mx-auto bg-[#FFF6EF]"> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Hero", "client:component-export": "Hero" })} ${renderComponent($$result2, "Featured", Featured, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Featured", "client:component-export": "Featured" })} ${renderComponent($$result2, "TestimonialBanner", TestimonialBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/TestimonialBanner", "client:component-export": "default" })} ${renderComponent($$result2, "ChooseUs", ChooseUs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/ChooseUs", "client:component-export": "default" })} ${renderComponent($$result2, "Newsletter", Newsletter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Newsletter", "client:component-export": "default" })} ${renderComponent($$result2, "DeliveryInfos", DeliveryInfos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/DeliveryInfos", "client:component-export": "default" })} ${renderComponent($$result2, "Banner", Banner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Banner", "client:component-export": "default" })} ${renderComponent($$result2, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Contact", "client:component-export": "default" })} <div class="h-20 py-10 bg-black flex flex-col justify-center items-center"> <p class="text-[#D4D4D4]">Bright serum skin care</p> <p class="text-[#7C7C7C]">Report abuse</p> </div> </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/index.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
