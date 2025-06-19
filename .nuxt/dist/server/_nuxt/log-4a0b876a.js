import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, computed, withCtx, unref, isRef, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { d as dailyLaborStore } from "./index-183b4e75.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn } from "../server.mjs";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "./VCheckboxBtn-aab82c77.js";
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
  __name: "log",
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
    const DailyLaborStore = dailyLaborStore();
    const empLogList = ref([]);
    const selectedRows = ref([]);
    const headers = [
      { title: "성명", key: "employeeName", align: "center" },
      { title: "주민등록번호", key: "residentialNumber", align: "center" },
      { title: "프로젝트", key: "project", align: "center" },
      { title: "부서", key: "department", align: "center" },
      { title: "시작날짜", key: "workStartDate", align: "center" },
      { title: "종료날짜", key: "workEndDate", align: "center" },
      { title: "핸드폰", key: "phoneNumber", align: "center" }
    ];
    const fetchData = async () => {
      await DailyLaborStore.FETCH_EMP_LOG();
      empLogList.value = await DailyLaborStore.empLogList;
    };
    const removelog = async () => {
      const payload = [];
      selectedRows.value.forEach((element) => {
        const logData = {
          employeeName: element.employeeName,
          residentialNumber: element.residentialNumber
        };
        payload.push(logData);
      });
      await DailyLaborStore.DELETE_EMP_LOG(payload);
      await fetchData();
    };
    const filteredData = computed(() => {
      return empLogList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6"> 일용근로 직원이력 관리 </h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          placeholder: "Search",
                          density: "compact"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removelog
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 이력 삭제 `);
                            } else {
                              return [
                                createTextVNode(" 이력 삭제 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "inline-size": "10rem" } }, [
                            createVNode(_component_AppTextField, {
                              modelValue: unref(search),
                              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                              placeholder: "Search",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VSpacer),
                          createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                            createVNode(VBtn, {
                              "prepend-icon": "tabler-minus",
                              onClick: removelog
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 이력 삭제 ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    modelValue: unref(selectedRows),
                    "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                    headers,
                    items: unref(filteredData),
                    "item-value": "residentialNumber",
                    "return-object": "",
                    "show-select": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "inline-size": "10rem" } }, [
                          createVNode(_component_AppTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            placeholder: "Search",
                            density: "compact"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                          createVNode(VBtn, {
                            "prepend-icon": "tabler-minus",
                            onClick: removelog
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 이력 삭제 ")
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
                      "item-value": "residentialNumber",
                      "return-object": "",
                      "show-select": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "inline-size": "10rem" } }, [
                        createVNode(_component_AppTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          placeholder: "Search",
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                        createVNode(VBtn, {
                          "prepend-icon": "tabler-minus",
                          onClick: removelog
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 이력 삭제 ")
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
                    "item-value": "residentialNumber",
                    "return-object": "",
                    "show-select": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/dailyemp/log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
