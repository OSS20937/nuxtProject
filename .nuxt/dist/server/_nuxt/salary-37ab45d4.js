import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { d as dailyLaborStore } from "./index-183b4e75.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn } from "../server.mjs";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "./VCheckboxBtn-aab82c77.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "axios";
import "cookie-es";
import "destr";
import "ohash";
import "@antfu/utils";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@casl/vue";
/* empty css                */import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "salary",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    dailyLaborStore();
    const TaxList = ref([]);
    const headers = [
      { title: "요율(%)", key: "standard" },
      { title: "근로자(%)", key: "empPercent" },
      { title: "사업주(%)", key: "workPercent" },
      { title: "계산법", key: "note" }
    ];
    const IncomeHeaders = [
      { title: "구분", key: "gubun" },
      { title: "계산법", key: "note" }
    ];
    const newNationPension = computed(() => [
      {
        standard: TaxList.value.nationPensionRates,
        empPercent: TaxList.value.nationPensionRates / 2,
        workPercent: TaxList.value.nationPensionRates / 2,
        note: `임금(노무비)총액*${TaxList.value.nationPensionRates / 2}%`
      }
    ]);
    const newHealthInsure = computed(() => [
      {
        standard: TaxList.value.healthInsureRates,
        empPercent: TaxList.value.healthInsureRates / 2,
        workPercent: TaxList.value.healthInsureRates / 2,
        note: `임금(노무비)총액*${TaxList.value.healthInsureRates / 2}%`
      }
    ]);
    const newlongTermCareRate = computed(() => [
      {
        standard: TaxList.value.longTermCareRate,
        empPercent: TaxList.value.longTermCareRate / 2,
        workPercent: TaxList.value.longTermCareRate / 2,
        note: `건강보험료*${TaxList.value.longTermCareRate / 2}%`
      }
    ]);
    const newEmpInsure = computed(() => [
      {
        standard: TaxList.value.empInsureRates,
        empPercent: TaxList.value.empInsureRates / 2,
        workPercent: TaxList.value.empInsureRates / 2,
        note: `임금(노무비)총액*${TaxList.value.empInsureRates}%`
      }
    ]);
    const newIndustInsure = computed(() => [
      {
        standard: TaxList.value.wrkInsureRates,
        empPercent: "납부안함",
        workPercent: "업종별로 상이함",
        note: ""
      }
    ]);
    const newIncome = computed(() => [
      {
        gubun: "일당 150,000원 이상 공제",
        note: `일당-150,000*${TaxList.value.incomeTaxRates}%`
      }
    ]);
    const newLocalIncome = computed(() => [
      {
        gubun: `소득세의 ${TaxList.value.localIncomeTaxRates}%`,
        note: `소득세*${TaxList.value.localIncomeTaxRates}%`
      }
    ]);
    const addNationalPension = async () => {
      console.log(TaxList.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6"> 일용근로 공제관리 </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h3"${_scopeId3}> 국민연금 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, { onClick: addNationalPension }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 공제 기준 등록 `);
                            } else {
                              return [
                                createTextVNode(" 공제 기준 등록 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 국민연금 "),
                          createVNode(VSpacer),
                          createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                            createVNode(VBtn, { onClick: addNationalPension }, {
                              default: withCtx(() => [
                                createTextVNode(" 공제 기준 등록 ")
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
                        _push4(`<h1 class="text-h3"${_scopeId3}> 건강보험 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 건강보험 "),
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
                        _push4(`<h1 class="text-h3"${_scopeId3}> 장기요양보험 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 장기요양보험 "),
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
                        _push4(`<h1 class="text-h3"${_scopeId3}> 고용보험 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 고용보험 "),
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
                        _push4(`<h1 class="text-h3"${_scopeId3}> 산재보험 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 산재보험 "),
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
                        _push4(`<h1 class="text-h3"${_scopeId3}> 소득세 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 소득세 "),
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
                        _push4(`<h1 class="text-h3"${_scopeId3}> 지방세 </h1>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h3" }, " 지방세 "),
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
                        createVNode("h1", { class: "text-h3" }, " 국민연금 "),
                        createVNode(VSpacer),
                        createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                          createVNode(VBtn, { onClick: addNationalPension }, {
                            default: withCtx(() => [
                              createTextVNode(" 공제 기준 등록 ")
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
                        createVNode("h1", { class: "text-h3" }, " 건강보험 "),
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
                        createVNode("h1", { class: "text-h3" }, " 장기요양보험 "),
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
                        createVNode("h1", { class: "text-h3" }, " 고용보험 "),
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
                        createVNode("h1", { class: "text-h3" }, " 산재보험 "),
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
                        createVNode("h1", { class: "text-h3" }, " 소득세 "),
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
                        createVNode("h1", { class: "text-h3" }, " 지방세 "),
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
                      createVNode("h1", { class: "text-h3" }, " 국민연금 "),
                      createVNode(VSpacer),
                      createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                        createVNode(VBtn, { onClick: addNationalPension }, {
                          default: withCtx(() => [
                            createTextVNode(" 공제 기준 등록 ")
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
                      createVNode("h1", { class: "text-h3" }, " 건강보험 "),
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
                      createVNode("h1", { class: "text-h3" }, " 장기요양보험 "),
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
                      createVNode("h1", { class: "text-h3" }, " 고용보험 "),
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
                      createVNode("h1", { class: "text-h3" }, " 산재보험 "),
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
                      createVNode("h1", { class: "text-h3" }, " 소득세 "),
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
                      createVNode("h1", { class: "text-h3" }, " 지방세 "),
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
export {
  _sfc_main as default
};
