/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useCallback, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { l as loadingUsers, e as errorUsers, u as usersState, a as loadingUpdateUser, b as errorUpdateUser, m as makeAdminRequest, c as usersRequest } from './account_Dr3KcCL8.mjs';
import { M as Message, L as Loader, H as Heading, $ as $$Layout } from './_id__CIZYdmzw.mjs';

const AdminManageUsers = () => {
  const loadingList = useStore(loadingUsers);
  const errorList = useStore(errorUsers);
  const usersList = useStore(usersState);
  const loadingUpdate = useStore(loadingUpdateUser);
  const errorUpdate = useStore(errorUpdateUser);
  const handleMakeAdmin = useCallback((id) => {
    makeAdminRequest(id).then(() => {
      usersRequest();
    });
  }, []);
  useEffect(() => {
    usersRequest();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    errorList && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorList }),
    loadingList && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    errorUpdate && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorUpdate }),
    loadingUpdate && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
    /* @__PURE__ */ jsx("div", { className: "w-full my-8 max-w-[1800px] mx-auto overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto border-4 w-full whitespace-nowrap", children: [
      /* @__PURE__ */ jsx("thead", { className: "border-b-2", children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-500 text-white ", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "ID" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Email" }),
        /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Admin" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: usersList?.map((user) => {
        return /* @__PURE__ */ jsxs("tr", { className: "capitalize border-b-2", children: [
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: user?._id }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: user?.name }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: user?.email }),
          /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: /* @__PURE__ */ jsx("span", { className: "flex gap-4 justify-between", children: user?.isAdmin ? /* @__PURE__ */ jsx(FaCheck, { className: "text-green-500", size: 20 }) : /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleMakeAdmin(user?._id || ""),
              disabled: false,
              className: "bg-blue-900 text-white rounded px-4 py-2  w-full max-w-[200px] flex gap-3 justify-center  cursor-pointer hover:bg-blue-800 text-sm",
              children: [
                "Make Admin",
                loadingUpdate && /* @__PURE__ */ jsx(Loader, { variant: "small" })
              ]
            }
          ) }) })
        ] }, user?._id);
      }) })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$ManageUsers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ManageUsers;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Users", "description": "Manage Users" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "Manage Users", "variant": "h1", "textAlign": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Heading", "client:component-export": "Heading" })} ${renderComponent($$result2, "AdminManageUsers", AdminManageUsers, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/AdminManageUsers", "client:component-export": "AdminManageUsers" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/manage-users.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/manage-users.astro";
const $$url = "/manage-users";

export { $$ManageUsers as default, $$file as file, $$url as url };
