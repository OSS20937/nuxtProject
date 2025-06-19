import { defineComponent, resolveComponent, unref, mergeProps, withCtx, renderSlot, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { b9 as _sfc_main$7, i as VIcon, m as VSpacer, b4 as themeConfig, u as useLoginStore } from './server.mjs';
import { u as useUserStore } from './index-fabf10eb.mjs';
import { F as Footer, a as _sfc_main$1$1, _ as _sfc_main$4 } from './I18n-558a846e.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
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
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const hr = [
  { heading: "hr" },
  {
    title: "insaHome",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" }
  },
  {
    title: "\uC778\uC0AC \uC77C\uBC18",
    alwaysOpenAndLocked: true,
    icon: { icon: "tabler-point-filled" },
    children: [
      {
        title: "\uADFC\uD0DC",
        icon: { icon: "" },
        children: [
          {
            title: "\uC77C\uADFC\uD0DC \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC6D4\uADFC\uD0DC \uC870\uD68C",
            to: { name: "hr-affair-empDetail" }
          },
          {
            title: "\uC870\uD1F4 \uC2E0\uCCAD",
            to: { name: "hr-affair-empDetail" }
          }
        ]
      },
      {
        title: "\uC5F0\uCC28",
        icon: { icon: "" },
        children: [
          {
            title: "\uC5F0\uCC28 \uC2E0\uCCAD",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC5F0\uCC28 \uD604\uD669",
            to: { name: "hr-affair-empDetail" }
          }
        ]
      },
      {
        title: "\uAE09\uC5EC",
        icon: { icon: "" },
        //icon: { icon: "tabler-user-circle" },
        children: [
          {
            title: "\uAE09\uC5EC \uBA85\uC138\uC11C \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "\uC778\uC0AC\uACE0\uACFC",
        icon: { icon: "" },
        //icon: { icon: "tabler-user-circle" },
        children: [
          {
            title: "\uC778\uC0AC\uACE0\uACFC \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          }
        ]
      }
    ]
  },
  {
    title: "\uC778\uC0AC \uAD00\uB9AC ",
    icon: { icon: "tabler-point-filled" },
    alwaysOpenAndLocked: true,
    children: [
      {
        title: "\uC0AC\uC6D0 \uC815\uBCF4 ",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uC0AC\uC6D0\uC815\uBCF4 \uC870\uD68C",
            to: { name: "wiztech-hr-emp-findEmp" }
          },
          {
            title: "\uC0AC\uC6D0\uC815\uBCF4 \uB4F1\uB85D",
            to: { name: "wiztech-hr-emp-eddEmp" }
          },
          {
            title: "\uC0AC\uC6D0\uC815\uBCF4 \uC218\uC815",
            to: { name: "hr-affair-registerEmpList" }
          },
          {
            title: "\uC0AC\uC6D0\uC815\uBCF4 \uC0AD\uC81C",
            to: { name: "hr-affair-registerEmpList" }
          }
        ]
      },
      {
        title: "\uADFC\uD0DC \uAD00\uB9AC",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uC77C\uADFC\uD0DC \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC6D4\uADFC\uD0DC \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "\uC5F0\uCC28 \uAD00\uB9AC",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uC5F0\uCC28 \uC2E0\uCCAD \uC2B9\uC778",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC5F0\uCC28 \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "\uC778\uC0AC\uACE0\uACFC \uAD00\uB9AC",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uC778\uC0AC\uACE0\uACFC \uB4F1\uB85D",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC778\uC0AC\uACE0\uACFC \uC870\uD68C",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "\uC778\uC0AC\uBC1C\uB839",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uC0AC\uC6D0 \uC9C1\uAE09 \uBCC0\uACBD",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC0AC\uC6D0 \uBD80\uC11C \uC774\uB3D9",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "\uBD80\uC11C\uAD00\uB9AC",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uBD80\uC11C \uC99D\uC124",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uBD80\uC11C \uC774\uB984 \uBCC0\uACBD",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uBD80\uC11C \uC0AD\uC81C",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "\uC9C1\uAE09\uAD00\uB9AC",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "\uC9C1\uAE09 \uCD94\uAC00",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC9C1\uAE09 \uC218\uC815",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "\uC9C1\uAE09 \uC0AD\uC81C",
            to: { name: "hr-affair-empList" }
          }
        ]
      }
    ]
  }
];
const navItems = [...hr];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bookmark-wrapper align-items-left d-lg-flex ml-2",
        style: { "cursor": "pointer" }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/AccNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HRNav",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    useLoginStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bookmark-wrapper align-items-left d-lg-flex ml-2",
        style: { "cursor": "pointer" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(VIcon, {
        class: "me-1",
        icon: "tabler-users"
      }, null, _parent));
      _push(`<span class="ml-50">\uB0B4 \uC815\uBCF4</span></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/HRNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LogiNav",
  __ssrInlineRender: true,
  setup(__props) {
    useLoginStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bookmark-wrapper align-items-left d-lg-flex ml-2",
        style: { "cursor": "pointer" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(VIcon, {
        class: "me-1",
        icon: "tabler-logout"
      }, null, _parent));
      _push(`<span class="ml-50">\uB85C\uADF8\uC544\uC6C3</span></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/LogiNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DefaultLayoutWithVerticalNav",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ "nav-items": unref(navItems) }, _attrs), {
        navbar: withCtx(({ toggleVerticalOverlayNavActive }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="d-flex h-100 align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, {
              id: "vertical-nav-toggle-btn",
              class: "ms-n3 d-lg-none",
              onClick: ($event) => toggleVerticalOverlayNavActive(true)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    size: "26",
                    icon: "tabler-menu-2"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      size: "26",
                      icon: "tabler-menu-2"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            if (unref(themeConfig).app.i18n.enable && ((_a = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _a.length)) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                languages: unref(themeConfig).app.i18n.langConfig
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$2, { class: "mr-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { class: "mr-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, { class: "mr-3" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex h-100 align-center" }, [
                createVNode(_component_IconBtn, {
                  id: "vertical-nav-toggle-btn",
                  class: "ms-n3 d-lg-none",
                  onClick: ($event) => toggleVerticalOverlayNavActive(true)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "26",
                      icon: "tabler-menu-2"
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_sfc_main$1$1),
                createVNode(VSpacer),
                unref(themeConfig).app.i18n.enable && ((_b = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  languages: unref(themeConfig).app.i18n.langConfig
                }, null, 8, ["languages"])) : createCommentVNode("", true),
                createVNode(_sfc_main$2, { class: "mr-3" }),
                createVNode(_sfc_main$1, { class: "mr-3" }),
                createVNode(_sfc_main$3, { class: "mr-3" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/DefaultLayoutWithVerticalNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
