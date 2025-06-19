import { createVNode } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { s as genericComponent, p as propsFactory, t as useRtl, v as useRender, r as makeTagProps, q as makeComponentProps } from './server.mjs';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});

export { VContainer as V };
