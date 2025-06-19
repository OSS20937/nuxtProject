import { defineComponent, ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import { V as VCard, f as VCardText, b as VBtn, l as VDialog, g as VCardTitle, e as VCardActions } from "../server.mjs";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VForm } from "./VForm-c404d2e6.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { V as VTextarea } from "./VTextarea-ec6cbc85.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "@unhead/shared";
import "vue-router";
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
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const defaultEduHistoryText = '형식은 "YYYYMMDD 이수완료"로 입력해주세요. ex)20250416 이수완료';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const eduList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "교육코드", key: "eduCode" },
      { title: "교육명", key: "eduName" },
      { title: "직원코드", key: "empCode" },
      { title: "직원명", key: "empName" },
      { title: "부서코드", key: "deptCode" },
      { title: "부서명", key: "deptName" },
      { title: "교육 이수 내역", key: "eduHistory" },
      { title: "승인상태", key: "status" },
      { title: "년도", key: "searchYear" }
    ];
    const loadEduList = async () => {
      const response = await axios.get("http://localhost:8282/hr/edu/eduList");
      eduList.value = response.data.eduList;
    };
    const dialog = ref(false);
    const editForm = ref({
      eduCode: "",
      eduName: "",
      empCode: "",
      empName: "",
      deptCode: "",
      deptName: "",
      eduHistory: '형식은 "YYYYMMDD 이수완료"로 입력해주세요. ex)20250416 이수완료',
      searchYear: "",
      status: ""
    });
    const isSuccessFunc = ref(false);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("완료되었습니다.");
    const handleEduHistoryFocus = () => {
      if (editForm.value.eduHistory === defaultEduHistoryText) {
        editForm.value.eduHistory = "";
      }
    };
    const handleEduHistoryBlur = () => {
      if (!editForm.value.eduHistory.trim()) {
        editForm.value.eduHistory = defaultEduHistoryText;
      }
    };
    const openUpdateDialog = () => {
      const hasApproved = selectedRows.value.some((row) => row.status === "승인완료");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "✅ 이미 승인완료된 항목입니다.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      if (selectedRows.value.length !== 1) {
        alert("수정은 하나만 선택해주세요!");
        return;
      }
      editForm.value = { ...selectedRows.value[0] };
      if (!editForm.value.eduHistory) {
        editForm.value.eduHistory = '형식은 "YYYYMMDD 이수완료"로 입력해주세요. ex)20250416 이수완료';
      }
      dialog.value = true;
      selectedRows.value = [];
    };
    const saveUpdate = async () => {
      try {
        await axios.post("http://localhost:8282/hr/edu/checkEduHistory", editForm.value);
        dialog.value = false;
        await loadEduList();
      } catch (error) {
        console.error("수정 실패:", error);
      }
    };
    const cancelApplication = async () => {
      const hasApproved = selectedRows.value.some((row) => row.status === "승인완료");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "✅ 이미 승인완료된 항목입니다.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      for (const row of selectedRows.value) {
        const { searchYear, eduCode, empCode, status } = row;
        await axios.post("http://localhost:8282/hr/edu/delReqEdu", {
          searchYear,
          eduCode,
          empCode,
          status
          // params: {
          //   searchYear: row.searchYear,
          //   eduCode: row.eduCode,
          //   empCode: row.empCode,
          //   status: row.status
          // }
        });
      }
      await loadEduList();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-4">📋 미승인 교육 신청 내역</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    class: "mr-2",
                    color: "primary",
                    onClick: openUpdateDialog
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`수정`);
                      } else {
                        return [
                          createTextVNode("수정")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "error",
                    onClick: cancelApplication
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`신청취소`);
                      } else {
                        return [
                          createTextVNode("신청취소")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    modelValue: selectedRows.value,
                    "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                    headers,
                    items: eduList.value,
                    "item-value": "eduCode",
                    "show-select": "",
                    "return-object": "",
                    class: "mt-4",
                    "items-per-page": 10
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      class: "mr-2",
                      color: "primary",
                      onClick: openUpdateDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode("수정")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      onClick: cancelApplication
                    }, {
                      default: withCtx(() => [
                        createTextVNode("신청취소")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VDataTable), {
                      modelValue: selectedRows.value,
                      "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                      headers,
                      items: eduList.value,
                      "item-value": "eduCode",
                      "show-select": "",
                      "return-object": "",
                      class: "mt-4",
                      "items-per-page": 10
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    class: "mr-2",
                    color: "primary",
                    onClick: openUpdateDialog
                  }, {
                    default: withCtx(() => [
                      createTextVNode("수정")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "error",
                    onClick: cancelApplication
                  }, {
                    default: withCtx(() => [
                      createTextVNode("신청취소")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VDataTable), {
                    modelValue: selectedRows.value,
                    "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                    headers,
                    items: eduList.value,
                    "item-value": "eduCode",
                    "show-select": "",
                    "return-object": "",
                    class: "mt-4",
                    "items-per-page": 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`교육 신청 수정`);
                      } else {
                        return [
                          createTextVNode("교육 신청 수정")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "교육명",
                                modelValue: editForm.value.eduName,
                                "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, {
                                label: "교육 이수 내역",
                                modelValue: editForm.value.eduHistory,
                                "onUpdate:modelValue": ($event) => editForm.value.eduHistory = $event,
                                onFocus: handleEduHistoryFocus,
                                onBlur: handleEduHistoryBlur
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "교육명",
                                  modelValue: editForm.value.eduName,
                                  "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextarea, {
                                  label: "교육 이수 내역",
                                  modelValue: editForm.value.eduHistory,
                                  "onUpdate:modelValue": ($event) => editForm.value.eduHistory = $event,
                                  onFocus: handleEduHistoryFocus,
                                  onBlur: handleEduHistoryBlur
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "교육명",
                                modelValue: editForm.value.eduName,
                                "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextarea, {
                                label: "교육 이수 내역",
                                modelValue: editForm.value.eduHistory,
                                "onUpdate:modelValue": ($event) => editForm.value.eduHistory = $event,
                                onFocus: handleEduHistoryFocus,
                                onBlur: handleEduHistoryBlur
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          variant: "text",
                          onClick: ($event) => dialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`취소`);
                            } else {
                              return [
                                createTextVNode("취소")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: saveUpdate
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`저장`);
                            } else {
                              return [
                                createTextVNode("저장")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: ($event) => dialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("취소")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: saveUpdate
                          }, {
                            default: withCtx(() => [
                              createTextVNode("저장")
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
                        createTextVNode("교육 신청 수정")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "교육명",
                              modelValue: editForm.value.eduName,
                              "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextarea, {
                              label: "교육 이수 내역",
                              modelValue: editForm.value.eduHistory,
                              "onUpdate:modelValue": ($event) => editForm.value.eduHistory = $event,
                              onFocus: handleEduHistoryFocus,
                              onBlur: handleEduHistoryBlur
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: ($event) => dialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("취소")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: saveUpdate
                        }, {
                          default: withCtx(() => [
                            createTextVNode("저장")
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
                      createTextVNode("교육 신청 수정")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "교육명",
                            modelValue: editForm.value.eduName,
                            "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            label: "교육 이수 내역",
                            modelValue: editForm.value.eduHistory,
                            "onUpdate:modelValue": ($event) => editForm.value.eduHistory = $event,
                            onFocus: handleEduHistoryFocus,
                            onBlur: handleEduHistoryBlur
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: ($event) => dialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("취소")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: saveUpdate
                      }, {
                        default: withCtx(() => [
                          createTextVNode("저장")
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
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: isSuccessFunc.value,
        "onUpdate:modelValue": ($event) => isSuccessFunc.value = $event,
        location: "top",
        timeout: 3e3,
        color: snackbarColor.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: snackbarType.value,
              title: "알림",
              text: snackbarText.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: snackbarType.value,
                title: "알림",
                text: snackbarText.value
              }, null, 8, ["type", "text"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/education/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
