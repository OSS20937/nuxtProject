import { defineComponent, computed, useAttrs, mergeProps, unref, createSlots, renderList, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { a as VLabel } from "./VCheckboxBtn-aab82c77.js";
import { V as VTextarea } from "./VTextarea-ec6cbc85.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AppTextarea",
    inheritAttrs: false
  },
  __name: "AppTextarea",
  __ssrInlineRender: true,
  setup(__props) {
    const elementId = computed(() => {
      const attrs = useAttrs();
      const _elementIdToken = attrs.id || attrs.label;
      return _elementIdToken ? `app-textarea-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}` : void 0;
    });
    const label = computed(() => useAttrs().label);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["app-textarea flex-grow-1", _ctx.$attrs.class]
      }, _attrs))}>`);
      if (unref(label)) {
        _push(ssrRenderComponent(VLabel, {
          for: unref(elementId),
          class: "mb-1 text-body-2 text-high-emphasis",
          text: unref(label)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VTextarea, {
        ..._ctx.$attrs,
        class: null,
        label: void 0,
        variant: "outlined",
        id: unref(elementId)
      }, createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: withCtx((slotProps, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, name, slotProps || {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, _ctx.name, slotProps || {})
                ];
              }
            })
          };
        })
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/app-form-elements/AppTextarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
