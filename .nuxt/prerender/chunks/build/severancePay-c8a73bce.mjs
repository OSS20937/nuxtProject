import { _ as _sfc_main$1 } from './AppSelect-04d0f8a2.mjs';
import { _ as _sfc_main$2 } from './DialogCloseBtn-438c6daf.mjs';
import { _ as _sfc_main$3 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, createTextVNode, mergeProps, toDisplayString, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { p as paginationMeta, V as VPagination } from './VPagination-fe9c4821.mjs';
import { s as salaryStore } from './index-cfe0baa7.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, f as VCardText, m as VSpacer, l as VDialog, b as VBtn } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "severancePay",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const options = ref({
      page: 1,
      itemsPerPage: 5,
      sortBy: [""],
      sortDesc: [false]
    });
    const isSuccessFunc = ref(false);
    const isaddfaild = ref(false);
    const selectedEmp = ref("");
    const selectedDate = ref("");
    const selectedWork = computed(() => {
      const hireDate = new Date(selectedEmp.value.hireDate);
      const retireDate = new Date(selectedDate.value);
      return Math.abs(
        (retireDate.getTime() - hireDate.getTime()) / (1e3 * 60 * 60 * 24)
      );
    });
    const selectedDivision = ref("");
    const selectedRows = ref([]);
    const isDialogVisible = ref(false);
    const severanceList = ref([]);
    const allEmpList = ref([]);
    ref([]);
    const dayData = ref([]);
    const division = [{ title: "\uD1F4\uC9C1\uAE08", value: "\uD1F4\uC9C1\uAE08" }];
    const headers = [
      { title: "\uC2E0\uCCAD\uC77C", key: "applyDate", align: "center" },
      { title: "\uAD6C\uBD84", key: "severanceType", align: "center" },
      { title: "\uC0AC\uC6D0\uBA85", key: "empName", align: "center" },
      { title: "\uADFC\uC18D\uAE30\uAC04", key: "workDays", align: "center" },
      { title: "\uC785\uC0AC\uC77C", key: "hireDate", align: "center" },
      { title: "\uD1F4\uC0AC\uC77C", key: "retireDate", align: "center" },
      { title: "\uCC28\uC778\uC9C0\uAE08\uC561", key: "realSeverancePay", align: "center" }
    ];
    const fetchData = async () => {
      const date = /* @__PURE__ */ new Date();
      dayData.value = {
        firstDay: `${date.getFullYear()}-1-1`,
        today: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      };
      await salaryStore().FIND_SEVERANCE_PAY(dayData.value);
      severanceList.value = salaryStore().severanceList;
      console.log(dayData.value);
      console.log(severanceList.value);
    };
    const addSeverancePay = async () => {
      const addSeverancePayData = {
        workDays: selectedWork.value,
        hireDate: new Date(selectedEmp.value.hireDate),
        retireDate: new Date(selectedDate.value),
        empCode: selectedEmp.value.empCode,
        severanceType: selectedDivision.value,
        applyDate: new Date(dayData.value.today),
        firstDay: new Date(dayData.value.firstDay),
        today: new Date(dayData.value.today)
      };
      console.log(addSeverancePayData);
      await salaryStore().ADD_SEVERANCE_PAY(addSeverancePayData);
      await fetchData();
      isDialogVisible.value = false;
      if (selectedWork.value < 365)
        isaddfaild.value = true;
      else
        isSuccessFunc.value = true;
    };
    const deletebtn = async () => {
      await salaryStore().DELETE_SEVERANCE(selectedRows.value[0]);
      await fetchData();
      isSuccessFunc.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$1;
      const _component_DialogCloseBtn = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      _push(`<!--[--><h1 class="mb-6">\uD1F4\uC9C1\uAE08 \uB4F1\uB85D</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-3 d-flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppSelect, {
                    "model-value": unref(options).itemsPerPage,
                    items: [
                      { value: 5, title: "5" },
                      { value: 10, title: "10" },
                      { value: 25, title: "25" },
                      { value: 50, title: "50" },
                      { value: -1, title: "All" }
                    ],
                    style: { "inline-size": "6.25rem" },
                    "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: unref(isDialogVisible),
                    "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
                    "max-width": "600"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD1F4\uC9C1\uAE08 \uB4F1\uB85D `);
                            } else {
                              return [
                                createTextVNode(" \uD1F4\uC9C1\uAE08 \uB4F1\uB85D ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                            default: withCtx(() => [
                              createTextVNode(" \uD1F4\uC9C1\uAE08 \uB4F1\uB85D ")
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                          onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCard, { title: "\uD1F4\uC9C1\uAE08 \uB4F1\uB85D" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppSelect, {
                                                  modelValue: unref(selectedEmp),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                  items: unref(allEmpList),
                                                  label: "\uC9C1\uC6D0\uBA85"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: unref(selectedEmp),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                    items: unref(allEmpList),
                                                    label: "\uC9C1\uC6D0\uBA85"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppTextField, {
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  label: "\uD1F4\uC9C1\uC77C",
                                                  type: "date"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: unref(selectedDate),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                    label: "\uD1F4\uC9C1\uC77C",
                                                    type: "date"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppTextField, {
                                                  modelValue: unref(selectedWork),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                  label: "\uC7AC\uC9C1\uC77C\uC218",
                                                  disabled: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: unref(selectedWork),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                    label: "\uC7AC\uC9C1\uC77C\uC218",
                                                    disabled: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppSelect, {
                                                  modelValue: unref(selectedDivision),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                  items: division,
                                                  label: "\uAD6C\uBD84"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: unref(selectedDivision),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                    items: division,
                                                    label: "\uAD6C\uBD84"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: unref(selectedEmp),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                  items: unref(allEmpList),
                                                  label: "\uC9C1\uC6D0\uBA85"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  label: "\uD1F4\uC9C1\uC77C",
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
                                                  modelValue: unref(selectedWork),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                  label: "\uC7AC\uC9C1\uC77C\uC218",
                                                  disabled: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: unref(selectedDivision),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                  items: division,
                                                  label: "\uAD6C\uBD84"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: unref(selectedEmp),
                                                "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                                items: unref(allEmpList),
                                                label: "\uC9C1\uC6D0\uBA85"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(selectedDate),
                                                "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                label: "\uD1F4\uC9C1\uC77C",
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
                                                modelValue: unref(selectedWork),
                                                "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                                label: "\uC7AC\uC9C1\uC77C\uC218",
                                                disabled: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: unref(selectedDivision),
                                                "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                                items: division,
                                                label: "\uAD6C\uBD84"
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, { onClick: addSeverancePay }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \uB4F1\uB85D `);
                                        } else {
                                          return [
                                            createTextVNode(" \uB4F1\uB85D ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, { onClick: addSeverancePay }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uB4F1\uB85D ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(selectedEmp),
                                              "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                              items: unref(allEmpList),
                                              label: "\uC9C1\uC6D0\uBA85"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(selectedDate),
                                              "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                              label: "\uD1F4\uC9C1\uC77C",
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
                                              modelValue: unref(selectedWork),
                                              "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                              label: "\uC7AC\uC9C1\uC77C\uC218",
                                              disabled: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(selectedDivision),
                                              "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                              items: division,
                                              label: "\uAD6C\uBD84"
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
                                    createVNode(VBtn, { onClick: addSeverancePay }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uB4F1\uB85D ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogCloseBtn, {
                            onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                          }, null, 8, ["onClick"]),
                          createVNode(VCard, { title: "\uD1F4\uC9C1\uAE08 \uB4F1\uB85D" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedEmp),
                                            "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                            items: unref(allEmpList),
                                            label: "\uC9C1\uC6D0\uBA85"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(selectedDate),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                            label: "\uD1F4\uC9C1\uC77C",
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
                                            modelValue: unref(selectedWork),
                                            "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                            label: "\uC7AC\uC9C1\uC77C\uC218",
                                            disabled: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedDivision),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                            items: division,
                                            label: "\uAD6C\uBD84"
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
                                  createVNode(VBtn, { onClick: addSeverancePay }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uB4F1\uB85D ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "tabler-minus",
                    onClick: deletebtn
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uD1F4\uC9C1\uAE08 \uC0AD\uC81C `);
                      } else {
                        return [
                          createTextVNode(" \uD1F4\uC9C1\uAE08 \uC0AD\uC81C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-3 d-flex gap-3" }, [
                      createVNode(_component_AppSelect, {
                        "model-value": unref(options).itemsPerPage,
                        items: [
                          { value: 5, title: "5" },
                          { value: 10, title: "10" },
                          { value: 25, title: "25" },
                          { value: 50, title: "50" },
                          { value: -1, title: "All" }
                        ],
                        style: { "inline-size": "6.25rem" },
                        "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VDialog, {
                        modelValue: unref(isDialogVisible),
                        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
                        "max-width": "600"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                            default: withCtx(() => [
                              createTextVNode(" \uD1F4\uC9C1\uAE08 \uB4F1\uB85D ")
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_DialogCloseBtn, {
                            onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                          }, null, 8, ["onClick"]),
                          createVNode(VCard, { title: "\uD1F4\uC9C1\uAE08 \uB4F1\uB85D" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedEmp),
                                            "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                            items: unref(allEmpList),
                                            label: "\uC9C1\uC6D0\uBA85"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(selectedDate),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                            label: "\uD1F4\uC9C1\uC77C",
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
                                            modelValue: unref(selectedWork),
                                            "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                            label: "\uC7AC\uC9C1\uC77C\uC218",
                                            disabled: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(selectedDivision),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                            items: division,
                                            label: "\uAD6C\uBD84"
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
                                  createVNode(VBtn, { onClick: addSeverancePay }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uB4F1\uB85D ")
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
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, {
                        "prepend-icon": "tabler-minus",
                        onClick: deletebtn
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD1F4\uC9C1\uAE08 \uC0AD\uC81C ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              modelValue: unref(selectedRows),
              "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
              headers,
              items: unref(severanceList),
              "items-per-page": unref(options).itemsPerPage,
              page: unref(options).page,
              options: unref(options),
              "item-value": "empCode",
              "show-select": "",
              "singel-select": ""
            }, {
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"${_scopeId3}><p class="text-sm text-disabled mb-0"${_scopeId3}>${ssrInterpolate(unref(paginationMeta)(
                          { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                          unref(severanceList).length
                        ))}</p>`);
                        _push4(ssrRenderComponent(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                            createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                              { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                              unref(severanceList).length
                            )), 1),
                            createVNode(VPagination, {
                              modelValue: unref(options).page,
                              "onUpdate:modelValue": ($event) => unref(options).page = $event,
                              "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                              length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "pt-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                          createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                            { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                            unref(severanceList).length
                          )), 1),
                          createVNode(VPagination, {
                            modelValue: unref(options).page,
                            "onUpdate:modelValue": ($event) => unref(options).page = $event,
                            "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                            length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSnackbar, {
              modelValue: unref(isaddfaild),
              "onUpdate:modelValue": ($event) => isRef(isaddfaild) ? isaddfaild.value = $event : null,
              location: "top",
              timeout: 3e3,
              color: "warning"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAlert, {
                    density: "compact",
                    type: "warning",
                    title: "warning!",
                    text: "\uADFC\uC18D\uC77C\uC218\uAC00 1\uB144\uC774 \uC548\uB429\uB2C8\uB2E4."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAlert, {
                      density: "compact",
                      type: "warning",
                      title: "warning!",
                      text: "\uADFC\uC18D\uC77C\uC218\uAC00 1\uB144\uC774 \uC548\uB429\uB2C8\uB2E4."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSnackbar, {
              modelValue: unref(isSuccessFunc),
              "onUpdate:modelValue": ($event) => isRef(isSuccessFunc) ? isSuccessFunc.value = $event : null,
              location: "top",
              timeout: 3e3,
              color: "success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAlert, {
                    density: "compact",
                    type: "success",
                    title: "success!",
                    text: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAlert, {
                      density: "compact",
                      type: "success",
                      title: "success!",
                      text: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "me-3 d-flex gap-3" }, [
                    createVNode(_component_AppSelect, {
                      "model-value": unref(options).itemsPerPage,
                      items: [
                        { value: 5, title: "5" },
                        { value: 10, title: "10" },
                        { value: 25, title: "25" },
                        { value: 50, title: "50" },
                        { value: -1, title: "All" }
                      ],
                      style: { "inline-size": "6.25rem" },
                      "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VDialog, {
                      modelValue: unref(isDialogVisible),
                      "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
                      "max-width": "600"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, { "prepend-icon": "tabler-plus" }), {
                          default: withCtx(() => [
                            createTextVNode(" \uD1F4\uC9C1\uAE08 \uB4F1\uB85D ")
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_DialogCloseBtn, {
                          onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
                        }, null, 8, ["onClick"]),
                        createVNode(VCard, { title: "\uD1F4\uC9C1\uAE08 \uB4F1\uB85D" }, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(selectedEmp),
                                          "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                          items: unref(allEmpList),
                                          label: "\uC9C1\uC6D0\uBA85"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(selectedDate),
                                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                          label: "\uD1F4\uC9C1\uC77C",
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
                                          modelValue: unref(selectedWork),
                                          "onUpdate:modelValue": ($event) => isRef(selectedWork) ? selectedWork.value = $event : null,
                                          label: "\uC7AC\uC9C1\uC77C\uC218",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(selectedDivision),
                                          "onUpdate:modelValue": ($event) => isRef(selectedDivision) ? selectedDivision.value = $event : null,
                                          items: division,
                                          label: "\uAD6C\uBD84"
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
                                createVNode(VBtn, { onClick: addSeverancePay }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB4F1\uB85D ")
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
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      "prepend-icon": "tabler-minus",
                      onClick: deletebtn
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uD1F4\uC9C1\uAE08 \uC0AD\uC81C ")
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
                items: unref(severanceList),
                "items-per-page": unref(options).itemsPerPage,
                page: unref(options).page,
                options: unref(options),
                "item-value": "empCode",
                "show-select": "",
                "singel-select": ""
              }, {
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                        createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                          { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                          unref(severanceList).length
                        )), 1),
                        createVNode(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(severanceList).length / unref(options).itemsPerPage)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items", "items-per-page", "page", "options"]),
              createVNode(VSnackbar, {
                modelValue: unref(isaddfaild),
                "onUpdate:modelValue": ($event) => isRef(isaddfaild) ? isaddfaild.value = $event : null,
                location: "top",
                timeout: 3e3,
                color: "warning"
              }, {
                default: withCtx(() => [
                  createVNode(VAlert, {
                    density: "compact",
                    type: "warning",
                    title: "warning!",
                    text: "\uADFC\uC18D\uC77C\uC218\uAC00 1\uB144\uC774 \uC548\uB429\uB2C8\uB2E4."
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VSnackbar, {
                modelValue: unref(isSuccessFunc),
                "onUpdate:modelValue": ($event) => isRef(isSuccessFunc) ? isSuccessFunc.value = $event : null,
                location: "top",
                timeout: 3e3,
                color: "success"
              }, {
                default: withCtx(() => [
                  createVNode(VAlert, {
                    density: "compact",
                    type: "success",
                    title: "success!",
                    text: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/salreg/severancePay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
