import { _ as _sfc_main$6 } from './AppSelect-04d0f8a2.mjs';
import { defineComponent, ref, watch, withCtx, unref, isRef, createVNode, createTextVNode, computed, mergeProps, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { b as baseStore } from './index-77616e20.mjs';
import { s as salaryStore } from './index-cfe0baa7.mjs';
import { _ as _sfc_main$7 } from './AppTextField-dee429aa.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn } from './server.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VTabs, a as VTab } from './VTabs-78beaebe.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-258f0110.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "employmentTap",
  __ssrInlineRender: true,
  setup(__props) {
    const baseInsureList = ref(salaryStore().baseInsureList);
    const inputSalary = ref(0);
    const Employmentheaders1 = [
      { title: "\uCD1D\uC561", key: "standard", sortable: false },
      { title: "\uADFC\uB85C\uC790 \uBD80\uB2F4\uAE08(\uC2E4\uC5C5\uAE09\uC5EC)", key: "empInsure", sortable: false },
      { title: "\uC0AC\uC5C5\uC790 \uBD80\uB2F4\uAE08(\uC2E4\uC5C5\uAE09\uC5EC+\uACE0\uC6A9\uC548\uC815\uC9C1\uB2A5\uAC1C\uBC1C \uBD80\uB2F4\uAE08)", key: "workInsure", sortable: false }
    ];
    const Employmentheaders2 = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uBCF4\uD5D8\uB8CC\uC728(%)", key: "standard", sortable: false },
      { title: "\uADFC\uB85C\uC790(%)", key: "empInsure", sortable: false },
      { title: "\uC0AC\uC5C5\uC8FC(%)", key: "workInsure", sortable: false }
    ];
    const Employment1 = ref([
      { standard: "", empInsure: "", workInsure: "" }
    ]);
    const Employment2 = computed(() => [
      {
        note: "\uC2E4\uC5C5\uAE09\uC5EC",
        standard: baseInsureList.value.wrkinsureRates,
        empInsure: baseInsureList.value.wrkinsureRates / 2,
        workInsure: baseInsureList.value.wrkinsureRates / 2
      },
      {
        note: "\uACE0\uC6A9\uC548\uC815, \uC9C1\uC5C5\uB2A5\uB825 \uAC1C\uBC1C\uC0AC\uC5C5(150\uC778\uBBF8\uB9CC)",
        standard: baseInsureList.value.jobstabilRates,
        empInsure: "-",
        workInsure: baseInsureList.value.jobstabilRates
      }
    ]);
    const calculate = () => {
      Employment1.value[0].empInsure = inputSalary.value * (baseInsureList.value.wrkinsureRates / 2) / 100;
      Employment1.value[0].workInsure = inputSalary.value * (baseInsureList.value.wrkinsureRates / 2) / 100 + inputSalary.value * baseInsureList.value.jobstabilRates / 100;
      Employment1.value[0].standard = Employment1.value[0].empInsure + Employment1.value[0].workInsure;
    };
    watch(() => salaryStore().baseInsureList, (newValue) => {
      baseInsureList.value = newValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$7;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> \uACE0\uC6A9 \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 </h1>`);
            _push2(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { onClick: calculate }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBAA8\uC758\uACC4\uC0B0 `);
                            } else {
                              return [
                                createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { onClick: calculate }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mt-6 mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: Employmentheaders1,
              items: unref(Employment1)
            }, {
              "item.standard": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.standard,
                    "onUpdate:modelValue": ($event) => item.standard = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.standard,
                      "onUpdate:modelValue": ($event) => item.standard = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empInsure": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empInsure,
                    "onUpdate:modelValue": ($event) => item.empInsure = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empInsure,
                      "onUpdate:modelValue": ($event) => item.empInsure = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workInsure": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workInsure,
                    "onUpdate:modelValue": ($event) => item.workInsure = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workInsure,
                      "onUpdate:modelValue": ($event) => item.workInsure = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: Employmentheaders2,
              items: unref(Employment2)
            }, {
              "item.standard": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.standard,
                    "onUpdate:modelValue": ($event) => item.standard = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.standard,
                      "onUpdate:modelValue": ($event) => item.standard = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empInsure": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empInsure,
                    "onUpdate:modelValue": ($event) => item.empInsure = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empInsure,
                      "onUpdate:modelValue": ($event) => item.empInsure = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workInsure": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workInsure,
                    "onUpdate:modelValue": ($event) => item.workInsure = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workInsure,
                      "onUpdate:modelValue": ($event) => item.workInsure = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-h3 mb-6" }, " \uACE0\uC6A9 \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 "),
              createVNode(VDivider, { class: "mb-6" }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(inputSalary),
                        "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                        label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { onClick: calculate }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mt-6 mb-6" }),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: Employmentheaders1,
                items: unref(Employment1)
              }, {
                "item.standard": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.standard,
                    "onUpdate:modelValue": ($event) => item.standard = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empInsure": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empInsure,
                    "onUpdate:modelValue": ($event) => item.empInsure = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workInsure": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workInsure,
                    "onUpdate:modelValue": ($event) => item.workInsure = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: Employmentheaders2,
                items: unref(Employment2)
              }, {
                "item.standard": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.standard,
                    "onUpdate:modelValue": ($event) => item.standard = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empInsure": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empInsure,
                    "onUpdate:modelValue": ($event) => item.empInsure = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workInsure": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workInsure,
                    "onUpdate:modelValue": ($event) => item.workInsure = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/salbase/socialinsure/employmentTap.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "healthTap",
  __ssrInlineRender: true,
  setup(__props) {
    const baseInsureList = ref(salaryStore().baseInsureList);
    const inputSalary = ref(0);
    const Healthheaders1 = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uC5F0\uAE08\uBCF4\uD5D8\uB8CC(\uC804\uCCB4)", key: "insureRate", sortable: false },
      { title: "\uADFC\uB85C\uC790 \uBD80\uB2F4\uAE08", key: "empHealth", sortable: false },
      { title: "\uC0AC\uC5C5\uC790 \uBD80\uB2F4\uAE08", key: "workHealth", sortable: false }
    ];
    const Healthheaders2 = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uAE30\uC900\uC561", key: "standard", sortable: false },
      { title: "\uBCF4\uD5D8\uB8CC\uC728(%)", key: "insureRate", sortable: false },
      { title: "\uADFC\uB85C\uC790(%)", key: "empHealth", sortable: false },
      { title: "\uC0AC\uC5C5\uC8FC(%)", key: "workHealth", sortable: false }
    ];
    const Health1 = ref([
      { note: "\uAC74\uAC15\uBCF4\uD5D8\uB8CC", insureRate: "", empHealth: "", workHealth: "" },
      { note: "\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC", insureRate: "", empHealth: "", workHealth: "" }
    ]);
    const Health2 = computed(() => [
      {
        note: "\uAC74\uAC15\uBCF4\uD5D8\uB8CC",
        standard: "\uBCF4\uC218\uC6D4\uC561",
        insureRate: baseInsureList.value.healthinsureRates,
        empHealth: baseInsureList.value.healthinsureRates / 2,
        workHealth: baseInsureList.value.healthinsureRates / 2
      },
      {
        note: "\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC",
        standard: "\uAC74\uAC15\uBCF4\uD5D8\uB8CC",
        insureRate: baseInsureList.value.longtermcareRate,
        empHealth: baseInsureList.value.longtermcareRate / 2,
        workHealth: baseInsureList.value.longtermcareRate / 2
      }
    ]);
    const calculate = () => {
      const healthInsure = Health2.value[0].insureRate / 100;
      const longTermCareRate = Health2.value[1].insureRate / 100;
      Health1.value[0].insureRate = Math.round(inputSalary.value * healthInsure);
      Health1.value[0].empHealth = Math.round(inputSalary.value * healthInsure / 2);
      Health1.value[0].workHealth = Math.round(inputSalary.value * healthInsure / 2);
      Health1.value[1].insureRate = Math.round(inputSalary.value * healthInsure * longTermCareRate / 10) * 10;
      Health1.value[1].empHealth = Math.round(inputSalary.value * healthInsure * longTermCareRate / 10 * 10 / 2);
      Health1.value[1].workHealth = Math.round(inputSalary.value * healthInsure * longTermCareRate / 10 * 10 / 2);
    };
    watch(() => salaryStore().baseInsureList, (newValue) => {
      baseInsureList.value = newValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$7;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> \uAC74\uAC15 \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 </h1>`);
            _push2(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { onClick: calculate }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBAA8\uC758\uACC4\uC0B0 `);
                            } else {
                              return [
                                createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { onClick: calculate }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mt-6 mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: Healthheaders1,
              items: unref(Health1)
            }, {
              "item.insureRate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.insureRate,
                    "onUpdate:modelValue": ($event) => item.insureRate = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.insureRate,
                      "onUpdate:modelValue": ($event) => item.insureRate = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empHealth": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empHealth,
                    "onUpdate:modelValue": ($event) => item.empHealth = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empHealth,
                      "onUpdate:modelValue": ($event) => item.empHealth = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workHealth": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workHealth,
                    "onUpdate:modelValue": ($event) => item.workHealth = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workHealth,
                      "onUpdate:modelValue": ($event) => item.workHealth = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: Healthheaders2,
              items: unref(Health2)
            }, {
              "item.insureRate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.insureRate,
                    "onUpdate:modelValue": ($event) => item.insureRate = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.insureRate,
                      "onUpdate:modelValue": ($event) => item.insureRate = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empHealth": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empHealth,
                    "onUpdate:modelValue": ($event) => item.empHealth = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empHealth,
                      "onUpdate:modelValue": ($event) => item.empHealth = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workHealth": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workHealth,
                    "onUpdate:modelValue": ($event) => item.workHealth = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workHealth,
                      "onUpdate:modelValue": ($event) => item.workHealth = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3${_scopeId3}>INFO</h3><br${_scopeId3}><span${_scopeId3}><h4${_scopeId3}>\u2757 \uACC4\uC0B0\uB0B4\uC6A9\uC740 \uC9C1\uC7A5\uAC00\uC785\uC790\uC758 \uBCF4\uC218\uC6D4\uC561\uC5D0 \uB530\uB978 \uBAA8\uC758\uACC4\uC0B0\uACB0\uACFC\uB85C\uC11C \uC2E4\uC81C\uC640 \uB2E4\uB97C \uC218 \uC788\uC73C\uBA70 \uBCF4\uC218(\uC6D4\uAE09) \uC678 \uC18C\uB4DD(\uC5F0 3,400\uB9CC\uC6D0 \uCD08\uACFC)\uC774 \uC788\uC73C\uBA74<br${_scopeId3}> \uC2E4\uC81C \uBCF4\uD5D8\uB8CC\uC640\uB294 \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</h4><br${_scopeId3}><h4${_scopeId3}>\u2755 \uC608) \uBCF4\uC218\uC6D4\uC561\uC774 2,000,000\uC6D0\uC77C \uB54C, \uACC4\uC0B0\uBC29\uBC95(2023\uB144 \uAE30\uC900)</h4><br${_scopeId3}><p${_scopeId3}> \uC9C1\uC7A5\uAC00\uC785\uC790 \uBCF8\uC778 \uBD80\uB2F4\uAE08(\uAC74\uAC15\uBCF4\uD5D8\uB8CC + \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC) 79,980\uC6D0 <br${_scopeId3}> \uAC74\uAC15\uBCF4\uD5D8\uB8CC : 2,000,000(\uBCF4\uC218\uC6D4\uC561) x 3.545% = 70,900\uC6D0 <br${_scopeId3}> \u318D\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC : 70,900\uC6D0(\uAC74\uAC15\uBCF4\uD5D8\uB8CC) x ( 0.9082% / 7.09% ) = 9,080\uC6D0(\uC6D0\uB2E8\uC704 \uC808\uC0AC) <br${_scopeId3}> \uC2E0\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(0.9082%) = \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(12.81%) x \uAC74\uAC15\uBCF4\uD5D8\uB8CC\uC728(7.09%) <br${_scopeId3}> \u21E8 \uC0AC\uC5C5\uC7A5\uC5D0\uC11C \uB0A9\uBD80\uD560 \uBCF4\uD5D8\uB8CC = \uBCF8\uC778 \uBD80\uB2F4\uAE08(50%) + \uC0AC\uC5C5\uC7A5 \uBD80\uB2F4\uAE08(50%) <br${_scopeId3}> = 79,980\uC6D0 + 79,980\uC6D0 = 159,960\uC6D0 <br${_scopeId3}></p></span>`);
                      } else {
                        return [
                          createVNode("h3", null, "INFO"),
                          createVNode("br"),
                          createVNode("span", null, [
                            createVNode("h4", null, [
                              createTextVNode("\u2757 \uACC4\uC0B0\uB0B4\uC6A9\uC740 \uC9C1\uC7A5\uAC00\uC785\uC790\uC758 \uBCF4\uC218\uC6D4\uC561\uC5D0 \uB530\uB978 \uBAA8\uC758\uACC4\uC0B0\uACB0\uACFC\uB85C\uC11C \uC2E4\uC81C\uC640 \uB2E4\uB97C \uC218 \uC788\uC73C\uBA70 \uBCF4\uC218(\uC6D4\uAE09) \uC678 \uC18C\uB4DD(\uC5F0 3,400\uB9CC\uC6D0 \uCD08\uACFC)\uC774 \uC788\uC73C\uBA74"),
                              createVNode("br"),
                              createTextVNode(" \uC2E4\uC81C \uBCF4\uD5D8\uB8CC\uC640\uB294 \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")
                            ]),
                            createVNode("br"),
                            createVNode("h4", null, "\u2755 \uC608) \uBCF4\uC218\uC6D4\uC561\uC774 2,000,000\uC6D0\uC77C \uB54C, \uACC4\uC0B0\uBC29\uBC95(2023\uB144 \uAE30\uC900)"),
                            createVNode("br"),
                            createVNode("p", null, [
                              createTextVNode(" \uC9C1\uC7A5\uAC00\uC785\uC790 \uBCF8\uC778 \uBD80\uB2F4\uAE08(\uAC74\uAC15\uBCF4\uD5D8\uB8CC + \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC) 79,980\uC6D0 "),
                              createVNode("br"),
                              createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8\uB8CC : 2,000,000(\uBCF4\uC218\uC6D4\uC561) x 3.545% = 70,900\uC6D0 "),
                              createVNode("br"),
                              createTextVNode(" \u318D\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC : 70,900\uC6D0(\uAC74\uAC15\uBCF4\uD5D8\uB8CC) x ( 0.9082% / 7.09% ) = 9,080\uC6D0(\uC6D0\uB2E8\uC704 \uC808\uC0AC) "),
                              createVNode("br"),
                              createTextVNode(" \uC2E0\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(0.9082%) = \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(12.81%) x \uAC74\uAC15\uBCF4\uD5D8\uB8CC\uC728(7.09%) "),
                              createVNode("br"),
                              createTextVNode(" \u21E8 \uC0AC\uC5C5\uC7A5\uC5D0\uC11C \uB0A9\uBD80\uD560 \uBCF4\uD5D8\uB8CC = \uBCF8\uC778 \uBD80\uB2F4\uAE08(50%) + \uC0AC\uC5C5\uC7A5 \uBD80\uB2F4\uAE08(50%) "),
                              createVNode("br"),
                              createTextVNode(" = 79,980\uC6D0 + 79,980\uC6D0 = 159,960\uC6D0 "),
                              createVNode("br")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "pt-2" }, {
                      default: withCtx(() => [
                        createVNode("h3", null, "INFO"),
                        createVNode("br"),
                        createVNode("span", null, [
                          createVNode("h4", null, [
                            createTextVNode("\u2757 \uACC4\uC0B0\uB0B4\uC6A9\uC740 \uC9C1\uC7A5\uAC00\uC785\uC790\uC758 \uBCF4\uC218\uC6D4\uC561\uC5D0 \uB530\uB978 \uBAA8\uC758\uACC4\uC0B0\uACB0\uACFC\uB85C\uC11C \uC2E4\uC81C\uC640 \uB2E4\uB97C \uC218 \uC788\uC73C\uBA70 \uBCF4\uC218(\uC6D4\uAE09) \uC678 \uC18C\uB4DD(\uC5F0 3,400\uB9CC\uC6D0 \uCD08\uACFC)\uC774 \uC788\uC73C\uBA74"),
                            createVNode("br"),
                            createTextVNode(" \uC2E4\uC81C \uBCF4\uD5D8\uB8CC\uC640\uB294 \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")
                          ]),
                          createVNode("br"),
                          createVNode("h4", null, "\u2755 \uC608) \uBCF4\uC218\uC6D4\uC561\uC774 2,000,000\uC6D0\uC77C \uB54C, \uACC4\uC0B0\uBC29\uBC95(2023\uB144 \uAE30\uC900)"),
                          createVNode("br"),
                          createVNode("p", null, [
                            createTextVNode(" \uC9C1\uC7A5\uAC00\uC785\uC790 \uBCF8\uC778 \uBD80\uB2F4\uAE08(\uAC74\uAC15\uBCF4\uD5D8\uB8CC + \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC) 79,980\uC6D0 "),
                            createVNode("br"),
                            createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8\uB8CC : 2,000,000(\uBCF4\uC218\uC6D4\uC561) x 3.545% = 70,900\uC6D0 "),
                            createVNode("br"),
                            createTextVNode(" \u318D\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC : 70,900\uC6D0(\uAC74\uAC15\uBCF4\uD5D8\uB8CC) x ( 0.9082% / 7.09% ) = 9,080\uC6D0(\uC6D0\uB2E8\uC704 \uC808\uC0AC) "),
                            createVNode("br"),
                            createTextVNode(" \uC2E0\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(0.9082%) = \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(12.81%) x \uAC74\uAC15\uBCF4\uD5D8\uB8CC\uC728(7.09%) "),
                            createVNode("br"),
                            createTextVNode(" \u21E8 \uC0AC\uC5C5\uC7A5\uC5D0\uC11C \uB0A9\uBD80\uD560 \uBCF4\uD5D8\uB8CC = \uBCF8\uC778 \uBD80\uB2F4\uAE08(50%) + \uC0AC\uC5C5\uC7A5 \uBD80\uB2F4\uAE08(50%) "),
                            createVNode("br"),
                            createTextVNode(" = 79,980\uC6D0 + 79,980\uC6D0 = 159,960\uC6D0 "),
                            createVNode("br")
                          ])
                        ])
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
              createVNode("h1", { class: "text-h3 mb-6" }, " \uAC74\uAC15 \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 "),
              createVNode(VDivider, { class: "mb-6" }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(inputSalary),
                        "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                        label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { onClick: calculate }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mt-6 mb-6" }),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: Healthheaders1,
                items: unref(Health1)
              }, {
                "item.insureRate": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.insureRate,
                    "onUpdate:modelValue": ($event) => item.insureRate = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empHealth": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empHealth,
                    "onUpdate:modelValue": ($event) => item.empHealth = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workHealth": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workHealth,
                    "onUpdate:modelValue": ($event) => item.workHealth = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: Healthheaders2,
                items: unref(Health2)
              }, {
                "item.insureRate": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.insureRate,
                    "onUpdate:modelValue": ($event) => item.insureRate = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empHealth": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empHealth,
                    "onUpdate:modelValue": ($event) => item.empHealth = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workHealth": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workHealth,
                    "onUpdate:modelValue": ($event) => item.workHealth = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("h3", null, "INFO"),
                      createVNode("br"),
                      createVNode("span", null, [
                        createVNode("h4", null, [
                          createTextVNode("\u2757 \uACC4\uC0B0\uB0B4\uC6A9\uC740 \uC9C1\uC7A5\uAC00\uC785\uC790\uC758 \uBCF4\uC218\uC6D4\uC561\uC5D0 \uB530\uB978 \uBAA8\uC758\uACC4\uC0B0\uACB0\uACFC\uB85C\uC11C \uC2E4\uC81C\uC640 \uB2E4\uB97C \uC218 \uC788\uC73C\uBA70 \uBCF4\uC218(\uC6D4\uAE09) \uC678 \uC18C\uB4DD(\uC5F0 3,400\uB9CC\uC6D0 \uCD08\uACFC)\uC774 \uC788\uC73C\uBA74"),
                          createVNode("br"),
                          createTextVNode(" \uC2E4\uC81C \uBCF4\uD5D8\uB8CC\uC640\uB294 \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")
                        ]),
                        createVNode("br"),
                        createVNode("h4", null, "\u2755 \uC608) \uBCF4\uC218\uC6D4\uC561\uC774 2,000,000\uC6D0\uC77C \uB54C, \uACC4\uC0B0\uBC29\uBC95(2023\uB144 \uAE30\uC900)"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" \uC9C1\uC7A5\uAC00\uC785\uC790 \uBCF8\uC778 \uBD80\uB2F4\uAE08(\uAC74\uAC15\uBCF4\uD5D8\uB8CC + \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC) 79,980\uC6D0 "),
                          createVNode("br"),
                          createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8\uB8CC : 2,000,000(\uBCF4\uC218\uC6D4\uC561) x 3.545% = 70,900\uC6D0 "),
                          createVNode("br"),
                          createTextVNode(" \u318D\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC : 70,900\uC6D0(\uAC74\uAC15\uBCF4\uD5D8\uB8CC) x ( 0.9082% / 7.09% ) = 9,080\uC6D0(\uC6D0\uB2E8\uC704 \uC808\uC0AC) "),
                          createVNode("br"),
                          createTextVNode(" \uC2E0\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(0.9082%) = \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC\uC728(12.81%) x \uAC74\uAC15\uBCF4\uD5D8\uB8CC\uC728(7.09%) "),
                          createVNode("br"),
                          createTextVNode(" \u21E8 \uC0AC\uC5C5\uC7A5\uC5D0\uC11C \uB0A9\uBD80\uD560 \uBCF4\uD5D8\uB8CC = \uBCF8\uC778 \uBD80\uB2F4\uAE08(50%) + \uC0AC\uC5C5\uC7A5 \uBD80\uB2F4\uAE08(50%) "),
                          createVNode("br"),
                          createTextVNode(" = 79,980\uC6D0 + 79,980\uC6D0 = 159,960\uC6D0 "),
                          createVNode("br")
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/salbase/socialinsure/healthTap.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "majorTap",
  __ssrInlineRender: true,
  setup(__props) {
    const baseInsureList = ref(salaryStore().baseInsureList);
    const selectedYear = ref(baseStore().selectYear);
    const majorheaders = [
      { title: "\uBE44\uACE0", key: "note", sortable: false },
      { title: "\uC5F0\uAE08\uBCF4\uD5D8\uB8CC(\uC804\uCCB4)(%)", key: "nationalPension", sortable: false },
      { title: "\uADFC\uB85C\uC790(%)", key: "empNation", sortable: false },
      { title: "\uC0AC\uC5C5\uC8FC(%)", key: "workNation", sortable: false }
    ];
    const nationalheaders = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uAE30\uC900\uC561", key: "standard", sortable: false },
      { title: "\uBCF4\uD5D8\uB8CC\uC728", key: "insureRate", sortable: false },
      { title: "\uADFC\uB85C\uC790(%)", key: "empHealth", sortable: false },
      { title: "\uC0AC\uC5C5\uC8FC(%)", key: "workHealth", sortable: false }
    ];
    const Healthheaders = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uBCF4\uD5D8\uB8CC\uC728(%)", key: "standard", sortable: false },
      { title: "\uADFC\uB85C\uC790(%)", key: "empInsure", sortable: false },
      { title: "\uC0AC\uC5C5\uC790(%)", key: "workInsure", sortable: false }
    ];
    const preexistingheaders = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uC694\uC728(%)", key: "industRate", sortable: false }
    ];
    const newNationPension = computed(() => [
      {
        note: "\uAE30\uC900 \uC18C\uB4DD\uC6D4\uC561",
        nationalPension: baseInsureList.value.nationPensionRates,
        empNation: baseInsureList.value.nationPensionRates / 2,
        workNation: baseInsureList.value.nationPensionRates / 2
      }
    ]);
    const newHealthInsure = computed(() => [
      {
        note: "\uAC74\uAC15\uBCF4\uD5D8\uB8CC",
        standard: "\uBCF4\uC218\uC6D4\uC561",
        insureRate: baseInsureList.value.healthInsureRates,
        empHealth: baseInsureList.value.healthInsureRates / 2,
        workHealth: baseInsureList.value.healthInsureRates / 2
      },
      {
        note: "\uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8\uB8CC",
        standard: "\uAC74\uAC15\uBCF4\uD5D8\uB8CC",
        insureRate: baseInsureList.value.longTermCareRate,
        empHealth: baseInsureList.value.longTermCareRate / 2,
        workHealth: baseInsureList.value.longTermCareRate / 2
      }
    ]);
    const newEmpInsure = computed(() => [
      {
        note: "\uC2E4\uC5C5\uAE09\uC5EC",
        standard: baseInsureList.value.wrkInsureRates,
        empInsure: baseInsureList.value.wrkInsureRates / 2,
        workInsure: baseInsureList.value.wrkInsureRates / 2
      },
      {
        note: "\uACE0\uC6A9\uC548\uC815, \uC9C1\uC5C5\uB2A5\uB825 \uAC1C\uBC1C\uC0AC\uC5C5(150\uC778\uBBF8\uB9CC)",
        standard: baseInsureList.value.jobstabilRates,
        empInsure: "-",
        workInsure: baseInsureList.value.jobstabilRates
      }
    ]);
    const newIndustInsure = computed(() => [
      {
        note: "\uC5C5\uC885\uC694\uC728(\uC804\uAE30\uAE30\uACC4\uAE30\uAD6C\xB7\uC815\uBC00\uAE30\uAD6C\xB7\uC804\uC790\uC81C\uD488 \uC81C\uC870\uC5C5)",
        industRate: baseInsureList.value.industInsureRates
      },
      {
        note: "\uCD9C\uD1F4\uADFC\uC7AC\uD574\uC694\uC728",
        industRate: baseInsureList.value.industInsureCharRates
      }
    ]);
    const addNationalPension = async () => {
      const addSocialInsure = {
        nationpensionRates: newNationPension.value[0].nationalPension,
        attributionYear: selectedYear.value
      };
      console.log(addSocialInsure);
      await salaryStore().ADD_SOCIAL_INSURE(addSocialInsure);
    };
    const addHealthInsure = () => {
      const addSocialInsure = {
        healthinsureRates: newHealthInsure.value[0].insureRate,
        longtermcareRate: newHealthInsure.value[1].insureRate,
        attributionYear: selectedYear.value
      };
      salaryStore().ADD_SOCIAL_INSURE(addSocialInsure);
    };
    const addEmpInsure = () => {
      const addSocialInsure = {
        wrkinsureRates: newEmpInsure.value[0].standard,
        jobstabilRates: newEmpInsure.value[1].standard,
        attributionYear: selectedYear.value
      };
      salaryStore().ADD_SOCIAL_INSURE(addSocialInsure);
    };
    const addIndustInsure = () => {
      const addSocialInsure = {
        industinsureRates: newIndustInsure.value[0].industRate,
        industinsurecharRates: newIndustInsure.value[1].industRate,
        attributionYear: selectedYear.value
      };
      salaryStore().ADD_SOCIAL_INSURE(addSocialInsure);
    };
    watch(
      () => baseStore().selectYear,
      (newValue) => {
        selectedYear.value = newValue;
      }
    );
    watch(
      () => salaryStore().baseInsureList,
      (newValue) => {
        baseInsureList.value = newValue;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$7;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h3"${_scopeId2}>\uAD6D\uBBFC\uC5F0\uAE08</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addNationalPension }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uAD6D\uBBFC\uC5F0\uAE08 \uAE30\uC900 \uB4F1\uB85D `);
                      } else {
                        return [
                          createTextVNode(" \uAD6D\uBBFC\uC5F0\uAE08 \uAE30\uC900 \uB4F1\uB85D ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "\uAD6D\uBBFC\uC5F0\uAE08"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addNationalPension }, {
                        default: withCtx(() => [
                          createTextVNode(" \uAD6D\uBBFC\uC5F0\uAE08 \uAE30\uC900 \uB4F1\uB85D ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: majorheaders,
              items: unref(newNationPension)
            }, {
              "item.nationalPension": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.nationalPension,
                    "onUpdate:modelValue": ($event) => item.nationalPension = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.nationalPension,
                      "onUpdate:modelValue": ($event) => item.nationalPension = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empNation": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empNation,
                    "onUpdate:modelValue": ($event) => item.empNation = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empNation,
                      "onUpdate:modelValue": ($event) => item.empNation = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workNation": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workNation,
                    "onUpdate:modelValue": ($event) => item.workNation = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workNation,
                      "onUpdate:modelValue": ($event) => item.workNation = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h3"${_scopeId2}>\uAC74\uAC15\uBCF4\uD5D8</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addHealthInsure }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uAC74\uAC15\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D `);
                      } else {
                        return [
                          createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "\uAC74\uAC15\uBCF4\uD5D8"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addHealthInsure }, {
                        default: withCtx(() => [
                          createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: nationalheaders,
              items: unref(newHealthInsure)
            }, {
              "item.insureRate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.insureRate,
                    "onUpdate:modelValue": ($event) => item.insureRate = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.insureRate,
                      "onUpdate:modelValue": ($event) => item.insureRate = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empHealth": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empHealth,
                    "onUpdate:modelValue": ($event) => item.empHealth = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empHealth,
                      "onUpdate:modelValue": ($event) => item.empHealth = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workHealth": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workHealth,
                    "onUpdate:modelValue": ($event) => item.workHealth = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workHealth,
                      "onUpdate:modelValue": ($event) => item.workHealth = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h3"${_scopeId2}>\uACE0\uC6A9\uBCF4\uD5D8</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addEmpInsure }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uACE0\uC6A9\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D `);
                      } else {
                        return [
                          createTextVNode(" \uACE0\uC6A9\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "\uACE0\uC6A9\uBCF4\uD5D8"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addEmpInsure }, {
                        default: withCtx(() => [
                          createTextVNode(" \uACE0\uC6A9\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: Healthheaders,
              items: unref(newEmpInsure)
            }, {
              "item.standard": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.standard,
                    "onUpdate:modelValue": ($event) => item.standard = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.standard,
                      "onUpdate:modelValue": ($event) => item.standard = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empInsure": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empInsure,
                    "onUpdate:modelValue": ($event) => item.empInsure = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empInsure,
                      "onUpdate:modelValue": ($event) => item.empInsure = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workInsure": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workInsure,
                    "onUpdate:modelValue": ($event) => item.workInsure = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workInsure,
                      "onUpdate:modelValue": ($event) => item.workInsure = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h3"${_scopeId2}>\uC0B0\uC7AC\uBCF4\uD5D8</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addIndustInsure }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC0B0\uC7AC\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D `);
                      } else {
                        return [
                          createTextVNode(" \uC0B0\uC7AC\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "\uC0B0\uC7AC\uBCF4\uD5D8"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addIndustInsure }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC0B0\uC7AC\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: preexistingheaders,
              items: unref(newIndustInsure)
            }, {
              "item.industRate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.industRate,
                    "onUpdate:modelValue": ($event) => item.industRate = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.industRate,
                      "onUpdate:modelValue": ($event) => item.industRate = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h3" }, "\uAD6D\uBBFC\uC5F0\uAE08"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addNationalPension }, {
                      default: withCtx(() => [
                        createTextVNode(" \uAD6D\uBBFC\uC5F0\uAE08 \uAE30\uC900 \uB4F1\uB85D ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: majorheaders,
                items: unref(newNationPension)
              }, {
                "item.nationalPension": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.nationalPension,
                    "onUpdate:modelValue": ($event) => item.nationalPension = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empNation": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empNation,
                    "onUpdate:modelValue": ($event) => item.empNation = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workNation": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workNation,
                    "onUpdate:modelValue": ($event) => item.workNation = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h3" }, "\uAC74\uAC15\uBCF4\uD5D8"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addHealthInsure }, {
                      default: withCtx(() => [
                        createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: nationalheaders,
                items: unref(newHealthInsure)
              }, {
                "item.insureRate": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.insureRate,
                    "onUpdate:modelValue": ($event) => item.insureRate = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empHealth": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empHealth,
                    "onUpdate:modelValue": ($event) => item.empHealth = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workHealth": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workHealth,
                    "onUpdate:modelValue": ($event) => item.workHealth = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h3" }, "\uACE0\uC6A9\uBCF4\uD5D8"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addEmpInsure }, {
                      default: withCtx(() => [
                        createTextVNode(" \uACE0\uC6A9\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: Healthheaders,
                items: unref(newEmpInsure)
              }, {
                "item.standard": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.standard,
                    "onUpdate:modelValue": ($event) => item.standard = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empInsure": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empInsure,
                    "onUpdate:modelValue": ($event) => item.empInsure = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workInsure": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workInsure,
                    "onUpdate:modelValue": ($event) => item.workInsure = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h3" }, "\uC0B0\uC7AC\uBCF4\uD5D8"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addIndustInsure }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC0B0\uC7AC\uBCF4\uD5D8 \uAE30\uC900 \uB4F1\uB85D ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: preexistingheaders,
                items: unref(newIndustInsure)
              }, {
                "item.industRate": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.industRate,
                    "onUpdate:modelValue": ($event) => item.industRate = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/salbase/socialinsure/majorTap.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "nationalTap",
  __ssrInlineRender: true,
  setup(__props) {
    const baseInsureList = ref(salaryStore().baseInsureList);
    const selectedYear = ref(baseStore().selectYear);
    const inputSalary = ref(0);
    const nationalheaders1 = [
      { title: "\uC5F0\uAE08\uBCF4\uD5D8\uB8CC(\uC804\uCCB4)", key: "nationalPension", sortable: false },
      { title: "\uADFC\uB85C\uC790 \uBD80\uB2F4\uAE08", key: "empNation", sortable: false },
      { title: "\uC0AC\uC5C5\uC790 \uBD80\uB2F4\uAE08", key: "workNation", sortable: false }
    ];
    const nationalheaders2 = [
      { title: "\uBE44\uACE0", key: "note", sortable: false },
      { title: "\uC5F0\uAE08\uBCF4\uD5D8\uB8CC(\uC804\uCCB4)(%)", key: "nationalPension", sortable: false },
      { title: "\uADFC\uB85C\uC790(%)", key: "empNation", sortable: false },
      { title: "\uC0AC\uC5C5\uC8FC(%)", key: "workNation", sortable: false }
    ];
    const national1 = ref([
      { nationalPension: "", empNation: "", workNation: "" }
    ]);
    const national2 = computed(() => [
      {
        note: "\uAE30\uC900 \uC18C\uB4DD\uC6D4\uC561",
        nationalPension: baseInsureList.value.nationpensionRates,
        empNation: baseInsureList.value.nationpensionRates / 2,
        workNation: baseInsureList.value.nationpensionRates / 2
      }
    ]);
    const calculate = () => {
      const nationPension = baseInsureList.value.nationpensionRates / 100;
      if (inputSalary.value <= 35e4) {
        inputSalary.value = 35e4;
        national1.value[0].nationalPension = inputSalary.value * nationPension;
        national1.value[0].empNation = inputSalary.value * nationPension / 2;
        national1.value[0].workNation = inputSalary.value * nationPension / 2;
      } else if (inputSalary.value >= 553e4) {
        inputSalary.value = 553e4;
        national1.value[0].nationalPension = inputSalary.value * nationPension;
        national1.value[0].empNation = inputSalary.value * nationPension / 2;
        national1.value[0].workNation = inputSalary.value * nationPension / 2;
      } else {
        national1.value[0].nationalPension = inputSalary.value * nationPension;
        national1.value[0].empNation = inputSalary.value * nationPension / 2;
        national1.value[0].workNation = inputSalary.value * nationPension / 2;
      }
    };
    watch(() => baseStore().selectYear, (newValue) => {
      selectedYear.value = newValue;
    });
    watch(() => salaryStore().baseInsureList, (newValue) => {
      baseInsureList.value = newValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$7;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> \uAD6D\uBBFC \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 </h1>`);
            _push2(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { onClick: calculate }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBAA8\uC758\uACC4\uC0B0 `);
                            } else {
                              return [
                                createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { onClick: calculate }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mt-6 mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: nationalheaders1,
              items: unref(national1)
            }, {
              "item.nationalPension": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.nationalPension,
                    "onUpdate:modelValue": ($event) => item.nationalPension = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.nationalPension,
                      "onUpdate:modelValue": ($event) => item.nationalPension = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empNation": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empNation,
                    "onUpdate:modelValue": ($event) => item.empNation = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empNation,
                      "onUpdate:modelValue": ($event) => item.empNation = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workNation": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workNation,
                    "onUpdate:modelValue": ($event) => item.workNation = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workNation,
                      "onUpdate:modelValue": ($event) => item.workNation = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: nationalheaders2,
              items: unref(national2)
            }, {
              "item.nationalPension": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.nationalPension,
                    "onUpdate:modelValue": ($event) => item.nationalPension = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.nationalPension,
                      "onUpdate:modelValue": ($event) => item.nationalPension = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.empNation": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.empNation,
                    "onUpdate:modelValue": ($event) => item.empNation = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.empNation,
                      "onUpdate:modelValue": ($event) => item.empNation = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.workNation": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.workNation,
                    "onUpdate:modelValue": ($event) => item.workNation = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.workNation,
                      "onUpdate:modelValue": ($event) => item.workNation = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3${_scopeId3}>INFO</h3><br${_scopeId3}><span${_scopeId3}><h4${_scopeId3}>\u2757 \uC5F0\uAE08\uBCF4\uD5D8\uB8CC = \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 X 9%(\uC5F0\uAE08\uBCF4\uD5D8\uB8CC\uC728)</h4><br${_scopeId3}><h4${_scopeId3}>\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561</h4><br${_scopeId3}><p${_scopeId3}> \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC774\uB780 \uAD6D\uBBFC\uC5F0\uAE08\uC758 \uBCF4\uD5D8\uB8CC \uBC0F \uAE09\uC5EC \uC0B0\uC815\uC744 \uC704\uD558\uC5EC \uAC00\uC785\uC790\uAC00 \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC5D0\uC11C \uCC9C\uC6D0\uBBF8\uB9CC\uC744 \uC808\uC0AC\uD55C \uAE08\uC561\uC744 \uB9D0\uD558\uBA70, <br${_scopeId3}> \uCD5C\uC800 35\uB9CC\uC6D0\uC5D0\uC11C \uCD5C\uACE0 553\uB9CC\uC6D0\uAE4C\uC9C0\uC758 \uBC94\uC704\uB85C \uACB0\uC815\uD558\uAC8C \uB429\uB2C8\uB2E4. <br${_scopeId3}> \uB530\uB77C\uC11C, \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC774 35\uB9CC\uC6D0\uBCF4\uB2E4 \uC801\uC73C\uBA74 35\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD558\uACE0, 553\uB9CC\uC6D0\uBCF4\uB2E4 \uB9CE\uC73C\uBA74 553\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD569\uB2C8\uB2E4. (2022.7.1 \uAE30\uC900) </p><h4${_scopeId3}>\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561</h4><br${_scopeId3}><p${_scopeId3}> \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561\uC740 \uAD6D\uBBFC\uC5F0\uAE08 \uC0AC\uC5C5\uC7A5\uAC00\uC785\uC790\uC640 \uC9C0\uC5ED\uAC00\uC785\uC790 \uC804\uC6D0(\uB0A9\uBD80\uC608\uC678\uC790 \uC81C\uC678)\uC758 \uD3C9\uADE0\uC18C\uB4DD\uC6D4\uC561\uC758 3\uB144\uAC04 \uBCC0\uB3D9\uD558\uB294 \uBE44\uC728\uC744 \uBC18\uC601\uD558\uC5EC <br${_scopeId3}> \uB9E4\uB144 3\uC6D4\uB9D0\uAE4C\uC9C0 \uBCF4\uAC74\uBCF5\uC9C0\uBD80 \uC7A5\uAD00\uC774 \uACE0\uC2DC\uD558\uBA70 \uD574\uB2F9\uC5F0\uB3C4 7\uC6D4\uBD80\uD130 1\uB144\uAC04 \uC801\uC6A9\uD569\uB2C8\uB2E4. </p></span>`);
                      } else {
                        return [
                          createVNode("h3", null, "INFO"),
                          createVNode("br"),
                          createVNode("span", null, [
                            createVNode("h4", null, "\u2757 \uC5F0\uAE08\uBCF4\uD5D8\uB8CC = \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 X 9%(\uC5F0\uAE08\uBCF4\uD5D8\uB8CC\uC728)"),
                            createVNode("br"),
                            createVNode("h4", null, "\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561"),
                            createVNode("br"),
                            createVNode("p", null, [
                              createTextVNode(" \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC774\uB780 \uAD6D\uBBFC\uC5F0\uAE08\uC758 \uBCF4\uD5D8\uB8CC \uBC0F \uAE09\uC5EC \uC0B0\uC815\uC744 \uC704\uD558\uC5EC \uAC00\uC785\uC790\uAC00 \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC5D0\uC11C \uCC9C\uC6D0\uBBF8\uB9CC\uC744 \uC808\uC0AC\uD55C \uAE08\uC561\uC744 \uB9D0\uD558\uBA70, "),
                              createVNode("br"),
                              createTextVNode(" \uCD5C\uC800 35\uB9CC\uC6D0\uC5D0\uC11C \uCD5C\uACE0 553\uB9CC\uC6D0\uAE4C\uC9C0\uC758 \uBC94\uC704\uB85C \uACB0\uC815\uD558\uAC8C \uB429\uB2C8\uB2E4. "),
                              createVNode("br"),
                              createTextVNode(" \uB530\uB77C\uC11C, \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC774 35\uB9CC\uC6D0\uBCF4\uB2E4 \uC801\uC73C\uBA74 35\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD558\uACE0, 553\uB9CC\uC6D0\uBCF4\uB2E4 \uB9CE\uC73C\uBA74 553\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD569\uB2C8\uB2E4. (2022.7.1 \uAE30\uC900) ")
                            ]),
                            createVNode("h4", null, "\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561"),
                            createVNode("br"),
                            createVNode("p", null, [
                              createTextVNode(" \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561\uC740 \uAD6D\uBBFC\uC5F0\uAE08 \uC0AC\uC5C5\uC7A5\uAC00\uC785\uC790\uC640 \uC9C0\uC5ED\uAC00\uC785\uC790 \uC804\uC6D0(\uB0A9\uBD80\uC608\uC678\uC790 \uC81C\uC678)\uC758 \uD3C9\uADE0\uC18C\uB4DD\uC6D4\uC561\uC758 3\uB144\uAC04 \uBCC0\uB3D9\uD558\uB294 \uBE44\uC728\uC744 \uBC18\uC601\uD558\uC5EC "),
                              createVNode("br"),
                              createTextVNode(" \uB9E4\uB144 3\uC6D4\uB9D0\uAE4C\uC9C0 \uBCF4\uAC74\uBCF5\uC9C0\uBD80 \uC7A5\uAD00\uC774 \uACE0\uC2DC\uD558\uBA70 \uD574\uB2F9\uC5F0\uB3C4 7\uC6D4\uBD80\uD130 1\uB144\uAC04 \uC801\uC6A9\uD569\uB2C8\uB2E4. ")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "pt-2" }, {
                      default: withCtx(() => [
                        createVNode("h3", null, "INFO"),
                        createVNode("br"),
                        createVNode("span", null, [
                          createVNode("h4", null, "\u2757 \uC5F0\uAE08\uBCF4\uD5D8\uB8CC = \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 X 9%(\uC5F0\uAE08\uBCF4\uD5D8\uB8CC\uC728)"),
                          createVNode("br"),
                          createVNode("h4", null, "\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561"),
                          createVNode("br"),
                          createVNode("p", null, [
                            createTextVNode(" \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC774\uB780 \uAD6D\uBBFC\uC5F0\uAE08\uC758 \uBCF4\uD5D8\uB8CC \uBC0F \uAE09\uC5EC \uC0B0\uC815\uC744 \uC704\uD558\uC5EC \uAC00\uC785\uC790\uAC00 \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC5D0\uC11C \uCC9C\uC6D0\uBBF8\uB9CC\uC744 \uC808\uC0AC\uD55C \uAE08\uC561\uC744 \uB9D0\uD558\uBA70, "),
                            createVNode("br"),
                            createTextVNode(" \uCD5C\uC800 35\uB9CC\uC6D0\uC5D0\uC11C \uCD5C\uACE0 553\uB9CC\uC6D0\uAE4C\uC9C0\uC758 \uBC94\uC704\uB85C \uACB0\uC815\uD558\uAC8C \uB429\uB2C8\uB2E4. "),
                            createVNode("br"),
                            createTextVNode(" \uB530\uB77C\uC11C, \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC774 35\uB9CC\uC6D0\uBCF4\uB2E4 \uC801\uC73C\uBA74 35\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD558\uACE0, 553\uB9CC\uC6D0\uBCF4\uB2E4 \uB9CE\uC73C\uBA74 553\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD569\uB2C8\uB2E4. (2022.7.1 \uAE30\uC900) ")
                          ]),
                          createVNode("h4", null, "\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561"),
                          createVNode("br"),
                          createVNode("p", null, [
                            createTextVNode(" \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561\uC740 \uAD6D\uBBFC\uC5F0\uAE08 \uC0AC\uC5C5\uC7A5\uAC00\uC785\uC790\uC640 \uC9C0\uC5ED\uAC00\uC785\uC790 \uC804\uC6D0(\uB0A9\uBD80\uC608\uC678\uC790 \uC81C\uC678)\uC758 \uD3C9\uADE0\uC18C\uB4DD\uC6D4\uC561\uC758 3\uB144\uAC04 \uBCC0\uB3D9\uD558\uB294 \uBE44\uC728\uC744 \uBC18\uC601\uD558\uC5EC "),
                            createVNode("br"),
                            createTextVNode(" \uB9E4\uB144 3\uC6D4\uB9D0\uAE4C\uC9C0 \uBCF4\uAC74\uBCF5\uC9C0\uBD80 \uC7A5\uAD00\uC774 \uACE0\uC2DC\uD558\uBA70 \uD574\uB2F9\uC5F0\uB3C4 7\uC6D4\uBD80\uD130 1\uB144\uAC04 \uC801\uC6A9\uD569\uB2C8\uB2E4. ")
                          ])
                        ])
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
              createVNode("h1", { class: "text-h3 mb-6" }, " \uAD6D\uBBFC \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 "),
              createVNode(VDivider, { class: "mb-6" }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(inputSalary),
                        "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                        label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { onClick: calculate }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mt-6 mb-6" }),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: nationalheaders1,
                items: unref(national1)
              }, {
                "item.nationalPension": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.nationalPension,
                    "onUpdate:modelValue": ($event) => item.nationalPension = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empNation": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empNation,
                    "onUpdate:modelValue": ($event) => item.empNation = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workNation": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workNation,
                    "onUpdate:modelValue": ($event) => item.workNation = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: nationalheaders2,
                items: unref(national2)
              }, {
                "item.nationalPension": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.nationalPension,
                    "onUpdate:modelValue": ($event) => item.nationalPension = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.empNation": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.empNation,
                    "onUpdate:modelValue": ($event) => item.empNation = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.workNation": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.workNation,
                    "onUpdate:modelValue": ($event) => item.workNation = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("h3", null, "INFO"),
                      createVNode("br"),
                      createVNode("span", null, [
                        createVNode("h4", null, "\u2757 \uC5F0\uAE08\uBCF4\uD5D8\uB8CC = \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 X 9%(\uC5F0\uAE08\uBCF4\uD5D8\uB8CC\uC728)"),
                        createVNode("br"),
                        createVNode("h4", null, "\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC774\uB780 \uAD6D\uBBFC\uC5F0\uAE08\uC758 \uBCF4\uD5D8\uB8CC \uBC0F \uAE09\uC5EC \uC0B0\uC815\uC744 \uC704\uD558\uC5EC \uAC00\uC785\uC790\uAC00 \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC5D0\uC11C \uCC9C\uC6D0\uBBF8\uB9CC\uC744 \uC808\uC0AC\uD55C \uAE08\uC561\uC744 \uB9D0\uD558\uBA70, "),
                          createVNode("br"),
                          createTextVNode(" \uCD5C\uC800 35\uB9CC\uC6D0\uC5D0\uC11C \uCD5C\uACE0 553\uB9CC\uC6D0\uAE4C\uC9C0\uC758 \uBC94\uC704\uB85C \uACB0\uC815\uD558\uAC8C \uB429\uB2C8\uB2E4. "),
                          createVNode("br"),
                          createTextVNode(" \uB530\uB77C\uC11C, \uC2E0\uACE0\uD55C \uC18C\uB4DD\uC6D4\uC561\uC774 35\uB9CC\uC6D0\uBCF4\uB2E4 \uC801\uC73C\uBA74 35\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD558\uACE0, 553\uB9CC\uC6D0\uBCF4\uB2E4 \uB9CE\uC73C\uBA74 553\uB9CC\uC6D0\uC744 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561\uC73C\uB85C \uD569\uB2C8\uB2E4. (2022.7.1 \uAE30\uC900) ")
                        ]),
                        createVNode("h4", null, "\u2755 \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" \uAE30\uC900\uC18C\uB4DD\uC6D4\uC561 \uC0C1\uD55C\uC561\uACFC \uD558\uD55C\uC561\uC740 \uAD6D\uBBFC\uC5F0\uAE08 \uC0AC\uC5C5\uC7A5\uAC00\uC785\uC790\uC640 \uC9C0\uC5ED\uAC00\uC785\uC790 \uC804\uC6D0(\uB0A9\uBD80\uC608\uC678\uC790 \uC81C\uC678)\uC758 \uD3C9\uADE0\uC18C\uB4DD\uC6D4\uC561\uC758 3\uB144\uAC04 \uBCC0\uB3D9\uD558\uB294 \uBE44\uC728\uC744 \uBC18\uC601\uD558\uC5EC "),
                          createVNode("br"),
                          createTextVNode(" \uB9E4\uB144 3\uC6D4\uB9D0\uAE4C\uC9C0 \uBCF4\uAC74\uBCF5\uC9C0\uBD80 \uC7A5\uAD00\uC774 \uACE0\uC2DC\uD558\uBA70 \uD574\uB2F9\uC5F0\uB3C4 7\uC6D4\uBD80\uD130 1\uB144\uAC04 \uC801\uC6A9\uD569\uB2C8\uB2E4. ")
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/salbase/socialinsure/nationalTap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "preexistingTap",
  __ssrInlineRender: true,
  setup(__props) {
    const baseInsureList = ref(salaryStore().baseInsureList);
    const inputSalary = ref(0);
    const preexistingheaders1 = [
      { title: "\uBCF4\uD5D8\uB8CC \uCD1D\uC561", key: "note", sortable: false },
      { title: "\uC0B0\uC7AC\uBCF4\uD5D8\uB8CC", key: "industRate", sortable: false }
    ];
    const preexistingheaders2 = [
      { title: "\uAD6C\uBD84", key: "note", sortable: false },
      { title: "\uC694\uC728(%)", key: "industRate", sortable: false }
    ];
    const preexisting1 = ref([
      { note: "", industRate: "" }
    ]);
    const preexisting2 = computed(() => [
      {
        note: "\uC5C5\uC885\uC694\uC728(\uC804\uAE30\uAE30\uACC4\uAE30\uAD6C\xB7\uC815\uBC00\uAE30\uAD6C\xB7\uC804\uC790\uC81C\uD488 \uC81C\uC870\uC5C5)",
        industRate: baseInsureList.value.industinsureRates
      },
      {
        note: "\uCD9C\uD1F4\uADFC\uC7AC\uD574\uC694\uC728",
        industRate: baseInsureList.value.industinsurecharRates
      }
    ]);
    const calculate = () => {
      preexisting1.value[0].industRate = inputSalary.value * (preexisting2.value[0].industRate / 100 + preexisting2.value[1].industRate / 100);
      preexisting1.value[0].note = preexisting1.value[0].industRate;
    };
    watch(() => salaryStore().baseInsureList, (newValue) => {
      baseInsureList.value = newValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$7;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> \uC0B0\uC7AC \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 </h1>`);
            _push2(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { onClick: calculate }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBAA8\uC758\uACC4\uC0B0 `);
                            } else {
                              return [
                                createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(inputSalary),
                          "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                          label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { onClick: calculate }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mt-6 mb-6" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: preexistingheaders1,
              items: unref(preexisting1)
            }, {
              "item.note": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.note,
                    "onUpdate:modelValue": ($event) => item.note = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.note,
                      "onUpdate:modelValue": ($event) => item.note = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              "item.industRate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.industRate,
                    "onUpdate:modelValue": ($event) => item.industRate = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.industRate,
                      "onUpdate:modelValue": ($event) => item.industRate = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mb-12",
              headers: preexistingheaders2,
              items: unref(preexisting2)
            }, {
              "item.industRate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: item.industRate,
                    "onUpdate:modelValue": ($event) => item.industRate = $event,
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppTextField, {
                      modelValue: item.industRate,
                      "onUpdate:modelValue": ($event) => item.industRate = $event,
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3${_scopeId3}>INFO</h3><br${_scopeId3}><span${_scopeId3}><h4${_scopeId3}>\u2757 \uBCF4\uD5D8\uB8CC \uC2DD: \uBCF4\uC218\uCD1D\uC561(\uC6D4\uD3C9\uADE0\uBCF4\uC218) \xD7 \uBCF4\uD5D8\uB8CC\uC728 \xF7 1,000</h4><br${_scopeId3}></span>`);
                      } else {
                        return [
                          createVNode("h3", null, "INFO"),
                          createVNode("br"),
                          createVNode("span", null, [
                            createVNode("h4", null, "\u2757 \uBCF4\uD5D8\uB8CC \uC2DD: \uBCF4\uC218\uCD1D\uC561(\uC6D4\uD3C9\uADE0\uBCF4\uC218) \xD7 \uBCF4\uD5D8\uB8CC\uC728 \xF7 1,000"),
                            createVNode("br")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "pt-2" }, {
                      default: withCtx(() => [
                        createVNode("h3", null, "INFO"),
                        createVNode("br"),
                        createVNode("span", null, [
                          createVNode("h4", null, "\u2757 \uBCF4\uD5D8\uB8CC \uC2DD: \uBCF4\uC218\uCD1D\uC561(\uC6D4\uD3C9\uADE0\uBCF4\uC218) \xD7 \uBCF4\uD5D8\uB8CC\uC728 \xF7 1,000"),
                          createVNode("br")
                        ])
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
              createVNode("h1", { class: "text-h3 mb-6" }, " \uC0B0\uC7AC \uC5F0\uAE08 \uBAA8\uC758\uACC4\uC0B0 "),
              createVNode(VDivider, { class: "mb-6" }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(inputSalary),
                        "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                        label: "\uC6D4 \uAE09\uC5EC \uC785\uB825\uD558\uC138\uC694"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { onClick: calculate }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBAA8\uC758\uACC4\uC0B0 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mt-6 mb-6" }),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: preexistingheaders1,
                items: unref(preexisting1)
              }, {
                "item.note": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.note,
                    "onUpdate:modelValue": ($event) => item.note = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "item.industRate": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.industRate,
                    "onUpdate:modelValue": ($event) => item.industRate = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(unref(VDataTable), {
                class: "mb-12",
                headers: preexistingheaders2,
                items: unref(preexisting2)
              }, {
                "item.industRate": withCtx(({ item }) => [
                  createVNode(_component_AppTextField, {
                    modelValue: item.industRate,
                    "onUpdate:modelValue": ($event) => item.industRate = $event,
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("h3", null, "INFO"),
                      createVNode("br"),
                      createVNode("span", null, [
                        createVNode("h4", null, "\u2757 \uBCF4\uD5D8\uB8CC \uC2DD: \uBCF4\uC218\uCD1D\uC561(\uC6D4\uD3C9\uADE0\uBCF4\uC218) \xD7 \uBCF4\uD5D8\uB8CC\uC728 \xF7 1,000"),
                        createVNode("br")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/salbase/socialinsure/preexistingTap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "socialInsure",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const tab = ref("personal-info");
    const selectedYear = ref("");
    const yearList = ref([]);
    const searchYear = async () => {
      if (selectedYear.value === "" || selectedYear.value === null) {
        console.log("Year\uAC12 \uC5C6\uC74C");
      } else {
        await salaryStore().SEARCH_SOCIAL_INSURE(selectedYear.value);
        await baseStore().SET_SELECT_YEAR(selectedYear.value);
      }
    };
    watch([selectedYear], searchYear, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$6;
      _push(`<!--[--><h1 class="mb-6">\uC0AC\uD68C\uBCF4\uD5D8\uAD00\uB9AC</h1>`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppSelect, {
                                modelValue: unref(selectedYear),
                                "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                label: "\uC801\uC6A9\uB144\uB3C4",
                                items: unref(yearList),
                                "single-line": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedYear),
                                  "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                  label: "\uC801\uC6A9\uB144\uB3C4",
                                  items: unref(yearList),
                                  "single-line": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedYear),
                                "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                label: "\uC801\uC6A9\uB144\uB3C4",
                                items: unref(yearList),
                                "single-line": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppSelect, {
                              modelValue: unref(selectedYear),
                              "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                              label: "\uC801\uC6A9\uB144\uB3C4",
                              items: unref(yearList),
                              "single-line": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedYear),
                            "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                            label: "\uC801\uC6A9\uB144\uB3C4",
                            items: unref(yearList),
                            "single-line": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
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
                  _push3(ssrRenderComponent(VTab, { value: "major-insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 4\uB300\uBCF4\uD5D8 `);
                      } else {
                        return [
                          createTextVNode(" 4\uB300\uBCF4\uD5D8 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "national-pension" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uAD6D\uBBFC\uC5F0\uAE08 `);
                      } else {
                        return [
                          createTextVNode(" \uAD6D\uBBFC\uC5F0\uAE08 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "Health-Insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uAC74\uAC15\uBCF4\uD5D8 `);
                      } else {
                        return [
                          createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "Employment-Insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uACE0\uC6A9\uBCF4\uD5D8 `);
                      } else {
                        return [
                          createTextVNode(" \uACE0\uC6A9\uBCF4\uD5D8 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "pre-existing-insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC0B0\uC7AC\uBCF4\uD5D8 `);
                      } else {
                        return [
                          createTextVNode(" \uC0B0\uC7AC\uBCF4\uD5D8 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "major-insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" 4\uB300\uBCF4\uD5D8 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "national-pension" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uAD6D\uBBFC\uC5F0\uAE08 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "Health-Insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "Employment-Insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uACE0\uC6A9\uBCF4\uD5D8 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "pre-existing-insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC0B0\uC7AC\uBCF4\uD5D8 ")
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
                  createVNode(VTab, { value: "major-insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" 4\uB300\uBCF4\uD5D8 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "national-pension" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uAD6D\uBBFC\uC5F0\uAE08 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "Health-Insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uAC74\uAC15\uBCF4\uD5D8 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "Employment-Insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uACE0\uC6A9\uBCF4\uD5D8 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "pre-existing-insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC0B0\uC7AC\uBCF4\uD5D8 ")
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
      _push(ssrRenderComponent(VCard, { flat: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, { value: "major-insurance" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "national-pension" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "Health-Insurance" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "Employment-Insurance" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "pre-existing-insurance" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, { value: "major-insurance" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "national-pension" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "Health-Insurance" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "Employment-Insurance" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "pre-existing-insurance" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindow, {
                      modelValue: unref(tab),
                      "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                      class: "disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: "major-insurance" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "national-pension" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "Health-Insurance" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "Employment-Insurance" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "pre-existing-insurance" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, { value: "major-insurance" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "national-pension" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "Health-Insurance" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "Employment-Insurance" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "pre-existing-insurance" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/salbase/socialInsure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
