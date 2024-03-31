/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { o as loadingLogin, q as errorLogin, M as Message, B as Button, s as loginRequest, H as Heading, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useStore(loadingLogin);
  const error = useStore(errorLogin);
  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(email, password);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "max-w-[500px] mx-auto py-6", children: [
    error && /* @__PURE__ */ jsx(Message, { variant: "danger", children: error }),
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
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "password", children: " Password:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "password",
          id: "password",
          required: true,
          placeholder: "Enter password",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "my-5 text-right", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/register", className: "text-blue-500 underline", children: "Register" })
    ] }),
    /* @__PURE__ */ jsx(Button, { loading, children: "Login" })
  ] });
};

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Login", "description": "Login an account" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "Login", "variant": "h1", "textAlign": "center" })} ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/LoginForm", "client:component-export": "LoginForm" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/login.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
