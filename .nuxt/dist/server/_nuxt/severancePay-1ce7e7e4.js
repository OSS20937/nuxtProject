import { _ as _sfc_main$1 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$2 } from "./DialogCloseBtn-438c6daf.js";
import { _ as _sfc_main$3 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, computed, withCtx, unref, isRef, mergeProps, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { p as paginationMeta, V as VPagination } from "./VPagination-fe9c4821.js";
import "./index-4eaf1d02.js";
import { s as salaryStore } from "./index-cfe0baa7.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, m as VSpacer, l as VDialog, b as VBtn } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
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
/* empty css                */const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "severancePay",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const options = ref({
      page: 1,
      itemsPerPage: 5,
      sortBy: [""],
      sortDesc: [false]
    });
    const isSuccessFunc = ref(false);
    const isaddfaild = ref(false);
    const selectedEmp = ref("");
    const selectedDate = ref("");
    const selectedWork = computed(() => {
      const hireDate = new Date(selectedEmp.value.hireDate);
      const retireDate = new Date(selectedDate.value);
      return Math.abs(
        (retireDate.getTime() - hireDate.getTime()) / (1e3 * 60 * 60 * 24)
      );
    });
    const selectedDivision = ref("");
    const selectedRows = ref([]);
    const isDialogVisible = ref(false);
    const severanceList = ref([]);
    const allEmpList = ref([]);
    ref([]);
    const dayData = ref([]);
    const division = [{ title: "퇴직금", value: "퇴직금" }];
    const headers = [
      { title: "신청일", key: "applyDate", align: "center" },
      { title: "구분", key: "severanceType", align: "center" },
      { title: "사원명", key: "empName", align: "center" },
      { title: "근속기간", key: "workDays", align: "center" },
      { title: "입사일", key: "hireDate", align: "center" },
      { title: "퇴사일", key: "retireDate", align: "center" },
      { title: "차인지금액", key: "realSeverancePay", align: "center" }
    ];
    const fetchData = async () => {
      const date = /* @__PURE__ */ new Date();
      dayData.value = {
        firstDay: `${date.getFullYear()}-1-1`,
        today: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      };
      await salaryStore().FIND_SEVERANCE_PAY(dayData.value);
      severanceList.value = salaryStore().severanceList;
      console.log(dayData.value);
      console.log(severanceList.value);
    };
    const addSeverancePay = async () => {
      const addSeverancePayData = {
        workDays: selectedWork.value,
        hireDate: new Date(selectedEmp.value.hireDate),
        retireDate: new Date(selectedDate.value),
        empCode: selectedEmp.value.empCode,
        severanceType: selectedDivision.value,
        applyDate: new Date(dayData.value.today),
        firstDay: new Date(dayData.value.firstDay),
        today: new Date(dayData.value.today)
      };
      console.log(addSeverancePayData);
      await salaryStore().ADD_SEVERANCE_PAY(addSeverancePayData);
      await fetchData();
      isDialogVisible.value = false;
      if (selectedWork.value < 365)
        isaddfaild.value = true;
      else
        isSuccessFunc.value = true;
    };
    const deletebtn = async () => {
      await salaryStore().DELETE_SEVERANCE(selectedRows.value[0]);
      await fetchData();
      isSuccessFunc.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$1;
      const _component_DialogCloseBtn = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      _push(`<!--[--><h1 class="mb-6">퇴직금 등록</h1>`);
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
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: unref(isDialogVisible),
                    "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
                    "max-width": "600"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 퇴직금 등록 `);
                            } else {
                              return [
                                createTextVNode(" 퇴직금 등록 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                            default: withCtx(() => [
                              createTextVNode(" 퇴직금 등록 ")
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                          onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCard, { title: "퇴직금 등록" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppSelect, {
                                                  modelValue: unref(selectedEmp),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                  items: unref(allEmpList),
                                                  label: "직원명"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: unref(selectedEmp),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                    items: unref(allEmpList),
                                                    label: "직원명"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppTextField, {
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  label: "퇴직일",
                                                  type: "date"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: unref(selectedDate),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                    label: "퇴직일",
                                                    type: "date"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppTextField, {
                                                  modelValue: unref(selectedWork),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                  label: "재직일수",
                                                  disabled: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: unref(selectedWork),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                    label: "재직일수",
                                                    disabled: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppSelect, {
                                                  modelValue: unref(selectedDivision),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                  items: division,
                                                  label: "구분"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: unref(selectedDivision),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                    items: division,
                                                    label: "구분"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: unref(selectedEmp),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                  items: unref(allEmpList),
                                                  label: "직원명"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  label: "퇴직일",
                                                  type: "date"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: unref(selectedWork),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                  label: "재직일수",
                                                  disabled: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: unref(selectedDivision),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                  items: division,
                                                  label: "구분"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: unref(selectedEmp),
                                                "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                items: unref(allEmpList),
                                                label: "직원명"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(selectedDate),
                                                "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                label: "퇴직일",
                                                type: "date"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(selectedWork),
                                                "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                label: "재직일수",
                                                disabled: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: unref(selectedDivision),
                                                "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                items: division,
                                                label: "구분"
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, { onClick: addSeverancePay }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` 등록 `);
                                        } else {
                                          return [
                                            createTextVNode(" 등록 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, { onClick: addSeverancePay }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 등록 ")
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
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(selectedEmp),
                                              "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                              items: unref(allEmpList),
                                              label: "직원명"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(selectedDate),
                                              "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                              label: "퇴직일",
                                              type: "date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(selectedWork),
                                              "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                              label: "재직일수",
                                              disabled: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(selectedDivision),
                                              "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                              items: division,
                                              label: "구분"
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
                                createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, { onClick: addSeverancePay }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 등록 ")
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
                          createVNode(_component_DialogCloseBtn, {
                            onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                          }, null, 8, ["onClick"]),
                          createVNode(VCard, { title: "퇴직금 등록" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedEmp),
                                            "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                            items: unref(allEmpList),
                                            label: "직원명"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(selectedDate),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                            label: "퇴직일",
                                            type: "date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(selectedWork),
                                            "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                            label: "재직일수",
                                            disabled: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedDivision),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                            items: division,
                                            label: "구분"
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
                              createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { onClick: addSeverancePay }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 등록 ")
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
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "tabler-minus",
                    onClick: deletebtn
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 퇴직금 삭제 `);
                      } else {
                        return [
                          createTextVNode(" 퇴직금 삭제 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
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
                      createVNode(VDialog, {
                        modelValue: unref(isDialogVisible),
                        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
                        "max-width": "600"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                            default: withCtx(() => [
                              createTextVNode(" 퇴직금 등록 ")
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_DialogCloseBtn, {
                            onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                          }, null, 8, ["onClick"]),
                          createVNode(VCard, { title: "퇴직금 등록" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedEmp),
                                            "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                            items: unref(allEmpList),
                                            label: "직원명"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(selectedDate),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                            label: "퇴직일",
                                            type: "date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(selectedWork),
                                            "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                            label: "재직일수",
                                            disabled: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedDivision),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                            items: division,
                                            label: "구분"
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
                              createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { onClick: addSeverancePay }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 등록 ")
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
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, {
                        "prepend-icon": "tabler-minus",
                        onClick: deletebtn
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 퇴직금 삭제 ")
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
              modelValue: unref(selectedRows),
              "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
              headers,
              items: unref(severanceList),
              "items-per-page": unref(options).itemsPerPage,
              page: unref(options).page,
              options: unref(options),
              "item-value": "empCode",
              "show-select": "",
              "singel-select": ""
            }, {
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"${_scopeId3}><p class="text-sm text-disabled mb-0"${_scopeId3}>${ssrInterpolate(unref(paginationMeta)(
                          { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                          unref(severanceList).length
                        ))}</p>`);
                        _push4(ssrRenderComponent(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                            createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                              { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                              unref(severanceList).length
                            )), 1),
                            createVNode(VPagination, {
                              modelValue: unref(options).page,
                              "onUpdate:modelValue": ($event) => unref(options).page = $event,
                              "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                              length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
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
                          createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                            { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                            unref(severanceList).length
                          )), 1),
                          createVNode(VPagination, {
                            modelValue: unref(options).page,
                            "onUpdate:modelValue": ($event) => unref(options).page = $event,
                            "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                            length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
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
            _push2(ssrRenderComponent(VSnackbar, {
              modelValue: unref(isaddfaild),
              "onUpdate:modelValue": ($event) => isRef(isaddfaild) ? isaddfaild.value = $event : null,
              location: "top",
              timeout: 3e3,
              color: "warning"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAlert, {
                    density: "compact",
                    type: "warning",
                    title: "warning!",
                    text: "근속일수가 1년이 안됩니다."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAlert, {
                      density: "compact",
                      type: "warning",
                      title: "warning!",
                      text: "근속일수가 1년이 안됩니다."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSnackbar, {
              modelValue: unref(isSuccessFunc),
              "onUpdate:modelValue": ($event) => isRef(isSuccessFunc) ? isSuccessFunc.value = $event : null,
              location: "top",
              timeout: 3e3,
              color: "success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAlert, {
                    density: "compact",
                    type: "success",
                    title: "success!",
                    text: "완료되었습니다."
                  }, null, _parent3, _scopeId2));
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
                    createVNode(VDialog, {
                      modelValue: unref(isDialogVisible),
                      "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
                      "max-width": "600"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                          default: withCtx(() => [
                            createTextVNode(" 퇴직금 등록 ")
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_DialogCloseBtn, {
                          onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                        }, null, 8, ["onClick"]),
                        createVNode(VCard, { title: "퇴직금 등록" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(selectedEmp),
                                          "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                          items: unref(allEmpList),
                                          label: "직원명"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(selectedDate),
                                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                          label: "퇴직일",
                                          type: "date"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(selectedWork),
                                          "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                          label: "재직일수",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(selectedDivision),
                                          "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                          items: division,
                                          label: "구분"
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
                            createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { onClick: addSeverancePay }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 등록 ")
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
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      "prepend-icon": "tabler-minus",
                      onClick: deletebtn
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 퇴직금 삭제 ")
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
                items: unref(severanceList),
                "items-per-page": unref(options).itemsPerPage,
                page: unref(options).page,
                options: unref(options),
                "item-value": "empCode",
                "show-select": "",
                "singel-select": ""
              }, {
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                        createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                          { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                          unref(severanceList).length
                        )), 1),
                        createVNode(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items", "items-per-page", "page", "options"]),
              createVNode(VSnackbar, {
                modelValue: unref(isaddfaild),
                "onUpdate:modelValue": ($event) => isRef(isaddfaild) ? isaddfaild.value = $event : null,
                location: "top",
                timeout: 3e3,
                color: "warning"
              }, {
                default: withCtx(() => [
                  createVNode(VAlert, {
                    density: "compact",
                    type: "warning",
                    title: "warning!",
                    text: "근속일수가 1년이 안됩니다."
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VSnackbar, {
                modelValue: unref(isSuccessFunc),
                "onUpdate:modelValue": ($event) => isRef(isSuccessFunc) ? isSuccessFunc.value = $event : null,
                location: "top",
                timeout: 3e3,
                color: "success"
              }, {
                default: withCtx(() => [
                  createVNode(VAlert, {
                    density: "compact",
                    type: "success",
                    title: "success!",
                    text: "완료되었습니다."
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/salreg/severancePay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
