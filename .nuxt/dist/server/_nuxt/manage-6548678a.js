import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { e as evalStore } from "./index-af2be6da.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, b as VBtn } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VSelect } from "./VSelect-03a0285c.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
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
/* empty css                */import "./VCheckboxBtn-aab82c77.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    const store = evalStore();
    const headers = [
      { title: "이름", key: "empName", width: 80 },
      { title: "부서", key: "deptName", width: 80 },
      { title: "직급", key: "positionName", width: 80 },
      { title: "교육", key: "durationOfTraining", width: 80 },
      { title: "자격증", key: "numberOfCertificate", width: 100 },
      { title: "근태", key: "numberOfRestDay", width: 80 },
      { title: "휴가", key: "remainingHoliday", width: 80 },
      { title: "결격여부", key: "disqualification", width: 110 },
      { title: "장기근속", key: "career", width: 110 },
      { title: "총 점수", key: "score", width: 100 },
      { title: "등급", key: "grade", width: 80 },
      { title: "승인상태", key: "status", width: 110 }
    ];
    const isSuccessFunc = ref(false);
    const selectYear = ref("");
    const selectStatus = ref("");
    const selectedRows = ref([]);
    const statusList = [
      { title: "미승인", value: "미승인" },
      { title: "승인", value: "승인완료" },
      { title: "반려", value: "승인반려" }
    ];
    const evalList = ref([]);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("완료되었습니다.");
    const resetSelection = () => {
      selectedRows.value = [];
    };
    const searchEvalStatus = async () => {
      try {
        const searchYear = selectYear.value;
        const status = selectStatus.value;
        const selectData = {
          searchYear,
          status
        };
        console.log(selectData);
        await store.SEARCH_EMP_EVAL_STATUS(selectData);
        evalList.value = await store.evalList;
        console.log(evalList.value);
      } catch (error) {
        throw new Error(error);
      }
    };
    const approveEmpEval = async () => {
      console.log("승인");
      console.log("one", selectedRows.value);
      for (const row of selectedRows.value) {
        const { searchYear, empCode } = row;
        const approvedEval = {
          searchYear,
          empCode,
          status: "승인완료"
        };
        await store.EDIT_EMP_EVAL(approvedEval);
      }
      searchEvalStatus();
      resetSelection();
    };
    const referEmpEval = async () => {
      console.log("반려");
      console.log("two", selectedRows.value);
      for (const row of selectedRows.value) {
        const { searchYear, empCode } = row;
        const referEval = {
          searchYear,
          empCode,
          status: "승인반려"
        };
        await store.EDIT_EMP_EVAL(referEval);
      }
      searchEvalStatus();
      resetSelection();
    };
    const deleteEmpEval = async () => {
      console.log("삭제");
      console.log("three", selectedRows.value);
      for (const row of selectedRows.value) {
        if (row.status === "승인완료" || row.status === "승인반려") {
          snackbarColor.value = "error";
          snackbarType.value = "error";
          snackbarText.value = "승인완료 및 승인반려 상태인 인사고과 정보는 삭제할 수 없습니다.";
          isSuccessFunc.value = true;
          console.log("승인완료 및 승인반려 상태인 인사고과 정보는 삭제할 수 없습니다.");
          return;
        }
      }
      try {
        for (const row of selectedRows.value) {
          const { searchYear, empCode } = row;
          const removeEval = {
            searchYear,
            empCode
          };
          await store.DELETE_EMP_EVAL(removeEval);
        }
        searchEvalStatus();
        isSuccessFunc.value = true;
        resetSelection();
      } catch (error) {
        console.error("삭제 중 오류 발생:", error.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">인사고과 관리</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<br${_scopeId}>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: selectYear.value,
                          "onUpdate:modelValue": ($event) => selectYear.value = $event,
                          class: "ml-4",
                          label: "검색년도",
                          items: ["2020", "2021", "2022", "2023", "2024", "2025"],
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: selectYear.value,
                            "onUpdate:modelValue": ($event) => selectYear.value = $event,
                            class: "ml-4",
                            label: "검색년도",
                            items: ["2020", "2021", "2022", "2023", "2024", "2025"],
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: selectStatus.value,
                          "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                          label: "승인상태",
                          items: statusList,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: selectStatus.value,
                            "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                            label: "승인상태",
                            items: statusList,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: searchEvalStatus
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 승인상태 조회 `);
                            } else {
                              return [
                                createTextVNode(" 승인상태 조회 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: searchEvalStatus
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인상태 조회 ")
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
                        createVNode(VSelect, {
                          modelValue: selectYear.value,
                          "onUpdate:modelValue": ($event) => selectYear.value = $event,
                          class: "ml-4",
                          label: "검색년도",
                          items: ["2020", "2021", "2022", "2023", "2024", "2025"],
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: selectStatus.value,
                          "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                          label: "승인상태",
                          items: statusList,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: searchEvalStatus
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인상태 조회 ")
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
            _push2(ssrRenderComponent(unref(VDataTable), {
              modelValue: selectedRows.value,
              "onUpdate:modelValue": ($event) => selectedRows.value = $event,
              class: "mt-8",
              headers,
              items: evalList.value,
              "items-per-page": 10,
              "show-select": "",
              "item-value": "empCode",
              "return-object": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "primary",
                          onClick: approveEmpEval
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
                          class: "ma-1",
                          color: "secondary",
                          onClick: referEmpEval
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
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEmpEval
                        }, {
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
                        return [
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "primary",
                            onClick: approveEmpEval
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "secondary",
                            onClick: referEmpEval
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 반려 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "error",
                            onClick: deleteEmpEval
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 삭제 ")
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
                          class: "ma-1",
                          color: "primary",
                          onClick: approveEmpEval
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "secondary",
                          onClick: referEmpEval
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 반려 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEmpEval
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 삭제 ")
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
              createVNode("br"),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: selectYear.value,
                        "onUpdate:modelValue": ($event) => selectYear.value = $event,
                        class: "ml-4",
                        label: "검색년도",
                        items: ["2020", "2021", "2022", "2023", "2024", "2025"],
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: selectStatus.value,
                        "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                        label: "승인상태",
                        items: statusList,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: searchEvalStatus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인상태 조회 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(VDataTable), {
                modelValue: selectedRows.value,
                "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                class: "mt-8",
                headers,
                items: evalList.value,
                "items-per-page": 10,
                "show-select": "",
                "item-value": "empCode",
                "return-object": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "primary",
                        onClick: approveEmpEval
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "secondary",
                        onClick: referEmpEval
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 반려 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "error",
                        onClick: deleteEmpEval
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 삭제 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/empeval/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
