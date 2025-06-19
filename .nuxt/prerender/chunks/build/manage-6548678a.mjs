import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { e as evalStore } from './index-af2be6da.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, b as VBtn } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VSelect } from './VSelect-03a0285c.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
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
import './VCheckboxBtn-aab82c77.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    const store = evalStore();
    const headers = [
      { title: "\uC774\uB984", key: "empName", width: 80 },
      { title: "\uBD80\uC11C", key: "deptName", width: 80 },
      { title: "\uC9C1\uAE09", key: "positionName", width: 80 },
      { title: "\uAD50\uC721", key: "durationOfTraining", width: 80 },
      { title: "\uC790\uACA9\uC99D", key: "numberOfCertificate", width: 100 },
      { title: "\uADFC\uD0DC", key: "numberOfRestDay", width: 80 },
      { title: "\uD734\uAC00", key: "remainingHoliday", width: 80 },
      { title: "\uACB0\uACA9\uC5EC\uBD80", key: "disqualification", width: 110 },
      { title: "\uC7A5\uAE30\uADFC\uC18D", key: "career", width: 110 },
      { title: "\uCD1D \uC810\uC218", key: "score", width: 100 },
      { title: "\uB4F1\uAE09", key: "grade", width: 80 },
      { title: "\uC2B9\uC778\uC0C1\uD0DC", key: "status", width: 110 }
    ];
    const isSuccessFunc = ref(false);
    const selectYear = ref("");
    const selectStatus = ref("");
    const selectedRows = ref([]);
    const statusList = [
      { title: "\uBBF8\uC2B9\uC778", value: "\uBBF8\uC2B9\uC778" },
      { title: "\uC2B9\uC778", value: "\uC2B9\uC778\uC644\uB8CC" },
      { title: "\uBC18\uB824", value: "\uC2B9\uC778\uBC18\uB824" }
    ];
    const evalList = ref([]);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
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
      console.log("\uC2B9\uC778");
      console.log("one", selectedRows.value);
      for (const row of selectedRows.value) {
        const { searchYear, empCode } = row;
        const approvedEval = {
          searchYear,
          empCode,
          status: "\uC2B9\uC778\uC644\uB8CC"
        };
        await store.EDIT_EMP_EVAL(approvedEval);
      }
      searchEvalStatus();
      resetSelection();
    };
    const referEmpEval = async () => {
      console.log("\uBC18\uB824");
      console.log("two", selectedRows.value);
      for (const row of selectedRows.value) {
        const { searchYear, empCode } = row;
        const referEval = {
          searchYear,
          empCode,
          status: "\uC2B9\uC778\uBC18\uB824"
        };
        await store.EDIT_EMP_EVAL(referEval);
      }
      searchEvalStatus();
      resetSelection();
    };
    const deleteEmpEval = async () => {
      console.log("\uC0AD\uC81C");
      console.log("three", selectedRows.value);
      for (const row of selectedRows.value) {
        if (row.status === "\uC2B9\uC778\uC644\uB8CC" || row.status === "\uC2B9\uC778\uBC18\uB824") {
          snackbarColor.value = "error";
          snackbarType.value = "error";
          snackbarText.value = "\uC2B9\uC778\uC644\uB8CC \uBC0F \uC2B9\uC778\uBC18\uB824 \uC0C1\uD0DC\uC778 \uC778\uC0AC\uACE0\uACFC \uC815\uBCF4\uB294 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
          isSuccessFunc.value = true;
          console.log("\uC2B9\uC778\uC644\uB8CC \uBC0F \uC2B9\uC778\uBC18\uB824 \uC0C1\uD0DC\uC778 \uC778\uC0AC\uACE0\uACFC \uC815\uBCF4\uB294 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
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
        console.error("\uC0AD\uC81C \uC911 \uC624\uB958 \uBC1C\uC0DD:", error.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">\uC778\uC0AC\uACE0\uACFC \uAD00\uB9AC</h1>`);
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
                          label: "\uAC80\uC0C9\uB144\uB3C4",
                          items: ["2020", "2021", "2022", "2023", "2024", "2025"],
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: selectYear.value,
                            "onUpdate:modelValue": ($event) => selectYear.value = $event,
                            class: "ml-4",
                            label: "\uAC80\uC0C9\uB144\uB3C4",
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
                          label: "\uC2B9\uC778\uC0C1\uD0DC",
                          items: statusList,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: selectStatus.value,
                            "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                            label: "\uC2B9\uC778\uC0C1\uD0DC",
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
                              _push5(` \uC2B9\uC778\uC0C1\uD0DC \uC870\uD68C `);
                            } else {
                              return [
                                createTextVNode(" \uC2B9\uC778\uC0C1\uD0DC \uC870\uD68C ")
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
                              createTextVNode(" \uC2B9\uC778\uC0C1\uD0DC \uC870\uD68C ")
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
                          label: "\uAC80\uC0C9\uB144\uB3C4",
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
                          label: "\uC2B9\uC778\uC0C1\uD0DC",
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
                            createTextVNode(" \uC2B9\uC778\uC0C1\uD0DC \uC870\uD68C ")
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
                              _push5(` \uC2B9\uC778 `);
                            } else {
                              return [
                                createTextVNode(" \uC2B9\uC778 ")
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
                              _push5(` \uBC18\uB824 `);
                            } else {
                              return [
                                createTextVNode(" \uBC18\uB824 ")
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
                              _push5(` \uC0AD\uC81C `);
                            } else {
                              return [
                                createTextVNode(" \uC0AD\uC81C ")
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
                              createTextVNode(" \uC2B9\uC778 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "secondary",
                            onClick: referEmpEval
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBC18\uB824 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "error",
                            onClick: deleteEmpEval
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC0AD\uC81C ")
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
                            createTextVNode(" \uC2B9\uC778 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "secondary",
                          onClick: referEmpEval
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBC18\uB824 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEmpEval
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC0AD\uC81C ")
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
                        label: "\uAC80\uC0C9\uB144\uB3C4",
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
                        label: "\uC2B9\uC778\uC0C1\uD0DC",
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
                          createTextVNode(" \uC2B9\uC778\uC0C1\uD0DC \uC870\uD68C ")
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
                          createTextVNode(" \uC2B9\uC778 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "secondary",
                        onClick: referEmpEval
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBC18\uB824 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "error",
                        onClick: deleteEmpEval
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC0AD\uC81C ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/empeval/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
