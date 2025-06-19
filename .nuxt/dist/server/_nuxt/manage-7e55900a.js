import { defineComponent, ref, watch, withCtx, createVNode, createTextVNode, unref, nextTick, useSSRContext } from "vue";
import "hookable";
import { h as hrApi, d as defineStore, o as useRouter, V as VCard, b as VBtn } from "../server.mjs";
import "devalue";
import "defu";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { V as VSelect } from "./VSelect-03a0285c.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
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
/* empty css                */import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const EDU_URL = "/edu";
function approReqEdu(payload) {
  console.log("payload", payload);
  return hrApi.post(`${EDU_URL}/approReqEdu`, payload);
}
function findEduListByStatus(payload) {
  console.log("payload", payload);
  return hrApi.get(`${EDU_URL}/searchEduListByStatus`, {
    params: payload
  });
}
function removeEduList(payload) {
  return hrApi.delete(`${EDU_URL}/removeEduList`, {
    params: {
      searchYear: payload.searchYear,
      eduCode: payload.eduCode,
      empCode: payload.empCode,
      status: payload.status
    }
  });
}
const eduStore = defineStore("eduStore", {
  state: () => ({
    eduList: [{
      deptName: "",
      durationOfTraining: "",
      empCode: "",
      empName: "",
      searchYear: "",
      status: ""
    }],
    selEduList: [{
      eduCode: "",
      eduName: "",
      empCode: "",
      empName: "",
      deptCode: "",
      deptName: "",
      eduHistory: "",
      searchYear: "",
      status: ""
    }]
  }),
  actions: {
    /**
     * 교육 관리 및 승인요청
     */
    async APPRO_EDU_LIST(payload) {
      try {
        console.log("교육 승인요청중");
        const response = await approReqEdu(payload);
        this.eduList = response.data.eduList;
        console.log("response.data", response.data);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 교육 관리 승인상태별 조회
     */
    async SEARCH_EDU_LIST_STATUS(payload) {
      try {
        console.log("교육 관리 승인여부 조회");
        const response = await findEduListByStatus(payload);
        this.selEduList = response.data;
        console.log("response", response.data);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 교육 관리 내역 삭제
     */
    async DELETE_EDU_LIST(payload) {
      try {
        console.log("교육 관리 내역 삭제");
        return await removeEduList(payload);
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-0001") {
      router.push("/hr/confinement/unauthorized");
    }
    const store = eduStore();
    ref("");
    const startDate = ref("");
    const endDate = ref("");
    const selectStatus = ref("");
    const selectedRows = ref([]);
    const dataTableRef = ref(null);
    const eduList = ref([]);
    const headers = [
      { title: "교육코드", key: "eduCode", width: 100 },
      { title: "교육명", key: "eduName", width: "150px" },
      { title: "직원코드", key: "empCode", width: 120 },
      { title: "직원명", key: "empName", width: 100 },
      { title: "부서코드", key: "deptCode", width: 120 },
      { title: "부서명", key: "deptName", width: 120 },
      { title: "교육 이수 내역", key: "eduHistory", width: "150px" },
      { title: "승인상태", key: "status", width: 120 },
      { title: "검색년도", key: "searchYear", width: "150px" }
    ];
    const statusList = [
      { title: "미승인", value: "신청완료" },
      { title: "승인요청", value: "승인요청" },
      { title: "반려", value: "승인반려" },
      { title: "승인완료", value: "승인완료" }
    ];
    const isSuccessFunc = ref(false);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("완료되었습니다.");
    const resetSelection = () => {
      selectedRows.value = [];
    };
    const searchEduStatus = async () => {
      try {
        const status = selectStatus.value;
        const sDate = startDate.value;
        const eDate = endDate.value;
        const selectData = {
          // searchYear,
          sDate,
          eDate,
          status
        };
        console.log(selectData);
        await store.SEARCH_EDU_LIST_STATUS(selectData);
        eduList.value = Array.isArray(store.selEduList) ? store.selEduList : [];
        console.log("조회 성공", eduList.value);
      } catch (error) {
        throw new Error(error);
      }
      resetSelection();
    };
    const approvalRequest = async () => {
      if (empStore.empCode !== "EMP-0001") {
        snackbarColor.value = "error";
        snackbarText.value = "⛔ 권한이 없습니다. 관리자에게 문의해주세요.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      console.log("승인요청 실행", selectedRows.value);
      const hasApproved = selectedRows.value.some((row) => row.status === "승인완료");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "✅ 이미 승인완료된 항목입니다.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      for (const row of selectedRows.value) {
        const { searchYear, eduCode } = row;
        const approvalEdu = {
          searchYear,
          eduCode,
          status: "승인요청"
        };
        await store.APPRO_EDU_LIST(approvalEdu);
      }
      searchEduStatus();
      resetSelection();
    };
    const deleteEdu = async () => {
      console.log("삭제실행", selectedRows.value);
      const hasApproved = selectedRows.value.some((row) => row.status === "승인완료");
      const hasRequested = selectedRows.value.some((row) => row.status === "승인요청");
      const hasRejected = selectedRows.value.some((row) => row.status === "반려");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "✅ 승인완료된 항목은 삭제할 수 없습니다.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      if (hasRequested) {
        snackbarColor.value = "warning";
        snackbarText.value = "⚠️ 승인요청 중인 항목은 삭제할 수 없습니다.";
        snackbarType.value = "warning";
        isSuccessFunc.value = true;
        return;
      }
      if (hasRejected) {
        snackbarColor.value = "info";
        snackbarText.value = "ℹ️ 승인반려 항목은 관리자 확인 후 삭제 가능합니다.";
        snackbarType.value = "info";
        isSuccessFunc.value = true;
        return;
      }
      try {
        for (const row of selectedRows.value) {
          const { searchYear, eduCode, empCode, status } = row;
          const removeEdu = {
            searchYear,
            eduCode,
            empCode,
            status
          };
          await store.DELETE_EDU_LIST(removeEdu);
        }
        searchEduStatus();
        await nextTick();
        resetSelection();
      } catch (error) {
        console.error("삭제 중 오류 발생:", error.message);
      }
    };
    watch(selectedRows, (newVal) => {
      console.log("[선택된 행]", newVal);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">📋 교육 관리 및 승인요청</h1>`);
      _push(ssrRenderComponent(VCard, { class: "pa-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "align-end mb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: startDate.value,
                          "onUpdate:modelValue": ($event) => startDate.value = $event,
                          type: "date",
                          label: "시작일",
                          placeholder: "시작일",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: startDate.value,
                            "onUpdate:modelValue": ($event) => startDate.value = $event,
                            type: "date",
                            label: "시작일",
                            placeholder: "시작일",
                            variant: "outlined",
                            density: "compact",
                            class: "compact-textfield"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: endDate.value,
                          "onUpdate:modelValue": ($event) => endDate.value = $event,
                          type: "date",
                          label: "종료일",
                          placeholder: "종료일",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: endDate.value,
                            "onUpdate:modelValue": ($event) => endDate.value = $event,
                            type: "date",
                            label: "종료일",
                            placeholder: "종료일",
                            variant: "outlined",
                            density: "compact",
                            class: "compact-textfield"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: selectStatus.value,
                          "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                          label: "승인상태",
                          items: statusList,
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: selectStatus.value,
                            "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                            label: "승인상태",
                            items: statusList,
                            variant: "outlined",
                            density: "compact",
                            class: "compact-textfield"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex justify-end align-end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "primary",
                          onClick: searchEduStatus
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 조회 `);
                            } else {
                              return [
                                createTextVNode(" 조회 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "success",
                          onClick: approvalRequest
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 승인요청 `);
                            } else {
                              return [
                                createTextVNode(" 승인요청 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEdu
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
                            onClick: searchEduStatus
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 조회 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "success",
                            onClick: approvalRequest
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인요청 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "error",
                            onClick: deleteEdu
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
                    createVNode(VCol, {
                      cols: "12",
                      sm: "3",
                      mt: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: startDate.value,
                          "onUpdate:modelValue": ($event) => startDate.value = $event,
                          type: "date",
                          label: "시작일",
                          placeholder: "시작일",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "3",
                      mt: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: endDate.value,
                          "onUpdate:modelValue": ($event) => endDate.value = $event,
                          type: "date",
                          label: "종료일",
                          placeholder: "종료일",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: selectStatus.value,
                          "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                          label: "승인상태",
                          items: statusList,
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-end align-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "primary",
                          onClick: searchEduStatus
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 조회 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "success",
                          onClick: approvalRequest
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인요청 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEdu
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
            _push2(ssrRenderComponent(unref(VDataTable), {
              ref_key: "dataTableRef",
              ref: dataTableRef,
              modelValue: selectedRows.value,
              "onUpdate:modelValue": ($event) => selectedRows.value = $event,
              class: "mt-8",
              headers,
              items: eduList.value,
              "items-per-page": 10,
              "show-select": "",
              "item-value": "eduCode",
              "return-object": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { class: "align-end mb-4" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: startDate.value,
                        "onUpdate:modelValue": ($event) => startDate.value = $event,
                        type: "date",
                        label: "시작일",
                        placeholder: "시작일",
                        variant: "outlined",
                        density: "compact",
                        class: "compact-textfield"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: endDate.value,
                        "onUpdate:modelValue": ($event) => endDate.value = $event,
                        type: "date",
                        label: "종료일",
                        placeholder: "종료일",
                        variant: "outlined",
                        density: "compact",
                        class: "compact-textfield"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: selectStatus.value,
                        "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                        label: "승인상태",
                        items: statusList,
                        variant: "outlined",
                        density: "compact",
                        class: "compact-textfield"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex justify-end align-end"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "primary",
                        onClick: searchEduStatus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 조회 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "success",
                        onClick: approvalRequest
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인요청 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "error",
                        onClick: deleteEdu
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
              }),
              createVNode(unref(VDataTable), {
                ref_key: "dataTableRef",
                ref: dataTableRef,
                modelValue: selectedRows.value,
                "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                class: "mt-8",
                headers,
                items: eduList.value,
                "items-per-page": 10,
                "show-select": "",
                "item-value": "eduCode",
                "return-object": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/education/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
