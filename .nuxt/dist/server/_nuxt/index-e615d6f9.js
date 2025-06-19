import { ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "./emp-413922b9.js";
import { V as VCard, f as VCardText } from "../server.mjs";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empCode = ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-6">WizTech Hire System Main</h1>`);
      _push(ssrRenderComponent(VCard, {
        class: "mb-6",
        title: "인사관리페이지🚀"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` WizTech 인사관리시스템에 오신 ${ssrInterpolate(unref(empCode))}님 진심으로 환영합니다.<br${_scopeId2}> 여러분의 업적과 성장을 함께 기록하며, 조직의 발전에 동참할 수 있도록 최선을 다하겠습니다.<br${_scopeId2}><br${_scopeId2}> *업무관련은 아래로 연락해주세요 문의 페이지. 저녁 7시 이후로는 급한용무만 관리자에게 연락 바랍니다.* `);
                } else {
                  return [
                    createTextVNode(" WizTech 인사관리시스템에 오신 " + toDisplayString(unref(empCode)) + "님 진심으로 환영합니다.", 1),
                    createVNode("br"),
                    createTextVNode(" 여러분의 업적과 성장을 함께 기록하며, 조직의 발전에 동참할 수 있도록 최선을 다하겠습니다."),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" *업무관련은 아래로 연락해주세요 문의 페이지. 저녁 7시 이후로는 급한용무만 관리자에게 연락 바랍니다.* ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createTextVNode(" WizTech 인사관리시스템에 오신 " + toDisplayString(unref(empCode)) + "님 진심으로 환영합니다.", 1),
                  createVNode("br"),
                  createTextVNode(" 여러분의 업적과 성장을 함께 기록하며, 조직의 발전에 동참할 수 있도록 최선을 다하겠습니다."),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" *업무관련은 아래로 연락해주세요 문의 페이지. 저녁 7시 이후로는 급한용무만 관리자에게 연락 바랍니다.* ")
                ]),
                _: 1
              }),
              createVNode(VCardText)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
