import { defineComponent, ref, withCtx, unref, isRef, createTextVNode, createVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard } from './server.mjs';
import { V as VTabs, a as VTab } from './VTabs-78beaebe.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
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
import './VSelect-03a0285c.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "codeManage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const headers = [
      { title: "\uCF54\uB4DC\uBD84\uD560\uBC88\uD638", key: "division_code_no" },
      { title: "\uCF54\uB4DC\uD0C0\uC785", key: "code_type" },
      { title: "\uBD84\uD560\uCF54\uB4DC\uBA85", key: "division_code_name" },
      { title: "\uCF54\uB4DC\uBCC0\uACBD\uC0AC\uD56D", key: "code_change_available" },
      { title: "\uC815\uADDC\uBD84\uD3EC", key: "description" }
    ];
    const items = [
      { division_code_no: "CO-02", code_type: "\uACF5\uD1B5", division_code_name: "\uC0AC\uC5C5\uC7A5", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "CO-03", code_type: "\uACF5\uD1B5", division_code_name: "\uBD80\uC11C", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "CO-04", code_type: "\uACF5\uD1B5", division_code_name: "\uCC3D\uACE0", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "HR-01", code_type: "\uACF5\uD1B5", division_code_name: "\uC9C1\uAE09", code_change_available: "\uBCC0\uACBD\uAC00\uB2A5", description: "null" },
      { division_code_no: "HR-02", code_type: "\uACF5\uD1B5", division_code_name: "\uC0AC\uC6D0", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "CL-01", code_type: "\uACF5\uD1B5", division_code_name: "\uAC70\uB798\uCC98", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "CL-02", code_type: "\uD68C\uACC4", division_code_name: "\uAE08\uC735\uAC70\uB798\uCC98", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "IT", code_type: "\uAD6C\uB9E4", division_code_name: "\uD488\uBAA9\uAD6C\uBD84", code_change_available: "\uBCC0\uACBD\uAC00\uB2A5", description: "null" },
      { division_code_no: "IT-CI", code_type: "\uAD6C\uB9E4", division_code_name: "\uC644\uC81C\uD488", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "IT-SI", code_type: "\uAD6C\uB9E4", division_code_name: "\uBC18\uC81C\uD488", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "IT-MA", code_type: "\uAD6C\uB9E4", division_code_name: "\uC6D0\uC7AC\uB8CC", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" },
      { division_code_no: "CT", code_type: "\uC601\uC5C5", division_code_name: "\uC218\uC8FC \uC720\uD615 \uBD84\uB958", code_change_available: "\uBCC0\uACBD\uAC00\uB2A5", description: "null" },
      { division_code_no: "DT", code_type: "\uC601\uC5C5", division_code_name: "\uB0A9\uD488 \uC5EC\uBD80 \uBD84\uB958", code_change_available: "\uBCC0\uACBD\uAC00\uB2A5", description: "null" },
      { division_code_no: "IT-GROUP", code_type: "\uAD6C\uB9E4", division_code_name: "\uD488\uBAA9\uAD70 \uAD6C\uBD84", code_change_available: "\uBCC0\uACBD\uBD88\uAC00\uB2A5", description: "null" }
    ];
    const tab = ref("personal-info");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">\uCF54\uB4DC\uC870\uD68C</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
              height: "70"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: "personal-info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uCF54\uB4DC\uC870\uD68C `);
                      } else {
                        return [
                          createTextVNode(" \uCF54\uB4DC\uC870\uD68C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uCF54\uB4DC\uC870\uD68C ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTabs, {
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                height: "70"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: "personal-info" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uCF54\uB4DC\uC870\uD68C ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(VDataTable), {
        headers,
        items,
        "items-per-page": 5
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/base/codeManage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
