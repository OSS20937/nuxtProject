import { defineComponent, mergeProps, useSSRContext, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { u as useLoginStore, i as VIcon, bb as _sfc_main$4, m as VSpacer, b4 as themeConfig } from "../server.mjs";
import "hookable";
import "devalue";
import "defu";
import "klona";
import { u as useUserStore } from "./index-fabf10eb.js";
import { a as _sfc_main$5, _ as _sfc_main$6, F as Footer } from "./I18n-558a846e.js";
import { useRouter } from "vue-router";
import "ofetch";
import "#internal/nitro";
import "unctx";
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
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const hr = [
  { heading: "hr" },
  {
    title: "insaHome",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" }
  },
  {
    title: "인사 일반",
    alwaysOpenAndLocked: true,
    icon: { icon: "tabler-point-filled" },
    children: [
      {
        title: "근태",
        icon: { icon: "" },
        children: [
          {
            title: "일근태 조회",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "월근태 조회",
            to: { name: "hr-affair-empDetail" }
          },
          {
            title: "조퇴 신청",
            to: { name: "hr-affair-empDetail" }
          }
        ]
      },
      {
        title: "연차",
        icon: { icon: "" },
        children: [
          {
            title: "연차 신청",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "연차 현황",
            to: { name: "hr-affair-empDetail" }
          }
        ]
      },
      {
        title: "급여",
        icon: { icon: "" },
        //icon: { icon: "tabler-user-circle" },
        children: [
          {
            title: "급여 명세서 조회",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "인사고과",
        icon: { icon: "" },
        //icon: { icon: "tabler-user-circle" },
        children: [
          {
            title: "인사고과 조회",
            to: { name: "hr-affair-empList" }
          }
        ]
      }
    ]
  },
  {
    title: "인사 관리 ",
    icon: { icon: "tabler-point-filled" },
    alwaysOpenAndLocked: true,
    children: [
      {
        title: "사원 정보 ",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "사원정보 조회",
            to: { name: "wiztech-hr-emp-findEmp" }
          },
          {
            title: "사원정보 등록",
            to: { name: "wiztech-hr-emp-eddEmp" }
          },
          {
            title: "사원정보 수정",
            to: { name: "hr-affair-registerEmpList" }
          },
          {
            title: "사원정보 삭제",
            to: { name: "hr-affair-registerEmpList" }
          }
        ]
      },
      {
        title: "근태 관리",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "일근태 조회",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "월근태 조회",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "연차 관리",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "연차 신청 승인",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "연차 조회",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "인사고과 관리",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "인사고과 등록",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "인사고과 조회",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "인사발령",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "사원 직급 변경",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "사원 부서 이동",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "부서관리",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "부서 증설",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "부서 이름 변경",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "부서 삭제",
            to: { name: "hr-affair-empList" }
          }
        ]
      },
      {
        title: "직급관리",
        // icon: { icon: "tabler-user-circle" },
        icon: { icon: "" },
        children: [
          {
            title: "직급 추가",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "직급 수정",
            to: { name: "hr-affair-empList" }
          },
          {
            title: "직급 삭제",
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
      _push(`<span class="ml-50">내 정보</span></div>`);
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
      _push(`<span class="ml-50">로그아웃</span></div>`);
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
      _push(ssrRenderComponent(unref(_sfc_main$4), mergeProps({ "nav-items": unref(navItems) }, _attrs), {
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
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            if (unref(themeConfig).app.i18n.enable && ((_a = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _a.length)) {
              _push2(ssrRenderComponent(_sfc_main$6, {
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
                createVNode(_sfc_main$5),
                createVNode(VSpacer),
                unref(themeConfig).app.i18n.enable && ((_b = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_sfc_main$6, {
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
export {
  _sfc_main as default
};
