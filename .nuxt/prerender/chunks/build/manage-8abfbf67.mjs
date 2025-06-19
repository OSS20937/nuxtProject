import { _ as _sfc_main$1 } from './AppTextField-dee429aa.mjs';
import { _ as _sfc_main$2 } from './AppSelect-04d0f8a2.mjs';
import { _ as _sfc_main$3 } from './AppDateTimePicker-c59f48ad.mjs';
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, createBlock, openBlock, createTextVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { b as baseStore } from './index-77616e20.mjs';
import { d as dailyLaborStore } from './index-183b4e75.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, f as VCardText, b as VBtn } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VCheckbox } from './VCheckbox-a11da3d3.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    const isfalidclick = ref(false);
    const isfaildinsert = ref(false);
    const isSuccessFunc = ref(false);
    const search = ref("");
    const BaseStore = baseStore();
    const DailyLaborStore = dailyLaborStore();
    const fieldDisabled = ref(false);
    const dailyLaborEmpList = ref([]);
    const deptList = ref([]);
    const projectList = ref([]);
    const nationality = [
      { value: "\uB0B4\uAD6D\uC778", title: "\uB0B4\uAD6D\uC778" },
      { value: "\uC678\uAD6D\uC778", title: "\uC678\uAD6D\uC778" }
    ];
    const normalPayType = [
      { value: "\uC77C\uAE09", title: "\uC77C\uAE09" },
      { value: "\uC8FC\uAE09", title: "\uC8FC\uAE09" },
      { value: "\uC6D4\uAE09", title: "\uC6D4\uAE09" }
    ];
    const detailDailyLaborEmp = ref({
      employeeId: "",
      employeeName: "",
      residentialNumber: "",
      nationality: "",
      department: "",
      project: "",
      workStartDate: "",
      workEndDate: "",
      employmentInsuranceEligibility: false,
      normalPayType: "",
      normalPay: 0,
      overtimePayRate: 0,
      nightPayRate: 0,
      bankName: "",
      accountNumber: "",
      accountHolder: "",
      phoneNumber: "",
      email: "",
      status: ""
    });
    const headers = [
      { title: "\uC0AC\uC6D0\uBC88\uD638", key: "employeeId", align: "center" },
      { title: "\uC131\uBA85", key: "employeeName", align: "center" },
      { title: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638", key: "residentialNumber", align: "center" }
    ];
    const fetchData = async () => {
      await DailyLaborStore.SEARCH_EMP_LIST();
      dailyLaborEmpList.value = await DailyLaborStore.dailyLaborEmpList;
      await BaseStore.FETCH_DEPTLIST();
      deptList.value = await BaseStore.deptList.map((e) => ({
        title: e.deptName,
        value: e.deptCode
      }));
      await BaseStore.FETCH_PROJECT();
      projectList.value = await BaseStore.projectList.map((e) => ({
        title: e.projectName,
        value: e.projectName
      }));
    };
    const resetDetailDailyLaborEmpList = () => {
      fieldDisabled.value = false;
      detailDailyLaborEmp.value = {
        employeeId: "",
        employeeName: "",
        residentialNumber: "",
        nationality: "",
        department: "",
        project: "",
        workStartDate: "",
        workEndDate: "",
        employmentInsuranceEligibility: false,
        normalPayType: "",
        normalPay: "",
        overtimePayRate: "",
        nightPayRate: "",
        bankName: "",
        accountNumber: "",
        accountHolder: "",
        phoneNumber: "",
        email: "",
        status: ""
      };
    };
    const handleRowClick = async (row) => {
      fieldDisabled.value = true;
      await DailyLaborStore.FETCH_EMP_DETAIL(row.item.employeeId);
      detailDailyLaborEmp.value = await DailyLaborStore.dailyLaborEmpDetailInfo;
      if (detailDailyLaborEmp.value.employmentInsuranceEligibility === "Y")
        detailDailyLaborEmp.value.employmentInsuranceEligibility = true;
      else
        detailDailyLaborEmp.value.employmentInsuranceEligibility = false;
    };
    const updateEmpList = async () => {
      if (detailDailyLaborEmp.value.employmentInsuranceEligibility === true)
        detailDailyLaborEmp.value.employmentInsuranceEligibility = "Y";
      else
        detailDailyLaborEmp.value.employmentInsuranceEligibility = "N";
      const targetEmployeeId = detailDailyLaborEmp.value.employeeId;
      const employeeIds = dailyLaborEmpList.value.map((employee) => employee.employeeId);
      const isEmployeeIdExists = employeeIds.includes(targetEmployeeId);
      if (!fieldDisabled.value) {
        if (!isEmployeeIdExists)
          isfalidclick.value = true;
        else
          isfalidclick.value = true;
      } else if (isEmployeeIdExists) {
        await DailyLaborStore.DELETE_EMP(detailDailyLaborEmp.value);
        await fetchData();
        isSuccessFunc.value = true;
      }
    };
    const insertEmpList = async () => {
      if (detailDailyLaborEmp.value.employmentInsuranceEligibility === true)
        detailDailyLaborEmp.value.employmentInsuranceEligibility = "Y";
      else
        detailDailyLaborEmp.value.employmentInsuranceEligibility = "N";
      const targetEmployeeId = detailDailyLaborEmp.value.employeeId;
      const employeeIds = dailyLaborEmpList.value.map((employee) => employee.employeeId);
      const isEmployeeIdExists = employeeIds.includes(targetEmployeeId);
      if (!fieldDisabled.value) {
        if (!isEmployeeIdExists) {
          await DailyLaborStore.INSERT_EMP(detailDailyLaborEmp.value);
          await fetchData();
          isSuccessFunc.value = true;
        }
        isfaildinsert.value = true;
      } else if (isEmployeeIdExists) {
        await DailyLaborStore.UPDATE_EMP(detailDailyLaborEmp.value);
        isSuccessFunc.value = true;
      }
    };
    const filteredData = computed(() => {
      return dailyLaborEmpList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      const _component_AppSelect = _sfc_main$2;
      const _component_AppDateTimePicker = _sfc_main$3;
      _push(`<!--[--><h1 class="mb-6"> \uC77C\uC6A9\uADFC\uB85C \uC9C1\uC6D0\uAD00\uB9AC </h1>`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppTextField, {
                                modelValue: unref(search),
                                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                density: "compact",
                                label: "\uAC80\uC0C9",
                                "append-inner-icon": "tabler-search",
                                "single-line": "",
                                "hide-details": "",
                                dense: "",
                                outlined: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(search),
                                  "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                  density: "compact",
                                  label: "\uAC80\uC0C9",
                                  "append-inner-icon": "tabler-search",
                                  "single-line": "",
                                  "hide-details": "",
                                  dense: "",
                                  outlined: ""
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
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(search),
                                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                density: "compact",
                                label: "\uAC80\uC0C9",
                                "append-inner-icon": "tabler-search",
                                "single-line": "",
                                "hide-details": "",
                                dense: "",
                                outlined: ""
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
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppTextField, {
                              modelValue: unref(search),
                              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                              density: "compact",
                              label: "\uAC80\uC0C9",
                              "append-inner-icon": "tabler-search",
                              "single-line": "",
                              "hide-details": "",
                              dense: "",
                              outlined: ""
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
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            density: "compact",
                            label: "\uAC80\uC0C9",
                            "append-inner-icon": "tabler-search",
                            "single-line": "",
                            "hide-details": "",
                            dense: "",
                            outlined: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { md: "4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mb-6",
                    height: "750",
                    title: "\uC77C\uC6A9\uC9C1 \uC0AC\uC6D0 \uBAA9\uB85D"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VDataTable), {
                                headers,
                                items: unref(filteredData),
                                "items-per-page": 10,
                                "onClick:row": (_5, row) => handleRowClick(row)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VDataTable), {
                                  headers,
                                  items: unref(filteredData),
                                  "items-per-page": 10,
                                  "onClick:row": (_5, row) => handleRowClick(row)
                                }, null, 8, ["items", "onClick:row"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(VDataTable), {
                                headers,
                                items: unref(filteredData),
                                "items-per-page": 10,
                                "onClick:row": (_4, row) => handleRowClick(row)
                              }, null, 8, ["items", "onClick:row"])
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
                    createVNode(VCard, {
                      class: "mb-6",
                      height: "750",
                      title: "\uC77C\uC6A9\uC9C1 \uC0AC\uC6D0 \uBAA9\uB85D"
                    }, {
                      default: withCtx(() => [
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(unref(VDataTable), {
                              headers,
                              items: unref(filteredData),
                              "items-per-page": 10,
                              "onClick:row": (_3, row) => handleRowClick(row)
                            }, null, 8, ["items", "onClick:row"])
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
            _push2(ssrRenderComponent(VCol, { md: "8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mb-6",
                    height: "750",
                    title: "\uAE30\uBCF8\uC815\uBCF4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDivider, { class: "pt-2" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "pt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(fieldDisabled)) {
                                      _push6(ssrRenderComponent(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).employeeId,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                              label: "\uC0AC\uC6D0 \uBC88\uD638",
                                              placeholder: "LAB",
                                              disabled: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(detailDailyLaborEmp).employeeId,
                                                "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                                label: "\uC0AC\uC6D0 \uBC88\uD638",
                                                placeholder: "LAB",
                                                disabled: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).employeeId,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                              label: "\uC0AC\uC6D0 \uBC88\uD638",
                                              placeholder: "LAB"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(detailDailyLaborEmp).employeeId,
                                                "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                                label: "\uC0AC\uC6D0 \uBC88\uD638",
                                                placeholder: "LAB"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    }
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).employeeName,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                            label: "\uC131\uBA85",
                                            placeholder: "\uD64D\uAE38\uB3D9"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).employeeName,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                              label: "\uC131\uBA85",
                                              placeholder: "\uD64D\uAE38\uB3D9"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                            label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                            placeholder: "123456-1234567"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                              label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                              placeholder: "123456-1234567"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).nationality,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                            items: nationality,
                                            label: "\uB0B4/\uC678\uAD6D\uC778"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).nationality,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                              items: nationality,
                                              label: "\uB0B4/\uC678\uAD6D\uC778"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).department,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                            items: unref(deptList),
                                            label: "\uBD80\uC11C"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).department,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                              items: unref(deptList),
                                              label: "\uBD80\uC11C"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).project,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                            label: "\uD504\uB85C\uC81D\uD2B8",
                                            items: unref(projectList)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).project,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                              label: "\uD504\uB85C\uC81D\uD2B8",
                                              items: unref(projectList)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      unref(fieldDisabled) ? (openBlock(), createBlock(VCol, {
                                        key: 0,
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).employeeId,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                            label: "\uC0AC\uC6D0 \uBC88\uD638",
                                            placeholder: "LAB",
                                            disabled: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })) : (openBlock(), createBlock(VCol, {
                                        key: 1,
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).employeeId,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                            label: "\uC0AC\uC6D0 \uBC88\uD638",
                                            placeholder: "LAB"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).employeeName,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                            label: "\uC131\uBA85",
                                            placeholder: "\uD64D\uAE38\uB3D9"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                            label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                            placeholder: "123456-1234567"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).nationality,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                            items: nationality,
                                            label: "\uB0B4/\uC678\uAD6D\uC778"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).department,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                            items: unref(deptList),
                                            label: "\uBD80\uC11C"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).project,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                            label: "\uD504\uB85C\uC81D\uD2B8",
                                            items: unref(projectList)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppDateTimePicker, {
                                            modelValue: unref(detailDailyLaborEmp).workStartDate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                            label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: unref(detailDailyLaborEmp).workStartDate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                              label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppDateTimePicker, {
                                            modelValue: unref(detailDailyLaborEmp).workEndDate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                            label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: unref(detailDailyLaborEmp).workEndDate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                              label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10",
                                      class: "d-flex align-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                            label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCheckbox, {
                                              modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                              label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppDateTimePicker, {
                                            modelValue: unref(detailDailyLaborEmp).workStartDate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                            label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppDateTimePicker, {
                                            modelValue: unref(detailDailyLaborEmp).workEndDate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                            label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10",
                                        class: "d-flex align-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                            label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).normalPayType,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                            items: normalPayType,
                                            label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).normalPayType,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                              items: normalPayType,
                                              label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).normalPay,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                            label: "\uC815\uC0C1\uAE09\uC5EC",
                                            placeholder: "0"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).normalPay,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                              label: "\uC815\uC0C1\uAE09\uC5EC",
                                              placeholder: "0"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                            label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                            placeholder: "0"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                              label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                              placeholder: "0"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                            label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                            placeholder: "0"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                              label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                              placeholder: "0"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).bankName,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                            items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                            label: "\uC740\uD589"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).bankName,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                              items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                              label: "\uC740\uD589"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).accountNumber,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                            label: "\uACC4\uC88C\uBC88\uD638"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).accountNumber,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                              label: "\uACC4\uC88C\uBC88\uD638"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).accountHolder,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                            label: "\uC608\uAE08\uC8FC"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).accountHolder,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                              label: "\uC608\uAE08\uC8FC"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                            label: "\uD578\uB4DC\uD3F0",
                                            placeholder: "010-1234-5678"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                              label: "\uD578\uB4DC\uD3F0",
                                              placeholder: "010-1234-5678"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).email,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                            label: "\uC774\uBA54\uC77C",
                                            placeholder: "seoulit@seoulit.com"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).email,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                              label: "\uC774\uBA54\uC77C",
                                              placeholder: "seoulit@seoulit.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).normalPayType,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                            items: normalPayType,
                                            label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).normalPay,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                            label: "\uC815\uC0C1\uAE09\uC5EC",
                                            placeholder: "0"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                            label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                            placeholder: "0"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                            label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                            placeholder: "0"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: unref(detailDailyLaborEmp).bankName,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                            items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                            label: "\uC740\uD589"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).accountNumber,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                            label: "\uACC4\uC88C\uBC88\uD638"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).accountHolder,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                            label: "\uC608\uAE08\uC8FC"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                            label: "\uD578\uB4DC\uD3F0",
                                            placeholder: "010-1234-5678"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "4",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: unref(detailDailyLaborEmp).email,
                                            "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                            label: "\uC774\uBA54\uC77C",
                                            placeholder: "seoulit@seoulit.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "mt-10 mb-6" }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center justify-end flex-wrap gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, { onClick: resetDetailDailyLaborEmpList }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC2E0\uADDC `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC2E0\uADDC ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { onClick: updateEmpList }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uB9C8\uAC10 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uB9C8\uAC10 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { onClick: insertEmpList }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC800\uC7A5 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC800\uC7A5 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VRow, { class: "pt-2" }, {
                                  default: withCtx(() => [
                                    unref(fieldDisabled) ? (openBlock(), createBlock(VCol, {
                                      key: 0,
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).employeeId,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                          label: "\uC0AC\uC6D0 \uBC88\uD638",
                                          placeholder: "LAB",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VCol, {
                                      key: 1,
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).employeeId,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                          label: "\uC0AC\uC6D0 \uBC88\uD638",
                                          placeholder: "LAB"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).employeeName,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                          label: "\uC131\uBA85",
                                          placeholder: "\uD64D\uAE38\uB3D9"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                          label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                          placeholder: "123456-1234567"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(detailDailyLaborEmp).nationality,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                          items: nationality,
                                          label: "\uB0B4/\uC678\uAD6D\uC778"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(detailDailyLaborEmp).department,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                          items: unref(deptList),
                                          label: "\uBD80\uC11C"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(detailDailyLaborEmp).project,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                          label: "\uD504\uB85C\uC81D\uD2B8",
                                          items: unref(projectList)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppDateTimePicker, {
                                          modelValue: unref(detailDailyLaborEmp).workStartDate,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                          label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppDateTimePicker, {
                                          modelValue: unref(detailDailyLaborEmp).workEndDate,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                          label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10",
                                      class: "d-flex align-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                          label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(detailDailyLaborEmp).normalPayType,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                          items: normalPayType,
                                          label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).normalPay,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                          label: "\uC815\uC0C1\uAE09\uC5EC",
                                          placeholder: "0"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                          label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                          placeholder: "0"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                          label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                          placeholder: "0"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppSelect, {
                                          modelValue: unref(detailDailyLaborEmp).bankName,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                          items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                          label: "\uC740\uD589"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).accountNumber,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                          label: "\uACC4\uC88C\uBC88\uD638"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).accountHolder,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                          label: "\uC608\uAE08\uC8FC"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                          label: "\uD578\uB4DC\uD3F0",
                                          placeholder: "010-1234-5678"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "4",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(detailDailyLaborEmp).email,
                                          "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                          label: "\uC774\uBA54\uC77C",
                                          placeholder: "seoulit@seoulit.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "mt-10 mb-6" }),
                                createVNode("div", { class: "d-flex align-center justify-end flex-wrap gap-4" }, [
                                  createVNode(VBtn, { onClick: resetDetailDailyLaborEmpList }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uC2E0\uADDC ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, { onClick: updateEmpList }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uB9C8\uAC10 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, { onClick: insertEmpList }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uC800\uC7A5 ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDivider, { class: "pt-2" }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "pt-2" }, {
                                default: withCtx(() => [
                                  unref(fieldDisabled) ? (openBlock(), createBlock(VCol, {
                                    key: 0,
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).employeeId,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                        label: "\uC0AC\uC6D0 \uBC88\uD638",
                                        placeholder: "LAB",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VCol, {
                                    key: 1,
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).employeeId,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                        label: "\uC0AC\uC6D0 \uBC88\uD638",
                                        placeholder: "LAB"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).employeeName,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                        label: "\uC131\uBA85",
                                        placeholder: "\uD64D\uAE38\uB3D9"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                        label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                        placeholder: "123456-1234567"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(detailDailyLaborEmp).nationality,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                        items: nationality,
                                        label: "\uB0B4/\uC678\uAD6D\uC778"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(detailDailyLaborEmp).department,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                        items: unref(deptList),
                                        label: "\uBD80\uC11C"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(detailDailyLaborEmp).project,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                        label: "\uD504\uB85C\uC81D\uD2B8",
                                        items: unref(projectList)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppDateTimePicker, {
                                        modelValue: unref(detailDailyLaborEmp).workStartDate,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                        label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppDateTimePicker, {
                                        modelValue: unref(detailDailyLaborEmp).workEndDate,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                        label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10",
                                    class: "d-flex align-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                        label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(detailDailyLaborEmp).normalPayType,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                        items: normalPayType,
                                        label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).normalPay,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                        label: "\uC815\uC0C1\uAE09\uC5EC",
                                        placeholder: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                        label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                        placeholder: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                        label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                        placeholder: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(detailDailyLaborEmp).bankName,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                        items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                        label: "\uC740\uD589"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).accountNumber,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                        label: "\uACC4\uC88C\uBC88\uD638"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).accountHolder,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                        label: "\uC608\uAE08\uC8FC"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                        label: "\uD578\uB4DC\uD3F0",
                                        placeholder: "010-1234-5678"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "4",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(detailDailyLaborEmp).email,
                                        "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                        label: "\uC774\uBA54\uC77C",
                                        placeholder: "seoulit@seoulit.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "mt-10 mb-6" }),
                              createVNode("div", { class: "d-flex align-center justify-end flex-wrap gap-4" }, [
                                createVNode(VBtn, { onClick: resetDetailDailyLaborEmpList }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC2E0\uADDC ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { onClick: updateEmpList }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB9C8\uAC10 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { onClick: insertEmpList }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC800\uC7A5 ")
                                  ]),
                                  _: 1
                                })
                              ])
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
                    createVNode(VCard, {
                      class: "mb-6",
                      height: "750",
                      title: "\uAE30\uBCF8\uC815\uBCF4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VDivider, { class: "pt-2" }),
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, { class: "pt-2" }, {
                              default: withCtx(() => [
                                unref(fieldDisabled) ? (openBlock(), createBlock(VCol, {
                                  key: 0,
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).employeeId,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                      label: "\uC0AC\uC6D0 \uBC88\uD638",
                                      placeholder: "LAB",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VCol, {
                                  key: 1,
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).employeeId,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                      label: "\uC0AC\uC6D0 \uBC88\uD638",
                                      placeholder: "LAB"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).employeeName,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                      label: "\uC131\uBA85",
                                      placeholder: "\uD64D\uAE38\uB3D9"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                      label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                      placeholder: "123456-1234567"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(detailDailyLaborEmp).nationality,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                      items: nationality,
                                      label: "\uB0B4/\uC678\uAD6D\uC778"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(detailDailyLaborEmp).department,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                      items: unref(deptList),
                                      label: "\uBD80\uC11C"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(detailDailyLaborEmp).project,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                      label: "\uD504\uB85C\uC81D\uD2B8",
                                      items: unref(projectList)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppDateTimePicker, {
                                      modelValue: unref(detailDailyLaborEmp).workStartDate,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                      label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppDateTimePicker, {
                                      modelValue: unref(detailDailyLaborEmp).workEndDate,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                      label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10",
                                  class: "d-flex align-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                      label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(detailDailyLaborEmp).normalPayType,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                      items: normalPayType,
                                      label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).normalPay,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                      label: "\uC815\uC0C1\uAE09\uC5EC",
                                      placeholder: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                      label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                      placeholder: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                      label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                      placeholder: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(detailDailyLaborEmp).bankName,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                      items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                      label: "\uC740\uD589"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).accountNumber,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                      label: "\uACC4\uC88C\uBC88\uD638"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).accountHolder,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                      label: "\uC608\uAE08\uC8FC"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                      label: "\uD578\uB4DC\uD3F0",
                                      placeholder: "010-1234-5678"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "4",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: unref(detailDailyLaborEmp).email,
                                      "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                      label: "\uC774\uBA54\uC77C",
                                      placeholder: "seoulit@seoulit.com"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "mt-10 mb-6" }),
                            createVNode("div", { class: "d-flex align-center justify-end flex-wrap gap-4" }, [
                              createVNode(VBtn, { onClick: resetDetailDailyLaborEmpList }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC2E0\uADDC ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { onClick: updateEmpList }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uB9C8\uAC10 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { onClick: insertEmpList }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC800\uC7A5 ")
                                ]),
                                _: 1
                              })
                            ])
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
              createVNode(VCol, { md: "4" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "mb-6",
                    height: "750",
                    title: "\uC77C\uC6A9\uC9C1 \uC0AC\uC6D0 \uBAA9\uB85D"
                  }, {
                    default: withCtx(() => [
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(unref(VDataTable), {
                            headers,
                            items: unref(filteredData),
                            "items-per-page": 10,
                            "onClick:row": (_2, row) => handleRowClick(row)
                          }, null, 8, ["items", "onClick:row"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { md: "8" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "mb-6",
                    height: "750",
                    title: "\uAE30\uBCF8\uC815\uBCF4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VDivider, { class: "pt-2" }),
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, { class: "pt-2" }, {
                            default: withCtx(() => [
                              unref(fieldDisabled) ? (openBlock(), createBlock(VCol, {
                                key: 0,
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).employeeId,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                    label: "\uC0AC\uC6D0 \uBC88\uD638",
                                    placeholder: "LAB",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VCol, {
                                key: 1,
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).employeeId,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                    label: "\uC0AC\uC6D0 \uBC88\uD638",
                                    placeholder: "LAB"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).employeeName,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                    label: "\uC131\uBA85",
                                    placeholder: "\uD64D\uAE38\uB3D9"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                    label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
                                    placeholder: "123456-1234567"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(detailDailyLaborEmp).nationality,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                    items: nationality,
                                    label: "\uB0B4/\uC678\uAD6D\uC778"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(detailDailyLaborEmp).department,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                    items: unref(deptList),
                                    label: "\uBD80\uC11C"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(detailDailyLaborEmp).project,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                    label: "\uD504\uB85C\uC81D\uD2B8",
                                    items: unref(projectList)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppDateTimePicker, {
                                    modelValue: unref(detailDailyLaborEmp).workStartDate,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                    label: "\uADFC\uBB34\uC2DC\uC791\uC77C"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppDateTimePicker, {
                                    modelValue: unref(detailDailyLaborEmp).workEndDate,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                    label: "\uADFC\uBB34\uC885\uB8CC\uC77C"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10",
                                class: "d-flex align-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                    label: "\uBCF4\uD5D8\uB300\uC0C1\uC5EC\uBD80"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(detailDailyLaborEmp).normalPayType,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                    items: normalPayType,
                                    label: "\uC815\uC0C1\uAE09\uC5EC\uC720\uD615"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).normalPay,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                    label: "\uC815\uC0C1\uAE09\uC5EC",
                                    placeholder: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                    label: "\uC5F0\uC7A5\uAE09\uC5EC(\uC2DC\uAE09)",
                                    placeholder: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                    label: "\uC57C\uAC04\uAE09\uC5EC(\uC2DC\uAE09)",
                                    placeholder: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(detailDailyLaborEmp).bankName,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                    items: ["\uD558\uB098", "\uC2E0\uD55C", "\uB18D\uD611", "\uACBD\uB0A8"],
                                    label: "\uC740\uD589"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).accountNumber,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                    label: "\uACC4\uC88C\uBC88\uD638"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).accountHolder,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                    label: "\uC608\uAE08\uC8FC"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                    label: "\uD578\uB4DC\uD3F0",
                                    placeholder: "010-1234-5678"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "4",
                                cols: "10"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(detailDailyLaborEmp).email,
                                    "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                    label: "\uC774\uBA54\uC77C",
                                    placeholder: "seoulit@seoulit.com"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mt-10 mb-6" }),
                          createVNode("div", { class: "d-flex align-center justify-end flex-wrap gap-4" }, [
                            createVNode(VBtn, { onClick: resetDetailDailyLaborEmpList }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC2E0\uADDC ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { onClick: updateEmpList }, {
                              default: withCtx(() => [
                                createTextVNode(" \uB9C8\uAC10 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { onClick: insertEmpList }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC800\uC7A5 ")
                              ]),
                              _: 1
                            })
                          ])
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
        modelValue: unref(isfalidclick),
        "onUpdate:modelValue": ($event) => isRef(isfalidclick) ? isfalidclick.value = $event : null,
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
              text: "\uC0AC\uC6D0 \uD074\uB9AD\uD558\uC5EC \uB9C8\uAC10\uCC98\uB9AC\uBC14\uB78D\uB2C8\uB2E4."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uC0AC\uC6D0 \uD074\uB9AD\uD558\uC5EC \uB9C8\uAC10\uCC98\uB9AC\uBC14\uB78D\uB2C8\uB2E4."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isfaildinsert),
        "onUpdate:modelValue": ($event) => isRef(isfaildinsert) ? isfaildinsert.value = $event : null,
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
              text: "\uC874\uC7AC\uD558\uB294 \uC0AC\uC6D0 \uBC88\uD638\uC785\uB2C8\uB2E4."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uC874\uC7AC\uD558\uB294 \uC0AC\uC6D0 \uBC88\uD638\uC785\uB2C8\uB2E4."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailyemp/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
