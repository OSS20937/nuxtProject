import { reactive, hasInjectionContext, getCurrentInstance as getCurrentInstance$1, version as version$1, unref, inject as inject$1, toRef, ref, defineComponent as defineComponent$1, computed, h, resolveComponent, nextTick, effectScope, markRaw, watch, isRef, isReactive, toRaw, getCurrentScope, onScopeDispose, toRefs, shallowRef, shallowReactive, isReadonly, isShallow, readonly, customRef, watchEffect, Fragment, capitalize, warn, provide, camelize, createVNode, mergeProps, Text, Transition, resolveDynamicComponent, withDirectives, resolveDirective, useSSRContext, withCtx, openBlock, createBlock, renderList, createTextVNode, toDisplayString, renderSlot, vShow, TransitionGroup, Teleport, createCommentVNode, Suspense, onErrorCaptured, onServerPrefetch, defineAsyncComponent, createApp } from "vue";
import { $fetch } from "ofetch";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { createHooks } from "hookable";
import { getContext } from "unctx";
import "devalue";
import { defu } from "defu";
import "klona";
import { getActiveHead } from "unhead";
import { defineHeadPlugin } from "@unhead/shared";
import { createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, RouterView, useRouter as useRouter$2 } from "vue-router";
import { sanitizeStatusCode, createError as createError$1, getRequestHeaders, getRequestHeader, setCookie, getCookie, deleteCookie } from "h3";
import { withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL, parseQuery, withTrailingSlash, withoutTrailingSlash } from "ufo";
import { setupDevtoolsPlugin } from "@vue/devtools-api";
import axios from "axios";
import { parse } from "cookie-es";
import destr from "destr";
import { isEqual as isEqual$1 } from "ohash";
import { deepMerge } from "@antfu/utils";
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderSuspense } from "vue/server-renderer";
import { computePosition, flip, shift } from "@floating-ui/dom";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "@casl/vue";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.7.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance$1()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const main = "";
const index$2 = "";
const styles = "";
const icons$1 = "";
version$1[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$2 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global$1[globalKey$2] = handler;
}
function injectHead() {
  if (globalKey$2 in _global$1) {
    return _global$1[globalKey$2]();
  }
  const head = inject$1(headSymbol);
  if (!head && {}.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter$1 = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject$1(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter$1();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const clearError = async (options = {}) => {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter$1().replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestHeaders(include) {
  var _a;
  const event = (_a = (/* @__PURE__ */ useNuxtApp()).ssrContext) == null ? void 0 : _a.event;
  const headers = event ? getRequestHeaders(event) : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual$1(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent$1({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter$1();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
const unhead_pIGethlKjS = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace2) => {
      if (!replace2) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
_globalThis[globalKey$1] || (_globalThis[globalKey$1] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const __nuxt_page_meta$1 = {
  prerender: true
};
const __nuxt_page_meta = {
  layout: "blank"
};
const _routes = [
  {
    name: "empProfile-empProfile",
    path: "/empProfile/empProfile",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/empProfile-beda2e9d.js").then((m) => m.default || m)
  },
  {
    name: "hr-affair-empDetail",
    path: "/hr/affair/empDetail",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/empDetail-28301828.js").then((m) => m.default || m)
  },
  {
    name: "hr-affair-empList",
    path: "/hr/affair/empList",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/empList-828b4258.js").then((m) => m.default || m)
  },
  {
    name: "hr-affair-registerEmpList",
    path: "/hr/affair/registerEmpList",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/registerEmpList-cea84bf6.js").then((m) => m.default || m)
  },
  {
    name: "hr-appo-log",
    path: "/hr/appo/log",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/log-47566359.js").then((m) => m.default || m)
  },
  {
    name: "hr-appo-manage",
    path: "/hr/appo/manage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/manage-8762c900.js").then((m) => m.default || m)
  },
  {
    name: "hr-appo-request",
    path: "/hr/appo/request",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/request-7bf02227.js").then((m) => m.default || m)
  },
  {
    name: "hr-attendreg-daily",
    path: "/hr/attendreg/daily",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/daily-5794702d.js").then((m) => m.default || m)
  },
  {
    name: "hr-attendreg-leave",
    path: "/hr/attendreg/leave",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/leave-62776cc1.js").then((m) => m.default || m)
  },
  {
    name: "hr-attendreg-overWork",
    path: "/hr/attendreg/overWork",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/overWork-5a36e909.js").then((m) => m.default || m)
  },
  {
    name: "hr-attendreg-rest",
    path: "/hr/attendreg/rest",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/rest-49510530.js").then((m) => m.default || m)
  },
  {
    name: "hr-attendreg-travelAndEducationRequest",
    path: "/hr/attendreg/travelAndEducationRequest",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/travelAndEducationRequest-7d6b1455.js").then((m) => m.default || m)
  },
  {
    name: "hr-attndmgmt-annual",
    path: "/hr/attndmgmt/annual",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/annual-774643f5.js").then((m) => m.default || m)
  },
  {
    name: "hr-attndmgmt-break",
    path: "/hr/attndmgmt/break",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/break-09f475d2.js").then((m) => m.default || m)
  },
  {
    name: "hr-attndmgmt-daily",
    path: "/hr/attndmgmt/daily",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/daily-1383a41f.js").then((m) => m.default || m)
  },
  {
    name: "hr-attndmgmt-month",
    path: "/hr/attndmgmt/month",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/month-46e66940.js").then((m) => m.default || m)
  },
  {
    name: "hr-attndmgmt-rest",
    path: "/hr/attndmgmt/rest",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/rest-b17d9a86.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-authManage",
    path: "/hr/base/authManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/authManage-89c8037c.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-baseWorkTimeManage",
    path: "/hr/base/baseWorkTimeManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/baseWorkTimeManage-550a14ee.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-codeManage",
    path: "/hr/base/codeManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/codeManage-353bbc16.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-deptManage",
    path: "/hr/base/deptManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/deptManage-a4538e4a.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-holidayManage",
    path: "/hr/base/holidayManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/holidayManage-0219fa95.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-positionManage",
    path: "/hr/base/positionManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/positionManage-ddf104d3.js").then((m) => m.default || m)
  },
  {
    name: "hr-base-project",
    path: "/hr/base/project",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/project-249129a1.js").then((m) => m.default || m)
  },
  {
    name: "hr-certificate-approval",
    path: "/hr/certificate/approval",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/approval-456dce62.js").then((m) => m.default || m)
  },
  {
    name: "hr-certificate-issue",
    path: "/hr/certificate/issue",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/issue-fa6cbac8.js").then((m) => m.default || m)
  },
  {
    name: "hr-conexpense-approval",
    path: "/hr/conexpense/approval",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/approval-c2ff57ab.js").then((m) => m.default || m)
  },
  {
    name: "hr-conexpense-presentCondition",
    path: "/hr/conexpense/presentCondition",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/presentCondition-da045721.js").then((m) => m.default || m)
  },
  {
    name: "hr-conexpense-request",
    path: "/hr/conexpense/request",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/request-c6033771.js").then((m) => m.default || m)
  },
  {
    name: "hr-confinement-unauthorized",
    path: "/hr/confinement/unauthorized",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/unauthorized-13488901.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailyattend-awrds",
    path: "/hr/dailyattend/awrds",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/awrds-3483c7b0.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailyattend-register",
    path: "/hr/dailyattend/register",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/register-bbce676d.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailyemp-log",
    path: "/hr/dailyemp/log",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/log-4a0b876a.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailyemp-manage",
    path: "/hr/dailyemp/manage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/manage-8608b853.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailysal-awrds",
    path: "/hr/dailysal/awrds",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/awrds-fb37aacd.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailysal-register",
    path: "/hr/dailysal/register",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/register-e4fc77c5.js").then((m) => m.default || m)
  },
  {
    name: "hr-dailysal-salary",
    path: "/hr/dailysal/salary",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/salary-37ab45d4.js").then((m) => m.default || m)
  },
  {
    name: "hr-education-add",
    path: "/hr/education/add",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/add-467ab54e.js").then((m) => m.default || m)
  },
  {
    name: "hr-education-approval",
    path: "/hr/education/approval",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/approval-54cbb6f9.js").then((m) => m.default || m)
  },
  {
    name: "hr-education-list",
    path: "/hr/education/list",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/list-e9de75bd.js").then((m) => m.default || m)
  },
  {
    name: "hr-education-manage",
    path: "/hr/education/manage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/manage-105e5c1c.js").then((m) => m.default || m)
  },
  {
    name: "hr-empeval-add",
    path: "/hr/empeval/add",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/add-8ff97c77.js").then((m) => m.default || m)
  },
  {
    name: "hr-empeval-list",
    path: "/hr/empeval/list",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/list-8677a05e.js").then((m) => m.default || m)
  },
  {
    name: "hr-empeval-manage",
    path: "/hr/empeval/manage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/manage-6548678a.js").then((m) => m.default || m)
  },
  {
    name: "hr-salbase-extManage",
    path: "/hr/salbase/extManage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/extManage-674b1d47.js").then((m) => m.default || m)
  },
  {
    name: "hr-salbase-manage",
    path: "/hr/salbase/manage",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/manage-7d2e6b7f.js").then((m) => m.default || m)
  },
  {
    name: "hr-salbase-socialInsure",
    path: "/hr/salbase/socialInsure",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/socialInsure-3b5c00f9.js").then((m) => m.default || m)
  },
  {
    name: "hr-salcheck-awrds",
    path: "/hr/salcheck/awrds",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/awrds-4bbbefc9.js").then((m) => m.default || m)
  },
  {
    name: "hr-salcheck-month",
    path: "/hr/salcheck/month",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/month-89491e2b.js").then((m) => m.default || m)
  },
  {
    name: "hr-salcheck-severancePay",
    path: "/hr/salcheck/severancePay",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/severancePay-be3895a0.js").then((m) => m.default || m)
  },
  {
    name: "hr-salreg-award",
    path: "/hr/salreg/award",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/award-b7b032b1.js").then((m) => m.default || m)
  },
  {
    name: "hr-salreg-month",
    path: "/hr/salreg/month",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/month-b73f3ecd.js").then((m) => m.default || m)
  },
  {
    name: "hr-salreg-severancePay",
    path: "/hr/salreg/severancePay",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/severancePay-1ce7e7e4.js").then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "index",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import("./_nuxt/index-e615d6f9.js").then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "login",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/login",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import("./_nuxt/login-12af87a4.js").then((m) => m.default || m)
  },
  {
    name: "second-page",
    path: "/second-page",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/second-page-61e41a17.js").then((m) => m.default || m)
  },
  {
    name: "wiztech-hr-emp-eddEmp",
    path: "/wiztech/hr/emp/eddEmp",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/eddEmp-123a6d92.js").then((m) => m.default || m)
  },
  {
    name: "wiztech-hr-emp-findEmp",
    path: "/wiztech/hr/emp/findEmp",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/findEmp-b946822c.js").then((m) => m.default || m)
  },
  {
    name: "wiztech-hr-emp-modal-empDetail",
    path: "/wiztech/hr/emp/modal/empDetail",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/empDetail-0d1b29db.js").then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter$1().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  return to.path !== from.path || JSON.stringify(from.params) !== JSON.stringify(to.params);
}
const configRouterOptions = {
  base: "/nuxtProject/"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter$1();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = {}.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = false;
const USE_DEVTOOLS = ({}.NODE_ENV !== "production" || false) && !({}.NODE_ENV === "test") && IS_CLIENT;
const saveAs = () => {
};
function toastMessage(message, type) {
  const piniaMessage = "🍍 " + message;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o) {
  return "_a" in o && "install" in o;
}
function checkClipboardAccess() {
  if (!("clipboard" in navigator)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve(null);
        const file = files.item(0);
        if (!file)
          return resolve(null);
        return resolve({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open = getFileOpener();
    const result = await open();
    if (!result)
      return;
    const { text, file } = result;
    loadStoresState(pinia, JSON.parse(text));
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function loadStoresState(pinia, state) {
  for (const key in state) {
    const storeState = pinia.state.value[key];
    if (storeState) {
      Object.assign(storeState, state[key]);
    }
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
  return isPinia(store) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store.$id,
    label: store.$id
  };
}
function formatStoreForInspectorState(store) {
  if (isPinia(store)) {
    const storeNames = Array.from(store._s.keys());
    const storeMap = store._s;
    const state2 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store2 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store2._getters.reduce((getters, key) => {
            getters[key] = store2[key];
            return getters;
          }, {})
        };
      })
    };
    return state2;
  }
  const state = {
    state: Object.keys(store.$state).map((key) => ({
      editable: true,
      key,
      value: store.$state[key]
    }))
  };
  if (store._getters && store._getters.length) {
    state.getters = store._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store[getterName]
    }));
  }
  if (store._customProperties.size) {
    state.customProperties = Array.from(store._customProperties).map((key) => ({
      editable: true,
      key,
      value: store[key]
    }));
  }
  return state;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data, event) => {
      data.keys.push(event.key);
      data.operations.push(event.type);
      data.oldValue[event.key] = event.oldValue;
      data.newValue[event.key] = event.newValue;
      return data;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const { assign: assign$1 } = Object;
const getStoreType = (id) => "🍍 " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia 🍍`,
      color: 15064968
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (nodeId) => {
            const store = pinia._s.get(nodeId);
            if (!store) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (typeof store.$reset !== "function") {
              toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
            } else {
              store.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store) => {
          payload.instanceData.state.push({
            type: getStoreType(store.$id),
            key: "state",
            editable: true,
            value: store._isOptionsAPI ? {
              _custom: {
                value: toRaw(store.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(store.$state).reduce((state, key) => {
                state[key] = store.$state[key];
                return state;
              }, {})
            )
          });
          if (store._getters && store._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "getters",
              editable: false,
              value: store._getters.reduce((getters, key) => {
                try {
                  getters[key] = store[key];
                } catch (error) {
                  getters[key] = error;
                }
                return getters;
              }, {})
            });
          }
        });
      }
    });
    api.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api.on.editComponentState((payload) => {
      if (payload.type.startsWith("🍍")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store = pinia._s.get(storeId);
        if (!store) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (api) => {
    const now = typeof api.now === "function" ? api.now.bind(api) : Date.now;
    store.$onAction(({ after, onError, name, args }) => {
      const groupId = runningActionId++;
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now(),
          title: "🛫 " + name,
          subtitle: "start",
          data: {
            store: formatDisplay(store.$id),
            action: formatDisplay(name),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now(),
            title: "🛬 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now(),
            logType: "error",
            title: "💥 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store._customProperties.forEach((name) => {
      watch(() => unref(store[name]), (newValue, oldValue) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now(),
              title: "Change",
              subtitle: name,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store.$subscribe(({ events, type }, state) => {
      api.notifyComponentUpdate();
      api.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now(),
        title: formatMutationType(type),
        data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
        groupId: activeAction
      };
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "⤵️";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "🧩";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate = store._hotUpdate;
    store._hotUpdate = markRaw((newStore) => {
      hotUpdate(newStore);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now(),
          title: "🔥 " + store.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store;
    store.$dispose = () => {
      $dispose();
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
    };
    api.notifyComponentUpdate();
    api.sendInspectorTree(INSPECTOR_ID);
    api.sendInspectorState(INSPECTOR_ID);
    api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store, actionNames, wrapWithProxy) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = wrapWithProxy ? new Proxy(store, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      }) : store;
      activeAction = _actionId;
      const retValue = actions[actionName].apply(trackedStore, arguments);
      activeAction = void 0;
      return retValue;
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  store._isOptionsAPI = !!options.state;
  patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
  const originalHotUpdate = store._hotUpdate;
  toRaw(store)._hotUpdate = function(newStore) {
    originalHotUpdate.apply(this, arguments);
    patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
  };
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(app, pinia);
        }
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = {}.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!({}.NODE_ENV !== "production") || !hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = {}.NODE_ENV !== "production" && hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if ({}.NODE_ENV !== "production" && name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if ({}.NODE_ENV !== "production" && !pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  if ({}.NODE_ENV !== "production" && !isVue2) {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!({}.NODE_ENV !== "production") || !hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if ({}.NODE_ENV !== "production") {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    {}.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } : noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive({}.NODE_ENV !== "production" || USE_DEVTOOLS ? assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ) : partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return runWithContext(() => scope.run(setup));
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if ({}.NODE_ENV !== "production" && hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      if ({}.NODE_ENV !== "production") {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = {}.NODE_ENV !== "production" && hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      if ({}.NODE_ENV !== "production") {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else if ({}.NODE_ENV !== "production") {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key]
        ) : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => ({}).NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if ({}.NODE_ENV !== "production" && hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  if ({}.NODE_ENV !== "production") {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if (USE_DEVTOOLS) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
      Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if (USE_DEVTOOLS) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
      assign(store, extensions);
    } else {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if ({}.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
    if ({}.NODE_ENV !== "production" && typeof id !== "string") {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
    }
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    ({}.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || (hasContext ? inject$1(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    if ({}.NODE_ENV !== "production" && !activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      if ({}.NODE_ENV !== "production") {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if ({}.NODE_ENV !== "production" && hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if ({}.NODE_ENV !== "production" && IS_CLIENT) {
      const currentInstance = getCurrentInstance$1();
      if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = // ---
        toRef(store, key);
      }
    }
    return refs;
  }
}
function setInterceptors(instance) {
  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      return config;
    },
    (error) => Promise.reject(error)
  );
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      var _a;
      if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        navigateTo("/login");
      }
      return Promise.reject(error);
    }
  );
  return instance;
}
function createInstanceWithAuth(url) {
  const instance = axios.create({
    // baseURL: `${{}.NUXT_PUBLIC_API_BASE_URL}${url}`,
    baseURL: `http://localhost:8282${url}`,
    withCredentials: true
  });
  return setInterceptors(instance);
}
const hrApi = createInstanceWithAuth("/hr");
const sys = createInstanceWithAuth("/sys");
async function checkSession() {
  return await sys.get(
    "/checkSession",
    { withCredentials: true }
  );
}
async function loginAuthentication(authenticationData) {
  return await sys.post("/authentication", authenticationData, { withCredentials: true });
}
async function requestLogout(userId) {
  return await sys.post("/requestLogout", { userId }, { withCredentials: true });
}
const useLoginStore = defineStore("loginStore", {
  state: () => ({
    empCode: "",
    empName: "",
    positionCode: "",
    deptCode: "",
    authorityCode: "",
    isLoggedIn: "N",
    idCheck: "",
    pwCheck: "",
    userId: ""
  }),
  actions: {
    //세션 확인
    async CHECK_SESSION() {
      try {
        await checkSession();
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    async LOGIN_AUTHENTICATION(authenticationData) {
      try {
        console.log("로그인 인증 요청");
        const response = await loginAuthentication(authenticationData);
        this.idCheck = response.data.idCheck;
        this.pwCheck = response.data.pwCheck;
        this.empCode = response.data.empCode;
        this.empName = response.data.empName;
        this.positionCode = response.data.positionCode;
        this.deptCode = response.data.deptCode;
        this.authorityCode = response.data.authorityCode;
        this.userId = response.data.userId;
        if (this.idCheck === "Y" && this.pwCheck === "Y") {
          this.isLoggedIn = "Y";
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async LOG_OUT(userId) {
      try {
        const response = await requestLogout(userId);
        console.log(response.data);
        this.idCheck = "";
        this.pwCheck = "";
        this.empCode = "";
        this.empName = "";
        this.positionCode = "";
        this.deptCode = "";
        this.authorityCode = "";
        this.isLoggedIn = "N";
        navigateTo("/login");
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
const auth_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  return;
});
const globalMiddleware = [
  validate,
  auth_45global
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a2;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_0ANC9uTsht = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.slice(0, 4));
}
const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const REGEX_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;
function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.slice(0, 4));
}
function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}
function isAndroid(a) {
  return /android/i.test(a);
}
function isWindows(a) {
  return /Windows/.test(a);
}
function isMacOS(a) {
  return /Mac OS X/.test(a);
}
const browsers = [
  { name: "Samsung", test: /SamsungBrowser/i },
  { name: "Edge", test: /edg([ea]|ios|)\//i },
  { name: "Firefox", test: /firefox|iceweasel|fxios/i },
  { name: "Chrome", test: /chrome|crios|crmo/i },
  { name: "Safari", test: /safari|applewebkit/i }
];
function getBrowserName(a) {
  for (const b of browsers) {
    if (b.test.test(a)) {
      return b.name;
    }
  }
  return "";
}
function generateFlags(headers, userAgent) {
  let mobile = false;
  let mobileOrTablet = false;
  let ios = false;
  let android = false;
  if (userAgent === "Amazon CloudFront") {
    if (headers["cloudfront-is-mobile-viewer"] === "true") {
      mobile = true;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-tablet-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-desktop-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = false;
    }
    if (headers["cloudfront-is-ios-viewer"] === "true") {
      ios = true;
    }
    if (headers["cloudfront-is-android-viewer"] === "true") {
      android = true;
    }
  } else if (headers && headers["cf-device-type"]) {
    switch (headers["cf-device-type"]) {
      case "mobile":
        mobile = true;
        mobileOrTablet = true;
        break;
      case "tablet":
        mobile = false;
        mobileOrTablet = true;
        break;
      case "desktop":
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }
  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === "Safari";
  const isFirefox = browserName === "Firefox";
  const isEdge = browserName === "Edge";
  const isChrome = browserName === "Chrome";
  const isSamsung = browserName === "Samsung";
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    userAgent,
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS,
    isApple: macOS || ios,
    isDesktopOrTablet: !mobile,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}
const plugin_fUEvfpaGmZ = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const DEFAULT_USER_AGENT = config.public.device.defaultUserAgent;
  const REFRESH_ON_RESIZE = config.public.device.refreshOnResize;
  if (nuxtApp.ssrContext) {
    const headers = useRequestHeaders();
    const userAgent2 = headers["user-agent"] || DEFAULT_USER_AGENT;
    const flags2 = reactive(generateFlags(headers, userAgent2));
    return {
      provide: {
        device: flags2
      }
    };
  }
  const userAgent = navigator.userAgent || DEFAULT_USER_AGENT;
  const flags = reactive(generateFlags({}, userAgent));
  if (REFRESH_ON_RESIZE) {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const newFlags = generateFlags({}, navigator.userAgent || DEFAULT_USER_AGENT);
        Object.entries(newFlags).forEach((entry2) => {
          const [key, value] = entry2;
          flags[key] = value;
        });
      }, 50);
    });
  }
  return {
    provide: {
      device: flags
    }
  };
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const toString = Object.prototype.toString;
const isObject$1 = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function refAutoReset(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = toValue(defaultValue);
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = toValue(defaultValue);
      trigger();
    }, toValue(afterMs));
    tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function syncRef(left, right, options = {}) {
  var _a, _b;
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both",
    transform: transform2 = {}
  } = options;
  const watchers = [];
  const transformLTR = (_a = transform2.ltr) != null ? _a : (v) => v;
  const transformRTL = (_b = transform2.rtl) != null ? _b : (v) => v;
  if (direction === "both" || direction === "ltr") {
    watchers.push(watchPausable(
      left,
      (newValue) => {
        watchers.forEach((w) => w.pause());
        right.value = transformLTR(newValue);
        watchers.forEach((w) => w.resume());
      },
      { flush, deep, immediate }
    ));
  }
  if (direction === "both" || direction === "rtl") {
    watchers.push(watchPausable(
      right,
      (newValue) => {
        watchers.forEach((w) => w.pause());
        left.value = transformRTL(newValue);
        watchers.forEach((w) => w.resume());
      },
      { flush, deep, immediate }
    ));
  }
  const stop = () => {
    watchers.forEach((w) => w.stop());
  };
  return stop;
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance$1())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            stop == null ? void 0 : stop();
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            stop == null ? void 0 : stop();
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject$1(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance$1())
    ;
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && "undefined".matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers$1 = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers$1[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults2);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useElementHover(el, options = {}) {
  const {
    delayEnter = 0,
    delayLeave = 0,
    window: window2 = defaultWindow
  } = options;
  const isHovered = ref(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    if (delay)
      timer = setTimeout(() => isHovered.value = entering, delay);
    else
      isHovered.value = entering;
  };
  if (!window2)
    return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  return isHovered;
}
function useFocus(target, options = {}) {
  const { initialValue = false, focusVisible = false } = options;
  const innerFocused = ref(false);
  const targetElement = computed(() => unrefElement(target));
  useEventListener(targetElement, "focus", (event) => {
    var _a, _b;
    if (!focusVisible || ((_b = (_a = event.target).matches) == null ? void 0 : _b.call(_a, ":focus-visible")))
      innerFocused.value = true;
  });
  useEventListener(targetElement, "blur", () => innerFocused.value = false);
  const focused = computed({
    get: () => innerFocused.value,
    set(value) {
      var _a, _b;
      if (!value && innerFocused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      else if (value && !innerFocused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  watch(
    targetElement,
    () => {
      focused.value = initialValue;
    },
    { immediate: true, flush: "post" }
  );
  return { focused };
}
function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window2.scrollX);
  const y = ref(window2.scrollY);
  useEventListener(
    window2,
    "scroll",
    () => {
      x.value = window2.scrollX;
      y.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
const ContentWidth = {
  Fluid: "fluid",
  Boxed: "boxed"
};
const NavbarType = {
  Sticky: "sticky",
  Static: "static",
  Hidden: "hidden"
};
const FooterType = {
  Sticky: "sticky",
  Static: "static",
  Hidden: "hidden"
};
const AppContentLayoutNav = {
  Vertical: "vertical",
  Horizontal: "horizontal"
};
const HorizontalNavType = {
  Sticky: "sticky",
  Static: "static",
  Hidden: "hidden"
};
const injectionKeyIsVerticalNavHovered = Symbol("isVerticalNavHovered");
const layoutConfig$1 = {
  app: {
    title: "my-layout",
    logo: h("img", { src: "/src/assets/logo.svg" }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    // isRTL: false,
    i18n: {
      enable: true
    },
    iconRenderer: h("div")
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true
  },
  footer: {
    type: FooterType.Static
  },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: "tabler-circle" }
  },
  horizontalNav: {
    type: HorizontalNavType.Sticky,
    transition: "none"
  },
  icons: {
    chevronDown: { icon: "tabler-chevron-down" },
    chevronRight: { icon: "tabler-chevron-right" },
    close: { icon: "tabler-x" },
    verticalNavPinned: { icon: "tabler-circle-dot" },
    verticalNavUnPinned: { icon: "tabler-circle" },
    sectionTitlePlaceholder: { icon: "tabler-minus" }
  }
};
const openGroups = ref([]);
const getComputedNavLinkToProp = computed(() => (link) => {
  const props = {
    target: link.target,
    rel: link.rel
  };
  if (link.to)
    props.to = typeof link.to === "string" ? { name: link.to } : link.to;
  else
    props.href = link.href;
  return props;
});
const resolveNavLinkRouteName = (link, router) => {
  if (!link.to)
    return null;
  if (typeof link.to === "string")
    return link.to;
  return router.resolve(link.to).name;
};
const isNavLinkActive = (link, router) => {
  const matchedRoutes = router.currentRoute.value.matched;
  const resolveRoutedName = resolveNavLinkRouteName(link, router);
  if (!resolveRoutedName)
    return false;
  return matchedRoutes.some((route) => {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName;
  });
};
const isNavGroupActive = (children, router) => children.some((child) => {
  if ("children" in child)
    return isNavGroupActive(child.children, router);
  return isNavLinkActive(child, router);
});
const _setDirAttr = (dir) => {
};
const getDynamicI18nProps = (key, tag = "span") => {
  if (!layoutConfig$1.app.i18n.enable)
    return {};
  return {
    keypath: key,
    tag,
    scope: "global"
  };
};
const switchToVerticalNavOnLtOverlayNavBreakpoint = () => {
  const configStore = useLayoutConfigStore();
  const lgAndUpNav = ref(configStore.appContentLayoutNav);
  watch(
    () => configStore.appContentLayoutNav,
    (value) => {
      if (!configStore.isLessThanOverlayNavBreakpoint)
        lgAndUpNav.value = value;
    }
  );
  const shouldChangeContentLayoutNav = refAutoReset(true, 500);
  shouldChangeContentLayoutNav.value = false;
  watch(() => configStore.isLessThanOverlayNavBreakpoint, (val) => {
    if (!val) {
      configStore.appContentLayoutNav = lgAndUpNav.value;
    } else {
      if (!shouldChangeContentLayoutNav.value) {
        setTimeout(() => {
          configStore.appContentLayoutNav = AppContentLayoutNav.Vertical;
        }, 500);
      } else {
        configStore.appContentLayoutNav = AppContentLayoutNav.Vertical;
      }
    }
  }, { immediate: true });
};
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${Number.parseInt(result[1], 16)},${Number.parseInt(result[2], 16)},${Number.parseInt(result[3], 16)}` : null;
};
const VIcon$1 = "";
const IN_BROWSER = false;
const SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
const SUPPORTS_TOUCH = IN_BROWSER;
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0)
    return obj === void 0 ? fallback : obj;
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }
  if (obj == null)
    return fallback;
  return obj[path[last]] === void 0 ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    return false;
  }
  if (a !== Object(a) || b !== Object(b)) {
    return false;
  }
  const props = Object.keys(a);
  if (props.length !== Object.keys(b).length) {
    return false;
  }
  return props.every((p) => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  if (obj == null || !path || typeof path !== "string")
    return fallback;
  if (obj[path] !== void 0)
    return obj[path];
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  return getNestedValue(obj, path.split("."), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property === true)
    return item === void 0 ? fallback : item;
  if (property == null || typeof property === "boolean")
    return fallback;
  if (item !== Object(item)) {
    if (typeof property !== "function")
      return fallback;
    const value2 = property(item, fallback);
    return typeof value2 === "undefined" ? fallback : value2;
  }
  if (typeof property === "string")
    return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property))
    return getNestedValue(item, property, fallback);
  if (typeof property !== "function")
    return fallback;
  const value = property(item, fallback);
  return typeof value === "undefined" ? fallback : value;
}
function createRange(length) {
  let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length
  }, (v, k) => start + k);
}
function convertToUnit(str) {
  let unit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (str == null || str === "") {
    return void 0;
  } else if (isNaN(+str)) {
    return String(str);
  } else if (!isFinite(+str)) {
    return void 0;
  } else {
    return `${Number(str)}${unit}`;
  }
}
function isObject(obj) {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
function refElement(obj) {
  return obj && "$el" in obj ? obj.$el : obj;
}
const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
const keyValues = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function keys(o) {
  return Object.keys(o);
}
function has(obj, key) {
  return key.every((k) => obj.hasOwnProperty(k));
}
function pick(obj, paths, exclude) {
  const found = /* @__PURE__ */ Object.create(null);
  const rest = /* @__PURE__ */ Object.create(null);
  for (const key in obj) {
    if (paths.some((path) => path instanceof RegExp ? path.test(key) : path === key) && !(exclude == null ? void 0 : exclude.some((path) => path === key))) {
      found[key] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  }
  return [found, rest];
}
function omit(obj, exclude) {
  const clone = {
    ...obj
  };
  exclude.forEach((prop) => delete clone[prop]);
  return clone;
}
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const bubblingEvents = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function filterInputAttrs(attrs) {
  const [events, props] = pick(attrs, [onRE]);
  const inputEvents = omit(events, bubblingEvents);
  const [rootAttrs, inputAttrs] = pick(props, ["class", "style", "id", /^data-/]);
  Object.assign(rootAttrs, events);
  Object.assign(inputAttrs, inputEvents);
  return [rootAttrs, inputAttrs];
}
function wrapInArray(v) {
  return v == null ? [] : Array.isArray(v) ? v : [v];
}
function clamp(value) {
  let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length) {
  let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return str + char.repeat(Math.max(0, length - str.length));
}
function padStart(str, length) {
  let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return char.repeat(Math.max(0, length - str.length)) + str;
}
function chunk(str) {
  let size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const chunked = [];
  let index2 = 0;
  while (index2 < str.length) {
    chunked.push(str.substr(index2, size));
    index2 += size;
  }
  return chunked;
}
function mergeDeep() {
  let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let arrayFn = arguments.length > 2 ? arguments[2] : void 0;
  const out = {};
  for (const key in source) {
    out[key] = source[key];
  }
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
      continue;
    }
    if (Array.isArray(sourceProperty) && Array.isArray(targetProperty) && arrayFn) {
      out[key] = arrayFn(sourceProperty, targetProperty);
      continue;
    }
    out[key] = targetProperty;
  }
  return out;
}
function flattenFragments(nodes) {
  return nodes.map((node) => {
    if (node.type === Fragment) {
      return flattenFragments(node.children);
    } else {
      return node;
    }
  }).flat();
}
function toKebabCase() {
  let str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (toKebabCase.cache.has(str))
    return toKebabCase.cache.get(str);
  const kebab = str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  toKebabCase.cache.set(str, kebab);
  return kebab;
}
toKebabCase.cache = /* @__PURE__ */ new Map();
function findChildrenWithProvide(key, vnode) {
  if (!vnode || typeof vnode !== "object")
    return [];
  if (Array.isArray(vnode)) {
    return vnode.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (Array.isArray(vnode.children)) {
    return vnode.children.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (vnode.component) {
    if (Object.getOwnPropertySymbols(vnode.component.provides).includes(key)) {
      return [vnode.component];
    } else if (vnode.component.subTree) {
      return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
    }
  }
  return [];
}
function destructComputed(getter) {
  const refs = reactive({});
  const base = computed(getter);
  watchEffect(() => {
    for (const key in base.value) {
      refs[key] = base.value[key];
    }
  }, {
    flush: "sync"
  });
  return toRefs(refs);
}
function includes(arr, val) {
  return arr.includes(val);
}
function eventName(propName) {
  return propName[2].toLowerCase() + propName.slice(3);
}
const EventProp = () => [Function, Array];
function hasEvent(props, name) {
  name = "on" + capitalize(name);
  return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}
function callEvent(handler) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (Array.isArray(handler)) {
    for (const h2 of handler) {
      h2(...args);
    }
  } else if (typeof handler === "function") {
    handler(...args);
  }
}
function focusableChildren(el) {
  let filterByTabIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const targets = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((s) => `${s}${filterByTabIndex ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...el.querySelectorAll(targets)];
}
function getNextElement(elements, location2, condition) {
  let _el;
  let idx = elements.indexOf(document.activeElement);
  const inc = location2 === "next" ? 1 : -1;
  do {
    idx += inc;
    _el = elements[idx];
  } while ((!_el || _el.offsetParent == null || !((condition == null ? void 0 : condition(_el)) ?? true)) && idx < elements.length && idx >= 0);
  return _el;
}
function focusChild(el, location2) {
  var _a, _b, _c;
  const focusable = focusableChildren(el);
  if (!location2) {
    if (el === document.activeElement || !el.contains(document.activeElement)) {
      (_a = focusable[0]) == null ? void 0 : _a.focus();
    }
  } else if (location2 === "first") {
    (_b = focusable[0]) == null ? void 0 : _b.focus();
  } else if (location2 === "last") {
    (_c = focusable.at(-1)) == null ? void 0 : _c.focus();
  } else {
    const _el = getNextElement(focusable, location2);
    if (_el)
      _el.focus();
    else
      focusChild(el, location2 === "next" ? "first" : "last");
  }
}
function isEmpty(val) {
  return val === null || val === void 0 || typeof val === "string" && val.trim() === "";
}
function matchesSelector(el, selector) {
  return null;
}
const block = ["top", "bottom"];
const inline = ["start", "end", "left", "right"];
function parseAnchor(anchor, isRtl) {
  let [side, align] = anchor.split(" ");
  if (!align) {
    align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
  }
  return {
    side: toPhysical(side, isRtl),
    align: toPhysical(align, isRtl)
  };
}
function toPhysical(str, isRtl) {
  if (str === "start")
    return isRtl ? "right" : "left";
  if (str === "end")
    return isRtl ? "left" : "right";
  return str;
}
function flipSide(anchor) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.side],
    align: anchor.align
  };
}
function flipAlign(anchor) {
  return {
    side: anchor.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.align]
  };
}
function flipCorner(anchor) {
  return {
    side: anchor.align,
    align: anchor.side
  };
}
function getAxis(anchor) {
  return includes(block, anchor.side) ? "y" : "x";
}
class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h2 = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h2
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined")
    return {
      finished: Promise.resolve()
    };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
const handlers = /* @__PURE__ */ new WeakMap();
function bindProps(el, props) {
  Object.keys(props).forEach((k) => {
    var _a;
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      if (props[k] == null) {
        handler == null ? void 0 : handler.forEach((v) => {
          const [n, fn] = v;
          if (n === name) {
            el.removeEventListener(name, fn);
            handler.delete(v);
          }
        });
      } else if (!handler || !((_a = [...handler]) == null ? void 0 : _a.some((v) => v[0] === name && v[1] === props[k]))) {
        el.addEventListener(name, props[k]);
        const _handler = handler || /* @__PURE__ */ new Set();
        _handler.add([name, props[k]]);
        if (!handlers.has(el))
          handlers.set(el, _handler);
      }
    } else {
      if (props[k] == null) {
        el.removeAttribute(k);
      } else {
        el.setAttribute(k, props[k]);
      }
    }
  });
}
function unbindProps(el, props) {
  Object.keys(props).forEach((k) => {
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      handler == null ? void 0 : handler.forEach((v) => {
        const [n, fn] = v;
        if (n === name) {
          el.removeEventListener(name, fn);
          handler.delete(v);
        }
      });
    } else {
      el.removeAttribute(k);
    }
  });
}
const mainTRC = 2.4;
const Rco = 0.2126729;
const Gco = 0.7151522;
const Bco = 0.072175;
const normBG = 0.55;
const normTXT = 0.58;
const revTXT = 0.57;
const revBG = 0.62;
const blkThrs = 0.03;
const blkClmp = 1.45;
const deltaYmin = 5e-4;
const scaleBoW = 1.25;
const scaleWoB = 1.25;
const loConThresh = 0.078;
const loConFactor = 12.82051282051282;
const loConOffset = 0.06;
const loClip = 1e-3;
function APCAcontrast(text, background) {
  const Rtxt = (text.r / 255) ** mainTRC;
  const Gtxt = (text.g / 255) ** mainTRC;
  const Btxt = (text.b / 255) ** mainTRC;
  const Rbg = (background.r / 255) ** mainTRC;
  const Gbg = (background.g / 255) ** mainTRC;
  const Bbg = (background.b / 255) ** mainTRC;
  let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
  let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;
  if (Ytxt <= blkThrs)
    Ytxt += (blkThrs - Ytxt) ** blkClmp;
  if (Ybg <= blkThrs)
    Ybg += (blkThrs - Ybg) ** blkClmp;
  if (Math.abs(Ybg - Ytxt) < deltaYmin)
    return 0;
  let outputContrast;
  if (Ybg > Ytxt) {
    const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;
    outputContrast = SAPC < loClip ? 0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
  } else {
    const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
    outputContrast = SAPC > -loClip ? 0 : SAPC > -loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
  }
  return outputContrast * 100;
}
function consoleWarn(message) {
  warn(`Vuetify: ${message}`);
}
function consoleError(message) {
  warn(`Vuetify error: ${message}`);
}
function deprecate(original, replacement) {
  replacement = Array.isArray(replacement) ? replacement.slice(0, -1).map((s) => `'${s}'`).join(", ") + ` or '${replacement.at(-1)}'` : `'${replacement}'`;
  warn(`[Vuetify UPGRADE] '${original}' is deprecated, use ${replacement} instead.`);
}
const delta = 0.20689655172413793;
const cielabForwardTransform = (t) => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
const cielabReverseTransform = (t) => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);
function fromXYZ$1(xyz) {
  const transform2 = cielabForwardTransform;
  const transformedY = transform2(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform2(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform2(xyz[2] / 1.08883))];
}
function toXYZ$1(lab) {
  const transform2 = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform2(Ln + lab[1] / 500) * 0.95047, transform2(Ln), transform2(Ln - lab[2] / 200) * 1.08883];
}
const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
const srgbForwardTransform = (C) => C <= 31308e-7 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055;
const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
const srgbReverseTransform = (C) => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform2 = srgbForwardTransform;
  const matrix = srgbForwardMatrix;
  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(clamp(transform2(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  }
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };
}
function toXYZ(_ref) {
  let {
    r,
    g,
    b
  } = _ref;
  const xyz = [0, 0, 0];
  const transform2 = srgbReverseTransform;
  const matrix = srgbReverseMatrix;
  r = transform2(r / 255);
  g = transform2(g / 255);
  b = transform2(b / 255);
  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }
  return xyz;
}
function isCssColor(color) {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}
const cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;
const mappers = {
  rgb: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  rgba: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  hsl: (h2, s, l, a) => HSLtoRGB({
    h: h2,
    s,
    l,
    a
  }),
  hsla: (h2, s, l, a) => HSLtoRGB({
    h: h2,
    s,
    l,
    a
  }),
  hsv: (h2, s, v, a) => HSVtoRGB({
    h: h2,
    s,
    v,
    a
  }),
  hsva: (h2, s, v, a) => HSVtoRGB({
    h: h2,
    s,
    v,
    a
  })
};
function parseColor(color) {
  if (typeof color === "number") {
    if (isNaN(color) || color < 0 || color > 16777215) {
      consoleWarn(`'${color}' is not a valid hex color`);
    }
    return {
      r: (color & 16711680) >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  } else if (typeof color === "string" && cssColorRe.test(color)) {
    const {
      groups
    } = color.match(cssColorRe);
    const {
      fn,
      values
    } = groups;
    const realValues = values.split(/,\s*/).map((v) => {
      if (v.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(fn)) {
        return parseFloat(v) / 100;
      } else {
        return parseFloat(v);
      }
    });
    return mappers[fn](...realValues);
  } else if (typeof color === "string") {
    let hex = color.startsWith("#") ? color.slice(1) : color;
    if ([3, 4].includes(hex.length)) {
      hex = hex.split("").map((char) => char + char).join("");
    } else if (![6, 8].includes(hex.length)) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    const int = parseInt(hex, 16);
    if (isNaN(int) || int < 0 || int > 4294967295) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    return HexToRGB(hex);
  } else if (typeof color === "object") {
    if (has(color, ["r", "g", "b"])) {
      return color;
    } else if (has(color, ["h", "s", "l"])) {
      return HSVtoRGB(HSLtoHSV(color));
    } else if (has(color, ["h", "s", "v"])) {
      return HSVtoRGB(color);
    }
  }
  throw new TypeError(`Invalid color: ${color == null ? color : String(color) || color.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function HSVtoRGB(hsva) {
  const {
    h: h2,
    s,
    v,
    a
  } = hsva;
  const f = (n) => {
    const k = (n + h2 / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  const rgb = [f(5), f(3), f(1)].map((v2) => Math.round(v2 * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
function HSLtoRGB(hsla) {
  return HSVtoRGB(HSLtoHSV(hsla));
}
function HSLtoHSV(hsl) {
  const {
    h: h2,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h: h2,
    s: sprime,
    v,
    a
  };
}
function toHex(v) {
  const h2 = Math.round(v).toString(16);
  return ("00".substr(0, 2 - h2.length) + h2).toUpperCase();
}
function RGBtoHex(_ref2) {
  let {
    r,
    g,
    b,
    a
  } = _ref2;
  return `#${[toHex(r), toHex(g), toHex(b), a !== void 0 ? toHex(Math.round(a * 255)) : ""].join("")}`;
}
function HexToRGB(hex) {
  hex = parseHex(hex);
  let [r, g, b, a] = chunk(hex, 2).map((c) => parseInt(c, 16));
  a = a === void 0 ? a : a / 255;
  return {
    r,
    g,
    b,
    a
  };
}
function parseHex(hex) {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }
  hex = hex.replace(/([^0-9a-f])/gi, "F");
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split("").map((x) => x + x).join("");
  }
  if (hex.length !== 6) {
    hex = padEnd(padEnd(hex, 6), 8, "F");
  }
  return hex;
}
function lighten(value, amount) {
  const lab = fromXYZ$1(toXYZ(value));
  lab[0] = lab[0] + amount * 10;
  return fromXYZ(toXYZ$1(lab));
}
function darken(value, amount) {
  const lab = fromXYZ$1(toXYZ(value));
  lab[0] = lab[0] - amount * 10;
  return fromXYZ(toXYZ$1(lab));
}
function getLuma(color) {
  const rgb = parseColor(color);
  return toXYZ(rgb)[1];
}
function getForeground(color) {
  const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)));
  const whiteContrast = Math.abs(APCAcontrast(parseColor(16777215), parseColor(color)));
  return whiteContrast > Math.min(blackContrast, 50) ? "#fff" : "#000";
}
function propsFactory(props, source) {
  return (defaults2) => {
    return Object.keys(props).reduce((obj, prop) => {
      const isObjectDefinition = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]);
      const definition = isObjectDefinition ? props[prop] : {
        type: props[prop]
      };
      if (defaults2 && prop in defaults2) {
        obj[prop] = {
          ...definition,
          default: defaults2[prop]
        };
      } else {
        obj[prop] = definition;
      }
      if (source && !obj[prop].source) {
        obj[prop].source = source;
      }
      return obj;
    }, {});
  };
}
const makeComponentProps = propsFactory({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
const DefaultsSymbol = Symbol.for("vuetify:defaults");
function createDefaults(options) {
  return ref(options);
}
function injectDefaults() {
  const defaults2 = inject$1(DefaultsSymbol);
  if (!defaults2)
    throw new Error("[Vuetify] Could not find defaults instance");
  return defaults2;
}
function provideDefaults(defaults2, options) {
  const injectedDefaults = injectDefaults();
  const providedDefaults = ref(defaults2);
  const newDefaults = computed(() => {
    const disabled = unref(options == null ? void 0 : options.disabled);
    if (disabled)
      return injectedDefaults.value;
    const scoped = unref(options == null ? void 0 : options.scoped);
    const reset = unref(options == null ? void 0 : options.reset);
    const root = unref(options == null ? void 0 : options.root);
    if (providedDefaults.value == null && !(scoped || reset || root))
      return injectedDefaults.value;
    let properties = mergeDeep(providedDefaults.value, {
      prev: injectedDefaults.value
    });
    if (scoped)
      return properties;
    if (reset || root) {
      const len = Number(reset || Infinity);
      for (let i = 0; i <= len; i++) {
        if (!properties || !("prev" in properties)) {
          break;
        }
        properties = properties.prev;
      }
      if (properties && typeof root === "string" && root in properties) {
        properties = mergeDeep(mergeDeep(properties, {
          prev: properties
        }), properties[root]);
      }
      return properties;
    }
    return properties.prev ? mergeDeep(properties.prev, properties) : properties;
  });
  provide(DefaultsSymbol, newDefaults);
  return newDefaults;
}
function propIsDefined(vnode, prop) {
  var _a, _b;
  return typeof ((_a = vnode.props) == null ? void 0 : _a[prop]) !== "undefined" || typeof ((_b = vnode.props) == null ? void 0 : _b[toKebabCase(prop)]) !== "undefined";
}
function internalUseDefaults() {
  let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let name = arguments.length > 1 ? arguments[1] : void 0;
  let defaults2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : injectDefaults();
  const vm = getCurrentInstance("useDefaults");
  name = name ?? vm.type.name ?? vm.type.__name;
  if (!name) {
    throw new Error("[Vuetify] Could not determine component name");
  }
  const componentDefaults = computed(() => {
    var _a;
    return (_a = defaults2.value) == null ? void 0 : _a[props._as ?? name];
  });
  const _props = new Proxy(props, {
    get(target, prop) {
      var _a, _b, _c, _d;
      const propValue = Reflect.get(target, prop);
      if (prop === "class" || prop === "style") {
        return [(_a = componentDefaults.value) == null ? void 0 : _a[prop], propValue].filter((v) => v != null);
      } else if (typeof prop === "string" && !propIsDefined(vm.vnode, prop)) {
        return ((_b = componentDefaults.value) == null ? void 0 : _b[prop]) ?? ((_d = (_c = defaults2.value) == null ? void 0 : _c.global) == null ? void 0 : _d[prop]) ?? propValue;
      }
      return propValue;
    }
  });
  const _subcomponentDefaults = shallowRef();
  watchEffect(() => {
    if (componentDefaults.value) {
      const subComponents = Object.entries(componentDefaults.value).filter((_ref) => {
        let [key] = _ref;
        return key.startsWith(key[0].toUpperCase());
      });
      _subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : void 0;
    } else {
      _subcomponentDefaults.value = void 0;
    }
  });
  function provideSubDefaults() {
    const injected = injectSelf(DefaultsSymbol, vm);
    provide(DefaultsSymbol, computed(() => {
      return _subcomponentDefaults.value ? mergeDeep((injected == null ? void 0 : injected.value) ?? {}, _subcomponentDefaults.value) : injected == null ? void 0 : injected.value;
    }));
  }
  return {
    props: _props,
    provideSubDefaults
  };
}
function defineComponent(options) {
  options._setup = options._setup ?? options.setup;
  if (!options.name) {
    consoleWarn("The component is missing an explicit name, unable to generate default prop value");
    return options;
  }
  if (options._setup) {
    options.props = propsFactory(options.props ?? {}, options.name)();
    const propKeys = Object.keys(options.props);
    options.filterProps = function filterProps(props) {
      return pick(props, propKeys, ["class", "style"]);
    };
    options.props._as = String;
    options.setup = function setup(props, ctx) {
      const defaults2 = injectDefaults();
      if (!defaults2.value)
        return options._setup(props, ctx);
      const {
        props: _props,
        provideSubDefaults
      } = internalUseDefaults(props, props._as ?? options.name, defaults2);
      const setupBindings = options._setup(_props, ctx);
      provideSubDefaults();
      return setupBindings;
    };
  }
  return options;
}
function genericComponent() {
  let exposeDefaults = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (options) => (exposeDefaults ? defineComponent : defineComponent$1)(options);
}
function defineFunctionalComponent(props, render) {
  render.props = props;
  return render;
}
function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name ?? capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode)
      node = node.parentNode;
    if (node !== document)
      return null;
    return document;
  }
  const root = node.getRootNode();
  if (root !== document && root.getRootNode({
    composed: true
  }) !== document)
    return null;
  return root;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
function getCurrentInstance(name, message) {
  const vm = getCurrentInstance$1();
  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${message || "must be called from inside a setup function"}`);
  }
  return vm;
}
function getCurrentInstanceName() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const vm = getCurrentInstance(name).type;
  return toKebabCase((vm == null ? void 0 : vm.aliasName) || (vm == null ? void 0 : vm.name));
}
let _uid = 0;
let _map = /* @__PURE__ */ new WeakMap();
function getUid() {
  const vm = getCurrentInstance("getUid");
  if (_map.has(vm))
    return _map.get(vm);
  else {
    const uid = _uid++;
    _map.set(vm, uid);
    return uid;
  }
}
getUid.reset = () => {
  _uid = 0;
  _map = /* @__PURE__ */ new WeakMap();
};
function getScrollParent(el) {
  let includeHidden = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  while (el) {
    if (includeHidden ? isPotentiallyScrollable(el) : hasScrollbar(el))
      return el;
    el = el.parentElement;
  }
  return document.scrollingElement;
}
function getScrollParents(el, stopAt) {
  const elements = [];
  if (stopAt && el && !stopAt.contains(el))
    return elements;
  while (el) {
    if (hasScrollbar(el))
      elements.push(el);
    if (el === stopAt)
      break;
    el = el.parentElement;
  }
  return elements;
}
function hasScrollbar(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE)
    return false;
  const style = window.getComputedStyle(el);
  return style.overflowY === "scroll" || style.overflowY === "auto" && el.scrollHeight > el.clientHeight;
}
function isPotentiallyScrollable(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE)
    return false;
  const style = window.getComputedStyle(el);
  return ["scroll", "auto"].includes(style.overflowY);
}
function injectSelf(key) {
  let vm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance("injectSelf");
  const {
    provides
  } = vm;
  if (provides && key in provides) {
    return provides[key];
  }
  return void 0;
}
function isFixedPosition(el) {
  while (el) {
    if (window.getComputedStyle(el).position === "fixed") {
      return true;
    }
    el = el.offsetParent;
  }
  return false;
}
function useRender(render) {
  const vm = getCurrentInstance("useRender");
  vm.render = render;
}
function useColor(colors) {
  return destructComputed(() => {
    const classes = [];
    const styles2 = {};
    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles2.backgroundColor = colors.value.background;
        if (!colors.value.text) {
          const backgroundColor = parseColor(colors.value.background);
          if (backgroundColor.a == null || backgroundColor.a === 1) {
            const textColor = getForeground(backgroundColor);
            styles2.color = textColor;
            styles2.caretColor = textColor;
          }
        }
      } else {
        classes.push(`bg-${colors.value.background}`);
      }
    }
    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles2.color = colors.value.text;
        styles2.caretColor = colors.value.text;
      } else {
        classes.push(`text-${colors.value.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles2
    };
  });
}
function useTextColor(props, name) {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(colors);
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(props, name) {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(colors);
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}
const aliases$1 = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar"
};
const mdi = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (props) => h(VClassIcon, {
    ...props,
    class: "mdi"
  })
};
const IconValue = [String, Function, Object, Array];
const IconSymbol = Symbol.for("vuetify:icons");
const makeIconProps = propsFactory({
  icon: {
    type: IconValue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: true
  }
}, "icon");
const VComponentIcon = genericComponent()({
  name: "VComponentIcon",
  props: makeIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      const Icon = props.icon;
      return createVNode(props.tag, null, {
        default: () => {
          var _a;
          return [props.icon ? createVNode(Icon, null, null) : (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
const VSvgIcon = /* @__PURE__ */ defineComponent({
  name: "VSvgIcon",
  inheritAttrs: false,
  props: makeIconProps(),
  setup(props, _ref2) {
    let {
      attrs
    } = _ref2;
    return () => {
      return createVNode(props.tag, mergeProps(attrs, {
        "style": null
      }), {
        default: () => [createVNode("svg", {
          "class": "v-icon__svg",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24",
          "role": "img",
          "aria-hidden": "true"
        }, [Array.isArray(props.icon) ? props.icon.map((path) => Array.isArray(path) ? createVNode("path", {
          "d": path[0],
          "fill-opacity": path[1]
        }, null) : createVNode("path", {
          "d": path
        }, null)) : createVNode("path", {
          "d": props.icon
        }, null)])]
      });
    };
  }
});
/* @__PURE__ */ defineComponent({
  name: "VLigatureIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, null, {
        default: () => [props.icon]
      });
    };
  }
});
const VClassIcon = /* @__PURE__ */ defineComponent({
  name: "VClassIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, {
        "class": props.icon
      }, null);
    };
  }
});
const defaultSets = {
  svg: {
    component: VSvgIcon
  },
  class: {
    component: VClassIcon
  }
};
function createIcons(options) {
  return mergeDeep({
    defaultSet: "mdi",
    sets: {
      ...defaultSets,
      mdi
    },
    aliases: {
      ...aliases$1,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"
      /* eslint-enable max-len */
    }
  }, options);
}
const useIcon = (props) => {
  const icons2 = inject$1(IconSymbol);
  if (!icons2)
    throw new Error("Missing Vuetify Icons provide!");
  const iconData = computed(() => {
    var _a;
    const iconAlias = unref(props);
    if (!iconAlias)
      return {
        component: VComponentIcon
      };
    let icon = iconAlias;
    if (typeof icon === "string") {
      icon = icon.trim();
      if (icon.startsWith("$")) {
        icon = (_a = icons2.aliases) == null ? void 0 : _a[icon.slice(1)];
      }
    }
    if (!icon)
      throw new Error(`Could not find aliased icon "${iconAlias}"`);
    if (Array.isArray(icon)) {
      return {
        component: VSvgIcon,
        icon
      };
    } else if (typeof icon !== "string") {
      return {
        component: VComponentIcon,
        icon
      };
    }
    const iconSetName = Object.keys(icons2.sets).find((setName) => typeof icon === "string" && icon.startsWith(`${setName}:`));
    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
    const iconSet = icons2.sets[iconSetName ?? icons2.defaultSet];
    return {
      component: iconSet.component,
      icon: iconName
    };
  });
  return {
    iconData
  };
};
const predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, props.size)) {
      sizeClasses = `${name}--size-${props.size}`;
    } else if (props.size) {
      sizeStyles = {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}
const makeTagProps = propsFactory({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
const ThemeSymbol = Symbol.for("vuetify:theme");
const makeThemeProps = propsFactory({
  theme: String
}, "theme");
const defaultThemeOptions = {
  defaultTheme: "light",
  variations: {
    colors: [],
    lighten: 0,
    darken: 0
  },
  themes: {
    light: {
      dark: false,
      colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        "surface-bright": "#FFFFFF",
        "surface-variant": "#424242",
        "on-surface-variant": "#EEEEEE",
        primary: "#6200EE",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      variables: {
        "border-color": "#000000",
        "border-opacity": 0.12,
        "high-emphasis-opacity": 0.87,
        "medium-emphasis-opacity": 0.6,
        "disabled-opacity": 0.38,
        "idle-opacity": 0.04,
        "hover-opacity": 0.04,
        "focus-opacity": 0.12,
        "selected-opacity": 0.08,
        "activated-opacity": 0.12,
        "pressed-opacity": 0.12,
        "dragged-opacity": 0.08,
        "theme-kbd": "#212529",
        "theme-on-kbd": "#FFFFFF",
        "theme-code": "#F5F5F5",
        "theme-on-code": "#000000"
      }
    },
    dark: {
      dark: true,
      colors: {
        background: "#121212",
        surface: "#212121",
        "surface-bright": "#ccbfd6",
        "surface-variant": "#a3a3a3",
        "on-surface-variant": "#424242",
        primary: "#BB86FC",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC5",
        "secondary-darken-1": "#03DAC5",
        error: "#CF6679",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      variables: {
        "border-color": "#FFFFFF",
        "border-opacity": 0.12,
        "high-emphasis-opacity": 1,
        "medium-emphasis-opacity": 0.7,
        "disabled-opacity": 0.5,
        "idle-opacity": 0.1,
        "hover-opacity": 0.04,
        "focus-opacity": 0.12,
        "selected-opacity": 0.08,
        "activated-opacity": 0.12,
        "pressed-opacity": 0.16,
        "dragged-opacity": 0.08,
        "theme-kbd": "#212529",
        "theme-on-kbd": "#FFFFFF",
        "theme-code": "#343434",
        "theme-on-code": "#CCCCCC"
      }
    }
  }
};
function parseThemeOptions() {
  var _a, _b;
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultThemeOptions;
  if (!options)
    return {
      ...defaultThemeOptions,
      isDisabled: true
    };
  const themes2 = {};
  for (const [key, theme] of Object.entries(options.themes ?? {})) {
    const defaultTheme = theme.dark || key === "dark" ? (_a = defaultThemeOptions.themes) == null ? void 0 : _a.dark : (_b = defaultThemeOptions.themes) == null ? void 0 : _b.light;
    themes2[key] = mergeDeep(defaultTheme, theme);
  }
  return mergeDeep(defaultThemeOptions, {
    ...options,
    themes: themes2
  });
}
function createTheme(options) {
  const parsedOptions = parseThemeOptions(options);
  const name = ref(parsedOptions.defaultTheme);
  const themes2 = ref(parsedOptions.themes);
  const computedThemes = computed(() => {
    const acc = {};
    for (const [name2, original] of Object.entries(themes2.value)) {
      const theme = acc[name2] = {
        ...original,
        colors: {
          ...original.colors
        }
      };
      if (parsedOptions.variations) {
        for (const name3 of parsedOptions.variations.colors) {
          const color = theme.colors[name3];
          if (!color)
            continue;
          for (const variation of ["lighten", "darken"]) {
            const fn = variation === "lighten" ? lighten : darken;
            for (const amount of createRange(parsedOptions.variations[variation], 1)) {
              theme.colors[`${name3}-${variation}-${amount}`] = RGBtoHex(fn(parseColor(color), amount));
            }
          }
        }
      }
      for (const color of Object.keys(theme.colors)) {
        if (/^on-[a-z]/.test(color) || theme.colors[`on-${color}`])
          continue;
        const onColor = `on-${color}`;
        const colorVal = parseColor(theme.colors[color]);
        theme.colors[onColor] = getForeground(colorVal);
      }
    }
    return acc;
  });
  const current = computed(() => computedThemes.value[name.value]);
  const styles2 = computed(() => {
    const lines = [];
    if (current.value.dark) {
      createCssClass(lines, ":root", ["color-scheme: dark"]);
    }
    createCssClass(lines, ":root", genCssVariables(current.value));
    for (const [themeName, theme] of Object.entries(computedThemes.value)) {
      createCssClass(lines, `.v-theme--${themeName}`, [`color-scheme: ${theme.dark ? "dark" : "normal"}`, ...genCssVariables(theme)]);
    }
    const bgLines = [];
    const fgLines = [];
    const colors = new Set(Object.values(computedThemes.value).flatMap((theme) => Object.keys(theme.colors)));
    for (const key of colors) {
      if (/^on-[a-z]/.test(key)) {
        createCssClass(fgLines, `.${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
      } else {
        createCssClass(bgLines, `.bg-${key}`, [`--v-theme-overlay-multiplier: var(--v-theme-${key}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${key})) !important`, `color: rgb(var(--v-theme-on-${key})) !important`]);
        createCssClass(fgLines, `.text-${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
        createCssClass(fgLines, `.border-${key}`, [`--v-border-color: var(--v-theme-${key})`]);
      }
    }
    lines.push(...bgLines, ...fgLines);
    return lines.map((str, i) => i === 0 ? str : `    ${str}`).join("");
  });
  function getHead() {
    return {
      style: [{
        children: styles2.value,
        id: "vuetify-theme-stylesheet",
        nonce: parsedOptions.cspNonce || false
      }]
    };
  }
  function install(app) {
    if (parsedOptions.isDisabled)
      return;
    const head = app._context.provides.usehead;
    if (head) {
      if (head.push) {
        head.push(getHead);
      } else {
        {
          head.addHeadObjs(getHead());
        }
      }
    }
  }
  const themeClasses = computed(() => parsedOptions.isDisabled ? void 0 : `v-theme--${name.value}`);
  return {
    install,
    isDisabled: parsedOptions.isDisabled,
    name,
    themes: themes2,
    current,
    computedThemes,
    themeClasses,
    styles: styles2,
    global: {
      name,
      current
    }
  };
}
function provideTheme(props) {
  getCurrentInstance("provideTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme)
    throw new Error("Could not find Vuetify theme injection");
  const name = computed(() => {
    return props.theme ?? theme.name.value;
  });
  const current = computed(() => theme.themes.value[name.value]);
  const themeClasses = computed(() => theme.isDisabled ? void 0 : `v-theme--${name.value}`);
  const newTheme = {
    ...theme,
    name,
    current,
    themeClasses
  };
  provide(ThemeSymbol, newTheme);
  return newTheme;
}
function useTheme() {
  getCurrentInstance("useTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme)
    throw new Error("Could not find Vuetify theme injection");
  return theme;
}
function createCssClass(lines, selector, content) {
  lines.push(`${selector} {
`, ...content.map((line) => `  ${line};
`), "}\n");
}
function genCssVariables(theme) {
  const lightOverlay = theme.dark ? 2 : 1;
  const darkOverlay = theme.dark ? 1 : 2;
  const variables = [];
  for (const [key, value] of Object.entries(theme.colors)) {
    const rgb = parseColor(value);
    variables.push(`--v-theme-${key}: ${rgb.r},${rgb.g},${rgb.b}`);
    if (!key.startsWith("on-")) {
      variables.push(`--v-theme-${key}-overlay-multiplier: ${getLuma(value) > 0.18 ? lightOverlay : darkOverlay}`);
    }
  }
  for (const [key, value] of Object.entries(theme.variables)) {
    const color = typeof value === "string" && value.startsWith("#") ? parseColor(value) : void 0;
    const rgb = color ? `${color.r}, ${color.g}, ${color.b}` : void 0;
    variables.push(`--v-${key}: ${rgb ?? value}`);
  }
  return variables;
}
const makeVIconProps = propsFactory({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "i"
  }),
  ...makeThemeProps()
}, "VIcon");
const VIcon = genericComponent()({
  name: "VIcon",
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      iconData
    } = useIcon(computed(() => slotIcon.value || props.icon));
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      var _a, _b;
      const slotValue = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (slotValue) {
        slotIcon.value = (_b = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _b.children;
      }
      return createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
          "v-icon--clickable": !!attrs.onClick,
          "v-icon--start": props.start,
          "v-icon--end": props.end
        }, props.class],
        "style": [!sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : void 0, textColorStyles.value, props.style],
        "role": attrs.onClick ? "button" : void 0,
        "aria-hidden": !attrs.onClick
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});
const defineThemeConfig = (userConfig) => {
  return {
    themeConfig: userConfig,
    layoutConfig: {
      app: {
        title: userConfig.app.title,
        logo: userConfig.app.logo,
        contentWidth: userConfig.app.contentWidth,
        contentLayoutNav: userConfig.app.contentLayoutNav,
        overlayNavFromBreakpoint: userConfig.app.overlayNavFromBreakpoint,
        i18n: {
          enable: userConfig.app.i18n.enable
        },
        iconRenderer: userConfig.app.iconRenderer
      },
      navbar: {
        type: userConfig.navbar.type,
        navbarBlur: userConfig.navbar.navbarBlur
      },
      footer: { type: userConfig.footer.type },
      verticalNav: {
        isVerticalNavCollapsed: userConfig.verticalNav.isVerticalNavCollapsed,
        defaultNavItemIconProps: userConfig.verticalNav.defaultNavItemIconProps
      },
      horizontalNav: {
        type: userConfig.horizontalNav.type,
        transition: userConfig.horizontalNav.transition
      },
      icons: {
        chevronDown: userConfig.icons.chevronDown,
        chevronRight: userConfig.icons.chevronRight,
        close: userConfig.icons.close,
        verticalNavPinned: userConfig.icons.verticalNavPinned,
        verticalNavUnPinned: userConfig.icons.verticalNavUnPinned,
        sectionTitlePlaceholder: userConfig.icons.sectionTitlePlaceholder
      }
    }
  };
};
const Skins = {
  Default: "default",
  Bordered: "bordered"
};
const logo = '<svg width="32" height="22" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z" fill="currentColor"/>\r\n<path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z" fill="#161616"/>\r\n<path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z" fill="#161616"/>\r\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z" fill="currentColor"/>\r\n</svg>\r\n';
const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: "WizTech",
    logo: h("div", {
      innerHTML: logo,
      style: "line-height:0; color: rgb(var(--v-global-theme-primary))"
    }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md + 16,
    // 16 for scrollbar. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
    i18n: {
      enable: false,
      defaultLocale: "en",
      langConfig: [
        {
          label: "English",
          i18nLang: "en",
          isRTL: false
        },
        {
          label: "French",
          i18nLang: "fr",
          isRTL: false
        },
        {
          label: "Arabic",
          i18nLang: "ar",
          isRTL: true
        }
      ]
    },
    theme: "system",
    skin: Skins.Default,
    iconRenderer: VIcon
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true
  },
  footer: { type: FooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: "tabler-circle", size: 10 },
    isVerticalNavSemiDark: false
  },
  horizontalNav: {
    type: "sticky",
    transition: "slide-y-reverse-transition"
  },
  /*
  // ℹ️  In below Icons section, you can specify icon for each component. Also you can use other props of v-icon component like `color` and `size` for each icon.
  // Such as: chevronDown: { icon: 'tabler-chevron-down', color:'primary', size: '24' },
  */
  icons: {
    chevronDown: { icon: "tabler-chevron-down" },
    chevronRight: { icon: "tabler-chevron-right", size: 18 },
    close: { icon: "tabler-x" },
    verticalNavPinned: { icon: "tabler-circle-dot" },
    verticalNavUnPinned: { icon: "tabler-circle" },
    sectionTitlePlaceholder: { icon: "tabler-separator" }
  }
});
const namespaceConfig = (str) => `${layoutConfig.app.title}-${str}`;
const cookieRef = (key, defaultValue) => {
  return useCookie(namespaceConfig(key), { default: () => defaultValue });
};
const useLayoutConfigStore = defineStore("layoutConfig", () => {
  const route = useRoute();
  const navbarType = ref(layoutConfig.navbar.type);
  const isNavbarBlurEnabled = cookieRef("isNavbarBlurEnabled", layoutConfig.navbar.navbarBlur);
  const isVerticalNavCollapsed = cookieRef("isVerticalNavCollapsed", layoutConfig.verticalNav.isVerticalNavCollapsed);
  const appContentWidth = cookieRef("appContentWidth", layoutConfig.app.contentWidth);
  const appContentLayoutNav = ref(layoutConfig.app.contentLayoutNav);
  watch(appContentLayoutNav, (val) => {
    if (val === AppContentLayoutNav.Horizontal) {
      if (navbarType.value === NavbarType.Hidden)
        navbarType.value = NavbarType.Sticky;
      isVerticalNavCollapsed.value = false;
    }
  });
  const horizontalNavType = ref(layoutConfig.horizontalNav.type);
  const footerType = ref(layoutConfig.footer.type);
  const isLessThanOverlayNavBreakpoint = useMediaQuery(`(max-width: ${layoutConfig.app.overlayNavFromBreakpoint}px)`);
  const _layoutClasses = computed(() => {
    const { y: windowScrollY } = useWindowScroll();
    return [
      `layout-nav-type-${appContentLayoutNav.value}`,
      `layout-navbar-${navbarType.value}`,
      `layout-footer-${footerType.value}`,
      {
        "layout-vertical-nav-collapsed": isVerticalNavCollapsed.value && appContentLayoutNav.value === "vertical" && !isLessThanOverlayNavBreakpoint.value
      },
      { [`horizontal-nav-${horizontalNavType.value}`]: appContentLayoutNav.value === "horizontal" },
      `layout-content-width-${appContentWidth.value}`,
      { "layout-overlay-nav": isLessThanOverlayNavBreakpoint.value },
      { "window-scrolled": unref(windowScrollY) },
      route.meta.layoutWrapperClasses ? route.meta.layoutWrapperClasses : null
    ];
  });
  const isAppRTL = ref(false);
  watch(isAppRTL, (val) => {
  });
  const isVerticalNavMini = (isVerticalNavHovered = null) => {
    const isVerticalNavHoveredLocal = isVerticalNavHovered || inject$1(injectionKeyIsVerticalNavHovered) || ref(false);
    return computed(() => isVerticalNavCollapsed.value && !isVerticalNavHoveredLocal.value && !isLessThanOverlayNavBreakpoint.value);
  };
  return {
    appContentWidth,
    appContentLayoutNav,
    navbarType,
    isNavbarBlurEnabled,
    isVerticalNavCollapsed,
    horizontalNavType,
    footerType,
    isLessThanOverlayNavBreakpoint,
    isAppRTL,
    _layoutClasses,
    isVerticalNavMini
  };
});
const resolveVuetifyTheme = () => {
  const cookieColorScheme = cookieRef("color-scheme", usePreferredDark().value ? "dark" : "light");
  const storedTheme = cookieRef("theme", themeConfig.app.theme).value;
  return storedTheme === "system" ? cookieColorScheme.value === "dark" ? "dark" : "light" : storedTheme;
};
const breakpoints = ["sm", "md", "lg", "xl", "xxl"];
const DisplaySymbol = Symbol.for("vuetify:display");
const defaultDisplayOptions = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
};
const parseDisplayOptions = function() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultDisplayOptions;
  return mergeDeep(defaultDisplayOptions, options);
};
function getClientWidth(ssr) {
  return typeof ssr === "object" && ssr.clientWidth || 0;
}
function getClientHeight(ssr) {
  return typeof ssr === "object" && ssr.clientHeight || 0;
}
function getPlatform(ssr) {
  const userAgent = "ssr";
  function match(regexp) {
    return Boolean(userAgent.match(regexp));
  }
  const android = match(/android/i);
  const ios = match(/iphone|ipad|ipod/i);
  const cordova = match(/cordova/i);
  const electron = match(/electron/i);
  const chrome = match(/chrome/i);
  const edge = match(/edge/i);
  const firefox = match(/firefox/i);
  const opera = match(/opera/i);
  const win = match(/win/i);
  const mac = match(/mac/i);
  const linux = match(/linux/i);
  return {
    android,
    ios,
    cordova,
    electron,
    chrome,
    edge,
    firefox,
    opera,
    win,
    mac,
    linux,
    touch: SUPPORTS_TOUCH,
    ssr: userAgent === "ssr"
  };
}
function createDisplay(options, ssr) {
  const {
    thresholds,
    mobileBreakpoint
  } = parseDisplayOptions(options);
  const height = shallowRef(getClientHeight(ssr));
  const platform = shallowRef(getPlatform());
  const state = reactive({});
  const width = shallowRef(getClientWidth(ssr));
  function updateSize() {
    height.value = getClientHeight();
    width.value = getClientWidth();
  }
  function update() {
    updateSize();
    platform.value = getPlatform();
  }
  watchEffect(() => {
    const xs = width.value < thresholds.sm;
    const sm = width.value < thresholds.md && !xs;
    const md = width.value < thresholds.lg && !(sm || xs);
    const lg = width.value < thresholds.xl && !(md || sm || xs);
    const xl = width.value < thresholds.xxl && !(lg || md || sm || xs);
    const xxl = width.value >= thresholds.xxl;
    const name = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : "xxl";
    const breakpointValue = typeof mobileBreakpoint === "number" ? mobileBreakpoint : thresholds[mobileBreakpoint];
    const mobile = width.value < breakpointValue;
    state.xs = xs;
    state.sm = sm;
    state.md = md;
    state.lg = lg;
    state.xl = xl;
    state.xxl = xxl;
    state.smAndUp = !xs;
    state.mdAndUp = !(xs || sm);
    state.lgAndUp = !(xs || sm || md);
    state.xlAndUp = !(xs || sm || md || lg);
    state.smAndDown = !(md || lg || xl || xxl);
    state.mdAndDown = !(lg || xl || xxl);
    state.lgAndDown = !(xl || xxl);
    state.xlAndDown = !xxl;
    state.name = name;
    state.height = height.value;
    state.width = width.value;
    state.mobile = mobile;
    state.mobileBreakpoint = mobileBreakpoint;
    state.platform = platform.value;
    state.thresholds = thresholds;
  });
  return {
    ...toRefs(state),
    update,
    ssr: !!ssr
  };
}
function useDisplay() {
  const display = inject$1(DisplaySymbol);
  if (!display)
    throw new Error("Could not find Vuetify display injection");
  return display;
}
const en = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    ok: "OK",
    cancel: "Cancel",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
};
const defaultRtl = {
  af: false,
  ar: true,
  bg: false,
  ca: false,
  ckb: false,
  cs: false,
  de: false,
  el: false,
  en: false,
  es: false,
  et: false,
  fa: true,
  fi: false,
  fr: false,
  hr: false,
  hu: false,
  he: true,
  id: false,
  it: false,
  ja: false,
  ko: false,
  lv: false,
  lt: false,
  nl: false,
  no: false,
  pl: false,
  pt: false,
  ro: false,
  ru: false,
  sk: false,
  sl: false,
  srCyrl: false,
  srLatn: false,
  sv: false,
  th: false,
  tr: false,
  az: false,
  uk: false,
  vi: false,
  zhHans: false,
  zhHant: false
};
function useToggleScope(source, fn) {
  let scope;
  function start() {
    scope = effectScope();
    scope.run(() => fn.length ? fn(() => {
      scope == null ? void 0 : scope.stop();
      start();
    }) : fn());
  }
  watch(source, (active) => {
    if (active && !scope) {
      start();
    } else if (!active) {
      scope == null ? void 0 : scope.stop();
      scope = void 0;
    }
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
}
function useProxiedModel(props, prop, defaultValue) {
  let transformIn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v;
  let transformOut = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const vm = getCurrentInstance("useProxiedModel");
  const internal = ref(props[prop] !== void 0 ? props[prop] : defaultValue);
  const kebabProp = toKebabCase(prop);
  const checkKebab = kebabProp !== prop;
  const isControlled = checkKebab ? computed(() => {
    var _a, _b, _c, _d;
    void props[prop];
    return !!((((_a = vm.vnode.props) == null ? void 0 : _a.hasOwnProperty(prop)) || ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(kebabProp))) && (((_c = vm.vnode.props) == null ? void 0 : _c.hasOwnProperty(`onUpdate:${prop}`)) || ((_d = vm.vnode.props) == null ? void 0 : _d.hasOwnProperty(`onUpdate:${kebabProp}`))));
  }) : computed(() => {
    var _a, _b;
    void props[prop];
    return !!(((_a = vm.vnode.props) == null ? void 0 : _a.hasOwnProperty(prop)) && ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(`onUpdate:${prop}`)));
  });
  useToggleScope(() => !isControlled.value, () => {
    watch(() => props[prop], (val) => {
      internal.value = val;
    });
  });
  const model = computed({
    get() {
      const externalValue = props[prop];
      return transformIn(isControlled.value ? externalValue : internal.value);
    },
    set(internalValue) {
      const newValue = transformOut(internalValue);
      const value = toRaw(isControlled.value ? props[prop] : internal.value);
      if (value === newValue || transformIn(value) === internalValue) {
        return;
      }
      internal.value = newValue;
      vm == null ? void 0 : vm.emit(`update:${prop}`, newValue);
    }
  });
  Object.defineProperty(model, "externalValue", {
    get: () => isControlled.value ? props[prop] : internal.value
  });
  return model;
}
const LANG_PREFIX = "$vuetify.";
const replace = (str, params) => {
  return str.replace(/\{(\d+)\}/g, (match, index2) => {
    return String(params[+index2]);
  });
};
const createTranslateFunction = (current, fallback, messages) => {
  return function(key) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    if (!key.startsWith(LANG_PREFIX)) {
      return replace(key, params);
    }
    const shortKey = key.replace(LANG_PREFIX, "");
    const currentLocale = current.value && messages.value[current.value];
    const fallbackLocale = fallback.value && messages.value[fallback.value];
    let str = getObjectValueByPath(currentLocale, shortKey, null);
    if (!str) {
      consoleWarn(`Translation key "${key}" not found in "${current.value}", trying fallback locale`);
      str = getObjectValueByPath(fallbackLocale, shortKey, null);
    }
    if (!str) {
      consoleError(`Translation key "${key}" not found in fallback`);
      str = key;
    }
    if (typeof str !== "string") {
      consoleError(`Translation key "${key}" has a non-string value`);
      str = key;
    }
    return replace(str, params);
  };
};
function createNumberFunction(current, fallback) {
  return (value, options) => {
    const numberFormat = new Intl.NumberFormat([current.value, fallback.value], options);
    return numberFormat.format(value);
  };
}
function useProvided(props, prop, provided) {
  const internal = useProxiedModel(props, prop, props[prop] ?? provided.value);
  internal.value = props[prop] ?? provided.value;
  watch(provided, (v) => {
    if (props[prop] == null) {
      internal.value = provided.value;
    }
  });
  return internal;
}
function createProvideFunction(state) {
  return (props) => {
    const current = useProvided(props, "locale", state.current);
    const fallback = useProvided(props, "fallback", state.fallback);
    const messages = useProvided(props, "messages", state.messages);
    return {
      name: "vuetify",
      current,
      fallback,
      messages,
      t: createTranslateFunction(current, fallback, messages),
      n: createNumberFunction(current, fallback),
      provide: createProvideFunction({
        current,
        fallback,
        messages
      })
    };
  };
}
function createVuetifyAdapter(options) {
  const current = shallowRef((options == null ? void 0 : options.locale) ?? "en");
  const fallback = shallowRef((options == null ? void 0 : options.fallback) ?? "en");
  const messages = ref({
    en,
    ...options == null ? void 0 : options.messages
  });
  return {
    name: "vuetify",
    current,
    fallback,
    messages,
    t: createTranslateFunction(current, fallback, messages),
    n: createNumberFunction(current, fallback),
    provide: createProvideFunction({
      current,
      fallback,
      messages
    })
  };
}
const LocaleSymbol = Symbol.for("vuetify:locale");
function isLocaleInstance(obj) {
  return obj.name != null;
}
function createLocale(options) {
  const i18n = (options == null ? void 0 : options.adapter) && isLocaleInstance(options == null ? void 0 : options.adapter) ? options == null ? void 0 : options.adapter : createVuetifyAdapter(options);
  const rtl = createRtl(i18n, options);
  return {
    ...i18n,
    ...rtl
  };
}
function useLocale() {
  const locale = inject$1(LocaleSymbol);
  if (!locale)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return locale;
}
function provideLocale(props) {
  const locale = inject$1(LocaleSymbol);
  if (!locale)
    throw new Error("[Vuetify] Could not find injected locale instance");
  const i18n = locale.provide(props);
  const rtl = provideRtl(i18n, locale.rtl, props);
  const data = {
    ...i18n,
    ...rtl
  };
  provide(LocaleSymbol, data);
  return data;
}
function createRtl(i18n, options) {
  const rtl = ref((options == null ? void 0 : options.rtl) ?? defaultRtl);
  const isRtl = computed(() => rtl.value[i18n.current.value] ?? false);
  return {
    isRtl,
    rtl,
    rtlClasses: computed(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
  };
}
function provideRtl(locale, rtl, props) {
  const isRtl = computed(() => props.rtl ?? rtl.value[locale.current.value] ?? false);
  return {
    isRtl,
    rtl,
    rtlClasses: computed(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
  };
}
function useRtl() {
  const locale = inject$1(LocaleSymbol);
  if (!locale)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: locale.isRtl,
    rtlClasses: locale.rtlClasses
  };
}
const firstDay = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function getWeekArray(date2, locale) {
  const weeks = [];
  let currentWeek = [];
  const firstDayOfMonth = startOfMonth(date2);
  const lastDayOfMonth = endOfMonth(date2);
  const firstDayWeekIndex = (firstDayOfMonth.getDay() - firstDay[locale.slice(-2).toUpperCase()] + 7) % 7;
  const lastDayWeekIndex = (lastDayOfMonth.getDay() - firstDay[locale.slice(-2).toUpperCase()] + 7) % 7;
  for (let i = 0; i < firstDayWeekIndex; i++) {
    const adjacentDay = new Date(firstDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() - (firstDayWeekIndex - i));
    currentWeek.push(adjacentDay);
  }
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const day = new Date(date2.getFullYear(), date2.getMonth(), i);
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  for (let i = 1; i < 7 - lastDayWeekIndex; i++) {
    const adjacentDay = new Date(lastDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() + i);
    currentWeek.push(adjacentDay);
  }
  weeks.push(currentWeek);
  return weeks;
}
function startOfMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), 1);
}
function endOfMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 0);
}
function parseLocalDate(value) {
  const parts = value.split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
const _YYYMMDD = /([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;
function date(value) {
  if (value == null)
    return /* @__PURE__ */ new Date();
  if (value instanceof Date)
    return value;
  if (typeof value === "string") {
    let parsed;
    if (_YYYMMDD.test(value)) {
      return parseLocalDate(value);
    } else {
      parsed = Date.parse(value);
    }
    if (!isNaN(parsed))
      return new Date(parsed);
  }
  return null;
}
const sundayJanuarySecond2000 = new Date(2e3, 0, 2);
function getWeekdays(locale) {
  const daysFromSunday = firstDay[locale.slice(-2).toUpperCase()];
  return createRange(7).map((i) => {
    const weekday = new Date(sundayJanuarySecond2000);
    weekday.setDate(sundayJanuarySecond2000.getDate() + daysFromSunday + i);
    return new Intl.DateTimeFormat(locale, {
      weekday: "narrow"
    }).format(weekday);
  });
}
function format(value, formatString, locale) {
  const date2 = new Date(value);
  let options = {};
  switch (formatString) {
    case "fullDateWithWeekday":
      options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      break;
    case "normalDateWithWeekday":
      options = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "keyboardDate":
      options = {};
      break;
    case "monthAndDate":
      options = {
        month: "long",
        day: "numeric"
      };
      break;
    case "monthAndYear":
      options = {
        month: "long",
        year: "numeric"
      };
      break;
    case "dayOfMonth":
      options = {
        day: "numeric"
      };
      break;
    case "shortDate":
      options = {
        year: "numeric"
      };
      break;
    default:
      options = {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(locale, options).format(date2);
}
function toISO(adapter, value) {
  const date2 = adapter.toJsDate(value);
  const year = date2.getFullYear();
  const month = padStart(String(date2.getMonth() + 1), 2, "0");
  const day = padStart(String(date2.getDate()), 2, "0");
  return `${year}-${month}-${day}`;
}
function parseISO(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function addDays(date2, amount) {
  const d = new Date(date2);
  d.setDate(d.getDate() + amount);
  return d;
}
function addMonths(date2, amount) {
  const d = new Date(date2);
  d.setMonth(d.getMonth() + amount);
  return d;
}
function getYear(date2) {
  return date2.getFullYear();
}
function getMonth(date2) {
  return date2.getMonth();
}
function startOfYear(date2) {
  return new Date(date2.getFullYear(), 0, 1);
}
function endOfYear(date2) {
  return new Date(date2.getFullYear(), 11, 31);
}
function isWithinRange(date2, range) {
  return isAfter(date2, range[0]) && isBefore(date2, range[1]);
}
function isValid(date2) {
  if (!date2 || date2 == null)
    return false;
  const d = new Date(date2);
  return d instanceof Date && !isNaN(d.getTime());
}
function isAfter(date2, comparing) {
  return date2.getTime() > comparing.getTime();
}
function isBefore(date2, comparing) {
  return date2.getTime() < comparing.getTime();
}
function isEqual(date2, comparing) {
  return date2.getTime() === comparing.getTime();
}
function isSameDay(date2, comparing) {
  return date2.getDate() === comparing.getDate() && date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
}
function isSameMonth(date2, comparing) {
  return date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
}
function getDiff(date2, comparing, unit) {
  const d = new Date(date2);
  const c = new Date(comparing);
  if (unit === "month") {
    return d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12;
  }
  return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24));
}
function setYear(date2, year) {
  const d = new Date(date2);
  d.setFullYear(year);
  return d;
}
function startOfDay(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
}
function endOfDay(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 23, 59, 59, 999);
}
class VuetifyDateAdapter {
  constructor(options) {
    this.locale = options.locale;
  }
  date(value) {
    return date(value);
  }
  toJsDate(date2) {
    return date2;
  }
  toISO(date2) {
    return toISO(this, date2);
  }
  parseISO(date2) {
    return parseISO(date2);
  }
  addDays(date2, amount) {
    return addDays(date2, amount);
  }
  addMonths(date2, amount) {
    return addMonths(date2, amount);
  }
  getWeekArray(date2) {
    return getWeekArray(date2, this.locale);
  }
  startOfMonth(date2) {
    return startOfMonth(date2);
  }
  endOfMonth(date2) {
    return endOfMonth(date2);
  }
  format(date2, formatString) {
    return format(date2, formatString, this.locale);
  }
  isEqual(date2, comparing) {
    return isEqual(date2, comparing);
  }
  isValid(date2) {
    return isValid(date2);
  }
  isWithinRange(date2, range) {
    return isWithinRange(date2, range);
  }
  isAfter(date2, comparing) {
    return isAfter(date2, comparing);
  }
  isBefore(date2, comparing) {
    return !isAfter(date2, comparing) && !isEqual(date2, comparing);
  }
  isSameDay(date2, comparing) {
    return isSameDay(date2, comparing);
  }
  isSameMonth(date2, comparing) {
    return isSameMonth(date2, comparing);
  }
  setYear(date2, year) {
    return setYear(date2, year);
  }
  getDiff(date2, comparing, unit) {
    return getDiff(date2, comparing, unit);
  }
  getWeekdays() {
    return getWeekdays(this.locale);
  }
  getYear(date2) {
    return getYear(date2);
  }
  getMonth(date2) {
    return getMonth(date2);
  }
  startOfDay(date2) {
    return startOfDay(date2);
  }
  endOfDay(date2) {
    return endOfDay(date2);
  }
  startOfYear(date2) {
    return startOfYear(date2);
  }
  endOfYear(date2) {
    return endOfYear(date2);
  }
}
const DateAdapterSymbol = Symbol.for("vuetify:date-adapter");
function createDate(options) {
  return mergeDeep({
    adapter: VuetifyDateAdapter,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, options);
}
function useResizeObserver(callback) {
  const resizeRef = ref();
  const contentRect = ref();
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}
const VuetifyLayoutKey = Symbol.for("vuetify:layout");
const VuetifyLayoutItemKey = Symbol.for("vuetify:layout-item");
const ROOT_ZINDEX = 1e3;
const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout");
const generateLayers = (layout, positions, layoutSizes, activeItems) => {
  let previousLayer = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const layers = [{
    id: "",
    layer: {
      ...previousLayer
    }
  }];
  for (const id of layout) {
    const position = positions.get(id);
    const amount = layoutSizes.get(id);
    const active = activeItems.get(id);
    if (!position || !amount || !active)
      continue;
    const layer = {
      ...previousLayer,
      [position.value]: parseInt(previousLayer[position.value], 10) + (active.value ? parseInt(amount.value, 10) : 0)
    };
    layers.push({
      id,
      layer
    });
    previousLayer = layer;
  }
  return layers;
};
function createLayout(props) {
  const parentLayout = inject$1(VuetifyLayoutKey, null);
  const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX);
  const registered = ref([]);
  const positions = reactive(/* @__PURE__ */ new Map());
  const layoutSizes = reactive(/* @__PURE__ */ new Map());
  const priorities = reactive(/* @__PURE__ */ new Map());
  const activeItems = reactive(/* @__PURE__ */ new Map());
  const disabledTransitions = reactive(/* @__PURE__ */ new Map());
  const {
    resizeRef,
    contentRect: layoutRect
  } = useResizeObserver();
  const computedOverlaps = computed(() => {
    const map = /* @__PURE__ */ new Map();
    const overlaps = props.overlaps ?? [];
    for (const overlap of overlaps.filter((item) => item.includes(":"))) {
      const [top, bottom] = overlap.split(":");
      if (!registered.value.includes(top) || !registered.value.includes(bottom))
        continue;
      const topPosition = positions.get(top);
      const bottomPosition = positions.get(bottom);
      const topAmount = layoutSizes.get(top);
      const bottomAmount = layoutSizes.get(bottom);
      if (!topPosition || !bottomPosition || !topAmount || !bottomAmount)
        continue;
      map.set(bottom, {
        position: topPosition.value,
        amount: parseInt(topAmount.value, 10)
      });
      map.set(top, {
        position: bottomPosition.value,
        amount: -parseInt(bottomAmount.value, 10)
      });
    }
    return map;
  });
  const layers = computed(() => {
    const uniquePriorities = [...new Set([...priorities.values()].map((p) => p.value))].sort((a, b) => a - b);
    const layout = [];
    for (const p of uniquePriorities) {
      const items2 = registered.value.filter((id) => {
        var _a;
        return ((_a = priorities.get(id)) == null ? void 0 : _a.value) === p;
      });
      layout.push(...items2);
    }
    return generateLayers(layout, positions, layoutSizes, activeItems);
  });
  const transitionsEnabled = computed(() => {
    return !Array.from(disabledTransitions.values()).some((ref2) => ref2.value);
  });
  const mainRect = computed(() => {
    return layers.value[layers.value.length - 1].layer;
  });
  const mainStyles = computed(() => {
    return {
      "--v-layout-left": convertToUnit(mainRect.value.left),
      "--v-layout-right": convertToUnit(mainRect.value.right),
      "--v-layout-top": convertToUnit(mainRect.value.top),
      "--v-layout-bottom": convertToUnit(mainRect.value.bottom),
      ...transitionsEnabled.value ? void 0 : {
        transition: "none"
      }
    };
  });
  const items = computed(() => {
    return layers.value.slice(1).map((_ref, index2) => {
      let {
        id
      } = _ref;
      const {
        layer
      } = layers.value[index2];
      const size = layoutSizes.get(id);
      const position = positions.get(id);
      return {
        id,
        ...layer,
        size: Number(size.value),
        position: position.value
      };
    });
  });
  const getLayoutItem = (id) => {
    return items.value.find((item) => item.id === id);
  };
  const rootVm = getCurrentInstance("createLayout");
  const isMounted = shallowRef(false);
  provide(VuetifyLayoutKey, {
    register: (vm, _ref2) => {
      let {
        id,
        order,
        position,
        layoutSize,
        elementSize,
        active,
        disableTransitions,
        absolute
      } = _ref2;
      priorities.set(id, order);
      positions.set(id, position);
      layoutSizes.set(id, layoutSize);
      activeItems.set(id, active);
      disableTransitions && disabledTransitions.set(id, disableTransitions);
      const instances = findChildrenWithProvide(VuetifyLayoutItemKey, rootVm == null ? void 0 : rootVm.vnode);
      const instanceIndex = instances.indexOf(vm);
      if (instanceIndex > -1)
        registered.value.splice(instanceIndex, 0, id);
      else
        registered.value.push(id);
      const index2 = computed(() => items.value.findIndex((i) => i.id === id));
      const zIndex = computed(() => rootZIndex.value + layers.value.length * 2 - index2.value * 2);
      const layoutItemStyles = computed(() => {
        const isHorizontal = position.value === "left" || position.value === "right";
        const isOppositeHorizontal = position.value === "right";
        const isOppositeVertical = position.value === "bottom";
        const styles2 = {
          [position.value]: 0,
          zIndex: zIndex.value,
          transform: `translate${isHorizontal ? "X" : "Y"}(${(active.value ? 0 : -110) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1)}%)`,
          position: absolute.value || rootZIndex.value !== ROOT_ZINDEX ? "absolute" : "fixed",
          ...transitionsEnabled.value ? void 0 : {
            transition: "none"
          }
        };
        if (!isMounted.value)
          return styles2;
        const item = items.value[index2.value];
        if (!item)
          throw new Error(`[Vuetify] Could not find layout item "${id}"`);
        const overlap = computedOverlaps.value.get(id);
        if (overlap) {
          item[overlap.position] += overlap.amount;
        }
        return {
          ...styles2,
          height: isHorizontal ? `calc(100% - ${item.top}px - ${item.bottom}px)` : elementSize.value ? `${elementSize.value}px` : void 0,
          left: isOppositeHorizontal ? void 0 : `${item.left}px`,
          right: isOppositeHorizontal ? `${item.right}px` : void 0,
          top: position.value !== "bottom" ? `${item.top}px` : void 0,
          bottom: position.value !== "top" ? `${item.bottom}px` : void 0,
          width: !isHorizontal ? `calc(100% - ${item.left}px - ${item.right}px)` : elementSize.value ? `${elementSize.value}px` : void 0
        };
      });
      const layoutItemScrimStyles = computed(() => ({
        zIndex: zIndex.value - 1
      }));
      return {
        layoutItemStyles,
        layoutItemScrimStyles,
        zIndex
      };
    },
    unregister: (id) => {
      priorities.delete(id);
      positions.delete(id);
      layoutSizes.delete(id);
      activeItems.delete(id);
      disabledTransitions.delete(id);
      registered.value = registered.value.filter((v) => v !== id);
    },
    mainRect,
    mainStyles,
    getLayoutItem,
    items,
    layoutRect,
    rootZIndex
  });
  const layoutClasses = computed(() => ["v-layout", {
    "v-layout--full-height": props.fullHeight
  }]);
  const layoutStyles = computed(() => ({
    zIndex: parentLayout ? rootZIndex.value : void 0,
    position: parentLayout ? "relative" : void 0,
    overflow: parentLayout ? "hidden" : void 0
  }));
  return {
    layoutClasses,
    layoutStyles,
    getLayoutItem,
    items,
    layoutRect,
    layoutRef: resizeRef
  };
}
function createVuetify() {
  let vuetify = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint,
    ...rest
  } = vuetify;
  const options = mergeDeep(blueprint, rest);
  const {
    aliases: aliases2 = {},
    components = {},
    directives = {}
  } = options;
  const defaults2 = createDefaults(options.defaults);
  const display = createDisplay(options.display, options.ssr);
  const theme = createTheme(options.theme);
  const icons2 = createIcons(options.icons);
  const locale = createLocale(options.locale);
  const date2 = createDate(options.date);
  const install = (app) => {
    for (const key in directives) {
      app.directive(key, directives[key]);
    }
    for (const key in components) {
      app.component(key, components[key]);
    }
    for (const key in aliases2) {
      app.component(key, /* @__PURE__ */ defineComponent({
        ...aliases2[key],
        name: key,
        aliasName: aliases2[key].name
      }));
    }
    theme.install(app);
    app.provide(DefaultsSymbol, defaults2);
    app.provide(DisplaySymbol, display);
    app.provide(ThemeSymbol, theme);
    app.provide(IconSymbol, icons2);
    app.provide(LocaleSymbol, locale);
    app.provide(DateAdapterSymbol, date2);
    getUid.reset();
    {
      app.mixin({
        computed: {
          $vuetify() {
            return reactive({
              defaults: inject.call(this, DefaultsSymbol),
              display: inject.call(this, DisplaySymbol),
              theme: inject.call(this, ThemeSymbol),
              icons: inject.call(this, IconSymbol),
              locale: inject.call(this, LocaleSymbol),
              date: inject.call(this, DateAdapterSymbol)
            });
          }
        }
      });
    }
  };
  return {
    install,
    defaults: defaults2,
    display,
    theme,
    icons: icons2,
    locale,
    date: date2
  };
}
const version = "3.3.21";
createVuetify.version = version;
function inject(key) {
  var _a, _b;
  const vm = this.$;
  const provides = ((_a = vm.parent) == null ? void 0 : _a.provides) ?? ((_b = vm.vnode.appContext) == null ? void 0 : _b.provides);
  if (provides && key in provides) {
    return provides[key];
  }
}
const VBtn$1 = "";
const VBtnToggle = "";
const VBtnGroup$1 = "";
const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, "border");
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = isRef(props) ? props.value : props.border;
    const classes = [];
    if (border === true || border === "") {
      classes.push(`${name}--border`);
    } else if (typeof border === "string" || border === 0) {
      for (const value of String(border).split(" ")) {
        classes.push(`border-${value}`);
      }
    }
    return classes;
  });
  return {
    borderClasses
  };
}
const allowedDensities = [null, "default", "comfortable", "compact"];
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const densityClasses = computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}
const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, "elevation");
function useElevation(props) {
  const elevationClasses = computed(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    const classes = [];
    if (elevation == null)
      return classes;
    classes.push(`elevation-${elevation}`);
    return classes;
  });
  return {
    elevationClasses
  };
}
const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = computed(() => {
    const rounded = isRef(props) ? props.value : props.rounded;
    const classes = [];
    if (rounded === true || rounded === "") {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === "string" || rounded === 0) {
      for (const value of String(rounded).split(" ")) {
        classes.push(`rounded-${value}`);
      }
    }
    return classes;
  });
  return {
    roundedClasses
  };
}
const allowedVariants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function genOverlays(isClickable, name) {
  return createVNode(Fragment, null, [isClickable && createVNode("span", {
    "key": "overlay",
    "class": `${name}__overlay`
  }, null), createVNode("span", {
    "key": "underlay",
    "class": `${name}__underlay`
  }, null)]);
}
const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (v) => allowedVariants.includes(v)
  }
}, "variant");
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const variantClasses = computed(() => {
    const {
      variant
    } = unref(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(computed(() => {
    const {
      variant,
      color
    } = unref(props);
    return {
      [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
    };
  }));
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}
const makeVBtnGroupProps = propsFactory({
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, "VBtnGroup");
const VBtnGroup = genericComponent()({
  name: "VBtnGroup",
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: "auto",
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        flat: true,
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-btn-group", {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = getUid();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject$1(injectKey, null);
  if (!group) {
    if (!required)
      return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(props, "value");
  const disabled = computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  });
  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v) => {
    if (v == null)
      return [];
    return getIds(items, wrapInArray(v));
  }, (v) => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index2 = children.indexOf(vm);
    if (index2 > -1) {
      items.splice(index2, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    forceMandatoryValue();
    const index2 = items.findIndex((item) => item.id === id);
    items.splice(index2, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && (item == null ? void 0 : item.disabled))
      return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index2 = internalValue.findIndex((v) => v === id);
      const isSelected = ~index2;
      value = value ?? !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1)
        return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max)
        return;
      if (index2 < 0 && value)
        internalValue.push(id);
      else if (index2 >= 0 && !value)
        internalValue.splice(index2, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected)
        return;
      selected.value = value ?? !isSelected ? [id] : [];
    }
  }
  function step(offset) {
    if (props.multiple)
      consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i) => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled)
        return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, "disabled"),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items: computed(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length)
    return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach((value) => {
    const item = items.find((item2) => deepEqual(value, item2.value));
    const itemByIndex = items[value];
    if ((item == null ? void 0 : item.value) != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach((id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
const makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, "VBtnToggle");
genericComponent()({
  name: "VBtnToggle",
  props: makeVBtnToggleProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const [btnGroupProps] = VBtnGroup.filterProps(props);
      return createVNode(VBtnGroup, mergeProps({
        "class": ["v-btn-toggle", props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            next,
            prev,
            select,
            selected
          })];
        }
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});
const makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider");
const VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults: defaults2,
      disabled,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults2, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const VProgressCircular$1 = "";
function useIntersectionObserver(callback, options) {
  const intersectionRef = ref();
  const isIntersecting = shallowRef(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver((entries) => {
      callback == null ? void 0 : callback(entries, observer);
      isIntersecting.value = !!entries.find((entry2) => entry2.isIntersecting);
    }, options);
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue)
        observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}
const makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "div"
  }),
  ...makeThemeProps()
}, "VProgressCircular");
const VProgressCircular = genericComponent()({
  name: "VProgressCircular",
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(toRef(props, "bgColor"));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = computed(() => Number(props.width));
    const size = computed(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = computed(() => width.value / size.value * diameter.value);
    const strokeDashOffset = computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
      "style": [sizeStyles.value, textColorStyles.value, props.style],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createVNode("circle", {
        "class": ["v-progress-circular__underlay", underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});
const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function useDimension(props) {
  const dimensionStyles = computed(() => ({
    height: convertToUnit(props.height),
    maxHeight: convertToUnit(props.maxHeight),
    maxWidth: convertToUnit(props.maxWidth),
    minHeight: convertToUnit(props.minHeight),
    minWidth: convertToUnit(props.minWidth),
    width: convertToUnit(props.width)
  }));
  return {
    dimensionStyles
  };
}
const VProgressLinear$1 = "";
const oppositeMap = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const makeLocationProps = propsFactory({
  location: String
}, "location");
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let offset = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl
  } = useRtl();
  const locationStyles = computed(() => {
    if (!props.location)
      return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset2(side2) {
      return offset ? offset(side2) : 0;
    }
    const styles2 = {};
    if (side !== "center") {
      if (opposite)
        styles2[oppositeMap[side]] = `calc(100% - ${getOffset2(side)}px)`;
      else
        styles2[side] = 0;
    }
    if (align !== "center") {
      if (opposite)
        styles2[oppositeMap[align]] = `calc(100% - ${getOffset2(align)}px)`;
      else
        styles2[align] = 0;
    } else {
      if (side === "center")
        styles2.top = styles2.left = "50%";
      else {
        styles2[{
          top: "left",
          bottom: "left",
          left: "top",
          right: "top"
        }[side]] = "50%";
      }
      styles2.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[side];
    }
    return styles2;
  });
  return {
    locationStyles
  };
}
const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VProgressLinear");
const VProgressLinear = genericComponent()({
  name: "VProgressLinear",
  props: makeVProgressLinearProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseInt(props.max, 10));
    const height = computed(() => parseInt(props.height, 10));
    const normalizedBuffer = computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const opacity = computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e) {
      if (!intersectionRef.value)
        return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
      "style": [{
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...locationStyles.value
      }, props.style],
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a;
  let {
    slots
  } = _ref;
  return createVNode("div", {
    "class": `${props.name}__loader`
  }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}
const positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
const makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (v) => positionValues.includes(v)
    )
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = computed(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}
function useRouter() {
  var _a, _b;
  return (_b = (_a = getCurrentInstance("useRouter")) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$router;
}
function useLink(props, attrs) {
  const RouterLink = resolveDynamicComponent("RouterLink");
  const isLink = computed(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
  });
  if (typeof RouterLink === "string") {
    return {
      isLink,
      isClickable,
      href: toRef(props, "href")
    };
  }
  const link = props.to ? RouterLink.useLink(props) : void 0;
  return {
    isLink,
    isClickable,
    route: link == null ? void 0 : link.route,
    navigate: link == null ? void 0 : link.navigate,
    isActive: link && computed(() => {
      var _a, _b;
      return props.exact ? (_a = link.isExactActive) == null ? void 0 : _a.value : (_b = link.isActive) == null ? void 0 : _b.value;
    }),
    href: computed(() => props.to ? link == null ? void 0 : link.route.value.href : props.href)
  };
}
const makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
function useSelectLink(link, select) {
  watch(() => {
    var _a;
    return (_a = link.isActive) == null ? void 0 : _a.value;
  }, (isActive) => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}
const VRipple = "";
const stopSymbol = Symbol("rippleStop");
const DELAY_RIPPLE = 80;
function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}
function isTouchEvent(e) {
  return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
  return e.constructor.name === "KeyboardEvent";
}
const calculate = function(e, el) {
  var _a;
  let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }
  let radius = 0;
  let scale = 0.3;
  if ((_a = el._ripple) == null ? void 0 : _a.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }
  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};
const ripples = {
  /* eslint-disable max-statements */
  show(e, el) {
    var _a;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) {
      return;
    }
    const container = document.createElement("span");
    const animation = document.createElement("span");
    container.appendChild(animation);
    container.className = "v-ripple__container";
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = "v-ripple__animation";
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed2 = window.getComputedStyle(el);
    if (computed2 && computed2.position === "static") {
      el.style.position = "relative";
      el.dataset.previousPosition = "static";
    }
    animation.classList.add("v-ripple__animation--enter");
    animation.classList.add("v-ripple__animation--visible");
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--enter");
      animation.classList.add("v-ripple__animation--in");
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(el) {
    var _a;
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled))
      return;
    const ripples2 = el.getElementsByClassName("v-ripple__animation");
    if (ripples2.length === 0)
      return;
    const animation = ripples2[ripples2.length - 1];
    if (animation.dataset.isHiding)
      return;
    else
      animation.dataset.isHiding = "true";
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--in");
      animation.classList.add("v-ripple__animation--out");
      setTimeout(() => {
        var _a2;
        const ripples3 = el.getElementsByClassName("v-ripple__animation");
        if (ripples3.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }
        if (((_a2 = animation.parentNode) == null ? void 0 : _a2.parentNode) === el)
          el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple) || element._ripple.touched || e[stopSymbol])
    return;
  e[stopSymbol] = true;
  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    if (element._ripple.isTouch)
      return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e)) {
    if (element._ripple.showTimerCommit)
      return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };
    element._ripple.showTimer = window.setTimeout(() => {
      var _a;
      if ((_a = element == null ? void 0 : element._ripple) == null ? void 0 : _a.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}
function rippleStop(e) {
  e[stopSymbol] = true;
}
function rippleHide(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple))
    return;
  window.clearTimeout(element._ripple.showTimer);
  if (e.type === "touchend" && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;
    element._ripple.showTimer = window.setTimeout(() => {
      rippleHide(e);
    });
    return;
  }
  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple))
    return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  window.clearTimeout(element._ripple.showTimer);
}
let keyboardRipple = false;
function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}
function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}
function focusRippleHide(e) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e);
  }
}
function updateRipple(el, binding, wasEnabled) {
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el);
  }
  el._ripple = el._ripple ?? {};
  el._ripple.enabled = enabled;
  el._ripple.centered = modifiers.center;
  el._ripple.circle = modifiers.circle;
  if (isObject(value) && value.class) {
    el._ripple.class = value.class;
  }
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el.addEventListener("touchstart", rippleStop, {
        passive: true
      });
      el.addEventListener("mousedown", rippleStop);
      return;
    }
    el.addEventListener("touchstart", rippleShow, {
      passive: true
    });
    el.addEventListener("touchend", rippleHide, {
      passive: true
    });
    el.addEventListener("touchmove", rippleCancelShow, {
      passive: true
    });
    el.addEventListener("touchcancel", rippleHide);
    el.addEventListener("mousedown", rippleShow);
    el.addEventListener("mouseup", rippleHide);
    el.addEventListener("mouseleave", rippleHide);
    el.addEventListener("keydown", keyboardRippleShow);
    el.addEventListener("keyup", keyboardRippleHide);
    el.addEventListener("blur", focusRippleHide);
    el.addEventListener("dragstart", rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}
function removeListeners(el) {
  el.removeEventListener("mousedown", rippleShow);
  el.removeEventListener("touchstart", rippleShow);
  el.removeEventListener("touchend", rippleHide);
  el.removeEventListener("touchmove", rippleCancelShow);
  el.removeEventListener("touchcancel", rippleHide);
  el.removeEventListener("mouseup", rippleHide);
  el.removeEventListener("mouseleave", rippleHide);
  el.removeEventListener("keydown", keyboardRippleShow);
  el.removeEventListener("keyup", keyboardRippleHide);
  el.removeEventListener("dragstart", rippleHide);
  el.removeEventListener("blur", focusRippleHide);
}
function mounted$1(el, binding) {
  updateRipple(el, binding, false);
}
function unmounted$1(el) {
  delete el._ripple;
  removeListeners(el);
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}
const Ripple = {
  mounted: mounted$1,
  unmounted: unmounted$1,
  updated
};
const makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VBtn");
const VBtn = genericComponent()({
  name: "VBtn",
  directives: {
    Ripple
  },
  props: makeVBtnProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        return (_a = link.isActive) == null ? void 0 : _a.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = computed(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0)
        return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e) {
      var _a;
      if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank"))
        return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      var _a, _b;
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      const hasColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a = link.isActive) == null ? void 0 : _a.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
      return withDirectives(createVNode(Tag, {
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "disabled": isDisabled.value || void 0,
        "href": link.href.value,
        "onClick": onClick,
        "value": valueAttr.value
      }, {
        default: () => {
          var _a2;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createVNode("span", {
            "key": "prepend",
            "class": "v-btn__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.prependIcon,
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, slots.prepend)]), createVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [!slots.default && hasIcon ? createVNode(VIcon, {
            "key": "content-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !hasIcon,
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => {
              var _a3;
              return [((_a3 = slots.default) == null ? void 0 : _a3.call(slots)) ?? props.text];
            }
          })]), !props.icon && hasAppend && createVNode("span", {
            "key": "append",
            "class": "v-btn__append"
          }, [!slots.append ? createVNode(VIcon, {
            "key": "append-icon",
            "icon": props.appendIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !props.appendIcon,
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, slots.append)]), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [((_a2 = slots.loader) == null ? void 0 : _a2.call(slots)) ?? createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "size": "23",
            "width": "2"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), !isDisabled.value && props.ripple, null]]);
    });
    return {};
  }
});
const defaults = {
  IconBtn: {
    icon: true,
    color: "default",
    variant: "text",
    density: "comfortable",
    VIcon: {
      size: 22
    }
  },
  VAlert: {
    density: "comfortable",
    VBtn: {
      color: void 0
    }
  },
  VAvatar: {
    // ℹ️ Remove after next release
    variant: "flat"
  },
  // VImg: {
  //   eager: true,
  // },
  VBadge: {
    // set v-badge default color to primary
    color: "primary"
  },
  VBtn: {
    // set v-btn default color to primary
    color: "primary"
  },
  VChip: {
    size: "small"
  },
  VExpansionPanel: {
    expandIcon: "tabler-chevron-right",
    collapseIcon: "tabler-chevron-right"
  },
  VExpansionPanelTitle: {
    expandIcon: "tabler-chevron-right",
    collapseIcon: "tabler-chevron-right"
  },
  VList: {
    density: "comfortable",
    VCheckboxBtn: {
      density: "compact"
    }
  },
  VPagination: {
    activeColor: "primary",
    density: "comfortable",
    variant: "tonal"
  },
  VTabs: {
    // set v-tabs default color to primary
    color: "primary",
    density: "comfortable",
    VSlideGroup: {
      showArrows: true
    }
  },
  VTooltip: {
    // set v-tooltip default location to top
    location: "top"
  },
  VCheckboxBtn: {
    color: "primary"
  },
  VCheckbox: {
    // set v-checkbox default color to primary
    color: "primary",
    density: "comfortable",
    hideDetails: "auto"
  },
  VRadioGroup: {
    color: "primary",
    density: "comfortable",
    hideDetails: "auto"
  },
  VRadio: {
    density: "comfortable",
    hideDetails: "auto"
  },
  VSelect: {
    variant: "outlined",
    color: "primary",
    density: "compact",
    hideDetails: "auto",
    VChip: {
      color: "primary",
      label: true
    }
  },
  VRangeSlider: {
    // set v-range-slider default color to primary
    color: "primary",
    trackColor: "rgb(var(--v-theme-on-surface),0.06)",
    trackSize: 6,
    thumbSize: 7,
    density: "comfortable",
    thumbLabel: true,
    hideDetails: "auto"
  },
  VRating: {
    // set v-rating default color to primary
    color: "warning"
  },
  VProgressCircular: {
    // set v-progress-circular default color to primary
    color: "primary"
  },
  VProgressLinear: {
    height: 12,
    roundedBar: true,
    rounded: true,
    color: "primary"
  },
  VSlider: {
    // set v-slider default color to primary
    color: "primary",
    trackColor: "rgb(var(--v-theme-on-surface),0.06)",
    hideDetails: "auto",
    thumbSize: 7,
    trackSize: 6
  },
  VTextField: {
    variant: "outlined",
    density: "compact",
    color: "primary",
    hideDetails: "auto"
  },
  VAutocomplete: {
    variant: "outlined",
    color: "primary",
    density: "compact",
    hideDetails: "auto",
    menuProps: {
      contentClass: "app-autocomplete__content v-autocomplete__content"
    },
    VChip: {
      color: "primary",
      label: true
    }
  },
  VCombobox: {
    variant: "outlined",
    density: "compact",
    color: "primary",
    hideDetails: "auto",
    VChip: {
      color: "primary",
      label: true
    }
  },
  VFileInput: {
    variant: "outlined",
    density: "compact",
    color: "primary",
    hideDetails: "auto"
  },
  VTextarea: {
    variant: "outlined",
    density: "compact",
    color: "primary",
    hideDetails: "auto"
  },
  VSwitch: {
    // set v-switch default color to primary
    inset: true,
    color: "primary",
    hideDetails: "auto"
  },
  VTimeline: {
    lineThickness: 1
  },
  VDataTable: {
    VDataTableFooter: {
      VBtn: {
        density: "comfortable",
        color: "default"
      }
    }
  }
};
const aliases = {
  calendar: "tabler-calendar",
  collapse: "tabler-chevron-up",
  complete: "tabler-check",
  cancel: "tabler-x",
  close: "tabler-x",
  delete: "tabler-x",
  clear: "tabler-x",
  success: "tabler-circle-check",
  info: "tabler-info-circle",
  warning: "tabler-alert-circle",
  error: "tabler-x",
  prev: "tabler-chevron-left",
  next: "tabler-chevron-right",
  checkboxOn: "custom-checkbox-checked",
  checkboxOff: "custom-checkbox-unchecked",
  checkboxIndeterminate: "custom-checkbox-indeterminate",
  delimiter: "tabler-circle",
  sort: "tabler-arrow-up",
  expand: "tabler-chevron-down",
  menu: "tabler-menu-2",
  subgroup: "tabler-caret-down",
  dropdown: "tabler-chevron-down",
  radioOn: "custom-radio-checked",
  radioOff: "custom-radio-unchecked",
  edit: "tabler-pencil",
  ratingEmpty: "custom-star-empty",
  ratingFull: "custom-star-fill",
  ratingHalf: "custom-star-half",
  loading: "tabler-refresh",
  first: "tabler-player-skip-back",
  last: "tabler-player-skip-forward",
  unfold: "tabler-arrows-move-vertical",
  file: "tabler-paperclip",
  plus: "tabler-plus",
  minus: "tabler-minus",
  sortAsc: "tabler-arrow-up",
  sortDesc: "tabler-arrow-down"
};
const iconify = {
  component: (props) => h(
    props.tag,
    {
      ...props,
      class: [props.class, props.icon],
      // Remove used props from DOM rendering
      tag: void 0,
      icon: void 0
    }
  )
};
const icons = {
  defaultSet: "iconify",
  aliases,
  sets: {
    iconify
  }
};
const staticPrimaryColor = "#7367F0";
const themes = {
  light: {
    dark: false,
    colors: {
      "primary": staticPrimaryColor,
      "on-primary": "#fff",
      "secondary": "#A8AAAE",
      "on-secondary": "#fff",
      "success": "#28C76F",
      "on-success": "#fff",
      "info": "#00CFE8",
      "on-info": "#fff",
      "warning": "#FF9F43",
      "on-warning": "#fff",
      "error": "#EA5455",
      "background": "#F8F7FA",
      "on-background": "#2F2B3D",
      "on-surface": "#2F2B3D",
      "grey-50": "#FAFAFA",
      "grey-100": "#F5F5F5",
      "grey-200": "#EEEEEE",
      "grey-300": "#E0E0E0",
      "grey-400": "#BDBDBD",
      "grey-500": "#9E9E9E",
      "grey-600": "#757575",
      "grey-700": "#616161",
      "grey-800": "#424242",
      "grey-900": "#212121",
      "perfect-scrollbar-thumb": "#DBDADE",
      "skin-bordered-background": "#fff",
      "skin-bordered-surface": "#fff"
    },
    variables: {
      "code-color": "#d400ff",
      "overlay-scrim-background": "#4C4E64",
      "tooltip-background": "#4A5072",
      "overlay-scrim-opacity": 0.5,
      "hover-opacity": 0.04,
      "focus-opacity": 0.12,
      "selected-opacity": 0.06,
      "activated-opacity": 0.16,
      "pressed-opacity": 0.14,
      "dragged-opacity": 0.1,
      "disabled-opacity": 0.42,
      "border-color": "#2F2B3D",
      "border-opacity": 0.16,
      "high-emphasis-opacity": 0.78,
      "medium-emphasis-opacity": 0.68,
      "switch-opacity": 0.2,
      "switch-disabled-track-opacity": 0.3,
      "switch-disabled-thumb-opacity": 0.4,
      "switch-checked-disabled-opacity": 0.3,
      // Shadows
      "shadow-key-umbra-color": "#2F2B3D"
    }
  },
  dark: {
    dark: true,
    colors: {
      "primary": staticPrimaryColor,
      "on-primary": "#fff",
      "secondary": "#A8AAAE",
      "on-secondary": "#fff",
      "success": "#28C76F",
      "on-success": "#fff",
      "info": "#00CFE8",
      "on-info": "#fff",
      "warning": "#FF9F43",
      "on-warning": "#fff",
      "error": "#EA5455",
      "background": "#25293C",
      "on-background": "#D0D4F1",
      "surface": "#2F3349",
      "on-surface": "#D0D4F1",
      "grey-50": "#26293A",
      "grey-100": "#2F3349",
      "grey-200": "#26293A",
      "grey-300": "#4A5072",
      "grey-400": "#5E6692",
      "grey-500": "#7983BB",
      "grey-600": "#AAB3DE",
      "grey-700": "#B6BEE3",
      "grey-800": "#CFD3EC",
      "grey-900": "#E7E9F6",
      "perfect-scrollbar-thumb": "#4A5072",
      "skin-bordered-background": "#2f3349",
      "skin-bordered-surface": "#2f3349"
    },
    variables: {
      "code-color": "#d400ff",
      "overlay-scrim-background": "#101121",
      "tooltip-background": "#5E6692",
      "overlay-scrim-opacity": 0.6,
      "hover-opacity": 0.04,
      "focus-opacity": 0.12,
      "selected-opacity": 0.06,
      "activated-opacity": 0.16,
      "pressed-opacity": 0.14,
      "dragged-opacity": 0.1,
      "disabled-opacity": 0.42,
      "border-color": "#D0D4F1",
      "border-opacity": 0.16,
      "high-emphasis-opacity": 0.78,
      "medium-emphasis-opacity": 0.68,
      "switch-opacity": 0.4,
      "switch-disabled-track-opacity": 0.4,
      "switch-disabled-thumb-opacity": 0.8,
      "switch-checked-disabled-opacity": 0.3,
      // Shadows
      "shadow-key-umbra-color": "#0F1422"
    }
  }
};
const index$1 = "";
const index_kyvreQaQna = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const cookieThemeValues = {
    defaultTheme: resolveVuetifyTheme(),
    themes: {
      light: {
        colors: {
          primary: cookieRef("lightThemePrimaryColor", staticPrimaryColor).value
        }
      },
      dark: {
        colors: {
          primary: cookieRef("darkThemePrimaryColor", staticPrimaryColor).value
        }
      }
    }
  };
  const optionTheme = deepMerge({ themes }, cookieThemeValues);
  const vuetify = createVuetify({
    ssr: true,
    aliases: {
      IconBtn: VBtn
    },
    defaults,
    icons,
    theme: optionTheme
  });
  nuxtApp.vueApp.use(vuetify);
});
const index_pJsEXjjc09 = /* @__PURE__ */ defineNuxtPlugin(() => {
});
const _sfc_main$h = /* @__PURE__ */ defineComponent$1({
  __name: "HorizontalNav",
  __ssrInlineRender: true,
  props: {
    navItems: {}
  },
  setup(__props) {
    const resolveNavItemComponent = (item) => {
      if ("children" in item)
        return _sfc_main$g;
      return _sfc_main$e;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "nav-items" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.navItems, (item, index2) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
          key: index2,
          item
        }, null), _parent);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const HorizontalNav_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/HorizontalNav.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const can = (action, subject) => {
  var _a;
  const vm = getCurrentInstance$1();
  if (!vm)
    return false;
  const localCan = vm.proxy && "$can" in vm.proxy;
  return localCan ? (_a = vm.proxy) == null ? void 0 : _a.$can(action, subject) : true;
};
const canViewNavMenuGroup = (item) => {
  const hasAnyVisibleChild = item.children.some((i) => can(i.action, i.subject));
  if (!(item.action && item.subject))
    return hasAnyVisibleChild;
  return can(item.action, item.subject) && hasAnyVisibleChild;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent$1({
  ...{
    name: "HorizontalNavGroup"
  },
  __name: "HorizontalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {},
    childrenAtEnd: { type: Boolean, default: false },
    isSubItem: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter$1();
    const configStore = useLayoutConfigStore();
    const isGroupActive = ref(false);
    watch(() => route.path, () => {
      const isActive = isNavGroupActive(props.item.children, router);
      isGroupActive.value = isActive;
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(canViewNavMenuGroup)(_ctx.item)) {
        _push(ssrRenderComponent(unref(_sfc_main$d), mergeProps({
          "is-rtl": unref(configStore).isAppRTL,
          class: ["nav-group", [{
            "active": unref(isGroupActive),
            "children-at-end": _ctx.childrenAtEnd,
            "sub-item": _ctx.isSubItem,
            "disabled": _ctx.item.disable
          }]],
          tag: "li",
          "content-container-tag": "ul",
          "popper-inline-end": _ctx.childrenAtEnd
        }, _attrs), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.item.children, (child) => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("children" in child ? "HorizontalNavGroup" : unref(_sfc_main$e)), {
                  key: child.title,
                  item: child,
                  "children-at-end": "",
                  "is-sub-item": ""
                }, null), _parent2, _scopeId);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (child) => {
                  return openBlock(), createBlock(resolveDynamicComponent("children" in child ? "HorizontalNavGroup" : unref(_sfc_main$e)), {
                    key: child.title,
                    item: child,
                    "children-at-end": "",
                    "is-sub-item": ""
                  }, null, 8, ["item"]);
                }), 128))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="nav-group-label"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, _ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.title, "span"), { class: "nav-item-title" }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(unref(layoutConfig$1).icons.chevronDown, { class: "nav-group-arrow" }), null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "nav-group-label" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, _ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null, 16)),
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.title, "span"), { class: "nav-item-title" }), {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ]),
                    _: 1
                  }, 16)),
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(unref(layoutConfig$1).icons.chevronDown, { class: "nav-group-arrow" }), null, 16))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const HorizontalNavGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/HorizontalNavGroup.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent$1({
  __name: "HorizontalNavLayout",
  __ssrInlineRender: true,
  props: {
    navItems: {}
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["layout-wrapper", unref(configStore)._layoutClasses]
      }, _attrs))}><div class="${ssrRenderClass([unref(configStore).isNavbarBlurEnabled && "header-blur", "layout-navbar-and-nav-container"])}"><div class="layout-navbar"><div class="navbar-content-container">`);
      ssrRenderSlot(_ctx.$slots, "navbar", {}, null, _push, _parent);
      _push(`</div></div><div class="layout-horizontal-nav"><div class="horizontal-nav-content-container">`);
      _push(ssrRenderComponent(unref(_sfc_main$h), { "nav-items": _ctx.navItems }, null, _parent));
      _push(`</div></div></div><main class="layout-page-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="layout-footer"><div class="footer-content-container">`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></footer></div>`);
    };
  }
});
const HorizontalNavLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/HorizontalNavLayout.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent$1({
  __name: "HorizontalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {},
    isSubItem: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(_ctx.item.action, _ctx.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-link", [{
            "sub-item": props.isSubItem,
            "disabled": _ctx.item.disable
          }]]
        }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.item.to ? unref(__nuxt_component_0$1) : "a"), mergeProps(unref(getComputedNavLinkToProp)(_ctx.item), {
          class: { "router-link-active router-link-exact-active": unref(isNavLinkActive)(_ctx.item, _ctx.$router) }
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, _ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ class: "nav-item-title" }, unref(getDynamicI18nProps)(_ctx.item.title, "span")), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "nav-item-icon" }, _ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps), null, 16)),
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ class: "nav-item-title" }, unref(getDynamicI18nProps)(_ctx.item.title, "span")), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.item.title), 1)
                  ]),
                  _: 1
                }, 16))
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const HorizontalNavLink_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/HorizontalNavLink.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent$1({
  __name: "HorizontalNavPopper",
  __ssrInlineRender: true,
  props: {
    popperInlineEnd: { type: Boolean, default: false },
    tag: { default: "div" },
    contentContainerTag: { default: "div" },
    isRtl: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const configStore = useLayoutConfigStore();
    const refPopperContainer = ref();
    const refPopper = ref();
    const popperContentStyles = ref({
      left: "0px",
      top: "0px"
    });
    const updatePopper = async () => {
      if (refPopperContainer.value !== void 0 && refPopper.value !== void 0) {
        const { x, y } = await computePosition(
          refPopperContainer.value,
          refPopper.value,
          {
            placement: props.popperInlineEnd ? props.isRtl ? "left-start" : "right-start" : "bottom-start",
            middleware: [
              flip({ boundary: document.querySelector("body") }),
              shift({ boundary: document.querySelector("body") })
            ]
            /*
                  ℹ️ Why we are not using fixed positioning?
            
                  `position: fixed` doesn't work as expected when some CSS properties like `transform` is applied on its parent element.
                  Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/position#values <= See `fixed` value description
            
                  Hence, when we use transitions where transition apply `transform` on its parent element, fixed positioning will not work.
                  (Popper content moves away from the element when parent element transition)
            
                  To avoid this, we use `position: absolute` instead of `position: fixed`.
            
                  NOTE: This issue starts from third level children (Top Level > Sub item > Sub item).
                */
            // strategy: 'fixed',
          }
        );
        popperContentStyles.value.left = `${x}px`;
        popperContentStyles.value.top = `${y}px`;
      }
    };
    until(() => configStore.horizontalNavType).toMatch((type) => type === "static").then(() => {
      useEventListener("scroll", updatePopper);
    });
    const isContentShown = ref(false);
    const showContent = () => {
      isContentShown.value = true;
      updatePopper();
    };
    const hideContent = () => {
      isContentShown.value = false;
    };
    watch(
      [
        () => configStore.isAppRTL,
        () => configStore.appContentWidth
      ],
      updatePopper
    );
    const route = useRoute();
    watch(() => route.fullPath, hideContent);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nav-popper", [{
          "popper-inline-end": _ctx.popperInlineEnd,
          "show-content": unref(isContentShown)
        }]]
      }, _attrs))}><div class="popper-triggerer">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (!unref(themeConfig).horizontalNav.transition) {
        _push(`<div class="popper-content" style="${ssrRenderStyle(unref(popperContentStyles))}"><div>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else if (typeof unref(themeConfig).horizontalNav.transition === "string") {
        _push(`<div style="${ssrRenderStyle([
          unref(isContentShown) ? null : { display: "none" },
          unref(popperContentStyles)
        ])}" class="popper-content"><div>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(themeConfig).horizontalNav.transition), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle([
                unref(isContentShown) ? null : { display: "none" },
                unref(popperContentStyles)
              ])}" class="popper-content"${_scopeId}><div${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              return [
                withDirectives(createVNode("div", {
                  ref_key: "refPopper",
                  ref: refPopper,
                  class: "popper-content",
                  style: unref(popperContentStyles),
                  onMouseenter: showContent,
                  onMouseleave: hideContent
                }, [
                  createVNode("div", null, [
                    renderSlot(_ctx.$slots, "content")
                  ])
                ], 36), [
                  [vShow, unref(isContentShown)]
                ])
              ];
            }
          }),
          _: 3
        }), _parent);
      }
      _push(`</div>`);
    };
  }
});
const HorizontalNavPopper_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/HorizontalNavPopper.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent$1({
  name: "TransitionExpand",
  setup(_, { slots }) {
    const onEnter = (element) => {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      const height = getComputedStyle(element).height;
      element.style.width = "";
      element.style.position = "";
      element.style.visibility = "";
      element.style.height = "0px";
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    };
    const onAfterEnter = (element) => {
      element.style.height = "auto";
    };
    const onLeave = (element) => {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = "0px";
      });
    };
    return () => h(
      h(Transition),
      {
        name: "expand",
        onEnter,
        onAfterEnter,
        onLeave
      },
      () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
    );
  }
});
const TransitionExpand_vue_vue_type_style_index_0_lang = "";
const TransitionExpand_vue_vue_type_style_index_1_scoped_1e4efa89_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/TransitionExpand.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const TransitionExpand = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1e4efa89"]]);
const ATTD_URL = "/attendance";
function addDayAttdEnter(empCodeAndApplyDay) {
  console.log("putDayAttdEnter: API를 호출했습니다.");
  return hrApi.post(`${ATTD_URL}/dayAttendance/enter`, empCodeAndApplyDay);
}
function getDayAttdLastCode(empCodeAndApplyDay) {
  console.log("getDayAttdLastCode: API를 호출했습니다.", empCodeAndApplyDay);
  return hrApi.get(`${ATTD_URL}/dayAttendanceLastCode`, {
    params: empCodeAndApplyDay
  });
}
function getDayAttdNextPageList(nextPageQueryString) {
  console.log("getDayAttdListDay: API를 호출했습니다.", nextPageQueryString);
  return hrApi.get(`${ATTD_URL}/dayAttendanceNextPageList`, {
    params: nextPageQueryString
  });
}
function getDayAttdListDay(dayAndPage) {
  console.log("getDayAttdListDay: API를 호출했습니다.", dayAndPage);
  return hrApi.get(`${ATTD_URL}/dayAttendanceList`, {
    params: dayAndPage
  });
}
function getEmpListByDept(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findEmpListByDept`, {
    params: { deptCode: payload }
  });
}
function addDayAttdListEMP(payload) {
  console.log("API를 호출했습니다.", payload);
  const { applyDay, empCode } = payload;
  console.log("empCode", empCode);
  console.log("applyDay", applyDay);
  return hrApi.post(`${ATTD_URL}/dayAttendance`, payload);
}
function addDayAttd(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.post(`${ATTD_URL}/dayAttendance`, payload);
}
function editDayAttd(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.put(`${ATTD_URL}/dayAttendanceUpdate`, payload);
}
function removeDayAttd(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.delete(`${ATTD_URL}/dayAttendance`, {
    params: {
      empCode: payload.empCode,
      dayAttdCode: payload.dayAttdCode
    }
  });
}
function getAnnualVactionMgtList(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findAnnualVactionMgtListByYear`, {
    params: {
      empCode: payload.empCode,
      year: payload.year
    }
  });
}
function getRestAttdListByEmpCodeAndYM(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findRestAttdListByEmpCodeAndYM`, {
    params: {
      empCode: payload.empCode,
      yearMonth: payload.yearMonth
    }
  });
}
function getRestAttdListByAnnulVacation(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findRestAttdListByAnnulVacation`, {
    params: {
      empCode: payload.empCode,
      yearMonth: payload.yearMonth
    }
  });
}
function addRequestVacation(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.post(`${ATTD_URL}/registeRequestVacation`, payload);
}
function addRestAttd(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.post(`${ATTD_URL}/registRestAttd`, payload);
}
function removeRestAttd(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.delete(`${ATTD_URL}/removeRestAttd`, {
    params: {
      restAttdCode: payload
    }
  });
}
function getTravelAndEducationList(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findTravelAndEducationList`, {
    params: {
      empCode: payload.empCode,
      startDate: payload.startDate,
      endDate: payload.endDate
    }
  });
}
function editTravelAndEducationList(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.put(`${ATTD_URL}/modifyTravelAndEducationList`, payload);
}
function removeTravelAndEducationList(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.delete(`${ATTD_URL}/removeTravelAndEducationList`, {
    params: {
      empCode: payload.empCode,
      restAttdCode: payload.restAttdCode
    }
  });
}
function selectDayAttdMgtListByStatus(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findDayAttdMgtListCategory`, {
    params: {
      startDate: payload.startDate,
      endDate: payload.endDate,
      applyStatus: payload.applyStatus,
      empCode: payload.empCode
    }
  });
}
function batchDayAttdMgt(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/dayAttendanceManage`, {
    params: {
      applyDay: payload
    }
  });
}
function executeVacationCreate(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/exeAnnualVacationProcess`, {
    params: {
      applyYearMonth: payload
    }
  });
}
function updateVacationApplyStatus(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.post(`${ATTD_URL}/modifyAnnualVacationMgtList`, payload);
}
function updateDayAttdmgtApplyStatus(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.put(`${ATTD_URL}/dayAttendanceManageUpdate`, payload);
}
function deleteDayAttdmgtApplyStatus(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.delete(`${ATTD_URL}/dayAttendanceManageRemove`, {
    params: {
      dayAttdMgtList: payload
    }
  });
}
function selectDayAttdMgtListByStatusAndEmpCode(payload) {
  console.log("API를 호출했습니다.", payload);
  return hrApi.get(`${ATTD_URL}/findDayAttdMgtListCategoryByEmpCode`, {
    params: {
      startDate: payload.startDate,
      endDate: payload.endDate,
      applyStatus: payload.applyStatus,
      empCode: payload.empCode
    }
  });
}
const attenStore = defineStore("attenStore", {
  state: () => ({
    isAddDayAttd: "",
    dayAttdLastCode: {},
    isDialogBtn: false,
    dayAttdList: [],
    dayAttdDayleList: [],
    dayAttdDayleNextPageList: [],
    empList: [],
    annualVacationMgtList: [],
    restAttdList: [],
    travelAndEducationList: [],
    dayAttdMgtList: []
  }),
  actions: {
    //입장 시 DAY_ATTD 테이블에 삽입
    async INSERT_DAY_ATTD_ENTER(empCodeAndApplyDay) {
      try {
        const res = await addDayAttdEnter(empCodeAndApplyDay);
        console.log("res: ", res);
        this.isAddDayAttd = res.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    //가장 최근의 DAY_ATTD 테이블 데이터 가져오기
    async SEARCH_DAY_ATTD_LAST_CODE(empCodeAndApplyDay) {
      try {
        const res = await getDayAttdLastCode(empCodeAndApplyDay);
        console.log("가장 최근 DAY_ATTD 데이터", res);
        this.dayAttdLastCode = { ...res.data };
      } catch (err) {
        throw new Error(err);
      }
    },
    //다음 검색 버튼을 눌렀을 때 기록을 가져오는 함수
    async SEARCH_DAY_ATTD_NEXT_PAGE_LIST(nextPageQueryString) {
      try {
        const res = await getDayAttdNextPageList(nextPageQueryString);
        console.log("다음 페이지 목록 JSON 데이터", res);
        console.log("[dayAttdList]", res.data);
        this.dayAttdDayleNextPageList = res.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    //일근태 기록을 하루 단위로 가져오는 함수
    async SEARCH_DAY_ATTD_LIST(dayAndPage) {
      try {
        const res = await getDayAttdListDay(dayAndPage);
        console.log("[res]", res);
        console.log("[dayAttdList]", res.data);
        this.dayAttdDayleList = res.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_DIALOG_BTN(payload) {
      try {
        this.isDialogBtn = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    async ADD_DAY_ATTD_BY_PARMS(payload) {
      try {
        const res = await addDayAttdListEMP(payload);
        console.log("[dayAttdList]", res.data.dayAttdList);
        this.dayAttdList = res.data.dayAttdList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_EMPLIST_BY_DEPT(payload) {
      try {
        const response = await getEmpListByDept(payload);
        console.log("[empList]", response.data.empList);
        this.empList = response.data.empList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async INSERT_DAY_ATTD(payload) {
      try {
        const response = await addDayAttd(payload);
        if (response.data.errorCode === -1) {
          alert("저장에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_DAT_ATTD(payload) {
      try {
        const response = await removeDayAttd(payload);
        if (response.data.errorCode === -1) {
          alert("삭제에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_DAYATTD(payload) {
      try {
        const response = await editDayAttd(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    async SEARCH_ANNUAL_VACTION_MGTLIST(payload) {
      try {
        const response = await getAnnualVactionMgtList(payload);
        this.annualVacationMgtList = response.data.annualVacationMgtList;
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response.data.annualVacationMgtList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_REST_ATTD_LIST_BY_EMP_CODE_AND_YM(payload) {
      try {
        const response = await getRestAttdListByEmpCodeAndYM(payload);
        this.restAttdList = response.data.restAttdList;
        console.log(response);
        if (response.data.errorCode === -1) {
          alert(`근태 조회에 실패하였습니다.${response.data.errorMsg}`);
          console.log(response.data.errorMsg);
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_REST_ATTD_BY_ANNUAL_VACTION(payload) {
      try {
        const response = await getRestAttdListByAnnulVacation(payload);
        this.restAttdList = response.data.restAttdList;
        console.log(response);
        if (response.data.errorCode === -1) {
          alert(`근태 조회에 실패하였습니다.${response.data.errorMsg}`);
          console.log(response.data.errorMsg);
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    ADD_REST_ATTD(payload) {
      try {
        addRestAttd(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    DELTE_REST_ATTD(payload) {
      try {
        removeRestAttd(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async INSERT_REQUEST_REST_ATTD(payload) {
      try {
        console.log("여기는 액션입니다", payload);
        const response = await addRequestVacation(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    async SEARCH_TRAVEL_AND_EDUCATION_LIST(payload) {
      try {
        const response = await getTravelAndEducationList(payload);
        this.travelAndEducationList = response.data.travelAndEducationList;
        console.log(response);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response.data.travelAndEducationList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_TRAVEL_AND_EDUCATION_LIST(payload) {
      try {
        const response = await editTravelAndEducationList(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_TRAVEL_AND_EDUCATION_LIST(payload) {
      try {
        const response = await removeTravelAndEducationList(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 일근태 관리 목록 조회
    async SEARCH_DAYATTDMGT_BY_STATUS(payload) {
      try {
        const response = await selectDayAttdMgtListByStatus(payload);
        console.log("[dayAttdMgtList]", response.data.dayAttdMgtList);
        this.dayAttdMgtList = response.data.dayAttdMgtList;
        if (response.data.errorCode === -1)
          console.log(response.data.errorMsg);
        return response.data.dayAttdMgtList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async SEARCH_DAYATTDMGT_BY_STATUS_BY_EMP_CODE(payload) {
      try {
        const response = await selectDayAttdMgtListByStatusAndEmpCode(payload);
        console.log("[dayAttdMgtList]", response.data.dayAttdMgtList);
        this.dayAttdMgtList = response.data.dayAttdMgtList;
        if (response.data.errorCode === -1)
          console.log(response.data.errorMsg);
        return response.data.dayAttdMgtList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async BATCH_DAY_ATTDMGT(payload) {
      try {
        const response = await batchDayAttdMgt(payload);
        console.log("[dayAttdMgtList]", response.data.dayAttdMgtList);
        this.dayAttdMgtList = response.data.dayAttdMgtList;
        if (response.data.errorCode === -1)
          console.log(response.data.errorMsg);
        return response.data.dayAttdMgtList;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 연차 마감 관리
    async BETCH_VACATION_CREATE(payload) {
      try {
        const response = executeVacationCreate(payload);
        console.log(response);
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 연차 승인 관리
    async UPDATE_VACATION_APPLYSTATUS(payload) {
      try {
        const response = updateVacationApplyStatus(payload);
        console.log(response);
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 일근태 관리 - 근태 승인, 승인 취소
    async UPDATE_DAY_ATTDMGT_APPLYSTATUS(payload) {
      try {
        const response = await updateDayAttdmgtApplyStatus(payload);
        console.log(response.data);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_DAY_ATTDMGT_APPLYSTATUS(payload) {
      try {
        const response = await deleteDayAttdmgtApplyStatus(payload);
        console.log(response);
        if (response.data.errorCode === -1)
          console.log(response.data.errorMsg);
        return response;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
const VCard$1 = "";
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-card-actions", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const VCardTitle = createSimpleFunctional("v-card-title");
const VAvatar$1 = "";
const VImg$1 = "";
const VResponsive$1 = "";
function useAspectStyles(props) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + "%"
      } : void 0;
    })
  };
}
const makeVResponsiveProps = propsFactory({
  aspectRatio: [String, Number],
  contentClass: String,
  inline: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VResponsive");
const VResponsive = genericComponent()({
  name: "VResponsive",
  props: makeVResponsiveProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-responsive", {
          "v-responsive--inline": props.inline
        }, props.class],
        "style": [dimensionStyles.value, props.style]
      }, [createVNode("div", {
        "class": "v-responsive__sizer",
        "style": aspectStyles.value
      }, null), (_a = slots.additional) == null ? void 0 : _a.call(slots), slots.default && createVNode("div", {
        "class": ["v-responsive__content", props.contentClass]
      }, [slots.default()])]);
    });
    return {};
  }
});
const makeTransitionProps$1 = propsFactory({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (val) => val !== true
  }
}, "transition");
const MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    ...rest
  } = props;
  const {
    component = Transition,
    ...customProps
  } = typeof transition === "object" ? transition : {};
  return h(component, mergeProps(typeof transition === "string" ? {
    name: disabled ? "" : transition
  } : customProps, rest, {
    disabled
  }), slots);
};
function mounted(el, binding) {
  if (!SUPPORTS_INTERSECTION)
    return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver(function() {
    var _a;
    let entries = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    const _observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
    if (!_observe)
      return;
    const isIntersecting = entries.some((entry2) => entry2.isIntersecting);
    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(isIntersecting, entries, observer2);
    }
    if (isIntersecting && modifiers.once)
      unmounted(el, binding);
    else
      _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[binding.instance.$.uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}
function unmounted(el, binding) {
  var _a;
  const observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
  if (!observe)
    return;
  observe.observer.unobserve(el);
  delete el._observe[binding.instance.$.uid];
}
const Intersect = {
  mounted,
  unmounted
};
const Intersect$1 = Intersect;
const makeVImgProps = propsFactory({
  alt: String,
  cover: Boolean,
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  srcset: String,
  ...makeVResponsiveProps(),
  ...makeComponentProps(),
  ...makeTransitionProps$1()
}, "VImg");
const VImg = genericComponent()({
  name: "VImg",
  directives: {
    intersect: Intersect$1
  },
  props: makeVImgProps(),
  emits: {
    loadstart: (value) => true,
    load: (value) => true,
    error: (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const currentSrc = shallowRef("");
    const image = ref();
    const state = shallowRef(props.eager ? "loading" : "idle");
    const naturalWidth = shallowRef();
    const naturalHeight = shallowRef();
    const normalisedSrc = computed(() => {
      return props.src && typeof props.src === "object" ? {
        src: props.src.src,
        srcset: props.srcset || props.src.srcset,
        lazySrc: props.lazySrc || props.src.lazySrc,
        aspect: Number(props.aspectRatio || props.src.aspect || 0)
      } : {
        src: props.src,
        srcset: props.srcset,
        lazySrc: props.lazySrc,
        aspect: Number(props.aspectRatio || 0)
      };
    });
    const aspectRatio = computed(() => {
      return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
    });
    watch(() => props.src, () => {
      init(state.value !== "idle");
    });
    watch(aspectRatio, (val, oldVal) => {
      if (!val && oldVal && image.value) {
        pollForSize(image.value);
      }
    });
    function init(isIntersecting) {
      if (props.eager && isIntersecting)
        return;
      if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager)
        return;
      state.value = "loading";
      if (normalisedSrc.value.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = normalisedSrc.value.lazySrc;
        pollForSize(lazyImg, null);
      }
      if (!normalisedSrc.value.src)
        return;
      nextTick(() => {
        var _a, _b;
        emit("loadstart", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
        if ((_b = image.value) == null ? void 0 : _b.complete) {
          if (!image.value.naturalWidth) {
            onError();
          }
          if (state.value === "error")
            return;
          if (!aspectRatio.value)
            pollForSize(image.value, null);
          onLoad();
        } else {
          if (!aspectRatio.value)
            pollForSize(image.value);
          getSrc();
        }
      });
    }
    function onLoad() {
      var _a;
      getSrc();
      state.value = "loaded";
      emit("load", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function onError() {
      var _a;
      state.value = "error";
      emit("error", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function getSrc() {
      const img = image.value;
      if (img)
        currentSrc.value = img.currentSrc || img.src;
    }
    let timer = -1;
    function pollForSize(img) {
      let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const poll = () => {
        clearTimeout(timer);
        const {
          naturalHeight: imgHeight,
          naturalWidth: imgWidth
        } = img;
        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth;
          naturalHeight.value = imgHeight;
        } else if (!img.complete && state.value === "loading" && timeout != null) {
          timer = window.setTimeout(poll, timeout);
        } else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
          naturalWidth.value = 1;
          naturalHeight.value = 1;
        }
      };
      poll();
    }
    const containClasses = computed(() => ({
      "v-img__img--cover": props.cover,
      "v-img__img--contain": !props.cover
    }));
    const __image = () => {
      var _a;
      if (!normalisedSrc.value.src || state.value === "idle")
        return null;
      const img = createVNode("img", {
        "class": ["v-img__img", containClasses.value],
        "src": normalisedSrc.value.src,
        "srcset": normalisedSrc.value.srcset,
        "alt": props.alt,
        "sizes": props.sizes,
        "ref": image,
        "onLoad": onLoad,
        "onError": onError
      }, null);
      const sources = (_a = slots.sources) == null ? void 0 : _a.call(slots);
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [withDirectives(sources ? createVNode("picture", {
          "class": "v-img__picture"
        }, [sources, img]) : img, [[vShow, state.value === "loaded"]])]
      });
    };
    const __preloadImage = () => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && createVNode("img", {
        "class": ["v-img__img", "v-img__img--preload", containClasses.value],
        "src": normalisedSrc.value.lazySrc,
        "alt": props.alt
      }, null)]
    });
    const __placeholder = () => {
      if (!slots.placeholder)
        return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && createVNode("div", {
          "class": "v-img__placeholder"
        }, [slots.placeholder()])]
      });
    };
    const __error = () => {
      if (!slots.error)
        return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [state.value === "error" && createVNode("div", {
          "class": "v-img__error"
        }, [slots.error()])]
      });
    };
    const __gradient = () => {
      if (!props.gradient)
        return null;
      return createVNode("div", {
        "class": "v-img__gradient",
        "style": {
          backgroundImage: `linear-gradient(${props.gradient})`
        }
      }, null);
    };
    const isBooted = shallowRef(false);
    {
      const stop = watch(aspectRatio, (val) => {
        if (val) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true;
            });
          });
          stop();
        }
      });
    }
    useRender(() => {
      const [responsiveProps] = VResponsive.filterProps(props);
      return withDirectives(createVNode(VResponsive, mergeProps({
        "class": ["v-img", {
          "v-img--booting": !isBooted.value
        }, props.class],
        "style": [{
          width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width)
        }, props.style]
      }, responsiveProps, {
        "aspectRatio": aspectRatio.value,
        "aria-label": props.alt,
        "role": props.alt ? "img" : void 0
      }), {
        additional: () => createVNode(Fragment, null, [createVNode(__image, null, null), createVNode(__preloadImage, null, null), createVNode(__gradient, null, null), createVNode(__placeholder, null, null), createVNode(__error, null, null)]),
        default: slots.default
      }), [[resolveDirective("intersect"), {
        handler: init,
        options: props.options
      }, null, {
        once: true
      }]]);
    });
    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight
    };
  }
});
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => {
        var _a;
        return [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_a = slots.default) == null ? void 0 : _a.call(slots), genOverlays(false, "v-avatar")];
      }
    }));
    return {};
  }
});
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: String,
  title: String,
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? hasPrependMedia && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "icon": props.prependIcon,
        "image": props.prependAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) ?? props.subtitle];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? hasAppendMedia && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "icon": props.appendIcon,
        "image": props.appendAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const VCardText = createSimpleFunctional("v-card-text");
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: String,
  text: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.text) == null ? void 0 : _a2.call(slots)) ?? props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const VDialog$1 = "";
const makeTransitionProps = propsFactory({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function createCssTransition(name, origin, mode) {
  return genericComponent()({
    name,
    props: makeTransitionProps({
      mode,
      origin
    }),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const functions = {
        onBeforeEnter(el) {
          if (props.origin) {
            el.style.transformOrigin = props.origin;
          }
        },
        onLeave(el) {
          if (props.leaveAbsolute) {
            const {
              offsetTop,
              offsetLeft,
              offsetWidth,
              offsetHeight
            } = el;
            el._transitionInitialStyles = {
              position: el.style.position,
              top: el.style.top,
              left: el.style.left,
              width: el.style.width,
              height: el.style.height
            };
            el.style.position = "absolute";
            el.style.top = `${offsetTop}px`;
            el.style.left = `${offsetLeft}px`;
            el.style.width = `${offsetWidth}px`;
            el.style.height = `${offsetHeight}px`;
          }
          if (props.hideOnLeave) {
            el.style.setProperty("display", "none", "important");
          }
        },
        onAfterLeave(el) {
          if (props.leaveAbsolute && (el == null ? void 0 : el._transitionInitialStyles)) {
            const {
              position,
              top,
              left,
              width,
              height
            } = el._transitionInitialStyles;
            delete el._transitionInitialStyles;
            el.style.position = position || "";
            el.style.top = top || "";
            el.style.left = left || "";
            el.style.width = width || "";
            el.style.height = height || "";
          }
        }
      };
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          ...props.group ? void 0 : {
            mode: props.mode
          },
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return genericComponent()({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      },
      disabled: Boolean
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      return () => {
        return h(Transition, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function ExpandTransitionGenerator() {
  let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const sizeProperty = x ? "width" : "height";
  const offsetProperty = camelize(`offset-${sizeProperty}`);
  return {
    onBeforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },
    onEnter(el) {
      const initialStyle = el._initialStyle;
      el.style.setProperty("transition", "none", "important");
      el.style.overflow = "hidden";
      const offset = `${el[offsetProperty]}px`;
      el.style[sizeProperty] = "0";
      void el.offsetHeight;
      el.style.transition = initialStyle.transition;
      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset;
      });
    },
    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,
    onLeave(el) {
      el._initialStyle = {
        transition: "",
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = "hidden";
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight;
      requestAnimationFrame(() => el.style[sizeProperty] = "0");
    },
    onAfterLeave,
    onLeaveCancelled: onAfterLeave
  };
  function onAfterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el);
  }
  function resetStyles(el) {
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null)
      el.style[sizeProperty] = size;
    delete el._initialStyle;
  }
}
const makeVDialogTransitionProps = propsFactory({
  target: Object
}, "v-dialog-transition");
const VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: makeVDialogTransitionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  var _a;
  const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = target.getBoundingClientRect();
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}
createCssTransition("fab-transition", "center center", "out-in");
createCssTransition("dialog-bottom-transition");
createCssTransition("dialog-top-transition");
const VFadeTransition = createCssTransition("fade-transition");
const VScaleTransition = createCssTransition("scale-transition");
createCssTransition("scroll-x-transition");
createCssTransition("scroll-x-reverse-transition");
createCssTransition("scroll-y-transition");
createCssTransition("scroll-y-reverse-transition");
createCssTransition("slide-x-transition");
createCssTransition("slide-x-reverse-transition");
const VSlideYTransition = createCssTransition("slide-y-transition");
createCssTransition("slide-y-reverse-transition");
const VExpandTransition = createJavascriptTransition("expand-transition", ExpandTransitionGenerator());
const VExpandXTransition = createJavascriptTransition("expand-x-transition", ExpandTransitionGenerator("", true));
const VOverlay$1 = "";
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}
const locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy
  // connected to a certain element
};
const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function useLocationStrategies(props, data) {
  const contentStyles = ref({});
  const updateLocation = ref();
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el, isRtl) {
  if (isRtl) {
    el.style.removeProperty("left");
  } else {
    el.style.removeProperty("right");
  }
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = isFixedPosition(data.activatorEl.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed",
      top: 0,
      [data.isRtl.value ? "right" : "left"]: 0
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2)
        offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe)
      updateLocation();
  });
  watch([data.activatorEl, data.contentEl], (_ref, _ref2) => {
    let [newActivatorEl, newContentEl] = _ref;
    let [oldActivatorEl, oldContentEl] = _ref2;
    if (oldActivatorEl)
      observer.unobserve(oldActivatorEl);
    if (newActivatorEl)
      observer.observe(newActivatorEl);
    if (oldContentEl)
      observer.unobserve(oldContentEl);
    if (newContentEl)
      observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => observe = true);
    });
    if (!data.activatorEl.value || !data.contentEl.value)
      return;
    const targetBox = data.activatorEl.value.getBoundingClientRect();
    const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push(document.documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const rect = el.getBoundingClientRect();
      const scrollBox = new Box({
        x: el === document.documentElement ? 0 : rect.x,
        y: el === document.documentElement ? 0 : rect.y,
        width: el.clientWidth,
        height: el.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip2 = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip2(newPlacement.anchor);
            newPlacement.origin = flip2(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset)
          continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
      right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result)
      return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
let clean = true;
const frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame)
      frame();
    if (frames.length)
      run();
    else
      clean = true;
  });
}
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "VOverlay-scroll-strategies");
function closeScrollStrategy(data) {
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll);
}
function blockScrollStrategy(data, props) {
  var _a;
  const offsetParent = (_a = data.root.value) == null ? void 0 : _a.offsetParent;
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data.activatorEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
  const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || document.documentElement);
  if (scrollableParent) {
    data.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
    el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
    if (el !== document.documentElement) {
      el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    }
    el.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
      el.style.removeProperty("--v-body-scroll-x");
      el.style.removeProperty("--v-body-scroll-y");
      el.style.removeProperty("--v-scrollbar-offset");
      el.classList.remove("v-overlay-scroll-blocked");
      el.scrollLeft = -x;
      el.scrollTop = -y;
    });
    if (scrollableParent) {
      data.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      var _a, _b;
      const start = performance.now();
      (_b = (_a = data.updateLocation).value) == null ? void 0 : _b.call(_a, e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      bindScroll(data.activatorEl.value ?? data.contentEl.value, (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function bindScroll(el, onScroll) {
  const scrollElements = [document, ...getScrollParents(el)];
  scrollElements.forEach((el2) => {
    el2.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2) => {
      el2.removeEventListener("scroll", onScroll);
    });
  });
}
const VMenuSymbol = Symbol.for("vuetify:v-menu");
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  const runDelayFactory = (prop) => () => {
    return Promise.resolve(true);
  };
  return {
    runCloseDelay: runDelayFactory(),
    runOpenDelay: runDelayFactory()
  };
}
const makeActivatorProps = propsFactory({
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, "VOverlay-activator");
function useActivator(props, _ref) {
  let {
    isActive,
    isTop
  } = _ref;
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay();
  const availableEvents = {
    onClick: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      isActive.value = !isActive.value;
    },
    onMouseenter: (e) => {
      var _a;
      if ((_a = e.sourceCapabilities) == null ? void 0 : _a.firesTouchEvents)
        return;
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onMouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    onFocus: (e) => {
      if (matchesSelector(e.target) === false)
        return;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onBlur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.onClick = availableEvents.onClick;
    }
    if (props.openOnHover) {
      events.onMouseenter = availableEvents.onMouseenter;
      events.onMouseleave = availableEvents.onMouseleave;
    }
    if (openOnFocus.value) {
      events.onFocus = availableEvents.onFocus;
      events.onBlur = availableEvents.onBlur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (openOnFocus.value) {
      events.onFocusin = () => {
        isFocused = true;
        runOpenDelay();
      };
      events.onFocusout = () => {
        isFocused = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject$1(VMenuSymbol, null);
      events.onClick = () => {
        isActive.value = false;
        menu == null ? void 0 : menu.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
      isActive.value = false;
    }
  });
  const activatorRef = ref();
  watchEffect(() => {
    if (!activatorRef.value)
      return;
    nextTick(() => {
      activatorEl.value = refElement(activatorRef.value);
    });
  });
  const vm = getCurrentInstance("useActivator");
  let scope;
  watch(() => !!props.activator, (val) => {
    if (val && IN_BROWSER) {
      scope = effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
  return {
    activatorEl,
    activatorRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    bindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function unbindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    unbindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function getActivator() {
    var _a, _b;
    let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
    let activator;
    if (selector) {
      if (selector === "parent") {
        let el = (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$el) == null ? void 0 : _b.parentNode;
        while (el == null ? void 0 : el.hasAttribute("data-no-activator")) {
          el = el.parentNode;
        }
        activator = el;
      } else if (typeof selector === "string") {
        activator = document.querySelector(selector);
      } else if ("$el" in selector) {
        activator = selector.$el;
      } else {
        activator = selector;
      }
    }
    activatorEl.value = (activator == null ? void 0 : activator.nodeType) === Node.ELEMENT_NODE ? activator : null;
    return activatorEl.value;
  }
}
function useHydration() {
  return shallowRef(false);
}
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const StackSymbol = Symbol.for("vuetify:stack");
const globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject$1(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = shallowRef(+zIndex.value);
  useToggleScope(isActive, () => {
    var _a;
    const lastZIndex = (_a = globalStack.at(-1)) == null ? void 0 : _a[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent == null ? void 0 : parent.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = shallowRef(true);
  if (createStackEntry) {
    watchEffect(() => {
      var _a;
      const _isTop = ((_a = globalStack.at(-1)) == null ? void 0 : _a[0]) === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = computed(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}
function useTeleport(target) {
  const teleportTarget = computed(() => {
    const _target = target.value;
    if (_target === true || !IN_BROWSER)
      return void 0;
    const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
    if (targetElement == null) {
      warn(`Unable to locate target ${_target}`);
      return void 0;
    }
    let container = targetElement.querySelector(":scope > .v-overlay-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "v-overlay-container";
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false)
    return false;
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target)
    return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el);
  return !elements.some((el2) => el2 == null ? void 0 : el2.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(document);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  unmounted(el, binding) {
    if (!el._clickOutside)
      return;
    handleShadow(el, (app) => {
      var _a;
      if (!app || !((_a = el._clickOutside) == null ? void 0 : _a[binding.instance.$.uid]))
        return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps$1()
}, "VOverlay");
const VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled))
          model.value = v;
      }
    });
    const {
      teleportTarget
    } = useTeleport(computed(() => props.attach || props.contained));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, "zIndex"), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v)
        isActive.value = false;
    });
    const root = ref();
    const contentEl = ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies();
    function onClickOutside(e) {
      emit("click:outside", e);
      if (!props.persistent)
        isActive.value = false;
      else
        animateClick();
    }
    function closeConditional() {
      return isActive.value && globalTop.value;
    }
    useRouter();
    useToggleScope(() => props.closeOnBack, () => {
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation)
        return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    useRender(() => {
      var _a;
      return createVNode(Fragment, null, [(_a = slots.activator) == null ? void 0 : _a.call(slots, {
        isActive: isActive.value,
        props: mergeProps({
          ref: activatorRef
        }, activatorEvents.value, props.activatorProps)
      }), isMounted.value && hasContent.value && createVNode(Teleport, {
        "disabled": !teleportTarget.value,
        "to": teleportTarget.value
      }, {
        default: () => [createVNode("div", mergeProps({
          "class": ["v-overlay", {
            "v-overlay--absolute": props.absolute || props.contained,
            "v-overlay--active": isActive.value,
            "v-overlay--contained": props.contained
          }, themeClasses.value, rtlClasses.value, props.class],
          "style": [stackStyles.value, {
            top: convertToUnit(top.value)
          }, props.style],
          "ref": root
        }, scopeId, attrs), [createVNode(Scrim, mergeProps({
          "color": scrimColor,
          "modelValue": isActive.value && !!props.scrim
        }, scrimEvents.value), null), createVNode(MaybeTransition, {
          "appear": true,
          "persisted": true,
          "transition": props.transition,
          "target": activatorEl.value,
          "onAfterLeave": () => {
            onAfterLeave();
            emit("afterLeave");
          }
        }, {
          default: () => {
            var _a2;
            return [withDirectives(createVNode("div", mergeProps({
              "ref": contentEl,
              "class": ["v-overlay__content", props.contentClass],
              "style": [dimensionStyles.value, contentStyles.value]
            }, contentEvents.value, props.contentProps), [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
              isActive
            })]), [[vShow, isActive.value], [resolveDirective("click-outside"), {
              handler: onClickOutside,
              closeConditional,
              include: () => [activatorEl.value]
            }]])];
          }
        })])]
      })]);
    });
    return {
      activatorEl,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});
const Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor)
      return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target2, key, value) {
      if (Reflect.has(target2, key)) {
        return Reflect.set(target2, key, value);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return Reflect.set(ref2.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor)
        return descriptor;
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (!ref2.value)
          continue;
        const descriptor2 = getDescriptor(ref2.value, key) ?? ("_" in ref2.value ? getDescriptor((_a = ref2.value._) == null ? void 0 : _a.setupState, key) : void 0);
        if (descriptor2)
          return descriptor2;
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs)
          continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref3 = queue.shift();
          const descriptor2 = getDescriptor(ref3.value, key);
          if (descriptor2)
            return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2)
            queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
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
    const overlay = ref();
    watch(isActive, async (val) => {
      var _a, _b;
      await nextTick();
      if (val) {
        (_a = overlay.value.contentEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      } else {
        (_b = overlay.value.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const _sfc_main$b = /* @__PURE__ */ defineComponent$1({
  __name: "EnterButton",
  __ssrInlineRender: true,
  setup(__props) {
    const enterDialogTitle = ref("출근 등록");
    const enterDialogText = ref("출근 등록 하시겠습니까?");
    const confirmRegistDialogTitle = ref("");
    const confirmRegistDialogText = ref("");
    const isDayAttdEnter = ref("");
    const selectDialogOnOff = ref(false);
    const confirmRegistDialogOnOff = ref(false);
    const attdTypeCode = ref("");
    const today = ref("");
    const enterClicked = async () => {
      try {
        today.value = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const empCodeAndApplyDay = {
          empCode: "EMP-01",
          date: today.value
        };
        await attenStore().SEARCH_DAY_ATTD_LAST_CODE(empCodeAndApplyDay);
        console.log("attenStore().dayAttdLastCode: ", attenStore().dayAttdLastCode);
        attdTypeCode.value = attenStore().dayAttdLastCode.ATTD_TYPE_CODE;
        console.log("a.value: ", attdTypeCode.value);
        switch (attdTypeCode.value) {
          case void 0:
            enterDialogTitle.value = "출근 등록";
            break;
          case "ADC2001":
            enterDialogTitle.value = "공귀사 등록";
            break;
          case "ADC3001":
            enterDialogTitle.value = "사귀사 등록";
            break;
          case "ADC4001":
            enterDialogTitle.value = "교육복귀 등록";
            break;
          case "ADC5001":
            enterDialogTitle.value = "무단복귀 등록";
            break;
          default:
            enterDialogTitle.value = "무단복귀 등록";
            break;
        }
        enterDialogText.value = `${enterDialogTitle.value} 하시겠습니까?`;
        selectDialogOnOff.value = true;
      } catch (error) {
        confirmRegistDialogTitle.value = "에러 발생";
        confirmRegistDialogText.value = "서버와 통신 중 오류가 발생했습니다.";
        confirmRegistDialogOnOff.value = true;
        console.error("출근 조회 중 에러 발생:", error);
      }
    };
    const confirm = async () => {
      const empCodeAndApplyDay = {
        empCode: "EMP-01",
        date: today.value
      };
      await attenStore().INSERT_DAY_ATTD_ENTER(empCodeAndApplyDay);
      console.log("attenStore().isAddDayAttd: ", attenStore().isAddDayAttd);
      isDayAttdEnter.value = attenStore().isAddDayAttd;
      console.log("isDayAttdEnter.value: ", isDayAttdEnter.value);
      if (isDayAttdEnter.value === "SUCCESS") {
        console.log("입장 등록이 성공했습니다.");
        selectDialogOnOff.value = false;
        confirmRegistDialogTitle.value = "정상 등록";
        confirmRegistDialogText.value = "정상 등록되었습니다.";
        confirmRegistDialogOnOff.value = true;
        return;
      }
      console.log("입장 등록이 실패했습니다.");
      selectDialogOnOff.value = false;
      confirmRegistDialogTitle.value = "등록 실패";
      confirmRegistDialogText.value = "등록에 실패했습니다.";
      confirmRegistDialogOnOff.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        class: "text-white",
        style: { "width": "90px" },
        onClick: enterClicked
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 출근(귀사) `);
          } else {
            return [
              createTextVNode(" 출근(귀사) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: selectDialogOnOff.value,
        "onUpdate:modelValue": ($event) => selectDialogOnOff.value = $event,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(enterDialogTitle.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(enterDialogTitle.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(enterDialogText.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(enterDialogText.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: confirm
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`확인`);
                            } else {
                              return [
                                createTextVNode("확인")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          text: "",
                          onClick: ($event) => selectDialogOnOff.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`취소`);
                            } else {
                              return [
                                createTextVNode("취소")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            text: "",
                            onClick: confirm
                          }, {
                            default: withCtx(() => [
                              createTextVNode("확인")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            text: "",
                            onClick: ($event) => selectDialogOnOff.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("취소")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(enterDialogTitle.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(enterDialogText.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: confirm
                        }, {
                          default: withCtx(() => [
                            createTextVNode("확인")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          text: "",
                          onClick: ($event) => selectDialogOnOff.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("취소")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(enterDialogTitle.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(enterDialogText.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        text: "",
                        onClick: confirm
                      }, {
                        default: withCtx(() => [
                          createTextVNode("확인")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        text: "",
                        onClick: ($event) => selectDialogOnOff.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("취소")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: confirmRegistDialogOnOff.value,
        "onUpdate:modelValue": ($event) => confirmRegistDialogOnOff.value = $event,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(confirmRegistDialogTitle.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(confirmRegistDialogTitle.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(confirmRegistDialogText.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(confirmRegistDialogText.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => confirmRegistDialogOnOff.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`확인`);
                            } else {
                              return [
                                createTextVNode("확인")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            text: "",
                            onClick: ($event) => confirmRegistDialogOnOff.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("확인")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(confirmRegistDialogTitle.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(confirmRegistDialogText.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => confirmRegistDialogOnOff.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("확인")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(confirmRegistDialogTitle.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(confirmRegistDialogText.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        text: "",
                        onClick: ($event) => confirmRegistDialogOnOff.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("확인")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/navComponents/EnterButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent$1({
  __name: "LeaveButton",
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBtn, mergeProps({
        color: "primary",
        class: "text-white",
        style: { "width": "90px" },
        onClick: ($event) => emit("click")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 퇴근(외출) `);
          } else {
            return [
              createTextVNode(" 퇴근(외출) ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/navComponents/LeaveButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const VNodeRenderer = /* @__PURE__ */ defineComponent$1({
  name: "VNodeRenderer",
  props: {
    nodes: {
      type: [Array, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.nodes;
  }
});
const __moduleId = "@layouts/components/VNodeRenderer.tsx";
ssrRegisterHelper(VNodeRenderer, __moduleId);
const _sfc_main$9 = /* @__PURE__ */ defineComponent$1({
  __name: "VerticalNav",
  __ssrInlineRender: true,
  props: {
    tag: { type: [String, Object, Function], default: "aside" },
    navItems: {},
    isOverlayNavActive: { type: Boolean },
    toggleIsOverlayNavActive: {}
  },
  setup(__props) {
    const props = __props;
    const refNav = ref();
    const isHovered = useElementHover(refNav);
    provide(injectionKeyIsVerticalNavHovered, isHovered);
    const configStore = useLayoutConfigStore();
    const resolveNavItemComponent = (item) => {
      if ("heading" in item)
        return _sfc_main$5;
      if ("children" in item)
        return _sfc_main$8;
      return _sfc_main$6;
    };
    const route = useRoute();
    watch(
      () => route.name,
      () => {
        props.toggleIsOverlayNavActive(false);
      }
    );
    const isVerticalNavScrolled = ref(false);
    const updateIsVerticalNavScrolled = (val) => isVerticalNavScrolled.value = val;
    const handleNavScroll = (evt) => {
      isVerticalNavScrolled.value = evt.target.scrollTop > 0;
    };
    const hideTitleAndIcon = configStore.isVerticalNavMini(isHovered);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.tag), mergeProps({
        ref_key: "refNav",
        ref: refNav,
        class: ["layout-vertical-nav", [
          {
            "overlay-nav": unref(configStore).isLessThanOverlayNavBreakpoint,
            hovered: unref(isHovered),
            visible: _ctx.isOverlayNavActive,
            scrolled: unref(isVerticalNavScrolled)
          }
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-header" data-v-0972d6bf${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "nav-header", {}, () => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VNodeRenderer), {
                      nodes: unref(layoutConfig$1).app.logo
                    }, null, _parent3, _scopeId2));
                    _push3(`<h1 style="${ssrRenderStyle(!unref(hideTitleAndIcon) ? null : { display: "none" })}" class="app-logo-title leading-normal" data-v-0972d6bf${_scopeId2}>${ssrInterpolate(unref(layoutConfig$1).app.title)}</h1>`);
                  } else {
                    return [
                      createVNode(unref(VNodeRenderer), {
                        nodes: unref(layoutConfig$1).app.logo
                      }, null, 8, ["nodes"]),
                      createVNode(Transition, { name: "vertical-nav-app-title" }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("h1", { class: "app-logo-title leading-normal" }, toDisplayString(unref(layoutConfig$1).app.title), 513), [
                            [vShow, !unref(hideTitleAndIcon)]
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                style: unref(configStore).isVerticalNavCollapsed ? null : { display: "none" },
                class: ["header-action d-none nav-unpin", unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
              }, unref(layoutConfig$1).icons.verticalNavUnPinned, {
                onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
              }), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                style: !unref(configStore).isVerticalNavCollapsed ? null : { display: "none" },
                class: ["header-action d-none nav-pin", !unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
              }, unref(layoutConfig$1).icons.verticalNavPinned, {
                onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
              }), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "header-action d-lg-none" }, unref(layoutConfig$1).icons.close, {
                onClick: ($event) => _ctx.toggleIsOverlayNavActive(false)
              }), null), _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
            _push2(`</div><div class="attd-buttons" data-v-0972d6bf${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(`</div><br data-v-0972d6bf${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "before-nav-items", {}, () => {
              _push2(`<div class="vertical-nav-items-shadow" data-v-0972d6bf${_scopeId}></div>`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => {
              _push2(ssrRenderComponent(unref(PerfectScrollbar), {
                key: unref(configStore).isAppRTL,
                tag: "ul",
                class: "nav-items",
                options: { wheelPropagation: false },
                onPsScrollY: handleNavScroll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.navItems, (item, index2) => {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
                        key: index2,
                        item
                      }, null), _parent3, _scopeId2);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.navItems, (item, index2) => {
                        return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                          key: index2,
                          item
                        }, null, 8, ["item"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "nav-header" }, [
                renderSlot(_ctx.$slots, "nav-header", {}, () => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "app-logo app-title-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VNodeRenderer), {
                        nodes: unref(layoutConfig$1).app.logo
                      }, null, 8, ["nodes"]),
                      createVNode(Transition, { name: "vertical-nav-app-title" }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("h1", { class: "app-logo-title leading-normal" }, toDisplayString(unref(layoutConfig$1).app.title), 513), [
                            [vShow, !unref(hideTitleAndIcon)]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                    class: ["header-action d-none nav-unpin", unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
                  }, unref(layoutConfig$1).icons.verticalNavUnPinned, {
                    onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
                  }), null, 16, ["class", "onClick"])), [
                    [vShow, unref(configStore).isVerticalNavCollapsed]
                  ]),
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                    class: ["header-action d-none nav-pin", !unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
                  }, unref(layoutConfig$1).icons.verticalNavPinned, {
                    onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
                  }), null, 16, ["class", "onClick"])), [
                    [vShow, !unref(configStore).isVerticalNavCollapsed]
                  ]),
                  (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ class: "header-action d-lg-none" }, unref(layoutConfig$1).icons.close, {
                    onClick: ($event) => _ctx.toggleIsOverlayNavActive(false)
                  }), null, 16, ["onClick"]))
                ], true)
              ]),
              createVNode("div", { class: "attd-buttons" }, [
                createVNode(_sfc_main$b),
                createVNode(_sfc_main$a)
              ]),
              createVNode("br"),
              renderSlot(_ctx.$slots, "before-nav-items", {}, () => [
                createVNode("div", { class: "vertical-nav-items-shadow" })
              ], true),
              renderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => [
                (openBlock(), createBlock(unref(PerfectScrollbar), {
                  key: unref(configStore).isAppRTL,
                  tag: "ul",
                  class: "nav-items",
                  options: { wheelPropagation: false },
                  onPsScrollY: handleNavScroll
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.navItems, (item, index2) => {
                      return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                        key: index2,
                        item
                      }, null, 8, ["item"]);
                    }), 128))
                  ]),
                  _: 1
                }))
              ], true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const VerticalNav_vue_vue_type_style_index_0_scoped_0972d6bf_lang = "";
const VerticalNav_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNav.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0972d6bf"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent$1({
  ...{
    name: "VerticalNavGroup"
  },
  __name: "VerticalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter$1();
    const configStore = useLayoutConfigStore();
    const hideTitleAndBadge = configStore.isVerticalNavMini();
    const isVerticalNavHovered = inject$1(injectionKeyIsVerticalNavHovered, ref(false));
    const isGroupActive = ref(false);
    const isGroupOpen = ref(
      props.item.alwaysOpenAndLocked ? true : props.item.open ?? false
    );
    const isAnyChildOpen = (children) => {
      return children.some((child) => {
        let result = openGroups.value.includes(child.title);
        if ("children" in child)
          result = isAnyChildOpen(child.children) || result;
        return result;
      });
    };
    watch(() => route.path, () => {
      const isActive = isNavGroupActive(props.item.children, router);
      if (props.item.alwaysOpenAndLocked) {
        isGroupOpen.value = true;
      } else {
        isGroupOpen.value = isActive && !configStore.isVerticalNavMini(isVerticalNavHovered).value;
      }
      isGroupActive.value = isActive;
    }, { immediate: true });
    watch(openGroups, (val) => {
      const lastOpenedGroup = val.at(-1);
      if (lastOpenedGroup === props.item.title)
        return;
      const isActive = isNavGroupActive(props.item.children, router);
      if (isActive)
        return;
      if (isAnyChildOpen(props.item.children))
        return;
      isGroupOpen.value = isActive;
      isGroupActive.value = isActive;
    }, { deep: true });
    watch(
      configStore.isVerticalNavMini(isVerticalNavHovered),
      (val) => {
        isGroupOpen.value = val ? false : isGroupActive.value;
      }
    );
    const isMounted = useMounted();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(canViewNavMenuGroup)(_ctx.item)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-group", [
            {
              active: unref(isGroupActive),
              open: unref(isGroupOpen),
              disabled: _ctx.item.disable
            }
          ]]
        }, _attrs))}><div class="nav-group-label">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(_ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(isMounted) ? TransitionGroup : "div"), mergeProps({ name: "transition-slide-x" }, !unref(isMounted) ? { class: "d-flex align-center flex-grow-1" } : void 0), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.title, "span"), {
                style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                key: "title",
                class: "nav-item-title"
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              if (_ctx.item.badgeContent) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span"), {
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                  key: "badge",
                  class: ["nav-item-badge", _ctx.item.badgeClass]
                }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.item.badgeContent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                      ];
                    }
                  }),
                  _: 1
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (!_ctx.item.alwaysOpenAndLocked) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" }
                }, unref(layoutConfig$1).icons.chevronRight, {
                  key: "arrow",
                  class: "nav-group-arrow"
                }), null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.title, "span"), {
                  key: "title",
                  class: "nav-item-title"
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.item.title), 1)
                  ]),
                  _: 1
                }, 16)), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]),
                _ctx.item.badgeContent ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ key: 0 }, unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span"), {
                  key: "badge",
                  class: ["nav-item-badge", _ctx.item.badgeClass]
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                  ]),
                  _: 1
                }, 16, ["class"])), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]) : createCommentVNode("", true),
                !_ctx.item.alwaysOpenAndLocked ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps({ key: 1 }, unref(layoutConfig$1).icons.chevronRight, {
                  key: "arrow",
                  class: "nav-group-arrow"
                }), null, 16)), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div>`);
        _push(ssrRenderComponent(unref(TransitionExpand), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${ssrRenderStyle(unref(isGroupOpen) ? null : { display: "none" })}" class="nav-group-children"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.item.children, (child) => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("children" in child ? "VerticalNavGroup" : unref(_sfc_main$6)), {
                  key: child.title,
                  item: child
                }, null), _parent2, _scopeId);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                withDirectives(createVNode("ul", { class: "nav-group-children" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (child) => {
                    return openBlock(), createBlock(resolveDynamicComponent("children" in child ? "VerticalNavGroup" : unref(_sfc_main$6)), {
                      key: child.title,
                      item: child
                    }, null, 8, ["item"]);
                  }), 128))
                ], 512), [
                  [vShow, unref(isGroupOpen)]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VerticalNavGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavGroup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent$1({
  props: {
    navItems: {
      type: Array,
      required: true
    },
    verticalNavAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { width: windowWidth } = useWindowSize();
    const configStore = useLayoutConfigStore();
    const isOverlayNavActive = ref(false);
    const isLayoutOverlayVisible = ref(false);
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive);
    syncRef(isOverlayNavActive, isLayoutOverlayVisible);
    watch(windowWidth, () => {
      if (!configStore.isLessThanOverlayNavBreakpoint && isLayoutOverlayVisible.value)
        isLayoutOverlayVisible.value = false;
    });
    return () => {
      var _a, _b, _c;
      const verticalNavAttrs = toRef(props, "verticalNavAttrs");
      const { wrapper: verticalNavWrapper, wrapperProps: verticalNavWrapperProps, ...additionalVerticalNavAttrs } = verticalNavAttrs.value;
      const verticalNav = h(
        VerticalNav,
        { isOverlayNavActive: isOverlayNavActive.value, toggleIsOverlayNavActive, navItems: props.navItems, ...additionalVerticalNavAttrs },
        {
          "nav-header": () => {
            var _a2;
            return (_a2 = slots["vertical-nav-header"]) == null ? void 0 : _a2.call(slots);
          },
          "before-nav-items": () => {
            var _a2;
            return (_a2 = slots["before-vertical-nav-items"]) == null ? void 0 : _a2.call(slots);
          }
        }
      );
      const navbar = h(
        "header",
        { class: ["layout-navbar", { "navbar-blur": configStore.isNavbarBlurEnabled }] },
        [
          h(
            "div",
            { class: "navbar-content-container" },
            (_a = slots.navbar) == null ? void 0 : _a.call(slots, {
              toggleVerticalOverlayNavActive: toggleIsOverlayNavActive
            })
          )
        ]
      );
      const main2 = h(
        "main",
        { class: "layout-page-content" },
        h("div", { class: "page-content-container" }, (_b = slots.default) == null ? void 0 : _b.call(slots))
      );
      const footer = h(
        "footer",
        { class: "layout-footer" },
        [
          h(
            "div",
            { class: "footer-content-container" },
            (_c = slots.footer) == null ? void 0 : _c.call(slots)
          )
        ]
      );
      const layoutOverlay = h(
        "div",
        {
          class: ["layout-overlay", { visible: isLayoutOverlayVisible.value }],
          onClick: () => {
            isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value;
          }
        }
      );
      return h(
        "div",
        { class: ["layout-wrapper", ...configStore._layoutClasses] },
        [
          verticalNavWrapper ? h(verticalNavWrapper, verticalNavWrapperProps, { default: () => verticalNav }) : verticalNav,
          h(
            "div",
            { class: "layout-content-wrapper" },
            [
              navbar,
              main2,
              footer
            ]
          ),
          layoutOverlay
        ]
      );
    };
  }
});
const VerticalNavLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLayout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent$1({
  __name: "VerticalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    const hideTitleAndBadge = configStore.isVerticalNavMini();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(_ctx.item.action, _ctx.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-link", { disabled: _ctx.item.disable }]
        }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.item.to ? unref(__nuxt_component_0$1) : "a"), mergeProps(unref(getComputedNavLinkToProp)(_ctx.item), {
          class: { "router-link-active router-link-exact-active": unref(isNavLinkActive)(_ctx.item, _ctx.$router) }
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(_ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null), _parent2, _scopeId);
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                key: "title",
                class: "nav-item-title"
              }, unref(getDynamicI18nProps)(_ctx.item.title, "span")), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              if (_ctx.item.badgeContent) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                  key: "badge",
                  class: ["nav-item-badge", _ctx.item.badgeClass]
                }, unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span")), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.item.badgeContent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                      ];
                    }
                  }),
                  _: 1
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.iconRenderer || "div"), mergeProps(_ctx.item.icon || unref(layoutConfig$1).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null, 16)),
                createVNode(TransitionGroup, { name: "transition-slide-x" }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                      key: "title",
                      class: "nav-item-title"
                    }, unref(getDynamicI18nProps)(_ctx.item.title, "span")), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.item.title), 1)
                      ]),
                      _: 1
                    }, 16)), [
                      [vShow, !unref(hideTitleAndBadge)]
                    ]),
                    _ctx.item.badgeContent ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                      key: "badge",
                      class: ["nav-item-badge", _ctx.item.badgeClass]
                    }, unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span")), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                      ]),
                      _: 1
                    }, 16, ["class"])), [
                      [vShow, !unref(hideTitleAndBadge)]
                    ]) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VerticalNavLink_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLink.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent$1({
  __name: "VerticalNavSectionTitle",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    const shallRenderIcon = configStore.isVerticalNavMini();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(_ctx.item.action, _ctx.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-section-title" }, _attrs))}><div class="title-wrapper">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(shallRenderIcon) ? unref(layoutConfig$1).app.iconRenderer : unref(layoutConfig$1).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
          key: unref(shallRenderIcon),
          class: unref(shallRenderIcon) ? "placeholder-icon" : "title-text"
        }, { ...unref(layoutConfig$1).icons.sectionTitlePlaceholder, ...unref(getDynamicI18nProps)(_ctx.item.heading, "span") }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(!unref(shallRenderIcon) ? _ctx.item.heading : null)}`);
            } else {
              return [
                createTextVNode(toDisplayString(!unref(shallRenderIcon) ? _ctx.item.heading : null), 1)
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div></li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavSectionTitle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const createLayouts = (userConfig) => {
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    const configStore = useLayoutConfigStore();
    layoutConfig$1.app.title = ((_a = userConfig.app) == null ? void 0 : _a.title) ?? layoutConfig$1.app.title;
    layoutConfig$1.app.logo = ((_b = userConfig.app) == null ? void 0 : _b.logo) ?? layoutConfig$1.app.logo;
    layoutConfig$1.app.overlayNavFromBreakpoint = ((_c = userConfig.app) == null ? void 0 : _c.overlayNavFromBreakpoint) ?? layoutConfig$1.app.overlayNavFromBreakpoint;
    layoutConfig$1.app.i18n.enable = ((_e = (_d = userConfig.app) == null ? void 0 : _d.i18n) == null ? void 0 : _e.enable) ?? layoutConfig$1.app.i18n.enable;
    layoutConfig$1.app.iconRenderer = ((_f = userConfig.app) == null ? void 0 : _f.iconRenderer) ?? layoutConfig$1.app.iconRenderer;
    layoutConfig$1.verticalNav.defaultNavItemIconProps = ((_g = userConfig.verticalNav) == null ? void 0 : _g.defaultNavItemIconProps) ?? layoutConfig$1.verticalNav.defaultNavItemIconProps;
    layoutConfig$1.icons.chevronDown = ((_h = userConfig.icons) == null ? void 0 : _h.chevronDown) ?? layoutConfig$1.icons.chevronDown;
    layoutConfig$1.icons.chevronRight = ((_i = userConfig.icons) == null ? void 0 : _i.chevronRight) ?? layoutConfig$1.icons.chevronRight;
    layoutConfig$1.icons.close = ((_j = userConfig.icons) == null ? void 0 : _j.close) ?? layoutConfig$1.icons.close;
    layoutConfig$1.icons.verticalNavPinned = ((_k = userConfig.icons) == null ? void 0 : _k.verticalNavPinned) ?? layoutConfig$1.icons.verticalNavPinned;
    layoutConfig$1.icons.verticalNavUnPinned = ((_l = userConfig.icons) == null ? void 0 : _l.verticalNavUnPinned) ?? layoutConfig$1.icons.verticalNavUnPinned;
    layoutConfig$1.icons.sectionTitlePlaceholder = ((_m = userConfig.icons) == null ? void 0 : _m.sectionTitlePlaceholder) ?? layoutConfig$1.icons.sectionTitlePlaceholder;
    configStore.$patch({
      appContentLayoutNav: cookieRef("appContentLayoutNav", ((_n = userConfig.app) == null ? void 0 : _n.contentLayoutNav) ?? layoutConfig$1.app.contentLayoutNav).value,
      appContentWidth: cookieRef("appContentWidth", ((_o = userConfig.app) == null ? void 0 : _o.contentWidth) ?? layoutConfig$1.app.contentWidth).value,
      footerType: cookieRef("footerType", ((_p = userConfig.footer) == null ? void 0 : _p.type) ?? layoutConfig$1.footer.type).value,
      navbarType: cookieRef("navbarType", ((_q = userConfig.navbar) == null ? void 0 : _q.type) ?? layoutConfig$1.navbar.type).value,
      isNavbarBlurEnabled: cookieRef("isNavbarBlurEnabled", ((_r = userConfig.navbar) == null ? void 0 : _r.navbarBlur) ?? layoutConfig$1.navbar.navbarBlur).value,
      isVerticalNavCollapsed: cookieRef("isVerticalNavCollapsed", ((_s = userConfig.verticalNav) == null ? void 0 : _s.isVerticalNavCollapsed) ?? layoutConfig$1.verticalNav.isVerticalNavCollapsed).value,
      // isAppRTL: userConfig.app?.isRTL ?? config.app.isRTL,
      isLessThanOverlayNavBreakpoint: false,
      horizontalNavType: cookieRef("horizontalNavType", ((_t = userConfig.horizontalNav) == null ? void 0 : _t.type) ?? layoutConfig$1.horizontalNav.type).value
    });
    _setDirAttr(configStore.isAppRTL ? "rtl" : "ltr");
  };
};
const index = "";
const layouts_mPotmY5lsV = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createLayouts(layoutConfig));
});
const plugins = [
  unhead_pIGethlKjS,
  plugin$1,
  plugin,
  revive_payload_server_0ANC9uTsht,
  components_plugin_KR1HBZs4kY,
  plugin_fUEvfpaGmZ,
  index_kyvreQaQna,
  index_pJsEXjjc09,
  layouts_mPotmY5lsV
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const layouts = {
  blank: () => import("./_nuxt/blank-df81c412.js").then((m) => m.default || m),
  default: () => import("./_nuxt/default-3be6ebc9.js").then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent$1({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent$1({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject$1(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* @__PURE__ */ defineComponent$1({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent$1({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = /* @__PURE__ */ defineComponent$1({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    inject$1(PageRouteSymbol, null);
    expose({ pageRef });
    inject$1(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const __nuxt_component_2 = /* @__PURE__ */ defineComponent$1({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const router = useRouter$1();
    globalMiddleware.unshift(indicator.start);
    router.onError(() => {
      indicator.finish();
    });
    router.beforeResolve((to, from) => {
      if (to === from || to.matched.every((comp, index2) => {
        var _a, _b, _c;
        return comp.components && ((_a = comp.components) == null ? void 0 : _a.default) === ((_c = (_b = from.matched[index2]) == null ? void 0 : _b.components) == null ? void 0 : _c.default);
      })) {
        indicator.finish();
      }
    });
    router.afterEach((_to, _from, failure) => {
      if (failure) {
        indicator.finish();
      }
    });
    nuxtApp.hook("page:finish", indicator.finish);
    nuxtApp.hook("vue:error", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const useDevice = () => {
  return (/* @__PURE__ */ useNuxtApp()).$device;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent$1({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useWindowScroll();
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VScaleTransition, mergeProps({
        style: { "transform-origin": "center" },
        class: "scroll-to-top d-print-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              style: unref(y) > 200 ? null : { display: "none" },
              icon: "",
              density: "comfortable",
              onClick: scrollToTop
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    size: "22",
                    icon: "tabler-arrow-up"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      size: "22",
                      icon: "tabler-arrow-up"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(VBtn, {
                icon: "",
                density: "comfortable",
                onClick: scrollToTop
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    size: "22",
                    icon: "tabler-arrow-up"
                  })
                ]),
                _: 1
              }, 512), [
                [vShow, unref(y) > 200]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const ScrollToTop_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/ScrollToTop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useConfigStore = defineStore("config", () => {
  const userPreferredColorScheme = usePreferredColorScheme();
  const cookieColorScheme = cookieRef("color-scheme", "light");
  watch(
    userPreferredColorScheme,
    (val) => {
      if (val !== "no-preference")
        cookieColorScheme.value = val;
    },
    { immediate: true }
  );
  const theme = cookieRef("theme", themeConfig.app.theme);
  const isVerticalNavSemiDark = cookieRef("isVerticalNavSemiDark", themeConfig.verticalNav.isVerticalNavSemiDark);
  const skin = cookieRef("skin", themeConfig.app.skin);
  const {
    isLessThanOverlayNavBreakpoint,
    appContentWidth,
    navbarType,
    isNavbarBlurEnabled,
    appContentLayoutNav,
    isVerticalNavCollapsed,
    footerType,
    isAppRTL
  } = storeToRefs(useLayoutConfigStore());
  return {
    theme,
    isVerticalNavSemiDark,
    skin,
    // @layouts exports
    isLessThanOverlayNavBreakpoint,
    appContentWidth,
    navbarType,
    isNavbarBlurEnabled,
    appContentLayoutNav,
    isVerticalNavCollapsed,
    footerType,
    isAppRTL
  };
});
const initConfigStore = () => {
  const userPreferredColorScheme = usePreferredColorScheme();
  const vuetifyTheme = useTheme();
  const configStore = useConfigStore();
  watch(
    [() => configStore.theme, userPreferredColorScheme],
    () => {
      vuetifyTheme.global.name.value = configStore.theme === "system" ? userPreferredColorScheme.value === "dark" ? "dark" : "light" : configStore.theme;
    }
  );
};
const _syncAppRtl = () => {
  const configStore = useConfigStore();
  const storedLang = cookieRef("language", null);
  const { locale } = useI18n({ useScope: "global" });
  if (locale.value !== storedLang.value && storedLang.value)
    locale.value = storedLang.value;
  watch(
    locale,
    (val) => {
      storedLang.value = val;
      if (themeConfig.app.i18n.langConfig && themeConfig.app.i18n.langConfig.length) {
        themeConfig.app.i18n.langConfig.forEach((lang) => {
          if (lang.i18nLang === storedLang.value)
            configStore.isAppRTL = lang.isRTL;
        });
      }
    },
    { immediate: true }
  );
};
const _handleSkinChanges = () => {
  const { themes: themes2 } = useTheme();
  const configStore = useConfigStore();
  Object.values(themes2.value).forEach((t) => {
    t.colors["skin-default-background"] = t.colors.background;
    t.colors["skin-default-surface"] = t.colors.surface;
  });
  watch(
    () => configStore.skin,
    (val) => {
      Object.values(themes2.value).forEach((t) => {
        t.colors.background = t.colors[`skin-${val}-background`];
        t.colors.surface = t.colors[`skin-${val}-surface`];
      });
    },
    { immediate: true }
  );
};
const _syncInitialLoaderTheme = () => {
  const vuetifyTheme = useTheme();
  watch(
    () => useConfigStore().theme,
    () => {
      useStorage(namespaceConfig("initial-loader-bg"), null).value = vuetifyTheme.current.value.colors.surface;
      useStorage(namespaceConfig("initial-loader-color"), null).value = vuetifyTheme.current.value.colors.primary;
    },
    { immediate: true }
  );
};
const initCore = () => {
  _syncInitialLoaderTheme();
  _handleSkinChanges();
  if (themeConfig.app.i18n.enable)
    _syncAppRtl();
};
const VApp$1 = "";
const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps({
    fullHeight: true
  }),
  ...makeThemeProps()
}, "VApp");
const VApp = genericComponent()({
  name: "VApp",
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _a;
      return createVNode("div", {
        "ref": layoutRef,
        "class": ["v-application", theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class],
        "style": [props.style]
      }, [createVNode("div", {
        "class": "v-application__wrap"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
const VLocaleProvider$1 = "";
const makeVLocaleProviderProps = propsFactory({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...makeComponentProps()
}, "VLocaleProvider");
const VLocaleProvider = genericComponent()({
  name: "VLocaleProvider",
  props: makeVLocaleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = provideLocale(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-locale-provider", rtlClasses.value, props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent$1({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { global: global2 } = useTheme();
    initCore();
    initConfigStore();
    const empCode = ref("");
    provide("empCode", empCode);
    useRouter$2();
    const route = useRoute$1();
    const localLoginStore = useLoginStore();
    watch(empCode, (newVal) => {
      console.log("empCode 변경됨:", newVal);
    });
    const configStore = useConfigStore();
    const { isMobile: isMobile2 } = useDevice();
    if (isMobile2)
      configStore.appContentLayoutNav = "vertical";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_NuxtLoadingIndicator = __nuxt_component_2;
      _push(ssrRenderComponent(VLocaleProvider, mergeProps({
        rtl: unref(configStore).isAppRTL
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VApp, {
              style: `--v-global-theme-primary: ${unref(hexToRgb)(unref(global2).current.value.colors.primary)}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(localLoginStore).isLoggedIn !== "N" || unref(route).path === "/login") {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLayout, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "rgb(var(--v-theme-primary))" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtPage),
                            createVNode(_component_NuxtLoadingIndicator, { color: "rgb(var(--v-theme-primary))" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    unref(localLoginStore).isLoggedIn !== "N" || unref(route).path === "/login" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_NuxtLayout, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtLoadingIndicator, { color: "rgb(var(--v-theme-primary))" })
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VApp, {
                style: `--v-global-theme-primary: ${unref(hexToRgb)(unref(global2).current.value.colors.primary)}`
              }, {
                default: withCtx(() => [
                  unref(localLoginStore).isLoggedIn !== "N" || unref(route).path === "/login" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_NuxtLayout, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtLoadingIndicator, { color: "rgb(var(--v-theme-primary))" })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }, 8, ["style"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent$1({
  __name: "ErrorHeader",
  __ssrInlineRender: true,
  props: {
    statusCode: {},
    title: {},
    description: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      if (props.statusCode) {
        _push(`<h1 class="text-h1 font-weight-medium">${ssrInterpolate(props.statusCode)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (props.title) {
        _push(`<h4 class="text-h4 font-weight-medium mb-3">${ssrInterpolate(props.title)}</h4>`);
      } else {
        _push(`<!---->`);
      }
      if (props.description) {
        _push(`<p style="${ssrRenderStyle({ "max-inline-size": "50vw" })}">${ssrInterpolate(props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ErrorHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useGenerateImageVariant = (imgLight, imgDark, imgLightBordered, imgDarkBordered, bordered = false) => {
  const configStore = useConfigStore();
  const { global: global2 } = useTheme();
  return computed(() => {
    if (global2.name.value === "light") {
      if (configStore.skin === "bordered" && bordered)
        return imgLightBordered;
      else
        return imgLight;
    }
    if (global2.name.value === "dark") {
      if (configStore.skin === "bordered" && bordered)
        return imgDarkBordered;
      else
        return imgDark;
    }
  });
};
const misc404 = "" + __buildAssetsURL("404.c6f3c581.png");
const authV2MaskDark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAC0EAAAHuAQMAAADZJXTNAAAABlBMVEWAmcwAAABbWrnIAAAAAnRSTlMKAIx8JbIAAAcVSURBVHja7NqxcRRBEIXhXyo5cpWDLAzyAJvCJBReEhQuGRAClwQ+IciEqisGi6JWpZtFp77Znt73h9BGz9e3Rzu37+8+NvffiXZWvwDg+n1zF530F/5139zFJn1g2e2H5i4x6QNP9Lm56Ek/cKJ7P5Ghkz7S6dp7JG7SYqVPzUVM+gHWu/UeefGkf7OaqR0y6R+sZWqHTPrIWqZ2zKQPrGRqn0jEbmlT+1QidEub2lGTZiVT+2Qi0tKmdtSkRTdTu5MIJJ6p3UnEvYemdtik6WdqR036J91M7W4i7D40tbuJqPvQ1O4nojBtavcTCZbHLqgtkiyP8tQWYfIwtbuJVMujMLVF9Nliaj+dyLg8KlJbXOY3D1P77EmLZ2dqnzPpI5s3ObVFlgOxOrVFUuOVo7bIa7xa1BazrOnZqS1mWtPLbr62iRKTrelpqS0mXNPL7r61GRJzrun5qC2mXdOPetNyJ6Ze0xPtETH7ml529bolTRRY01PsEVFkTS+7ybdHRJ01vezqVUuVKLWmH3XX8iQy/f/gbxVPdpH3E2JYb1uCRO5PiHWoLdJ/QixCbVH4QUxFbVHtbslKbVHwbklJbbGLBzEBtcVeHsStqS1K3y2JqC129iBuRm2xvwdxG2qLfT6I46ktdvsgDqa22NGFuCm1xd4fxFHUFtV/Ms1CbeEHcQy1RcVviBmpLfwgjqG22PMtPpLawg/iGGoL3+JjqC1MjzHUFr7Fx1BbmB5jqC18i4+htjA9xlBbmB5jqC18i4+htjA9xlBbmB5jqC38q8cYagvTYwy1henRKZDawr96/GHHDmoki2IgCHqRLpWCPgjerZXSlyIg+JTlhx+n9k7kPfw4tXfS4+HHqb2THg8/Tu2d/9LDj1N7J/IK//7vRF5FelT8lxo7kVcReRWRVxF5jZ3/UkXkPbj0Z4m8xk7kVUReReRVfPIaOzldEXkVP9OKnG7s5HRFTlfkdEVON3ZyuiKnK3K6IqcbOzldkdMVOV2R042dnK7I6Yqcrsjpxk5OV+T0g0t/luHS2BkuFcOlYrhUDJfGznCpGC4PLv1ZhktjZ7hUDJeK4VIxXBpz6YyJWDERK4ZLY2e4RFw6YyJWTMTGzkSsGC4Vw+XBpT9qZyJWTMSK4VIxXBpz6YyJWDERKyZiY2e4VAyXB5f+LBOxsTMRK4ZLxXCpGC5/7NcxDcBAEMTAg77QgyCtpZdmILhzY0pnLGLFIlaMS2NnXCJKZyxixSI2dhaxYlwqxuWH0o/aWcSKRawYl4pxaUzpjEWsWMSKRWzsjEvFuPxQ+lkWsbGziBXjUjEuFePSmNIZi1ixiBXj0tgZl4jSGYtYsYiNnUWsGJeKcfmh9KN2FrFiESvGpWJcGlM6YxErFrFiERs741IxLj+UfpZFbOwsYsW4VIxLxbg0pnTGIlYsYsW4NHbGJaJ0xiJWLGJjZxErxqViXH4o/aidRaxYxIpxqRiXxpTOWMSKRaxYxMbOuFSMyw+ln2URGzuLWDEuFeNSMS6NKZ2xiBWLWDEujZ1xiSidsYgVi9jYWcSKcakYlx9KP2pnESsWsWJcKsalMaUzFrFiESsWsbEzLhXj8kPpZ1nExs4iVoxLxbhUjEtjSmcsYsUiVoxLY2dcIkpnLGLFIjZ2FrFiXCrG5YfSj9pZxIpFrBiXinFpTOmMRaxYxIpFbOyMS8W4/FD6WRaxsbOIFeNSMS4V49KY0hmLWLGIFePS2BmXiNIZi1ixiI2dRawYl4px+aH0o3YWsWIRK8alYlwaO+MSUTpjESsWsbEzLhXj8kPpZ1nExs4iVixixbhUjEtjSn/t17GJwwAQRNE1Chxc4BJcikuzOte5AE26MPBeCZ9lYNd4Ebd4Ebd4XHac43FZovQaL+IWL+KOc7yIWzwugdK1lN5xKp256VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey05O56VJKB0qXstOTuelSSgdKl7LTk7npUkoHSpey04HStZQOlK6ldKB0LaWXPJS+p3QtpQOlax1K31O61lPpe0rXeil9T+lab6XvKV3ro/SSr9L3lK51Kb3jofSSQ+klT6WXvJS+p3Stj9JLvkovuZTecSi95Kn0krfSS75K7zgupXe8ld7xd/2c/wLtfcfBRLQqAAAAAElFTkSuQmCC";
const authV2MaskLight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAC0EAAAHuAQMAAADZJXTNAAAABlBMVEUzM2YAAADfRaZFAAAAAnRSTlMFAAvkOX0AAAaDSURBVHja7Jm7UcVAEASbwsAkBEIhNCa0C4UQnomh0mFgqCh9rhC7cLo3HUIbo94T1fwJOml64ovXalJNFxaeqkkzXfiOJyjJdGGDl2qiTd/Y4bGaSNMTR7xVE2VaNHiuJsL0Ddo8VPNb0zNNnNohpgstnNohpidaOLVjTBcaOLV3ELEr7dQOMv3OMU7tINMzDZzau4jIlnZqR5kWhzi1o0x/sOAdyTRdWPCOJJqeYcE7EmA64Hvok32FyBgPn+xrRMZ4+GRfIxLGwyf7BiIhpn2ybyA6GY/hU1v0Mx5jp7booDzuIrVFd+MxaGqLhDcPp/YGIukfgFP7rGl+jlP7jOmJ/+faqS06bLwhU1t02njDpba4xEwPkNqi78YbJ7VF9403SGqLjt7xhk5t0e0pPlhqi2vO9PVSW1x3pj/ZswMDBoIQBIJb+paeKsKrRxMy4C5qy+ozvYjask/TO6ktS0aP9dSWPaPHbmrLqtFjMbXl1pmeS205d6aHUlsO9JYV1JYbvWU+teVMbxlObdk9L+2hthwPxDHUlou9ZSK15YlAHEBteSYQP6a2vBSIX1JbXgvEr6gtDwbiJ9SWNwMxT215NxCz1Jazk+kwasvrgZiitlyfTKdQWxqIGWrLyR/iQGpLAzFDbXm5iyfviDQQM3dE2sUzd0RKj0xll3bxTGWX0iNT2aX0yFR2KT0ylV1Kjwy1pfTIUFtKjwy1pfTIUFtKjwy1pfQgQm0pPQD+T20pPX7s2sEJwDAMBEGX7s6TCvQzC4KZEvTaczJ4nNr3+OAyeJza90iPwePUvkd6DB6n9j3+9Rg8Tu17RF7iu0fkVaRHxftSReRVRF5F5FVEXkXkVbzkVUReReRVRF5F5FVEXkXkVURexZtpRU5X5HRFTlfkdEVOV+R0RU5X5HRFTlfkdEVOV+R0RU5X5HRFTlfkdEVOV+T0wKXXMlwqhkvFcKkYLhXDpWK4VAyXipweuPRahkvFcKkYLhXDpWK4DFx6LROxYiJWDJeK4TJw6bVMxIqJWDERK4ZLxXAZuPRaJmLFRKwYLhXDpWK4DFx6LROxYiJWDJeK4TJw6bVMxIqJWDERK4ZLxXAZuPTPfh2TAADAQAz077oKugYe7iRkyyyLWLGIFeNSMS4PpWdZxIpFrFjEinGpGJeH0rMsYsUiVoxLxbhUjMtD6VkWsWIRK8alYlweSs+yiBWLWLGIFeNSMS4PpWdZxIpFrBiXinF5KD3LIlYsYsUiVoxLxbg8lJ5lESsWsWJcKsalYlweSs+yiBWLWDEuFePyUHqWRaxYxIpFrBiXinF5KD3LIlYsYsW4VIzLQ+lZFrFiESsWsWJcKsblofQsi1ixiBXjUjEuFePyUHqWRaxYxIpxqRiXh9KzLGLFIlYsYsW4VIzLQ+lZFrFiESvGpWJcHkrPsogVi1ixiBXjUjEuD6VnWcSKRawYl4pxqRiXh9KzLGLFIlaMS8W4PJSeZRErFrFiESvGpWJcHkrPsogVi1gxLhXj8lB6lkWsWMSKRawYl4pxeSg9yyJWLGLFuFSMS8W4PJSeZRErFrFiXCrG5aH0LItYsYgVi1gxLhXj8lB6lkWsWMSKcakYl4fSsyxixSJWLGLFuFSMy0PpWRaxYhErxqViXCrG5aH0LItYsYgV41IxLg+lZ1nEikWsWMSKcakYl4fSs679OraJJICiICi0BiYhEAqhcZnvCX+e+6WWqkJory3iFYt4xbhcMS6D0lkW8YpFvGIRrxiXK8ZlUDpL6UHpLKUHpbOUHpTOUnpQOkvpQekspQels5QelM5SelA6S+lB6SylB6WzlB6UzlJ6UDpL6UHpLKUHpbOUHpTOUnpQOkvpQekspQels5QelM5SelA6S+lB6SylB6WzlB6UzlJ6UDpL6UHpLKUHpbOUHpTOUnpQOkvpQekspQels5QelM5SelA6S+lB6SylB6WzlB6UzlJ6UDpL6UHpLKUHpbOUHpTOUnpQOkvpQekspQels5QelM5SelA6S+lB6SylB6WzlB6UzlJ6UDpL6UHpLKUHpbOUHpTOUnpQOkvpQekspQels5S+8U/pZ0pnKT0onaX0oHSW0kc+lH6mdJbSg9JZL6WfKZ31qfQzpbO+lH6mdNa30s+UzvpR+pnSWb9KH3krfeND6SMvpZ8pnfWp9JFvpY/8KH3kV+kjb6VvvJQ+8qX0kR+lj7yVvvFS+si30jc+33+l/wPTtFkG5TqLPAAAAABJRU5ErkJggg==";
const _sfc_main$1 = /* @__PURE__ */ defineComponent$1({
  ...{
    inheritAttrs: false
  },
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const props = __props;
    const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
    const isDev = false;
    const errToShow = computed(() => {
      var _a, _b;
      const is404 = ((_a = props.error) == null ? void 0 : _a.statusCode) === 404 || ((_b = props.error.message) == null ? void 0 : _b.includes("404"));
      if (is404) {
        return {
          title: "Page Not Found",
          description: "We couldn't find the page you are looking for."
        };
      }
      return {
        title: "Oops! Something went wrong.",
        description: "We are working on it and we'll get it fixed as soon as we can"
      };
    });
    const handleError = () => clearError({ redirect: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ErrorHeader = _sfc_main$2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "blank" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="misc-wrapper"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ErrorHeader, {
              "status-code": props.error.statusCode,
              title: unref(errToShow).title,
              description: unref(errToShow).description
            }, null, _parent2, _scopeId));
            if (unref(isDev)) {
              _push2(`<div style="${ssrRenderStyle({ "max-inline-size": "80dvw", "overflow-x": "scroll" })}"${_scopeId}>${_ctx.error.stack}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VBtn, {
              class: "mb-12",
              onClick: handleError
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to Home `);
                } else {
                  return [
                    createTextVNode(" Back to Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="misc-avatar w-100 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: unref(misc404),
              alt: "Coming Soon",
              "max-width": 200,
              class: "mx-auto"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VImg, {
              src: unref(authThemeMask),
              class: "misc-footer-img d-none d-md-block"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "misc-wrapper" }, [
                createVNode(_component_ErrorHeader, {
                  "status-code": props.error.statusCode,
                  title: unref(errToShow).title,
                  description: unref(errToShow).description
                }, null, 8, ["status-code", "title", "description"]),
                unref(isDev) ? (openBlock(), createBlock("div", {
                  key: 0,
                  style: { "max-inline-size": "80dvw", "overflow-x": "scroll" },
                  innerHTML: _ctx.error.stack
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode(VBtn, {
                  class: "mb-12",
                  onClick: handleError
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back to Home ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "misc-avatar w-100 text-center" }, [
                  createVNode(VImg, {
                    src: unref(misc404),
                    alt: "Coming Soon",
                    "max-width": 200,
                    class: "mx-auto"
                  }, null, 8, ["src"])
                ]),
                createVNode(VImg, {
                  src: unref(authThemeMask),
                  class: "misc-footer-img d-none d-md-block"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const error_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/island-renderer-8566ef0e.js").then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.7.4_@types+node@20.5.9_eslint@8.48.0_sass@1.69.3_stylelint@15.10.3_typescript@5.2.2/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  VSlideYTransition as $,
  convertToUnit as A,
  useConfigStore as B,
  filterInputAttrs as C,
  useFocus as D,
  useTheme as E,
  useProxiedModel as F,
  clamp as G,
  useLocale as H,
  defineFunctionalComponent as I,
  createRange as J,
  deepEqual as K,
  wrapInArray as L,
  getObjectValueByPath as M,
  isEmpty as N,
  IconValue as O,
  makeLoaderProps as P,
  useLoader as Q,
  useBackgroundColor as R,
  LoaderSlot as S,
  makeDensityProps as T,
  useDensity as U,
  VCard as V,
  getPropertyFromItem as W,
  getCurrentInstance as X,
  provideDefaults as Y,
  makeTransitionProps$1 as Z,
  _export_sfc as _,
  VImg as a,
  keyValues as a$,
  MaybeTransition as a0,
  getCurrentInstanceName as a1,
  EventProp as a2,
  makeRoundedProps as a3,
  useRounded as a4,
  getUid as a5,
  nullifyTransforms as a6,
  animate as a7,
  VExpandXTransition as a8,
  isOn as a9,
  useResizeObserver as aA,
  useDisplay as aB,
  makeDimensionProps as aC,
  useDimension as aD,
  VDialogTransition as aE,
  makeLocationProps as aF,
  makePositionProps as aG,
  makeVOverlayProps as aH,
  useLocation as aI,
  usePosition as aJ,
  useScopeId as aK,
  VOverlay as aL,
  createSimpleFunctional as aM,
  VExpandTransition as aN,
  defineComponent as aO,
  deprecate as aP,
  focusChild as aQ,
  VMenuSymbol as aR,
  focusableChildren as aS,
  getNextElement as aT,
  makeVBtnProps as aU,
  VFadeTransition as aV,
  isObject as aW,
  keys as aX,
  makeLazyProps as aY,
  useLazy as aZ,
  sys as a_,
  pick as aa,
  standardEasing as ab,
  consoleWarn as ac,
  useToggleScope as ad,
  Intersect$1 as ae,
  forwardRefs as af,
  callEvent as ag,
  Ripple as ah,
  matchesSelector as ai,
  omit as aj,
  makeGroupProps as ak,
  makeVariantProps as al,
  useGroup as am,
  makeBorderProps as an,
  makeElevationProps as ao,
  makeGroupItemProps as ap,
  makeRouterProps as aq,
  makeSizeProps as ar,
  useBorder as as,
  useVariant as at,
  useElevation as au,
  useSize as av,
  useGroupItem as aw,
  useLink as ax,
  genOverlays as ay,
  VDefaultsProvider as az,
  VBtn as b,
  useGenerateImageVariant as b0,
  authV2MaskDark as b1,
  authV2MaskLight as b2,
  VNodeRenderer as b3,
  themeConfig as b4,
  AppContentLayoutNav as b5,
  injectHead as b6,
  resolveUnrefHeadInput as b7,
  switchToVerticalNavOnLtOverlayNavBreakpoint as b8,
  _sfc_main$f as b9,
  __nuxt_component_0$1 as ba,
  _sfc_main$7 as bb,
  createError as c,
  defineStore as d,
  entry$1 as default,
  VCardActions as e,
  VCardText as f,
  VCardTitle as g,
  hrApi as h,
  VIcon as i,
  VAvatar as j,
  VApp as k,
  VDialog as l,
  VSpacer as m,
  attenStore as n,
  useRouter$1 as o,
  propsFactory as p,
  makeComponentProps as q,
  makeTagProps as r,
  genericComponent as s,
  useRtl as t,
  useLoginStore as u,
  useRender as v,
  breakpoints as w,
  makeThemeProps as x,
  provideTheme as y,
  useTextColor as z
};
