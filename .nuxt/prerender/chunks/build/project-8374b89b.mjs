import { _ as _sfc_main$2 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, withCtx, createTextVNode, createVNode, unref, isRef, computed, createBlock, openBlock, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$3 } from './DialogCloseBtn-438c6daf.mjs';
import { _ as _sfc_main$4 } from './AppTextarea-aa5ab071.mjs';
import { b as baseStore } from './index-77616e20.mjs';
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, l as VDialog } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import './VTextarea-ec6cbc85.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@antfu+utils@0.7.6/node_modules/@antfu/utils/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue3-perfect-scrollbar@1.6.1_postcss@8.5.3/node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.cjs.js';
import '../_/nitro.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';

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
      const _component_DialogCloseBtn = _sfc_main$3;
      const _component_AppTextField = _sfc_main$2;
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
            _push2(ssrRenderComponent(VCard, { title: "\uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00" }, {
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
                                        label: "\uCF54\uB4DC",
                                        disabled: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(project).projectID,
                                          "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                          label: "\uCF54\uB4DC",
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
                                        label: "\uCF54\uB4DC"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(project).projectID,
                                          "onUpdate:modelValue": ($event) => unref(project).projectID = $event,
                                          label: "\uCF54\uB4DC"
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
                                      label: "\uD504\uB85C\uC81D\uD2B8 \uBA85"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectName,
                                        "onUpdate:modelValue": ($event) => unref(project).projectName = $event,
                                        label: "\uD504\uB85C\uC81D\uD2B8 \uBA85"
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
                                      label: "\uC2DC\uC791 \uB0A0\uC9DC",
                                      type: "date"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).startDate,
                                        "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                                        label: "\uC2DC\uC791 \uB0A0\uC9DC",
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
                                      label: "\uC885\uB8CC \uB0A0\uC9DC",
                                      type: "date"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).endDate,
                                        "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                                        label: "\uC885\uB8CC \uB0A0\uC9DC",
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
                                      label: "\uC720\uD615"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectType,
                                        "onUpdate:modelValue": ($event) => unref(project).projectType = $event,
                                        label: "\uC720\uD615"
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
                                      label: "\uAE08\uC561"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectAmount,
                                        "onUpdate:modelValue": ($event) => unref(project).projectAmount = $event,
                                        label: "\uAE08\uC561"
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
                                      label: "\uBD84\uB958"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).projectCategory,
                                        "onUpdate:modelValue": ($event) => unref(project).projectCategory = $event,
                                        label: "\uBD84\uB958"
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
                                      label: "\uBE44\uACE0"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(project).remarks,
                                        "onUpdate:modelValue": ($event) => unref(project).remarks = $event,
                                        label: "\uBE44\uACE0"
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
                                      label: "\uC9C1\uBB34\uB0B4\uC6A9",
                                      placeholder: "\uC9C1\uBB34\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextarea, {
                                        modelValue: unref(project).jobDescription,
                                        "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                        label: "\uC9C1\uBB34\uB0B4\uC6A9",
                                        placeholder: "\uC9C1\uBB34\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
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
                                      label: "\uCF54\uB4DC",
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
                                      label: "\uCF54\uB4DC"
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
                                      label: "\uD504\uB85C\uC81D\uD2B8 \uBA85"
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
                                      label: "\uC2DC\uC791 \uB0A0\uC9DC",
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
                                      label: "\uC885\uB8CC \uB0A0\uC9DC",
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
                                      label: "\uC720\uD615"
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
                                      label: "\uAE08\uC561"
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
                                      label: "\uBD84\uB958"
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
                                      label: "\uBE44\uACE0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextarea, {
                                      modelValue: unref(project).jobDescription,
                                      "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                      label: "\uC9C1\uBB34\uB0B4\uC6A9",
                                      placeholder: "\uC9C1\uBB34\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
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
                                    label: "\uCF54\uB4DC",
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
                                    label: "\uCF54\uB4DC"
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
                                    label: "\uD504\uB85C\uC81D\uD2B8 \uBA85"
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
                                    label: "\uC2DC\uC791 \uB0A0\uC9DC",
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
                                    label: "\uC885\uB8CC \uB0A0\uC9DC",
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
                                    label: "\uC720\uD615"
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
                                    label: "\uAE08\uC561"
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
                                    label: "\uBD84\uB958"
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
                                    label: "\uBE44\uACE0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextarea, {
                                    modelValue: unref(project).jobDescription,
                                    "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                    label: "\uC9C1\uBB34\uB0B4\uC6A9",
                                    placeholder: "\uC9C1\uBB34\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
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
                                _push5(` \uC218\uC815 `);
                              } else {
                                return [
                                  createTextVNode(" \uC218\uC815 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VBtn, { onClick: addProject }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \uCD94\uAC00 `);
                              } else {
                                return [
                                  createTextVNode(" \uCD94\uAC00 ")
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
                              _push5(` \uB2EB\uAE30 `);
                            } else {
                              return [
                                createTextVNode(" \uB2EB\uAE30 ")
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
                              createTextVNode(" \uC218\uC815 ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: addProject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uCD94\uAC00 ")
                            ]),
                            _: 1
                          })),
                          createVNode(VBtn, {
                            onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uB2EB\uAE30 ")
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
                                  label: "\uCF54\uB4DC",
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
                                  label: "\uCF54\uB4DC"
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
                                  label: "\uD504\uB85C\uC81D\uD2B8 \uBA85"
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
                                  label: "\uC2DC\uC791 \uB0A0\uC9DC",
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
                                  label: "\uC885\uB8CC \uB0A0\uC9DC",
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
                                  label: "\uC720\uD615"
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
                                  label: "\uAE08\uC561"
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
                                  label: "\uBD84\uB958"
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
                                  label: "\uBE44\uACE0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextarea, {
                                  modelValue: unref(project).jobDescription,
                                  "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                  label: "\uC9C1\uBB34\uB0B4\uC6A9",
                                  placeholder: "\uC9C1\uBB34\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
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
                            createTextVNode(" \uC218\uC815 ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: addProject
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uCD94\uAC00 ")
                          ]),
                          _: 1
                        })),
                        createVNode(VBtn, {
                          onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB2EB\uAE30 ")
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
              createVNode(VCard, { title: "\uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00" }, {
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
                                label: "\uCF54\uB4DC",
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
                                label: "\uCF54\uB4DC"
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
                                label: "\uD504\uB85C\uC81D\uD2B8 \uBA85"
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
                                label: "\uC2DC\uC791 \uB0A0\uC9DC",
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
                                label: "\uC885\uB8CC \uB0A0\uC9DC",
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
                                label: "\uC720\uD615"
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
                                label: "\uAE08\uC561"
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
                                label: "\uBD84\uB958"
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
                                label: "\uBE44\uACE0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextarea, {
                                modelValue: unref(project).jobDescription,
                                "onUpdate:modelValue": ($event) => unref(project).jobDescription = $event,
                                label: "\uC9C1\uBB34\uB0B4\uC6A9",
                                placeholder: "\uC9C1\uBB34\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
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
                          createTextVNode(" \uC218\uC815 ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VBtn, {
                        key: 1,
                        onClick: addProject
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCD94\uAC00 ")
                        ]),
                        _: 1
                      })),
                      createVNode(VBtn, {
                        onClick: ($event) => unref(BaseStore).SET_DIALOG(false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB2EB\uAE30 ")
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
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const initialProjectArray = ref([]);
    const BaseStore = baseStore();
    const projectList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "\uD504\uB85C\uC81D\uD2B8 \uCF54\uB4DC", key: "projectID", align: "center" },
      { title: "\uD504\uB85C\uC81D\uD2B8 \uBA85", key: "projectName", align: "center" },
      { title: "\uC2DC\uC791 \uB0A0\uC9DC", key: "startDate", align: "center" },
      { title: "\uC885\uB8CC \uB0A0\uC9DC", key: "endDate", align: "center" },
      { title: "\uC720\uD615", key: "projectType", align: "center" },
      { title: "\uAE08\uC561", key: "projectAmount", align: "center" },
      { title: "\uBD84\uB958", key: "projectCategory", align: "center" }
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
      const _component_AppTextField = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6"> \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC </h1>`);
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
                              _push5(` \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00 `);
                            } else {
                              return [
                                createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00 ")
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
                              _push5(` \uD504\uB85C\uC81D\uD2B8 \uC0AD\uC81C `);
                            } else {
                              return [
                                createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uC0AD\uC81C ")
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
                                createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              "prepend-icon": "tabler-minus",
                              onClick: removeProject
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uC0AD\uC81C ")
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
                              createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            "prepend-icon": "tabler-minus",
                            onClick: removeProject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uC0AD\uC81C ")
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
                            createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removeProject
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD504\uB85C\uC81D\uD2B8 \uC0AD\uC81C ")
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

export { _sfc_main as default };
