import { defineComponent, ref, watch, computed, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext, mergeProps, toDisplayString, withModifiers } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$3 } from "./attenModal-31243f55.js";
import { n as attenStore, b as VBtn, i as VIcon, V as VCard, f as VCardText } from "../server.mjs";
import "./index-77616e20.js";
import axios from "axios";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { _ as _sfc_main$5 } from "./AppDateTimePicker-c59f48ad.js";
import { _ as _sfc_main$6 } from "./AppTextarea-aa5ab071.js";
import { V as VForm } from "./VForm-c404d2e6.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-258f0110.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
import "./DialogCloseBtn-438c6daf.js";
import "./AppTextField-dee429aa.js";
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
/* empty css                */import "vue-flatpickr-component";
import "./VTextarea-ec6cbc85.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "leaveReqListTap",
  __ssrInlineRender: true,
  setup(__props) {
    const rest_attd_list = ref([]);
    const selectedYear = ref("");
    const selectedMonth = ref("");
    const month_list = ref([]);
    const year_list = ref([]);
    const selectedDeptCode = ref("");
    const selectedEmpCode = ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const isDialogVisible = ref(false);
    const row = ref({});
    const modalStatus = ref("");
    const RestAttdProps = [
      { title: "휴가유형", key: "restTypeName", width: 120 },
      { title: "신청일자", key: "requestDate", width: 130 },
      { title: "시작일", key: "startDate", width: 130 },
      { title: "종료일", key: "endDate", width: 130 },
      { title: "사유", key: "cause", width: 100 },
      { title: "시작시간", key: "startTime", width: 130 },
      { title: "종료시간", key: "endTime", width: 130 },
      { title: "일수", key: "numberOfDays", width: 80 },
      { title: "승인상태", key: "applovalStatus", width: 120 }
    ];
    watch(selectedDeptCode, async () => {
      await fetchEmpList();
    });
    const fetchEmpList = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDeptCode.value);
      emp_list_by_dept.value = Object.values(attenStore().empList).map((item) => {
        return { title: item.empName, value: item.empCode };
      });
    };
    const yearMonth = computed(() => {
      const month = Number.parseInt(selectedMonth.value) < 10 ? `0${selectedMonth.value}` : selectedMonth.value;
      return `${selectedYear.value}${month}`;
    });
    const fetchRestAttdList = async () => {
      await attenStore().FETCH_REST_ATTD_BY_ANNUAL_VACTION({ empCode: selectedEmpCode.value, yearMonth: yearMonth.value });
      rest_attd_list.value = attenStore().restAttdList;
      console.log(attenStore().restAttdList);
    };
    const onClickRow = (event, item) => {
      modalStatus.value = "leave";
      isDialogVisible.value = !isDialogVisible.value;
      console.log("isDialogVisible.value", isDialogVisible.value);
      console.log("item", item);
      row.value = item.item;
    };
    const closeModal = () => {
      isDialogVisible.value = false;
    };
    const updateData = ({ newRow }) => {
      console.log("newRow부모", newRow);
      console.log("수정api전달하자");
      if (newRow.restTypeName === "") {
        alert("휴가 유형을 선택해주세요.");
      } else {
        axios.put("http://localhost:8282/hr/attendance/updateVacation", newRow).then((res) => {
          console.log(res.data);
          alert("수정이 완료되었습니다. ");
          fetchRestAttdList();
          isDialogVisible.value = !isDialogVisible.value;
        }).catch((e) => {
          console.error(e);
          alert("다시 시도해 주세요. ");
          isDialogVisible.value = !isDialogVisible.value;
        });
      }
    };
    const deleteData = (delRow) => {
      console.log("delRow부모", delRow);
      axios.delete("http://localhost:8282/hr/attendance/removeRestAttd", { params: { restAttdCode: delRow } }).then((res) => {
        console.log(res.data);
        alert("삭제가 완료되었습니다. ");
        fetchRestAttdList();
        isDialogVisible.value = !isDialogVisible.value;
      }).catch((e) => {
        console.error(e);
        alert("다시 시도해 주세요. ");
        isDialogVisible.value = !isDialogVisible.value;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VContainer, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedYear),
                          "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                          label: "신청연도조회",
                          placeholder: "신청연도",
                          items: unref(year_list),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedYear),
                            "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                            label: "신청연도조회",
                            placeholder: "신청연도",
                            items: unref(year_list),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                          label: "신청월조회",
                          placeholder: "신청월",
                          items: unref(month_list),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedMonth),
                            "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                            label: "신청월조회",
                            placeholder: "신청월",
                            items: unref(month_list),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                          label: "부서조회",
                          placeholder: "부서조회",
                          items: unref(dept_list),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedDeptCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                            label: "부서조회",
                            placeholder: "부서조회",
                            items: unref(dept_list),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                          label: "사원조회",
                          placeholder: "사원조회",
                          items: unref(emp_list_by_dept),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedEmpCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                            label: "사원조회",
                            placeholder: "사원조회",
                            items: unref(emp_list_by_dept),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2",
                    "offset-md": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6 ml-5",
                          height: "43",
                          width: "152",
                          onClick: fetchRestAttdList
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }, null, _parent5, _scopeId4));
                              _push5(`내역조회 `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-search"
                                }),
                                createTextVNode("내역조회 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6 ml-5",
                            height: "43",
                            width: "152",
                            onClick: fetchRestAttdList
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }),
                              createTextVNode("내역조회 ")
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
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedYear),
                          "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                          label: "신청연도조회",
                          placeholder: "신청연도",
                          items: unref(year_list),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                          label: "신청월조회",
                          placeholder: "신청월",
                          items: unref(month_list),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                          label: "부서조회",
                          placeholder: "부서조회",
                          items: unref(dept_list),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                          label: "사원조회",
                          placeholder: "사원조회",
                          items: unref(emp_list_by_dept),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      "offset-md": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6 ml-5",
                          height: "43",
                          width: "152",
                          onClick: fetchRestAttdList
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-search"
                            }),
                            createTextVNode("내역조회 ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedYear),
                        "onUpdate:modelValue": ($event) => isRef(selectedYear) ? selectedYear.value = $event : null,
                        label: "신청연도조회",
                        placeholder: "신청연도",
                        items: unref(year_list),
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedMonth),
                        "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                        label: "신청월조회",
                        placeholder: "신청월",
                        items: unref(month_list),
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedDeptCode),
                        "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                        label: "부서조회",
                        placeholder: "부서조회",
                        items: unref(dept_list),
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedEmpCode),
                        "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                        label: "사원조회",
                        placeholder: "사원조회",
                        items: unref(emp_list_by_dept),
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2",
                    "offset-md": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6 ml-5",
                        height: "43",
                        width: "152",
                        onClick: fetchRestAttdList
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-search"
                          }),
                          createTextVNode("내역조회 ")
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
      _push(ssrRenderComponent(unref(VDataTable), {
        headers: RestAttdProps,
        items: unref(rest_attd_list),
        "items-per-page": 10,
        "on-click:row": onClickRow
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        onCloseModal: closeModal,
        onUpdateData: updateData,
        onDeleteData: deleteData,
        row: unref(row),
        modalStatus: unref(modalStatus)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attendreg/leave/leaveReqListTap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "leaveReqTap",
  __ssrInlineRender: true,
  setup(__props) {
    const reqDate = ref("");
    const start = ref("");
    const startDate = ref("");
    const startTime = ref("");
    const end = ref("");
    const endDate = ref("");
    const endTime = ref("");
    const selectedRest = ref("");
    const selectedRestCode = ref("");
    const selectedRestName = ref("");
    const selectedDeptCode = ref("");
    const selectedEmpCode = ref("");
    const cause = ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const today = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    const restProps = [
      { text: "공가", value: "ASC004" },
      { text: "연차", value: "ASC005" },
      { text: "오전반차", value: "ASC006" },
      { text: "오후반차", value: "ASC007" }
    ];
    const itemProps = (item) => {
      return {
        title: item.text,
        value: item.value
      };
    };
    watch(selectedRest, (newValue, oldValue) => {
      const selectedItem = restProps.find((item) => item.value === newValue);
      if (selectedItem) {
        selectedRestName.value = selectedItem.text;
        selectedRestCode.value = selectedItem.value;
        console.log("Selected Title:", selectedRestName.value);
        console.log("Selected value:", selectedRestCode.value);
      }
    });
    watch(start, (newDateTime) => {
      updateDateTime(newDateTime, startDate, startTime);
      console.log("startDate:", startDate.value);
      console.log("startTime:", startTime.value);
    });
    watch(end, (newDateTime) => {
      updateDateTime(newDateTime, endDate, endTime);
      console.log("endDate:", endDate.value);
      console.log("endTime:", endTime.value);
    });
    const updateDateTime = (newDateTime, newDate, newTime) => {
      const [date, time] = newDateTime.split(" ");
      const [year, month, day] = date.split("-");
      newDate.value = `${year}-${month}-${day}`;
      newTime.value = time;
    };
    const numberOfDays = computed(() => {
      if (endDate.value && startDate.value) {
        const diffDate = new Date(endDate.value).getTime() - new Date(startDate.value).getTime();
        const dayDiff = diffDate / (1e3 * 60 * 60 * 24) + 1;
        if (endDate.value === startDate.value)
          return 0.5;
        else
          return dayDiff;
      } else {
        return 0;
      }
    });
    watch(selectedDeptCode, async () => {
      await fetchEmpList();
    });
    const fetchEmpList = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDeptCode.value);
      emp_list_by_dept.value = Object.values(attenStore().empList).map((item) => {
        return { title: item.empName, value: item.empCode };
      });
    };
    const registerRest = async () => {
      if (reqDate.value === "" || selectedEmpCode.value === "" || selectedRestCode.value === "" || startTime.value === "" || endTime.value === "" || cause.value === "") {
        alert("모든 항목을 선택해주세요.");
      } else {
        attenStore().INSERT_REQUEST_REST_ATTD({
          empCode: selectedEmpCode.value,
          restTypeCode: selectedRestCode.value,
          restTypeName: selectedRestName.value,
          requestDate: reqDate.value,
          startDate: startDate.value,
          endDate: endDate.value,
          cause: cause.value,
          applovalStatus: "N",
          startTime: startTime.value,
          endTime: endTime.value,
          numberOfDays: numberOfDays.value
        }).then((res) => {
          console.log("[휴가등록 성공]", res.data);
          alert("휴가신청이 등록되었습니다. ");
        }).catch((e) => {
          console.error(e);
          alert("다시 시도해 주세요.");
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$5;
      const _component_AppSelect = _sfc_main$4;
      const _component_AppTextarea = _sfc_main$6;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VForm, { onSubmit: registerRest }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: unref(reqDate),
                                "onUpdate:modelValue": ($event) => isRef(reqDate) ? reqDate.value = $event : null,
                                label: "요청날짜",
                                placeholder: unref(today)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: unref(reqDate),
                                  "onUpdate:modelValue": ($event) => isRef(reqDate) ? reqDate.value = $event : null,
                                  label: "요청날짜",
                                  placeholder: unref(today)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppSelect, {
                                modelValue: unref(selectedRest),
                                "onUpdate:modelValue": ($event) => isRef(selectedRest) ? selectedRest.value = $event : null,
                                label: "휴가유형",
                                placeholder: "휴가유형",
                                "item-props": itemProps,
                                items: restProps,
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedRest),
                                  "onUpdate:modelValue": ($event) => isRef(selectedRest) ? selectedRest.value = $event : null,
                                  label: "휴가유형",
                                  placeholder: "휴가유형",
                                  "item-props": itemProps,
                                  items: restProps,
                                  clearable: "",
                                  "clear-icon": "tabler-x"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppSelect, {
                                modelValue: unref(selectedDeptCode),
                                "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                                label: "부서조회",
                                placeholder: "부서조회",
                                items: unref(dept_list),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedDeptCode),
                                  "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                                  label: "부서조회",
                                  placeholder: "부서조회",
                                  items: unref(dept_list),
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
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppSelect, {
                                modelValue: unref(selectedEmpCode),
                                "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                                label: "사원조회",
                                placeholder: "사원조회",
                                items: unref(emp_list_by_dept),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedEmpCode),
                                  "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                                  label: "사원조회",
                                  placeholder: "사원조회",
                                  items: unref(emp_list_by_dept),
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
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: unref(start),
                                "onUpdate:modelValue": ($event) => isRef(start) ? start.value = $event : null,
                                label: "시작일/시작시간",
                                placeholder: "시작일/시작시간",
                                config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: unref(start),
                                  "onUpdate:modelValue": ($event) => isRef(start) ? start.value = $event : null,
                                  label: "시작일/시작시간",
                                  placeholder: "시작일/시작시간",
                                  config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: unref(end),
                                "onUpdate:modelValue": ($event) => isRef(end) ? end.value = $event : null,
                                label: "종료일/종료시간",
                                placeholder: "종료일/종료시간",
                                config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: unref(end),
                                  "onUpdate:modelValue": ($event) => isRef(end) ? end.value = $event : null,
                                  label: "종료일/종료시간",
                                  placeholder: "종료일/종료시간",
                                  config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(reqDate),
                                "onUpdate:modelValue": ($event) => isRef(reqDate) ? reqDate.value = $event : null,
                                label: "요청날짜",
                                placeholder: unref(today)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedRest),
                                "onUpdate:modelValue": ($event) => isRef(selectedRest) ? selectedRest.value = $event : null,
                                label: "휴가유형",
                                placeholder: "휴가유형",
                                "item-props": itemProps,
                                items: restProps,
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedDeptCode),
                                "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                                label: "부서조회",
                                placeholder: "부서조회",
                                items: unref(dept_list),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedEmpCode),
                                "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                                label: "사원조회",
                                placeholder: "사원조회",
                                items: unref(emp_list_by_dept),
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(start),
                                "onUpdate:modelValue": ($event) => isRef(start) ? start.value = $event : null,
                                label: "시작일/시작시간",
                                placeholder: "시작일/시작시간",
                                config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(end),
                                "onUpdate:modelValue": ($event) => isRef(end) ? end.value = $event : null,
                                label: "종료일/종료시간",
                                placeholder: "종료일/종료시간",
                                config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppTextarea, {
                                modelValue: unref(cause),
                                "onUpdate:modelValue": ($event) => isRef(cause) ? cause.value = $event : null,
                                label: "신청사유",
                                placeholder: "신청사유를 작성해주세요."
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppTextarea, {
                                  modelValue: unref(cause),
                                  "onUpdate:modelValue": ($event) => isRef(cause) ? cause.value = $event : null,
                                  label: "신청사유",
                                  placeholder: "신청사유를 작성해주세요."
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextarea, {
                                modelValue: unref(cause),
                                "onUpdate:modelValue": ($event) => isRef(cause) ? cause.value = $event : null,
                                label: "신청사유",
                                placeholder: "신청사유를 작성해주세요."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2",
                          "offset-md": "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="mt-5 ml-15"${_scopeId4}> 사용일수: ${ssrInterpolate(unref(numberOfDays))}</p>`);
                            } else {
                              return [
                                createVNode("p", { class: "mt-5 ml-15" }, " 사용일수: " + toDisplayString(unref(numberOfDays)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2",
                          "offset-md": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                type: "submit",
                                class: "mt-3",
                                width: "155"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      icon: "tabler-checkbox"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`신청 `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "tabler-checkbox"
                                      }),
                                      createTextVNode("신청 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  type: "submit",
                                  class: "mt-3",
                                  width: "155"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "tabler-checkbox"
                                    }),
                                    createTextVNode("신청 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2",
                          "offset-md": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                type: "reset",
                                class: "mt-3",
                                width: "155"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      icon: "tabler-zoom-reset"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`재작성 `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "tabler-zoom-reset"
                                      }),
                                      createTextVNode("재작성 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  type: "reset",
                                  class: "mt-3",
                                  width: "155"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "tabler-zoom-reset"
                                    }),
                                    createTextVNode("재작성 ")
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
                          createVNode(VCol, {
                            cols: "12",
                            md: "2",
                            "offset-md": "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "mt-5 ml-15" }, " 사용일수: " + toDisplayString(unref(numberOfDays)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2",
                            "offset-md": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                type: "submit",
                                class: "mt-3",
                                width: "155"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "tabler-checkbox"
                                  }),
                                  createTextVNode("신청 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2",
                            "offset-md": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                type: "reset",
                                class: "mt-3",
                                width: "155"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "tabler-zoom-reset"
                                  }),
                                  createTextVNode("재작성 ")
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(reqDate),
                              "onUpdate:modelValue": ($event) => isRef(reqDate) ? reqDate.value = $event : null,
                              label: "요청날짜",
                              placeholder: unref(today)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppSelect, {
                              modelValue: unref(selectedRest),
                              "onUpdate:modelValue": ($event) => isRef(selectedRest) ? selectedRest.value = $event : null,
                              label: "휴가유형",
                              placeholder: "휴가유형",
                              "item-props": itemProps,
                              items: restProps,
                              clearable: "",
                              "clear-icon": "tabler-x"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppSelect, {
                              modelValue: unref(selectedDeptCode),
                              "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                              label: "부서조회",
                              placeholder: "부서조회",
                              items: unref(dept_list),
                              clearable: "",
                              "clear-icon": "tabler-x"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppSelect, {
                              modelValue: unref(selectedEmpCode),
                              "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                              label: "사원조회",
                              placeholder: "사원조회",
                              items: unref(emp_list_by_dept),
                              clearable: "",
                              "clear-icon": "tabler-x"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(start),
                              "onUpdate:modelValue": ($event) => isRef(start) ? start.value = $event : null,
                              label: "시작일/시작시간",
                              placeholder: "시작일/시작시간",
                              config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(end),
                              "onUpdate:modelValue": ($event) => isRef(end) ? end.value = $event : null,
                              label: "종료일/종료시간",
                              placeholder: "종료일/종료시간",
                              config: { enableTime: true, dateFormat: "Y-m-d Hi" }
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
                            createVNode(_component_AppTextarea, {
                              modelValue: unref(cause),
                              "onUpdate:modelValue": ($event) => isRef(cause) ? cause.value = $event : null,
                              label: "신청사유",
                              placeholder: "신청사유를 작성해주세요."
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
                          md: "2",
                          "offset-md": "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "mt-5 ml-15" }, " 사용일수: " + toDisplayString(unref(numberOfDays)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2",
                          "offset-md": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              type: "submit",
                              class: "mt-3",
                              width: "155"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-checkbox"
                                }),
                                createTextVNode("신청 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2",
                          "offset-md": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              type: "reset",
                              class: "mt-3",
                              width: "155"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-zoom-reset"
                                }),
                                createTextVNode("재작성 ")
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
              createVNode(VForm, {
                onSubmit: withModifiers(registerRest, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(reqDate),
                            "onUpdate:modelValue": ($event) => isRef(reqDate) ? reqDate.value = $event : null,
                            label: "요청날짜",
                            placeholder: unref(today)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedRest),
                            "onUpdate:modelValue": ($event) => isRef(selectedRest) ? selectedRest.value = $event : null,
                            label: "휴가유형",
                            placeholder: "휴가유형",
                            "item-props": itemProps,
                            items: restProps,
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedDeptCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                            label: "부서조회",
                            placeholder: "부서조회",
                            items: unref(dept_list),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedEmpCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                            label: "사원조회",
                            placeholder: "사원조회",
                            items: unref(emp_list_by_dept),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(start),
                            "onUpdate:modelValue": ($event) => isRef(start) ? start.value = $event : null,
                            label: "시작일/시작시간",
                            placeholder: "시작일/시작시간",
                            config: { enableTime: true, dateFormat: "Y-m-d Hi" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(end),
                            "onUpdate:modelValue": ($event) => isRef(end) ? end.value = $event : null,
                            label: "종료일/종료시간",
                            placeholder: "종료일/종료시간",
                            config: { enableTime: true, dateFormat: "Y-m-d Hi" }
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
                          createVNode(_component_AppTextarea, {
                            modelValue: unref(cause),
                            "onUpdate:modelValue": ($event) => isRef(cause) ? cause.value = $event : null,
                            label: "신청사유",
                            placeholder: "신청사유를 작성해주세요."
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
                        md: "2",
                        "offset-md": "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "mt-5 ml-15" }, " 사용일수: " + toDisplayString(unref(numberOfDays)), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2",
                        "offset-md": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            type: "submit",
                            class: "mt-3",
                            width: "155"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-checkbox"
                              }),
                              createTextVNode("신청 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2",
                        "offset-md": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            type: "reset",
                            class: "mt-3",
                            width: "155"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-zoom-reset"
                              }),
                              createTextVNode("재작성 ")
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
              }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attendreg/leave/leaveReqTap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "leave",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">휴가 신청</h1>`);
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
                        _push4(` 휴가 신청서 작성 `);
                      } else {
                        return [
                          createTextVNode(" 휴가 신청서 작성 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "account-details" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 휴가 신청내역 `);
                      } else {
                        return [
                          createTextVNode(" 휴가 신청내역 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 휴가 신청서 작성 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "account-details" }, {
                      default: withCtx(() => [
                        createTextVNode(" 휴가 신청내역 ")
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
                      createTextVNode(" 휴가 신청서 작성 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "account-details" }, {
                    default: withCtx(() => [
                      createTextVNode(" 휴가 신청내역 ")
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
                        _push4(ssrRenderComponent(VWindowItem, { value: "personal-info" }, {
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
                        _push4(ssrRenderComponent(VWindowItem, { value: "account-details" }, {
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
                      } else {
                        return [
                          createVNode(VWindowItem, { value: "personal-info" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "account-details" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
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
                        createVNode(VWindowItem, { value: "personal-info" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "account-details" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
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
                      createVNode(VWindowItem, { value: "personal-info" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "account-details" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/attendreg/leave.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
