import { defineComponent, ref, withCtx, unref, isRef, createTextVNode, createVNode, watch, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$3 } from './AppSelect-04d0f8a2.mjs';
import { V as VCard, f as VCardText, n as attenStore, b as VBtn, i as VIcon } from './server.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VTabs, a as VTab } from './VTabs-78beaebe.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-258f0110.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "annual",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedSearchType = ref("");
    const selectedDeptCode = ref("");
    const selectedEmpCode = ref("");
    ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const selectedMonth = ref("");
    (/* @__PURE__ */ new Date()).getFullYear();
    const monthsProps = ref([]);
    const annual_vacation_mgt_list = ref([]);
    const selectedRows = ref([]);
    const updatedRows = ref({});
    ref({});
    const annualProps = [
      { title: "\uC0AC\uC6D0\uBA85", key: "empName" },
      { title: "\uC801\uC6A9\uB144\uC6D4", key: "applyYearMonth" },
      { title: "\uC5F0\uCC28\uC0AC\uC6A9\uAC1C\uC218", key: "monthlyLeave" },
      { title: "\uB0A8\uC740\uC5F0\uCC28", key: "remainingHoliday" },
      { title: "\uB9C8\uAC10\uC5EC\uBD80", key: "finalizeStatus" }
    ];
    watch(selectedDeptCode, async () => {
      await fetchEmpList();
    });
    const fetchEmpList = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDeptCode.value);
      emp_list_by_dept.value = Object.values(attenStore().empList).map(
        (item) => {
          return { title: item.empName, value: item.empCode };
        }
      );
    };
    const fetchAnnualVactionMgtList = async () => {
      await attenStore().SEARCH_ANNUAL_VACTION_MGTLIST({
        empCode: selectedEmpCode.value,
        year: selectedMonth.value
      });
      annual_vacation_mgt_list.value = attenStore().annualVacationMgtList;
    };
    const searchAnnual = () => {
      fetchAnnualVactionMgtList();
    };
    const updateStatus = async (title) => {
      console.log("\uD734\uAC00 \uC2B9\uC778 \uD074\uB9AD");
      console.log("selectedRows", selectedRows.value);
      updatedRows.value = selectedRows.value.map((row) => {
        return { ...row };
      });
      console.log("updatedRows", updatedRows.value);
      await attenStore().UPDATE_VACATION_APPLYSTATUS(updatedRows.value).then((res) => console.log(res.data)).catch((e) => console.error(e));
      switch (title) {
        case "\uD734\uAC00 \uC2B9\uC778":
          console.log("\uD734\uAC00 \uC2B9\uC778 \uD074\uB9AD");
          alert("\uC2B9\uC778 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
          break;
        case "\uC2B9\uC778 \uCDE8\uC18C":
          console.log("\uC2B9\uC778 \uCDE8\uC18C \uD074\uB9AD");
          alert("\uC2B9\uC778\uCDE8\uC18C \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
          break;
      }
      selectedRows.value = [];
      fetchAnnualVactionMgtList();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$3;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3",
                    "offset-md": "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6 ml-9",
                          height: "43",
                          width: "200",
                          onClick: searchAnnual
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }, null, _parent5, _scopeId4));
                              _push5(`\uC5F0\uCC28\uC2E0\uCCAD \uB0B4\uC5ED\uC870\uD68C `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-search"
                                }),
                                createTextVNode("\uC5F0\uCC28\uC2E0\uCCAD \uB0B4\uC5ED\uC870\uD68C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6 ml-9",
                            height: "43",
                            width: "200",
                            onClick: searchAnnual
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }),
                              createTextVNode("\uC5F0\uCC28\uC2E0\uCCAD \uB0B4\uC5ED\uC870\uD68C ")
                            ]),
                            _: 1
                          })
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
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("\uD734\uAC00 \uC2B9\uC778")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-square-key"
                              }, null, _parent5, _scopeId4));
                              _push5(`\uD734\uAC00 \uC2B9\uC778 `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-square-key"
                                }),
                                createTextVNode("\uD734\uAC00 \uC2B9\uC778 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6",
                            height: "43",
                            width: "150",
                            onClick: ($event) => updateStatus("\uD734\uAC00 \uC2B9\uC778")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-square-key"
                              }),
                              createTextVNode("\uD734\uAC00 \uC2B9\uC778 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("\uC2B9\uC778 \uCDE8\uC18C")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-square-x"
                              }, null, _parent5, _scopeId4));
                              _push5(`\uC2B9\uC778 \uCDE8\uC18C `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-square-x"
                                }),
                                createTextVNode("\uC2B9\uC778 \uCDE8\uC18C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6",
                            height: "43",
                            width: "150",
                            onClick: ($event) => updateStatus("\uC2B9\uC778 \uCDE8\uC18C")
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-square-x"
                              }),
                              createTextVNode("\uC2B9\uC778 \uCDE8\uC18C ")
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "3",
                      "offset-md": "5"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6 ml-9",
                          height: "43",
                          width: "200",
                          onClick: searchAnnual
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-search"
                            }),
                            createTextVNode("\uC5F0\uCC28\uC2E0\uCCAD \uB0B4\uC5ED\uC870\uD68C ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("\uD734\uAC00 \uC2B9\uC778")
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-square-key"
                            }),
                            createTextVNode("\uD734\uAC00 \uC2B9\uC778 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mt-6",
                          height: "43",
                          width: "150",
                          onClick: ($event) => updateStatus("\uC2B9\uC778 \uCDE8\uC18C")
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-square-x"
                            }),
                            createTextVNode("\uC2B9\uC778 \uCDE8\uC18C ")
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
            _push2(ssrRenderComponent(VRow, { class: "mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                          items: unref(dept_list),
                          label: "\uBD80\uC11C\uC870\uD68C",
                          placeholder: "\uBD80\uC11C\uC870\uD68C",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedDeptCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                            items: unref(dept_list),
                            label: "\uBD80\uC11C\uC870\uD68C",
                            placeholder: "\uBD80\uC11C\uC870\uD68C",
                            clearable: "",
                            disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                          items: unref(emp_list_by_dept),
                          label: "\uC0AC\uC6D0\uC870\uD68C",
                          placeholder: "\uC0AC\uC6D0\uC870\uD68C",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedEmpCode),
                            "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                            items: unref(emp_list_by_dept),
                            label: "\uC0AC\uC6D0\uC870\uD68C",
                            placeholder: "\uC0AC\uC6D0\uC870\uD68C",
                            clearable: "",
                            disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "\uB144\uC6D4\uC120\uD0DD",
                          placeholder: "\uB144\uC6D4\uC120\uD0DD",
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedMonth),
                            "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                            items: unref(monthsProps),
                            label: "\uB144\uC6D4\uC120\uD0DD",
                            placeholder: "\uB144\uC6D4\uC120\uD0DD",
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
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                          items: unref(dept_list),
                          label: "\uBD80\uC11C\uC870\uD68C",
                          placeholder: "\uBD80\uC11C\uC870\uD68C",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                          items: unref(emp_list_by_dept),
                          label: "\uC0AC\uC6D0\uC870\uD68C",
                          placeholder: "\uC0AC\uC6D0\uC870\uD68C",
                          clearable: "",
                          disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "\uB144\uC6D4\uC120\uD0DD",
                          placeholder: "\uB144\uC6D4\uC120\uD0DD",
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
            _push2(ssrRenderComponent(VRow, { class: "mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_list),
                          "items-per-page": 10,
                          "show-select": "",
                          "return-object": "",
                          modelValue: unref(selectedRows),
                          "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                          "item-value": "empCode"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VDataTable), {
                            headers: annualProps,
                            items: unref(annual_vacation_mgt_list),
                            "items-per-page": 10,
                            "show-select": "",
                            "return-object": "",
                            modelValue: unref(selectedRows),
                            "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                            "item-value": "empCode"
                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_list),
                          "items-per-page": 10,
                          "show-select": "",
                          "return-object": "",
                          modelValue: unref(selectedRows),
                          "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                          "item-value": "empCode"
                        }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
                    md: "3",
                    "offset-md": "5"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6 ml-9",
                        height: "43",
                        width: "200",
                        onClick: searchAnnual
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-search"
                          }),
                          createTextVNode("\uC5F0\uCC28\uC2E0\uCCAD \uB0B4\uC5ED\uC870\uD68C ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6",
                        height: "43",
                        width: "150",
                        onClick: ($event) => updateStatus("\uD734\uAC00 \uC2B9\uC778")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-square-key"
                          }),
                          createTextVNode("\uD734\uAC00 \uC2B9\uC778 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mt-6",
                        height: "43",
                        width: "150",
                        onClick: ($event) => updateStatus("\uC2B9\uC778 \uCDE8\uC18C")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-square-x"
                          }),
                          createTextVNode("\uC2B9\uC778 \uCDE8\uC18C ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedDeptCode),
                        "onUpdate:modelValue": ($event) => isRef(selectedDeptCode) ? selectedDeptCode.value = $event : null,
                        items: unref(dept_list),
                        label: "\uBD80\uC11C\uC870\uD68C",
                        placeholder: "\uBD80\uC11C\uC870\uD68C",
                        clearable: "",
                        disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedEmpCode),
                        "onUpdate:modelValue": ($event) => isRef(selectedEmpCode) ? selectedEmpCode.value = $event : null,
                        items: unref(emp_list_by_dept),
                        label: "\uC0AC\uC6D0\uC870\uD68C",
                        placeholder: "\uC0AC\uC6D0\uC870\uD68C",
                        clearable: "",
                        disabled: unref(selectedSearchType) === "\uC804\uCCB4\uC0AC\uC6D0\uC870\uD68C",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedMonth),
                        "onUpdate:modelValue": ($event) => isRef(selectedMonth) ? selectedMonth.value = $event : null,
                        items: unref(monthsProps),
                        label: "\uB144\uC6D4\uC120\uD0DD",
                        placeholder: "\uB144\uC6D4\uC120\uD0DD",
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTable), {
                        headers: annualProps,
                        items: unref(annual_vacation_mgt_list),
                        "items-per-page": 10,
                        "show-select": "",
                        "return-object": "",
                        modelValue: unref(selectedRows),
                        "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                        "item-value": "empCode"
                      }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attndmgmt/annual/annual.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "annualBatch",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedYearMonth = ref("");
    (/* @__PURE__ */ new Date()).getFullYear();
    const monthsProps = ref([]);
    const annual_vacation_mgt_result = ref([]);
    const annualProps = [
      { title: "\uC0AC\uC6D0\uBA85", key: "empName" },
      { title: "\uC801\uC6A9\uB144\uC6D4", key: "applyYearMonth" },
      { title: "\uC5F0\uCC28\uC0AC\uC6A9\uAC1C\uC218", key: "monthlyLeave" },
      { title: "\uB0A8\uC740\uC5F0\uCC28", key: "remainingHoliday" },
      { title: "\uB9C8\uAC10\uC5EC\uBD80", key: "finalizeStatus" }
    ];
    const createAnnual = async () => {
      await attenStore().BETCH_VACATION_CREATE(selectedYearMonth.value).then((res) => {
        console.log("annualVacationMgtResult", res.data.annualVacationMgtResult);
        annual_vacation_mgt_result.value = res.data.annualVacationMgtResult;
      }).catch((e) => console.error(e));
      alert("\uC5F0\uCC28 \uC0AC\uC6A9\uAC1C\uC218\uB97C \uC870\uD68C\uD588\uC2B5\uB2C8\uB2E4.");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$3;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3",
                    "offset-md": "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(selectedYearMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "\uB144\uC6D4\uC120\uD0DD",
                          placeholder: "\uB144\uC6D4\uC120\uD0DD",
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(selectedYearMonth),
                            "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                            items: unref(monthsProps),
                            label: "\uB144\uC6D4\uC120\uD0DD",
                            placeholder: "\uB144\uC6D4\uC120\uD0DD",
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
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mt-6 ml-3",
                          height: "43",
                          width: "230",
                          onClick: createAnnual
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }, null, _parent5, _scopeId4));
                              _push5(`\uC5F0\uCC28\uC0AC\uC6A9\uD69F\uC218 \uC870\uD68C `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "tabler-search"
                                }),
                                createTextVNode("\uC5F0\uCC28\uC0AC\uC6A9\uD69F\uC218 \uC870\uD68C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mt-6 ml-3",
                            height: "43",
                            width: "230",
                            onClick: createAnnual
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "tabler-search"
                              }),
                              createTextVNode("\uC5F0\uCC28\uC0AC\uC6A9\uD69F\uC218 \uC870\uD68C ")
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
                      md: "3",
                      "offset-md": "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(selectedYearMonth),
                          "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                          items: unref(monthsProps),
                          label: "\uB144\uC6D4\uC120\uD0DD",
                          placeholder: "\uB144\uC6D4\uC120\uD0DD",
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
                        createVNode(VBtn, {
                          class: "mt-6 ml-3",
                          height: "43",
                          width: "230",
                          onClick: createAnnual
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "tabler-search"
                            }),
                            createTextVNode("\uC5F0\uCC28\uC0AC\uC6A9\uD69F\uC218 \uC870\uD68C ")
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
            _push2(ssrRenderComponent(VRow, { class: "mt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_result),
                          "items-per-page": 10
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VDataTable), {
                            headers: annualProps,
                            items: unref(annual_vacation_mgt_result),
                            "items-per-page": 10
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
                          headers: annualProps,
                          items: unref(annual_vacation_mgt_result),
                          "items-per-page": 10
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "3",
                    "offset-md": "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(selectedYearMonth),
                        "onUpdate:modelValue": ($event) => isRef(selectedYearMonth) ? selectedYearMonth.value = $event : null,
                        items: unref(monthsProps),
                        label: "\uB144\uC6D4\uC120\uD0DD",
                        placeholder: "\uB144\uC6D4\uC120\uD0DD",
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
                      createVNode(VBtn, {
                        class: "mt-6 ml-3",
                        height: "43",
                        width: "230",
                        onClick: createAnnual
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-search"
                          }),
                          createTextVNode("\uC5F0\uCC28\uC0AC\uC6A9\uD69F\uC218 \uC870\uD68C ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(unref(VDataTable), {
                        headers: annualProps,
                        items: unref(annual_vacation_mgt_result),
                        "items-per-page": 10
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/hr/attndmgmt/annual/annualBatch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "annual",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const tab = ref("personal-info");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">\uD734\uAC00 \uAD00\uB9AC</h1>`);
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
                        _push4(` \uC5F0\uCC28 \uC870\uD68C/\uC2B9\uC778 `);
                      } else {
                        return [
                          createTextVNode(" \uC5F0\uCC28 \uC870\uD68C/\uC2B9\uC778 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "account-details" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC5F0\uCC28 \uB9C8\uAC10 `);
                      } else {
                        return [
                          createTextVNode(" \uC5F0\uCC28 \uB9C8\uAC10 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC5F0\uCC28 \uC870\uD68C/\uC2B9\uC778 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "account-details" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC5F0\uCC28 \uB9C8\uAC10 ")
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
                      createTextVNode(" \uC5F0\uCC28 \uC870\uD68C/\uC2B9\uC778 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "account-details" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC5F0\uCC28 \uB9C8\uAC10 ")
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
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "account-details" }, {
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
                      } else {
                        return [
                          createVNode(VWindowItem, { value: "personal-info" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, { value: "account-details" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
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
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "account-details" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
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
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: "account-details" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/attndmgmt/annual.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
