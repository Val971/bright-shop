/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BbK_17MB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { I as loadingRegister, J as errorRegister, M as Message, L as Loader, B as Button, K as registerRequest, H as Heading, $ as $$Layout } from './_id__CIZYdmzw.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const loading = useStore(loadingRegister);
  const error = useStore(errorRegister);
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    setMessage("");
    registerRequest(name, email, password);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleRegister, className: "max-w-[500px] mx-auto py-6", children: [
    message && /* @__PURE__ */ jsx(Message, { variant: "danger", children: message }),
    error && /* @__PURE__ */ jsx(Message, { variant: "danger", children: error }),
    loading && /* @__PURE__ */ jsx(Loader, {}),
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
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "confirmPassword", children: "Confirm Password:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "confirmPassword",
          id: "confirmPassword",
          required: true,
          placeholder: "Confirm password",
          className: "border-2 border-slate-400 p-2 rounded-lg w-full",
          value: confirmPassword,
          onChange: (e) => setConfirmPassword(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "my-5 text-right", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/login", className: "text-blue-500 underline", children: "Login" })
    ] }),
    /* @__PURE__ */ jsx(Button, { loading, children: "Register" })
  ] }) });
};

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Register", "description": "Register an account" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1800px] mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "text": "Register", "variant": "h1", "textAlign": "center" })} ${renderComponent($$result2, "RegisterForm", RegisterForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/Astro/bright-shop/src/components/RegisterForm", "client:component-export": "RegisterForm" })} </div> ` })}`;
}, "C:/dev/Astro/bright-shop/src/pages/register.astro", void 0);

const $$file = "C:/dev/Astro/bright-shop/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
