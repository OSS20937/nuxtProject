import { _ as _sfc_main$1 } from './AppTextField-dee429aa.mjs';
import { _ as _sfc_main$2 } from './AppDateTimePicker-c59f48ad.mjs';
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { b as baseStore } from './index-77616e20.mjs';
import { d as dailyLaborStore } from './index-183b4e75.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, i as VIcon } from './server.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import '../virtual/_commonjsHelpers.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/flatpickr@4.6.13/node_modules/flatpickr/dist/flatpickr.js';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const isSuccessFunc = ref(false);
    baseStore();
    const DailyLaborStore = dailyLaborStore();
    ref([]);
    const dailyLaborEmpList = ref([]);
    const selectedRows = ref([]);
    const search = ref("");
    const empHeaders = [
      { title: "\uC0AC\uBC88", key: "employeeId", align: "center" },
      { title: "\uC9C1\uC6D0\uBA85", key: "employeeName", align: "center" },
      { title: "\uB0B4/\uC678\uAD6D\uC778", key: "nationality", align: "center" },
      { title: "\uD504\uB85C\uC81D\uD2B8", key: "project", align: "center" },
      { title: "\uBD80\uC11C", key: "department", align: "center" }
    ];
    const workHeaders = [
      { title: "\uC0AC\uBC88", key: "employeeId", align: "center" },
      { title: "\uC9C1\uC6D0\uBA85", key: "employeeName", align: "center" },
      { title: "\uB0B4/\uC678\uAD6D\uC778", key: "nationality", align: "center" },
      { title: "\uD504\uB85C\uC81D\uD2B8", key: "project", align: "center" },
      { title: "\uADFC\uBB34\uB0A0\uC9DC", key: "workDate", align: "center" },
      { title: "\uADFC\uBB34\uC2DC\uAC04", key: "workStartTime", align: "center" }
    ];
    const filteredEmpList = computed(() => {
      return dailyLaborEmpList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    const gotowork = async () => {
      console.log(selectedRows.value);
      const attendDataList = [];
      selectedRows.value.forEach((element) => {
        const attendData = {
          employeeId: element.employeeId,
          employeeName: element.employeeName,
          project: element.project,
          workDate: element.workDate,
          workStartTime: element.workTime,
          workType: element.normalPayType,
          deadlineRequest: "N"
        };
        console.log(element);
        attendDataList.push(attendData);
      });
      await DailyLaborStore.INSERT_ATTEND(attendDataList);
      selectedRows.value = [];
      isSuccessFunc.value = true;
    };
    const leavework = async () => {
      console.log(selectedRows.value);
      const attendDataList = [];
      selectedRows.value.forEach((element) => {
        const attendData = {
          employeeId: element.employeeId,
          workDate: element.workDate,
          workEndTime: element.workTime
        };
        attendDataList.push(attendData);
      });
      console.log(attendDataList);
      await DailyLaborStore.UPDATE_WORK_ATTEND(attendDataList);
      selectedRows.value = [];
      isSuccessFunc.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      const _component_AppDateTimePicker = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6"> \uC77C\uC6A9\uADFC\uB85C \uADFC\uD0DC\uB4F1\uB85D </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}><div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    density: "compact",
                    placeholder: "\uAC80\uC0C9",
                    "append-inner-icon": "tabler-search",
                    "single-line": "",
                    "hide-details": "",
                    dense: "",
                    outlined: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          density: "compact",
                          placeholder: "\uAC80\uC0C9",
                          "append-inner-icon": "tabler-search",
                          "single-line": "",
                          "hide-details": "",
                          dense: "",
                          outlined: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
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
              headers: empHeaders,
              items: unref(filteredEmpList),
              "items-per-page": 5,
              "footer-props": {
                "items-per-page-options": [5, 10, 20],
                "show-current-page": true,
                "show-first-last-page": true
              },
              "show-select": "",
              "item-value": "employeeId",
              "return-object": ""
            }, {
              "item.deptName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.deptName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.deptName), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode("div", { style: { "inline-size": "10rem" } }, [
                      createVNode(_component_AppTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        density: "compact",
                        placeholder: "\uAC80\uC0C9",
                        "append-inner-icon": "tabler-search",
                        "single-line": "",
                        "hide-details": "",
                        dense: "",
                        outlined: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                modelValue: unref(selectedRows),
                "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                headers: empHeaders,
                items: unref(filteredEmpList),
                "items-per-page": 5,
                "footer-props": {
                  "items-per-page-options": [5, 10, 20],
                  "show-current-page": true,
                  "show-first-last-page": true
                },
                "show-select": "",
                "item-value": "employeeId",
                "return-object": ""
              }, {
                "item.deptName": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.deptName), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><br>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: gotowork }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }, null, _parent4, _scopeId3));
                        _push4(`\uCD9C\uADFC `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("\uCD9C\uADFC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, { onClick: leavework }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }, null, _parent4, _scopeId3));
                        _push4(`\uD1F4\uADFC `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("\uD1F4\uADFC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: gotowork }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("\uCD9C\uADFC ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { onClick: leavework }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("\uD1F4\uADFC ")
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
              headers: workHeaders,
              items: unref(selectedRows)
            }, {
              "item.workDate": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: item.workDate,
                                "onUpdate:modelValue": ($event) => item.workDate = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: item.workDate,
                                  "onUpdate:modelValue": ($event) => item.workDate = $event,
                                  "show-adjacent-months": "",
                                  "show-decade-navs": "",
                                  "button-only": "",
                                  right: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: item.workDate,
                                "onUpdate:modelValue": ($event) => item.workDate = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: item.workDate,
                              "onUpdate:modelValue": ($event) => item.workDate = $event,
                              "show-adjacent-months": "",
                              "show-decade-navs": "",
                              "button-only": "",
                              right: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "item.workStartTime": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                modelValue: item.workTime,
                                "onUpdate:modelValue": ($event) => item.workTime = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: "",
                                config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppDateTimePicker, {
                                  modelValue: item.workTime,
                                  "onUpdate:modelValue": ($event) => item.workTime = $event,
                                  "show-adjacent-months": "",
                                  "show-decade-navs": "",
                                  "button-only": "",
                                  right: "",
                                  config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: item.workTime,
                                "onUpdate:modelValue": ($event) => item.workTime = $event,
                                "show-adjacent-months": "",
                                "show-decade-navs": "",
                                "button-only": "",
                                right: "",
                                config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: item.workTime,
                              "onUpdate:modelValue": ($event) => item.workTime = $event,
                              "show-adjacent-months": "",
                              "show-decade-navs": "",
                              "button-only": "",
                              right: "",
                              config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: gotowork }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }),
                        createTextVNode("\uCD9C\uADFC ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, { onClick: leavework }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }),
                        createTextVNode("\uD1F4\uADFC ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                headers: workHeaders,
                items: unref(selectedRows)
              }, {
                "item.workDate": withCtx(({ item }) => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: item.workDate,
                            "onUpdate:modelValue": ($event) => item.workDate = $event,
                            "show-adjacent-months": "",
                            "show-decade-navs": "",
                            "button-only": "",
                            right: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "item.workStartTime": withCtx(({ item }) => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: item.workTime,
                            "onUpdate:modelValue": ($event) => item.workTime = $event,
                            "show-adjacent-months": "",
                            "show-decade-navs": "",
                            "button-only": "",
                            right: "",
                            config: { enableTime: true, dateFormat: "Y-m-d H:i" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["items"])
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
              text: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
            }, null, _parent2, _scopeId));
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailyattend/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
