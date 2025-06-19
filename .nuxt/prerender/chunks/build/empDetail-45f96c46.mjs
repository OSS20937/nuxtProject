import { defineComponent, watch, withCtx, createTextVNode, createVNode, createBlock, openBlock, toDisplayString, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { u as useEmpStore } from './index-fbfe3a36.mjs';
import { V as VCard, g as VCardTitle, m as VSpacer, f as VCardText, e as VCardActions, b as VBtn } from './server.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
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
      empName: ""};
    const getEmpDetail = async () => {
      console.log("empCode: ", props.empCode);
      const empCode = props.empCode;
      await empStore.GET_EMP_DETAIL(empCode);
    };
    watch(
      () => props.empCode,
      (newEmpCode) => {
        if (newEmpCode) {
          console.log("empCode \uBCC0\uACBD\uB418\uC5B4 \uC2E4\uD589\uB428: ", props.empCode);
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
                  _push3(` \uC9C1\uC6D0 \uC0C1\uC138 \uC815\uBCF4 `);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" \uC9C1\uC6D0 \uC0C1\uC138 \uC815\uBCF4 "),
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
                    _push3(`<div${_scopeId2}><p${_scopeId2}><strong${_scopeId2}>\uC0AC\uBC88:</strong> ${ssrInterpolate(employee.empCode)}</p><p${_scopeId2}><strong${_scopeId2}>\uC774\uB984:</strong> ${ssrInterpolate(employee.empName)}</p><p${_scopeId2}><strong${_scopeId2}>\uBD80\uC11C:</strong> ${ssrInterpolate(employee.deptName)}</p><p${_scopeId2}><strong${_scopeId2}>\uC9C1\uAE09:</strong> ${ssrInterpolate(employee.positionName)}</p></div>`);
                  } else {
                    _push3(`<div${_scopeId2}>\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>`);
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
                              _push5(` \uB2EB\uAE30 `);
                            } else {
                              return [
                                createTextVNode(" \uB2EB\uAE30 ")
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
                              createTextVNode(" \uB2EB\uAE30 ")
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
                        createVNode("strong", null, "\uC0AC\uBC88:"),
                        createTextVNode(" " + toDisplayString(employee.empCode), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "\uC774\uB984:"),
                        createTextVNode(" " + toDisplayString(employee.empName), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "\uBD80\uC11C:"),
                        createTextVNode(" " + toDisplayString(employee.deptName), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "\uC9C1\uAE09:"),
                        createTextVNode(" " + toDisplayString(employee.positionName), 1)
                      ])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, "\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")),
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
                            createTextVNode(" \uB2EB\uAE30 ")
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
                  createTextVNode(" \uC9C1\uC6D0 \uC0C1\uC138 \uC815\uBCF4 "),
                  createVNode(VSpacer)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  employee ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("p", null, [
                      createVNode("strong", null, "\uC0AC\uBC88:"),
                      createTextVNode(" " + toDisplayString(employee.empCode), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "\uC774\uB984:"),
                      createTextVNode(" " + toDisplayString(employee.empName), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "\uBD80\uC11C:"),
                      createTextVNode(" " + toDisplayString(employee.deptName), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "\uC9C1\uAE09:"),
                      createTextVNode(" " + toDisplayString(employee.positionName), 1)
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, "\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")),
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
                          createTextVNode(" \uB2EB\uAE30 ")
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

export { _sfc_main as default };
