import { _ as _sfc_main$2 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$3 } from "./AppTextField-dee429aa.js";
import { _ as _sfc_main$4 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, isRef, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { h as hrApi, d as defineStore, n as attenStore, l as VDialog, V as VCard, f as VCardText, e as VCardActions, b as VBtn } from "../server.mjs";
import "./index-77616e20.js";
import axios from "axios";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VTextarea } from "./VTextarea-ec6cbc85.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-258f0110.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
import "vue-flatpickr-component";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "@unhead/shared";
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
/* empty css                */const CERT_URL = "/certificate";
function removeCertificateRequest(payload) {
  return hrApi.post(`${CERT_URL}/deleteCertificateOne`, payload);
}
function updateCertificateRequest(payload) {
  return hrApi.post(`${CERT_URL}/updateCertificate`, payload);
}
const certStore = defineStore("certStore", {
  state: () => ({
    response: []
  }),
  actions: {
    // 증명서 신청 삭제
    async REMOVE_CERT_REQUEST(searchOption) {
      try {
        const res = await removeCertificateRequest(searchOption);
        console.log(res.data);
        this.response = res.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 증명서 신청 수정
    async UPDATE_CERT_REQUEST(searchOption) {
      try {
        const res = await updateCertificateRequest(searchOption);
        console.log(res.data);
        this.response = res.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "addDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const dept_list2 = ref([]);
    const emp_list_by_dept2 = ref([]);
    const newSelectedDeptCode = ref("");
    const newSelectedEmpCode = ref("");
    const newRequestDate = ref("");
    const newCategory = ref("");
    const newUsageName = ref("");
    const newEtc = ref("");
    const items = ["재직증명서", "경력증명서", "급여명세서"];
    const use = [
      { title: "금융기관 제출용", value: "ELM001" },
      { title: "관공서 제출용", value: "ELM002" },
      { title: "회사 제출용", value: "ELM003" },
      { title: "기타 제출용", value: "ELM004" }
    ];
    watch(newSelectedDeptCode, () => {
      fetchEmpList2();
    });
    const fetchEmpList2 = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(newSelectedDeptCode.value);
      emp_list_by_dept2.value = Object.values(attenStore().empList).map((item) => {
        return { title: item.empName, value: item.empCode };
      });
    };
    const newCert = async () => {
      const newCert2 = {
        empCode: newSelectedEmpCode.value,
        requestDate: newRequestDate.value,
        category: newCategory.value,
        usageCode: newUsageName.value,
        etc: newEtc.value
      };
      console.log(newCert2);
      await axios.post(
        "http://localhost:8282/hr/certificate/insertCertificateRequest",
        newCert2
      ).then((res) => {
        console.log(res.data);
        alert("신규 신청이 등록되었습니다.");
        attenStore().SET_DIALOG_BTN(false);
      }).catch((e) => console.error(e));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(attenStore)().isDialogBtn,
        "onUpdate:modelValue": ($event) => unref(attenStore)().isDialogBtn = $event,
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
                        _push4(` 신청 정보를 입력해주세요. `);
                      } else {
                        return [
                          createTextVNode(" 신청 정보를 입력해주세요. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(newSelectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(newSelectedDeptCode) ? newSelectedDeptCode.value = $event : null,
                          label: "부서명",
                          items: unref(dept_list2),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(newSelectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(newSelectedEmpCode) ? newSelectedEmpCode.value = $event : null,
                          label: "사원명",
                          items: unref(emp_list_by_dept2),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: unref(newRequestDate),
                          "onUpdate:modelValue": ($event) => isRef(newRequestDate) ? newRequestDate.value = $event : null,
                          type: "date",
                          label: "신청일",
                          placeholder: "신청일"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(newCategory),
                          "onUpdate:modelValue": ($event) => isRef(newCategory) ? newCategory.value = $event : null,
                          label: "증명서구분",
                          items,
                          "append-inner-icon": "tabler-search"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: unref(newUsageName),
                          "onUpdate:modelValue": ($event) => isRef(newUsageName) ? newUsageName.value = $event : null,
                          label: "용도",
                          items: use
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(newEtc),
                          "onUpdate:modelValue": ($event) => isRef(newEtc) ? newEtc.value = $event : null,
                          clearable: "",
                          label: "신청사유",
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: unref(newSelectedDeptCode),
                            "onUpdate:modelValue": ($event) => isRef(newSelectedDeptCode) ? newSelectedDeptCode.value = $event : null,
                            label: "부서명",
                            items: unref(dept_list2),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(_component_AppSelect, {
                            modelValue: unref(newSelectedEmpCode),
                            "onUpdate:modelValue": ($event) => isRef(newSelectedEmpCode) ? newSelectedEmpCode.value = $event : null,
                            label: "사원명",
                            items: unref(emp_list_by_dept2),
                            clearable: "",
                            "clear-icon": "tabler-x"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(_component_AppTextField, {
                            modelValue: unref(newRequestDate),
                            "onUpdate:modelValue": ($event) => isRef(newRequestDate) ? newRequestDate.value = $event : null,
                            type: "date",
                            label: "신청일",
                            placeholder: "신청일"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AppSelect, {
                            modelValue: unref(newCategory),
                            "onUpdate:modelValue": ($event) => isRef(newCategory) ? newCategory.value = $event : null,
                            label: "증명서구분",
                            items,
                            "append-inner-icon": "tabler-search"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AppSelect, {
                            modelValue: unref(newUsageName),
                            "onUpdate:modelValue": ($event) => isRef(newUsageName) ? newUsageName.value = $event : null,
                            label: "용도",
                            items: use
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            modelValue: unref(newEtc),
                            "onUpdate:modelValue": ($event) => isRef(newEtc) ? newEtc.value = $event : null,
                            clearable: "",
                            label: "신청사유",
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
                          onClick: newCert
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 신청 `);
                            } else {
                              return [
                                createTextVNode(" 신청 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: ($event) => unref(attenStore)().SET_DIALOG_BTN(false)
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
                            onClick: newCert
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 신청 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: ($event) => unref(attenStore)().SET_DIALOG_BTN(false)
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
                        createTextVNode(" 신청 정보를 입력해주세요. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: unref(newSelectedDeptCode),
                          "onUpdate:modelValue": ($event) => isRef(newSelectedDeptCode) ? newSelectedDeptCode.value = $event : null,
                          label: "부서명",
                          items: unref(dept_list2),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(_component_AppSelect, {
                          modelValue: unref(newSelectedEmpCode),
                          "onUpdate:modelValue": ($event) => isRef(newSelectedEmpCode) ? newSelectedEmpCode.value = $event : null,
                          label: "사원명",
                          items: unref(emp_list_by_dept2),
                          clearable: "",
                          "clear-icon": "tabler-x"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(_component_AppTextField, {
                          modelValue: unref(newRequestDate),
                          "onUpdate:modelValue": ($event) => isRef(newRequestDate) ? newRequestDate.value = $event : null,
                          type: "date",
                          label: "신청일",
                          placeholder: "신청일"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_AppSelect, {
                          modelValue: unref(newCategory),
                          "onUpdate:modelValue": ($event) => isRef(newCategory) ? newCategory.value = $event : null,
                          label: "증명서구분",
                          items,
                          "append-inner-icon": "tabler-search"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_AppSelect, {
                          modelValue: unref(newUsageName),
                          "onUpdate:modelValue": ($event) => isRef(newUsageName) ? newUsageName.value = $event : null,
                          label: "용도",
                          items: use
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextarea, {
                          modelValue: unref(newEtc),
                          "onUpdate:modelValue": ($event) => isRef(newEtc) ? newEtc.value = $event : null,
                          clearable: "",
                          label: "신청사유",
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: newCert
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 신청 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: ($event) => unref(attenStore)().SET_DIALOG_BTN(false)
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
                      createTextVNode(" 신청 정보를 입력해주세요. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: unref(newSelectedDeptCode),
                        "onUpdate:modelValue": ($event) => isRef(newSelectedDeptCode) ? newSelectedDeptCode.value = $event : null,
                        label: "부서명",
                        items: unref(dept_list2),
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_AppSelect, {
                        modelValue: unref(newSelectedEmpCode),
                        "onUpdate:modelValue": ($event) => isRef(newSelectedEmpCode) ? newSelectedEmpCode.value = $event : null,
                        label: "사원명",
                        items: unref(emp_list_by_dept2),
                        clearable: "",
                        "clear-icon": "tabler-x"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_AppTextField, {
                        modelValue: unref(newRequestDate),
                        "onUpdate:modelValue": ($event) => isRef(newRequestDate) ? newRequestDate.value = $event : null,
                        type: "date",
                        label: "신청일",
                        placeholder: "신청일"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_AppSelect, {
                        modelValue: unref(newCategory),
                        "onUpdate:modelValue": ($event) => isRef(newCategory) ? newCategory.value = $event : null,
                        label: "증명서구분",
                        items,
                        "append-inner-icon": "tabler-search"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_AppSelect, {
                        modelValue: unref(newUsageName),
                        "onUpdate:modelValue": ($event) => isRef(newUsageName) ? newUsageName.value = $event : null,
                        label: "용도",
                        items: use
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextarea, {
                        modelValue: unref(newEtc),
                        "onUpdate:modelValue": ($event) => isRef(newEtc) ? newEtc.value = $event : null,
                        clearable: "",
                        label: "신청사유",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: newCert
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 신청 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: ($event) => unref(attenStore)().SET_DIALOG_BTN(false)
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hr/certificate/addDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "issue",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const tab = ref("personal-info");
    const startDate = ref("");
    const endDate = ref("");
    const selectedDeptCode = ref("");
    const dept_list = ref([]);
    const emp_list_by_dept = ref([]);
    const selectedEmpCode = ref("");
    const certificate_list = ref([]);
    const certificateNo = ref("");
    const category = ref("");
    const requestDate = ref("");
    const empCode = ref("");
    const empName = ref("");
    const deptName = ref("");
    const usageName = ref("");
    const etc = ref("");
    const items = ["재직증명서", "경력증명서", "급여명세서"];
    const use = [
      { title: "금융기관 제출용", value: "ELM001" },
      { title: "관공서 제출용", value: "ELM002" },
      { title: "회사 제출용", value: "ELM003" },
      { title: "기타 제출용", value: "ELM004" }
    ];
    const headers = [
      { title: "신청번호", key: "certificateNo" },
      { title: "신청일자", key: "requestDate" },
      { title: "사원명", key: "empName" },
      { title: "증명서구분", key: "category" },
      { title: "증명서용도", key: "usageName" },
      { title: "반려사유", key: "rejectCause" },
      { title: "승인상태", key: "approvalStatus" }
    ];
    const openModal = () => {
      attenStore().SET_DIALOG_BTN(true);
    };
    watch(selectedDeptCode, () => {
      fetchEmpList();
      selectedEmpCode.value = "";
    });
    const fetchEmpList = async () => {
      await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDeptCode.value);
      emp_list_by_dept.value = Object.values(attenStore().empList).map(
        (item) => {
          return {
            title: item.empName,
            value: { empName: item.empName, empCode: item.empCode }
          };
        }
      );
    };
    const fetchData = async () => {
      if (selectedEmpCode.value === "" || startDate.value === "" || endDate.value === "") {
        alert("모든 항목을 선택해주세요.");
        return;
      }
      console.log(selectedEmpCode.value.empCode);
      await axios.get("http://localhost:8282/hr/certificate/selectCertificateList", {
        params: {
          empCode: selectedEmpCode.value.empCode,
          startDate: startDate.value,
          endDate: endDate.value
        }
      }).then((res) => {
        console.log(res.data);
        certificate_list.value = res.data.certificateList;
      }).catch((e) => console.error(e));
    };
    const onRowClick = async (event, item) => {
      try {
        console.log("[clickRow]", item);
        certificateNo.value = item.item.certificateNo;
        category.value = item.item.category;
        requestDate.value = item.item.requestDate;
        empCode.value = item.item.empCode;
        empName.value = item.item.empName;
        deptName.value = item.item.deptName;
        usageName.value = item.item.usageName;
        etc.value = item.item.etc;
      } catch (e) {
        console.error(e);
      }
    };
    const updateCert = () => {
      if (certificateNo.value === "") {
        alert("수정할 건을 선택해주세요.");
        return;
      }
      const upRow = {
        certificateNo: certificateNo.value,
        usageCode: usageName.value,
        category: category.value,
        requestDate: requestDate.value,
        etc: etc.value
      };
      if (usageName.value === "금융기관 제출용" || usageName.value === "관공서 제출용" || usageName.value === "회사 제출용" || usageName.value === "기타 제출용") {
        alert("제출 용도를 다시 선택해주세요.");
        return;
      }
      console.log(upRow);
      certStore().UPDATE_CERT_REQUEST(upRow);
      alert("수정이 완료되었습니다. ");
      fetchData();
    };
    const deleteCert = () => {
      if (certificateNo.value === "") {
        alert("삭제할 건을 선택해주세요.");
        return;
      }
      const delRow = { certificateNo: certificateNo.value };
      console.log(delRow);
      certStore().REMOVE_CERT_REQUEST(delRow);
      alert("삭제가 완료되었습니다. ");
      fetchData();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      const _component_AppDateTimePicker = _sfc_main$4;
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
                        _push4(` 증명서 관리 `);
                      } else {
                        return [
                          createTextVNode(" 증명서 관리 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 증명서 관리 ")
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
                      createTextVNode(" 증명서 관리 ")
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
                                                        modelValue: selectedDeptCode.value,
                                                        "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                        label: "부서명",
                                                        items: dept_list.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_AppSelect, {
                                                          modelValue: selectedDeptCode.value,
                                                          "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                          label: "부서명",
                                                          items: dept_list.value,
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
                                                  sm: "3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_AppSelect, {
                                                        modelValue: selectedEmpCode.value,
                                                        "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                        label: "사원명",
                                                        items: emp_list_by_dept.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_AppSelect, {
                                                          modelValue: selectedEmpCode.value,
                                                          "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                          label: "사원명",
                                                          items: emp_list_by_dept.value,
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
                                                  class: "mt-9",
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
                                                        modelValue: selectedDeptCode.value,
                                                        "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                        label: "부서명",
                                                        items: dept_list.value,
                                                        clearable: "",
                                                        "clear-icon": "tabler-x"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_AppSelect, {
                                                        modelValue: selectedEmpCode.value,
                                                        "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                        label: "사원명",
                                                        items: emp_list_by_dept.value,
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
                                                    class: "mt-9",
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
                                                      modelValue: selectedDeptCode.value,
                                                      "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                      label: "부서명",
                                                      items: dept_list.value,
                                                      clearable: "",
                                                      "clear-icon": "tabler-x"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_AppSelect, {
                                                      modelValue: selectedEmpCode.value,
                                                      "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                      label: "사원명",
                                                      items: emp_list_by_dept.value,
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
                                                  class: "mt-9",
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
                                                    modelValue: selectedDeptCode.value,
                                                    "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                    label: "부서명",
                                                    items: dept_list.value,
                                                    clearable: "",
                                                    "clear-icon": "tabler-x"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_AppSelect, {
                                                    modelValue: selectedEmpCode.value,
                                                    "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                    label: "사원명",
                                                    items: emp_list_by_dept.value,
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
                                                class: "mt-9",
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
                                                  modelValue: selectedDeptCode.value,
                                                  "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                  label: "부서명",
                                                  items: dept_list.value,
                                                  clearable: "",
                                                  "clear-icon": "tabler-x"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppSelect, {
                                                  modelValue: selectedEmpCode.value,
                                                  "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                  label: "사원명",
                                                  items: emp_list_by_dept.value,
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
                                              class: "mt-9",
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
                                                modelValue: selectedDeptCode.value,
                                                "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                                label: "부서명",
                                                items: dept_list.value,
                                                clearable: "",
                                                "clear-icon": "tabler-x"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppSelect, {
                                                modelValue: selectedEmpCode.value,
                                                "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                                label: "사원명",
                                                items: emp_list_by_dept.value,
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
                                            class: "mt-9",
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
                                              modelValue: selectedDeptCode.value,
                                              "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                              label: "부서명",
                                              items: dept_list.value,
                                              clearable: "",
                                              "clear-icon": "tabler-x"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppSelect, {
                                              modelValue: selectedEmpCode.value,
                                              "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                              label: "사원명",
                                              items: emp_list_by_dept.value,
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
                                          class: "mt-9",
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
                                            modelValue: selectedDeptCode.value,
                                            "onUpdate:modelValue": ($event) => selectedDeptCode.value = $event,
                                            label: "부서명",
                                            items: dept_list.value,
                                            clearable: "",
                                            "clear-icon": "tabler-x"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppSelect, {
                                            modelValue: selectedEmpCode.value,
                                            "onUpdate:modelValue": ($event) => selectedEmpCode.value = $event,
                                            label: "사원명",
                                            items: emp_list_by_dept.value,
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
                                        class: "mt-9",
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
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 증명서신청내역 <br${_scopeId2}><br${_scopeId2}><br${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    headers,
                    items: certificate_list.value,
                    "items-per-page": 10,
                    "onClick:row": onRowClick
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" 증명서신청내역 "),
                    createVNode("br"),
                    createVNode("br"),
                    createVNode("br"),
                    createVNode(unref(VDataTable), {
                      headers,
                      items: certificate_list.value,
                      "items-per-page": 10,
                      "onClick:row": onRowClick
                    }, null, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createTextVNode(" 증명서신청내역 "),
                  createVNode("br"),
                  createVNode("br"),
                  createVNode("br"),
                  createVNode(unref(VDataTable), {
                    headers,
                    items: certificate_list.value,
                    "items-per-page": 10,
                    "onClick:row": onRowClick
                  }, null, 8, ["items"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`증명서신청`);
                } else {
                  return [
                    createTextVNode("증명서신청")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "ma-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: certificateNo.value,
                          "onUpdate:modelValue": ($event) => certificateNo.value = $event,
                          label: "신청번호",
                          "read-only": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: certificateNo.value,
                            "onUpdate:modelValue": ($event) => certificateNo.value = $event,
                            label: "신청번호",
                            "read-only": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          modelValue: category.value,
                          "onUpdate:modelValue": ($event) => category.value = $event,
                          label: "증명서구분",
                          items,
                          "append-inner-icon": "tabler-search"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: category.value,
                            "onUpdate:modelValue": ($event) => category.value = $event,
                            label: "증명서구분",
                            items,
                            "append-inner-icon": "tabler-search"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: requestDate.value,
                          "onUpdate:modelValue": ($event) => requestDate.value = $event,
                          "append-inner-icon": "tabler-calendar",
                          label: "신청일자"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: requestDate.value,
                            "onUpdate:modelValue": ($event) => requestDate.value = $event,
                            "append-inner-icon": "tabler-calendar",
                            label: "신청일자"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: deptName.value,
                          "onUpdate:modelValue": ($event) => deptName.value = $event,
                          label: "부서",
                          "read-only": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: deptName.value,
                            "onUpdate:modelValue": ($event) => deptName.value = $event,
                            label: "부서",
                            "read-only": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: empCode.value,
                          "onUpdate:modelValue": ($event) => empCode.value = $event,
                          label: "사원번호",
                          "read-only": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: empCode.value,
                            "onUpdate:modelValue": ($event) => empCode.value = $event,
                            label: "사원번호",
                            "read-only": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: empName.value,
                          "onUpdate:modelValue": ($event) => empName.value = $event,
                          label: "성명",
                          "read-only": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: empName.value,
                            "onUpdate:modelValue": ($event) => empName.value = $event,
                            label: "성명",
                            "read-only": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppSelect, {
                          modelValue: usageName.value,
                          "onUpdate:modelValue": ($event) => usageName.value = $event,
                          label: "용도",
                          items: use
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppSelect, {
                            modelValue: usageName.value,
                            "onUpdate:modelValue": ($event) => usageName.value = $event,
                            label: "용도",
                            items: use
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: etc.value,
                          "onUpdate:modelValue": ($event) => etc.value = $event,
                          label: "비고"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextField, {
                            modelValue: etc.value,
                            "onUpdate:modelValue": ($event) => etc.value = $event,
                            label: "비고"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        createVNode(_component_AppTextField, {
                          modelValue: certificateNo.value,
                          "onUpdate:modelValue": ($event) => certificateNo.value = $event,
                          label: "신청번호",
                          "read-only": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: category.value,
                          "onUpdate:modelValue": ($event) => category.value = $event,
                          label: "증명서구분",
                          items,
                          "append-inner-icon": "tabler-search"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: requestDate.value,
                          "onUpdate:modelValue": ($event) => requestDate.value = $event,
                          "append-inner-icon": "tabler-calendar",
                          label: "신청일자"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextField, {
                          modelValue: deptName.value,
                          "onUpdate:modelValue": ($event) => deptName.value = $event,
                          label: "부서",
                          "read-only": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextField, {
                          modelValue: empCode.value,
                          "onUpdate:modelValue": ($event) => empCode.value = $event,
                          label: "사원번호",
                          "read-only": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextField, {
                          modelValue: empName.value,
                          "onUpdate:modelValue": ($event) => empName.value = $event,
                          label: "성명",
                          "read-only": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_AppSelect, {
                          modelValue: usageName.value,
                          "onUpdate:modelValue": ($event) => usageName.value = $event,
                          label: "용도",
                          items: use
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextField, {
                          modelValue: etc.value,
                          "onUpdate:modelValue": ($event) => etc.value = $event,
                          label: "비고"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "text-right mr-2 mb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary mr-2",
                          class: "mr-2",
                          onClick: openModal
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 신규 `);
                            } else {
                              return [
                                createTextVNode(" 신규 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "mr-2",
                          color: "primary",
                          onClick: deleteCert
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 삭제 `);
                            } else {
                              return [
                                createTextVNode(" 삭제 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: updateCert
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 저장 `);
                            } else {
                              return [
                                createTextVNode(" 저장 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary mr-2",
                            class: "mr-2",
                            onClick: openModal
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 신규 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "mr-2",
                            color: "primary",
                            onClick: deleteCert
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 삭제 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: updateCert
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 저장 ")
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
                          color: "primary mr-2",
                          class: "mr-2",
                          onClick: openModal
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 신규 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "mr-2",
                          color: "primary",
                          onClick: deleteCert
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 삭제 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: updateCert
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 저장 ")
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
                  createTextVNode("증명서신청")
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "ma-2" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextField, {
                        modelValue: certificateNo.value,
                        "onUpdate:modelValue": ($event) => certificateNo.value = $event,
                        label: "신청번호",
                        "read-only": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: category.value,
                        "onUpdate:modelValue": ($event) => category.value = $event,
                        label: "증명서구분",
                        items,
                        "append-inner-icon": "tabler-search"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: requestDate.value,
                        "onUpdate:modelValue": ($event) => requestDate.value = $event,
                        "append-inner-icon": "tabler-calendar",
                        label: "신청일자"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextField, {
                        modelValue: deptName.value,
                        "onUpdate:modelValue": ($event) => deptName.value = $event,
                        label: "부서",
                        "read-only": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextField, {
                        modelValue: empCode.value,
                        "onUpdate:modelValue": ($event) => empCode.value = $event,
                        label: "사원번호",
                        "read-only": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextField, {
                        modelValue: empName.value,
                        "onUpdate:modelValue": ($event) => empName.value = $event,
                        label: "성명",
                        "read-only": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_AppSelect, {
                        modelValue: usageName.value,
                        "onUpdate:modelValue": ($event) => usageName.value = $event,
                        label: "용도",
                        items: use
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextField, {
                        modelValue: etc.value,
                        "onUpdate:modelValue": ($event) => etc.value = $event,
                        label: "비고"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "text-right mr-2 mb-2" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary mr-2",
                        class: "mr-2",
                        onClick: openModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 신규 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "mr-2",
                        color: "primary",
                        onClick: deleteCert
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 삭제 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: updateCert
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 저장 ")
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
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/certificate/issue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
