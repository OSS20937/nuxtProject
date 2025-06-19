import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, useSSRContext, watch } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$7 } from "./AppDateTimePicker-c59f48ad.js";
import { _ as _sfc_main$4 } from "./DialogCloseBtn-438c6daf.js";
import { _ as _sfc_main$5 } from "./AppTextField-dee429aa.js";
import { l as VDialog, V as VCard, f as VCardText, b as VBtn, n as attenStore, i as VIcon } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import "./index-77616e20.js";
import axios from "axios";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VForm } from "./VForm-c404d2e6.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { _ as _sfc_main$8 } from "./AppTextarea-aa5ab071.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-258f0110.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
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
/* empty css                */import "./VTextarea-ec6cbc85.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "overModal",
  __ssrInlineRender: true,
  props: ["isDialogVisible", "row"],
  emits: ["closeModal", "updateData", "deleteData"],
  setup(__props, { emit: emits }) {
    const propz = __props;
    const isDialogVisible = ref(false);
    const closeModal = () => {
      emits("closeModal");
    };
    const updateData = () => {
      const newRow = {
        empCode: propz.row.empCode,
        applyDay: propz.row.applyDay,
        startTime: propz.row.startTime,
        endTime: propz.row.endTime,
        eno: propz.row.eno
      };
      console.log("newRow", newRow);
      emits("updateData", { newRow });
    };
    const deleteData = () => {
      console.log("delRow", propz.row.eno);
      emits("deleteData", propz.row.eno);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      const _component_AppTextField = _sfc_main$5;
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogCloseBtn, { onClick: closeModal }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { title: "초과근무 신청서 수정" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: propz.row.empName,
                                      "onUpdate:modelValue": ($event) => propz.row.empName = $event,
                                      label: "직원명",
                                      placeholder: "직원명",
                                      readonly: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: propz.row.empName,
                                        "onUpdate:modelValue": ($event) => propz.row.empName = $event,
                                        label: "직원명",
                                        placeholder: "직원명",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: propz.row.applyDay,
                                      "onUpdate:modelValue": ($event) => propz.row.applyDay = $event,
                                      type: "date",
                                      label: "신청일",
                                      placeholder: "신청일"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: propz.row.applyDay,
                                        "onUpdate:modelValue": ($event) => propz.row.applyDay = $event,
                                        type: "date",
                                        label: "신청일",
                                        placeholder: "신청일"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: propz.row.startTime,
                                      "onUpdate:modelValue": ($event) => propz.row.startTime = $event,
                                      label: "시작시간",
                                      placeholder: "시작시간"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: propz.row.startTime,
                                        "onUpdate:modelValue": ($event) => propz.row.startTime = $event,
                                        label: "시작시간",
                                        placeholder: "시작시간"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: propz.row.endTime,
                                      "onUpdate:modelValue": ($event) => propz.row.endTime = $event,
                                      label: "종료시간",
                                      placeholder: "종료시간"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: propz.row.endTime,
                                        "onUpdate:modelValue": ($event) => propz.row.endTime = $event,
                                        label: "종료시간",
                                        placeholder: "종료시간"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: propz.row.empName,
                                      "onUpdate:modelValue": ($event) => propz.row.empName = $event,
                                      label: "직원명",
                                      placeholder: "직원명",
                                      readonly: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: propz.row.applyDay,
                                      "onUpdate:modelValue": ($event) => propz.row.applyDay = $event,
                                      type: "date",
                                      label: "신청일",
                                      placeholder: "신청일"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: propz.row.startTime,
                                      "onUpdate:modelValue": ($event) => propz.row.startTime = $event,
                                      label: "시작시간",
                                      placeholder: "시작시간"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: propz.row.endTime,
                                      "onUpdate:modelValue": ($event) => propz.row.endTime = $event,
                                      label: "종료시간",
                                      placeholder: "종료시간"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: propz.row.empName,
                                    "onUpdate:modelValue": ($event) => propz.row.empName = $event,
                                    label: "직원명",
                                    placeholder: "직원명",
                                    readonly: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: propz.row.applyDay,
                                    "onUpdate:modelValue": ($event) => propz.row.applyDay = $event,
                                    type: "date",
                                    label: "신청일",
                                    placeholder: "신청일"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: propz.row.startTime,
                                    "onUpdate:modelValue": ($event) => propz.row.startTime = $event,
                                    label: "시작시간",
                                    placeholder: "시작시간"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: propz.row.endTime,
                                    "onUpdate:modelValue": ($event) => propz.row.endTime = $event,
                                    label: "종료시간",
                                    placeholder: "종료시간"
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { onClick: updateData }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 수정 `);
                            } else {
                              return [
                                createTextVNode(" 수정 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { onClick: deleteData }, {
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
                          createVNode(VBtn, { onClick: updateData }, {
                            default: withCtx(() => [
                              createTextVNode(" 수정 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { onClick: deleteData }, {
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: propz.row.empName,
                                  "onUpdate:modelValue": ($event) => propz.row.empName = $event,
                                  label: "직원명",
                                  placeholder: "직원명",
                                  readonly: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: propz.row.applyDay,
                                  "onUpdate:modelValue": ($event) => propz.row.applyDay = $event,
                                  type: "date",
                                  label: "신청일",
                                  placeholder: "신청일"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: propz.row.startTime,
                                  "onUpdate:modelValue": ($event) => propz.row.startTime = $event,
                                  label: "시작시간",
                                  placeholder: "시작시간"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: propz.row.endTime,
                                  "onUpdate:modelValue": ($event) => propz.row.endTime = $event,
                                  label: "종료시간",
                                  placeholder: "종료시간"
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
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { onClick: updateData }, {
                          default: withCtx(() => [
                            createTextVNode(" 수정 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, { onClick: deleteData }, {
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
              createVNode(_component_DialogCloseBtn, { onClick: closeModal }),
              createVNode(VCard, { title: "초과근무 신청서 수정" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: propz.row.empName,
                                "onUpdate:modelValue": ($event) => propz.row.empName = $event,
                                label: "직원명",
                                placeholder: "직원명",
                                readonly: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: propz.row.applyDay,
                                "onUpdate:modelValue": ($event) => propz.row.applyDay = $event,
                                type: "date",
                                label: "신청일",
                                placeholder: "신청일"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: propz.row.startTime,
                                "onUpdate:modelValue": ($event) => propz.row.startTime = $event,
                                label: "시작시간",
                                placeholder: "시작시간"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: propz.row.endTime,
                                "onUpdate:modelValue": ($event) => propz.row.endTime = $event,
                                label: "종료시간",
                                placeholder: "종료시간"
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
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { onClick: updateData }, {
                        default: withCtx(() => [
                          createTextVNode(" 수정 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { onClick: deleteData }, {
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
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hr/attendance/overModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "overWorkReqListTap",
  __ssrInlineRender: true,
  setup(__props) {
    const startDate = ref("");
    const endDate = ref("");
    const selectedEmpCode = ref("");
    const elastic_list = ref([]);
    const selectedDeptCode = ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const isDialogVisible = ref(false);
    const row = ref({});
    const elasticProps = [
      { title: "직원코드", key: "empCode" },
      { title: "직원명", key: "empName" },
      { title: "신청일", key: "applyDay" },
      { title: "시작시간", key: "startTime" },
      { title: "종료시간", key: "endTime" }
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
    const fetchElastic = async () => {
      await axios.get("http://localhost:8282/hr/attendance/findElastic", {
        params: {
          empCode: selectedEmpCode.value,
          startDate: startDate.value,
          endDate: endDate.value
        }
      }).then(
        (res) => {
          console.log("[elasticList]", res.data);
          elastic_list.value = res.data.elasticList;
        }
      ).catch((e) => {
        console.error(e);
      });
    };
    const onClickRow = (event, item) => {
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
      if (newRow.applyDay === "" || newRow.startDate === "" || newRow.endDate === "") {
        alert("모든 항목을 작성해주세요.");
      } else {
        axios.post("http://localhost:8282/hr/attendance/updateElastic", newRow).then((res) => {
          console.log(res.data);
          alert("수정이 완료되었습니다. ");
          fetchElastic();
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
      axios.delete("http://localhost:8282/hr/attendance/deleteElasticOne", { params: { eno: delRow } }).then((res) => {
        console.log(res.data);
        alert("삭제가 완료되었습니다. ");
        fetchElastic();
        isDialogVisible.value = !isDialogVisible.value;
      }).catch((e) => {
        console.error(e);
        alert("다시 시도해 주세요. ");
        isDialogVisible.value = !isDialogVisible.value;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$6;
      const _component_AppDateTimePicker = _sfc_main$7;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VContainer, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VForm, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2",
                          "offset-md": "10"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                class: "mt-6",
                                height: "43",
                                width: "152",
                                onClick: fetchElastic
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      icon: "tabler-search"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`조회 `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "tabler-search"
                                      }),
                                      createTextVNode("조회 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  class: "mt-6",
                                  height: "43",
                                  width: "152",
                                  onClick: fetchElastic
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "tabler-search"
                                    }),
                                    createTextVNode("조회 ")
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
                            "offset-md": "10"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "mt-6",
                                height: "43",
                                width: "152",
                                onClick: fetchElastic
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "tabler-search"
                                  }),
                                  createTextVNode("조회 ")
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
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
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
                          md: "3"
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
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: unref(startDate),
                                "onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
                                label: "시작일",
                                placeholder: "시작일"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: unref(startDate),
                                  "onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
                                  label: "시작일",
                                  placeholder: "시작일"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: unref(endDate),
                                "onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
                                label: "종료일",
                                placeholder: "종료일"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: unref(endDate),
                                  "onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
                                  label: "종료일",
                                  placeholder: "종료일"
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
                            md: "3"
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
                            md: "3"
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
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(startDate),
                                "onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
                                label: "시작일",
                                placeholder: "시작일"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(endDate),
                                "onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
                                label: "종료일",
                                placeholder: "종료일"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          md: "2",
                          "offset-md": "10"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              class: "mt-6",
                              height: "43",
                              width: "152",
                              onClick: fetchElastic
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-search"
                                }),
                                createTextVNode("조회 ")
                              ]),
                              _: 1
                            })
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
                          md: "3"
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
                          md: "3"
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
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(startDate),
                              "onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
                              label: "시작일",
                              placeholder: "시작일"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(endDate),
                              "onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
                              label: "종료일",
                              placeholder: "종료일"
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "mt-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          headers: elasticProps,
                          items: unref(elastic_list),
                          "items-per-page": 10,
                          "on-click:row": onClickRow
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VDataTable), {
                            headers: elasticProps,
                            items: unref(elastic_list),
                            "items-per-page": 10,
                            "on-click:row": onClickRow
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
                          headers: elasticProps,
                          items: unref(elastic_list),
                          "items-per-page": 10,
                          "on-click:row": onClickRow
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
              createVNode(VForm, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "2",
                        "offset-md": "10"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "mt-6",
                            height: "43",
                            width: "152",
                            onClick: fetchElastic
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }),
                              createTextVNode("조회 ")
                            ]),
                            _: 1
                          })
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
                        md: "3"
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
                        md: "3"
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
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(startDate),
                            "onUpdate:modelValue": ($event) => isRef(startDate) ? startDate.value = $event : null,
                            label: "시작일",
                            placeholder: "시작일"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(endDate),
                            "onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
                            label: "종료일",
                            placeholder: "종료일"
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
              createVNode(VRow, { class: "mt-3" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTable), {
                        headers: elasticProps,
                        items: unref(elastic_list),
                        "items-per-page": 10,
                        "on-click:row": onClickRow
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
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        onCloseModal: closeModal,
        onUpdateData: updateData,
        onDeleteData: deleteData,
        row: unref(row)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attendreg/overwork/overWorkReqListTap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "overWorkReqTap",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const selectedDeptCode = ref("");
    const selectedEmpCode = ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const reqDate = ref("");
    const startTime = ref("");
    const endTime = ref("");
    const today = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    watch(selectedDeptCode, async () => {
      await fetchEmpList();
    });
    const fetchEmpList = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDeptCode.value);
      emp_list_by_dept.value = Object.values(attenStore().empList).map((item) => {
        return { title: item.empName, value: item.empCode };
      });
    };
    const insertElastic = async () => {
      if (reqDate.value === "" || selectedEmpCode.value === "" || startTime.value === "" || endTime.value === "") {
        alert("모든 항목을 선택해주세요.");
      } else {
        await axios.post("http://localhost:8282/hr/attendance/insertElastic", {
          empCode: selectedEmpCode.value,
          applyDay: reqDate.value,
          startTime: startTime.value,
          endTime: endTime.value,
          eno: ""
        }).then(
          (res) => {
            console.log([insertElastic], res.data);
            alert("초과근무 신청이 완료되었습니다. ");
          }
        ).catch((e) => {
          console.error(e);
          alert("다시 시도해 주세요.");
        });
      }
    };
    watch(endTime, () => {
      console.log(endTime.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$7;
      const _component_AppSelect = _sfc_main$6;
      const _component_AppTextarea = _sfc_main$8;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "mb-6" }, _attrs), {
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
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(reqDate),
                          "onUpdate:modelValue": ($event) => isRef(reqDate) ? reqDate.value = $event : null,
                          label: "요청날짜",
                          placeholder: unref(today)
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(startTime),
                          "onUpdate:modelValue": ($event) => isRef(startTime) ? startTime.value = $event : null,
                          label: "시작시간",
                          placeholder: "시작시간",
                          config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(startTime),
                            "onUpdate:modelValue": ($event) => isRef(startTime) ? startTime.value = $event : null,
                            label: "시작시간",
                            placeholder: "시작시간",
                            config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
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
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(endTime),
                          "onUpdate:modelValue": ($event) => isRef(endTime) ? endTime.value = $event : null,
                          label: "종료시간",
                          placeholder: "종료시간",
                          config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(endTime),
                            "onUpdate:modelValue": ($event) => isRef(endTime) ? endTime.value = $event : null,
                            label: "종료시간",
                            placeholder: "종료시간",
                            config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    md: "3"
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
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(startTime),
                          "onUpdate:modelValue": ($event) => isRef(startTime) ? startTime.value = $event : null,
                          label: "시작시간",
                          placeholder: "시작시간",
                          config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
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
                          modelValue: unref(endTime),
                          "onUpdate:modelValue": ($event) => isRef(endTime) ? endTime.value = $event : null,
                          label: "종료시간",
                          placeholder: "종료시간",
                          config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
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
                      md: "3"
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextarea, {
                          label: "신청사유",
                          placeholder: "신청사유를 작성해주세요."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextarea, {
                            label: "신청사유",
                            placeholder: "신청사유를 작성해주세요."
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
                        createVNode(_component_AppTextarea, {
                          label: "신청사유",
                          placeholder: "신청사유를 작성해주세요."
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2",
                    "offset-md": "10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-3",
                          width: "155",
                          onClick: insertElastic
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-checkbox"
                              }, null, _parent5, _scopeId4));
                              _push5(`신청 `);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-3",
                            width: "155",
                            onClick: insertElastic
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "2",
                      "offset-md": "10"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-3",
                          width: "155",
                          onClick: insertElastic
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
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: unref(startTime),
                        "onUpdate:modelValue": ($event) => isRef(startTime) ? startTime.value = $event : null,
                        label: "시작시간",
                        placeholder: "시작시간",
                        config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
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
                        modelValue: unref(endTime),
                        "onUpdate:modelValue": ($event) => isRef(endTime) ? endTime.value = $event : null,
                        label: "종료시간",
                        placeholder: "종료시간",
                        config: { enableTime: true, noCalendar: true, dateFormat: "Hi" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
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
                    md: "3"
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
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextarea, {
                        label: "신청사유",
                        placeholder: "신청사유를 작성해주세요."
                      })
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
                    "offset-md": "10"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-3",
                        width: "155",
                        onClick: insertElastic
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attendreg/overwork/overWorkReqTap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "overWork",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref("personal-info");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">초과근무 신청</h1>`);
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
                        _push4(` 초과근무 신청 `);
                      } else {
                        return [
                          createTextVNode(" 초과근무 신청 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "account-details" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 초과근무 조회 `);
                      } else {
                        return [
                          createTextVNode(" 초과근무 조회 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 초과근무 신청 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "account-details" }, {
                      default: withCtx(() => [
                        createTextVNode(" 초과근무 조회 ")
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
                      createTextVNode(" 초과근무 신청 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "account-details" }, {
                    default: withCtx(() => [
                      createTextVNode(" 초과근무 조회 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/attendreg/overWork.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
