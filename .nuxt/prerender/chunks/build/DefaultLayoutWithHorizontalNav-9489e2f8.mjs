import { b as buildAssetsURL } from '../_/renderer.mjs';
import { b9 as _sfc_main$f, ba as __nuxt_component_0$1, b3 as VNodeRenderer, b4 as themeConfig, m as VSpacer, s as genericComponent, j as VAvatar, a as VImg, i as VIcon, p as propsFactory, R as useBackgroundColor, a4 as useRounded, H as useLocale, z as useTextColor, E as useTheme, aI as useLocation, v as useRender, aa as pick, a0 as MaybeTransition, Z as makeTransitionProps$1, x as makeThemeProps, r as makeTagProps, a3 as makeRoundedProps, aF as makeLocationProps, q as makeComponentProps, O as IconValue } from './server.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, ref, createTextVNode, toRef, withDirectives, vShow, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { F as Footer, _ as _sfc_main$2, a as _sfc_main$1$1 } from './I18n-558a846e.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VMenu, a as VList, b as VListItem, d as VListItemTitle, e as VListItemSubtitle } from './VMenu-4a1335b2.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+ssr@1.11.20/node_modules/@unhead/ssr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
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
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@antfu+utils@0.7.6/node_modules/@antfu/utils/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue3-perfect-scrollbar@1.6.1_postcss@8.5.3/node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.cjs.js';

const makeVListItemActionProps = propsFactory({
  start: Boolean,
  end: Boolean,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListItemAction");
const VListItemAction = genericComponent()({
  name: "VListItemAction",
  props: makeVListItemActionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-item-action", {
        "v-list-item-action--start": props.start,
        "v-list-item-action--end": props.end
      }, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
const navItems = [
  {
    title: "Home",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" }
  },
  {
    title: "Second page",
    to: { name: "second-page" },
    icon: { icon: "tabler-file" }
  }
];
const avatar1 = "" + buildAssetsURL("avatar-1.129659bb.png");
const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top end"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps$1({
    transition: "scale-rotate-transition"
  })
}, "VBadge");
const VBadge = genericComponent()({
  name: "VBadge",
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "textColor"));
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, (side) => {
      var _a, _b;
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (["top", "bottom"].includes(side) ? +((_a = props.offsetY) != null ? _a : 0) : ["left", "right"].includes(side) ? +((_b = props.offsetX) != null ? _b : 0) : 0);
    });
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= +props.max ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pick(ctx.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return createVNode(props.tag, mergeProps({
        "class": ["v-badge", {
          "v-badge--bordered": props.bordered,
          "v-badge--dot": props.dot,
          "v-badge--floating": props.floating,
          "v-badge--inline": props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [createVNode("div", {
            "class": "v-badge__wrapper"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(MaybeTransition, {
            "transition": props.transition
          }, {
            default: () => {
              var _a2, _b2;
              return [withDirectives(createVNode("span", mergeProps({
                "class": ["v-badge__badge", themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
                "style": [backgroundColorStyles.value, textColorStyles.value, props.inline ? {} : locationStyles.value],
                "aria-atomic": "true",
                "aria-label": t(props.label, value),
                "aria-live": "polite",
                "role": "status"
              }, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? (_b2 = (_a2 = ctx.slots).badge) == null ? void 0 : _b2.call(_a2) : props.icon ? createVNode(VIcon, {
                "icon": props.icon
              }, null) : content]), [[vShow, props.modelValue]])];
            }
          })])];
        }
      });
    });
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useEmpStore();
    const empCode = ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBadge, mergeProps({
        dot: "",
        location: "bottom right",
        "offset-x": "3",
        "offset-y": "3",
        bordered: "",
        color: "success"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, {
              class: "cursor-pointer",
              color: "primary",
              variant: "tonal"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMenu, {
                    activator: "parent",
                    width: "230",
                    location: "bottom end",
                    offset: "14px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, null, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemAction, { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBadge, {
                                            dot: "",
                                            location: "bottom right",
                                            "offset-x": "3",
                                            "offset-y": "3",
                                            color: "success"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VAvatar, {
                                                  color: "primary",
                                                  variant: "tonal"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VAvatar, {
                                                    color: "primary",
                                                    variant: "tonal"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                            createVNode(VBadge, {
                                              dot: "",
                                              location: "bottom right",
                                              "offset-x": "3",
                                              "offset-y": "3",
                                              color: "success"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  color: "primary",
                                                  variant: "tonal"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                      createVNode(VListItemAction, { start: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VBadge, {
                                            dot: "",
                                            location: "bottom right",
                                            "offset-x": "3",
                                            "offset-y": "3",
                                            color: "success"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VAvatar, {
                                                color: "primary",
                                                variant: "tonal"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, { class: "font-weight-semibold" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(unref(empCode))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(empCode)), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Admin`);
                                        } else {
                                          return [
                                            createTextVNode("Admin")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(empCode)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Admin")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-user",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "tabler-user",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Profile`);
                                        } else {
                                          return [
                                            createTextVNode("Profile")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Profile")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-settings",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "tabler-settings",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Settings`);
                                        } else {
                                          return [
                                            createTextVNode("Settings")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Settings")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-currency-dollar",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "tabler-currency-dollar",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Pricing`);
                                        } else {
                                          return [
                                            createTextVNode("Pricing")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Pricing")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { link: "" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-help",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "tabler-help",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`FAQ`);
                                        } else {
                                          return [
                                            createTextVNode("FAQ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("FAQ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, { to: "/login" }, {
                                prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-logout",
                                      size: "22"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        class: "me-2",
                                        icon: "tabler-logout",
                                        size: "22"
                                      })
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Logout`);
                                        } else {
                                          return [
                                            createTextVNode("Logout")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Logout")
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
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VListItemAction, { start: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VBadge, {
                                          dot: "",
                                          location: "bottom right",
                                          "offset-x": "3",
                                          "offset-y": "3",
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              color: "primary",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(empCode)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Admin")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-user",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Profile")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-settings",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Settings")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-currency-dollar",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Pricing")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { link: "" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-help",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("FAQ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode(VListItem, { to: "/login" }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      class: "me-2",
                                      icon: "tabler-logout",
                                      size: "22"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Logout")
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
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VListItemAction, { start: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VBadge, {
                                        dot: "",
                                        location: "bottom right",
                                        "offset-x": "3",
                                        "offset-y": "3",
                                        color: "success"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAvatar, {
                                            color: "primary",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(empCode)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Admin")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-2" }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "tabler-user",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Profile")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "tabler-settings",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Settings")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "tabler-currency-dollar",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Pricing")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { link: "" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "tabler-help",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("FAQ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-2" }),
                              createVNode(VListItem, { to: "/login" }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    class: "me-2",
                                    icon: "tabler-logout",
                                    size: "22"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Logout")
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
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                    createVNode(VMenu, {
                      activator: "parent",
                      width: "230",
                      location: "bottom end",
                      offset: "14px"
                    }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              prepend: withCtx(() => [
                                createVNode(VListItemAction, { start: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VBadge, {
                                      dot: "",
                                      location: "bottom right",
                                      "offset-x": "3",
                                      "offset-y": "3",
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAvatar, {
                                          color: "primary",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(empCode)), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Admin")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-2" }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "tabler-user",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Profile")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "tabler-settings",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Settings")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "tabler-currency-dollar",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pricing")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, { link: "" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "tabler-help",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("FAQ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-2" }),
                            createVNode(VListItem, { to: "/login" }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  class: "me-2",
                                  icon: "tabler-logout",
                                  size: "22"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Logout")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, {
                class: "cursor-pointer",
                color: "primary",
                variant: "tonal"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
                  createVNode(VMenu, {
                    activator: "parent",
                    width: "230",
                    location: "bottom end",
                    offset: "14px"
                  }, {
                    default: withCtx(() => [
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          createVNode(VListItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VListItemAction, { start: "" }, {
                                default: withCtx(() => [
                                  createVNode(VBadge, {
                                    dot: "",
                                    location: "bottom right",
                                    "offset-x": "3",
                                    "offset-y": "3",
                                    color: "success"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, {
                                        color: "primary",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
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
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-semibold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(empCode)), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Admin")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-2" }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "tabler-user",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Profile")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "tabler-settings",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Settings")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "tabler-currency-dollar",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Pricing")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { link: "" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "tabler-help",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("FAQ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-2" }),
                          createVNode(VListItem, { to: "/login" }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                class: "me-2",
                                icon: "tabler-logout",
                                size: "22"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Logout")
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
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/UserProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DefaultLayoutWithHorizontalNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(unref(_sfc_main$f), mergeProps({ "nav-items": unref(navItems) }, _attrs), {
        navbar: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "app-logo d-flex align-center gap-x-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VNodeRenderer), {
                    nodes: unref(themeConfig).app.logo
                  }, null, _parent3, _scopeId2));
                  _push3(`<h1 class="app-title font-weight-bold leading-normal text-xl text-capitalize"${_scopeId2}>${ssrInterpolate(unref(themeConfig).app.title)}</h1>`);
                } else {
                  return [
                    createVNode(unref(VNodeRenderer), {
                      nodes: unref(themeConfig).app.logo
                    }, null, 8, ["nodes"]),
                    createVNode("h1", { class: "app-title font-weight-bold leading-normal text-xl text-capitalize" }, toDisplayString(unref(themeConfig).app.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            if (unref(themeConfig).app.i18n.enable && ((_a = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _a.length)) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                languages: unref(themeConfig).app.i18n.langConfig
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$1$1, { class: "me-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "app-logo d-flex align-center gap-x-3"
              }, {
                default: withCtx(() => [
                  createVNode(unref(VNodeRenderer), {
                    nodes: unref(themeConfig).app.logo
                  }, null, 8, ["nodes"]),
                  createVNode("h1", { class: "app-title font-weight-bold leading-normal text-xl text-capitalize" }, toDisplayString(unref(themeConfig).app.title), 1)
                ]),
                _: 1
              }),
              createVNode(VSpacer),
              unref(themeConfig).app.i18n.enable && ((_b = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                languages: unref(themeConfig).app.i18n.langConfig
              }, null, 8, ["languages"])) : createCommentVNode("", true),
              createVNode(_sfc_main$1$1, { class: "me-2" }),
              createVNode(_sfc_main$1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Footer)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/DefaultLayoutWithHorizontalNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
