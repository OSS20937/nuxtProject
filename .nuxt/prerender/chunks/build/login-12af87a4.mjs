import { _ as _sfc_main$2 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, inject, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { u as useLoginStore, b0 as useGenerateImageVariant, b1 as authV2MaskDark, b2 as authV2MaskLight, a as VImg, V as VCard, f as VCardText, b3 as VNodeRenderer, b4 as themeConfig, b as VBtn, E as useTheme, i as VIcon } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VForm } from './VForm-c404d2e6.mjs';
import { V as VCheckbox } from './VCheckbox-a11da3d3.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
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
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const { global } = useTheme();
    const authProviders = [
      {
        icon: "fa-facebook",
        color: "#4267b2",
        colorInDark: "#4267b2"
      },
      {
        icon: "fa-google",
        color: "#dd4b39",
        colorInDark: "#db4437"
      },
      {
        icon: "fa-twitter",
        color: "#1da1f2",
        colorInDark: "#1da1f2"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center flex-wrap gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(authProviders, (link) => {
        _push(ssrRenderComponent(VBtn, {
          key: link.icon,
          icon: "",
          variant: "tonal",
          size: "38",
          color: unref(global).name.value === "dark" ? link.colorInDark : link.color,
          class: "rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                size: "18",
                icon: link.icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  size: "18",
                  icon: link.icon
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/AuthProvider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useLoginStore();
    const form = ref({
      empCode: "EMP-01",
      password: "1208125847",
      remember: false
    });
    const isPasswordVisible = ref(false);
    inject("empCode", ref(""));
    const loginTest = async () => {
      const authenticationData = {
        userId: form.value.empCode,
        password: form.value.password
      };
      await useLoginStore().LOGIN_AUTHENTICATION(authenticationData);
      if (useLoginStore().idCheck === "N") {
        alert("\uC544\uC774\uB514\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      } else if (useLoginStore().pwCheck === "N") {
        alert("\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4.");
      } else {
        console.log("\uB85C\uADF8\uC778 \uC131\uACF5", useLoginStore().empCode);
        await router.push("/");
      }
    };
    const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$2;
      _push(ssrRenderComponent(VRow, mergeProps({
        "no-gutters": "",
        class: "auth-wrapper bg-surface"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              md: "8",
              class: "d-none d-md-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="position-relative bg-background rounded-lg w-100 ma-8 me-0"${_scopeId2}><div class="d-flex align-center justify-center w-100 h-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    "max-width": "505",
                    src: _ctx.authThemeImg,
                    class: "auth-illustration mt-16 mb-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VImg, {
                    class: "auth-footer-mask",
                    src: unref(authThemeMask)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "position-relative bg-background rounded-lg w-100 ma-8 me-0" }, [
                      createVNode("div", { class: "d-flex align-center justify-center w-100 h-100" }, [
                        createVNode(VImg, {
                          "max-width": "505",
                          src: _ctx.authThemeImg,
                          class: "auth-illustration mt-16 mb-2"
                        }, null, 8, ["src"])
                      ]),
                      createVNode(VImg, {
                        class: "auth-footer-mask",
                        src: unref(authThemeMask)
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: "auth-card-v2 d-flex align-center justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    "max-width": 500,
                    class: "mt-12 mt-sm-0 pa-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo,
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h4 class="text-h4 mb-1"${_scopeId4}> Welcome to <span class="text-capitalize"${_scopeId4}>${ssrInterpolate(unref(themeConfig).app.title)}</span>! \u{1F44B}\u{1F3FB} </h4><p class="mb-0"${_scopeId4}> Please sign-in to your account and start the adventure </p>`);
                            } else {
                              return [
                                createVNode(unref(VNodeRenderer), {
                                  nodes: unref(themeConfig).app.logo,
                                  class: "mb-6"
                                }, null, 8, ["nodes"]),
                                createVNode("h4", { class: "text-h4 mb-1" }, [
                                  createTextVNode(" Welcome to "),
                                  createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title), 1),
                                  createTextVNode("! \u{1F44B}\u{1F3FB} ")
                                ]),
                                createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit: loginTest }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppTextField, {
                                                  modelValue: form.value.empCode,
                                                  "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                                  autofocus: "",
                                                  label: "Email",
                                                  type: "empCode",
                                                  placeholder: "johndoe@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: form.value.empCode,
                                                    "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                                    autofocus: "",
                                                    label: "Email",
                                                    type: "empCode",
                                                    placeholder: "johndoe@email.com"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppTextField, {
                                                  modelValue: form.value.password,
                                                  "onUpdate:modelValue": ($event) => form.value.password = $event,
                                                  label: "Password",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  type: isPasswordVisible.value ? "text" : "password",
                                                  "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: form.value.remember,
                                                  "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                                  label: "Remember me"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<a class="text-primary ms-2 mb-1" href="/"${_scopeId7}> Forgot Password? </a></div>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  block: "",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Login `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Login ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppTextField, {
                                                    modelValue: form.value.password,
                                                    "onUpdate:modelValue": ($event) => form.value.password = $event,
                                                    label: "Password",
                                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                    type: isPasswordVisible.value ? "text" : "password",
                                                    "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                                  createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                                    createVNode(VCheckbox, {
                                                      modelValue: form.value.remember,
                                                      "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                                      label: "Remember me"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode("a", {
                                                      class: "text-primary ms-2 mb-1",
                                                      href: "/"
                                                    }, " Forgot Password? ")
                                                  ]),
                                                  createVNode(VBtn, {
                                                    block: "",
                                                    type: "submit"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Login ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "text-center text-base"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span${_scopeId7}>New on our platform?</span><a class="text-primary ms-2" href="#"${_scopeId7}> Create an account </a>`);
                                              } else {
                                                return [
                                                  createVNode("span", null, "New on our platform?"),
                                                  createVNode("a", {
                                                    class: "text-primary ms-2",
                                                    href: "#"
                                                  }, " Create an account ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex align-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VDivider, null, null, _parent8, _scopeId7));
                                                _push8(`<span class="mx-4"${_scopeId7}>or</span>`);
                                                _push8(ssrRenderComponent(VDivider, null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VDivider),
                                                  createVNode("span", { class: "mx-4" }, "or"),
                                                  createVNode(VDivider)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_sfc_main$1, null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_sfc_main$1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: form.value.empCode,
                                                  "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                                  autofocus: "",
                                                  label: "Email",
                                                  type: "empCode",
                                                  placeholder: "johndoe@email.com"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppTextField, {
                                                  modelValue: form.value.password,
                                                  "onUpdate:modelValue": ($event) => form.value.password = $event,
                                                  label: "Password",
                                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                  type: isPasswordVisible.value ? "text" : "password",
                                                  "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                                createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                                  createVNode(VCheckbox, {
                                                    modelValue: form.value.remember,
                                                    "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                                    label: "Remember me"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode("a", {
                                                    class: "text-primary ms-2 mb-1",
                                                    href: "/"
                                                  }, " Forgot Password? ")
                                                ]),
                                                createVNode(VBtn, {
                                                  block: "",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Login ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "text-center text-base"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "New on our platform?"),
                                                createVNode("a", {
                                                  class: "text-primary ms-2",
                                                  href: "#"
                                                }, " Create an account ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex align-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VDivider),
                                                createVNode("span", { class: "mx-4" }, "or"),
                                                createVNode(VDivider)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$1)
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: form.value.empCode,
                                                "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                                autofocus: "",
                                                label: "Email",
                                                type: "empCode",
                                                placeholder: "johndoe@email.com"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppTextField, {
                                                modelValue: form.value.password,
                                                "onUpdate:modelValue": ($event) => form.value.password = $event,
                                                label: "Password",
                                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                                type: isPasswordVisible.value ? "text" : "password",
                                                "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                              createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                                createVNode(VCheckbox, {
                                                  modelValue: form.value.remember,
                                                  "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                                  label: "Remember me"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("a", {
                                                  class: "text-primary ms-2 mb-1",
                                                  href: "/"
                                                }, " Forgot Password? ")
                                              ]),
                                              createVNode(VBtn, {
                                                block: "",
                                                type: "submit"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Login ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "text-center text-base"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "New on our platform?"),
                                              createVNode("a", {
                                                class: "text-primary ms-2",
                                                href: "#"
                                              }, " Create an account ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex align-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VDivider),
                                              createVNode("span", { class: "mx-4" }, "or"),
                                              createVNode(VDivider)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$1)
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
                                createVNode(VForm, {
                                  onSubmit: withModifiers(loginTest, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: form.value.empCode,
                                              "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                              autofocus: "",
                                              label: "Email",
                                              type: "empCode",
                                              placeholder: "johndoe@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppTextField, {
                                              modelValue: form.value.password,
                                              "onUpdate:modelValue": ($event) => form.value.password = $event,
                                              label: "Password",
                                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                              type: isPasswordVisible.value ? "text" : "password",
                                              "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                            createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                              createVNode(VCheckbox, {
                                                modelValue: form.value.remember,
                                                "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                                label: "Remember me"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("a", {
                                                class: "text-primary ms-2 mb-1",
                                                href: "/"
                                              }, " Forgot Password? ")
                                            ]),
                                            createVNode(VBtn, {
                                              block: "",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Login ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "text-center text-base"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "New on our platform?"),
                                            createVNode("a", {
                                              class: "text-primary ms-2",
                                              href: "#"
                                            }, " Create an account ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex align-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VDivider),
                                            createVNode("span", { class: "mx-4" }, "or"),
                                            createVNode(VDivider)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo,
                                class: "mb-6"
                              }, null, 8, ["nodes"]),
                              createVNode("h4", { class: "text-h4 mb-1" }, [
                                createTextVNode(" Welcome to "),
                                createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title), 1),
                                createTextVNode("! \u{1F44B}\u{1F3FB} ")
                              ]),
                              createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(loginTest, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: form.value.empCode,
                                            "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                            autofocus: "",
                                            label: "Email",
                                            type: "empCode",
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: form.value.password,
                                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                                            label: "Password",
                                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                            type: isPasswordVisible.value ? "text" : "password",
                                            "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                          createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                            createVNode(VCheckbox, {
                                              modelValue: form.value.remember,
                                              "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                              label: "Remember me"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("a", {
                                              class: "text-primary ms-2 mb-1",
                                              href: "/"
                                            }, " Forgot Password? ")
                                          ]),
                                          createVNode(VBtn, {
                                            block: "",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Login ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-center text-base"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "New on our platform?"),
                                          createVNode("a", {
                                            class: "text-primary ms-2",
                                            href: "#"
                                          }, " Create an account ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex align-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VDivider),
                                          createVNode("span", { class: "mx-4" }, "or"),
                                          createVNode(VDivider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
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
                      flat: "",
                      "max-width": 500,
                      class: "mt-12 mt-sm-0 pa-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(unref(VNodeRenderer), {
                              nodes: unref(themeConfig).app.logo,
                              class: "mb-6"
                            }, null, 8, ["nodes"]),
                            createVNode("h4", { class: "text-h4 mb-1" }, [
                              createTextVNode(" Welcome to "),
                              createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title), 1),
                              createTextVNode("! \u{1F44B}\u{1F3FB} ")
                            ]),
                            createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(loginTest, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: form.value.empCode,
                                          "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                          autofocus: "",
                                          label: "Email",
                                          type: "empCode",
                                          placeholder: "johndoe@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: form.value.password,
                                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                                          label: "Password",
                                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                          type: isPasswordVisible.value ? "text" : "password",
                                          "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                        createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: form.value.remember,
                                            "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                            label: "Remember me"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("a", {
                                            class: "text-primary ms-2 mb-1",
                                            href: "/"
                                          }, " Forgot Password? ")
                                        ]),
                                        createVNode(VBtn, {
                                          block: "",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Login ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-center text-base"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "New on our platform?"),
                                        createVNode("a", {
                                          class: "text-primary ms-2",
                                          href: "#"
                                        }, " Create an account ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex align-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VDivider),
                                        createVNode("span", { class: "mx-4" }, "or"),
                                        createVNode(VDivider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
              createVNode(VCol, {
                md: "8",
                class: "d-none d-md-flex"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "position-relative bg-background rounded-lg w-100 ma-8 me-0" }, [
                    createVNode("div", { class: "d-flex align-center justify-center w-100 h-100" }, [
                      createVNode(VImg, {
                        "max-width": "505",
                        src: _ctx.authThemeImg,
                        class: "auth-illustration mt-16 mb-2"
                      }, null, 8, ["src"])
                    ]),
                    createVNode(VImg, {
                      class: "auth-footer-mask",
                      src: unref(authThemeMask)
                    }, null, 8, ["src"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: "auth-card-v2 d-flex align-center justify-center"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    "max-width": 500,
                    class: "mt-12 mt-sm-0 pa-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(unref(VNodeRenderer), {
                            nodes: unref(themeConfig).app.logo,
                            class: "mb-6"
                          }, null, 8, ["nodes"]),
                          createVNode("h4", { class: "text-h4 mb-1" }, [
                            createTextVNode(" Welcome to "),
                            createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title), 1),
                            createTextVNode("! \u{1F44B}\u{1F3FB} ")
                          ]),
                          createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers(loginTest, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: form.value.empCode,
                                        "onUpdate:modelValue": ($event) => form.value.empCode = $event,
                                        autofocus: "",
                                        label: "Email",
                                        type: "empCode",
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: form.value.password,
                                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                                        label: "Password",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                        type: isPasswordVisible.value ? "text" : "password",
                                        "append-inner-icon": isPasswordVisible.value ? "tabler-eye-off" : "tabler-eye",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                      createVNode("div", { class: "d-flex align-center flex-wrap justify-space-between mt-2 mb-4" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: form.value.remember,
                                          "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                          label: "Remember me"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("a", {
                                          class: "text-primary ms-2 mb-1",
                                          href: "/"
                                        }, " Forgot Password? ")
                                      ]),
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Login ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "text-center text-base"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "New on our platform?"),
                                      createVNode("a", {
                                        class: "text-primary ms-2",
                                        href: "#"
                                      }, " Create an account ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex align-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VDivider),
                                      createVNode("span", { class: "mx-4" }, "or"),
                                      createVNode(VDivider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
