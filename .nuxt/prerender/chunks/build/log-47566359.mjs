import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { a as affairStore } from './index-4eaf1d02.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard } from './server.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
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
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "log",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    affairStore();
    const searchQuery = ref("");
    const headers = [
      { title: "\uBC1C\uB839\uBC88\uD638", key: "appointNo" },
      { title: "\uC0AC\uBC88", key: "empCode" },
      { title: "\uC9C1\uC6D0\uBA85", key: "empName" },
      { title: "\uBD80\uC11C", key: "deptName" },
      { title: "\uBC1C\uB839\uBD80\uC11C", key: "appointDept" },
      { title: "\uC9C1\uAE09", key: "positionName" },
      { title: "\uBC1C\uB839\uC9C1\uAE09", key: "appointLevel" },
      { title: "\uADFC\uBB34\uC9C0", key: "workPlaceName" },
      { title: "\uBC1C\uB839\uADFC\uBB34\uC9C0", key: "appointWP" },
      { title: "\uC2B9\uC778\uC0C1\uD0DC", key: "status" }
    ];
    const appointmentsLog = ref([]);
    const handleSearch = () => {
      console.log("Searching:", searchQuery.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-6">\uC778\uC0AC\uBC1C\uB839 \uC774\uB825</h1>`);
      _push(ssrRenderComponent(VCard, { class: "mt-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              density: "compact",
              placeholder: "\uC9C1\uC6D0 \uC815\uBCF4 \uAC80\uC0C9",
              "append-inner-icon": "tabler-search",
              "single-line": "",
              "hide-details": "",
              dense: "",
              outlined: "",
              onInput: handleSearch
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              modelValue: _ctx.selectedRows,
              "onUpdate:modelValue": ($event) => _ctx.selectedRows = $event,
              headers,
              items: appointmentsLog.value,
              "items-per-page": 5,
              "footer-props": {
                "items-per-page-options": [5, 10, 20],
                "show-current-page": true,
                "show-first-last-page": true
              },
              search: searchQuery.value,
              align: "center",
              "show-select": "",
              "item-value": "appointNo",
              "return-object": ""
            }, {
              "item.empCode": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.empCode)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.empCode), 1)
                  ];
                }
              }),
              "item.empName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.empName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.empName), 1)
                  ];
                }
              }),
              "item.deptName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.deptName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.deptName), 1)
                  ];
                }
              }),
              "item.appointDept": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.appointDept)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.appointDept), 1)
                  ];
                }
              }),
              "item.appointWP": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.appointWP)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.appointWP), 1)
                  ];
                }
              }),
              "item.appointLevel": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.appointLevel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.appointLevel), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.status), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextField, {
                modelValue: searchQuery.value,
                "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                density: "compact",
                placeholder: "\uC9C1\uC6D0 \uC815\uBCF4 \uAC80\uC0C9",
                "append-inner-icon": "tabler-search",
                "single-line": "",
                "hide-details": "",
                dense: "",
                outlined: "",
                onInput: handleSearch
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(VDataTable), {
                modelValue: _ctx.selectedRows,
                "onUpdate:modelValue": ($event) => _ctx.selectedRows = $event,
                headers,
                items: appointmentsLog.value,
                "items-per-page": 5,
                "footer-props": {
                  "items-per-page-options": [5, 10, 20],
                  "show-current-page": true,
                  "show-first-last-page": true
                },
                search: searchQuery.value,
                align: "center",
                "show-select": "",
                "item-value": "appointNo",
                "return-object": ""
              }, {
                "item.empCode": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.empCode), 1)
                ]),
                "item.empName": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.empName), 1)
                ]),
                "item.deptName": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.deptName), 1)
                ]),
                "item.appointDept": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.appointDept), 1)
                ]),
                "item.appointWP": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.appointWP), 1)
                ]),
                "item.appointLevel": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.appointLevel), 1)
                ]),
                "item.status": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.status), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items", "search"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/appo/log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
