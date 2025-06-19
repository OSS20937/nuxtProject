import { _ as _sfc_main$1 } from "./AppDateTimePicker-c59f48ad.js";
import { _ as _sfc_main$2 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { c as conExpStore } from "./index-ba110ae4.js";
import { u as useEmpStore } from "./emp-413922b9.js";
import { useRouter } from "vue-router";
import { V as VCard, b as VBtn, g as VCardTitle, f as VCardText } from "../server.mjs";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "vue-flatpickr-component";
import "./VCheckboxBtn-aab82c77.js";
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
/* empty css                */import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "approval",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const store = conExpStore();
    const conExpenseList = ref([]);
    const selectedItems = ref([]);
    const startDate = ref("");
    const endDate = ref("");
    const searchEmpCode = ref("");
    ref("");
    const headers = [
      { title: "신청번호", key: "reqNum" },
      { title: "신청자", key: "empName" },
      { title: "신청일자", key: "reqDate" },
      { title: "경조구분", key: "conType" },
      { title: "관계", key: "rel" },
      { title: "경조일(시작)", key: "conTermStart" },
      { title: "경조일(종료)", key: "conTermEnd" },
      { title: "금액", key: "conAmt" },
      { title: "상태", key: "approvalStatus" }
    ];
    const searchRequest = async () => {
      const reqData = {
        startDate: startDate.value,
        endDate: endDate.value,
        searchEmpCode: searchEmpCode.value.trim() !== "" ? searchEmpCode.value : "undefined"
      };
      await store.FETCH_REQ_DETAIL(reqData);
      conExpenseList.value = store.conExpenseList;
    };
    const approveRequests = async () => {
      await store.APPROVE_CONEXP(selectedItems.value);
      await searchRequest();
    };
    const rejectRequests = async () => {
      await store.REJECT_CONEXP(selectedItems.value);
      await searchRequest();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$1;
      const _component_AppTextField = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6">경조비 신청승인</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="mt-5 ml-3"${_scopeId3}>신청일자</span>`);
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: startDate.value,
                                "onUpdate:modelValue": ($event) => startDate.value = $event,
                                "append-inner-icon": "tabler-calendar"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: startDate.value,
                                  "onUpdate:modelValue": ($event) => startDate.value = $event,
                                  "append-inner-icon": "tabler-calendar"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="mt-5"${_scopeId3}>~</span>`);
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: endDate.value,
                                "onUpdate:modelValue": ($event) => endDate.value = $event,
                                "append-inner-icon": "tabler-calendar"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: endDate.value,
                                  "onUpdate:modelValue": ($event) => endDate.value = $event,
                                  "append-inner-icon": "tabler-calendar"
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
                              _push5(ssrRenderComponent(_component_AppTextField, {
                                modelValue: searchEmpCode.value,
                                "onUpdate:modelValue": ($event) => searchEmpCode.value = $event,
                                "append-inner-icon": "tabler-search",
                                placeholder: "사원번호"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppTextField, {
                                  modelValue: searchEmpCode.value,
                                  "onUpdate:modelValue": ($event) => searchEmpCode.value = $event,
                                  "append-inner-icon": "tabler-search",
                                  placeholder: "사원번호"
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
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                onClick: searchRequest
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`검색`);
                                  } else {
                                    return [
                                      createTextVNode("검색")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: searchRequest
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("검색")
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
                          createVNode("span", { class: "mt-5 ml-3" }, "신청일자"),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: startDate.value,
                                "onUpdate:modelValue": ($event) => startDate.value = $event,
                                "append-inner-icon": "tabler-calendar"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "mt-5" }, "~"),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: endDate.value,
                                "onUpdate:modelValue": ($event) => endDate.value = $event,
                                "append-inner-icon": "tabler-calendar"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: searchEmpCode.value,
                                "onUpdate:modelValue": ($event) => searchEmpCode.value = $event,
                                "append-inner-icon": "tabler-search",
                                placeholder: "사원번호"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: searchRequest
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("검색")
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
                        createVNode("span", { class: "mt-5 ml-3" }, "신청일자"),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: startDate.value,
                              "onUpdate:modelValue": ($event) => startDate.value = $event,
                              "append-inner-icon": "tabler-calendar"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "mt-5" }, "~"),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: endDate.value,
                              "onUpdate:modelValue": ($event) => endDate.value = $event,
                              "append-inner-icon": "tabler-calendar"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppTextField, {
                              modelValue: searchEmpCode.value,
                              "onUpdate:modelValue": ($event) => searchEmpCode.value = $event,
                              "append-inner-icon": "tabler-search",
                              placeholder: "사원번호"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: searchRequest
                            }, {
                              default: withCtx(() => [
                                createTextVNode("검색")
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
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`✨ 신청 승인 대기 목록`);
                } else {
                  return [
                    createTextVNode("✨ 신청 승인 대기 목록")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    modelValue: selectedItems.value,
                    "onUpdate:modelValue": ($event) => selectedItems.value = $event,
                    headers,
                    items: conExpenseList.value,
                    "item-value": "reqNum",
                    "show-select": "",
                    "items-per-page": 10
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VDataTable), {
                      modelValue: selectedItems.value,
                      "onUpdate:modelValue": ($event) => selectedItems.value = $event,
                      headers,
                      items: conExpenseList.value,
                      "item-value": "reqNum",
                      "show-select": "",
                      "items-per-page": 10
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "text-right mr-2 mb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "success",
                          class: "mr-2",
                          onClick: approveRequests
                        }, {
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
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "error",
                          onClick: rejectRequests
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 반려 `);
                            } else {
                              return [
                                createTextVNode(" 반려 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "success",
                            class: "mr-2",
                            onClick: approveRequests
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "error",
                            onClick: rejectRequests
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 반려 ")
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
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "success",
                          class: "mr-2",
                          onClick: approveRequests
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "error",
                          onClick: rejectRequests
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 반려 ")
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
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "mt-5 ml-3" }, "신청일자"),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: startDate.value,
                            "onUpdate:modelValue": ($event) => startDate.value = $event,
                            "append-inner-icon": "tabler-calendar"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "mt-5" }, "~"),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: endDate.value,
                            "onUpdate:modelValue": ($event) => endDate.value = $event,
                            "append-inner-icon": "tabler-calendar"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppTextField, {
                            modelValue: searchEmpCode.value,
                            "onUpdate:modelValue": ($event) => searchEmpCode.value = $event,
                            "append-inner-icon": "tabler-search",
                            placeholder: "사원번호"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: searchRequest
                          }, {
                            default: withCtx(() => [
                              createTextVNode("검색")
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
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createTextVNode("✨ 신청 승인 대기 목록")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(unref(VDataTable), {
                    modelValue: selectedItems.value,
                    "onUpdate:modelValue": ($event) => selectedItems.value = $event,
                    headers,
                    items: conExpenseList.value,
                    "item-value": "reqNum",
                    "show-select": "",
                    "items-per-page": 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "text-right mr-2 mb-2" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "success",
                        class: "mr-2",
                        onClick: approveRequests
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "error",
                        onClick: rejectRequests
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 반려 ")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/conexpense/approval.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
