import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BnKvGS_8.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CCVkKti5.mjs');
const _page1 = () => import('./chunks/404_DOStfmhi.mjs');
const _page2 = () => import('./chunks/about_CuCNXMpb.mjs');
const _page3 = () => import('./chunks/search_Bkl3k6BF.mjs');
const _page4 = () => import('./chunks/search_C9DiyxsI.mjs');
const _page5 = () => import('./chunks/_.._CmvWQylJ.mjs');
const _page6 = () => import('./chunks/index_BNZ1bj6L.mjs');
const _page7 = () => import('./chunks/_.._KVQE_wZn.mjs');
const _page8 = () => import('./chunks/script-test_DsrLCJb6.mjs');
const _page9 = () => import('./chunks/index_BZTOdgF6.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.12_typescript@5.4.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/search.json.ts", _page3],
    ["src/pages/articles/search.astro", _page4],
    ["src/pages/articles/tag/[...tag].astro", _page5],
    ["src/pages/articles/index.astro", _page6],
    ["src/pages/articles/[...slug].astro", _page7],
    ["src/pages/script-test.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "5a7423b0-2c9e-47d9-992f-f377d6be758d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
