/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useCallback, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { t as loadingDelivery, u as errorDelivery, v as loadingOrderList, w as errorOrderList, x as orderListState, y as deliveryRequest, z as listOrdersRequest, M as Message, L as Loader, H as Heading, $ as $$Layout } from './_id__CIZYdmzw.mjs';

const AdminManageOrders = () => {
  const loadingDeliver = useStore(loadingDelivery);
  const errorDeliver = useStore(errorDelivery);
  const loadingList = useStore(loadingOrderList);
  const errorList = useStore(errorOrderList);
  const orderList = useStore(orderListState);
  const handleUpdateDeliveryStatus = useCallback(async (id) => {
    deliveryRequest(id).then(() => {
      listOrdersRequest();
    });
  }, []);
  useEffect(() => {
    listOrdersRequest();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    errorDeliver && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorDeliver }),
    loadingDeliver && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    errorList && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorList }),
    loadingList && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    /* @__PURE__ */ jsx("div", { className: "w-full my-8 max-w-[1800px] mx-auto overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto border-4 w-full whitespace-nowrap", children: [
      /* @__PURE__ */ jsx("thead", { className: "border-b-2", children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-500 text-white ", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "ID" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "User" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Total" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2 whitespace-nowrap", children: "Payment status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2  px-4 py-2 whitespace-nowrap", children: "Delivery Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: orderList?.map((order) => {
        return /* @__PURE__ */ jsxs("tr", { className: "capitalize border-b-2", children: [
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?._id }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?.user?.name }),
          /* @__PURE__ */ jsxs("td", { className: "text-left border-r-2 px-4 py-2", children: [
            "$",
            order?.totalPrice
          ] }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?.isPaid ? /* @__PURE__ */ jsx(FaCheck, { className: "text-green-500", size: 20 }) : /* @__PURE__ */ jsx(FaTimes, { className: "text-red-500", size: 20 }) }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?.isDelivered ? /* @__PURE__ */ jsx(FaCheck, { className: "text-green-500", size: 20 }) : /* @__PURE__ */ jsx(FaTimes, { className: "text-red-500", size: 20 }) }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: /* @__PURE__ */ jsxs("span", { className: "flex gap-4 justify-between", children: [
            order?.isDelivered ? "Delivered" : /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleUpdateDeliveryStatus(order?._id),
                disabled: loadingDeliver || order?.isDelivered || !order?.isPaid,
                className: "bg-blue-900 text-white rounded px-4 py-2  w-full max-w-[200px] flex gap-3 justify-center  cursor-pointer hover:bg-blue-800 text-sm",
                children: [
                  "Mark As Delivered",
                  loadingDeliver && /* @__PURE__ */ jsx(Loader, { variant: "small" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/order/${order?._id}`,
                className: "bg-slate-900 text-white rounded px-4 py-2  w-full max-w-[100px] flex gap-3 justify-center  cursor-pointer hover:bg-slate-800 text-sm",
                children: "View"
              }
            )
          ] }) })
        ] }, order?._id);
      }) })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$ManageOrders = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ManageOrders;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Orders", "description": "Manage orders" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "Manage Orders", "variant": "h1", "textAlign": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Heading", "client:component-export": "Heading" })} ${renderComponent($$result2, "AdminManageOrders", AdminManageOrders, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/AdminManageOrders", "client:component-export": "AdminManageOrders" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/manage-orders.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/manage-orders.astro";
const $$url = "/manage-orders";

export { $$ManageOrders as default, $$file as file, $$url as url };
