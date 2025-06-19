import { defineComponent, ref, watch, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AppSelect-04d0f8a2.js";
import { n as attenStore, b as VBtn, i as VIcon, V as VCard, f as VCardText } from "../server.mjs";
import "./index-77616e20.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-258f0110.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
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
/* empty css                */const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "annual",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedSearchType = ref("");
    const selectedDeptCode = ref("");
    const selectedEmpCode = ref("");
    ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const selectedMonth = ref("");
    (/* @__PURE__ */ new Date()).getFullYear();
    const monthsProps = ref([]);
    const annual_vacation_mgt_list = ref([]);
    const selectedRows = ref([]);
    const updatedRows = ref({});
    ref({});
    const annualProps = [
      { title: "사원명", key: "empName" },
      { title: "적용년월", key: "applyYearMonth" },
      { title: "연차사용개수", key: "monthlyLeave" },
      { title: "남은연차", key: "remainingHoliday" },
      { title: "마감여부", key: "finalizeStatus" }
    ];
    watch(selectedDeptCode, async () => {
      await fetchEmpList();
    });
    const fetchEmpList = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDeptCode.value);
      emp_list_by_dept.value = Object.values(attenStore().empList).map(
        (item) => {
          return { title: item.empName, value: item.empCode };
        }
      );
    };
    const fetchAnnualVactionMgtList = async () => {
      await attenStore().SEARCH_ANNUAL_VACTION_MGTLIST({
        empCode: selectedEmpCode.value,
        year: selectedMonth.value
      });
      annual_vacation_mgt_list.value = attenStore().annualVacationMgtList;
    };
    const searchAnnual = () => {
      fetchAnnualVactionMgtList();
    };
    const updateStatus = async (title) => {
      console.log("휴가 승인 클릭");
      console.log("selectedRows", selectedRows.value);
      updatedRows.value = selectedRows.value.map((row) => {
        return { ...row };
      });
      console.log("updatedRows", updatedRows.value);
      await attenStore().UPDATE_VACATION_APPLYSTATUS(updatedRows.value).then((res) => console.log(res.data)).catch((e) => console.error(e));
      switch (title) {
        case "휴가 승인":
          console.log("휴가 승인 클릭");
          alert("승인 완료되었습니다.");
          break;
        case "승인 취소":
          console.log("승인 취소 클릭");
          alert("승인취소 완료되었습니다.");
          break;
      }
      selectedRows.value = [];
      fetchAnnualVactionMgtList();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$3;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3",
                    "offset-md": "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6 ml-9",
                          height: "43",
                          width: "200",
                          onClick: searchAnnual
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }, null, _parent5, _scopeId4));
                              _push5(`연차신청 내역조회 `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-search"
                                }),
                                createTextVNode("연차신청 내역조회 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6 ml-9",
                            height: "43",
                            width: "200",
                            onClick: searchAnnual
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }),
                              createTextVNode("연차신청 내역조회 ")
                            ]),
                            _: 1
                          })
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
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("휴가 승인")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-square-key"
                              }, null, _parent5, _scopeId4));
                              _push5(`휴가 승인 `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-square-key"
                                }),
                                createTextVNode("휴가 승인 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6",
                            height: "43",
                            width: "150",
                            onClick: ($event) => updateStatus("휴가 승인")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-square-key"
                              }),
                              createTextVNode("휴가 승인 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("승인 취소")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-square-x"
                              }, null, _parent5, _scopeId4));
                              _push5(`승인 취소 `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-square-x"
                                }),
                                createTextVNode("승인 취소 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6",
                            height: "43",
                            width: "150",
                            onClick: ($event) => updateStatus("승인 취소")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-square-x"
                              }),
                              createTextVNode("승인 취소 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "3",
                      "offset-md": "5"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6 ml-9",
                          height: "43",
                          width: "200",
                          onClick: searchAnnual
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-search"
                            }),
                            createTextVNode("연차신청 내역조회 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("휴가 승인")
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-square-key"
                            }),
                            createTextVNode("휴가 승인 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("승인 취소")
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-square-x"
                            }),
                            createTextVNode("승인 취소 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                          items: unref(dept_list),
                          label: "부서조회",
                          placeholder: "부서조회",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "전체사원조회",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedDeptCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                            items: unref(dept_list),
                            label: "부서조회",
                            placeholder: "부서조회",
                            clearable: "",
                            disabled: unref(selectedSearchType) === "전체사원조회",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                          items: unref(emp_list_by_dept),
                          label: "사원조회",
                          placeholder: "사원조회",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "전체사원조회",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedEmpCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                            items: unref(emp_list_by_dept),
                            label: "사원조회",
                            placeholder: "사원조회",
                            clearable: "",
                            disabled: unref(selectedSearchType) === "전체사원조회",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "년월선택",
                          placeholder: "년월선택",
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedMonth),
                            "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                            items: unref(monthsProps),
                            label: "년월선택",
                            placeholder: "년월선택",
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                          items: unref(dept_list),
                          label: "부서조회",
                          placeholder: "부서조회",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "전체사원조회",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                          items: unref(emp_list_by_dept),
                          label: "사원조회",
                          placeholder: "사원조회",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "전체사원조회",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "년월선택",
                          placeholder: "년월선택",
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_list),
                          "items-per-page": 10,
                          "show-select": "",
                          "return-object": "",
                          modelValue: unref(selectedRows),
                          "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                          "item-value": "empCode"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VDataTable), {
                            headers: annualProps,
                            items: unref(annual_vacation_mgt_list),
                            "items-per-page": 10,
                            "show-select": "",
                            "return-object": "",
                            modelValue: unref(selectedRows),
                            "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                            "item-value": "empCode"
                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(unref(VDataTable), {
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_list),
                          "items-per-page": 10,
                          "show-select": "",
                          "return-object": "",
                          modelValue: unref(selectedRows),
                          "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                          "item-value": "empCode"
                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                    md: "3",
                    "offset-md": "5"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6 ml-9",
                        height: "43",
                        width: "200",
                        onClick: searchAnnual
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-search"
                          }),
                          createTextVNode("연차신청 내역조회 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6",
                        height: "43",
                        width: "150",
                        onClick: ($event) => updateStatus("휴가 승인")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-square-key"
                          }),
                          createTextVNode("휴가 승인 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6",
                        height: "43",
                        width: "150",
                        onClick: ($event) => updateStatus("승인 취소")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-square-x"
                          }),
                          createTextVNode("승인 취소 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedDeptCode),
                        "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                        items: unref(dept_list),
                        label: "부서조회",
                        placeholder: "부서조회",
                        clearable: "",
                        disabled: unref(selectedSearchType) === "전체사원조회",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedEmpCode),
                        "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                        items: unref(emp_list_by_dept),
                        label: "사원조회",
                        placeholder: "사원조회",
                        clearable: "",
                        disabled: unref(selectedSearchType) === "전체사원조회",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedMonth),
                        "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                        items: unref(monthsProps),
                        label: "년월선택",
                        placeholder: "년월선택",
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTable), {
                        headers: annualProps,
                        items: unref(annual_vacation_mgt_list),
                        "items-per-page": 10,
                        "show-select": "",
                        "return-object": "",
                        modelValue: unref(selectedRows),
                        "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                        "item-value": "empCode"
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attndmgmt/annual/annual.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "annualBatch",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedYearMonth = ref("");
    (/* @__PURE__ */ new Date()).getFullYear();
    const monthsProps = ref([]);
    const annual_vacation_mgt_result = ref([]);
    const annualProps = [
      { title: "사원명", key: "empName" },
      { title: "적용년월", key: "applyYearMonth" },
      { title: "연차사용개수", key: "monthlyLeave" },
      { title: "남은연차", key: "remainingHoliday" },
      { title: "마감여부", key: "finalizeStatus" }
    ];
    const createAnnual = async () => {
      await attenStore().BETCH_VACATION_CREATE(selectedYearMonth.value).then((res) => {
        console.log("annualVacationMgtResult", res.data.annualVacationMgtResult);
        annual_vacation_mgt_result.value = res.data.annualVacationMgtResult;
      }).catch((e) => console.error(e));
      alert("연차 사용개수를 조회했습니다.");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$3;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3",
                    "offset-md": "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedYearMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "년월선택",
                          placeholder: "년월선택",
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedYearMonth),
                            "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                            items: unref(monthsProps),
                            label: "년월선택",
                            placeholder: "년월선택",
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
                    md: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6 ml-3",
                          height: "43",
                          width: "230",
                          onClick: createAnnual
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }, null, _parent5, _scopeId4));
                              _push5(`연차사용횟수 조회 `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-search"
                                }),
                                createTextVNode("연차사용횟수 조회 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6 ml-3",
                            height: "43",
                            width: "230",
                            onClick: createAnnual
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }),
                              createTextVNode("연차사용횟수 조회 ")
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
                      md: "3",
                      "offset-md": "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedYearMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "년월선택",
                          placeholder: "년월선택",
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6 ml-3",
                          height: "43",
                          width: "230",
                          onClick: createAnnual
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-search"
                            }),
                            createTextVNode("연차사용횟수 조회 ")
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
            _push2(ssrRenderComponent(VRow, { class: "mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_result),
                          "items-per-page": 10
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VDataTable), {
                            headers: annualProps,
                            items: unref(annual_vacation_mgt_result),
                            "items-per-page": 10
                          }, null, 8, ["items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(unref(VDataTable), {
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_result),
                          "items-per-page": 10
                        }, null, 8, ["items"])
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
                    md: "3",
                    "offset-md": "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedYearMonth),
                        "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                        items: unref(monthsProps),
                        label: "년월선택",
                        placeholder: "년월선택",
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6 ml-3",
                        height: "43",
                        width: "230",
                        onClick: createAnnual
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-search"
                          }),
                          createTextVNode("연차사용횟수 조회 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTable), {
                        headers: annualProps,
                        items: unref(annual_vacation_mgt_result),
                        "items-per-page": 10
                      }, null, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attndmgmt/annual/annualBatch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "annual",
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
      _push(`<!--[--><h1 class="mb-6">휴가 관리</h1>`);
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
                        _push4(` 연차 조회/승인 `);
                      } else {
                        return [
                          createTextVNode(" 연차 조회/승인 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "account-details" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 연차 마감 `);
                      } else {
                        return [
                          createTextVNode(" 연차 마감 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 연차 조회/승인 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "account-details" }, {
                      default: withCtx(() => [
                        createTextVNode(" 연차 마감 ")
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
                      createTextVNode(" 연차 조회/승인 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "account-details" }, {
                    default: withCtx(() => [
                      createTextVNode(" 연차 마감 ")
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
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "account-details" }, {
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
                          createVNode(VWindowItem, { value: "personal-info" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "account-details" }, {
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
                        createVNode(VWindowItem, { value: "personal-info" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "account-details" }, {
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
                      createVNode(VWindowItem, { value: "personal-info" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "account-details" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/attndmgmt/annual.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
