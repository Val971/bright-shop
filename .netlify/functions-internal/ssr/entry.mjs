import { renderers } from './renderers.mjs';
import { manifest } from './manifest_1qneF3fH.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_NcKsd21k.mjs');
const _page1 = () => import('./chunks/account_C2udmVwH.mjs');
const _page2 = () => import('./chunks/cart_GjnluJaE.mjs');
const _page3 = () => import('./chunks/checkout_3_a9FABY.mjs');
const _page4 = () => import('./chunks/login_LAOW4MxF.mjs');
const _page5 = () => import('./chunks/manage-orders_C9sTJvEb.mjs');
const _page6 = () => import('./chunks/manage-products_Dz65RDsH.mjs');
const _page7 = () => import('./chunks/manage-users_CMecScFl.mjs');
const _page8 = () => import('./chunks/_id__CMqR2mMY.mjs');
const _page9 = () => import('./chunks/_id__BrQCC9Nk.mjs');
const _page10 = () => import('./chunks/products_BPe0800y.mjs');
const _page11 = () => import('./chunks/register_CGFZTJS1.mjs');
const _page12 = () => import('./chunks/index_BCOsnNLD.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/account.astro", _page1],
    ["src/pages/cart.astro", _page2],
    ["src/pages/checkout.astro", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/manage-orders.astro", _page5],
    ["src/pages/manage-products.astro", _page6],
    ["src/pages/manage-users.astro", _page7],
    ["src/pages/order/[id].astro", _page8],
    ["src/pages/product/[id].astro", _page9],
    ["src/pages/products.astro", _page10],
    ["src/pages/register.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9b2f6b90-ad69-424e-8818-368b8751d594"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
