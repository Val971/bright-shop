import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CeY0sduA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_NcKsd21k.mjs');
const _page1 = () => import('./chunks/account_BPdb6Wcu.mjs');
const _page2 = () => import('./chunks/cart_GW1J0OqO.mjs');
const _page3 = () => import('./chunks/checkout_BcjzTqHy.mjs');
const _page4 = () => import('./chunks/login_3vPO1fYL.mjs');
const _page5 = () => import('./chunks/manage-orders_fCHUZuQb.mjs');
const _page6 = () => import('./chunks/manage-products_BYEQZWKG.mjs');
const _page7 = () => import('./chunks/manage-users_BKRwNDGj.mjs');
const _page8 = () => import('./chunks/_id__CatJna4c.mjs');
const _page9 = () => import('./chunks/_id__C1ggAXm8.mjs');
const _page10 = () => import('./chunks/products_IhVcPJnf.mjs');
const _page11 = () => import('./chunks/register_DvJv0Qte.mjs');
const _page12 = () => import('./chunks/index_DpnypJl7.mjs');
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
    "middlewareSecret": "78d5cf8d-763c-4ae8-8a2a-a485369b92b5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
