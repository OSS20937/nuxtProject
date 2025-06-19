import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { _ as _sfc_main$2 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, computed, watch, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { d as dailyLaborStore } from "./index-183b4e75.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, i as VIcon } from "../server.mjs";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "./VCheckboxBtn-aab82c77.js";
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
/* empty css                */import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const search = ref("");
    const isSuccessFunc = ref(false);
    const DailyLaborStore = dailyLaborStore();
    const dateTimePicker = ref("");
    const dailyLaborSalaryList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "사번", key: "employeeId", align: "center" },
      { title: "직원명", key: "employeeName", align: "center" },
      { title: "총 급여", key: "totalPay", align: "center" },
      { title: "정상급여", key: "normalPay", align: "center" },
      { title: "연장급여", key: "overtimePay", align: "center" },
      { title: "야간급여", key: "nightPayRate", align: "center" }
    ];
    const fetchData = async () => {
      const payload = {
        date: dateTimePicker.value,
        deadline: "N",
        status: "N"
      };
      await DailyLaborStore.FIND_SALARY_LIST(payload);
      dailyLaborSalaryList.value = await DailyLaborStore.dailyLaborSalaryList;
    };
    const producebtn = async () => {
      const payload = {
        workDate: dateTimePicker.value
      };
      await DailyLaborStore.INSERT_SALARY_LIST(payload);
      await fetchData();
      isSuccessFunc.value = true;
    };
    const registerbtn = async () => {
      const payload = [];
      selectedRows.value.forEach((element) => {
        const slaryData = {
          employeeId: element.employeeId,
          workDate: element.workDate.substring(0, 10)
        };
        payload.push(slaryData);
      });
      await DailyLaborStore.UPDATE_SALARY_LIST(payload);
      await fetchData();
      isSuccessFunc.value = true;
    };
    const deletebtn = async () => {
      const payload = [];
      selectedRows.value.forEach((element) => {
        const slaryData = {
          employeeId: element.employeeId,
          workDate: element.workDate.substring(0, 10)
        };
        payload.push(slaryData);
      });
      await DailyLaborStore.DELETE_SALARY_LIST(payload);
      await fetchData();
      isSuccessFunc.value = true;
    };
    const filteredData = computed(() => {
      return dailyLaborSalaryList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    watch([dateTimePicker], fetchData, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      const _component_AppDateTimePicker = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6">일용근로 급여등록</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          density: "compact",
                          placeholder: "검색",
                          "append-inner-icon": "tabler-search",
                          "single-line": "",
                          "hide-details": "",
                          dense: "",
                          outlined: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "inline-size": "10rem" } }, [
                            createVNode(_component_AppTextField, {
                              modelValue: unref(search),
                              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                              density: "compact",
                              placeholder: "검색",
                              "append-inner-icon": "tabler-search",
                              "single-line": "",
                              "hide-details": "",
                              dense: "",
                              outlined: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { md: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(dateTimePicker),
                          "onUpdate:modelValue": ($event) => isRef(dateTimePicker) ? dateTimePicker.value = $event : null,
                          placeholder: "급여등록 날짜 검색"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(dateTimePicker),
                            "onUpdate:modelValue": ($event) => isRef(dateTimePicker) ? dateTimePicker.value = $event : null,
                            placeholder: "급여등록 날짜 검색"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, { onClick: producebtn }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }, null, _parent4, _scopeId3));
                        _push4(`생성 `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("생성 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, { onClick: registerbtn }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }, null, _parent4, _scopeId3));
                        _push4(`등록 `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("등록 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, { onClick: deletebtn }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "tabler-square-x"
                        }, null, _parent4, _scopeId3));
                        _push4(`삭제 `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-square-x"
                          }),
                          createTextVNode("삭제 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "inline-size": "10rem" } }, [
                          createVNode(_component_AppTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            density: "compact",
                            placeholder: "검색",
                            "append-inner-icon": "tabler-search",
                            "single-line": "",
                            "hide-details": "",
                            dense: "",
                            outlined: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VCol, { md: "2" }, {
                      default: withCtx(() => [
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(dateTimePicker),
                          "onUpdate:modelValue": ($event) => isRef(dateTimePicker) ? dateTimePicker.value = $event : null,
                          placeholder: "급여등록 날짜 검색"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, { onClick: producebtn }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("생성 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { onClick: registerbtn }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-checkbox"
                          }),
                          createTextVNode("등록 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { onClick: deletebtn }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "tabler-square-x"
                          }),
                          createTextVNode("삭제 ")
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
              items: unref(filteredData),
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
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          density: "compact",
                          placeholder: "검색",
                          "append-inner-icon": "tabler-search",
                          "single-line": "",
                          "hide-details": "",
                          dense: "",
                          outlined: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(VCol, { md: "2" }, {
                    default: withCtx(() => [
                      createVNode(_component_AppDateTimePicker, {
                        modelValue: unref(dateTimePicker),
                        "onUpdate:modelValue": ($event) => isRef(dateTimePicker) ? dateTimePicker.value = $event : null,
                        placeholder: "급여등록 날짜 검색"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, { onClick: producebtn }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }),
                        createTextVNode("생성 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, { onClick: registerbtn }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-checkbox"
                        }),
                        createTextVNode("등록 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, { onClick: deletebtn }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          icon: "tabler-square-x"
                        }),
                        createTextVNode("삭제 ")
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
                items: unref(filteredData),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailysal/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
