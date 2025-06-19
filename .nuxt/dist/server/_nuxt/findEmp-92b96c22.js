import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, unref, toRaw, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useDepartmentStore, a as usePositionStore } from "./index-1216d084.js";
import { u as useEmpStore } from "./index-fbfe3a36.js";
import _sfc_main$1 from "./empDetail-45f96c46.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VCard, g as VCardTitle, m as VSpacer, b as VBtn, l as VDialog } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VSelect } from "./VSelect-03a0285c.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
/* empty css                */import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "@unhead/shared";
import "vue-router";
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
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "findEmp",
  __ssrInlineRender: true,
  setup(__props) {
    useDepartmentStore();
    usePositionStore();
    const empStore = useEmpStore();
    const modalValue = ref(false);
    const selectedEmpCode = ref(null);
    const onRowClick = (event, item) => {
      selectedEmpCode.value = item.item.empCode;
      modalValue.value = true;
    };
    const closeDetailModal = () => {
      modalValue.value = false;
      selectedEmpCode.value = null;
    };
    const searchOptions = [
      "부서",
      "직급",
      "계약",
      "사원 번호",
      "이름"
    ];
    const onMainOptionChange = () => {
      if (searchOption.value === "사원 번호" || searchOption.value === "이름") {
        isNextSearch.value = true;
        isSearch.value = false;
      } else {
        isSearch.value = true;
      }
    };
    const onSubOptionChange = (newValue) => {
      console.log("선택된 세부 옵션:", newValue);
      const selectedDept = toRaw(department.value.find((dept) => dept.deptName === newValue));
      console.log("selectedDept", selectedDept);
      const selectedPosition = toRaw(position.value.find((postion) => postion.positionName === newValue));
      console.log("selectedPosition", selectedPosition);
      if (selectedDept !== void 0) {
        deptCode.value = selectedDept.deptCode;
        console.log("선택된 부서 코드:", deptCode.value);
      } else {
        deptCode.value = "";
      }
      if (selectedPosition !== void 0) {
        positionCode.value = selectedPosition.positionCode;
        console.log("선택된 직급 코드:", positionCode.value);
      }
      isNextSearch.value = true;
      isSearch.value = false;
    };
    const searchOption = ref("");
    const searchSubOption = ref("");
    const searchWord = ref("");
    const pageSize = ref(10);
    const lastRowNum = ref(0);
    const isSearch = ref(true);
    ref(false);
    const isNextSearch = ref(true);
    const department = ref({});
    const deptCode = ref("");
    const position = ref({});
    const positionCode = ref("");
    const employeeList = ref([]);
    const departmentList = ref([]);
    const positionList = ref([]);
    const contractList = ["정규직", "계약직", "인턴"];
    const tableHeaders = [
      { title: "번호", key: "rnum" },
      { title: "사원코드", key: "empCode" },
      { title: "이름", key: "empName" },
      { title: "출생년도", key: "birthDate" },
      { title: "성별", key: "gender" },
      { title: "전화번호", key: "phoneNumber" },
      { title: "부서", key: "deptName" },
      { title: "직급", key: "positionName" },
      { title: "계약", key: "empType" },
      { title: "상태", key: "empStatus" }
    ];
    const shouldShowSubOption = computed(
      () => ["부서", "직급", "계약"].includes(searchOption.value)
    );
    const shouldShowKeywordInput = computed(
      () => ["사원 번호", "이름", "전체"].includes(searchOption.value)
    );
    const subOptionItems = computed(() => {
      switch (searchOption.value) {
        case "부서":
          return departmentList.value;
        case "직급":
          return positionList.value;
        case "계약":
          return contractList;
        default:
          return [];
      }
    });
    const handleSearch = async () => {
      const empSearchCondition = {
        searchCondition: searchOption.value,
        //메인 검색 옵션
        deptCode: deptCode.value,
        //부서 코드
        positionCode: positionCode.value,
        //직급 코드
        contract: searchSubOption.value,
        //세부 옵션에서 선택한 것
        size: pageSize.value + 1,
        //검색 단위
        searchWord: searchWord.value
        //검색 단어
      };
      const res = ref([]);
      console.log("검색 조건:", empSearchCondition);
      await empStore.GET_EMP_LIST(empSearchCondition);
      res.value = [];
      res.value = [...empStore.empList];
      if (res.value.length > pageSize.value) {
        isNextSearch.value = false;
        employeeList.value = res.value.slice(0, pageSize.value);
        lastRowNum.value = pageSize.value;
      } else {
        isNextSearch.value = false;
        employeeList.value = [...res.value];
        lastRowNum.value = res.value.length;
      }
      if (res.value.length === 0) {
        alert("검색 결과가 없습니다.");
        isNextSearch.value = true;
      }
    };
    const handleNextSearch = async () => {
      const empListNextSearchData = {
        searchCondition: searchOption.value,
        //메인 검색 옵션
        deptCode: deptCode.value,
        //부서 코드
        positionCode: positionCode.value,
        //직급 코드
        contract: searchSubOption.value,
        //세부 옵션에서 선택한 것
        size: pageSize.value + 1,
        //검색 단위
        searchWord: searchWord.value,
        //검색 단어
        lastRowNum: lastRowNum.value
        //마지막 검색 항목 번호
      };
      const res = ref([]);
      console.log("검색 조건:", empListNextSearchData);
      await empStore.GET_EMP_LIST_NEXT_SEARCH(empListNextSearchData);
      res.value = [];
      res.value = [...empStore.empList];
      if (res.value.length > pageSize.value) {
        isNextSearch.value = false;
        employeeList.value = [...employeeList.value, ...res.value.slice(0, pageSize.value)];
        lastRowNum.value = employeeList.value.length;
        return;
      } else if (res.value.length !== 0) {
        employeeList.value = [...employeeList.value, ...res.value];
        lastRowNum.value = employeeList.value.length;
        return;
      } else if (res.value.length == 0) {
        isNextSearch.value = true;
        alert("검색 결과가 없습니다.");
        return;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "mt-6 pa-6 elevation-2",
              style: { "border-radius": "8px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h6 font-weight-bold mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 직원 검색 `);
                      } else {
                        return [
                          createTextVNode(" 직원 검색 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, {
                    class: "align-center",
                    dense: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: searchOption.value,
                                "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                                items: searchOptions,
                                label: "검색 옵션",
                                variant: "outlined",
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: searchOption.value,
                                  "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                                  items: searchOptions,
                                  label: "검색 옵션",
                                  variant: "outlined",
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: searchSubOption.value,
                                "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                                items: subOptionItems.value,
                                label: "세부 옵션",
                                variant: "outlined",
                                disabled: !shouldShowSubOption.value,
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: searchSubOption.value,
                                  "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                                  items: subOptionItems.value,
                                  label: "세부 옵션",
                                  variant: "outlined",
                                  disabled: !shouldShowSubOption.value,
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
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
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: searchWord.value,
                                "onUpdate:modelValue": ($event) => searchWord.value = $event,
                                label: "검색어 입력",
                                variant: "outlined",
                                disabled: !shouldShowKeywordInput.value,
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: searchWord.value,
                                  "onUpdate:modelValue": ($event) => searchWord.value = $event,
                                  label: "검색어 입력",
                                  variant: "outlined",
                                  disabled: !shouldShowKeywordInput.value,
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: pageSize.value,
                                "onUpdate:modelValue": ($event) => pageSize.value = $event,
                                items: [2, 5, 10, 25, 50, 100],
                                label: "검색 단위",
                                variant: "outlined",
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: pageSize.value,
                                  "onUpdate:modelValue": ($event) => pageSize.value = $event,
                                  items: [2, 5, 10, 25, 50, 100],
                                  label: "검색 단위",
                                  variant: "outlined",
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleSearch,
                                disabled: isSearch.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 검색 `);
                                  } else {
                                    return [
                                      createTextVNode(" 검색 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-white",
                                  onClick: handleSearch,
                                  disabled: isSearch.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 검색 ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleNextSearch,
                                disabled: isNextSearch.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 다음 검색 `);
                                  } else {
                                    return [
                                      createTextVNode(" 다음 검색 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-white",
                                  onClick: handleNextSearch,
                                  disabled: isNextSearch.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 다음 검색 ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: searchOption.value,
                                "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                                items: searchOptions,
                                label: "검색 옵션",
                                variant: "outlined",
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: searchSubOption.value,
                                "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                                items: subOptionItems.value,
                                label: "세부 옵션",
                                variant: "outlined",
                                disabled: !shouldShowSubOption.value,
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: searchWord.value,
                                "onUpdate:modelValue": ($event) => searchWord.value = $event,
                                label: "검색어 입력",
                                variant: "outlined",
                                disabled: !shouldShowKeywordInput.value,
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: pageSize.value,
                                "onUpdate:modelValue": ($event) => pageSize.value = $event,
                                items: [2, 5, 10, 25, 50, 100],
                                label: "검색 단위",
                                variant: "outlined",
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleSearch,
                                disabled: isSearch.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 검색 ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleNextSearch,
                                disabled: isNextSearch.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 다음 검색 ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
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
                    createVNode(VCardTitle, { class: "text-h6 font-weight-bold mb-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" 직원 검색 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, {
                      class: "align-center",
                      dense: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: searchOption.value,
                              "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                              items: searchOptions,
                              label: "검색 옵션",
                              variant: "outlined",
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: searchSubOption.value,
                              "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                              items: subOptionItems.value,
                              label: "세부 옵션",
                              variant: "outlined",
                              disabled: !shouldShowSubOption.value,
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: searchWord.value,
                              "onUpdate:modelValue": ($event) => searchWord.value = $event,
                              label: "검색어 입력",
                              variant: "outlined",
                              disabled: !shouldShowKeywordInput.value,
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: pageSize.value,
                              "onUpdate:modelValue": ($event) => pageSize.value = $event,
                              items: [2, 5, 10, 25, 50, 100],
                              label: "검색 단위",
                              variant: "outlined",
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer),
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "text-white",
                              onClick: handleSearch,
                              disabled: isSearch.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 검색 ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "text-white",
                              onClick: handleNextSearch,
                              disabled: isNextSearch.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 다음 검색 ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
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
              class: "elevation-1 mt-6",
              style: { "background": "white", "border-radius": "8px", "min-height": "300px" },
              headers: tableHeaders,
              items: employeeList.value,
              "item-value": "empCode",
              "onClick:row": onRowClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "mt-6 pa-6 elevation-2",
                style: { "border-radius": "8px" }
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6 font-weight-bold mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" 직원 검색 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, {
                    class: "align-center",
                    dense: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: searchOption.value,
                            "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                            items: searchOptions,
                            label: "검색 옵션",
                            variant: "outlined",
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: searchSubOption.value,
                            "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                            items: subOptionItems.value,
                            label: "세부 옵션",
                            variant: "outlined",
                            disabled: !shouldShowSubOption.value,
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: searchWord.value,
                            "onUpdate:modelValue": ($event) => searchWord.value = $event,
                            label: "검색어 입력",
                            variant: "outlined",
                            disabled: !shouldShowKeywordInput.value,
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: pageSize.value,
                            "onUpdate:modelValue": ($event) => pageSize.value = $event,
                            items: [2, 5, 10, 25, 50, 100],
                            label: "검색 단위",
                            variant: "outlined",
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-white",
                            onClick: handleSearch,
                            disabled: isSearch.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 검색 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-white",
                            onClick: handleNextSearch,
                            disabled: isNextSearch.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 다음 검색 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
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
                class: "elevation-1 mt-6",
                style: { "background": "white", "border-radius": "8px", "min-height": "300px" },
                headers: tableHeaders,
                items: employeeList.value,
                "item-value": "empCode",
                "onClick:row": onRowClick
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: modalValue.value,
        "onUpdate:modelValue": ($event) => modalValue.value = $event,
        "max-width": "600px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              empCode: selectedEmpCode.value,
              onClose: closeDetailModal
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                empCode: selectedEmpCode.value,
                onClose: closeDetailModal
              }, null, 8, ["empCode"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiztech/hr/emp/findEmp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
