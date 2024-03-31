/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as loadingProductList, j as errorProductList, k as productListState, n as listProductRequest, L as Loader, M as Message, H as Heading, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';

const Product = ({ product }) => {
  return /* @__PURE__ */ jsxs("div", { className: "my-3 md:p-3 rounded  ", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:bg-[#00000006]", children: [
      " ",
      /* @__PURE__ */ jsx("a", { href: `/product/${product._id}`, children: /* @__PURE__ */ jsx("div", { className: "relative md:w-64 md:h-64 overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          className: "w-28 md:w-auto md:p-4 object-cover transition-transform duration-300 transform hover:scale-110"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `/product/${product._id}`,
          className: "text-lg font-thin text-[#191919] hover:underline",
          children: product.name
        }
      ),
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold ", children: [
        "$",
        product.price
      ] })
    ] })
  ] });
};

const ProductList = () => {
  const loading = useStore(loadingProductList);
  const error = useStore(errorProductList);
  const productList = useStore(productListState);
  useEffect(() => {
    listProductRequest();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "my-8 md:px-5", children: [
    loading && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    error && /* @__PURE__ */ jsx(Message, { variant: "danger", children: error }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-x-10 max-w-[1800px]", children: productList?.products?.map((product) => {
      return /* @__PURE__ */ jsx(Product, { product }, product?._id);
    }) }) })
  ] });
};

const $$Astro = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Ecommerce", "description": "We sell high quality stuff" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto flex flex-col"> ${renderComponent($$result2, "Heading", Heading, { "text": "Shop", "variant": "h1", "textAlign": "left" })} ${renderComponent($$result2, "ProductList", ProductList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/ProductList", "client:component-export": "ProductList" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/products.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/products.astro";
const $$url = "/products";

export { $$Products as default, $$file as file, $$url as url };
