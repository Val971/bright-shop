import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D4JbBgrz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_NcKsd21k.mjs');
const _page1 = () => import('./chunks/account_CPSvWuXb.mjs');
const _page2 = () => import('./chunks/cart_CJY0nk0o.mjs');
const _page3 = () => import('./chunks/checkout_1V1XtdLu.mjs');
const _page4 = () => import('./chunks/login_3UHudN2C.mjs');
const _page5 = () => import('./chunks/manage-orders_DFpd93ak.mjs');
const _page6 = () => import('./chunks/manage-products_DA5TIKUU.mjs');
const _page7 = () => import('./chunks/manage-users_CGxjvJRR.mjs');
const _page8 = () => import('./chunks/_id__BsZPSya6.mjs');
const _page9 = () => import('./chunks/_id__B47znGpc.mjs');
const _page10 = () => import('./chunks/products_DNLmEd9S.mjs');
const _page11 = () => import('./chunks/register_D3F2bR3z.mjs');
const _page12 = () => import('./chunks/index_OVI5JOzx.mjs');
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
    "middlewareSecret": "b3d30ede-6aa6-48be-a45d-4e633aded208"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
