import { _ as _sfc_main$7 } from "./AppSelect-04d0f8a2.js";
import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b as baseStore } from "./index-77616e20.js";
import { s as salaryStore } from "./index-cfe0baa7.js";
import { _ as _sfc_main$6 } from "./AppTextField-dee429aa.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { b as VBtn, V as VCard, f as VCardText, m as VSpacer } from "../server.mjs";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-258f0110.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
/* empty css                */import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "employmentTap",
  __ssrInlineRender: true,
  setup(__props) {
    const baseInsureList = ref(salaryStore().baseInsureList);
    const inputSalary = ref(0);
    const Employmentheaders1 = [
      { title: "총액", key: "standard", sortable: false },
      { title: "근로자 부담금(실업급여)", key: "empInsure", sortable: false },
      { title: "사업자 부담금(실업급여+고용안정직능개발 부담금)", key: "workInsure", sortable: false }
    ];
    const Employmentheaders2 = [
      { title: "구분", key: "note", sortable: false },
      { title: "보험료율(%)", key: "standard", sortable: false },
      { title: "근로자(%)", key: "empInsure", sortable: false },
      { title: "사업주(%)", key: "workInsure", sortable: false }
    ];
    const Employment1 = ref([
      { standard: "", empInsure: "", workInsure: "" }
    ]);
    const Employment2 = computed(() => [
      {
        note: "실업급여",
        standard: baseInsureList.value.wrkinsureRates,
        empInsure: baseInsureList.value.wrkinsureRates / 2,
        workInsure: baseInsureList.value.wrkinsureRates / 2
      },
      {
        note: "고용안정, 직업능력 개발사업(150인미만)",
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
      const _component_AppTextField = _sfc_main$6;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> 고용 연금 모의계산 </h1>`);
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
                          label: "월 급여 입력하세요"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "월 급여 입력하세요"
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
                              _push5(` 모의계산 `);
                            } else {
                              return [
                                createTextVNode(" 모의계산 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" 모의계산 ")
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
                          label: "월 급여 입력하세요"
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
                            createTextVNode(" 모의계산 ")
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
              createVNode("h1", { class: "text-h3 mb-6" }, " 고용 연금 모의계산 "),
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
                        label: "월 급여 입력하세요"
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
                          createTextVNode(" 모의계산 ")
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
      { title: "구분", key: "note", sortable: false },
      { title: "연금보험료(전체)", key: "insureRate", sortable: false },
      { title: "근로자 부담금", key: "empHealth", sortable: false },
      { title: "사업자 부담금", key: "workHealth", sortable: false }
    ];
    const Healthheaders2 = [
      { title: "구분", key: "note", sortable: false },
      { title: "기준액", key: "standard", sortable: false },
      { title: "보험료율(%)", key: "insureRate", sortable: false },
      { title: "근로자(%)", key: "empHealth", sortable: false },
      { title: "사업주(%)", key: "workHealth", sortable: false }
    ];
    const Health1 = ref([
      { note: "건강보험료", insureRate: "", empHealth: "", workHealth: "" },
      { note: "장기요양보험료", insureRate: "", empHealth: "", workHealth: "" }
    ]);
    const Health2 = computed(() => [
      {
        note: "건강보험료",
        standard: "보수월액",
        insureRate: baseInsureList.value.healthinsureRates,
        empHealth: baseInsureList.value.healthinsureRates / 2,
        workHealth: baseInsureList.value.healthinsureRates / 2
      },
      {
        note: "장기요양보험료",
        standard: "건강보험료",
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
      const _component_AppTextField = _sfc_main$6;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> 건강 연금 모의계산 </h1>`);
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
                          label: "월 급여 입력하세요"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "월 급여 입력하세요"
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
                              _push5(` 모의계산 `);
                            } else {
                              return [
                                createTextVNode(" 모의계산 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" 모의계산 ")
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
                          label: "월 급여 입력하세요"
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
                            createTextVNode(" 모의계산 ")
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
                        _push4(`<h3${_scopeId3}>INFO</h3><br${_scopeId3}><span${_scopeId3}><h4${_scopeId3}>❗ 계산내용은 직장가입자의 보수월액에 따른 모의계산결과로서 실제와 다를 수 있으며 보수(월급) 외 소득(연 3,400만원 초과)이 있으면<br${_scopeId3}> 실제 보험료와는 차이가 있을 수 있습니다.</h4><br${_scopeId3}><h4${_scopeId3}>❕ 예) 보수월액이 2,000,000원일 때, 계산방법(2023년 기준)</h4><br${_scopeId3}><p${_scopeId3}> 직장가입자 본인 부담금(건강보험료 + 장기요양보험료) 79,980원 <br${_scopeId3}> 건강보험료 : 2,000,000(보수월액) x 3.545% = 70,900원 <br${_scopeId3}> ㆍ장기요양보험료 : 70,900원(건강보험료) x ( 0.9082% / 7.09% ) = 9,080원(원단위 절사) <br${_scopeId3}> 신장기요양보험료율(0.9082%) = 장기요양보험료율(12.81%) x 건강보험료율(7.09%) <br${_scopeId3}> ⇨ 사업장에서 납부할 보험료 = 본인 부담금(50%) + 사업장 부담금(50%) <br${_scopeId3}> = 79,980원 + 79,980원 = 159,960원 <br${_scopeId3}></p></span>`);
                      } else {
                        return [
                          createVNode("h3", null, "INFO"),
                          createVNode("br"),
                          createVNode("span", null, [
                            createVNode("h4", null, [
                              createTextVNode("❗ 계산내용은 직장가입자의 보수월액에 따른 모의계산결과로서 실제와 다를 수 있으며 보수(월급) 외 소득(연 3,400만원 초과)이 있으면"),
                              createVNode("br"),
                              createTextVNode(" 실제 보험료와는 차이가 있을 수 있습니다.")
                            ]),
                            createVNode("br"),
                            createVNode("h4", null, "❕ 예) 보수월액이 2,000,000원일 때, 계산방법(2023년 기준)"),
                            createVNode("br"),
                            createVNode("p", null, [
                              createTextVNode(" 직장가입자 본인 부담금(건강보험료 + 장기요양보험료) 79,980원 "),
                              createVNode("br"),
                              createTextVNode(" 건강보험료 : 2,000,000(보수월액) x 3.545% = 70,900원 "),
                              createVNode("br"),
                              createTextVNode(" ㆍ장기요양보험료 : 70,900원(건강보험료) x ( 0.9082% / 7.09% ) = 9,080원(원단위 절사) "),
                              createVNode("br"),
                              createTextVNode(" 신장기요양보험료율(0.9082%) = 장기요양보험료율(12.81%) x 건강보험료율(7.09%) "),
                              createVNode("br"),
                              createTextVNode(" ⇨ 사업장에서 납부할 보험료 = 본인 부담금(50%) + 사업장 부담금(50%) "),
                              createVNode("br"),
                              createTextVNode(" = 79,980원 + 79,980원 = 159,960원 "),
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
                            createTextVNode("❗ 계산내용은 직장가입자의 보수월액에 따른 모의계산결과로서 실제와 다를 수 있으며 보수(월급) 외 소득(연 3,400만원 초과)이 있으면"),
                            createVNode("br"),
                            createTextVNode(" 실제 보험료와는 차이가 있을 수 있습니다.")
                          ]),
                          createVNode("br"),
                          createVNode("h4", null, "❕ 예) 보수월액이 2,000,000원일 때, 계산방법(2023년 기준)"),
                          createVNode("br"),
                          createVNode("p", null, [
                            createTextVNode(" 직장가입자 본인 부담금(건강보험료 + 장기요양보험료) 79,980원 "),
                            createVNode("br"),
                            createTextVNode(" 건강보험료 : 2,000,000(보수월액) x 3.545% = 70,900원 "),
                            createVNode("br"),
                            createTextVNode(" ㆍ장기요양보험료 : 70,900원(건강보험료) x ( 0.9082% / 7.09% ) = 9,080원(원단위 절사) "),
                            createVNode("br"),
                            createTextVNode(" 신장기요양보험료율(0.9082%) = 장기요양보험료율(12.81%) x 건강보험료율(7.09%) "),
                            createVNode("br"),
                            createTextVNode(" ⇨ 사업장에서 납부할 보험료 = 본인 부담금(50%) + 사업장 부담금(50%) "),
                            createVNode("br"),
                            createTextVNode(" = 79,980원 + 79,980원 = 159,960원 "),
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
              createVNode("h1", { class: "text-h3 mb-6" }, " 건강 연금 모의계산 "),
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
                        label: "월 급여 입력하세요"
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
                          createTextVNode(" 모의계산 ")
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
                          createTextVNode("❗ 계산내용은 직장가입자의 보수월액에 따른 모의계산결과로서 실제와 다를 수 있으며 보수(월급) 외 소득(연 3,400만원 초과)이 있으면"),
                          createVNode("br"),
                          createTextVNode(" 실제 보험료와는 차이가 있을 수 있습니다.")
                        ]),
                        createVNode("br"),
                        createVNode("h4", null, "❕ 예) 보수월액이 2,000,000원일 때, 계산방법(2023년 기준)"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" 직장가입자 본인 부담금(건강보험료 + 장기요양보험료) 79,980원 "),
                          createVNode("br"),
                          createTextVNode(" 건강보험료 : 2,000,000(보수월액) x 3.545% = 70,900원 "),
                          createVNode("br"),
                          createTextVNode(" ㆍ장기요양보험료 : 70,900원(건강보험료) x ( 0.9082% / 7.09% ) = 9,080원(원단위 절사) "),
                          createVNode("br"),
                          createTextVNode(" 신장기요양보험료율(0.9082%) = 장기요양보험료율(12.81%) x 건강보험료율(7.09%) "),
                          createVNode("br"),
                          createTextVNode(" ⇨ 사업장에서 납부할 보험료 = 본인 부담금(50%) + 사업장 부담금(50%) "),
                          createVNode("br"),
                          createTextVNode(" = 79,980원 + 79,980원 = 159,960원 "),
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
      { title: "비고", key: "note", sortable: false },
      { title: "연금보험료(전체)(%)", key: "nationalPension", sortable: false },
      { title: "근로자(%)", key: "empNation", sortable: false },
      { title: "사업주(%)", key: "workNation", sortable: false }
    ];
    const nationalheaders = [
      { title: "구분", key: "note", sortable: false },
      { title: "기준액", key: "standard", sortable: false },
      { title: "보험료율", key: "insureRate", sortable: false },
      { title: "근로자(%)", key: "empHealth", sortable: false },
      { title: "사업주(%)", key: "workHealth", sortable: false }
    ];
    const Healthheaders = [
      { title: "구분", key: "note", sortable: false },
      { title: "보험료율(%)", key: "standard", sortable: false },
      { title: "근로자(%)", key: "empInsure", sortable: false },
      { title: "사업자(%)", key: "workInsure", sortable: false }
    ];
    const preexistingheaders = [
      { title: "구분", key: "note", sortable: false },
      { title: "요율(%)", key: "industRate", sortable: false }
    ];
    const newNationPension = computed(() => [
      {
        note: "기준 소득월액",
        nationalPension: baseInsureList.value.nationPensionRates,
        empNation: baseInsureList.value.nationPensionRates / 2,
        workNation: baseInsureList.value.nationPensionRates / 2
      }
    ]);
    const newHealthInsure = computed(() => [
      {
        note: "건강보험료",
        standard: "보수월액",
        insureRate: baseInsureList.value.healthInsureRates,
        empHealth: baseInsureList.value.healthInsureRates / 2,
        workHealth: baseInsureList.value.healthInsureRates / 2
      },
      {
        note: "장기요양보험료",
        standard: "건강보험료",
        insureRate: baseInsureList.value.longTermCareRate,
        empHealth: baseInsureList.value.longTermCareRate / 2,
        workHealth: baseInsureList.value.longTermCareRate / 2
      }
    ]);
    const newEmpInsure = computed(() => [
      {
        note: "실업급여",
        standard: baseInsureList.value.wrkInsureRates,
        empInsure: baseInsureList.value.wrkInsureRates / 2,
        workInsure: baseInsureList.value.wrkInsureRates / 2
      },
      {
        note: "고용안정, 직업능력 개발사업(150인미만)",
        standard: baseInsureList.value.jobstabilRates,
        empInsure: "-",
        workInsure: baseInsureList.value.jobstabilRates
      }
    ]);
    const newIndustInsure = computed(() => [
      {
        note: "업종요율(전기기계기구·정밀기구·전자제품 제조업)",
        industRate: baseInsureList.value.industInsureRates
      },
      {
        note: "출퇴근재해요율",
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
      const _component_AppTextField = _sfc_main$6;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h3"${_scopeId2}>국민연금</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addNationalPension }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 국민연금 기준 등록 `);
                      } else {
                        return [
                          createTextVNode(" 국민연금 기준 등록 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "국민연금"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addNationalPension }, {
                        default: withCtx(() => [
                          createTextVNode(" 국민연금 기준 등록 ")
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
                  _push3(`<h1 class="text-h3"${_scopeId2}>건강보험</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addHealthInsure }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 건강보험 기준 등록 `);
                      } else {
                        return [
                          createTextVNode(" 건강보험 기준 등록 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "건강보험"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addHealthInsure }, {
                        default: withCtx(() => [
                          createTextVNode(" 건강보험 기준 등록 ")
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
                  _push3(`<h1 class="text-h3"${_scopeId2}>고용보험</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addEmpInsure }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 고용보험 기준 등록 `);
                      } else {
                        return [
                          createTextVNode(" 고용보험 기준 등록 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "고용보험"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addEmpInsure }, {
                        default: withCtx(() => [
                          createTextVNode(" 고용보험 기준 등록 ")
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
                  _push3(`<h1 class="text-h3"${_scopeId2}>산재보험</h1>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: addIndustInsure }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 산재보험 기준 등록 `);
                      } else {
                        return [
                          createTextVNode(" 산재보험 기준 등록 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h3" }, "산재보험"),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: addIndustInsure }, {
                        default: withCtx(() => [
                          createTextVNode(" 산재보험 기준 등록 ")
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
                  createVNode("h1", { class: "text-h3" }, "국민연금"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addNationalPension }, {
                      default: withCtx(() => [
                        createTextVNode(" 국민연금 기준 등록 ")
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
                  createVNode("h1", { class: "text-h3" }, "건강보험"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addHealthInsure }, {
                      default: withCtx(() => [
                        createTextVNode(" 건강보험 기준 등록 ")
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
                  createVNode("h1", { class: "text-h3" }, "고용보험"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addEmpInsure }, {
                      default: withCtx(() => [
                        createTextVNode(" 고용보험 기준 등록 ")
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
                  createVNode("h1", { class: "text-h3" }, "산재보험"),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: addIndustInsure }, {
                      default: withCtx(() => [
                        createTextVNode(" 산재보험 기준 등록 ")
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
      { title: "연금보험료(전체)", key: "nationalPension", sortable: false },
      { title: "근로자 부담금", key: "empNation", sortable: false },
      { title: "사업자 부담금", key: "workNation", sortable: false }
    ];
    const nationalheaders2 = [
      { title: "비고", key: "note", sortable: false },
      { title: "연금보험료(전체)(%)", key: "nationalPension", sortable: false },
      { title: "근로자(%)", key: "empNation", sortable: false },
      { title: "사업주(%)", key: "workNation", sortable: false }
    ];
    const national1 = ref([
      { nationalPension: "", empNation: "", workNation: "" }
    ]);
    const national2 = computed(() => [
      {
        note: "기준 소득월액",
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
      const _component_AppTextField = _sfc_main$6;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> 국민 연금 모의계산 </h1>`);
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
                          label: "월 급여 입력하세요"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "월 급여 입력하세요"
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
                              _push5(` 모의계산 `);
                            } else {
                              return [
                                createTextVNode(" 모의계산 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" 모의계산 ")
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
                          label: "월 급여 입력하세요"
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
                            createTextVNode(" 모의계산 ")
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
                        _push4(`<h3${_scopeId3}>INFO</h3><br${_scopeId3}><span${_scopeId3}><h4${_scopeId3}>❗ 연금보험료 = 기준소득월액 X 9%(연금보험료율)</h4><br${_scopeId3}><h4${_scopeId3}>❕ 기준소득월액</h4><br${_scopeId3}><p${_scopeId3}> 기준소득월액이란 국민연금의 보험료 및 급여 산정을 위하여 가입자가 신고한 소득월액에서 천원미만을 절사한 금액을 말하며, <br${_scopeId3}> 최저 35만원에서 최고 553만원까지의 범위로 결정하게 됩니다. <br${_scopeId3}> 따라서, 신고한 소득월액이 35만원보다 적으면 35만원을 기준소득월액으로 하고, 553만원보다 많으면 553만원을 기준소득월액으로 합니다. (2022.7.1 기준) </p><h4${_scopeId3}>❕ 기준소득월액 상한액과 하한액</h4><br${_scopeId3}><p${_scopeId3}> 기준소득월액 상한액과 하한액은 국민연금 사업장가입자와 지역가입자 전원(납부예외자 제외)의 평균소득월액의 3년간 변동하는 비율을 반영하여 <br${_scopeId3}> 매년 3월말까지 보건복지부 장관이 고시하며 해당연도 7월부터 1년간 적용합니다. </p></span>`);
                      } else {
                        return [
                          createVNode("h3", null, "INFO"),
                          createVNode("br"),
                          createVNode("span", null, [
                            createVNode("h4", null, "❗ 연금보험료 = 기준소득월액 X 9%(연금보험료율)"),
                            createVNode("br"),
                            createVNode("h4", null, "❕ 기준소득월액"),
                            createVNode("br"),
                            createVNode("p", null, [
                              createTextVNode(" 기준소득월액이란 국민연금의 보험료 및 급여 산정을 위하여 가입자가 신고한 소득월액에서 천원미만을 절사한 금액을 말하며, "),
                              createVNode("br"),
                              createTextVNode(" 최저 35만원에서 최고 553만원까지의 범위로 결정하게 됩니다. "),
                              createVNode("br"),
                              createTextVNode(" 따라서, 신고한 소득월액이 35만원보다 적으면 35만원을 기준소득월액으로 하고, 553만원보다 많으면 553만원을 기준소득월액으로 합니다. (2022.7.1 기준) ")
                            ]),
                            createVNode("h4", null, "❕ 기준소득월액 상한액과 하한액"),
                            createVNode("br"),
                            createVNode("p", null, [
                              createTextVNode(" 기준소득월액 상한액과 하한액은 국민연금 사업장가입자와 지역가입자 전원(납부예외자 제외)의 평균소득월액의 3년간 변동하는 비율을 반영하여 "),
                              createVNode("br"),
                              createTextVNode(" 매년 3월말까지 보건복지부 장관이 고시하며 해당연도 7월부터 1년간 적용합니다. ")
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
                          createVNode("h4", null, "❗ 연금보험료 = 기준소득월액 X 9%(연금보험료율)"),
                          createVNode("br"),
                          createVNode("h4", null, "❕ 기준소득월액"),
                          createVNode("br"),
                          createVNode("p", null, [
                            createTextVNode(" 기준소득월액이란 국민연금의 보험료 및 급여 산정을 위하여 가입자가 신고한 소득월액에서 천원미만을 절사한 금액을 말하며, "),
                            createVNode("br"),
                            createTextVNode(" 최저 35만원에서 최고 553만원까지의 범위로 결정하게 됩니다. "),
                            createVNode("br"),
                            createTextVNode(" 따라서, 신고한 소득월액이 35만원보다 적으면 35만원을 기준소득월액으로 하고, 553만원보다 많으면 553만원을 기준소득월액으로 합니다. (2022.7.1 기준) ")
                          ]),
                          createVNode("h4", null, "❕ 기준소득월액 상한액과 하한액"),
                          createVNode("br"),
                          createVNode("p", null, [
                            createTextVNode(" 기준소득월액 상한액과 하한액은 국민연금 사업장가입자와 지역가입자 전원(납부예외자 제외)의 평균소득월액의 3년간 변동하는 비율을 반영하여 "),
                            createVNode("br"),
                            createTextVNode(" 매년 3월말까지 보건복지부 장관이 고시하며 해당연도 7월부터 1년간 적용합니다. ")
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
              createVNode("h1", { class: "text-h3 mb-6" }, " 국민 연금 모의계산 "),
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
                        label: "월 급여 입력하세요"
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
                          createTextVNode(" 모의계산 ")
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
                        createVNode("h4", null, "❗ 연금보험료 = 기준소득월액 X 9%(연금보험료율)"),
                        createVNode("br"),
                        createVNode("h4", null, "❕ 기준소득월액"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" 기준소득월액이란 국민연금의 보험료 및 급여 산정을 위하여 가입자가 신고한 소득월액에서 천원미만을 절사한 금액을 말하며, "),
                          createVNode("br"),
                          createTextVNode(" 최저 35만원에서 최고 553만원까지의 범위로 결정하게 됩니다. "),
                          createVNode("br"),
                          createTextVNode(" 따라서, 신고한 소득월액이 35만원보다 적으면 35만원을 기준소득월액으로 하고, 553만원보다 많으면 553만원을 기준소득월액으로 합니다. (2022.7.1 기준) ")
                        ]),
                        createVNode("h4", null, "❕ 기준소득월액 상한액과 하한액"),
                        createVNode("br"),
                        createVNode("p", null, [
                          createTextVNode(" 기준소득월액 상한액과 하한액은 국민연금 사업장가입자와 지역가입자 전원(납부예외자 제외)의 평균소득월액의 3년간 변동하는 비율을 반영하여 "),
                          createVNode("br"),
                          createTextVNode(" 매년 3월말까지 보건복지부 장관이 고시하며 해당연도 7월부터 1년간 적용합니다. ")
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
      { title: "보험료 총액", key: "note", sortable: false },
      { title: "산재보험료", key: "industRate", sortable: false }
    ];
    const preexistingheaders2 = [
      { title: "구분", key: "note", sortable: false },
      { title: "요율(%)", key: "industRate", sortable: false }
    ];
    const preexisting1 = ref([
      { note: "", industRate: "" }
    ]);
    const preexisting2 = computed(() => [
      {
        note: "업종요율(전기기계기구·정밀기구·전자제품 제조업)",
        industRate: baseInsureList.value.industinsureRates
      },
      {
        note: "출퇴근재해요율",
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
      const _component_AppTextField = _sfc_main$6;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-h3 mb-6"${_scopeId}> 산재 연금 모의계산 </h1>`);
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
                          label: "월 급여 입력하세요"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(inputSalary),
                            "onUpdate:modelValue": ($event) => isRef(inputSalary) ? inputSalary.value = $event : null,
                            label: "월 급여 입력하세요"
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
                              _push5(` 모의계산 `);
                            } else {
                              return [
                                createTextVNode(" 모의계산 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { onClick: calculate }, {
                            default: withCtx(() => [
                              createTextVNode(" 모의계산 ")
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
                          label: "월 급여 입력하세요"
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
                            createTextVNode(" 모의계산 ")
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
                        _push4(`<h3${_scopeId3}>INFO</h3><br${_scopeId3}><span${_scopeId3}><h4${_scopeId3}>❗ 보험료 식: 보수총액(월평균보수) × 보험료율 ÷ 1,000</h4><br${_scopeId3}></span>`);
                      } else {
                        return [
                          createVNode("h3", null, "INFO"),
                          createVNode("br"),
                          createVNode("span", null, [
                            createVNode("h4", null, "❗ 보험료 식: 보수총액(월평균보수) × 보험료율 ÷ 1,000"),
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
                          createVNode("h4", null, "❗ 보험료 식: 보수총액(월평균보수) × 보험료율 ÷ 1,000"),
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
              createVNode("h1", { class: "text-h3 mb-6" }, " 산재 연금 모의계산 "),
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
                        label: "월 급여 입력하세요"
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
                          createTextVNode(" 모의계산 ")
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
                        createVNode("h4", null, "❗ 보험료 식: 보수총액(월평균보수) × 보험료율 ÷ 1,000"),
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
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const tab = ref("personal-info");
    const selectedYear = ref("");
    const yearList = ref([]);
    const searchYear = async () => {
      if (selectedYear.value === "" || selectedYear.value === null) {
        console.log("Year값 없음");
      } else {
        await salaryStore().SEARCH_SOCIAL_INSURE(selectedYear.value);
        await baseStore().SET_SELECT_YEAR(selectedYear.value);
      }
    };
    watch([selectedYear], searchYear, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$7;
      _push(`<!--[--><h1 class="mb-6">사회보험관리</h1>`);
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
                                label: "적용년도",
                                items: unref(yearList),
                                "single-line": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedYear),
                                  "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                  label: "적용년도",
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
                                label: "적용년도",
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
                              label: "적용년도",
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
                            label: "적용년도",
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
                        _push4(` 4대보험 `);
                      } else {
                        return [
                          createTextVNode(" 4대보험 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "national-pension" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 국민연금 `);
                      } else {
                        return [
                          createTextVNode(" 국민연금 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "Health-Insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 건강보험 `);
                      } else {
                        return [
                          createTextVNode(" 건강보험 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "Employment-Insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 고용보험 `);
                      } else {
                        return [
                          createTextVNode(" 고용보험 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "pre-existing-insurance" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 산재보험 `);
                      } else {
                        return [
                          createTextVNode(" 산재보험 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "major-insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" 4대보험 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "national-pension" }, {
                      default: withCtx(() => [
                        createTextVNode(" 국민연금 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "Health-Insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" 건강보험 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "Employment-Insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" 고용보험 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "pre-existing-insurance" }, {
                      default: withCtx(() => [
                        createTextVNode(" 산재보험 ")
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
                      createTextVNode(" 4대보험 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "national-pension" }, {
                    default: withCtx(() => [
                      createTextVNode(" 국민연금 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "Health-Insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" 건강보험 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "Employment-Insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" 고용보험 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "pre-existing-insurance" }, {
                    default: withCtx(() => [
                      createTextVNode(" 산재보험 ")
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
export {
  _sfc_main as default
};
