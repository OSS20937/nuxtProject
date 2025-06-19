import { _ as _sfc_main$1 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$2 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, withCtx, createTextVNode, createVNode, unref, useSSRContext } from "vue";
import "hookable";
import { o as useRouter, V as VCard, f as VCardText, b as VBtn, l as VDialog, e as VCardActions } from "../server.mjs";
import "devalue";
import "defu";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import "./index-77616e20.js";
import "./index-4eaf1d02.js";
import axios from "axios";
import * as xlsx from "xlsx";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-258f0110.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VTextarea } from "./VTextarea-ec6cbc85.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "cookie-es";
import "destr";
import "ohash";
import "@antfu/utils";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@casl/vue";
/* empty css                */const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "approval",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-0001") {
      router.push("/hr/confinement/unauthorized");
    }
    const tab = ref("personal-info");
    const empCode1 = ref("");
    ref("");
    const empName_list = ref([]);
    const deptName = ref("");
    const deptName_list = ref([]);
    const startDate = ref("");
    const endDate = ref("");
    const selectedRows = ref([]);
    const eduCode = ref("");
    const dialog = ref(false);
    const rejectCause = ref("");
    const printCertificate = ref([]);
    const isSuccessFunc = ref(false);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("완료되었습니다.");
    const eduList = ref([]);
    const headers = [
      { title: "교육코드", key: "eduCode", width: 120 },
      { title: "교육명", key: "eduName", width: "150px" },
      { title: "직원코드", key: "empCode", width: 120 },
      { title: "직원명", key: "empName", width: 100 },
      { title: "부서코드", key: "deptCode", width: 120 },
      { title: "부서명", key: "deptName", width: 100 },
      { title: "교육 이수 내역", key: "eduHistory", width: "150px" },
      { title: "승인상태", key: "status", width: 120 },
      { title: "검색년도", key: "searchYear", width: "150px" },
      { title: "반려사유", key: "rejectCause", witdh: "300px" },
      { title: "비고", key: "etc", width: "300px" },
      { title: "증명서구분", key: "category", witdh: 120 }
    ];
    const fetchData = async () => {
      if (deptName.value === "" || startDate.value === "" || endDate.value === "" || empCode1.value === "") {
        alert("모든 항목을 선택해주세요.");
        return;
      }
      await axios.get("http://localhost:8282/hr/edu/findEduList", {
        params: { startDate: startDate.value, endDate: endDate.value, empCode: empCode1.value, deptName: deptName.value }
      }).then((res) => {
        eduList.value = res.data.eduList;
        console.log("eduList", eduList.value);
      }).catch((e) => console.error(e));
    };
    const updateStatus = async (title) => {
      if (empStore.empCode !== "EMP-0001") {
        snackbarColor.value = "error";
        snackbarText.value = "⛔ 권한이 없습니다. 관리자에게 문의해주세요.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      if (selectedRows.value.length === 0) {
        alert("항목을 선택해주세요.");
        return;
      }
      if (title === "승인") {
        if (selectedRows.value[0].status === "승인") {
          alert("이미 승인된 건입니다.");
          return;
        }
      }
      const status = title === "승인" ? "approval" : "cancel";
      const message = title === "승인" ? "승인 완료되었습니다." : "승인 취소 완료되었습니다.";
      const updatedRowsData = selectedRows.value.map((row) => ({ ...row, status }));
      console.log("updatedRows", updatedRowsData);
      try {
        await axios.post("http://localhost:8282/hr/edu/approEduList", updatedRowsData);
        alert(message);
      } catch (error) {
        console.error(error);
      }
      selectedRows.value = [];
      fetchData();
    };
    const openModal = () => {
      var _a;
      if (selectedRows.value.length === 0) {
        alert("항목을 선택해주세요.");
        return;
      }
      if (((_a = selectedRows.value[0]) == null ? void 0 : _a.status) === "승인") {
        alert("승인된 건은 반려할 수 없습니다.");
        selectedRows.value = [];
        return;
      }
      dialog.value = true;
    };
    const excelDown = async () => {
      var _a;
      eduCode.value = (_a = selectedRows.value[0]) == null ? void 0 : _a.eduCode;
      console.log(eduCode.value);
      await axios.patch(`http://localhost:8282/hr/edu/updateUseDate/${eduCode.value}`).then((res) => {
        console.log("updateUseDate", res.data);
      }).catch((e) => console.error(e));
      await axios.get("http://localhost:8282/hr/edu/printEduCertificate", {
        params: { eduCode: eduCode.value }
      }).then((res) => {
        printCertificate.value = res.data.printCertificate;
        console.log("printCertificate.value", printCertificate.value);
        console.log("selectedRows.value", selectedRows.value);
        const certWS = xlsx.utils.json_to_sheet([printCertificate.value]);
        console.log("certWS", certWS);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, certWS, "certificate");
        xlsx.writeFile(wb, `${/* @__PURE__ */ new Date()}_${selectedRows.value[0].eduName}_${selectedRows.value[0].empName}_${selectedRows.value[0].etc}.xlsx`);
      }).catch((e) => console.error(e));
      selectedRows.value = [];
      fetchData();
    };
    const rejectCert = async () => {
      const updatedRowsData = selectedRows.value.map((row) => ({ ...row, status: "refer", rejectCause: rejectCause.value }));
      console.log("updatedRows", updatedRowsData);
      await axios.post("http://localhost:8282/hr/edu/approEduList", updatedRowsData);
      dialog.value = false;
      alert("승인 반려 완료되었습니다. ");
      selectedRows.value = [];
      fetchData();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$1;
      const _component_AppTextField = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event,
              height: "70"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: "personal-info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 📋 교육 승인 및 반려 `);
                      } else {
                        return [
                          createTextVNode(" 📋 교육 승인 및 반려 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 📋 교육 승인 및 반려 ")
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
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event,
                height: "70"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: "personal-info" }, {
                    default: withCtx(() => [
                      createTextVNode(" 📋 교육 승인 및 반려 ")
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
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, { value: "personal-info" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { class: "mb-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_AppSelect, {
                                                        modelValue: empCode1.value,
                                                        "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                        label: "직원명",
                                                        items: empName_list.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_AppSelect, {
                                                          modelValue: empCode1.value,
                                                          "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                          label: "직원명",
                                                          items: empName_list.value,
                                                          clearable: "",
                                                          "clear-icon": "tabler-x"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_AppSelect, {
                                                        modelValue: deptName.value,
                                                        "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                        label: "부서명",
                                                        items: deptName_list.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_AppSelect, {
                                                          modelValue: deptName.value,
                                                          "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                          label: "부서명",
                                                          items: deptName_list.value,
                                                          clearable: "",
                                                          "clear-icon": "tabler-x"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "3",
                                                  mt: "4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_AppTextField, {
                                                        modelValue: startDate.value,
                                                        "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                        type: "date",
                                                        label: "시작일",
                                                        placeholder: "시작일"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_AppTextField, {
                                                          modelValue: startDate.value,
                                                          "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                          type: "date",
                                                          label: "시작일",
                                                          placeholder: "시작일"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "3",
                                                  mt: "4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_AppTextField, {
                                                        modelValue: endDate.value,
                                                        "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                        type: "date",
                                                        label: "종료일",
                                                        placeholder: "종료일"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_AppTextField, {
                                                          modelValue: endDate.value,
                                                          "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                          type: "date",
                                                          label: "종료일",
                                                          placeholder: "종료일"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  class: "mt-10",
                                                  onClick: fetchData
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` 조회 `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" 조회 ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_AppSelect, {
                                                        modelValue: empCode1.value,
                                                        "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                        label: "직원명",
                                                        items: empName_list.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_AppSelect, {
                                                        modelValue: deptName.value,
                                                        "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                        label: "부서명",
                                                        items: deptName_list.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "3",
                                                    mt: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_AppTextField, {
                                                        modelValue: startDate.value,
                                                        "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                        type: "date",
                                                        label: "시작일",
                                                        placeholder: "시작일"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "3",
                                                    mt: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_AppTextField, {
                                                        modelValue: endDate.value,
                                                        "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                        type: "date",
                                                        label: "종료일",
                                                        placeholder: "종료일"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    class: "mt-10",
                                                    onClick: fetchData
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 조회 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_AppSelect, {
                                                      modelValue: empCode1.value,
                                                      "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                      label: "직원명",
                                                      items: empName_list.value,
                                                      clearable: "",
                                                      "clear-icon": "tabler-x"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_AppSelect, {
                                                      modelValue: deptName.value,
                                                      "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                      label: "부서명",
                                                      items: deptName_list.value,
                                                      clearable: "",
                                                      "clear-icon": "tabler-x"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "3",
                                                  mt: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_AppTextField, {
                                                      modelValue: startDate.value,
                                                      "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                      type: "date",
                                                      label: "시작일",
                                                      placeholder: "시작일"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "3",
                                                  mt: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_AppTextField, {
                                                      modelValue: endDate.value,
                                                      "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                      type: "date",
                                                      label: "종료일",
                                                      placeholder: "종료일"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  class: "mt-10",
                                                  onClick: fetchData
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" 조회 ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: empCode1.value,
                                                    "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                    label: "직원명",
                                                    items: empName_list.value,
                                                    clearable: "",
                                                    "clear-icon": "tabler-x"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: deptName.value,
                                                    "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                    label: "부서명",
                                                    items: deptName_list.value,
                                                    clearable: "",
                                                    "clear-icon": "tabler-x"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "3",
                                                mt: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: startDate.value,
                                                    "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                    type: "date",
                                                    label: "시작일",
                                                    placeholder: "시작일"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "3",
                                                mt: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: endDate.value,
                                                    "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                    type: "date",
                                                    label: "종료일",
                                                    placeholder: "종료일"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                class: "mt-10",
                                                onClick: fetchData
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" 조회 ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { class: "mb-6" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: empCode1.value,
                                                  "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                  label: "직원명",
                                                  items: empName_list.value,
                                                  clearable: "",
                                                  "clear-icon": "tabler-x"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: deptName.value,
                                                  "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                  label: "부서명",
                                                  items: deptName_list.value,
                                                  clearable: "",
                                                  "clear-icon": "tabler-x"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "3",
                                              mt: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: startDate.value,
                                                  "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                  type: "date",
                                                  label: "시작일",
                                                  placeholder: "시작일"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "3",
                                              mt: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: endDate.value,
                                                  "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                  type: "date",
                                                  label: "종료일",
                                                  placeholder: "종료일"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              class: "mt-10",
                                              onClick: fetchData
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" 조회 ")
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
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, { value: "personal-info" }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "mb-6" }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: empCode1.value,
                                                "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                                label: "직원명",
                                                items: empName_list.value,
                                                clearable: "",
                                                "clear-icon": "tabler-x"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: deptName.value,
                                                "onUpdate:modelValue": ($event) => deptName.value = $event,
                                                label: "부서명",
                                                items: deptName_list.value,
                                                clearable: "",
                                                "clear-icon": "tabler-x"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "3",
                                            mt: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: startDate.value,
                                                "onUpdate:modelValue": ($event) => startDate.value = $event,
                                                type: "date",
                                                label: "시작일",
                                                placeholder: "시작일"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "3",
                                            mt: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: endDate.value,
                                                "onUpdate:modelValue": ($event) => endDate.value = $event,
                                                type: "date",
                                                label: "종료일",
                                                placeholder: "종료일"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            class: "mt-10",
                                            onClick: fetchData
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" 조회 ")
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
                              })
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
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event,
                      class: "disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: "personal-info" }, {
                          default: withCtx(() => [
                            createVNode(VCard, { class: "mb-6" }, {
                              default: withCtx(() => [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: empCode1.value,
                                              "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                              label: "직원명",
                                              items: empName_list.value,
                                              clearable: "",
                                              "clear-icon": "tabler-x"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: deptName.value,
                                              "onUpdate:modelValue": ($event) => deptName.value = $event,
                                              label: "부서명",
                                              items: deptName_list.value,
                                              clearable: "",
                                              "clear-icon": "tabler-x"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "3",
                                          mt: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: startDate.value,
                                              "onUpdate:modelValue": ($event) => startDate.value = $event,
                                              type: "date",
                                              label: "시작일",
                                              placeholder: "시작일"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "3",
                                          mt: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: endDate.value,
                                              "onUpdate:modelValue": ($event) => endDate.value = $event,
                                              type: "date",
                                              label: "종료일",
                                              placeholder: "종료일"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          class: "mt-10",
                                          onClick: fetchData
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" 조회 ")
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
                            })
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
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, { value: "personal-info" }, {
                        default: withCtx(() => [
                          createVNode(VCard, { class: "mb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: empCode1.value,
                                            "onUpdate:modelValue": ($event) => empCode1.value = $event,
                                            label: "직원명",
                                            items: empName_list.value,
                                            clearable: "",
                                            "clear-icon": "tabler-x"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: deptName.value,
                                            "onUpdate:modelValue": ($event) => deptName.value = $event,
                                            label: "부서명",
                                            items: deptName_list.value,
                                            clearable: "",
                                            "clear-icon": "tabler-x"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "3",
                                        mt: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: startDate.value,
                                            "onUpdate:modelValue": ($event) => startDate.value = $event,
                                            type: "date",
                                            label: "시작일",
                                            placeholder: "시작일"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "3",
                                        mt: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: endDate.value,
                                            "onUpdate:modelValue": ($event) => endDate.value = $event,
                                            type: "date",
                                            label: "종료일",
                                            placeholder: "종료일"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        class: "mt-10",
                                        onClick: fetchData
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 조회 ")
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
                          })
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
      _push(ssrRenderComponent(VCard, { class: "mt-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "mt-3 mb-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 증명서승인내역 `);
                } else {
                  return [
                    createTextVNode(" 증명서승인내역 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              modelValue: selectedRows.value,
              "onUpdate:modelValue": ($event) => selectedRows.value = $event,
              headers,
              items: eduList.value,
              "items-per-page": 10,
              "show-select": "",
              "return-object": "",
              "item-value": "certificateNo"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "text-right mr-3 mb-2 mt-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mr-2",
                          color: "primary",
                          onClick: ($event) => updateStatus("승인")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 승인 `);
                            } else {
                              return [
                                createTextVNode(" 승인 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "mr-2",
                          onClick: openModal
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 승인반려 `);
                            } else {
                              return [
                                createTextVNode(" 승인반려 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: excelDown
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 출력 `);
                            } else {
                              return [
                                createTextVNode(" 출력 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "mr-2",
                            color: "primary",
                            onClick: ($event) => updateStatus("승인")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            class: "mr-2",
                            onClick: openModal
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 승인반려 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: excelDown
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 출력 ")
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
                          class: "mr-2",
                          color: "primary",
                          onClick: ($event) => updateStatus("승인")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          class: "mr-2",
                          onClick: openModal
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 승인반려 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: excelDown
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 출력 ")
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
              createVNode(VCardText, { class: "mt-3 mb-3" }, {
                default: withCtx(() => [
                  createTextVNode(" 증명서승인내역 ")
                ]),
                _: 1
              }),
              createVNode(unref(VDataTable), {
                modelValue: selectedRows.value,
                "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                headers,
                items: eduList.value,
                "items-per-page": 10,
                "show-select": "",
                "return-object": "",
                "item-value": "certificateNo"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(VRow, { class: "text-right mr-3 mb-2 mt-3" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mr-2",
                        color: "primary",
                        onClick: ($event) => updateStatus("승인")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        class: "mr-2",
                        onClick: openModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 승인반려 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: excelDown
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 출력 ")
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
      _push(`<div class="text-center">`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        width: "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 반려사유를 입력해주세요. `);
                      } else {
                        return [
                          createTextVNode(" 반려사유를 입력해주세요. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: rejectCause.value,
                          "onUpdate:modelValue": ($event) => rejectCause.value = $event,
                          clearable: "",
                          label: "반려사유",
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextarea, {
                            modelValue: rejectCause.value,
                            "onUpdate:modelValue": ($event) => rejectCause.value = $event,
                            clearable: "",
                            label: "반려사유",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: rejectCert
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 반려 `);
                            } else {
                              return [
                                createTextVNode(" 반려 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: ($event) => dialog.value = false
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
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: rejectCert
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 반려 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: ($event) => dialog.value = false
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
                        createTextVNode(" 반려사유를 입력해주세요. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VTextarea, {
                          modelValue: rejectCause.value,
                          "onUpdate:modelValue": ($event) => rejectCause.value = $event,
                          clearable: "",
                          label: "반려사유",
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: rejectCert
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 반려 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: ($event) => dialog.value = false
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" 반려사유를 입력해주세요. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VTextarea, {
                        modelValue: rejectCause.value,
                        "onUpdate:modelValue": ($event) => rejectCause.value = $event,
                        clearable: "",
                        label: "반려사유",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: rejectCert
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 반려 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: ($event) => dialog.value = false
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
              title: "알림",
              text: snackbarText.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: snackbarType.value,
                title: "알림",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/education/approval.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
