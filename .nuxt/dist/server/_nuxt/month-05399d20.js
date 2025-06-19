import { _ as _sfc_main$4 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$3 } from "./AppTextField-dee429aa.js";
import { defineComponent, computed, unref, withCtx, createVNode, isRef, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext, ref, watch, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./DialogCloseBtn-438c6daf.js";
import { s as salaryStore } from "./index-cfe0baa7.js";
import { l as VDialog, V as VCard, f as VCardText, b as VBtn, m as VSpacer } from "../server.mjs";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { p as paginationMeta, V as VPagination } from "./VPagination-fe9c4821.js";
import "./index-77616e20.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "ofetch";
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
/* empty css                */const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SalregMonthModal",
  __ssrInlineRender: true,
  props: ["fetchData2"],
  setup(__props) {
    const props = __props;
    const salaryList = computed(() => {
      return salaryStore().salaryList;
    });
    const monthDeductionList = computed(() => {
      return salaryStore().monthDeductionList;
    });
    const totalTaxSal = computed(() => {
      return Number(salaryList.value.salary) + Number(salaryList.value.bonus);
    });
    const nonTaxSal = computed(() => {
      return Number(salaryList.value.mealAllowance) + Number(salaryList.value.ownerCarSub);
    });
    const totalPayment = computed(() => {
      return Number(totalTaxSal.value) + Number(nonTaxSal.value);
    });
    const totaldeduction = computed(() => {
      let total = 0;
      for (let i = 0; i < monthDeductionList.value.length; i++) {
        const price = Number(monthDeductionList.value[i].price);
        total += price;
      }
      return total;
    });
    const totaldifference = computed(() => {
      return Number(totalPayment.value) - Number(totaldeduction.value);
    });
    const pauseMonthSalary = async () => {
      props.fetchData2();
      await salaryStore().SET_DIALOG(false);
      salaryStore().SET_DIALOG_BTN(false);
    };
    const updateMonthSalary = async () => {
      const updateMonthSalaryData = {
        totalPayment: salaryList.value.totalPayment,
        finalizeStatus: "Y",
        realSalary: salaryList.value.realSalary,
        mealAllowance: salaryList.value.mealAllowance,
        ownerCarSub: salaryList.value.ownerCarSub,
        empCode: salaryList.value.empCode,
        applyYearMonth: salaryList.value.applyYearMonth
      };
      await salaryStore().MONTH_SAL_FINAL(updateMonthSalaryData);
      props.fetchData2();
      await salaryStore().SET_DIALOG(false);
      salaryStore().SET_DIALOG_BTN(false);
    };
    const deleteMonthSalary = async () => {
      const deleteMonthSalaryData = {
        empCode: salaryList.value.empCode,
        applyYearMonth: salaryList.value.applyYearMonth
      };
      salaryStore().DELETE_MONTH_SALARY(deleteMonthSalaryData);
      props.fetchData2();
      await salaryStore().SET_DIALOG(false);
      salaryStore().SET_DIALOG_BTN(false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      _push(`<!--[--><div class="app-user-search-filter d-flex align-center flex-wrap gap-4">`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(salaryStore)().isDialogVisible,
        "onUpdate:modelValue": ($event) => unref(salaryStore)().isDialogVisible = $event,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogCloseBtn, {
              onClick: ($event) => unref(salaryStore)().SET_DIALOG(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { title: "월 급여 조회" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent4, _scopeId3));
                        _push4(`<h4 class="mb-6"${_scopeId3}> 지급항목 </h4>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(salaryList).salary,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).salary = $event,
                                      label: "기본금",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(salaryList).salary,
                                        "onUpdate:modelValue": ($event) => unref(salaryList).salary = $event,
                                        label: "기본금",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(salaryList).totalExtSal,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).totalExtSal = $event,
                                      label: "연장야간수당",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(salaryList).totalExtSal,
                                        "onUpdate:modelValue": ($event) => unref(salaryList).totalExtSal = $event,
                                        label: "연장야간수당",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(salaryList).bonus,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).bonus = $event,
                                      label: "상여",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(salaryList).bonus,
                                        "onUpdate:modelValue": ($event) => unref(salaryList).bonus = $event,
                                        label: "상여",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(salaryList).mealAllowance,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).mealAllowance = $event,
                                      label: "식대"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(salaryList).mealAllowance,
                                        "onUpdate:modelValue": ($event) => unref(salaryList).mealAllowance = $event,
                                        label: "식대"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(salaryList).ownerCarSub,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).ownerCarSub = $event,
                                      label: "자가운전보조금"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(salaryList).ownerCarSub,
                                        "onUpdate:modelValue": ($event) => unref(salaryList).ownerCarSub = $event,
                                        label: "자가운전보조금"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(salaryList).salary,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).salary = $event,
                                      label: "기본금",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(salaryList).totalExtSal,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).totalExtSal = $event,
                                      label: "연장야간수당",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(salaryList).bonus,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).bonus = $event,
                                      label: "상여",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(salaryList).mealAllowance,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).mealAllowance = $event,
                                      label: "식대"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(salaryList).ownerCarSub,
                                      "onUpdate:modelValue": ($event) => unref(salaryList).ownerCarSub = $event,
                                      label: "자가운전보조금"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(totalTaxSal),
                                      "onUpdate:modelValue": ($event) => isRef(totalTaxSal) ? totalTaxSal.value = $event : null,
                                      label: "과세",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(totalTaxSal),
                                        "onUpdate:modelValue": ($event) => isRef(totalTaxSal) ? totalTaxSal.value = $event : null,
                                        label: "과세",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(nonTaxSal),
                                      "onUpdate:modelValue": ($event) => isRef(nonTaxSal) ? nonTaxSal.value = $event : null,
                                      label: "비과세",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(nonTaxSal),
                                        "onUpdate:modelValue": ($event) => isRef(nonTaxSal) ? nonTaxSal.value = $event : null,
                                        label: "비과세",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(totalPayment),
                                      "onUpdate:modelValue": ($event) => isRef(totalPayment) ? totalPayment.value = $event : null,
                                      label: "지급합계",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(totalPayment),
                                        "onUpdate:modelValue": ($event) => isRef(totalPayment) ? totalPayment.value = $event : null,
                                        label: "지급합계",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(totalTaxSal),
                                      "onUpdate:modelValue": ($event) => isRef(totalTaxSal) ? totalTaxSal.value = $event : null,
                                      label: "과세",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(nonTaxSal),
                                      "onUpdate:modelValue": ($event) => isRef(nonTaxSal) ? nonTaxSal.value = $event : null,
                                      label: "비과세",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(totalPayment),
                                      "onUpdate:modelValue": ($event) => isRef(totalPayment) ? totalPayment.value = $event : null,
                                      label: "지급합계",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, { class: "mt-6" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider, { class: "mb-6" }),
                          createVNode("h4", { class: "mb-6" }, " 지급항목 "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(salaryList).salary,
                                    "onUpdate:modelValue": ($event) => unref(salaryList).salary = $event,
                                    label: "기본금",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(salaryList).totalExtSal,
                                    "onUpdate:modelValue": ($event) => unref(salaryList).totalExtSal = $event,
                                    label: "연장야간수당",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(salaryList).bonus,
                                    "onUpdate:modelValue": ($event) => unref(salaryList).bonus = $event,
                                    label: "상여",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(salaryList).mealAllowance,
                                    "onUpdate:modelValue": ($event) => unref(salaryList).mealAllowance = $event,
                                    label: "식대"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(salaryList).ownerCarSub,
                                    "onUpdate:modelValue": ($event) => unref(salaryList).ownerCarSub = $event,
                                    label: "자가운전보조금"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(totalTaxSal),
                                    "onUpdate:modelValue": ($event) => isRef(totalTaxSal) ? totalTaxSal.value = $event : null,
                                    label: "과세",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(nonTaxSal),
                                    "onUpdate:modelValue": ($event) => isRef(nonTaxSal) ? nonTaxSal.value = $event : null,
                                    label: "비과세",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(totalPayment),
                                    "onUpdate:modelValue": ($event) => isRef(totalPayment) ? totalPayment.value = $event : null,
                                    label: "지급합계",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mt-6" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="mb-6"${_scopeId3}> 공제항목 </h4>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[0].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[0].price = $event,
                                      label: "국민연금",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(monthDeductionList)[0].price,
                                        "onUpdate:modelValue": ($event) => unref(monthDeductionList)[0].price = $event,
                                        label: "국민연금",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[1].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[1].price = $event,
                                      label: "건강보험",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(monthDeductionList)[1].price,
                                        "onUpdate:modelValue": ($event) => unref(monthDeductionList)[1].price = $event,
                                        label: "건강보험",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[2].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[2].price = $event,
                                      label: "고용보험",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(monthDeductionList)[2].price,
                                        "onUpdate:modelValue": ($event) => unref(monthDeductionList)[2].price = $event,
                                        label: "고용보험",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[3].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[3].price = $event,
                                      label: "장기요양보험",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(monthDeductionList)[3].price,
                                        "onUpdate:modelValue": ($event) => unref(monthDeductionList)[3].price = $event,
                                        label: "장기요양보험",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[4].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[4].price = $event,
                                      label: "소득세",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(monthDeductionList)[4].price,
                                        "onUpdate:modelValue": ($event) => unref(monthDeductionList)[4].price = $event,
                                        label: "소득세",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[5].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[5].price = $event,
                                      label: "주민세",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(monthDeductionList)[5].price,
                                        "onUpdate:modelValue": ($event) => unref(monthDeductionList)[5].price = $event,
                                        label: "주민세",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[0].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[0].price = $event,
                                      label: "국민연금",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[1].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[1].price = $event,
                                      label: "건강보험",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[2].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[2].price = $event,
                                      label: "고용보험",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[3].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[3].price = $event,
                                      label: "장기요양보험",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[4].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[4].price = $event,
                                      label: "소득세",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(monthDeductionList)[5].price,
                                      "onUpdate:modelValue": ($event) => unref(monthDeductionList)[5].price = $event,
                                      label: "주민세",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(totaldeduction),
                                      "onUpdate:modelValue": ($event) => isRef(totaldeduction) ? totaldeduction.value = $event : null,
                                      label: "공제합계",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(totaldeduction),
                                        "onUpdate:modelValue": ($event) => isRef(totaldeduction) ? totaldeduction.value = $event : null,
                                        label: "공제합계",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(totaldifference),
                                      "onUpdate:modelValue": ($event) => isRef(totaldifference) ? totaldifference.value = $event : null,
                                      label: "차인지급액",
                                      disabled: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(totaldifference),
                                        "onUpdate:modelValue": ($event) => isRef(totaldifference) ? totaldifference.value = $event : null,
                                        label: "차인지급액",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(totaldeduction),
                                      "onUpdate:modelValue": ($event) => isRef(totaldeduction) ? totaldeduction.value = $event : null,
                                      label: "공제합계",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(totaldifference),
                                      "onUpdate:modelValue": ($event) => isRef(totaldifference) ? totaldifference.value = $event : null,
                                      label: "차인지급액",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h4", { class: "mb-6" }, " 공제항목 "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(monthDeductionList)[0].price,
                                    "onUpdate:modelValue": ($event) => unref(monthDeductionList)[0].price = $event,
                                    label: "국민연금",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(monthDeductionList)[1].price,
                                    "onUpdate:modelValue": ($event) => unref(monthDeductionList)[1].price = $event,
                                    label: "건강보험",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(monthDeductionList)[2].price,
                                    "onUpdate:modelValue": ($event) => unref(monthDeductionList)[2].price = $event,
                                    label: "고용보험",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(monthDeductionList)[3].price,
                                    "onUpdate:modelValue": ($event) => unref(monthDeductionList)[3].price = $event,
                                    label: "장기요양보험",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(monthDeductionList)[4].price,
                                    "onUpdate:modelValue": ($event) => unref(monthDeductionList)[4].price = $event,
                                    label: "소득세",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(monthDeductionList)[5].price,
                                    "onUpdate:modelValue": ($event) => unref(monthDeductionList)[5].price = $event,
                                    label: "주민세",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(totaldeduction),
                                    "onUpdate:modelValue": ($event) => isRef(totaldeduction) ? totaldeduction.value = $event : null,
                                    label: "공제합계",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(totaldifference),
                                    "onUpdate:modelValue": ($event) => isRef(totaldifference) ? totaldifference.value = $event : null,
                                    label: "차인지급액",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(salaryStore)().isDialogBtn === true) {
                          _push4(ssrRenderComponent(VBtn, { onClick: deleteMonthSalary }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 삭제 `);
                              } else {
                                return [
                                  createTextVNode(" 삭제 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(salaryStore)().isDialogBtn === true) {
                          _push4(ssrRenderComponent(VBtn, { onClick: pauseMonthSalary }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 승인대기 `);
                              } else {
                                return [
                                  createTextVNode(" 승인대기 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(salaryStore)().isDialogBtn === true) {
                          _push4(ssrRenderComponent(VBtn, { onClick: updateMonthSalary }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 승인 `);
                              } else {
                                return [
                                  createTextVNode(" 승인 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => unref(salaryStore)().SET_DIALOG(false)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 확인 `);
                              } else {
                                return [
                                  createTextVNode(" 확인 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            onClick: deleteMonthSalary
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 삭제 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: pauseMonthSalary
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인대기 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                            key: 2,
                            onClick: updateMonthSalary
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인 ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 3,
                            onClick: ($event) => unref(salaryStore)().SET_DIALOG(false)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 확인 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VDivider, { class: "mb-6" }),
                        createVNode("h4", { class: "mb-6" }, " 지급항목 "),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(salaryList).salary,
                                  "onUpdate:modelValue": ($event) => unref(salaryList).salary = $event,
                                  label: "기본금",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(salaryList).totalExtSal,
                                  "onUpdate:modelValue": ($event) => unref(salaryList).totalExtSal = $event,
                                  label: "연장야간수당",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(salaryList).bonus,
                                  "onUpdate:modelValue": ($event) => unref(salaryList).bonus = $event,
                                  label: "상여",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(salaryList).mealAllowance,
                                  "onUpdate:modelValue": ($event) => unref(salaryList).mealAllowance = $event,
                                  label: "식대"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(salaryList).ownerCarSub,
                                  "onUpdate:modelValue": ($event) => unref(salaryList).ownerCarSub = $event,
                                  label: "자가운전보조금"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(totalTaxSal),
                                  "onUpdate:modelValue": ($event) => isRef(totalTaxSal) ? totalTaxSal.value = $event : null,
                                  label: "과세",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(nonTaxSal),
                                  "onUpdate:modelValue": ($event) => isRef(nonTaxSal) ? nonTaxSal.value = $event : null,
                                  label: "비과세",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(totalPayment),
                                  "onUpdate:modelValue": ($event) => isRef(totalPayment) ? totalPayment.value = $event : null,
                                  label: "지급합계",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, { class: "mt-6" })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "mb-6" }, " 공제항목 "),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(monthDeductionList)[0].price,
                                  "onUpdate:modelValue": ($event) => unref(monthDeductionList)[0].price = $event,
                                  label: "국민연금",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(monthDeductionList)[1].price,
                                  "onUpdate:modelValue": ($event) => unref(monthDeductionList)[1].price = $event,
                                  label: "건강보험",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(monthDeductionList)[2].price,
                                  "onUpdate:modelValue": ($event) => unref(monthDeductionList)[2].price = $event,
                                  label: "고용보험",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(monthDeductionList)[3].price,
                                  "onUpdate:modelValue": ($event) => unref(monthDeductionList)[3].price = $event,
                                  label: "장기요양보험",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(monthDeductionList)[4].price,
                                  "onUpdate:modelValue": ($event) => unref(monthDeductionList)[4].price = $event,
                                  label: "소득세",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(monthDeductionList)[5].price,
                                  "onUpdate:modelValue": ($event) => unref(monthDeductionList)[5].price = $event,
                                  label: "주민세",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(totaldeduction),
                                  "onUpdate:modelValue": ($event) => isRef(totaldeduction) ? totaldeduction.value = $event : null,
                                  label: "공제합계",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(totaldifference),
                                  "onUpdate:modelValue": ($event) => isRef(totaldifference) ? totaldifference.value = $event : null,
                                  label: "차인지급액",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                      default: withCtx(() => [
                        unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          onClick: deleteMonthSalary
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 삭제 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: pauseMonthSalary
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인대기 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                          key: 2,
                          onClick: updateMonthSalary
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인 ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 3,
                          onClick: ($event) => unref(salaryStore)().SET_DIALOG(false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 확인 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]))
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
              createVNode(_component_DialogCloseBtn, {
                onClick: ($event) => unref(salaryStore)().SET_DIALOG(false)
              }, null, 8, ["onClick"]),
              createVNode(VCard, { title: "월 급여 조회" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h4", { class: "mb-6" }, " 지급항목 "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(salaryList).salary,
                                "onUpdate:modelValue": ($event) => unref(salaryList).salary = $event,
                                label: "기본금",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(salaryList).totalExtSal,
                                "onUpdate:modelValue": ($event) => unref(salaryList).totalExtSal = $event,
                                label: "연장야간수당",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(salaryList).bonus,
                                "onUpdate:modelValue": ($event) => unref(salaryList).bonus = $event,
                                label: "상여",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(salaryList).mealAllowance,
                                "onUpdate:modelValue": ($event) => unref(salaryList).mealAllowance = $event,
                                label: "식대"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(salaryList).ownerCarSub,
                                "onUpdate:modelValue": ($event) => unref(salaryList).ownerCarSub = $event,
                                label: "자가운전보조금"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(totalTaxSal),
                                "onUpdate:modelValue": ($event) => isRef(totalTaxSal) ? totalTaxSal.value = $event : null,
                                label: "과세",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(nonTaxSal),
                                "onUpdate:modelValue": ($event) => isRef(nonTaxSal) ? nonTaxSal.value = $event : null,
                                label: "비과세",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(totalPayment),
                                "onUpdate:modelValue": ($event) => isRef(totalPayment) ? totalPayment.value = $event : null,
                                label: "지급합계",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mt-6" })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "mb-6" }, " 공제항목 "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(monthDeductionList)[0].price,
                                "onUpdate:modelValue": ($event) => unref(monthDeductionList)[0].price = $event,
                                label: "국민연금",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(monthDeductionList)[1].price,
                                "onUpdate:modelValue": ($event) => unref(monthDeductionList)[1].price = $event,
                                label: "건강보험",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(monthDeductionList)[2].price,
                                "onUpdate:modelValue": ($event) => unref(monthDeductionList)[2].price = $event,
                                label: "고용보험",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(monthDeductionList)[3].price,
                                "onUpdate:modelValue": ($event) => unref(monthDeductionList)[3].price = $event,
                                label: "장기요양보험",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(monthDeductionList)[4].price,
                                "onUpdate:modelValue": ($event) => unref(monthDeductionList)[4].price = $event,
                                label: "소득세",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(monthDeductionList)[5].price,
                                "onUpdate:modelValue": ($event) => unref(monthDeductionList)[5].price = $event,
                                label: "주민세",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(totaldeduction),
                                "onUpdate:modelValue": ($event) => isRef(totaldeduction) ? totaldeduction.value = $event : null,
                                label: "공제합계",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(totaldifference),
                                "onUpdate:modelValue": ($event) => isRef(totaldifference) ? totaldifference.value = $event : null,
                                label: "차인지급액",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx(() => [
                      unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        onClick: deleteMonthSalary
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 삭제 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                        key: 1,
                        onClick: pauseMonthSalary
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인대기 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(salaryStore)().isDialogBtn === true ? (openBlock(), createBlock(VBtn, {
                        key: 2,
                        onClick: updateMonthSalary
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인 ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VBtn, {
                        key: 3,
                        onClick: ($event) => unref(salaryStore)().SET_DIALOG(false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 확인 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]))
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
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hr/salary/SalregMonthModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "month",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const options = ref({ page: 1, itemsPerPage: 5, sortBy: [""], sortDesc: [false] });
    const search = ref("");
    const selectedYear = ref("");
    const selectedMonth = ref("");
    const initSalaryList = ref([]);
    const monthList = ref([]);
    const yearList = ref([]);
    const headers = [
      { title: "해당 년월", key: "applyYearMonth", align: "center" },
      { title: "사원 번호", key: "empCode", align: "center" },
      { title: "사원 명", key: "empName", align: "center" },
      { title: "실 지급액", key: "realSalary", align: "center" },
      { title: "승인상태", key: "finalizeStatus", align: "center" }
    ];
    const fetchData2 = async () => {
      const applyYear = `${selectedYear.value}-${selectedMonth.value.trim()}`;
      const initData = {
        applyYearMonth: applyYear,
        empCode: "%"
      };
      await salaryStore().SEARCH_SALARY_INIT(initData);
      initSalaryList.value = salaryStore().initSalaryList;
    };
    const handleRowClick = async (row) => {
      const salaryData = {
        empCode: row.item.empCode,
        deptCode: row.item.deptCode,
        applyYearMonth: `${selectedYear.value}-${selectedMonth.value.trim()}`
      };
      const monthDeductionData = {
        empCode: row.item.empCode,
        applyYearMonth: `${selectedYear.value}-${selectedMonth.value.trim()}`
      };
      console.log(monthDeductionData);
      if (row.item.finalizeStatus === "N" || row.item.finalizeStatus === null) {
        await salaryStore().SALARY_PROCESS(salaryData);
        await salaryStore().FIND_TAX(monthDeductionData);
        salaryStore().SET_DIALOG_BTN(true);
      } else {
        await salaryStore().SALARY_PROCESS(salaryData);
        await salaryStore().FIND_TAX(monthDeductionData);
        salaryStore().SET_DIALOG_BTN(false);
      }
      await salaryStore().SET_DIALOG(true);
    };
    const filteredData = computed(() => {
      return initSalaryList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    watch([selectedYear, selectedMonth], fetchData2, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$4;
      const _component_AppTextField = _sfc_main$3;
      _push(`<!--[--><h1 class="mb-6"> 월 급여 등록 </h1>`);
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
                                label: "해당 연도",
                                placeholder: "해당 연도",
                                items: unref(yearList),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedYear),
                                  "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                                  label: "해당 연도",
                                  placeholder: "해당 연도",
                                  items: unref(yearList),
                                  clearable: "",
                                  "clear-icon": "tabler-x"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppSelect, {
                                modelValue: unref(selectedMonth),
                                "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                                label: "해당 월",
                                placeholder: "해당 월",
                                items: unref(monthList),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedMonth),
                                  "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                                  label: "해당 월",
                                  placeholder: "해당 월",
                                  items: unref(monthList),
                                  clearable: "",
                                  "clear-icon": "tabler-x"
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
                                label: "해당 연도",
                                placeholder: "해당 연도",
                                items: unref(yearList),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedMonth),
                                "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                                label: "해당 월",
                                placeholder: "해당 월",
                                items: unref(monthList),
                                clearable: "",
                                "clear-icon": "tabler-x"
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
                              label: "해당 연도",
                              placeholder: "해당 연도",
                              items: unref(yearList),
                              clearable: "",
                              "clear-icon": "tabler-x"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppSelect, {
                              modelValue: unref(selectedMonth),
                              "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                              label: "해당 월",
                              placeholder: "해당 월",
                              items: unref(monthList),
                              clearable: "",
                              "clear-icon": "tabler-x"
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
                            label: "해당 연도",
                            placeholder: "해당 연도",
                            items: unref(yearList),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedMonth),
                            "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                            label: "해당 월",
                            placeholder: "해당 월",
                            items: unref(monthList),
                            clearable: "",
                            "clear-icon": "tabler-x"
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
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-3 d-flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppSelect, {
                    "model-value": unref(options).itemsPerPage,
                    items: [
                      { value: 5, title: "5" },
                      { value: 10, title: "10" },
                      { value: 25, title: "25" },
                      { value: 50, title: "50" },
                      { value: -1, title: "All" }
                    ],
                    style: { "inline-size": "6.25rem" },
                    "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}><div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    placeholder: "Search",
                    density: "compact"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-3 d-flex gap-3" }, [
                      createVNode(_component_AppSelect, {
                        "model-value": unref(options).itemsPerPage,
                        items: [
                          { value: 5, title: "5" },
                          { value: 10, title: "10" },
                          { value: 25, title: "25" },
                          { value: 50, title: "50" },
                          { value: -1, title: "All" }
                        ],
                        style: { "inline-size": "6.25rem" },
                        "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          placeholder: "Search",
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              headers,
              items: unref(filteredData),
              "items-per-page": unref(options).itemsPerPage,
              page: unref(options).page,
              options: unref(options),
              "onClick:row": (_2, row) => handleRowClick(row)
            }, {
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"${_scopeId3}><p class="text-sm text-disabled mb-0"${_scopeId3}>${ssrInterpolate(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(filteredData).length))}</p>`);
                        _push4(ssrRenderComponent(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(filteredData).length / unref(options).itemsPerPage)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                            createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(filteredData).length)), 1),
                            createVNode(VPagination, {
                              modelValue: unref(options).page,
                              "onUpdate:modelValue": ($event) => unref(options).page = $event,
                              "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                              length: Math.ceil(unref(filteredData).length / unref(options).itemsPerPage)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "pt-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                          createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(filteredData).length)), 1),
                          createVNode(VPagination, {
                            modelValue: unref(options).page,
                            "onUpdate:modelValue": ($event) => unref(options).page = $event,
                            "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                            length: Math.ceil(unref(filteredData).length / unref(options).itemsPerPage)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
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
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "me-3 d-flex gap-3" }, [
                    createVNode(_component_AppSelect, {
                      "model-value": unref(options).itemsPerPage,
                      items: [
                        { value: 5, title: "5" },
                        { value: 10, title: "10" },
                        { value: 25, title: "25" },
                        { value: 50, title: "50" },
                        { value: -1, title: "All" }
                      ],
                      style: { "inline-size": "6.25rem" },
                      "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode("div", { style: { "inline-size": "10rem" } }, [
                      createVNode(_component_AppTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        placeholder: "Search",
                        density: "compact"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                headers,
                items: unref(filteredData),
                "items-per-page": unref(options).itemsPerPage,
                page: unref(options).page,
                options: unref(options),
                "onClick:row": (_2, row) => handleRowClick(row)
              }, {
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                        createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(filteredData).length)), 1),
                        createVNode(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(filteredData).length / unref(options).itemsPerPage)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items", "items-per-page", "page", "options", "onClick:row"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { "fetch-data2": fetchData2 }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/salreg/month.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
