import { _ as _sfc_main$1 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, computed, withCtx, unref, isRef, createTextVNode, createVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { d as dailyLaborStore } from './index-183b4e75.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn } from './server.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import './VCheckboxBtn-aab82c77.mjs';
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
import './VMenu-4a1335b2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "log",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const search = ref("");
    const DailyLaborStore = dailyLaborStore();
    const empLogList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "\uC131\uBA85", key: "employeeName", align: "center" },
      { title: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638", key: "residentialNumber", align: "center" },
      { title: "\uD504\uB85C\uC81D\uD2B8", key: "project", align: "center" },
      { title: "\uBD80\uC11C", key: "department", align: "center" },
      { title: "\uC2DC\uC791\uB0A0\uC9DC", key: "workStartDate", align: "center" },
      { title: "\uC885\uB8CC\uB0A0\uC9DC", key: "workEndDate", align: "center" },
      { title: "\uD578\uB4DC\uD3F0", key: "phoneNumber", align: "center" }
    ];
    const fetchData = async () => {
      await DailyLaborStore.FETCH_EMP_LOG();
      empLogList.value = await DailyLaborStore.empLogList;
    };
    const removelog = async () => {
      const payload = [];
      selectedRows.value.forEach((element) => {
        const logData = {
          employeeName: element.employeeName,
          residentialNumber: element.residentialNumber
        };
        payload.push(logData);
      });
      await DailyLaborStore.DELETE_EMP_LOG(payload);
      await fetchData();
    };
    const filteredData = computed(() => {
      return empLogList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6"> \uC77C\uC6A9\uADFC\uB85C \uC9C1\uC6D0\uC774\uB825 \uAD00\uB9AC </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          placeholder: "Search",
                          density: "compact"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removelog
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC774\uB825 \uC0AD\uC81C `);
                            } else {
                              return [
                                createTextVNode(" \uC774\uB825 \uC0AD\uC81C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "inline-size": "10rem" } }, [
                            createVNode(_component_AppTextField, {
                              modelValue: unref(search),
                              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                              placeholder: "Search",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VSpacer),
                          createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                            createVNode(VBtn, {
                              "prepend-icon": "tabler-minus",
                              onClick: removelog
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC774\uB825 \uC0AD\uC81C ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    modelValue: unref(selectedRows),
                    "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                    headers,
                    items: unref(filteredData),
                    "item-value": "residentialNumber",
                    "return-object": "",
                    "show-select": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "inline-size": "10rem" } }, [
                          createVNode(_component_AppTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            placeholder: "Search",
                            density: "compact"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                          createVNode(VBtn, {
                            "prepend-icon": "tabler-minus",
                            onClick: removelog
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC774\uB825 \uC0AD\uC81C ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      modelValue: unref(selectedRows),
                      "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                      headers,
                      items: unref(filteredData),
                      "item-value": "residentialNumber",
                      "return-object": "",
                      "show-select": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          placeholder: "Search",
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                        createVNode(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removelog
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uB825 \uC0AD\uC81C ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    modelValue: unref(selectedRows),
                    "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                    headers,
                    items: unref(filteredData),
                    "item-value": "residentialNumber",
                    "return-object": "",
                    "show-select": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailyemp/log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
