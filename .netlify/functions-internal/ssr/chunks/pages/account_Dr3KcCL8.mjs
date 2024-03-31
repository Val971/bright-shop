/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { S as SERVER_URL, l as loadingMyOrderList, e as errorMyOrderList, m as myOrderListState, a as listMyOrdersRequest, M as Message, L as Loader, H as Heading, B as Button, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState, useCallback, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { atom, map } from 'nanostores';

const loadingGetProfile = atom(false);
const errorGetProfile = atom(void 0);
const getProfileState = map();
const loadingUpdateProfile = atom(false);
const errorUpdateProfile = atom(void 0);
map();
const loadingUsers = atom(false);
const errorUsers = atom(void 0);
const usersState = atom([]);
const loadingUpdateUser = atom(false);
const errorUpdateUser = atom(void 0);
const profileGetRequest = async () => {
  errorGetProfile.set(void 0);
  loadingGetProfile.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.get(`${SERVER_URL}/api/users/profile`, config);
    console.log({ hhh: response });
    getProfileState.set(response.data);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorGetProfile.set(message);
  } finally {
    loadingGetProfile.set(false);
  }
};
const profileUpdateRequest = async (name, email) => {
  errorUpdateProfile.set(void 0);
  loadingUpdateProfile.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.put(`${SERVER_URL}/api/users/profile`, { email, name }, config);
    console.log({ hhh: response });
    getProfileState.set(response.data);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorUpdateProfile.set(message);
  } finally {
    loadingUpdateProfile.set(false);
  }
};
const usersRequest = async () => {
  errorUsers.set(void 0);
  loadingUsers.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.get(`${SERVER_URL}/api/users/`, config);
    console.log({ hhh: response });
    usersState.set(response.data);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorUsers.set(message);
  } finally {
    loadingUsers.set(false);
  }
};
const makeAdminRequest = async (id) => {
  errorUpdateUser.set(void 0);
  loadingUpdateUser.set(true);
  try {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
    const response = await axios.put(`${SERVER_URL}/api/users/${id}`, { isAdmin: true }, config);
    console.log({ hhh: response });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    errorUpdateUser.set(message);
  } finally {
    loadingUpdateUser.set(false);
  }
};

const Profile = () => {
  const loadingGet = useStore(loadingGetProfile);
  const errorGet = useStore(errorGetProfile);
  const profileGet = useStore(getProfileState);
  const loadingUpdate = useStore(loadingUpdateProfile);
  const errorUpdate = useStore(errorUpdateProfile);
  const loadingList = useStore(loadingMyOrderList);
  const errorList = useStore(errorMyOrderList);
  const orderList = useStore(myOrderListState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleUpdate = useCallback(async () => {
    profileUpdateRequest(name, email).then(() => {
      profileGetRequest();
    });
  }, [email, name]);
  useEffect(() => {
    profileGetRequest();
    listMyOrdersRequest();
  }, []);
  useEffect(() => {
    if (profileGet?.email) {
      setEmail(profileGet?.email);
      setName(profileGet?.name);
    }
  }, [profileGet]);
  return /* @__PURE__ */ jsx("section", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: " mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[500px] ", children: [
      errorGet && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorGet }),
      loadingGet && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
      errorUpdate && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorUpdate }),
      loadingUpdate && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
      /* @__PURE__ */ jsx(Heading, { text: "Update Profile", variant: "h2" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdate, className: "max-w-[500px] mx-auto py-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Name:" }),
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
              onChange: (e) => setName(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", children: " Email:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              id: "email",
              required: true,
              placeholder: "Enter email",
              className: "border-2 border-slate-400 p-2 rounded-lg w-full",
              value: email,
              onChange: (e) => setEmail(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(Button, { children: "Save Changes" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1800px] my-8 ", children: [
      errorList && /* @__PURE__ */ jsx(Message, { variant: "danger", children: errorList }),
      loadingList && /* @__PURE__ */ jsx(Loader, { variant: "large" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { text: "My Orders", variant: "h2" }),
        /* @__PURE__ */ jsx("div", { className: "w-full py-6  overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto border-4 w-full whitespace-nowrap", children: [
          /* @__PURE__ */ jsx("thead", { className: "border-b-2", children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-500 text-white ", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "ID" }),
            /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Total" }),
            /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2 whitespace-nowrap", children: "Payment status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left border-r-2  px-4 py-2 whitespace-nowrap", children: "Delivery Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left border-r-2 px-4 py-2", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: orderList?.map((order) => {
            return /* @__PURE__ */ jsxs("tr", { className: "capitalize border-b-2", children: [
              /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?._id }),
              /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?.totalPrice }),
              /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?.isPaid ? /* @__PURE__ */ jsx(FaCheck, { className: "text-green-500", size: 20 }) : /* @__PURE__ */ jsx(FaTimes, { className: "text-red-500", size: 20 }) }),
              /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: order?.isDelivered ? /* @__PURE__ */ jsx(FaCheck, { className: "text-green-500", size: 20 }) : /* @__PURE__ */ jsx(FaTimes, { className: "text-red-500", size: 20 }) }),
              /* @__PURE__ */ jsx("td", { className: "text-left border-r-2 px-4 py-2", children: /* @__PURE__ */ jsx("span", { className: "flex gap-4 justify-between", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/order/${order?._id}`,
                  className: "bg-slate-900 text-white rounded px-4 py-2  w-full max-w-[100px] flex gap-3 justify-center  cursor-pointer hover:bg-slate-800 text-sm",
                  children: "View"
                }
              ) }) })
            ] }, order?._id);
          }) })
        ] }) })
      ] })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$Account = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Account;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "User Profile", "description": "User Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "User Profile", "variant": "h1", "textAlign": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Heading", "client:component-export": "Heading" })} ${renderComponent($$result2, "Profile", Profile, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/Profile", "client:component-export": "Profile" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/account.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/account.astro";
const $$url = "/account";

const account = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Account,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { loadingUpdateUser as a, errorUpdateUser as b, usersRequest as c, account as d, errorUsers as e, loadingUsers as l, makeAdminRequest as m, usersState as u };
