import { _ as _sfc_main$1 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "salary",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    dailyLaborStore();
    const TaxList = ref([]);
    const headers = [
      { title: "\uC694\uC728(%)", key: "standard" },
      { title: "\uADFC\uB85C\uC790(%)", key: "empPercent" },
      { title: "\uC0AC\uC5C5\uC8FC(%)", key: "workPercent" },
      { title: "\uACC4\uC0B0\uBC95", key: "note" }
    ];
    const IncomeHeaders = [
      { title: "\uAD6C\uBD84", key: "gubun" },
      { title: "\uACC4\uC0B0\uBC95", key: "note" }
    ];
    const newNationPension = computed(() => [
      {
        standard: TaxList.value.nationPensionRates,
        empPercent: TaxList.value.nationPensionRates / 2,
        workPercent: TaxList.value.nationPensionRates / 2,
        note: `\uC784\uAE08(\uB178\uBB34\uBE44)\uCD1D\uC561*${TaxList.value.nationPensionRates / 2}%`
      }
    ]);
    const newHealthInsure = computed(() => [
      {
        standard: TaxList.value.healthInsureRates,
        empPercent: TaxList.value.healthInsureRates / 2,
        workPercent: TaxList.value.healthInsureRates / 2,
        note: `\uC784\uAE08(\uB178\uBB34\uBE44)\uCD1D\uC561*${TaxList.value.healthInsureRates / 2}%`
      }
    ]);
    const newlongTermCareRate = computed(() => [
      {
        standard: TaxList.value.longTermCareRate,
        empPercent: TaxList.value.longTermCareRate / 2,
        workPercent: TaxList.value.longTermCareRate / 2,
        note: `\uAC74\uAC15\uBCF4\uD5D8\uB8CC*${TaxList.value.longTermCareRate / 2}%`
      }
    ]);
    const newEmpInsure = computed(() => [
      {
        standard: TaxList.value.empInsureRates,
        empPercent: TaxList.value.empInsureRates / 2,
        workPercent: TaxList.value.empInsureRates / 2,
        note: `\uC784\uAE08(\uB178\uBB34\uBE44)\uCD1D\uC561*${TaxList.value.empInsureRates}%`
      }
    ]);
    const newIndustInsure = computed(() => [
      {
        standard: TaxList.value.wrkInsureRates,
        empPercent: "\uB0A9\uBD80\uC548\uD568",
        workPercent: "\uC5C5\uC885\uBCC4\uB85C \uC0C1\uC774\uD568",
        note: ""
      }
    ]);
    const newIncome = computed(() => [
      {
        gubun: "\uC77C\uB2F9 150,000\uC6D0 \uC774\uC0C1 \uACF5\uC81C",
        note: `\uC77C\uB2F9-150,000*${TaxList.value.incomeTaxRates}%`
      }
    ]);
    const newLocalIncome = computed(() => [
      {
        gubun: `\uC18C\uB4DD\uC138\uC758 ${TaxList.value.localIncomeTaxRates}%`,
        note: `\uC18C\uB4DD\uC138*${TaxList.value.localIncomeTaxRates}%`
      }
    ]);
    const addNationalPension = async () => {
      console.log(TaxList.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6"> \uC77C\uC6A9\uADFC\uB85C \uACF5\uC81C\uAD00\uB9AC </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uAD6D\uBBFC\uC5F0\uAE08 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, { onClick: addNationalPension }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uACF5\uC81C \uAE30\uC900 \uB4F1\uB85D `);
                            } else {
                              return [
                                createTextVNode(" \uACF5\uC81C \uAE30\uC900 \uB4F1\uB85D ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uAD6D\uBBFC\uC5F0\uAE08 "),
                          createVNode(VSpacer),
                          createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                            createVNode(VBtn, { onClick: addNationalPension }, {
                              default: withCtx(() => [
                                createTextVNode(" \uACF5\uC81C \uAE30\uC900 \uB4F1\uB85D ")
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
                    class: "mb-12",
                    headers,
                    items: unref(newNationPension)
                  }, {
                    "item.standard": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.standard,
                            "onUpdate:modelValue": ($event) => item.standard = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.empPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.empPercent,
                            "onUpdate:modelValue": ($event) => item.empPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.workPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.workPercent,
                            "onUpdate:modelValue": ($event) => item.workPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uAC74\uAC15\uBCF4\uD5D8 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uAC74\uAC15\uBCF4\uD5D8 "),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newHealthInsure)
                  }, {
                    "item.standard": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.standard,
                            "onUpdate:modelValue": ($event) => item.standard = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.empPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.empPercent,
                            "onUpdate:modelValue": ($event) => item.empPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.workPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.workPercent,
                            "onUpdate:modelValue": ($event) => item.workPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8 "),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newlongTermCareRate)
                  }, {
                    "item.standard": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.standard,
                            "onUpdate:modelValue": ($event) => item.standard = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.empPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.empPercent,
                            "onUpdate:modelValue": ($event) => item.empPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.workPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.workPercent,
                            "onUpdate:modelValue": ($event) => item.workPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uACE0\uC6A9\uBCF4\uD5D8 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uACE0\uC6A9\uBCF4\uD5D8 "),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newEmpInsure)
                  }, {
                    "item.standard": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.standard,
                            "onUpdate:modelValue": ($event) => item.standard = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.empPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.empPercent,
                            "onUpdate:modelValue": ($event) => item.empPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.workPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.workPercent,
                            "onUpdate:modelValue": ($event) => item.workPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uC0B0\uC7AC\uBCF4\uD5D8 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uC0B0\uC7AC\uBCF4\uD5D8 "),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newIndustInsure)
                  }, {
                    "item.standard": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.standard,
                            "onUpdate:modelValue": ($event) => item.standard = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.empPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.empPercent,
                            "onUpdate:modelValue": ($event) => item.empPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    "item.workPercent": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: item.workPercent,
                            "onUpdate:modelValue": ($event) => item.workPercent = $event,
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uC18C\uB4DD\uC138 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uC18C\uB4DD\uC138 "),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    class: "mb-12",
                    headers: IncomeHeaders,
                    items: unref(newIncome)
                  }, {
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> \uC9C0\uBC29\uC138 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " \uC9C0\uBC29\uC138 "),
                          createVNode(VSpacer)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    class: "mb-12",
                    headers: IncomeHeaders,
                    items: unref(newLocalIncome)
                  }, {
                    bottom: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3" }, " \uAD6D\uBBFC\uC5F0\uAE08 "),
                        createVNode(VSpacer),
                        createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                          createVNode(VBtn, { onClick: addNationalPension }, {
                            default: withCtx(() => [
                              createTextVNode(" \uACF5\uC81C \uAE30\uC900 \uB4F1\uB85D ")
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
                      headers,
                      items: unref(newNationPension)
                    }, {
                      "item.standard": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.empPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.workPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                        createVNode("h1", { class: "text-h3" }, " \uAC74\uAC15\uBCF4\uD5D8 "),
                        createVNode(VSpacer)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      class: "mb-12",
                      headers,
                      items: unref(newHealthInsure)
                    }, {
                      "item.standard": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.empPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.workPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                        createVNode("h1", { class: "text-h3" }, " \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8 "),
                        createVNode(VSpacer)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      class: "mb-12",
                      headers,
                      items: unref(newlongTermCareRate)
                    }, {
                      "item.standard": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.empPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.workPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                        createVNode("h1", { class: "text-h3" }, " \uACE0\uC6A9\uBCF4\uD5D8 "),
                        createVNode(VSpacer)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      class: "mb-12",
                      headers,
                      items: unref(newEmpInsure)
                    }, {
                      "item.standard": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.empPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.workPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                        createVNode("h1", { class: "text-h3" }, " \uC0B0\uC7AC\uBCF4\uD5D8 "),
                        createVNode(VSpacer)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      class: "mb-12",
                      headers,
                      items: unref(newIndustInsure)
                    }, {
                      "item.standard": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.standard,
                          "onUpdate:modelValue": ($event) => item.standard = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.empPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.empPercent,
                          "onUpdate:modelValue": ($event) => item.empPercent = $event,
                          disabled: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      "item.workPercent": withCtx(({ item }) => [
                        createVNode(_component_AppTextField, {
                          modelValue: item.workPercent,
                          "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                        createVNode("h1", { class: "text-h3" }, " \uC18C\uB4DD\uC138 "),
                        createVNode(VSpacer)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      class: "mb-12",
                      headers: IncomeHeaders,
                      items: unref(newIncome)
                    }, {
                      bottom: withCtx(() => [
                        createVNode(VDivider)
                      ]),
                      _: 1
                    }, 8, ["items"]),
                    createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h3" }, " \uC9C0\uBC29\uC138 "),
                        createVNode(VSpacer)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(VDataTable), {
                      class: "mb-12",
                      headers: IncomeHeaders,
                      items: unref(newLocalIncome)
                    }, {
                      bottom: withCtx(() => [
                        createVNode(VDivider)
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "mb-6" }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h3" }, " \uAD6D\uBBFC\uC5F0\uAE08 "),
                      createVNode(VSpacer),
                      createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                        createVNode(VBtn, { onClick: addNationalPension }, {
                          default: withCtx(() => [
                            createTextVNode(" \uACF5\uC81C \uAE30\uC900 \uB4F1\uB85D ")
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
                    headers,
                    items: unref(newNationPension)
                  }, {
                    "item.standard": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.standard,
                        "onUpdate:modelValue": ($event) => item.standard = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.empPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.empPercent,
                        "onUpdate:modelValue": ($event) => item.empPercent = $event,
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.workPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.workPercent,
                        "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                      createVNode("h1", { class: "text-h3" }, " \uAC74\uAC15\uBCF4\uD5D8 "),
                      createVNode(VSpacer)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newHealthInsure)
                  }, {
                    "item.standard": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.standard,
                        "onUpdate:modelValue": ($event) => item.standard = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.empPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.empPercent,
                        "onUpdate:modelValue": ($event) => item.empPercent = $event,
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.workPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.workPercent,
                        "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                      createVNode("h1", { class: "text-h3" }, " \uC7A5\uAE30\uC694\uC591\uBCF4\uD5D8 "),
                      createVNode(VSpacer)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newlongTermCareRate)
                  }, {
                    "item.standard": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.standard,
                        "onUpdate:modelValue": ($event) => item.standard = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.empPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.empPercent,
                        "onUpdate:modelValue": ($event) => item.empPercent = $event,
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.workPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.workPercent,
                        "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                      createVNode("h1", { class: "text-h3" }, " \uACE0\uC6A9\uBCF4\uD5D8 "),
                      createVNode(VSpacer)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newEmpInsure)
                  }, {
                    "item.standard": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.standard,
                        "onUpdate:modelValue": ($event) => item.standard = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.empPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.empPercent,
                        "onUpdate:modelValue": ($event) => item.empPercent = $event,
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.workPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.workPercent,
                        "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                      createVNode("h1", { class: "text-h3" }, " \uC0B0\uC7AC\uBCF4\uD5D8 "),
                      createVNode(VSpacer)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    class: "mb-12",
                    headers,
                    items: unref(newIndustInsure)
                  }, {
                    "item.standard": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.standard,
                        "onUpdate:modelValue": ($event) => item.standard = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.empPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.empPercent,
                        "onUpdate:modelValue": ($event) => item.empPercent = $event,
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    "item.workPercent": withCtx(({ item }) => [
                      createVNode(_component_AppTextField, {
                        modelValue: item.workPercent,
                        "onUpdate:modelValue": ($event) => item.workPercent = $event,
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
                      createVNode("h1", { class: "text-h3" }, " \uC18C\uB4DD\uC138 "),
                      createVNode(VSpacer)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    class: "mb-12",
                    headers: IncomeHeaders,
                    items: unref(newIncome)
                  }, {
                    bottom: withCtx(() => [
                      createVNode(VDivider)
                    ]),
                    _: 1
                  }, 8, ["items"]),
                  createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h3" }, " \uC9C0\uBC29\uC138 "),
                      createVNode(VSpacer)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(VDataTable), {
                    class: "mb-12",
                    headers: IncomeHeaders,
                    items: unref(newLocalIncome)
                  }, {
                    bottom: withCtx(() => [
                      createVNode(VDivider)
                    ]),
                    _: 1
                  }, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailysal/salary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
