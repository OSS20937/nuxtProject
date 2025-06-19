import { defineComponent, ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import { V as VCard, f as VCardText, b as VBtn, l as VDialog, g as VCardTitle, e as VCardActions } from './server.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VForm } from './VForm-c404d2e6.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VTextarea } from './VTextarea-ec6cbc85.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
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
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const defaultEduHistoryText = '\uD615\uC2DD\uC740 "YYYYMMDD \uC774\uC218\uC644\uB8CC"\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. ex)20250416 \uC774\uC218\uC644\uB8CC';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const eduList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "\uAD50\uC721\uCF54\uB4DC", key: "eduCode" },
      { title: "\uAD50\uC721\uBA85", key: "eduName" },
      { title: "\uC9C1\uC6D0\uCF54\uB4DC", key: "empCode" },
      { title: "\uC9C1\uC6D0\uBA85", key: "empName" },
      { title: "\uBD80\uC11C\uCF54\uB4DC", key: "deptCode" },
      { title: "\uBD80\uC11C\uBA85", key: "deptName" },
      { title: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED", key: "eduHistory" },
      { title: "\uC2B9\uC778\uC0C1\uD0DC", key: "status" },
      { title: "\uB144\uB3C4", key: "searchYear" }
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
      eduHistory: '\uD615\uC2DD\uC740 "YYYYMMDD \uC774\uC218\uC644\uB8CC"\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. ex)20250416 \uC774\uC218\uC644\uB8CC',
      searchYear: "",
      status: ""
    });
    const isSuccessFunc = ref(false);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
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
      const hasApproved = selectedRows.value.some((row) => row.status === "\uC2B9\uC778\uC644\uB8CC");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "\u2705 \uC774\uBBF8 \uC2B9\uC778\uC644\uB8CC\uB41C \uD56D\uBAA9\uC785\uB2C8\uB2E4.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      if (selectedRows.value.length !== 1) {
        alert("\uC218\uC815\uC740 \uD558\uB098\uB9CC \uC120\uD0DD\uD574\uC8FC\uC138\uC694!");
        return;
      }
      editForm.value = { ...selectedRows.value[0] };
      if (!editForm.value.eduHistory) {
        editForm.value.eduHistory = '\uD615\uC2DD\uC740 "YYYYMMDD \uC774\uC218\uC644\uB8CC"\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. ex)20250416 \uC774\uC218\uC644\uB8CC';
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
        console.error("\uC218\uC815 \uC2E4\uD328:", error);
      }
    };
    const cancelApplication = async () => {
      const hasApproved = selectedRows.value.some((row) => row.status === "\uC2B9\uC778\uC644\uB8CC");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "\u2705 \uC774\uBBF8 \uC2B9\uC778\uC644\uB8CC\uB41C \uD56D\uBAA9\uC785\uB2C8\uB2E4.";
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
      _push(`<!--[--><h1 class="mb-4">\u{1F4CB} \uBBF8\uC2B9\uC778 \uAD50\uC721 \uC2E0\uCCAD \uB0B4\uC5ED</h1>`);
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
                        _push4(`\uC218\uC815`);
                      } else {
                        return [
                          createTextVNode("\uC218\uC815")
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
                        _push4(`\uC2E0\uCCAD\uCDE8\uC18C`);
                      } else {
                        return [
                          createTextVNode("\uC2E0\uCCAD\uCDE8\uC18C")
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
                        createTextVNode("\uC218\uC815")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      onClick: cancelApplication
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\uC2E0\uCCAD\uCDE8\uC18C")
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
                      createTextVNode("\uC218\uC815")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "error",
                    onClick: cancelApplication
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\uC2E0\uCCAD\uCDE8\uC18C")
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
                        _push4(`\uAD50\uC721 \uC2E0\uCCAD \uC218\uC815`);
                      } else {
                        return [
                          createTextVNode("\uAD50\uC721 \uC2E0\uCCAD \uC218\uC815")
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
                                label: "\uAD50\uC721\uBA85",
                                modelValue: editForm.value.eduName,
                                "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, {
                                label: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED",
                                modelValue: editForm.value.eduHistory,
                                "onUpdate:modelValue": ($event) => editForm.value.eduHistory = $event,
                                onFocus: handleEduHistoryFocus,
                                onBlur: handleEduHistoryBlur
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "\uAD50\uC721\uBA85",
                                  modelValue: editForm.value.eduName,
                                  "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextarea, {
                                  label: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED",
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
                                label: "\uAD50\uC721\uBA85",
                                modelValue: editForm.value.eduName,
                                "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextarea, {
                                label: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED",
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
                              _push5(`\uCDE8\uC18C`);
                            } else {
                              return [
                                createTextVNode("\uCDE8\uC18C")
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
                              _push5(`\uC800\uC7A5`);
                            } else {
                              return [
                                createTextVNode("\uC800\uC7A5")
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
                              createTextVNode("\uCDE8\uC18C")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: saveUpdate
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uC800\uC7A5")
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
                        createTextVNode("\uAD50\uC721 \uC2E0\uCCAD \uC218\uC815")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "\uAD50\uC721\uBA85",
                              modelValue: editForm.value.eduName,
                              "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextarea, {
                              label: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED",
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
                            createTextVNode("\uCDE8\uC18C")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: saveUpdate
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uC800\uC7A5")
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
                      createTextVNode("\uAD50\uC721 \uC2E0\uCCAD \uC218\uC815")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "\uAD50\uC721\uBA85",
                            modelValue: editForm.value.eduName,
                            "onUpdate:modelValue": ($event) => editForm.value.eduName = $event,
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            label: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED",
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
                          createTextVNode("\uCDE8\uC18C")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: saveUpdate
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uC800\uC7A5")
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
              title: "\uC54C\uB9BC",
              text: snackbarText.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: snackbarType.value,
                title: "\uC54C\uB9BC",
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

export { _sfc_main as default };
