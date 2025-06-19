import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, withCtx, unref, isRef, createTextVNode, createVNode, toRaw, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { a as affairStore } from "./index-4eaf1d02.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, b as VBtn } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "./VCheckboxBtn-aab82c77.js";
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
/* empty css                */import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    const iswarningFunc = ref(false);
    const isSuccessFunc = ref(false);
    const store = affairStore();
    const myTableRef = ref();
    const selectedItems = ref([]);
    const headers = [
      { title: "발령번호", key: "appointNo" },
      { title: "사번", key: "empCode" },
      { title: "직원명", key: "empName" },
      { title: "부서", key: "deptName" },
      { title: "발령부서", key: "appointDept" },
      { title: "직급", key: "positionName" },
      { title: "발령직급", key: "appointLevel" },
      { title: "승급호봉", key: "appointHobong" },
      { title: "근무지", key: "workPlaceName" },
      { title: "발령근무지", key: "appointWP" }
    ];
    const appointmentsList = ref([]);
    const search = ref("");
    const perPage = ref(5);
    const currentPage = ref(1);
    const pagination = {
      enabled: true,
      setCurrentPage: 2
    };
    const fetchData = async () => {
      try {
        console.log("여기요");
        await store.FETCH_APPOINT_LIST();
        appointmentsList.value = store.all_appointments_list;
      } catch (error) {
        console.error("Failed to fetch appointments list", error);
      }
    };
    const appointApprove = async () => {
      if (selectedItems.value.length === 0) {
        iswarningFunc.value = true;
      } else {
        for (const val of selectedItems.value) {
          const matchingAppointments = appointmentsList.value.filter(
            (item) => item.appointNo === val
          );
          if (matchingAppointments.length > 0) {
            const rawAppointments = matchingAppointments.map(
              (appointment) => toRaw(appointment)
            );
            rawAppointments[0].status = "승인";
            console.log("발령 승인", rawAppointments[0]);
            await store.UPDATE_APPOINT_APPROVE_EMP(rawAppointments[0]);
          }
        }
        isSuccessFunc.value = true;
        await fetchData();
      }
    };
    const appointReject = async () => {
      if (selectedItems.value.length === 0) {
        iswarningFunc.value = true;
      } else {
        for (const val of selectedItems.value) {
          const matchingAppointments = appointmentsList.value.filter(
            (item) => item.appointNo === val
          );
          if (matchingAppointments.length > 0) {
            const rawAppointments = matchingAppointments.map(
              (appointment) => toRaw(appointment)
            );
            rawAppointments[0].status = "반려";
            console.log("발령 반려", rawAppointments[0]);
            await store.UPDATE_APPOINT_APPROVE_EMP(rawAppointments[0]);
          }
        }
        isSuccessFunc.value = true;
        await fetchData();
      }
    };
    const appointDelete = async () => {
      if (selectedItems.value.length === 0) {
        iswarningFunc.value = true;
      } else {
        for (const val of selectedItems.value) {
          const matchingAppointments = appointmentsList.value.filter(
            (item) => item.appointNo === val
          );
          if (matchingAppointments.length > 0) {
            const rawAppointments = matchingAppointments.map(
              (appointment) => toRaw(appointment)
            );
            await store.DELETE_APPOINT_EMP(rawAppointments[0].appointNo);
          }
        }
        isSuccessFunc.value = true;
        await fetchData();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6">인사발령 관리</h1>`);
      _push(ssrRenderComponent(VCard, { class: "mt-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    density: "compact",
                    placeholder: "Search",
                    "append-inner-icon": "tabler-search",
                    "single-line": "",
                    "hide-details": "",
                    dense: "",
                    outlined: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VRow, { class: "text-right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                class: "ma-2",
                                color: "primary",
                                onClick: appointApprove
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 승인 `);
                                  } else {
                                    return [
                                      createTextVNode(" 승인 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "ma-2",
                                color: "secondary",
                                onClick: appointReject
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 반려 `);
                                  } else {
                                    return [
                                      createTextVNode(" 반려 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "ma-2",
                                color: "error",
                                onClick: appointDelete
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 삭제 `);
                                  } else {
                                    return [
                                      createTextVNode(" 삭제 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  class: "ma-2",
                                  color: "primary",
                                  onClick: appointApprove
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 승인 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  class: "ma-2",
                                  color: "secondary",
                                  onClick: appointReject
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 반려 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  class: "ma-2",
                                  color: "error",
                                  onClick: appointDelete
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "ma-2",
                                color: "primary",
                                onClick: appointApprove
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 승인 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                class: "ma-2",
                                color: "secondary",
                                onClick: appointReject
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 반려 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                class: "ma-2",
                                color: "error",
                                onClick: appointDelete
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { style: { "inline-size": "10rem" } }, [
                      createVNode(_component_AppTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        density: "compact",
                        placeholder: "Search",
                        "append-inner-icon": "tabler-search",
                        "single-line": "",
                        "hide-details": "",
                        dense: "",
                        outlined: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(VRow, { class: "text-right" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              class: "ma-2",
                              color: "primary",
                              onClick: appointApprove
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 승인 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              class: "ma-2",
                              color: "secondary",
                              onClick: appointReject
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 반려 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              class: "ma-2",
                              color: "error",
                              onClick: appointDelete
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              ref_key: "myTableRef",
              ref: myTableRef,
              modelValue: unref(selectedItems),
              "onUpdate:modelValue": ($event) => isRef(selectedItems) ? selectedItems.value = $event : null,
              headers,
              items: unref(appointmentsList),
              search: unref(search),
              "items-per-page": unref(perPage),
              page: unref(currentPage),
              pagination,
              "item-value": "appointNo",
              "show-select": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "inline-size": "10rem" } }, [
                    createVNode(_component_AppTextField, {
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      density: "compact",
                      placeholder: "Search",
                      "append-inner-icon": "tabler-search",
                      "single-line": "",
                      "hide-details": "",
                      dense: "",
                      outlined: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(VRow, { class: "text-right" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "ma-2",
                            color: "primary",
                            onClick: appointApprove
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-2",
                            color: "secondary",
                            onClick: appointReject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 반려 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-2",
                            color: "error",
                            onClick: appointDelete
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
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                ref_key: "myTableRef",
                ref: myTableRef,
                modelValue: unref(selectedItems),
                "onUpdate:modelValue": ($event) => isRef(selectedItems) ? selectedItems.value = $event : null,
                headers,
                items: unref(appointmentsList),
                search: unref(search),
                "items-per-page": unref(perPage),
                page: unref(currentPage),
                pagination,
                "item-value": "appointNo",
                "show-select": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "search", "items-per-page", "page"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(iswarningFunc),
        "onUpdate:modelValue": ($event) => isRef(iswarningFunc) ? iswarningFunc.value = $event : null,
        location: "top",
        timeout: 3e3,
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: "warning",
              title: "warning!",
              text: "선택 해주세요."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "선택 해주세요."
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/appo/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
