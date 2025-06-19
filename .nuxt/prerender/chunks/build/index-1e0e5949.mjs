import { ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { V as VCard, f as VCardText } from './server.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@antfu+utils@0.7.6/node_modules/@antfu/utils/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue3-perfect-scrollbar@1.6.1_postcss@8.5.3/node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.cjs.js';
import '../_/nitro.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empCode = ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-6">WizTech Hire System Main</h1>`);
      _push(ssrRenderComponent(VCard, {
        class: "mb-6",
        title: "\uC778\uC0AC\uAD00\uB9AC\uD398\uC774\uC9C0\u{1F680}"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` WizTech \uC778\uC0AC\uAD00\uB9AC\uC2DC\uC2A4\uD15C\uC5D0 \uC624\uC2E0 ${ssrInterpolate(unref(empCode))}\uB2D8 \uC9C4\uC2EC\uC73C\uB85C \uD658\uC601\uD569\uB2C8\uB2E4.<br${_scopeId2}> \uC5EC\uB7EC\uBD84\uC758 \uC5C5\uC801\uACFC \uC131\uC7A5\uC744 \uD568\uAED8 \uAE30\uB85D\uD558\uBA70, \uC870\uC9C1\uC758 \uBC1C\uC804\uC5D0 \uB3D9\uCC38\uD560 \uC218 \uC788\uB3C4\uB85D \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC2B5\uB2C8\uB2E4.<br${_scopeId2}><br${_scopeId2}> *\uC5C5\uBB34\uAD00\uB828\uC740 \uC544\uB798\uB85C \uC5F0\uB77D\uD574\uC8FC\uC138\uC694 \uBB38\uC758 \uD398\uC774\uC9C0. \uC800\uB141 7\uC2DC \uC774\uD6C4\uB85C\uB294 \uAE09\uD55C\uC6A9\uBB34\uB9CC \uAD00\uB9AC\uC790\uC5D0\uAC8C \uC5F0\uB77D \uBC14\uB78D\uB2C8\uB2E4.* `);
                } else {
                  return [
                    createTextVNode(" WizTech \uC778\uC0AC\uAD00\uB9AC\uC2DC\uC2A4\uD15C\uC5D0 \uC624\uC2E0 " + toDisplayString(unref(empCode)) + "\uB2D8 \uC9C4\uC2EC\uC73C\uB85C \uD658\uC601\uD569\uB2C8\uB2E4.", 1),
                    createVNode("br"),
                    createTextVNode(" \uC5EC\uB7EC\uBD84\uC758 \uC5C5\uC801\uACFC \uC131\uC7A5\uC744 \uD568\uAED8 \uAE30\uB85D\uD558\uBA70, \uC870\uC9C1\uC758 \uBC1C\uC804\uC5D0 \uB3D9\uCC38\uD560 \uC218 \uC788\uB3C4\uB85D \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC2B5\uB2C8\uB2E4."),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" *\uC5C5\uBB34\uAD00\uB828\uC740 \uC544\uB798\uB85C \uC5F0\uB77D\uD574\uC8FC\uC138\uC694 \uBB38\uC758 \uD398\uC774\uC9C0. \uC800\uB141 7\uC2DC \uC774\uD6C4\uB85C\uB294 \uAE09\uD55C\uC6A9\uBB34\uB9CC \uAD00\uB9AC\uC790\uC5D0\uAC8C \uC5F0\uB77D \uBC14\uB78D\uB2C8\uB2E4.* ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createTextVNode(" WizTech \uC778\uC0AC\uAD00\uB9AC\uC2DC\uC2A4\uD15C\uC5D0 \uC624\uC2E0 " + toDisplayString(unref(empCode)) + "\uB2D8 \uC9C4\uC2EC\uC73C\uB85C \uD658\uC601\uD569\uB2C8\uB2E4.", 1),
                  createVNode("br"),
                  createTextVNode(" \uC5EC\uB7EC\uBD84\uC758 \uC5C5\uC801\uACFC \uC131\uC7A5\uC744 \uD568\uAED8 \uAE30\uB85D\uD558\uBA70, \uC870\uC9C1\uC758 \uBC1C\uC804\uC5D0 \uB3D9\uCC38\uD560 \uC218 \uC788\uB3C4\uB85D \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC2B5\uB2C8\uB2E4."),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" *\uC5C5\uBB34\uAD00\uB828\uC740 \uC544\uB798\uB85C \uC5F0\uB77D\uD574\uC8FC\uC138\uC694 \uBB38\uC758 \uD398\uC774\uC9C0. \uC800\uB141 7\uC2DC \uC774\uD6C4\uB85C\uB294 \uAE09\uD55C\uC6A9\uBB34\uB9CC \uAD00\uB9AC\uC790\uC5D0\uAC8C \uC5F0\uB77D \uBC14\uB78D\uB2C8\uB2E4.* ")
                ]),
                _: 1
              }),
              createVNode(VCardText)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
