import { _ as _sfc_main$3 } from "./AppTextField-dee429aa.js";
import { defineComponent, computed, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext, ref, isRef } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./DialogCloseBtn-438c6daf.js";
import { _ as _sfc_main$4 } from "./AppTextarea-aa5ab071.js";
import { b as baseStore } from "./index-77616e20.js";
import { l as VDialog, V as VCard, f as VCardText, b as VBtn, m as VSpacer } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VTextarea-ec6cbc85.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectModal",
  __ssrInlineRender: true,
  props: ["fetchData"],
  setup(__props) {
    const props = __props;
    const BaseStore = baseStore();
    const isDialogBtn = computed(() => {
      return BaseStore.isDialogBtn;
    });
    const project = computed(() => {
      return BaseStore.project;
    });
    const modifyProject = async () => {
      const projectData = {
        projectID: project.value.projectID,
        projectName: project.value.projectName,
        startDate: project.value.startDate,
        endDate: project.value.endDate,
        projectType: project.value.projectType,
        projectAmount: project.value.projectAmount,
        projectCategory: project.value.projectCategory,
        remarks: project.value.remarks,
        jobDescription: project.value.jobDescription
      };
      await BaseStore.MODIFY_PROJECT(projectData);
      await props.fetchData();
      await BaseStore.SET_DIALOG(false);
    };
    const addProject = async () => {
      const projectData = {
        projectID: project.value.projectID,
        projectName: project.value.projectName,
        startDate: project.value.startDate,
        endDate: project.value.endDate,
        projectType: project.value.projectType,
        projectAmount: project.value.projectAmount,
        projectCategory: project.value.projectCategory,
        remarks: project.value.remarks,
        jobDescription: project.value.jobDescription
      };
      await BaseStore.ADD_PROJECT(projectData);
      await props.fetchData();
      await BaseStore.SET_DIALOG(false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      const _component_AppTextarea = _sfc_main$4;
      _push(`<!--[--><div class="app-user-search-filter d-flex align-center flex-wrap gap-4">`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(BaseStore).isDialog,
        "onUpdate:modelValue": ($event) => unref(BaseStore).isDialog = $event,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogCloseBtn, {
              onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { title: "프로젝트 추가" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(isDialogBtn)) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(project).projectID,
                                        "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                        label: "코드",
                                        disabled: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(project).projectID,
                                          "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                          label: "코드",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(project).projectID,
                                        "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                        label: "코드"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(project).projectID,
                                          "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                          label: "코드"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).projectName,
                                      "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                      label: "프로젝트 명"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectName,
                                        "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                        label: "프로젝트 명"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).startDate,
                                      "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                      label: "시작 날짜",
                                      type: "date"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).startDate,
                                        "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                        label: "시작 날짜",
                                        type: "date"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).endDate,
                                      "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                      label: "종료 날짜",
                                      type: "date"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).endDate,
                                        "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                        label: "종료 날짜",
                                        type: "date"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).projectType,
                                      "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                      label: "유형"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectType,
                                        "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                        label: "유형"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).projectAmount,
                                      "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                      label: "금액"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectAmount,
                                        "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                        label: "금액"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).projectCategory,
                                      "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                      label: "분류"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectCategory,
                                        "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                        label: "분류"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: unref(project).remarks,
                                      "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                      label: "비고"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).remarks,
                                        "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                        label: "비고"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextarea, {
                                      modelValue: unref(project).jobDescription,
                                      "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                      label: "직무내용",
                                      placeholder: "직무내용을 작성해주세요."
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextarea, {
                                        modelValue: unref(project).jobDescription,
                                        "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                        label: "직무내용",
                                        placeholder: "직무내용을 작성해주세요."
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                unref(isDialogBtn) ? (openBlock(), createBlock(VCol, {
                                  key: 0,
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(project).projectID,
                                      "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                      label: "코드",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VCol, {
                                  key: 1,
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(project).projectID,
                                      "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                      label: "코드"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(project).projectName,
                                      "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                      label: "프로젝트 명"
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
                                      modelValue: unref(project).startDate,
                                      "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                      label: "시작 날짜",
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
                                      modelValue: unref(project).endDate,
                                      "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                      label: "종료 날짜",
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
                                      modelValue: unref(project).projectType,
                                      "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                      label: "유형"
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
                                      modelValue: unref(project).projectAmount,
                                      "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                      label: "금액"
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
                                      modelValue: unref(project).projectCategory,
                                      "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                      label: "분류"
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
                                      modelValue: unref(project).remarks,
                                      "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                      label: "비고"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextarea, {
                                      modelValue: unref(project).jobDescription,
                                      "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                      label: "직무내용",
                                      placeholder: "직무내용을 작성해주세요."
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
                              unref(isDialogBtn) ? (openBlock(), createBlock(VCol, {
                                key: 0,
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(project).projectID,
                                    "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                    label: "코드",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VCol, {
                                key: 1,
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(project).projectID,
                                    "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                    label: "코드"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(project).projectName,
                                    "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                    label: "프로젝트 명"
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
                                    modelValue: unref(project).startDate,
                                    "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                    label: "시작 날짜",
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
                                    modelValue: unref(project).endDate,
                                    "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                    label: "종료 날짜",
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
                                    modelValue: unref(project).projectType,
                                    "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                    label: "유형"
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
                                    modelValue: unref(project).projectAmount,
                                    "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                    label: "금액"
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
                                    modelValue: unref(project).projectCategory,
                                    "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                    label: "분류"
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
                                    modelValue: unref(project).remarks,
                                    "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                    label: "비고"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextarea, {
                                    modelValue: unref(project).jobDescription,
                                    "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                    label: "직무내용",
                                    placeholder: "직무내용을 작성해주세요."
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
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(isDialogBtn)) {
                          _push4(ssrRenderComponent(VBtn, { onClick: modifyProject }, {
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
                        } else {
                          _push4(ssrRenderComponent(VBtn, { onClick: addProject }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 추가 `);
                              } else {
                                return [
                                  createTextVNode(" 추가 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 닫기 `);
                            } else {
                              return [
                                createTextVNode(" 닫기 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            onClick: modifyProject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 수정 ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: addProject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 추가 ")
                            ]),
                            _: 1
                          })),
                          createVNode(VBtn, {
                            onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 닫기 ")
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            unref(isDialogBtn) ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(project).projectID,
                                  "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                  label: "코드",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VCol, {
                              key: 1,
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(project).projectID,
                                  "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                  label: "코드"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(project).projectName,
                                  "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                  label: "프로젝트 명"
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
                                  modelValue: unref(project).startDate,
                                  "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                  label: "시작 날짜",
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
                                  modelValue: unref(project).endDate,
                                  "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                  label: "종료 날짜",
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
                                  modelValue: unref(project).projectType,
                                  "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                  label: "유형"
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
                                  modelValue: unref(project).projectAmount,
                                  "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                  label: "금액"
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
                                  modelValue: unref(project).projectCategory,
                                  "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                  label: "분류"
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
                                  modelValue: unref(project).remarks,
                                  "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                  label: "비고"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextarea, {
                                  modelValue: unref(project).jobDescription,
                                  "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                  label: "직무내용",
                                  placeholder: "직무내용을 작성해주세요."
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
                        unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          onClick: modifyProject
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 수정 ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: addProject
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 추가 ")
                          ]),
                          _: 1
                        })),
                        createVNode(VBtn, {
                          onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 닫기 ")
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
          } else {
            return [
              createVNode(_component_DialogCloseBtn, {
                onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
              }, null, 8, ["onClick"]),
              createVNode(VCard, { title: "프로젝트 추가" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          unref(isDialogBtn) ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(project).projectID,
                                "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                label: "코드",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VCol, {
                            key: 1,
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(project).projectID,
                                "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                label: "코드"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(project).projectName,
                                "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                label: "프로젝트 명"
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
                                modelValue: unref(project).startDate,
                                "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                label: "시작 날짜",
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
                                modelValue: unref(project).endDate,
                                "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                label: "종료 날짜",
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
                                modelValue: unref(project).projectType,
                                "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                label: "유형"
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
                                modelValue: unref(project).projectAmount,
                                "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                label: "금액"
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
                                modelValue: unref(project).projectCategory,
                                "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                label: "분류"
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
                                modelValue: unref(project).remarks,
                                "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                label: "비고"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextarea, {
                                modelValue: unref(project).jobDescription,
                                "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                label: "직무내용",
                                placeholder: "직무내용을 작성해주세요."
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
                      unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        onClick: modifyProject
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 수정 ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VBtn, {
                        key: 1,
                        onClick: addProject
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 추가 ")
                        ]),
                        _: 1
                      })),
                      createVNode(VBtn, {
                        onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 닫기 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hr/base/ProjectModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "project",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const initialProjectArray = ref([]);
    const BaseStore = baseStore();
    const projectList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "프로젝트 코드", key: "projectID", align: "center" },
      { title: "프로젝트 명", key: "projectName", align: "center" },
      { title: "시작 날짜", key: "startDate", align: "center" },
      { title: "종료 날짜", key: "endDate", align: "center" },
      { title: "유형", key: "projectType", align: "center" },
      { title: "금액", key: "projectAmount", align: "center" },
      { title: "분류", key: "projectCategory", align: "center" }
    ];
    const fetchData = async () => {
      await BaseStore.FETCH_PROJECT();
      projectList.value = await BaseStore.projectList;
    };
    const addProjectBtn = () => {
      BaseStore.SET_DIALOG_BTN(false);
      BaseStore.SET_PROJECT_ROW(initialProjectArray.value);
      BaseStore.SET_DIALOG(true);
    };
    const removeProject = async () => {
      for (const key in selectedRows.value) {
        if (selectedRows.value.hasOwnProperty(key)) {
          const value = selectedRows.value[key];
          await BaseStore.REMOVE_PROJECT(value);
        }
      }
      await fetchData();
    };
    const handleRowClick = (row) => {
      BaseStore.SET_DIALOG_BTN(true);
      BaseStore.SET_PROJECT_ROW(row.item);
      BaseStore.SET_DIALOG(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$3;
      _push(`<!--[--><h1 class="mb-6"> 프로젝트 관리 </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          placeholder: "Search",
                          density: "compact"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          "prepend-icon": "tabler-plus",
                          onClick: addProjectBtn
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 프로젝트 추가 `);
                            } else {
                              return [
                                createTextVNode(" 프로젝트 추가 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removeProject
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 프로젝트 삭제 `);
                            } else {
                              return [
                                createTextVNode(" 프로젝트 삭제 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "inline-size": "10rem" } }, [
                            createVNode(_component_AppTextField, {
                              placeholder: "Search",
                              density: "compact"
                            })
                          ]),
                          createVNode(VSpacer),
                          createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                            createVNode(VBtn, {
                              "prepend-icon": "tabler-plus",
                              onClick: addProjectBtn
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 프로젝트 추가 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              "prepend-icon": "tabler-minus",
                              onClick: removeProject
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 프로젝트 삭제 ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    modelValue: unref(selectedRows),
                    "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                    headers,
                    items: unref(projectList),
                    "item-value": "projectID",
                    "show-select": "",
                    "onClick:row": (_3, row) => handleRowClick(row)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "inline-size": "10rem" } }, [
                          createVNode(_component_AppTextField, {
                            placeholder: "Search",
                            density: "compact"
                          })
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                          createVNode(VBtn, {
                            "prepend-icon": "tabler-plus",
                            onClick: addProjectBtn
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 프로젝트 추가 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            "prepend-icon": "tabler-minus",
                            onClick: removeProject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 프로젝트 삭제 ")
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
                      items: unref(projectList),
                      "item-value": "projectID",
                      "show-select": "",
                      "onClick:row": (_3, row) => handleRowClick(row)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "onClick:row"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          placeholder: "Search",
                          density: "compact"
                        })
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                        createVNode(VBtn, {
                          "prepend-icon": "tabler-plus",
                          onClick: addProjectBtn
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 프로젝트 추가 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removeProject
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 프로젝트 삭제 ")
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
                    items: unref(projectList),
                    "item-value": "projectID",
                    "show-select": "",
                    "onClick:row": (_2, row) => handleRowClick(row)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "onClick:row"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { "fetch-data": fetchData }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/base/project.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
