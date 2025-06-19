import { defineComponent, mergeProps, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, ref, watch, isRef, computed, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, i as VIcon, B as useConfigStore, s as genericComponent, p as propsFactory, F as useProxiedModel, aK as useScopeId, a5 as getUid, v as useRender, aL as VOverlay, af as forwardRefs, aj as omit, aH as makeVOverlayProps } from './server.mjs';
import { V as VMenu, a as VList, b as VListItem, d as VListItemTitle } from './VMenu-4a1335b2.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-100 d-flex align-center justify-space-between" }, _attrs))}><span class="d-flex align-center"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Made With `);
  _push(ssrRenderComponent(VIcon, {
    icon: "tabler-heart",
    color: "error",
    size: "1.25rem",
    class: "mx-1"
  }, null, _parent));
  _push(` By <a href="https://pixinvent.com" target="_blank" rel="noopener noreferrer" class="text-primary ms-1">Pixinvent</a></span><span class="d-md-flex gap-x-4 text-primary d-none"><a href="https://themeforest.net/licenses/standard" target="noopener noreferrer">License</a><a href="https://1.envato.market/pixinvent_portfolio" target="noopener noreferrer">More Themes</a><a href="https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/" target="noopener noreferrer">Documentation</a></span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const makeVTooltipProps = propsFactory({
  id: String,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: false
  }), ["absolute", "persistent"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = computed(() => {
      if (props.transition)
        return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          var _a2;
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots, ...args)) != null ? _a2 : props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    themes: {}
  },
  setup(__props) {
    const props = __props;
    const configStore = useConfigStore();
    const selectedItem = ref([configStore.theme]);
    watch(
      () => configStore.theme,
      () => {
        selectedItem.value = [configStore.theme];
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, mergeProps({ color: "rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: (_a = props.themes.find((t) => t.name === unref(configStore).theme)) == null ? void 0 : _a.icon,
              size: "26"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              "open-delay": "1000",
              "scroll-strategy": "close"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-capitalize"${_scopeId2}>${ssrInterpolate(unref(configStore).theme)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(configStore).theme), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              activator: "parent",
              offset: "14px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    selected: unref(selectedItem),
                    "onUpdate:selected": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(props.themes, ({ name, icon }) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: name,
                            value: name,
                            "prepend-icon": icon,
                            color: "primary",
                            class: "text-capitalize",
                            onClick: () => {
                              unref(configStore).theme = name;
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.themes, ({ name, icon }) => {
                            return openBlock(), createBlock(VListItem, {
                              key: name,
                              value: name,
                              "prepend-icon": icon,
                              color: "primary",
                              class: "text-capitalize",
                              onClick: () => {
                                unref(configStore).theme = name;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "prepend-icon", "onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      selected: unref(selectedItem),
                      "onUpdate:selected": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.themes, ({ name, icon }) => {
                          return openBlock(), createBlock(VListItem, {
                            key: name,
                            value: name,
                            "prepend-icon": icon,
                            color: "primary",
                            class: "text-capitalize",
                            onClick: () => {
                              unref(configStore).theme = name;
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "prepend-icon", "onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["selected", "onUpdate:selected"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: (_b = props.themes.find((t) => t.name === unref(configStore).theme)) == null ? void 0 : _b.icon,
                size: "26"
              }, null, 8, ["icon"]),
              createVNode(VTooltip, {
                activator: "parent",
                "open-delay": "1000",
                "scroll-strategy": "close"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(configStore).theme), 1)
                ]),
                _: 1
              }),
              createVNode(VMenu, {
                activator: "parent",
                offset: "14px"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    selected: unref(selectedItem),
                    "onUpdate:selected": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.themes, ({ name, icon }) => {
                        return openBlock(), createBlock(VListItem, {
                          key: name,
                          value: name,
                          "prepend-icon": icon,
                          color: "primary",
                          class: "text-capitalize",
                          onClick: () => {
                            unref(configStore).theme = name;
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "prepend-icon", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["selected", "onUpdate:selected"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/ThemeSwitcher.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavbarThemeSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const themes = [
      {
        name: "system",
        icon: "tabler-device-laptop"
      },
      {
        name: "light",
        icon: "tabler-sun-high"
      },
      {
        name: "dark",
        icon: "tabler-moon"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThemeSwitcher = _sfc_main$2;
      _push(ssrRenderComponent(_component_ThemeSwitcher, mergeProps({ themes }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/NavbarThemeSwitcher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "I18n",
  __ssrInlineRender: true,
  props: {
    languages: {},
    location: { default: "bottom end" }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useI18n({ useScope: "global" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "26",
              icon: "tabler-language"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              activator: "parent",
              location: props.location,
              offset: "14px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    selected: [unref(locale)],
                    color: "primary",
                    "min-width": "175px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(props.languages, (lang) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: lang.i18nLang,
                            value: lang.i18nLang,
                            onClick: ($event) => locale.value = lang.i18nLang
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(lang.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(lang.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(lang.label), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.languages, (lang) => {
                            return openBlock(), createBlock(VListItem, {
                              key: lang.i18nLang,
                              value: lang.i18nLang,
                              onClick: ($event) => locale.value = lang.i18nLang
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(lang.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      selected: [unref(locale)],
                      color: "primary",
                      "min-width": "175px"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.languages, (lang) => {
                          return openBlock(), createBlock(VListItem, {
                            key: lang.i18nLang,
                            value: lang.i18nLang,
                            onClick: ($event) => locale.value = lang.i18nLang
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(lang.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["selected"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                size: "26",
                icon: "tabler-language"
              }),
              createVNode(VMenu, {
                activator: "parent",
                location: props.location,
                offset: "14px"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    selected: [unref(locale)],
                    color: "primary",
                    "min-width": "175px"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.languages, (lang) => {
                        return openBlock(), createBlock(VListItem, {
                          key: lang.i18nLang,
                          value: lang.i18nLang,
                          onClick: ($event) => locale.value = lang.i18nLang
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(lang.label), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["selected"])
                ]),
                _: 1
              }, 8, ["location"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/I18n.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Footer as F, _sfc_main as _, _sfc_main$1 as a };
