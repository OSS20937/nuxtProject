import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { _ as _sfc_main$2 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$3 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b as baseStore } from "./index-77616e20.js";
import { d as dailyLaborStore } from "./index-183b4e75.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, b as VBtn } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VCheckbox } from "./VCheckbox-a11da3d3.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "vue-flatpickr-component";
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
/* empty css                */const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
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
      { value: "내국인", title: "내국인" },
      { value: "외국인", title: "외국인" }
    ];
    const normalPayType = [
      { value: "일급", title: "일급" },
      { value: "주급", title: "주급" },
      { value: "월급", title: "월급" }
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
      { title: "사원번호", key: "employeeId", align: "center" },
      { title: "성명", key: "employeeName", align: "center" },
      { title: "주민등록번호", key: "residentialNumber", align: "center" }
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
      _push(`<!--[--><h1 class="mb-6"> 일용근로 직원관리 </h1>`);
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
                                label: "검색",
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
                                  label: "검색",
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
                                label: "검색",
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
                              label: "검색",
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
                            label: "검색",
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
                    title: "일용직 사원 목록"
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
                      title: "일용직 사원 목록"
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
                    title: "기본정보"
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
                                              label: "사원 번호",
                                              placeholder: "LAB",
                                              disabled: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(detailDailyLaborEmp).employeeId,
                                                "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                                label: "사원 번호",
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
                                              label: "사원 번호",
                                              placeholder: "LAB"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_AppTextField, {
                                                modelValue: unref(detailDailyLaborEmp).employeeId,
                                                "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeId = $event,
                                                label: "사원 번호",
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
                                            label: "성명",
                                            placeholder: "홍길동"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).employeeName,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employeeName = $event,
                                              label: "성명",
                                              placeholder: "홍길동"
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
                                            label: "주민등록번호",
                                            placeholder: "123456-1234567"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).residentialNumber,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).residentialNumber = $event,
                                              label: "주민등록번호",
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
                                            label: "내/외국인"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).nationality,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nationality = $event,
                                              items: nationality,
                                              label: "내/외국인"
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
                                            label: "부서"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).department,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).department = $event,
                                              items: unref(deptList),
                                              label: "부서"
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
                                            label: "프로젝트",
                                            items: unref(projectList)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).project,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).project = $event,
                                              label: "프로젝트",
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
                                            label: "사원 번호",
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
                                            label: "사원 번호",
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
                                            label: "성명",
                                            placeholder: "홍길동"
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
                                            label: "주민등록번호",
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
                                            label: "내/외국인"
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
                                            label: "부서"
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
                                            label: "프로젝트",
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
                                            label: "근무시작일"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: unref(detailDailyLaborEmp).workStartDate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workStartDate = $event,
                                              label: "근무시작일"
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
                                            label: "근무종료일"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: unref(detailDailyLaborEmp).workEndDate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).workEndDate = $event,
                                              label: "근무종료일"
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
                                            label: "보험대상여부"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCheckbox, {
                                              modelValue: unref(detailDailyLaborEmp).employmentInsuranceEligibility,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).employmentInsuranceEligibility = $event,
                                              label: "보험대상여부"
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
                                            label: "근무시작일"
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
                                            label: "근무종료일"
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
                                            label: "보험대상여부"
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
                                            label: "정상급여유형"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).normalPayType,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPayType = $event,
                                              items: normalPayType,
                                              label: "정상급여유형"
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
                                            label: "정상급여",
                                            placeholder: "0"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).normalPay,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).normalPay = $event,
                                              label: "정상급여",
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
                                            label: "연장급여(시급)",
                                            placeholder: "0"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).overtimePayRate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).overtimePayRate = $event,
                                              label: "연장급여(시급)",
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
                                            label: "야간급여(시급)",
                                            placeholder: "0"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).nightPayRate,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).nightPayRate = $event,
                                              label: "야간급여(시급)",
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
                                            items: ["하나", "신한", "농협", "경남"],
                                            label: "은행"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppSelect, {
                                              modelValue: unref(detailDailyLaborEmp).bankName,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).bankName = $event,
                                              items: ["하나", "신한", "농협", "경남"],
                                              label: "은행"
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
                                            label: "계좌번호"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).accountNumber,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountNumber = $event,
                                              label: "계좌번호"
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
                                            label: "예금주"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).accountHolder,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).accountHolder = $event,
                                              label: "예금주"
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
                                            label: "핸드폰",
                                            placeholder: "010-1234-5678"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).phoneNumber,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).phoneNumber = $event,
                                              label: "핸드폰",
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
                                            label: "이메일",
                                            placeholder: "seoulit@seoulit.com"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: unref(detailDailyLaborEmp).email,
                                              "onUpdate:modelValue": ($event) => unref(detailDailyLaborEmp).email = $event,
                                              label: "이메일",
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
                                            label: "정상급여유형"
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
                                            label: "정상급여",
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
                                            label: "연장급여(시급)",
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
                                            label: "야간급여(시급)",
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
                                            items: ["하나", "신한", "농협", "경남"],
                                            label: "은행"
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
                                            label: "계좌번호"
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
                                            label: "예금주"
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
                                            label: "핸드폰",
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
                                            label: "이메일",
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
                                    _push6(` 신규 `);
                                  } else {
                                    return [
                                      createTextVNode(" 신규 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { onClick: updateEmpList }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 마감 `);
                                  } else {
                                    return [
                                      createTextVNode(" 마감 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { onClick: insertEmpList }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 저장 `);
                                  } else {
                                    return [
                                      createTextVNode(" 저장 ")
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
                                          label: "사원 번호",
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
                                          label: "사원 번호",
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
                                          label: "성명",
                                          placeholder: "홍길동"
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
                                          label: "주민등록번호",
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
                                          label: "내/외국인"
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
                                          label: "부서"
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
                                          label: "프로젝트",
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
                                          label: "근무시작일"
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
                                          label: "근무종료일"
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
                                          label: "보험대상여부"
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
                                          label: "정상급여유형"
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
                                          label: "정상급여",
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
                                          label: "연장급여(시급)",
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
                                          label: "야간급여(시급)",
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
                                          items: ["하나", "신한", "농협", "경남"],
                                          label: "은행"
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
                                          label: "계좌번호"
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
                                          label: "예금주"
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
                                          label: "핸드폰",
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
                                          label: "이메일",
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
                                      createTextVNode(" 신규 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, { onClick: updateEmpList }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 마감 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, { onClick: insertEmpList }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 저장 ")
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
                                        label: "사원 번호",
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
                                        label: "사원 번호",
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
                                        label: "성명",
                                        placeholder: "홍길동"
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
                                        label: "주민등록번호",
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
                                        label: "내/외국인"
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
                                        label: "부서"
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
                                        label: "프로젝트",
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
                                        label: "근무시작일"
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
                                        label: "근무종료일"
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
                                        label: "보험대상여부"
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
                                        label: "정상급여유형"
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
                                        label: "정상급여",
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
                                        label: "연장급여(시급)",
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
                                        label: "야간급여(시급)",
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
                                        items: ["하나", "신한", "농협", "경남"],
                                        label: "은행"
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
                                        label: "계좌번호"
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
                                        label: "예금주"
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
                                        label: "핸드폰",
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
                                        label: "이메일",
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
                                    createTextVNode(" 신규 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { onClick: updateEmpList }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 마감 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, { onClick: insertEmpList }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 저장 ")
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
                      title: "기본정보"
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
                                      label: "사원 번호",
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
                                      label: "사원 번호",
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
                                      label: "성명",
                                      placeholder: "홍길동"
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
                                      label: "주민등록번호",
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
                                      label: "내/외국인"
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
                                      label: "부서"
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
                                      label: "프로젝트",
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
                                      label: "근무시작일"
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
                                      label: "근무종료일"
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
                                      label: "보험대상여부"
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
                                      label: "정상급여유형"
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
                                      label: "정상급여",
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
                                      label: "연장급여(시급)",
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
                                      label: "야간급여(시급)",
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
                                      items: ["하나", "신한", "농협", "경남"],
                                      label: "은행"
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
                                      label: "계좌번호"
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
                                      label: "예금주"
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
                                      label: "핸드폰",
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
                                      label: "이메일",
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
                                  createTextVNode(" 신규 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { onClick: updateEmpList }, {
                                default: withCtx(() => [
                                  createTextVNode(" 마감 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, { onClick: insertEmpList }, {
                                default: withCtx(() => [
                                  createTextVNode(" 저장 ")
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
                    title: "일용직 사원 목록"
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
                    title: "기본정보"
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
                                    label: "사원 번호",
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
                                    label: "사원 번호",
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
                                    label: "성명",
                                    placeholder: "홍길동"
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
                                    label: "주민등록번호",
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
                                    label: "내/외국인"
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
                                    label: "부서"
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
                                    label: "프로젝트",
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
                                    label: "근무시작일"
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
                                    label: "근무종료일"
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
                                    label: "보험대상여부"
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
                                    label: "정상급여유형"
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
                                    label: "정상급여",
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
                                    label: "연장급여(시급)",
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
                                    label: "야간급여(시급)",
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
                                    items: ["하나", "신한", "농협", "경남"],
                                    label: "은행"
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
                                    label: "계좌번호"
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
                                    label: "예금주"
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
                                    label: "핸드폰",
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
                                    label: "이메일",
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
                                createTextVNode(" 신규 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { onClick: updateEmpList }, {
                              default: withCtx(() => [
                                createTextVNode(" 마감 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, { onClick: insertEmpList }, {
                              default: withCtx(() => [
                                createTextVNode(" 저장 ")
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
              text: "사원 클릭하여 마감처리바랍니다."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "사원 클릭하여 마감처리바랍니다."
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
              text: "존재하는 사원 번호입니다."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "존재하는 사원 번호입니다."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailyemp/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
