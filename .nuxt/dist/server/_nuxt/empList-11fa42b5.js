import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, computed, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { k as VApp, V as VCard, f as VCardText } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import "./VCheckboxBtn-aab82c77.js";
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
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empList",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(false);
    const headers = [
      // { title: '사번', key: 'empCode' },
      { title: "직원명", key: "empName" },
      { title: "입사일", key: "hireDate" },
      { title: "생년월일", key: "birthDate" },
      { title: "성별", key: "gender" },
      { title: "부서번호", key: "deptCode" },
      { title: "부서이름", key: "deptName" },
      { title: "고용상태", key: "retirementDate" }
    ];
    const empList = ref([]);
    const search = ref("");
    ref(false);
    const filteredEmpList = computed(() => {
      return empList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6">직원정보 조회</h1>`);
      _push(ssrRenderComponent(VApp, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                "offset-md": "",
                                md: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppTextField, {
                                      modelValue: search.value,
                                      "onUpdate:modelValue": ($event) => search.value = $event,
                                      density: "compact",
                                      placeholder: "Search",
                                      "append-inner-icon": "tabler-search",
                                      "single-line": "",
                                      "hide-details": "",
                                      dense: "",
                                      outlined: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppTextField, {
                                        modelValue: search.value,
                                        "onUpdate:modelValue": ($event) => search.value = $event,
                                        density: "compact",
                                        placeholder: "Search",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  "offset-md": "",
                                  md: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: search.value,
                                      "onUpdate:modelValue": ($event) => search.value = $event,
                                      density: "compact",
                                      placeholder: "Search",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VDataTable), {
                          headers,
                          items: filteredEmpList.value,
                          "items-per-page": 10
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                "offset-md": "",
                                md: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: search.value,
                                    "onUpdate:modelValue": ($event) => search.value = $event,
                                    density: "compact",
                                    placeholder: "Search",
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
                          }),
                          createVNode(unref(VDataTable), {
                            headers,
                            items: filteredEmpList.value,
                            "items-per-page": 10
                          }, null, 8, ["items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              "offset-md": "",
                              md: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: search.value,
                                  "onUpdate:modelValue": ($event) => search.value = $event,
                                  density: "compact",
                                  placeholder: "Search",
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
                        }),
                        createVNode(unref(VDataTable), {
                          headers,
                          items: filteredEmpList.value,
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            "offset-md": "",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: search.value,
                                "onUpdate:modelValue": ($event) => search.value = $event,
                                density: "compact",
                                placeholder: "Search",
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
                      }),
                      createVNode(unref(VDataTable), {
                        headers,
                        items: filteredEmpList.value,
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/affair/empList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
