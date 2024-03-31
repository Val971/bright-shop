/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState, useCallback, useEffect } from 'react';
import { A as errorCreateProduct, C as loadingCreateProduct, D as createProductRequest, n as listProductRequest, H as Heading, M as Message, B as Button, i as loadingProductList, j as errorProductList, k as productListState, E as loadingDeleteProduct, F as errorDeleteProduct, G as deleteProductRequest, L as Loader, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { FaTimes } from 'react-icons/fa';

const categoryItems = ["phones", "computers", "electronics", "phone accessories", "fashion", "bags"];
const CreateProduct = ({ onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const error = useStore(errorCreateProduct);
  const loading = useStore(loadingCreateProduct);
  const handleCreateProduct = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name || !price || !brand || !category || !countInStock || !description || !image) {
        setMessage("Missing inputs");
        return;
      }
      await createProductRequest(name, price, brand, category, countInStock, description, image).then((value) => {
        onClose();
        listProductRequest();
      });
    },
    [name, price, brand, category, countInStock, description, image]
  );
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleCreateProduct, className: "max-w-[500px] mx-auto py-6 pb-28", children: [
    /* @__PURE__ */ jsx(Heading, { text: "Create Product", variant: "h3", textAlign: "center" }),
    /* @__PURE__ */ jsx("br", {}),
    error && /* @__PURE__ */ jsx(Message, { variant: "danger", children: error }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Product Name:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "name",
          id: "name",
          required: true,
          placeholder: "Enter name",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: name,
          onChange: (e) => {
            console.log({ vall: e.target.value });
            setName(e.target.value);
            setMessage("");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "brand", children: "Brand:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "brand",
          id: "name",
          required: true,
          placeholder: "Enter brand",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: brand,
          onChange: (e) => {
            setBrand(e.target.value);
            setMessage("");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "price", children: "Price:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          name: "price",
          id: "price",
          required: true,
          placeholder: "Enter price",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: price,
          onChange: (e) => {
            setPrice(e.target.value);
            setMessage("");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "category", children: "Category:" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          name: "category",
          id: "category",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full capitalize",
          value: category,
          onChange: (e) => {
            setCategory(e.target.value);
            setMessage("");
          },
          children: categoryItems?.map((item) => {
            return /* @__PURE__ */ jsx("option", { value: item, children: item });
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "countInStock", children: "Count in stock:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          name: "countInStock",
          id: "countInStock",
          required: true,
          placeholder: "Enter count in stock",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: countInStock,
          onChange: (e) => {
            setCountInStock(e.target.value);
            setMessage("");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "description", children: "Description:" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          name: "description",
          id: "description",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: description,
          onChange: (e) => {
            setDescription(e.target.value);
            setMessage("");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "image", children: "Image Url:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "image",
          id: "image",
          required: true,
          placeholder: "Enter image url",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: image,
          onChange: (e) => {
            setImage(e.target.value);
            setMessage("");
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    image && /* @__PURE__ */ jsx("img", { src: image, width: 300, height: 300, style: { objectFit: "cover" }, alt: "Product image" }),
    message && /* @__PURE__ */ jsx(Message, { variant: "danger", children: message }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Button, { loading, children: "Submit" })
  ] });
};

const Dialog = ({ children, open, onClose }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: open ? /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed w-full right-0 left-0 bottom-0 top-0 z-50",
      style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxs("div", { className: "min-h-[700px]  bg-white  w-full max-w-[500px] m-auto py-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-4 px-4", children: /* @__PURE__ */ jsx(FaTimes, { className: "text-red-500", size: 20, onClick: onClose }) }),
        /* @__PURE__ */ jsx("div", { className: "h-[650px] overflow-y-auto px-4", children })
      ] }) })
    }
  ) : null });
};

const AdminManageProducts = () => {
  const loadingList = useStore(loadingProductList);
  const errorList = useStore(errorProductList);
  const productList = useStore(productListState);
  const loadingDelete = useStore(loadingDeleteProduct);
  const errorDelete = useStore(errorDeleteProduct);
  const [openForm, setOpenForm] = useState(false);
  const handleDelete = useCallback(async (id) => {
    deleteProductRequest(id).then(() => {
      listProductRequest();
    });
  }, []);
  useEffect(() => {
    listProductRequest();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsx(Button, { size: "small", onClick: () => setOpenForm(true), children: "Create Product" }),
    /* @__PURE__ */ jsx(Dialog, { open: openForm, onClose: () => setOpenForm(false), children: /* @__PURE__ */ jsx(CreateProduct, { onClose: () => setOpenForm(false) }) }),
    errorList && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorList }),
    loadingList && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    errorDelete && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorDelete }),
    /* @__PURE__ */ jsx("div", { className: "w-full my-8 max-w-[1800px] mx-auto overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto border-4 w-full whitespace-nowrap", children: [
      /* @__PURE__ */ jsx("thead", { className: "border-b-2", children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-500 text-white ", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Brand" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Price" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Category" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2  px-4 py-2", children: "Count in stock" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: productList?.products?.map((product) => {
        return /* @__PURE__ */ jsxs("tr", { className: "capitalize border-b-2", children: [
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: product?.name }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: product?.brand }),
          /* @__PURE__ */ jsxs("td", { className: "text-left border-r-2 px-4 py-2", children: [
            "$",
            product?.price
          ] }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: product?.category }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: product?.countInStock }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: /* @__PURE__ */ jsxs("span", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/product/${product?._id}`,
                className: "bg-slate-900 text-white rounded px-4 py-2  w-full max-w-[100px] flex gap-3 justify-center  cursor-pointer hover:bg-slate-800 text-sm",
                children: "View"
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleDelete(product?._id),
                disabled: loadingDelete,
                className: "bg-red-900 text-white rounded px-4 py-2  w-full max-w-[100px] flex gap-3 justify-center  cursor-pointer hover:bg-red-800 text-sm",
                children: [
                  "Remove ",
                  loadingDelete && /* @__PURE__ */ jsx(Loader, { variant: "small" })
                ]
              }
            )
          ] }) })
        ] }, product?._id);
      }) })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$ManageProducts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ManageProducts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Products", "description": "Manage products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "Manage Products", "variant": "h1", "textAlign": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Heading", "client:component-export": "Heading" })} ${renderComponent($$result2, "AdminManageProducts", AdminManageProducts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/AdminManageProducts", "client:component-export": "AdminManageProducts" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/manage-products.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/manage-products.astro";
const $$url = "/manage-products";

export { $$ManageProducts as default, $$file as file, $$url as url };
