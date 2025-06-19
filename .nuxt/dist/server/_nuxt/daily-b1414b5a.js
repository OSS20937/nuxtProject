import { _ as _sfc_main$3 } from "./AppDateTimePicker-c59f48ad.js";
import { _ as _sfc_main$4 } from "./DialogCloseBtn-438c6daf.js";
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, defineModel, toDisplayString, unref, isRef, openBlock, createBlock, createCommentVNode, withModifiers } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { l as VDialog, V as VCard, g as VCardTitle, e as VCardActions, m as VSpacer, b as VBtn, f as VCardText, n as attenStore } from "../server.mjs";
import { V as VSelect } from "./VSelect-03a0285c.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { a as affairStore } from "./index-4eaf1d02.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import axios from "axios";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VForm } from "./VForm-c404d2e6.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "vue-flatpickr-component";
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
import "cookie-es";
import "destr";
import "ohash";
import "@antfu/utils";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@casl/vue";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
/* empty css                */const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "empSearchModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    empOptions: {}
  },
  emits: ["update:modelValue", "searchEmp"],
  setup(__props, { emit }) {
    const props = __props;
    const internalDialog = ref(false);
    const selectedEmpCode = ref("");
    const matchedEmpName = ref("");
    watch(
      () => props.modelValue,
      (val) => {
        internalDialog.value = val;
      }
    );
    watch(internalDialog, (val) => {
      emit("update:modelValue", val);
    });
    watch(selectedEmpCode, (code) => {
      const emp = props.empOptions.find((e) => e.empCode === code);
      matchedEmpName.value = (emp == null ? void 0 : emp.empName) ?? "";
    });
    const search = () => {
      emit("searchEmp", selectedEmpCode.value);
      internalDialog.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: internalDialog.value,
        "onUpdate:modelValue": ($event) => internalDialog.value = $event,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`사번으로 검색`);
                      } else {
                        return [
                          createTextVNode("사번으로 검색")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: selectedEmpCode.value,
                          "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                          items: props.empOptions,
                          "item-title": "empCode",
                          "item-value": "empCode",
                          label: "사번 선택",
                          variant: "outlined",
                          style: { "width": "70px" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: matchedEmpName.value,
                          "onUpdate:modelValue": ($event) => matchedEmpName.value = $event,
                          variant: "outlined",
                          readonly: "",
                          label: "사원 이름",
                          style: { "width": "70px" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { onClick: search }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`조회`);
                            } else {
                              return [
                                createTextVNode("조회")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VSelect, {
                            modelValue: selectedEmpCode.value,
                            "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                            items: props.empOptions,
                            "item-title": "empCode",
                            "item-value": "empCode",
                            label: "사번 선택",
                            variant: "outlined",
                            style: { "width": "70px" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(VTextField, {
                            modelValue: matchedEmpName.value,
                            "onUpdate:modelValue": ($event) => matchedEmpName.value = $event,
                            variant: "outlined",
                            readonly: "",
                            label: "사원 이름",
                            style: { "width": "70px" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VBtn, { onClick: search }, {
                            default: withCtx(() => [
                              createTextVNode("조회")
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("사번으로 검색")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VSelect, {
                          modelValue: selectedEmpCode.value,
                          "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                          items: props.empOptions,
                          "item-title": "empCode",
                          "item-value": "empCode",
                          label: "사번 선택",
                          variant: "outlined",
                          style: { "width": "70px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(VTextField, {
                          modelValue: matchedEmpName.value,
                          "onUpdate:modelValue": ($event) => matchedEmpName.value = $event,
                          variant: "outlined",
                          readonly: "",
                          label: "사원 이름",
                          style: { "width": "70px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VBtn, { onClick: search }, {
                          default: withCtx(() => [
                            createTextVNode("조회")
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("사번으로 검색")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VSelect, {
                        modelValue: selectedEmpCode.value,
                        "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                        items: props.empOptions,
                        "item-title": "empCode",
                        "item-value": "empCode",
                        label: "사번 선택",
                        variant: "outlined",
                        style: { "width": "70px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(VTextField, {
                        modelValue: matchedEmpName.value,
                        "onUpdate:modelValue": ($event) => matchedEmpName.value = $event,
                        variant: "outlined",
                        readonly: "",
                        label: "사원 이름",
                        style: { "width": "70px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, { onClick: search }, {
                        default: withCtx(() => [
                          createTextVNode("조회")
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hr/attendance/empSearchModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "addAttenModal",
  __ssrInlineRender: true,
  props: {
    depList: {},
    applyDay: {}
  },
  emits: ["submitAttendData"],
  setup(__props, { emit }) {
    const props = __props;
    const empName = ref("");
    const dialog = defineModel();
    const selectedEmpCode = ref("");
    const empCode = ref("사원명을 선택하세요");
    const attdType = ref("사원명을 선택하세요");
    const selectedHour = ref("");
    const selectedMinute = ref();
    const selectedDeptCode = ref("부서 선택");
    const isFormDisabled = ref(true);
    const isTimeFormDisabled = ref(true);
    const isDeptSelectOff = ref(true);
    const isAddButtonDisabled = ref(true);
    const addAttendData = ref();
    const attdTypes = [
      "출근",
      "퇴근",
      "공외출",
      "공귀사",
      "외출(무단)",
      "귀사(무단)"
    ];
    const employeesInDept = ref([
      {
        empCode: "",
        empName: "부서를 먼저 선택하세요"
      }
    ]);
    const hourOptions = Array.from(
      { length: 24 },
      (_, i) => i.toString().padStart(2, "0")
    );
    const onDeptSelected = async (deptCode) => {
      console.log("선택된 부서코드:", deptCode);
      await affairStore().FETCH_EMP_DEPT_IN(deptCode);
      if (affairStore().employeesInDeptList.length === 0) {
        isDeptSelectOff.value = true;
        employeesInDept.value = [
          {
            empCode: "",
            empName: "해당 부서에 직원이 없습니다."
          }
        ];
      } else {
        isDeptSelectOff.value = false;
        employeesInDept.value = [
          {
            empCode: "",
            empName: "사원을 선택하세요"
          },
          ...affairStore().employeesInDeptList
        ];
      }
      console.log("employeesInDept: ", employeesInDept.value);
    };
    const onEmpNameSelected = () => {
      empCode.value = selectedEmpCode.value;
      const matchedEmp = employeesInDept.value.find(
        (emp) => emp.empCode === selectedEmpCode.value
      );
      empName.value = (matchedEmp == null ? void 0 : matchedEmp.empName) ?? "";
      isFormDisabled.value = false;
      attdType.value = "근태 유형";
    };
    const onAttendTypeSelected = () => {
      isTimeFormDisabled.value = false;
    };
    const validateMinute = (value) => {
      const num = Number(value);
      if (!value)
        return true;
      if (/^\d{1,2}$/.test(value) && num >= 0 && num <= 59) {
        return true;
      }
      return "0~59 사이 숫자를 입력하세요.";
    };
    const onMinuteInput = () => {
      if (selectedMinute.value <= 59 && selectedMinute.value >= 0) {
        isAddButtonDisabled.value = false;
      } else {
        isAddButtonDisabled.value = true;
      }
    };
    const onAdd = () => {
      console.log("추가 버튼 클릭됨");
      const formattedTime = String(selectedHour.value).padStart(2, "0") + String(selectedMinute.value).padStart(2, "0");
      let deptName;
      const matchedDept = props.depList.find(
        (dept) => dept.deptCode === selectedDeptCode.value
      );
      deptName = (matchedDept == null ? void 0 : matchedDept.deptName) ?? "";
      console.log("찾은 부서 이름:", deptName);
      console.log(formattedTime);
      addAttendData.value = {
        empName: empName.value,
        empCode: empCode.value,
        attdTypeName: attdType.value,
        time: formattedTime,
        deptName,
        applyDay: props.applyDay,
        dayAttdCode: "아직 반영되지 않음"
      };
      const payload = { ...addAttendData.value };
      console.log("추가된 데이터 객체:", addAttendData.value);
      console.log("payload:", payload);
      emit("submitAttendData", payload);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex flex-column align-start px-4 pt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-bold"${_scopeId3}>일근태 추가</span><span class="text-subtitle-2 text-medium-emphasis mt-1"${_scopeId3}> 일자: ${ssrInterpolate(props.applyDay)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-bold" }, "일근태 추가"),
                          createVNode("span", { class: "text-subtitle-2 text-medium-emphasis mt-1" }, " 일자: " + toDisplayString(props.applyDay), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "5" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: selectedDeptCode.value,
                                            "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                            items: props.depList,
                                            "item-title": "deptName",
                                            "item-value": "deptCode",
                                            label: "부서 선택",
                                            variant: "outlined",
                                            clearable: "",
                                            style: { "width": "250px" }
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: selectedDeptCode.value,
                                              "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                              items: props.depList,
                                              "item-title": "deptName",
                                              "item-value": "deptCode",
                                              label: "부서 선택",
                                              variant: "outlined",
                                              clearable: "",
                                              style: { "width": "250px" }
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "5" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: selectedDeptCode.value,
                                            "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                            items: props.depList,
                                            "item-title": "deptName",
                                            "item-value": "deptCode",
                                            label: "부서 선택",
                                            variant: "outlined",
                                            clearable: "",
                                            style: { "width": "250px" }
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: selectedEmpCode.value,
                                            "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                            items: employeesInDept.value,
                                            "item-title": "empName",
                                            "item-value": "empCode",
                                            label: "사원명 선택",
                                            variant: "outlined",
                                            disabled: isDeptSelectOff.value
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: selectedEmpCode.value,
                                              "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                              items: employeesInDept.value,
                                              "item-title": "empName",
                                              "item-value": "empCode",
                                              label: "사원명 선택",
                                              variant: "outlined",
                                              disabled: isDeptSelectOff.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "사원코드",
                                            modelValue: empCode.value,
                                            "onUpdate:modelValue": ($event) => empCode.value = $event,
                                            variant: "outlined",
                                            readonly: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "사원코드",
                                              modelValue: empCode.value,
                                              "onUpdate:modelValue": ($event) => empCode.value = $event,
                                              variant: "outlined",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: selectedEmpCode.value,
                                            "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                            items: employeesInDept.value,
                                            "item-title": "empName",
                                            "item-value": "empCode",
                                            label: "사원명 선택",
                                            variant: "outlined",
                                            disabled: isDeptSelectOff.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "사원코드",
                                            modelValue: empCode.value,
                                            "onUpdate:modelValue": ($event) => empCode.value = $event,
                                            variant: "outlined",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            label: "근태 유형",
                                            items: attdTypes,
                                            modelValue: attdType.value,
                                            "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                            variant: "outlined",
                                            clearable: "",
                                            disabled: isFormDisabled.value
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              label: "근태 유형",
                                              items: attdTypes,
                                              modelValue: attdType.value,
                                              "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                              variant: "outlined",
                                              clearable: "",
                                              disabled: isFormDisabled.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            label: "시",
                                            items: unref(hourOptions),
                                            modelValue: selectedHour.value,
                                            "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                            variant: "outlined",
                                            disabled: isTimeFormDisabled.value
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              label: "시",
                                              items: unref(hourOptions),
                                              modelValue: selectedHour.value,
                                              "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                              variant: "outlined",
                                              disabled: isTimeFormDisabled.value
                                            }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "3" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "분(0~59)",
                                            modelValue: selectedMinute.value,
                                            "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                            variant: "outlined",
                                            maxlength: "2",
                                            rules: [validateMinute],
                                            disabled: isTimeFormDisabled.value
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "분(0~59)",
                                              modelValue: selectedMinute.value,
                                              "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                              variant: "outlined",
                                              maxlength: "2",
                                              rules: [validateMinute],
                                              disabled: isTimeFormDisabled.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            label: "근태 유형",
                                            items: attdTypes,
                                            modelValue: attdType.value,
                                            "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                            variant: "outlined",
                                            clearable: "",
                                            disabled: isFormDisabled.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            label: "시",
                                            items: unref(hourOptions),
                                            modelValue: selectedHour.value,
                                            "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                            variant: "outlined",
                                            disabled: isTimeFormDisabled.value
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "분(0~59)",
                                            modelValue: selectedMinute.value,
                                            "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                            variant: "outlined",
                                            maxlength: "2",
                                            rules: [validateMinute],
                                            disabled: isTimeFormDisabled.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "5" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: selectedDeptCode.value,
                                          "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                          items: props.depList,
                                          "item-title": "deptName",
                                          "item-value": "deptCode",
                                          label: "부서 선택",
                                          variant: "outlined",
                                          clearable: "",
                                          style: { "width": "250px" }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: selectedEmpCode.value,
                                          "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                          items: employeesInDept.value,
                                          "item-title": "empName",
                                          "item-value": "empCode",
                                          label: "사원명 선택",
                                          variant: "outlined",
                                          disabled: isDeptSelectOff.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "사원코드",
                                          modelValue: empCode.value,
                                          "onUpdate:modelValue": ($event) => empCode.value = $event,
                                          variant: "outlined",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          label: "근태 유형",
                                          items: attdTypes,
                                          modelValue: attdType.value,
                                          "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                          variant: "outlined",
                                          clearable: "",
                                          disabled: isFormDisabled.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "3" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          label: "시",
                                          items: unref(hourOptions),
                                          modelValue: selectedHour.value,
                                          "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                          variant: "outlined",
                                          disabled: isTimeFormDisabled.value
                                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "3" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "분(0~59)",
                                          modelValue: selectedMinute.value,
                                          "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                          variant: "outlined",
                                          maxlength: "2",
                                          rules: [validateMinute],
                                          disabled: isTimeFormDisabled.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "5" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: selectedDeptCode.value,
                                        "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                        items: props.depList,
                                        "item-title": "deptName",
                                        "item-value": "deptCode",
                                        label: "부서 선택",
                                        variant: "outlined",
                                        clearable: "",
                                        style: { "width": "250px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: selectedEmpCode.value,
                                        "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                        items: employeesInDept.value,
                                        "item-title": "empName",
                                        "item-value": "empCode",
                                        label: "사원명 선택",
                                        variant: "outlined",
                                        disabled: isDeptSelectOff.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "사원코드",
                                        modelValue: empCode.value,
                                        "onUpdate:modelValue": ($event) => empCode.value = $event,
                                        variant: "outlined",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        label: "근태 유형",
                                        items: attdTypes,
                                        modelValue: attdType.value,
                                        "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                        variant: "outlined",
                                        clearable: "",
                                        disabled: isFormDisabled.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "3" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        label: "시",
                                        items: unref(hourOptions),
                                        modelValue: selectedHour.value,
                                        "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                        variant: "outlined",
                                        disabled: isTimeFormDisabled.value
                                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "3" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "분(0~59)",
                                        modelValue: selectedMinute.value,
                                        "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                        variant: "outlined",
                                        maxlength: "2",
                                        rules: [validateMinute],
                                        disabled: isTimeFormDisabled.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "elevated",
                          size: "large",
                          class: "font-weight-bold text-white px-4 py-1",
                          onClick: onAdd,
                          disabled: isAddButtonDisabled.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 기록 추가 `);
                            } else {
                              return [
                                createTextVNode(" 기록 추가 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "elevated",
                            size: "large",
                            class: "font-weight-bold text-white px-4 py-1",
                            onClick: onAdd,
                            disabled: isAddButtonDisabled.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 기록 추가 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex flex-column align-start px-4 pt-6" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-bold" }, "일근태 추가"),
                        createVNode("span", { class: "text-subtitle-2 text-medium-emphasis mt-1" }, " 일자: " + toDisplayString(props.applyDay), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "5" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: selectedDeptCode.value,
                                      "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                      items: props.depList,
                                      "item-title": "deptName",
                                      "item-value": "deptCode",
                                      label: "부서 선택",
                                      variant: "outlined",
                                      clearable: "",
                                      style: { "width": "250px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: selectedEmpCode.value,
                                      "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                      items: employeesInDept.value,
                                      "item-title": "empName",
                                      "item-value": "empCode",
                                      label: "사원명 선택",
                                      variant: "outlined",
                                      disabled: isDeptSelectOff.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "사원코드",
                                      modelValue: empCode.value,
                                      "onUpdate:modelValue": ($event) => empCode.value = $event,
                                      variant: "outlined",
                                      readonly: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      label: "근태 유형",
                                      items: attdTypes,
                                      modelValue: attdType.value,
                                      "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                      variant: "outlined",
                                      clearable: "",
                                      disabled: isFormDisabled.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "3" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      label: "시",
                                      items: unref(hourOptions),
                                      modelValue: selectedHour.value,
                                      "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                      variant: "outlined",
                                      disabled: isTimeFormDisabled.value
                                    }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "3" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "분(0~59)",
                                      modelValue: selectedMinute.value,
                                      "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                      variant: "outlined",
                                      maxlength: "2",
                                      rules: [validateMinute],
                                      disabled: isTimeFormDisabled.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "elevated",
                          size: "large",
                          class: "font-weight-bold text-white px-4 py-1",
                          onClick: onAdd,
                          disabled: isAddButtonDisabled.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 기록 추가 ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex flex-column align-start px-4 pt-6" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-bold" }, "일근태 추가"),
                      createVNode("span", { class: "text-subtitle-2 text-medium-emphasis mt-1" }, " 일자: " + toDisplayString(props.applyDay), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "5" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: selectedDeptCode.value,
                                    "onUpdate:modelValue": [($event) => selectedDeptCode.value = $event, onDeptSelected],
                                    items: props.depList,
                                    "item-title": "deptName",
                                    "item-value": "deptCode",
                                    label: "부서 선택",
                                    variant: "outlined",
                                    clearable: "",
                                    style: { "width": "250px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: selectedEmpCode.value,
                                    "onUpdate:modelValue": [($event) => selectedEmpCode.value = $event, onEmpNameSelected],
                                    items: employeesInDept.value,
                                    "item-title": "empName",
                                    "item-value": "empCode",
                                    label: "사원명 선택",
                                    variant: "outlined",
                                    disabled: isDeptSelectOff.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "사원코드",
                                    modelValue: empCode.value,
                                    "onUpdate:modelValue": ($event) => empCode.value = $event,
                                    variant: "outlined",
                                    readonly: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    label: "근태 유형",
                                    items: attdTypes,
                                    modelValue: attdType.value,
                                    "onUpdate:modelValue": [($event) => attdType.value = $event, onAttendTypeSelected],
                                    variant: "outlined",
                                    clearable: "",
                                    disabled: isFormDisabled.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "3" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    label: "시",
                                    items: unref(hourOptions),
                                    modelValue: selectedHour.value,
                                    "onUpdate:modelValue": ($event) => selectedHour.value = $event,
                                    variant: "outlined",
                                    disabled: isTimeFormDisabled.value
                                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue", "disabled"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "3" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "분(0~59)",
                                    modelValue: selectedMinute.value,
                                    "onUpdate:modelValue": [($event) => selectedMinute.value = $event, onMinuteInput],
                                    variant: "outlined",
                                    maxlength: "2",
                                    rules: [validateMinute],
                                    disabled: isTimeFormDisabled.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "elevated",
                        size: "large",
                        class: "font-weight-bold text-white px-4 py-1",
                        onClick: onAdd,
                        disabled: isAddButtonDisabled.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 기록 추가 ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hr/attendance/addAttenModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "daily",
  __ssrInlineRender: true,
  setup(__props) {
    const handleAddAttendData = (data) => {
      console.log("부모가 받은 데이터:", data);
      const rowNumber = dayAttdList.value.length + 1;
      isAddAttendanceDialogOpen.value = false;
      const formattedItem = {
        ...data,
        rowNumber
      };
      dayAttdList.value.push(formattedItem);
    };
    const handleAddAttendanceClick = () => {
      isAddAttendanceDialogOpen.value = true;
      addAttdDeptList.value = [...depList.value];
    };
    const formatTime = (rawTime) => {
      const str = rawTime.toString().padStart(4, "0");
      return `${str.slice(0, 2)}:${str.slice(2)}`;
    };
    const attachDeptName = () => {
      dayAttdList.value = dayAttdList.value.map((item) => {
        const deptInfo = depList.value.find(
          (dept) => dept.deptCode === item.deptCode
        );
        return {
          ...item,
          deptName: deptInfo ? deptInfo.deptName : item.deptCode
          // 못 찾으면 그대로 코드
        };
      });
    };
    const depList = ref([]);
    const addAttdDeptList = ref([]);
    const isAddAttendanceDialogOpen = ref(false);
    const dayAttdList = ref([]);
    const selectedHour = ref("");
    const selectedMinute = ref("");
    const hourOptions = Array.from(
      { length: 24 },
      (_, i) => i.toString().padStart(2, "0")
    );
    const validateMinute = (v) => {
      const num = Number(v);
      if (!v)
        return true;
      if (/^\d{1,2}$/.test(v) && num >= 0 && num <= 59)
        return true;
      return "0~59 사이 숫자를 입력하세요";
    };
    watch([selectedHour, selectedMinute], () => {
      if (selectedHour.value && selectedMinute.value) {
        const hour = selectedHour.value.padStart(2, "0");
        const minute = selectedMinute.value.padStart(2, "0");
        time.value = `${hour}${minute}`;
        console.log(time.value);
      }
    });
    const itemsPerPage = ref(10);
    const lastCode = ref("");
    const attendDaliyList = ref([]);
    const fetchedApplyDay = ref("");
    const fetchAttendance = async () => {
      if (!applyDay.value) {
        alert("날짜를 선택해주세요.");
        return;
      }
      try {
        fetchedApplyDay.value = applyDay.value;
        const dayAndPage = {
          applyDay: fetchedApplyDay.value,
          pageSize: itemsPerPage.value
        };
        console.log("dayAndPage", dayAndPage);
        await attenStore().SEARCH_DAY_ATTD_LIST(dayAndPage);
        attendDaliyList.value = attenStore().dayAttdDayleList;
        console.log("attendDaliyList.value", attendDaliyList.value);
        dayAttdList.value = attendDaliyList.value.map((item, idx) => ({
          ...item,
          rowNumber: idx + 1
        }));
        attachDeptName();
        console.log("dayAttdList: ", dayAttdList.value);
        if (attendDaliyList.value.length > 0) {
          const lastItem = attendDaliyList.value[attendDaliyList.value.length - 1];
          lastCode.value = lastItem.dayAttdCode;
          console.log("lastCode 업데이트:", lastCode.value);
        }
      } catch (err) {
        console.error("일근태 조회 실패:", err);
      }
    };
    const getNextPage = async () => {
      if (fetchedApplyDay.value != applyDay.value) {
        alert("일근태 조회를 먼저 누르십시오.");
        return;
      }
      if (applyDay.value == "") {
        alert("일근태 조회를 먼저 하십시오.");
        return;
      }
      const nextPageQueryString = {
        applyDay: fetchedApplyDay.value,
        pageSize: itemsPerPage.value,
        lastCode: lastCode.value
      };
      console.log("nextPageQueryString: ", nextPageQueryString);
      try {
        await attenStore().SEARCH_DAY_ATTD_NEXT_PAGE_LIST(nextPageQueryString);
        const nextPageList = attenStore().dayAttdDayleNextPageList;
        if (nextPageList.length === 0) {
          alert("마지막 검색입니다.");
          return;
        }
        const startRowNumber = dayAttdList.value.length;
        const newDataWithRowNumber = nextPageList.map((item, idx) => ({
          ...item,
          rowNumber: startRowNumber + idx + 1
        }));
        dayAttdList.value.push(...newDataWithRowNumber);
        attachDeptName();
        lastCode.value = nextPageList[nextPageList.length - 1].dayAttdCode;
      } catch (err) {
        console.error("다음 검색 실패:", err);
      }
    };
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const isEmployeeDialogVisible = ref(false);
    const isAttendanceDialogVisible = ref(false);
    ref(false);
    const applyDay = ref("");
    const selectedDept = ref("");
    ref([]);
    const selectedEmp = ref("");
    ref([]);
    const time = ref("");
    const day_attd_list = ref([]);
    const selectedAttdTypeText = ref("");
    const selectedAttdTypeValue = ref("");
    ref({});
    const modalStatus = ref("insert");
    const targetTime = ref("");
    const targetDayAttdCode = ref("");
    const headers = [
      { title: "번호", key: "rowNumber" },
      { title: "부서", key: "deptName" },
      { title: "사원번호", key: "empCode" },
      { title: "이름", key: "empName" },
      { title: "승인날짜", key: "applyDay" },
      { title: "근태내용", key: "attdTypeName" },
      { title: "시간", key: "time" },
      { title: "전체기록번호", key: "dayAttdCode" }
    ];
    const attdType = [
      { text: "출근", value: "ADC001" },
      { text: "퇴근", value: "ADC002" },
      { text: "공외출", value: "ADC003" },
      { text: "공귀사", value: "ADC007" },
      { text: "귀사(무단)", value: "ADC010" },
      { text: "외출(무단)", value: "ADC012" }
    ];
    const itemProps = (item) => {
      return {
        title: item.text,
        value: item.value
      };
    };
    watch(selectedAttdTypeValue, (newValue, oldValue) => {
      const selectedItem = attdType.find((item) => item.value === newValue);
      if (selectedItem) {
        selectedAttdTypeText.value = selectedItem.text;
        selectedAttdTypeValue.value = selectedItem.value;
        console.log("Selected Title:", selectedAttdTypeText.value);
        console.log("Selected value:", selectedAttdTypeValue.value);
      }
    });
    watch(selectedDept, (newValue, oldValue) => {
      if (newValue !== oldValue)
        fetchEmpList();
    });
    const handleSearchEmp = (empCode) => {
      console.log("자식으로부터 받은 사번:", empCode);
      dayAttdList.value = dayAttdList.value.filter(
        (item) => item.empCode === empCode
      );
    };
    const isDialogOpen = ref(false);
    const uniqueEmpCodes = ref([]);
    const openEmpSearchDialog = () => {
      isDialogOpen.value = true;
      const seen = /* @__PURE__ */ new Set();
      uniqueEmpCodes.value = dayAttdList.value.filter((item) => {
        if (!seen.has(item.empCode)) {
          seen.add(item.empCode);
          return true;
        }
        return false;
      }).map((item) => ({
        empCode: item.empCode,
        empName: item.empName
      }));
      console.log(uniqueEmpCodes.value);
    };
    const fetchDayAttdList = async () => {
      if (applyDay.value === "") {
        alert("조회할 신청일자를 선택해주세요.");
        isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
      } else {
        try {
          console.log("[applyDay]", applyDay.value);
          console.log("[empCode]", selectedEmp.value);
          const res = await axios.get(
            "http://localhost:8282/hr/attendance/dayAttendance",
            { params: { applyDay: applyDay.value, empCode: selectedEmp.value } }
          );
          console.log("[day_attd_list.value]", res.data.dayAttdList);
          day_attd_list.value = res.data.dayAttdList;
          isEmployeeDialogVisible.value = false;
        } catch (e) {
          console.error(e);
        }
      }
    };
    const insertDayAttd = async () => {
      if (applyDay.value === "") {
        alert("조회할 신청일자를 선택해주세요.");
        isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
      } else {
        try {
          const dayAttd = {
            empCode: selectedEmp.value,
            applyDay: applyDay.value,
            attdTypeCode: selectedAttdTypeValue.value,
            attdTypeName: selectedAttdTypeText.value,
            time: time.value
          };
          if (Object.values(dayAttd).some((datavalue) => datavalue == "")) {
            alert("모든 항목을 선택해주세요.");
          } else {
            await attenStore().ADD_DAY_ATTD_BY_PARMS(dayAttd);
            alert("신청이 완료되었습니다. ");
            fetchDayAttdList();
            isAttendanceDialogVisible.value = false;
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    const updateDayAttd = async () => {
      console.log("selectedAttdTypeValue.value", selectedAttdTypeValue.value);
      console.log("selectedAttdTypeText.value", selectedAttdTypeText.value);
      console.log("selectedEmp.value", selectedEmp.value);
      console.log("targetDayAttdCode", targetDayAttdCode.value);
      if (applyDay.value === "") {
        alert("조회할 신청일자를 선택해주세요.");
        isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
      } else {
        if (selectedAttdTypeText.value === "" || selectedAttdTypeValue.value === "") {
          alert("근태 유형을 선택해주세요.");
        } else {
          await attenStore().UPDATE_DAYATTD({
            attdTypeCode: selectedAttdTypeValue.value,
            attdTypeName: selectedAttdTypeText.value,
            empCode: selectedEmp.value,
            dayAttdCode: targetDayAttdCode.value
          }).then((res) => {
            console.log("[수정완료]", res.data);
            alert("수정이 완료되었습니다.");
            fetchDayAttdList();
          }).catch((e) => console.error(e));
          isAttendanceDialogVisible.value = false;
          modalStatus.value = "insert";
        }
      }
    };
    const deleteDayAttd = () => {
      console.log("삭제");
      console.log("selectedEmp.value", selectedEmp.value);
      console.log("targetDayAttdCode", targetDayAttdCode.value);
      if (applyDay.value === "") {
        alert("조회할 신청일자를 선택해주세요.");
        isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
      } else {
        const deleteData = {
          empCode: selectedEmp.value,
          dayAttdCode: targetDayAttdCode.value
        };
        attenStore().DELETE_DAT_ATTD(deleteData).then((res) => {
          console.log("[삭제결과]", res.data);
          isAttendanceDialogVisible.value = false;
          modalStatus.value = "insert";
          alert("삭제가 완료되었습니다.");
          fetchDayAttdList();
        }).catch((e) => console.error(e));
      }
    };
    const onRowClick = async (event, item) => {
      try {
        console.log("[clickRow]", item);
        targetTime.value = item.item.time;
        targetDayAttdCode.value = item.item.dayAttdCode;
        console.log("[targetTime]", item.item.time);
        modalStatus.value = "update";
        isAttendanceDialogVisible.value = true;
        console.log(isAttendanceDialogVisible.value);
      } catch (e) {
        console.error(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$3;
      const _component_DialogCloseBtn = _sfc_main$4;
      const _component_empSearchModal = _sfc_main$2;
      const _component_addAttenModal = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6">일근태 등록</h1><div>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: () => {
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          justify: "end",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1${_scopeId5}>   일근태 기록</h1>`);
                                  } else {
                                    return [
                                      createVNode("h1", null, "   일근태 기록")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { md: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppDateTimePicker, {
                                      modelValue: unref(applyDay),
                                      "onUpdate:modelValue": ($event) => isRef(applyDay) ? applyDay.value = $event : null,
                                      placeholder: "날짜선택",
                                      "prepend-icon": "tabler-calendar-event"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppDateTimePicker, {
                                        modelValue: unref(applyDay),
                                        "onUpdate:modelValue": ($event) => isRef(applyDay) ? applyDay.value = $event : null,
                                        placeholder: "날짜선택",
                                        "prepend-icon": "tabler-calendar-event"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      onClick: fetchAttendance,
                                      class: "text-white",
                                      "prepend-icon": "tabler-calendar-search",
                                      style: { "min-width": "120px" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` 일근태 조회 `);
                                        } else {
                                          return [
                                            createTextVNode(" 일근태 조회 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: fetchAttendance,
                                        class: "text-white",
                                        "prepend-icon": "tabler-calendar-search",
                                        style: { "min-width": "120px" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 일근태 조회 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      style: { "min-width": "120px" },
                                      onClick: openEmpSearchDialog,
                                      disabled: unref(dayAttdList).length === 0
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` 사번조회 `);
                                        } else {
                                          return [
                                            createTextVNode(" 사번조회 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        style: { "min-width": "120px" },
                                        onClick: openEmpSearchDialog,
                                        disabled: unref(dayAttdList).length === 0
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 사번조회 ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "auto",
                                class: "me-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VDialog, {
                                      modelValue: unref(isAttendanceDialogVisible),
                                      "onUpdate:modelValue": ($event) => isRef(isAttendanceDialogVisible) ? isAttendanceDialogVisible.value = $event : null,
                                      width: "500"
                                    }, {
                                      activator: withCtx(({ props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            onClick: handleAddAttendanceClick,
                                            disabled: unref(applyDay) === ""
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` 일근태 기록 추가 `);
                                              } else {
                                                return [
                                                  createTextVNode(" 일근태 기록 추가 ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              onClick: handleAddAttendanceClick,
                                              disabled: unref(applyDay) === ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" 일근태 기록 추가 ")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VContainer, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_DialogCloseBtn, {
                                                  onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_DialogCloseBtn, {
                                                    onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                                  }, null, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCard, {
                                            title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VContainer, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VRow, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCol, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: unref(selectedEmp),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                    class: "mb-3",
                                                                    label: "사원명",
                                                                    readonly: "",
                                                                    variant: "outlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(selectedEmp),
                                                                      "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                      class: "mb-3",
                                                                      label: "사원명",
                                                                      readonly: "",
                                                                      variant: "outlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: unref(selectedEmp),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                    class: "mb-3",
                                                                    label: "사원코드",
                                                                    readonly: "",
                                                                    variant: "outlined"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(selectedEmp),
                                                                      "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                      class: "mb-3",
                                                                      label: "사원코드",
                                                                      readonly: "",
                                                                      variant: "outlined"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCol, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(selectedEmp),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                    class: "mb-3",
                                                                    label: "사원명",
                                                                    readonly: "",
                                                                    variant: "outlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(selectedEmp),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                    class: "mb-3",
                                                                    label: "사원코드",
                                                                    readonly: "",
                                                                    variant: "outlined"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VRow, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCol, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VSelect, {
                                                                    modelValue: unref(selectedAttdTypeValue),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                                    class: "mb-3",
                                                                    label: "근무타입",
                                                                    items: attdType,
                                                                    "item-props": itemProps,
                                                                    variant: "outlined",
                                                                    clearable: "",
                                                                    "clear-icon": "tabler-x"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VSelect, {
                                                                      modelValue: unref(selectedAttdTypeValue),
                                                                      "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                                      class: "mb-3",
                                                                      label: "근무타입",
                                                                      items: attdType,
                                                                      "item-props": itemProps,
                                                                      variant: "outlined",
                                                                      clearable: "",
                                                                      "clear-icon": "tabler-x"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VRow, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VCol, { cols: "6" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(VSelect, {
                                                                                modelValue: unref(selectedHour),
                                                                                "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                                items: unref(hourOptions),
                                                                                label: "시",
                                                                                variant: "outlined",
                                                                                dense: "",
                                                                                clearable: "",
                                                                                style: { "min-width": "120px" }
                                                                              }, null, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(VSelect, {
                                                                                  modelValue: unref(selectedHour),
                                                                                  "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                                  items: unref(hourOptions),
                                                                                  label: "시",
                                                                                  variant: "outlined",
                                                                                  dense: "",
                                                                                  clearable: "",
                                                                                  style: { "min-width": "120px" }
                                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(VCol, { cols: "6" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(VTextField, {
                                                                                modelValue: unref(selectedMinute),
                                                                                "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                                label: "분",
                                                                                variant: "outlined",
                                                                                dense: "",
                                                                                rules: [validateMinute],
                                                                                maxlength: "2"
                                                                              }, null, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(VTextField, {
                                                                                  modelValue: unref(selectedMinute),
                                                                                  "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                                  label: "분",
                                                                                  variant: "outlined",
                                                                                  dense: "",
                                                                                  rules: [validateMinute],
                                                                                  maxlength: "2"
                                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VCol, { cols: "6" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(VSelect, {
                                                                                modelValue: unref(selectedHour),
                                                                                "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                                items: unref(hourOptions),
                                                                                label: "시",
                                                                                variant: "outlined",
                                                                                dense: "",
                                                                                clearable: "",
                                                                                style: { "min-width": "120px" }
                                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(VCol, { cols: "6" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(VTextField, {
                                                                                modelValue: unref(selectedMinute),
                                                                                "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                                label: "분",
                                                                                variant: "outlined",
                                                                                dense: "",
                                                                                rules: [validateMinute],
                                                                                maxlength: "2"
                                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                            ]),
                                                                            _: 1
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VRow, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VCol, { cols: "6" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VSelect, {
                                                                              modelValue: unref(selectedHour),
                                                                              "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                              items: unref(hourOptions),
                                                                              label: "시",
                                                                              variant: "outlined",
                                                                              dense: "",
                                                                              clearable: "",
                                                                              style: { "min-width": "120px" }
                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(VCol, { cols: "6" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(VTextField, {
                                                                              modelValue: unref(selectedMinute),
                                                                              "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                              label: "분",
                                                                              variant: "outlined",
                                                                              dense: "",
                                                                              rules: [validateMinute],
                                                                              maxlength: "2"
                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCol, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VSelect, {
                                                                    modelValue: unref(selectedAttdTypeValue),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                                    class: "mb-3",
                                                                    label: "근무타입",
                                                                    items: attdType,
                                                                    "item-props": itemProps,
                                                                    variant: "outlined",
                                                                    clearable: "",
                                                                    "clear-icon": "tabler-x"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VRow, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VCol, { cols: "6" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VSelect, {
                                                                            modelValue: unref(selectedHour),
                                                                            "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                            items: unref(hourOptions),
                                                                            label: "시",
                                                                            variant: "outlined",
                                                                            dense: "",
                                                                            clearable: "",
                                                                            style: { "min-width": "120px" }
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(VCol, { cols: "6" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VTextField, {
                                                                            modelValue: unref(selectedMinute),
                                                                            "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                            label: "분",
                                                                            variant: "outlined",
                                                                            dense: "",
                                                                            rules: [validateMinute],
                                                                            maxlength: "2"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(selectedEmp),
                                                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                  class: "mb-3",
                                                                  label: "사원명",
                                                                  readonly: "",
                                                                  variant: "outlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(selectedEmp),
                                                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                  class: "mb-3",
                                                                  label: "사원코드",
                                                                  readonly: "",
                                                                  variant: "outlined"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VSelect, {
                                                                  modelValue: unref(selectedAttdTypeValue),
                                                                  "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                                  class: "mb-3",
                                                                  label: "근무타입",
                                                                  items: attdType,
                                                                  "item-props": itemProps,
                                                                  variant: "outlined",
                                                                  clearable: "",
                                                                  "clear-icon": "tabler-x"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VRow, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VCol, { cols: "6" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VSelect, {
                                                                          modelValue: unref(selectedHour),
                                                                          "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                          items: unref(hourOptions),
                                                                          label: "시",
                                                                          variant: "outlined",
                                                                          dense: "",
                                                                          clearable: "",
                                                                          style: { "min-width": "120px" }
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VCol, { cols: "6" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VTextField, {
                                                                          modelValue: unref(selectedMinute),
                                                                          "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                          label: "분",
                                                                          variant: "outlined",
                                                                          dense: "",
                                                                          rules: [validateMinute],
                                                                          maxlength: "2"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                      ]),
                                                                      _: 1
                                                                    })
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCardText, { class: "d-flex justify-end" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      if (unref(modalStatus) === "insert") {
                                                        _push9(ssrRenderComponent(VBtn, { onClick: insertDayAttd }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` 추가 `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" 추가 ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(`<!---->`);
                                                      }
                                                      if (unref(modalStatus) === "update") {
                                                        _push9(ssrRenderComponent(VBtn, { onClick: updateDayAttd }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` 수정 `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" 수정 ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(`<!---->`);
                                                      }
                                                      if (unref(modalStatus) === "update") {
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          class: "ml-3",
                                                          onClick: deleteDayAttd
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` 삭제 `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" 삭제 ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(`<!---->`);
                                                      }
                                                    } else {
                                                      return [
                                                        unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                                          key: 0,
                                                          onClick: insertDayAttd
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" 추가 ")
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true),
                                                        unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                          key: 1,
                                                          onClick: updateDayAttd
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" 수정 ")
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true),
                                                        unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                          key: 2,
                                                          class: "ml-3",
                                                          onClick: deleteDayAttd
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" 삭제 ")
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VContainer, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(selectedEmp),
                                                                "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                class: "mb-3",
                                                                label: "사원명",
                                                                readonly: "",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(selectedEmp),
                                                                "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                                class: "mb-3",
                                                                label: "사원코드",
                                                                readonly: "",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VSelect, {
                                                                modelValue: unref(selectedAttdTypeValue),
                                                                "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                                class: "mb-3",
                                                                label: "근무타입",
                                                                items: attdType,
                                                                "item-props": itemProps,
                                                                variant: "outlined",
                                                                clearable: "",
                                                                "clear-icon": "tabler-x"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VRow, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VCol, { cols: "6" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VSelect, {
                                                                        modelValue: unref(selectedHour),
                                                                        "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                        items: unref(hourOptions),
                                                                        label: "시",
                                                                        variant: "outlined",
                                                                        dense: "",
                                                                        clearable: "",
                                                                        style: { "min-width": "120px" }
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VCol, { cols: "6" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VTextField, {
                                                                        modelValue: unref(selectedMinute),
                                                                        "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                        label: "분",
                                                                        variant: "outlined",
                                                                        dense: "",
                                                                        rules: [validateMinute],
                                                                        maxlength: "2"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCardText, { class: "d-flex justify-end" }, {
                                                    default: withCtx(() => [
                                                      unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                                        key: 0,
                                                        onClick: insertDayAttd
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" 추가 ")
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true),
                                                      unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                        key: 1,
                                                        onClick: updateDayAttd
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" 수정 ")
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true),
                                                      unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                        key: 2,
                                                        class: "ml-3",
                                                        onClick: deleteDayAttd
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" 삭제 ")
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VContainer, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_DialogCloseBtn, {
                                                  onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                                }, null, 8, ["onClick"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCard, {
                                              title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VContainer, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(selectedEmp),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                              class: "mb-3",
                                                              label: "사원명",
                                                              readonly: "",
                                                              variant: "outlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(selectedEmp),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                              class: "mb-3",
                                                              label: "사원코드",
                                                              readonly: "",
                                                              variant: "outlined"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              modelValue: unref(selectedAttdTypeValue),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                              class: "mb-3",
                                                              label: "근무타입",
                                                              items: attdType,
                                                              "item-props": itemProps,
                                                              variant: "outlined",
                                                              clearable: "",
                                                              "clear-icon": "tabler-x"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VRow, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VCol, { cols: "6" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VSelect, {
                                                                      modelValue: unref(selectedHour),
                                                                      "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                      items: unref(hourOptions),
                                                                      label: "시",
                                                                      variant: "outlined",
                                                                      dense: "",
                                                                      clearable: "",
                                                                      style: { "min-width": "120px" }
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VCol, { cols: "6" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(selectedMinute),
                                                                      "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                      label: "분",
                                                                      variant: "outlined",
                                                                      dense: "",
                                                                      rules: [validateMinute],
                                                                      maxlength: "2"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCardText, { class: "d-flex justify-end" }, {
                                                  default: withCtx(() => [
                                                    unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                                      key: 0,
                                                      onClick: insertDayAttd
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" 추가 ")
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true),
                                                    unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                      key: 1,
                                                      onClick: updateDayAttd
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" 수정 ")
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true),
                                                    unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                      key: 2,
                                                      class: "ml-3",
                                                      onClick: deleteDayAttd
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" 삭제 ")
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["title"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VDialog, {
                                        modelValue: unref(isAttendanceDialogVisible),
                                        "onUpdate:modelValue": ($event) => isRef(isAttendanceDialogVisible) ? isAttendanceDialogVisible.value = $event : null,
                                        width: "500"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VBtn, {
                                            onClick: handleAddAttendanceClick,
                                            disabled: unref(applyDay) === ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" 일근태 기록 추가 ")
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VContainer, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_DialogCloseBtn, {
                                                onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                              }, null, 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCard, {
                                            title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VContainer, null, {
                                                default: withCtx(() => [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(selectedEmp),
                                                            "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                            class: "mb-3",
                                                            label: "사원명",
                                                            readonly: "",
                                                            variant: "outlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(selectedEmp),
                                                            "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                            class: "mb-3",
                                                            label: "사원코드",
                                                            readonly: "",
                                                            variant: "outlined"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            modelValue: unref(selectedAttdTypeValue),
                                                            "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                            class: "mb-3",
                                                            label: "근무타입",
                                                            items: attdType,
                                                            "item-props": itemProps,
                                                            variant: "outlined",
                                                            clearable: "",
                                                            "clear-icon": "tabler-x"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VRow, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VCol, { cols: "6" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VSelect, {
                                                                    modelValue: unref(selectedHour),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                    items: unref(hourOptions),
                                                                    label: "시",
                                                                    variant: "outlined",
                                                                    dense: "",
                                                                    clearable: "",
                                                                    style: { "min-width": "120px" }
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, { cols: "6" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(selectedMinute),
                                                                    "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                    label: "분",
                                                                    variant: "outlined",
                                                                    dense: "",
                                                                    rules: [validateMinute],
                                                                    maxlength: "2"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCardText, { class: "d-flex justify-end" }, {
                                                default: withCtx(() => [
                                                  unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                                    key: 0,
                                                    onClick: insertDayAttd
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 추가 ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true),
                                                  unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                    key: 1,
                                                    onClick: updateDayAttd
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 수정 ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true),
                                                  unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                    key: 2,
                                                    class: "ml-3",
                                                    onClick: deleteDayAttd
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 삭제 ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["title"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("h1", null, "   일근태 기록")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { md: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppDateTimePicker, {
                                      modelValue: unref(applyDay),
                                      "onUpdate:modelValue": ($event) => isRef(applyDay) ? applyDay.value = $event : null,
                                      placeholder: "날짜선택",
                                      "prepend-icon": "tabler-calendar-event"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "auto" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: fetchAttendance,
                                      class: "text-white",
                                      "prepend-icon": "tabler-calendar-search",
                                      style: { "min-width": "120px" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 일근태 조회 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "auto" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      style: { "min-width": "120px" },
                                      onClick: openEmpSearchDialog,
                                      disabled: unref(dayAttdList).length === 0
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 사번조회 ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "auto",
                                  class: "me-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VDialog, {
                                      modelValue: unref(isAttendanceDialogVisible),
                                      "onUpdate:modelValue": ($event) => isRef(isAttendanceDialogVisible) ? isAttendanceDialogVisible.value = $event : null,
                                      width: "500"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, {
                                          onClick: handleAddAttendanceClick,
                                          disabled: unref(applyDay) === ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" 일근태 기록 추가 ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VContainer, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_DialogCloseBtn, {
                                              onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                            }, null, 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCard, {
                                          title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VContainer, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(selectedEmp),
                                                          "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                          class: "mb-3",
                                                          label: "사원명",
                                                          readonly: "",
                                                          variant: "outlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(selectedEmp),
                                                          "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                          class: "mb-3",
                                                          label: "사원코드",
                                                          readonly: "",
                                                          variant: "outlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          modelValue: unref(selectedAttdTypeValue),
                                                          "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                          class: "mb-3",
                                                          label: "근무타입",
                                                          items: attdType,
                                                          "item-props": itemProps,
                                                          variant: "outlined",
                                                          clearable: "",
                                                          "clear-icon": "tabler-x"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, { cols: "6" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VSelect, {
                                                                  modelValue: unref(selectedHour),
                                                                  "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                  items: unref(hourOptions),
                                                                  label: "시",
                                                                  variant: "outlined",
                                                                  dense: "",
                                                                  clearable: "",
                                                                  style: { "min-width": "120px" }
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, { cols: "6" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(selectedMinute),
                                                                  "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                  label: "분",
                                                                  variant: "outlined",
                                                                  dense: "",
                                                                  rules: [validateMinute],
                                                                  maxlength: "2"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, { class: "d-flex justify-end" }, {
                                              default: withCtx(() => [
                                                unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                                  key: 0,
                                                  onClick: insertDayAttd
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" 추가 ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true),
                                                unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                  key: 1,
                                                  onClick: updateDayAttd
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" 수정 ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true),
                                                unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                  key: 2,
                                                  class: "ml-3",
                                                  onClick: deleteDayAttd
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" 삭제 ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["title"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            align: "center",
                            justify: "end",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("h1", null, "   일근태 기록")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { md: "2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppDateTimePicker, {
                                    modelValue: unref(applyDay),
                                    "onUpdate:modelValue": ($event) => isRef(applyDay) ? applyDay.value = $event : null,
                                    placeholder: "날짜선택",
                                    "prepend-icon": "tabler-calendar-event"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: fetchAttendance,
                                    class: "text-white",
                                    "prepend-icon": "tabler-calendar-search",
                                    style: { "min-width": "120px" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 일근태 조회 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    style: { "min-width": "120px" },
                                    onClick: openEmpSearchDialog,
                                    disabled: unref(dayAttdList).length === 0
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 사번조회 ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "auto",
                                class: "me-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VDialog, {
                                    modelValue: unref(isAttendanceDialogVisible),
                                    "onUpdate:modelValue": ($event) => isRef(isAttendanceDialogVisible) ? isAttendanceDialogVisible.value = $event : null,
                                    width: "500"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, {
                                        onClick: handleAddAttendanceClick,
                                        disabled: unref(applyDay) === ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 일근태 기록 추가 ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VContainer, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_DialogCloseBtn, {
                                            onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCard, {
                                        title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VContainer, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(selectedEmp),
                                                        "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                        class: "mb-3",
                                                        label: "사원명",
                                                        readonly: "",
                                                        variant: "outlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(selectedEmp),
                                                        "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                        class: "mb-3",
                                                        label: "사원코드",
                                                        readonly: "",
                                                        variant: "outlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        modelValue: unref(selectedAttdTypeValue),
                                                        "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                        class: "mb-3",
                                                        label: "근무타입",
                                                        items: attdType,
                                                        "item-props": itemProps,
                                                        variant: "outlined",
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, { cols: "6" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VSelect, {
                                                                modelValue: unref(selectedHour),
                                                                "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                                items: unref(hourOptions),
                                                                label: "시",
                                                                variant: "outlined",
                                                                dense: "",
                                                                clearable: "",
                                                                style: { "min-width": "120px" }
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, { cols: "6" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(selectedMinute),
                                                                "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                                label: "분",
                                                                variant: "outlined",
                                                                dense: "",
                                                                rules: [validateMinute],
                                                                maxlength: "2"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, { class: "d-flex justify-end" }, {
                                            default: withCtx(() => [
                                              unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                onClick: insertDayAttd
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" 추가 ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                key: 1,
                                                onClick: updateDayAttd
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" 수정 ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                                key: 2,
                                                class: "ml-3",
                                                onClick: deleteDayAttd
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" 삭제 ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["title"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          class: "mt-6",
                          headers,
                          items: unref(dayAttdList),
                          "items-per-page": 100,
                          "onClick:row": onRowClick,
                          "hide-default-footer": ""
                        }, {
                          "item.time": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(formatTime(item.time))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(formatTime(item.time)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VDataTable), {
                            class: "mt-6",
                            headers,
                            items: unref(dayAttdList),
                            "items-per-page": 100,
                            "onClick:row": onRowClick,
                            "hide-default-footer": ""
                          }, {
                            "item.time": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(formatTime(item.time)), 1)
                            ]),
                            _: 1
                          }, 8, ["items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, {
                    align: "center",
                    class: "mt-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>표시할 행 수:</span>`);
                            } else {
                              return [
                                createVNode("span", null, "표시할 행 수:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(itemsPerPage),
                                "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                items: [10, 50, 100],
                                label: "행 수 선택",
                                variant: "outlined",
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(itemsPerPage),
                                  "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                  items: [10, 50, 100],
                                  label: "행 수 선택",
                                  variant: "outlined",
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: getNextPage
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 다음 검색 `);
                                  } else {
                                    return [
                                      createTextVNode(" 다음 검색 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-white",
                                  onClick: getNextPage
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 다음 검색 ")
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
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "표시할 행 수:")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "3" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(itemsPerPage),
                                "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                items: [10, 50, 100],
                                label: "행 수 선택",
                                variant: "outlined",
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: getNextPage
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 다음 검색 ")
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
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "end",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("h1", null, "   일근태 기록")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { md: "2" }, {
                              default: withCtx(() => [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: unref(applyDay),
                                  "onUpdate:modelValue": ($event) => isRef(applyDay) ? applyDay.value = $event : null,
                                  placeholder: "날짜선택",
                                  "prepend-icon": "tabler-calendar-event"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: fetchAttendance,
                                  class: "text-white",
                                  "prepend-icon": "tabler-calendar-search",
                                  style: { "min-width": "120px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 일근태 조회 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  style: { "min-width": "120px" },
                                  onClick: openEmpSearchDialog,
                                  disabled: unref(dayAttdList).length === 0
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 사번조회 ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "auto",
                              class: "me-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VDialog, {
                                  modelValue: unref(isAttendanceDialogVisible),
                                  "onUpdate:modelValue": ($event) => isRef(isAttendanceDialogVisible) ? isAttendanceDialogVisible.value = $event : null,
                                  width: "500"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, {
                                      onClick: handleAddAttendanceClick,
                                      disabled: unref(applyDay) === ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 일근태 기록 추가 ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VContainer, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_DialogCloseBtn, {
                                          onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCard, {
                                      title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VContainer, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(selectedEmp),
                                                      "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                      class: "mb-3",
                                                      label: "사원명",
                                                      readonly: "",
                                                      variant: "outlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(selectedEmp),
                                                      "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                      class: "mb-3",
                                                      label: "사원코드",
                                                      readonly: "",
                                                      variant: "outlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      modelValue: unref(selectedAttdTypeValue),
                                                      "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                      class: "mb-3",
                                                      label: "근무타입",
                                                      items: attdType,
                                                      "item-props": itemProps,
                                                      variant: "outlined",
                                                      clearable: "",
                                                      "clear-icon": "tabler-x"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              modelValue: unref(selectedHour),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                              items: unref(hourOptions),
                                                              label: "시",
                                                              variant: "outlined",
                                                              dense: "",
                                                              clearable: "",
                                                              style: { "min-width": "120px" }
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(selectedMinute),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                              label: "분",
                                                              variant: "outlined",
                                                              dense: "",
                                                              rules: [validateMinute],
                                                              maxlength: "2"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, { class: "d-flex justify-end" }, {
                                          default: withCtx(() => [
                                            unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              onClick: insertDayAttd
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" 추가 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                              key: 1,
                                              onClick: updateDayAttd
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" 수정 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                              key: 2,
                                              class: "ml-3",
                                              onClick: deleteDayAttd
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" 삭제 ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["title"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onSubmit"]),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(unref(VDataTable), {
                          class: "mt-6",
                          headers,
                          items: unref(dayAttdList),
                          "items-per-page": 100,
                          "onClick:row": onRowClick,
                          "hide-default-footer": ""
                        }, {
                          "item.time": withCtx(({ item }) => [
                            createTextVNode(toDisplayString(formatTime(item.time)), 1)
                          ]),
                          _: 1
                        }, 8, ["items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, {
                      align: "center",
                      class: "mt-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "표시할 행 수:")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "3" }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(itemsPerPage),
                              "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                              items: [10, 50, 100],
                              label: "행 수 선택",
                              variant: "outlined",
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "text-white",
                              onClick: getNextPage
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 다음 검색 ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "mt-4" }, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        align: "center",
                        justify: "end",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("h1", null, "   일근태 기록")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { md: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(applyDay),
                                "onUpdate:modelValue": ($event) => isRef(applyDay) ? applyDay.value = $event : null,
                                placeholder: "날짜선택",
                                "prepend-icon": "tabler-calendar-event"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: fetchAttendance,
                                class: "text-white",
                                "prepend-icon": "tabler-calendar-search",
                                style: { "min-width": "120px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 일근태 조회 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                style: { "min-width": "120px" },
                                onClick: openEmpSearchDialog,
                                disabled: unref(dayAttdList).length === 0
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 사번조회 ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "auto",
                            class: "me-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VDialog, {
                                modelValue: unref(isAttendanceDialogVisible),
                                "onUpdate:modelValue": ($event) => isRef(isAttendanceDialogVisible) ? isAttendanceDialogVisible.value = $event : null,
                                width: "500"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, {
                                    onClick: handleAddAttendanceClick,
                                    disabled: unref(applyDay) === ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 일근태 기록 추가 ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DialogCloseBtn, {
                                        onClick: ($event) => isAttendanceDialogVisible.value = !unref(isAttendanceDialogVisible)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCard, {
                                    title: `${unref(modalStatus) === "insert" ? "일근태 추가" : "일근태 수정/삭제"}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VContainer, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(selectedEmp),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                    class: "mb-3",
                                                    label: "사원명",
                                                    readonly: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(selectedEmp),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                    class: "mb-3",
                                                    label: "사원코드",
                                                    readonly: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(selectedAttdTypeValue),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedAttdTypeValue) ? selectedAttdTypeValue.value = $event : null,
                                                    class: "mb-3",
                                                    label: "근무타입",
                                                    items: attdType,
                                                    "item-props": itemProps,
                                                    variant: "outlined",
                                                    clearable: "",
                                                    "clear-icon": "tabler-x"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            modelValue: unref(selectedHour),
                                                            "onUpdate:modelValue": ($event) => isRef(selectedHour) ? selectedHour.value = $event : null,
                                                            items: unref(hourOptions),
                                                            label: "시",
                                                            variant: "outlined",
                                                            dense: "",
                                                            clearable: "",
                                                            style: { "min-width": "120px" }
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(selectedMinute),
                                                            "onUpdate:modelValue": ($event) => isRef(selectedMinute) ? selectedMinute.value = $event : null,
                                                            label: "분",
                                                            variant: "outlined",
                                                            dense: "",
                                                            rules: [validateMinute],
                                                            maxlength: "2"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "d-flex justify-end" }, {
                                        default: withCtx(() => [
                                          unref(modalStatus) === "insert" ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            onClick: insertDayAttd
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" 추가 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                            key: 1,
                                            onClick: updateDayAttd
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" 수정 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(modalStatus) === "update" ? (openBlock(), createBlock(VBtn, {
                                            key: 2,
                                            class: "ml-3",
                                            onClick: deleteDayAttd
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" 삭제 ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["title"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onSubmit"]),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTable), {
                        class: "mt-6",
                        headers,
                        items: unref(dayAttdList),
                        "items-per-page": 100,
                        "onClick:row": onRowClick,
                        "hide-default-footer": ""
                      }, {
                        "item.time": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(formatTime(item.time)), 1)
                        ]),
                        _: 1
                      }, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, {
                    align: "center",
                    class: "mt-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "표시할 행 수:")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "3" }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(itemsPerPage),
                            "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                            items: [10, 50, 100],
                            label: "행 수 선택",
                            variant: "outlined",
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-white",
                            onClick: getNextPage
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 다음 검색 ")
                            ]),
                            _: 1
                          })
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
      _push(ssrRenderComponent(_component_empSearchModal, {
        modelValue: unref(isDialogOpen),
        "onUpdate:modelValue": ($event) => isRef(isDialogOpen) ? isDialogOpen.value = $event : null,
        empOptions: unref(uniqueEmpCodes),
        onSearchEmp: handleSearchEmp
      }, null, _parent));
      _push(ssrRenderComponent(_component_addAttenModal, {
        modelValue: unref(isAddAttendanceDialogOpen),
        "onUpdate:modelValue": ($event) => isRef(isAddAttendanceDialogOpen) ? isAddAttendanceDialogOpen.value = $event : null,
        depList: unref(addAttdDeptList),
        applyDay: unref(applyDay),
        onSubmitAttendData: handleAddAttendData
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/attendreg/daily.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
