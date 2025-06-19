import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { i as VIcon } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DialogCloseBtn",
  __ssrInlineRender: true,
  props: {
    icon: { default: "tabler-x" },
    iconSize: { default: "20" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, mergeProps({
        variant: "elevated",
        class: "v-dialog-close-btn"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: props.icon,
              size: props.iconSize
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: props.icon,
                size: props.iconSize
              }, null, 8, ["icon", "size"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/DialogCloseBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
