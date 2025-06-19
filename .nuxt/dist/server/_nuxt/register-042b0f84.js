import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { _ as _sfc_main$2 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { b as baseStore } from "./index-77616e20.js";
import { d as dailyLaborStore } from "./index-183b4e75.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, i as VIcon } from "../server.mjs";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "./VCheckboxBtn-aab82c77.js";
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
import "axios";
import "cookie-es";
import "destr";
import "ohash";
import "@antfu/utils";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@casl/vue";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
/* empty css                */const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const isSuccessFunc = ref(false);
    baseStore();
    const DailyLaborStore = dailyLaborStore();
    ref([]);
    const dailyLaborEmpList = ref([]);
    const selectedRows = ref([]);
    const search = ref("");
    const empHeaders = [
      { title: "사번", key: "employeeId", align: "center" },
      { title: "직원명", key: "employeeName", align: "center" },
      { title: "내/외국인", key: "nationality", align: "center" },
      { title: "프로젝트", key: "project", align: "center" },
      { title: "부서", key: "department", align: "center" }
    ];
    const workHeaders = [
      { title: "사번", key: "employeeId", align: "center" },
      { title: "직원명", key: "employeeName", align: "center" },
      { title: "내/외국인", key: "nationality", align: "center" },
      { title: "프로젝트", key: "project", align: "center" },
      { title: "근무날짜", key: "workDate", align: "center" },
      { title: "근무시간", key: "workStartTime", align: "center" }
    ];
    const filteredEmpList = computed(() => {
      return dailyLaborEmpList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    const gotowork = async () => {
      console.log(selectedRows.value);
      const attendDataList = [];
      selectedRows.value.forEach((element) => {
        const attendData = {
          employeeId: element.employeeId,
          employeeName: element.employeeName,
          project: element.project,
          workDate: element.workDate,
          workStartTime: element.workTime,
          workType: element.normalPayType,
          deadlineRequest: "N"
        };
        console.log(element);
        attendDataList.push(attendData);
      });
      await DailyLaborStore.INSERT_ATTEND(attendDataList);
      selectedRows.value = [];
      isSuccessFunc.value = true;
    };
    const leavework = async () => {
      console.log(selectedRows.value);
      const attendDataList = [];
      selectedRows.value.forEach((element) => {
        const attendData = {
          employeeId: element.employeeId,
          workDate: element.workDate,
          workEndTime: element.workTime
        };
        attendDataList.push(attendData);
      });
      console.log(attendDataList);
      await DailyLaborStore.UPDATE_WORK_ATTEND(attendDataList);
      selectedRows.value = [];
      isSuccessFunc.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      const _component_AppDateTimePicker = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6"> 일용근로 근태등록 </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}><div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    density: "compact",
                    placeholder: "검색",
                    "append-inner-icon": "tabler-search",
                    "single-line": "",
                    "hide-details": "",
                    dense: "",
                    outlined: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          density: "compact",
                          placeholder: "검색",
                          "append-inner-icon": "tabler-search",
                          "single-line": "",
                          "hide-details": "",
                          dense: "",
                          outlined: ""
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
              modelValue: unref(selectedRows),
              "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
              headers: empHeaders,
              items: unref(filteredEmpList),
              "items-per-page": 5,
              "footer-props": {
                "items-per-page-options": [5, 10, 20],
                "show-current-page": true,
                "show-first-last-page": true
              },
              "show-select": "",
              "item-value": "employeeId",
              "return-object": ""
            }, {
              "item.deptName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.deptName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.deptName), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode("div", { style: { "inline-size": "10rem" } }, [
                      createVNode(_component_AppTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        density: "compact",
                        placeholder: "검색",
                        "append-inner-icon": "tabler-search",
                        "single-line": "",
                        "hide-details": "",
                        dense: "",
                        outlined: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                modelValue: unref(selectedRows),
                "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                headers: empHeaders,
                items: unref(filteredEmpList),
                "items-per-page": 5,
                "footer-props": {
                  "items-per-page-options": [5, 10, 20],
                  "show-current-page": true,
                  "show-first-last-page": true
                },
                "show-select": "",
                "item-value": "employeeId",
                "return-object": ""
              }, {
                "item.deptName": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.deptName), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><br>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: gotowork }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }, null, _parent4, _scopeId3));
                        _push4(`출근 `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("출근 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, { onClick: leavework }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }, null, _parent4, _scopeId3));
                        _push4(`퇴근 `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("퇴근 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: gotowork }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("출근 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { onClick: leavework }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("퇴근 ")
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
              headers: workHeaders,
              items: unref(selectedRows)
            }, {
              "item.workDate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: item.workDate,
                                "onUpdate:modelValue": ($event) => item.workDate = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: item.workDate,
                                  "onUpdate:modelValue": ($event) => item.workDate = $event,
                                  "show-adjacent-months": "",
                                  "show-decade-navs": "",
                                  "button-only": "",
                                  right: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: item.workDate,
                                "onUpdate:modelValue": ($event) => item.workDate = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: item.workDate,
                              "onUpdate:modelValue": ($event) => item.workDate = $event,
                              "show-adjacent-months": "",
                              "show-decade-navs": "",
                              "button-only": "",
                              right: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "item.workStartTime": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: item.workTime,
                                "onUpdate:modelValue": ($event) => item.workTime = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: "",
                                config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: item.workTime,
                                  "onUpdate:modelValue": ($event) => item.workTime = $event,
                                  "show-adjacent-months": "",
                                  "show-decade-navs": "",
                                  "button-only": "",
                                  right: "",
                                  config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: item.workTime,
                                "onUpdate:modelValue": ($event) => item.workTime = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: "",
                                config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: item.workTime,
                              "onUpdate:modelValue": ($event) => item.workTime = $event,
                              "show-adjacent-months": "",
                              "show-decade-navs": "",
                              "button-only": "",
                              right: "",
                              config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: gotowork }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }),
                        createTextVNode("출근 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, { onClick: leavework }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }),
                        createTextVNode("퇴근 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                headers: workHeaders,
                items: unref(selectedRows)
              }, {
                "item.workDate": withCtx(({ item }) => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: item.workDate,
                            "onUpdate:modelValue": ($event) => item.workDate = $event,
                            "show-adjacent-months": "",
                            "show-decade-navs": "",
                            "button-only": "",
                            right: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "item.workStartTime": withCtx(({ item }) => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: item.workTime,
                            "onUpdate:modelValue": ($event) => item.workTime = $event,
                            "show-adjacent-months": "",
                            "show-decade-navs": "",
                            "button-only": "",
                            right: "",
                            config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSuccessFunc),
        "onUpdate:modelValue": ($event) => isRef(isSuccessFunc) ? isSuccessFunc.value = $event : null,
        location: "top",
        timeout: 3e3,
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: "success",
              title: "success!",
              text: "완료되었습니다."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "success",
                title: "success!",
                text: "완료되었습니다."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailyattend/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
