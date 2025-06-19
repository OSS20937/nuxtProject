import { ref, watchEffect, watch, getCurrentInstance, defineComponent, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, defineAsyncComponent, useSSRContext } from "vue";
import { u as useSkins } from "./useSkins-5d59655a.js";
import { composableNames } from "@unhead/shared";
import { ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { b6 as injectHead, b7 as resolveUnrefHeadInput, B as useConfigStore, b8 as switchToVerticalNavOnLtOverlayNavBreakpoint, b5 as AppContentLayoutNav } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "unhead";
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
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const DefaultLayoutWithHorizontalNav = /* @__PURE__ */ defineAsyncComponent(() => import("./DefaultLayoutWithHorizontalNav-9489e2f8.js"));
    const DefaultLayoutWithVerticalNav = /* @__PURE__ */ defineAsyncComponent(() => import("./DefaultLayoutWithVerticalNav-c3426f9f.js"));
    const configStore = useConfigStore();
    switchToVerticalNavOnLtOverlayNavBreakpoint();
    const { layoutAttrs, injectSkinClasses } = useSkins();
    useHead({
      title: "HR",
      titleTemplate: "%s - NuxtJS Admin Template"
    });
    injectSkinClasses();
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? unref(DefaultLayoutWithVerticalNav) : unref(DefaultLayoutWithHorizontalNav)), mergeProps(unref(layoutAttrs), _attrs), {
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
      }), _parent);
    };
  }
});
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
