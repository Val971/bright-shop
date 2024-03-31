import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BbK_17MB.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/account","isIndex":false,"type":"page","pattern":"^\\/account\\/?$","segments":[[{"content":"account","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/account.astro","pathname":"/account","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/cart","isIndex":false,"type":"page","pattern":"^\\/cart\\/?$","segments":[[{"content":"cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart.astro","pathname":"/cart","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/checkout","isIndex":false,"type":"page","pattern":"^\\/checkout\\/?$","segments":[[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checkout.astro","pathname":"/checkout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/manage-orders","isIndex":false,"type":"page","pattern":"^\\/manage-orders\\/?$","segments":[[{"content":"manage-orders","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/manage-orders.astro","pathname":"/manage-orders","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/manage-products","isIndex":false,"type":"page","pattern":"^\\/manage-products\\/?$","segments":[[{"content":"manage-products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/manage-products.astro","pathname":"/manage-products","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/manage-users","isIndex":false,"type":"page","pattern":"^\\/manage-users\\/?$","segments":[[{"content":"manage-users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/manage-users.astro","pathname":"/manage-users","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/order/[id]","isIndex":false,"type":"page","pattern":"^\\/order\\/([^/]+?)\\/?$","segments":[[{"content":"order","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/order/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/product/[id]","isIndex":false,"type":"page","pattern":"^\\/product\\/([^/]+?)\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/product/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/products","isIndex":false,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products.astro","pathname":"/products","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CaREk9lS.js"}],"styles":[{"type":"external","src":"/_astro/account.BzUHcjPd.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/dev/Astro/bright-shop/src/pages/account.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/cart.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/checkout.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/manage-orders.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/manage-products.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/manage-users.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/order/[id].astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/product/[id].astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/products.astro",{"propagation":"none","containsHead":true}],["C:/dev/Astro/bright-shop/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/cart.astro":"chunks/pages/cart_BGsuOdgx.mjs","/src/pages/checkout.astro":"chunks/pages/checkout_DPWLmKbx.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BiMxvg_w.mjs","/src/pages/index.astro":"chunks/pages/index_Dpq-3OEn.mjs","/src/pages/login.astro":"chunks/pages/login_bXo_L5AI.mjs","/src/pages/manage-orders.astro":"chunks/pages/manage-orders_BCzp_Vfn.mjs","/src/pages/manage-products.astro":"chunks/pages/manage-products_C03Db4mK.mjs","/src/pages/manage-users.astro":"chunks/pages/manage-users_Cu9tjIVq.mjs","/src/pages/products.astro":"chunks/pages/products_I0fAHk_Z.mjs","/src/pages/register.astro":"chunks/pages/register_COD_IXG7.mjs","\u0000@astrojs-manifest":"manifest_CB3QxnW7.mjs","C:/dev/Astro/bright-shop/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_NcKsd21k.mjs","\u0000@astro-page:src/pages/account@_@astro":"chunks/account_CPSvWuXb.mjs","\u0000@astro-page:src/pages/cart@_@astro":"chunks/cart_CJY0nk0o.mjs","\u0000@astro-page:src/pages/checkout@_@astro":"chunks/checkout_1V1XtdLu.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_3UHudN2C.mjs","\u0000@astro-page:src/pages/manage-orders@_@astro":"chunks/manage-orders_DFpd93ak.mjs","\u0000@astro-page:src/pages/manage-products@_@astro":"chunks/manage-products_DA5TIKUU.mjs","\u0000@astro-page:src/pages/manage-users@_@astro":"chunks/manage-users_CGxjvJRR.mjs","\u0000@astro-page:src/pages/order/[id]@_@astro":"chunks/_id__BsZPSya6.mjs","\u0000@astro-page:src/pages/product/[id]@_@astro":"chunks/_id__B47znGpc.mjs","\u0000@astro-page:src/pages/products@_@astro":"chunks/products_DNLmEd9S.mjs","\u0000@astro-page:src/pages/register@_@astro":"chunks/register_D3F2bR3z.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_pCiz9hkY.mjs","C:/dev/Astro/bright-shop/src/components/TestimonialBanner":"_astro/TestimonialBanner.Uxzp_ERu.js","C:/dev/Astro/bright-shop/src/components/AdminManageOrders":"_astro/AdminManageOrders.Cw5ZjHVZ.js","C:/dev/Astro/bright-shop/src/components/DeliveryInfos":"_astro/DeliveryInfos.S4pJeJ7N.js","C:/dev/Astro/bright-shop/src/components/CheckoutCart":"_astro/CheckoutCart.CV5fWKT5.js","C:/dev/Astro/bright-shop/src/components/RegisterForm":"_astro/RegisterForm.DXgy9PNu.js","C:/dev/Astro/bright-shop/src/components/Contact":"_astro/Contact.Clh9IOz2.js","C:/dev/Astro/bright-shop/src/components/Newsletter":"_astro/Newsletter.PJrntyD5.js","C:/dev/Astro/bright-shop/src/components/Featured":"_astro/Featured.DVISsPdb.js","C:/dev/Astro/bright-shop/src/components/LoginForm":"_astro/LoginForm.BPXmnGht.js","C:/dev/Astro/bright-shop/src/components/AdminManageUsers":"_astro/AdminManageUsers.BBsms7Bk.js","C:/dev/Astro/bright-shop/src/components/Profile":"_astro/Profile.5nXBO77E.js","C:/dev/Astro/bright-shop/src/components/Banner":"_astro/Banner.FCgIDq-d.js","C:/dev/Astro/bright-shop/src/components/AdminManageProducts":"_astro/AdminManageProducts.5YfWn757.js","C:/dev/Astro/bright-shop/src/components/ProductList":"_astro/ProductList.D4Zcxkqp.js","C:/dev/Astro/bright-shop/src/layouts/Header":"_astro/Header.DA3EWpza.js","C:/dev/Astro/bright-shop/src/components/Heading":"_astro/Heading.BM7e-FBE.js","C:/dev/Astro/bright-shop/src/components/ChooseUs":"_astro/ChooseUs.CBxNyy0u.js","/astro/hoisted.js?q=0":"_astro/hoisted.CaREk9lS.js","C:/dev/Astro/bright-shop/src/components/OrderDetails":"_astro/OrderDetails.CmXqSbnX.js","C:/dev/Astro/bright-shop/src/components/ProductDetails":"_astro/ProductDetails.NjFprqTa.js","C:/dev/Astro/bright-shop/src/components/CartList":"_astro/CartList.CF0pklJl.js","@astrojs/react/client.js":"_astro/client.DURhWcR2.js","C:/dev/Astro/bright-shop/src/components/Hero":"_astro/Hero.CgZXVXcc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/landingBg.BCnmfo1V.png","/_astro/account.BzUHcjPd.css","/favicon.svg","/_astro/account.Ctkme6pL.css","/_astro/AdminManageOrders.Cw5ZjHVZ.js","/_astro/AdminManageProducts.5YfWn757.js","/_astro/AdminManageUsers.BBsms7Bk.js","/_astro/auth.DNM0cC8Q.js","/_astro/Banner.FCgIDq-d.js","/_astro/Breadcrumb.CZ7rheNU.js","/_astro/Button.Swb15bwE.js","/_astro/cart.1XnebWw_.js","/_astro/CartList.CF0pklJl.js","/_astro/CheckoutCart.CV5fWKT5.js","/_astro/ChooseUs.CBxNyy0u.js","/_astro/client.DURhWcR2.js","/_astro/Contact.Clh9IOz2.js","/_astro/DeliveryInfos.S4pJeJ7N.js","/_astro/Featured.DVISsPdb.js","/_astro/Header.DA3EWpza.js","/_astro/Heading.BM7e-FBE.js","/_astro/Hero.CgZXVXcc.js","/_astro/hoisted.CaREk9lS.js","/_astro/iconBase.Bq1qjTmt.js","/_astro/index.BQHKGzQe.js","/_astro/index.CSLRt44l.js","/_astro/jsx-runtime.Biu9vCfE.js","/_astro/LoginForm.BPXmnGht.js","/_astro/Message.CAvsZRF0.js","/_astro/Newsletter.PJrntyD5.js","/_astro/order.BywVNICf.js","/_astro/OrderDetails.CmXqSbnX.js","/_astro/ProductDetails.NjFprqTa.js","/_astro/ProductList.D4Zcxkqp.js","/_astro/products.DP4RWVA0.js","/_astro/Profile.5nXBO77E.js","/_astro/RegisterForm.DXgy9PNu.js","/_astro/TestimonialBanner.Uxzp_ERu.js","/_astro/user.C0MTycnS.js"],"buildFormat":"directory"});

export { manifest };
