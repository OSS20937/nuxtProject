import * as vue from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { defineComponent, useAttrs, ref, watch, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, nextTick, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { B as useConfigStore, C as filterInputAttrs, D as useFocus, E as useTheme } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { g as getDefaultExportFromNamespaceIfNotNamed, a as getDefaultExportFromCjs } from '../virtual/_commonjsHelpers.mjs';
import * as flatpickr from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/flatpickr@4.6.13/node_modules/flatpickr/dist/flatpickr.js';
import { m as makeVFieldProps, b as makeVInputProps, c as VInput, f as filterFieldProps, a as VLabel, d as VField } from './VCheckboxBtn-aab82c77.mjs';

var index_umd$1 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(flatpickr);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue);

var index_umd = index_umd$1.exports;

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(require$$0, require$$1);
	})(index_umd, (__WEBPACK_EXTERNAL_MODULE__311__, __WEBPACK_EXTERNAL_MODULE__976__) => {
	return /******/ (() => { // webpackBootstrap
	/******/ 	var __webpack_modules__ = ({

	/***/ 311:
	/***/ ((module) => {

	module.exports = __WEBPACK_EXTERNAL_MODULE__311__;

	/***/ }),

	/***/ 976:
	/***/ ((module) => {

	module.exports = __WEBPACK_EXTERNAL_MODULE__976__;

	/***/ })

	/******/ 	});
	/************************************************************************/
	/******/ 	// The module cache
	/******/ 	var __webpack_module_cache__ = {};
	/******/ 	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/ 		// Check if module is in cache
	/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
	/******/ 		if (cachedModule !== undefined) {
	/******/ 			return cachedModule.exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = __webpack_module_cache__[moduleId] = {
	/******/ 			// no module.id needed
	/******/ 			// no module.loaded needed
	/******/ 			exports: {}
	/******/ 		};
	/******/ 	
	/******/ 		// Execute the module function
	/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	/******/ 	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/ 	
	/************************************************************************/
	/******/ 	/* webpack/runtime/compat get default export */
	/******/ 	(() => {
	/******/ 		// getDefaultExport function for compatibility with non-harmony modules
	/******/ 		__webpack_require__.n = (module) => {
	/******/ 			var getter = module && module.__esModule ?
	/******/ 				() => (module['default']) :
	/******/ 				() => (module);
	/******/ 			__webpack_require__.d(getter, { a: getter });
	/******/ 			return getter;
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/define property getters */
	/******/ 	(() => {
	/******/ 		// define getter functions for harmony exports
	/******/ 		__webpack_require__.d = (exports, definition) => {
	/******/ 			for(var key in definition) {
	/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
	/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
	/******/ 				}
	/******/ 			}
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
	/******/ 	(() => {
	/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/make namespace object */
	/******/ 	(() => {
	/******/ 		// define __esModule on exports
	/******/ 		__webpack_require__.r = (exports) => {
	/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 			}
	/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	(() => {
	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// EXPORTS
	__webpack_require__.d(__webpack_exports__, {
	  "default": () => (/* binding */ src)
	});

	// EXTERNAL MODULE: external "flatpickr"
	var external_flatpickr_ = __webpack_require__(311);
	var external_flatpickr_default = /*#__PURE__*/__webpack_require__.n(external_flatpickr_);
	// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
	var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__(976);
	const includedEvents = [
	    'onChange',
	    'onClose',
	    'onDestroy',
	    'onMonthChange',
	    'onOpen',
	    'onYearChange',
	];
	// Let's not emit these events by default
	const excludedEvents = [
	    'onValueUpdate',
	    'onDayCreate',
	    'onParseConfig',
	    'onReady',
	    'onPreCalendarPosition',
	    'onKeyDown',
	];
	function camelToKebab(string) {
	    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}
	function arrayify(obj) {
	    return obj instanceof Array
	        ? obj
	        : [obj];
	}
	function nullify(value) {
	    return (value && value.length)
	        ? value
	        : null;
	}




	// Keep a copy of all events for later use
	const allEvents = [...includedEvents, ...excludedEvents];
	// Passing these properties in `fp.set()` method will cause flatpickr to trigger some callbacks
	const configCallbacks = ['locale', 'showMonths'];
	/* harmony default export */ const component = ((0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.defineComponent)({
	    name: 'FlatPickr',
	    compatConfig: {
	        MODE: 3,
	    },
	    render() {
	        return (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.h)('input', {
	            type: 'text',
	            'data-input': true,
	            disabled: this.disabled,
	            onInput: this.onInput,
	        });
	    },
	    emits: [
	        'blur',
	        'update:modelValue',
	        ...allEvents.map(camelToKebab)
	    ],
	    props: {
	        modelValue: {
	            type: [String, Number, Date, Array, null],
	            required: true,
	        },
	        // https://flatpickr.js.org/options/
	        config: {
	            type: Object,
	            default: () => ({
	                defaultDate: null,
	                wrap: false,
	            })
	        },
	        events: {
	            type: Array,
	            default: () => includedEvents
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	    },
	    data() {
	        return {
	            fp: null, //todo make it non-reactive
	        };
	    },
	    mounted() {
	        // Return early if flatpickr is already loaded
	        /* istanbul ignore if */
	        if (this.fp)
	            return;
	        // Init flatpickr
	        this.fp = external_flatpickr_default()(this.getElem(), this.prepareConfig());
	        // Attach blur event
	        this.fpInput().addEventListener('blur', this.onBlur);
	        // Immediate watch will fail before fp is set,
	        // so we need to start watching after mount
	        this.$watch('disabled', this.watchDisabled, {
	            immediate: true
	        });
	    },
	    methods: {
	        prepareConfig() {
	            // Don't mutate original object on parent component
	            let safeConfig = Object.assign({}, this.config);
	            this.events.forEach((hook) => {
	                // Respect global callbacks registered via setDefault() method
	                let globalCallbacks = (external_flatpickr_default()).defaultConfig[hook] || [];
	                // Inject our own method along with user's callbacks
	                let localCallback = (...args) => {
	                    this.$emit(camelToKebab(hook), ...args);
	                };
	                // Overwrite with merged array
	                safeConfig[hook] = arrayify(safeConfig[hook] || []).concat(globalCallbacks, localCallback);
	            });
	            const onCloseCb = this.onClose.bind(this);
	            safeConfig['onClose'] = arrayify(safeConfig['onClose'] || []).concat(onCloseCb);
	            // Set initial date without emitting any event
	            safeConfig.defaultDate = this.modelValue || safeConfig.defaultDate;
	            return safeConfig;
	        },
	        /**
	         * Get the HTML node where flatpickr to be attached
	         * Bind on parent element if wrap is true
	         */
	        getElem() {
	            return this.config.wrap ? this.$el.parentNode : this.$el;
	        },
	        /**
	         * Watch for value changed by date-picker itself and notify parent component
	         */
	        onInput(event) {
	            const input = event.target;
	            // Let's wait for DOM to be updated
	            (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.nextTick)().then(() => {
	                this.$emit('update:modelValue', nullify(input.value));
	            });
	        },
	        fpInput() {
	            return this.fp.altInput || this.fp.input;
	        },
	        /**
	         * Blur event is required by many validation libraries
	         */
	        onBlur(event) {
	            this.$emit('blur', nullify(event.target.value));
	        },
	        /**
	         * Flatpickr does not emit input event in some cases
	         */
	        onClose(selectedDates, dateStr) {
	            this.$emit('update:modelValue', dateStr);
	        },
	        /**
	         * Watch for the disabled property and sets the value to the real input.
	         */
	        watchDisabled(newState) {
	            if (newState) {
	                this.fpInput().setAttribute('disabled', '');
	            }
	            else {
	                this.fpInput().removeAttribute('disabled');
	            }
	        }
	    },
	    watch: {
	        /**
	         * Watch for any config changes and redraw date-picker
	         */
	        config: {
	            deep: true,
	            handler(newConfig) {
	                if (!this.fp)
	                    return;
	                let safeConfig = Object.assign({}, newConfig);
	                // Workaround: Don't pass hooks to configs again otherwise
	                // previously registered hooks will stop working
	                // Notice: we are looping through all events
	                // This also means that new callbacks can not be passed once component has been initialized
	                allEvents.forEach((hook) => {
	                    delete safeConfig[hook];
	                });
	                this.fp.set(safeConfig);
	                // Workaround: Allow to change locale dynamically
	                configCallbacks.forEach((name) => {
	                    if (typeof safeConfig[name] !== 'undefined') {
	                        this.fp.set(name, safeConfig[name]);
	                    }
	                });
	            }
	        },
	        /**
	         * Watch for changes from parent component and update DOM
	         */
	        modelValue(newValue) {
	            var _a;
	            // Prevent updates if v-model value is same as input's current value
	            if (!this.$el || newValue === nullify(this.$el.value))
	                return;
	            // Notify flatpickr instance that there is a change in value
	            (_a = this.fp) === null || _a === void 0 ? void 0 : _a.setDate(newValue, true);
	        }
	    },
	    beforeUnmount() {
	        /* istanbul ignore else */
	        if (!this.fp)
	            return;
	        this.fpInput().removeEventListener('blur', this.onBlur);
	        this.fp.destroy();
	        this.fp = null;
	    }
	}));

	/* harmony default export */ const src = (component);

	})();

	/******/ 	return __webpack_exports__;
	/******/ })()
	;
	}); 
} (index_umd$1));

var index_umdExports = index_umd$1.exports;
const FlatPickr = /*@__PURE__*/getDefaultExportFromCjs(index_umdExports);

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AppDateTimePicker",
  __ssrInlineRender: true,
  props: {
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    suffix: String,
    type: {
      type: String,
      default: "text"
    },
    modelModifiers: Object,
    ...makeVInputProps({
      density: "compact",
      hideDetails: "auto"
    }),
    ...makeVFieldProps({
      variant: "outlined",
      color: "primary"
    })
  },
  emits: ["click:control", "mousedown:control", "update:focused", "update:modelValue", "click:clear"],
  setup(__props, { emit }) {
    const props = __props;
    const configStore = useConfigStore();
    const attrs = useAttrs();
    const [rootAttrs, compAttrs] = filterInputAttrs(attrs);
    const [{ modelValue: _, ...inputProps }] = VInput.filterProps(props);
    const [fieldProps] = filterFieldProps(props);
    const refFlatPicker = ref();
    const { focused } = useFocus(refFlatPicker);
    const isCalendarOpen = ref(false);
    const isInlinePicker = ref(false);
    if (compAttrs.config && compAttrs.config.inline) {
      isInlinePicker.value = compAttrs.config.inline;
      Object.assign(compAttrs, { altInputClass: "inlinePicker" });
    }
    const onClear = (el) => {
      el.stopPropagation();
      nextTick(() => {
        emit("update:modelValue", "");
        emit("click:clear", el);
      });
    };
    const vuetifyTheme = useTheme();
    const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value);
    const updateThemeClassInCalendar = () => {
      if (!refFlatPicker.value.fp.calendarContainer)
        return;
      vuetifyThemesName.forEach((t) => {
        refFlatPicker.value.fp.calendarContainer.classList.remove(`v-theme--${t}`);
      });
      refFlatPicker.value.fp.calendarContainer.classList.add(`v-theme--${vuetifyTheme.global.name.value}`);
    };
    watch(() => configStore.theme, updateThemeClassInCalendar);
    const emitModelValue = (val) => {
      emit("update:modelValue", val);
    };
    const elementId = computed(() => {
      const _elementIdToken = fieldProps.id || fieldProps.label;
      return _elementIdToken ? `app-picker-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}` : void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-picker-field" }, _attrs))}>`);
      if (unref(fieldProps).label) {
        _push(ssrRenderComponent(VLabel, {
          class: "mb-1 text-body-2 text-high-emphasis",
          for: unref(elementId),
          text: unref(fieldProps).label
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VInput), mergeProps({ ...inputProps, ...unref(rootAttrs) }, {
        "model-value": _ctx.modelValue,
        "hide-details": props.hideDetails,
        class: [[{
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-text-field--flush-details": ["plain", "underlined"].includes(props.variant)
        }, props.class], "position-relative v-text-field"],
        style: props.style
      }), {
        default: withCtx(({ id, isDirty, isValid, isDisabled, isReadonly }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VField), mergeProps({ ...unref(fieldProps), label: void 0 }, {
              id: id.value,
              role: "textbox",
              active: unref(focused) || isDirty.value || unref(isCalendarOpen),
              focused: unref(focused) || unref(isCalendarOpen),
              dirty: isDirty.value || props.dirty,
              error: isValid.value === false,
              disabled: isDisabled.value,
              "onClick:clear": onClear
            }), {
              default: withCtx(({ props: vFieldProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(vFieldProps)}${_scopeId2}>`);
                  if (!unref(isInlinePicker)) {
                    _push3(ssrRenderComponent(unref(FlatPickr), mergeProps(unref(compAttrs), {
                      ref_key: "refFlatPicker",
                      ref: refFlatPicker,
                      "model-value": _ctx.modelValue,
                      placeholder: props.placeholder,
                      readonly: isReadonly.value,
                      class: "flat-picker-custom-style",
                      disabled: isReadonly.value,
                      onOnOpen: ($event) => isCalendarOpen.value = true,
                      onOnClose: ($event) => isCalendarOpen.value = false,
                      "onUpdate:modelValue": emitModelValue
                    }), null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(isInlinePicker)) {
                    _push3(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrRenderAttr("placeholder", props.placeholder)}${ssrIncludeBooleanAttr(isReadonly.value) ? " readonly" : ""} class="flat-picker-custom-style" type="text"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", vFieldProps, [
                      !unref(isInlinePicker) ? (openBlock(), createBlock(unref(FlatPickr), mergeProps({ key: 0 }, unref(compAttrs), {
                        ref_key: "refFlatPicker",
                        ref: refFlatPicker,
                        "model-value": _ctx.modelValue,
                        placeholder: props.placeholder,
                        readonly: isReadonly.value,
                        class: "flat-picker-custom-style",
                        disabled: isReadonly.value,
                        onOnOpen: ($event) => isCalendarOpen.value = true,
                        onOnClose: ($event) => isCalendarOpen.value = false,
                        "onUpdate:modelValue": emitModelValue
                      }), null, 16, ["model-value", "placeholder", "readonly", "disabled", "onOnOpen", "onOnClose"])) : createCommentVNode("", true),
                      unref(isInlinePicker) ? (openBlock(), createBlock("input", {
                        key: 1,
                        value: _ctx.modelValue,
                        placeholder: props.placeholder,
                        readonly: isReadonly.value,
                        class: "flat-picker-custom-style",
                        type: "text"
                      }, null, 8, ["value", "placeholder", "readonly"])) : createCommentVNode("", true)
                    ], 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VField), mergeProps({ ...unref(fieldProps), label: void 0 }, {
                id: id.value,
                role: "textbox",
                active: unref(focused) || isDirty.value || unref(isCalendarOpen),
                focused: unref(focused) || unref(isCalendarOpen),
                dirty: isDirty.value || props.dirty,
                error: isValid.value === false,
                disabled: isDisabled.value,
                "onClick:clear": onClear
              }), {
                default: withCtx(({ props: vFieldProps }) => [
                  createVNode("div", vFieldProps, [
                    !unref(isInlinePicker) ? (openBlock(), createBlock(unref(FlatPickr), mergeProps({ key: 0 }, unref(compAttrs), {
                      ref_key: "refFlatPicker",
                      ref: refFlatPicker,
                      "model-value": _ctx.modelValue,
                      placeholder: props.placeholder,
                      readonly: isReadonly.value,
                      class: "flat-picker-custom-style",
                      disabled: isReadonly.value,
                      onOnOpen: ($event) => isCalendarOpen.value = true,
                      onOnClose: ($event) => isCalendarOpen.value = false,
                      "onUpdate:modelValue": emitModelValue
                    }), null, 16, ["model-value", "placeholder", "readonly", "disabled", "onOnOpen", "onOnClose"])) : createCommentVNode("", true),
                    unref(isInlinePicker) ? (openBlock(), createBlock("input", {
                      key: 1,
                      value: _ctx.modelValue,
                      placeholder: props.placeholder,
                      readonly: isReadonly.value,
                      class: "flat-picker-custom-style",
                      type: "text"
                    }, null, 8, ["value", "placeholder", "readonly"])) : createCommentVNode("", true)
                  ], 16)
                ]),
                _: 2
              }, 1040, ["id", "active", "focused", "dirty", "error", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isInlinePicker)) {
        _push(ssrRenderComponent(unref(FlatPickr), mergeProps(unref(compAttrs), {
          ref_key: "refFlatPicker",
          ref: refFlatPicker,
          "model-value": _ctx.modelValue,
          "onUpdate:modelValue": emitModelValue,
          onOnOpen: ($event) => isCalendarOpen.value = true,
          onOnClose: ($event) => isCalendarOpen.value = false
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/app-form-elements/AppDateTimePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
