import { defineComponent, watch, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useEmpStore } from "./index-fbfe3a36.js";
import { V as VCard, g as VCardTitle, m as VSpacer, f as VCardText, e as VCardActions, b as VBtn } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "unhead";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empDetail",
  __ssrInlineRender: true,
  props: {
    empCode: {}
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const empStore = useEmpStore();
    const employee = {
      empCode: "",
      empName: "",
      hireDate: "",
      retireDate: "",
      birthDate: "",
      phoneNumber: "",
      gender: "",
      deptCode: "",
      positionCode: "",
      email: "",
      address: "",
      detailAddress: "",
      postalCode: "",
      hobong: "",
      educationLevel: "",
      profileImagePath: "",
      empType: "",
      entryType: "",
      authCode: "",
      empStatus: "",
      createdAt: "",
      createdBy: "",
      updatedAt: "",
      updatedBy: "",
      socialSecurityNo: ""
    };
    const getEmpDetail = async () => {
      console.log("empCode: ", props.empCode);
      const empCode = props.empCode;
      await empStore.GET_EMP_DETAIL(empCode);
    };
    watch(
      () => props.empCode,
      (newEmpCode) => {
        if (newEmpCode) {
          console.log("empCode 변경되어 실행됨: ", props.empCode);
          getEmpDetail();
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 직원 상세 정보 `);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" 직원 상세 정보 "),
                    createVNode(VSpacer)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (employee) {
                    _push3(`<div${_scopeId2}><p${_scopeId2}><strong${_scopeId2}>사번:</strong> ${ssrInterpolate(employee.empCode)}</p><p${_scopeId2}><strong${_scopeId2}>이름:</strong> ${ssrInterpolate(employee.empName)}</p><p${_scopeId2}><strong${_scopeId2}>부서:</strong> ${ssrInterpolate(employee.deptName)}</p><p${_scopeId2}><strong${_scopeId2}>직급:</strong> ${ssrInterpolate(employee.positionName)}</p></div>`);
                  } else {
                    _push3(`<div${_scopeId2}>데이터가 없습니다.</div>`);
                  }
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "elevated",
                          class: "text-white",
                          onClick: ($event) => _ctx.$emit("close")
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
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "elevated",
                            class: "text-white",
                            onClick: ($event) => _ctx.$emit("close")
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
                    employee ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("p", null, [
                        createVNode("strong", null, "사번:"),
                        createTextVNode(" " + toDisplayString(employee.empCode), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "이름:"),
                        createTextVNode(" " + toDisplayString(employee.empName), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "부서:"),
                        createTextVNode(" " + toDisplayString(employee.deptName), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "직급:"),
                        createTextVNode(" " + toDisplayString(employee.positionName), 1)
                      ])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, "데이터가 없습니다.")),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "elevated",
                          class: "text-white",
                          onClick: ($event) => _ctx.$emit("close")
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
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createTextVNode(" 직원 상세 정보 "),
                  createVNode(VSpacer)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  employee ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("p", null, [
                      createVNode("strong", null, "사번:"),
                      createTextVNode(" " + toDisplayString(employee.empCode), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "이름:"),
                      createTextVNode(" " + toDisplayString(employee.empName), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "부서:"),
                      createTextVNode(" " + toDisplayString(employee.deptName), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "직급:"),
                      createTextVNode(" " + toDisplayString(employee.positionName), 1)
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, "데이터가 없습니다.")),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "elevated",
                        class: "text-white",
                        onClick: ($event) => _ctx.$emit("close")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiztech/hr/emp/modal/empDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
