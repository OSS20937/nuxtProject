import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, send, getRequestHeaders, getRequestURL, getResponseHeader, setResponseHeaders, appendResponseHeader, removeResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import destr from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs-lite.mjs';
import { digest } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { klona } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { withQuery as withQuery$1, joinURL as joinURL$1 } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/dev/MyHRVue/HR_nuxt_frontend/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/dev/MyHRVue/HR_nuxt_frontend"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/dev/MyHRVue/HR_nuxt_frontend/server"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/dev/MyHRVue/HR_nuxt_frontend/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/dev/MyHRVue/HR_nuxt_frontend/.nuxt/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "device": {
      "enabled": true,
      "defaultUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      "refreshOnResize": false
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler$0 = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery$1(joinURL$1(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

function defineNitroPlugin(def) {
  return def;
}

const _nofqdDYSqkXXK91496eMnLEuXyCf1FogtvDQsFDe2s = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response) => {
    response.body = response.body.replaceAll("/_nuxt/\0", "/_nuxt/");
  });
});

const plugins = [
  _nofqdDYSqkXXK91496eMnLEuXyCf1FogtvDQsFDe2s
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-iRwkz2CSnVi2b9MmQdbpn6xkk7U\"",
    "mtime": "2025-04-03T10:37:25.149Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/mockServiceWorker.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fc5-H1WTjcERfptupkQ8v7xgJGgLDe0\"",
    "mtime": "2025-02-17T03:43:05.245Z",
    "size": 8133,
    "path": "../../.output/public/mockServiceWorker.js"
  },
  "/_nuxt/404.c6f3c581.png": {
    "type": "image/png",
    "etag": "\"8655-A01Y8gth+wPUZ3lJvu5+7y6o3m0\"",
    "mtime": "2025-06-19T08:20:37.447Z",
    "size": 34389,
    "path": "../../.output/public/_nuxt/404.c6f3c581.png"
  },
  "/_nuxt/add.ddff1051.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f67-Mq6Cn1wo97Bn3jEO/wIpfSpUAi4\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 12135,
    "path": "../../.output/public/_nuxt/add.ddff1051.js"
  },
  "/_nuxt/add.fd37e89b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"158e-ZWhdNomCnb/NTHu+q5OEAWieqlo\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 5518,
    "path": "../../.output/public/_nuxt/add.fd37e89b.js"
  },
  "/_nuxt/annual.54ac9ff2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ab4-zMXZvKCIed62srw5zvloBui7ZbA\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 6836,
    "path": "../../.output/public/_nuxt/annual.54ac9ff2.js"
  },
  "/_nuxt/AppDateTimePicker.c8f6209e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50a1-OMbpkZ+w4+mOygKiiLa5IgMPFWo\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 20641,
    "path": "../../.output/public/_nuxt/AppDateTimePicker.c8f6209e.css"
  },
  "/_nuxt/AppDateTimePicker.vue.bbb218d6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"db84-gLYo82HScA7XV1Z4Cm2ODea2lSM\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 56196,
    "path": "../../.output/public/_nuxt/AppDateTimePicker.vue.bbb218d6.js"
  },
  "/_nuxt/approval.1500e046.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c21-cws9jgUQviohmVkmNc6rCJfHEJg\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 7201,
    "path": "../../.output/public/_nuxt/approval.1500e046.js"
  },
  "/_nuxt/approval.30128269.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cc5-//Nyww25W4bvSLBfdei9S2Dn8Pk\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 3269,
    "path": "../../.output/public/_nuxt/approval.30128269.js"
  },
  "/_nuxt/approval.b09104f9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e79-52q+fnnevs9gxnagDwYs95MvgpI\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 7801,
    "path": "../../.output/public/_nuxt/approval.b09104f9.js"
  },
  "/_nuxt/AppSelect.vue.07a85e6f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c7-B3RnyOJFZP02AYrT7Qmy+Q5jYZE\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 967,
    "path": "../../.output/public/_nuxt/AppSelect.vue.07a85e6f.js"
  },
  "/_nuxt/AppTextarea.vue.5cb5c500.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33f-FpV8GA0AZRr6DA5hQS4ZqUAa6wA\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 831,
    "path": "../../.output/public/_nuxt/AppTextarea.vue.5cb5c500.js"
  },
  "/_nuxt/AppTextField.vue.2fc85679.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"320-qPZGeduS9I0dAQ+cfLCYrDCNLgc\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 800,
    "path": "../../.output/public/_nuxt/AppTextField.vue.2fc85679.js"
  },
  "/_nuxt/asyncData.465ef57f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"93e-sjx9T5Ebgi7IR4Y1RUFX7ggJycs\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 2366,
    "path": "../../.output/public/_nuxt/asyncData.465ef57f.js"
  },
  "/_nuxt/attenModal.vue.071be6e9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13c6-hakU9S2TmwJVrEPCAnRDPACnhkI\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 5062,
    "path": "../../.output/public/_nuxt/attenModal.vue.071be6e9.js"
  },
  "/_nuxt/authManage.3cf4ba0b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e0-AUbc+qBYnVycpx7X22nqrMbLx3Y\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 1760,
    "path": "../../.output/public/_nuxt/authManage.3cf4ba0b.js"
  },
  "/_nuxt/avatar-1.129659bb.png": {
    "type": "image/png",
    "etag": "\"34e7-Qg/OYbJEjJ6rXSVDWl5FigEfU7c\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 13543,
    "path": "../../.output/public/_nuxt/avatar-1.129659bb.png"
  },
  "/_nuxt/award.a51f804e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe2-5+xfCXFHi3Z/vygKvy6l+xBXDrs\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 8162,
    "path": "../../.output/public/_nuxt/award.a51f804e.js"
  },
  "/_nuxt/awrds.241b6b55.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1234-CSxZ0WINsjzlnIw4qHE4KyDrKag\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 4660,
    "path": "../../.output/public/_nuxt/awrds.241b6b55.js"
  },
  "/_nuxt/awrds.703cae2e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"192a-3geJNvo6rfgwvX5pgJRCulgoL4k\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 6442,
    "path": "../../.output/public/_nuxt/awrds.703cae2e.js"
  },
  "/_nuxt/awrds.c4593d75.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"289e-qxp6wG8YhEM8HNE1Kxs4ULULjVw\"",
    "mtime": "2025-06-19T08:20:37.495Z",
    "size": 10398,
    "path": "../../.output/public/_nuxt/awrds.c4593d75.js"
  },
  "/_nuxt/baseWorkTimeManage.fe955856.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"79c-Tqexa2HTfsOH0PAU7bteiWJmxkE\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 1948,
    "path": "../../.output/public/_nuxt/baseWorkTimeManage.fe955856.js"
  },
  "/_nuxt/blank.3fac9ebf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"34-29A/YDlGLyUVmv2A62Dpvm7e+u8\"",
    "mtime": "2025-06-19T08:20:37.478Z",
    "size": 52,
    "path": "../../.output/public/_nuxt/blank.3fac9ebf.css"
  },
  "/_nuxt/blank.96ad03c8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"121-/XRZXtPfiBj99GXGSBJc0B6K24Q\"",
    "mtime": "2025-06-19T08:20:37.512Z",
    "size": 289,
    "path": "../../.output/public/_nuxt/blank.96ad03c8.js"
  },
  "/_nuxt/break.cb4ee3f6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"115d-Rdv3JoE0i4s+u1dkgDGrUuBCIhw\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 4445,
    "path": "../../.output/public/_nuxt/break.cb4ee3f6.js"
  },
  "/_nuxt/codeManage.c40e8a6e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ce7-UclM0Q6PftPoTuCdd449GKeUqxg\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 3303,
    "path": "../../.output/public/_nuxt/codeManage.c40e8a6e.js"
  },
  "/_nuxt/createSimpleFunctional.4495d00f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1af-6DbToWC1yemZUi+Z/2Siz13Pi1g\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 431,
    "path": "../../.output/public/_nuxt/createSimpleFunctional.4495d00f.js"
  },
  "/_nuxt/daily.127d5687.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fb2-qx50GoJ/8WE1eBZi3luCpOQbidY\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 8114,
    "path": "../../.output/public/_nuxt/daily.127d5687.js"
  },
  "/_nuxt/daily.ff8d8236.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ef8-eBGakAFp3TMStOg1p4y8R5Y24k0\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 16120,
    "path": "../../.output/public/_nuxt/daily.ff8d8236.js"
  },
  "/_nuxt/default.52dad637.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fd-Up+1Hgipt/9fIHnH7bAPWO3boWc\"",
    "mtime": "2025-06-19T08:20:37.478Z",
    "size": 509,
    "path": "../../.output/public/_nuxt/default.52dad637.css"
  },
  "/_nuxt/default.ae01aa9b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"69f-or3hNk0eoaWKjUvpQDSIi0fDTaM\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 1695,
    "path": "../../.output/public/_nuxt/default.ae01aa9b.js"
  },
  "/_nuxt/DefaultLayoutWithHorizontalNav.9862a91f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"58e3-jzlpYf7OdFxuY6uXZYtz4vAKGdc\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 22755,
    "path": "../../.output/public/_nuxt/DefaultLayoutWithHorizontalNav.9862a91f.js"
  },
  "/_nuxt/DefaultLayoutWithHorizontalNav.dab0f815.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b7-eOy5iZQLfTAhpcUi53sqWmKSCzA\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 1207,
    "path": "../../.output/public/_nuxt/DefaultLayoutWithHorizontalNav.dab0f815.css"
  },
  "/_nuxt/DefaultLayoutWithVerticalNav.02fd1f93.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40f1-Tap9zxerV3R08198rlPraBnHMsY\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 16625,
    "path": "../../.output/public/_nuxt/DefaultLayoutWithVerticalNav.02fd1f93.js"
  },
  "/_nuxt/deptManage.71a37fc2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1932-Pjg885uEwM7WbA0T85JcqIDlisA\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 6450,
    "path": "../../.output/public/_nuxt/deptManage.71a37fc2.js"
  },
  "/_nuxt/DialogCloseBtn.vue.6a53a760.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18a-G8toHOeQj6MtvDuWvA7dCrWJSHE\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 394,
    "path": "../../.output/public/_nuxt/DialogCloseBtn.vue.6a53a760.js"
  },
  "/_nuxt/eddEmp.bb62d1aa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"262c-X8NuOg/qf6UuVIJnFiSl9qwgz7I\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 9772,
    "path": "../../.output/public/_nuxt/eddEmp.bb62d1aa.js"
  },
  "/_nuxt/emp.1ff55ba3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fc-ishRpixKxdIIf/IECUY7onIfDTQ\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 508,
    "path": "../../.output/public/_nuxt/emp.1ff55ba3.js"
  },
  "/_nuxt/empDetail.8510a714.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2969-If1PPPOCgM7tzc4Rz+n4mX9+HAI\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 10601,
    "path": "../../.output/public/_nuxt/empDetail.8510a714.js"
  },
  "/_nuxt/empDetail.e5f4bf5d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"103-2GTU8c6yUcI7FzZGlAbKJifunCg\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 259,
    "path": "../../.output/public/_nuxt/empDetail.e5f4bf5d.js"
  },
  "/_nuxt/empDetail.vue.f59f3d68.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"642-2i4i0HSNqANe7fCOtr91s2xxxIo\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 1602,
    "path": "../../.output/public/_nuxt/empDetail.vue.f59f3d68.js"
  },
  "/_nuxt/empList.06ed28ea.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"782-Ar43wIsqD+bYWL+682lsJPmNWk0\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 1922,
    "path": "../../.output/public/_nuxt/empList.06ed28ea.js"
  },
  "/_nuxt/empProfile.03a2f997.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1188-setD/HUpNZRsD7np29aG1cfOkXw\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 4488,
    "path": "../../.output/public/_nuxt/empProfile.03a2f997.js"
  },
  "/_nuxt/entry.1dfc0890.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f086-5M9YXKcLVf1kYDw55FkHPMZkmfM\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 389254,
    "path": "../../.output/public/_nuxt/entry.1dfc0890.js"
  },
  "/_nuxt/entry.44efe366.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2759fb-tgCJQyCT254gy+cPXUhMeCZ06vE\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 2578939,
    "path": "../../.output/public/_nuxt/entry.44efe366.css"
  },
  "/_nuxt/extManage.3422bcd6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1720-X9N21gzGhY2bJ/VAjfU2J2OScOE\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 5920,
    "path": "../../.output/public/_nuxt/extManage.3422bcd6.js"
  },
  "/_nuxt/findEmp.0c5e48a1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"164d-H1O10IfDPnTkrRBduzYUf5z4Qaw\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 5709,
    "path": "../../.output/public/_nuxt/findEmp.0c5e48a1.js"
  },
  "/_nuxt/forwardRefs.6ea3df5c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aba-ZreOyJ3RCKWcPx+jop4RNG46PyU\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 2746,
    "path": "../../.output/public/_nuxt/forwardRefs.6ea3df5c.js"
  },
  "/_nuxt/holidayManage.ab7a61ff.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e88-CyoDyCdbcCHFAeTqYBJBj6BlMZQ\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 7816,
    "path": "../../.output/public/_nuxt/holidayManage.ab7a61ff.js"
  },
  "/_nuxt/I18n.0c925faf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"22f-xv2gIo0lpdY1dzr8I8AuSLtUJDA\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 559,
    "path": "../../.output/public/_nuxt/I18n.0c925faf.css"
  },
  "/_nuxt/I18n.vue.a69f7c68.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"222d-hzFhP8zYRaARmQLo368fxhWgBus\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 8749,
    "path": "../../.output/public/_nuxt/I18n.vue.a69f7c68.js"
  },
  "/_nuxt/index.1ed815ba.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"416-JQgOF4RtzeBcWoHBZdqytCS7Rms\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 1046,
    "path": "../../.output/public/_nuxt/index.1ed815ba.js"
  },
  "/_nuxt/index.25612823.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"462-LqExdpUYOWz4F98QMv76v/RCibQ\"",
    "mtime": "2025-06-19T08:20:37.496Z",
    "size": 1122,
    "path": "../../.output/public/_nuxt/index.25612823.js"
  },
  "/_nuxt/index.2aab3692.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"286-ugys5+RsSf+H3vmrZxwc2wTTfZk\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 646,
    "path": "../../.output/public/_nuxt/index.2aab3692.js"
  },
  "/_nuxt/index.5c05f772.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ff6-nEfbMBvkdqkT+uYFFTchzo3KHgo\"",
    "mtime": "2025-06-19T08:20:37.495Z",
    "size": 4086,
    "path": "../../.output/public/_nuxt/index.5c05f772.js"
  },
  "/_nuxt/index.5efb0d8b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eb8-kVfFLatAHg6yTjkT5z2fB6JDPfo\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 3768,
    "path": "../../.output/public/_nuxt/index.5efb0d8b.js"
  },
  "/_nuxt/index.6c508f2d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"103d-yWep4G8MFY4hdjIdqkF+O2AWqD0\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 4157,
    "path": "../../.output/public/_nuxt/index.6c508f2d.js"
  },
  "/_nuxt/index.9aeefb9c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"788-OOYT50T9KBAWa9n5Z7FuObJvtW4\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 1928,
    "path": "../../.output/public/_nuxt/index.9aeefb9c.js"
  },
  "/_nuxt/index.a8149d1d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"420-sF/K4t+bLzral2Og8cv67ZkxYO4\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 1056,
    "path": "../../.output/public/_nuxt/index.a8149d1d.js"
  },
  "/_nuxt/index.b07e800a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"168f-lBZySLiokRC6QSv/QFHDDllryk0\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 5775,
    "path": "../../.output/public/_nuxt/index.b07e800a.js"
  },
  "/_nuxt/index.dd6e2a2d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1160-eoh+8cHr1sPZgNwIQY7SH78bD/Y\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 4448,
    "path": "../../.output/public/_nuxt/index.dd6e2a2d.js"
  },
  "/_nuxt/issue.885f6db9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"289d-yywCm4T0dM+BTs+uyFnUuEerlBM\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 10397,
    "path": "../../.output/public/_nuxt/issue.885f6db9.js"
  },
  "/_nuxt/leave.c255fccb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2854-XqbEgFmNqM8CHskFvrUd4ThEawk\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 10324,
    "path": "../../.output/public/_nuxt/leave.c255fccb.js"
  },
  "/_nuxt/list.1afa0fe6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1067-31CJkEwE41ePmX3JBWlVNoJhJ1M\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 4199,
    "path": "../../.output/public/_nuxt/list.1afa0fe6.js"
  },
  "/_nuxt/list.cc9b0ecb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1175-sgp1x32YTZhxccom0RgE80gM63E\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 4469,
    "path": "../../.output/public/_nuxt/list.cc9b0ecb.js"
  },
  "/_nuxt/log.6265b221.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"952-bt0NX0yr+urYv4kkmSySmggZmE8\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 2386,
    "path": "../../.output/public/_nuxt/log.6265b221.js"
  },
  "/_nuxt/log.7935045b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a0d-5ibGryVd8ynBCSahvgnIahLjpS8\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 2573,
    "path": "../../.output/public/_nuxt/log.7935045b.js"
  },
  "/_nuxt/login.37b34e28.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"295-V9QBTVS+IANtwMggymL4cAlTUwQ\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 661,
    "path": "../../.output/public/_nuxt/login.37b34e28.css"
  },
  "/_nuxt/login.735c2d23.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"122c-Nrkk4l1JHmK7DY5emcI2Zob/N+0\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 4652,
    "path": "../../.output/public/_nuxt/login.735c2d23.js"
  },
  "/_nuxt/manage.13775c37.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f9b-rt0QnfCGhzbc9n7NXcucwVxn3h0\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 3995,
    "path": "../../.output/public/_nuxt/manage.13775c37.js"
  },
  "/_nuxt/manage.6c927018.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1108-v/B7mKA1umGTu7Go7IBs2j/4XDo\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 4360,
    "path": "../../.output/public/_nuxt/manage.6c927018.js"
  },
  "/_nuxt/manage.b00bda81.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1853-TtpZLbPFYeZzMd0ztjS103hE56g\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 6227,
    "path": "../../.output/public/_nuxt/manage.b00bda81.js"
  },
  "/_nuxt/manage.cc4a3f89.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25d7-ZxsFd+RhPsCOXPaafnwlL8dP21Y\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 9687,
    "path": "../../.output/public/_nuxt/manage.cc4a3f89.js"
  },
  "/_nuxt/manage.e78b67d1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2567-9sKABkSTVNGCDMasfUozqcR+sc0\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 9575,
    "path": "../../.output/public/_nuxt/manage.e78b67d1.js"
  },
  "/_nuxt/month.ad87a3de.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1279-6xwoEnA/tOFsn2LfL5spC1x9ilI\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 4729,
    "path": "../../.output/public/_nuxt/month.ad87a3de.js"
  },
  "/_nuxt/month.c43a5344.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26e1-FYXNQjvmFUYWT264ZB4GKIMs13I\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 9953,
    "path": "../../.output/public/_nuxt/month.c43a5344.js"
  },
  "/_nuxt/month.f2c60df6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24b2-3RKQNA+BbOSlaKGdjv9l5oR00zU\"",
    "mtime": "2025-06-19T08:20:37.497Z",
    "size": 9394,
    "path": "../../.output/public/_nuxt/month.f2c60df6.js"
  },
  "/_nuxt/overWork.6bd52fdf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"267e-+6BnWvrDuBDOe+qeOJm35gJtajo\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 9854,
    "path": "../../.output/public/_nuxt/overWork.6bd52fdf.js"
  },
  "/_nuxt/positionManage.b00b5742.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"638-TY0QPNHq6HZnrr/D/qNOaZK6E8U\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 1592,
    "path": "../../.output/public/_nuxt/positionManage.b00b5742.js"
  },
  "/_nuxt/presentCondition.6a9e4cf0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1007-DRBFHaWqafWRKeNaOE+WfdYDcMs\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 4103,
    "path": "../../.output/public/_nuxt/presentCondition.6a9e4cf0.js"
  },
  "/_nuxt/project.bfe4d563.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18d5-HWGbWtEi3hHMkYEf6yS/uB7cLL0\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 6357,
    "path": "../../.output/public/_nuxt/project.bfe4d563.js"
  },
  "/_nuxt/register.64b11d11.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f40-b5lZEsLcPHR/PzywE+BEXvayX+8\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 3904,
    "path": "../../.output/public/_nuxt/register.64b11d11.js"
  },
  "/_nuxt/register.e1d14511.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"139a-KIdYh5tDsPLAM+Po0od8O16tfo4\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 5018,
    "path": "../../.output/public/_nuxt/register.e1d14511.js"
  },
  "/_nuxt/registerEmpList.9bada390.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2428-DT5NKzrxaMv26FGtfbxH2WNIlqo\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 9256,
    "path": "../../.output/public/_nuxt/registerEmpList.9bada390.js"
  },
  "/_nuxt/request.5e16bdf4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1689-cbcl8N12qT3/qEAI0EGKOMFqxIM\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 5769,
    "path": "../../.output/public/_nuxt/request.5e16bdf4.js"
  },
  "/_nuxt/request.c22b228d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2494-0eiqW6TOt/HMuZywTUdxAqFQHXY\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 9364,
    "path": "../../.output/public/_nuxt/request.c22b228d.js"
  },
  "/_nuxt/rest.c804bee7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25d5-vcufkitMRPo300FqJqpuPtAgeL0\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 9685,
    "path": "../../.output/public/_nuxt/rest.c804bee7.js"
  },
  "/_nuxt/rest.fa658406.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f9-c1CTLWZIRhiyv1ZjBZy4FsetleA\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 505,
    "path": "../../.output/public/_nuxt/rest.fa658406.js"
  },
  "/_nuxt/salary.6e7c9dce.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19a0-LBA6HmeIe0tprEvJXcIpEqRYbwE\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 6560,
    "path": "../../.output/public/_nuxt/salary.6e7c9dce.js"
  },
  "/_nuxt/second-page.62f6d1de.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c8-a16Uhf5jNOjeTaVToiHcBLDS0ww\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 712,
    "path": "../../.output/public/_nuxt/second-page.62f6d1de.js"
  },
  "/_nuxt/severancePay.0bdac35e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10ea-b0OOkPzwfimjvB6grr40I575drE\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 4330,
    "path": "../../.output/public/_nuxt/severancePay.0bdac35e.js"
  },
  "/_nuxt/severancePay.afc2dd27.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1858-KIbq7etib8YRtcQI9M4Rd5U7t/s\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 6232,
    "path": "../../.output/public/_nuxt/severancePay.afc2dd27.js"
  },
  "/_nuxt/socialInsure.9526cf8b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5567-UBD3Ps3HOLo6z+Fl32TwIIU4zgs\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 21863,
    "path": "../../.output/public/_nuxt/socialInsure.9526cf8b.js"
  },
  "/_nuxt/travelAndEducationRequest.e5b87a48.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2557-2MpGwoyDXV227jhIbO/xgOhyBNk\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 9559,
    "path": "../../.output/public/_nuxt/travelAndEducationRequest.e5b87a48.js"
  },
  "/_nuxt/unauthorized.55f4c286.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f3-LA7RPfB+E7C5J2yTOcQA2d808wU\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 499,
    "path": "../../.output/public/_nuxt/unauthorized.55f4c286.js"
  },
  "/_nuxt/useSkins.16fcf985.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"65-igoShD9whGsTnxTk9G7tR3bSqBo\"",
    "mtime": "2025-06-19T08:20:37.478Z",
    "size": 101,
    "path": "../../.output/public/_nuxt/useSkins.16fcf985.css"
  },
  "/_nuxt/useSkins.a6a6d8a4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"380-dJU4A9avY5oX2/9ZW1Q+ocpOudU\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 896,
    "path": "../../.output/public/_nuxt/useSkins.a6a6d8a4.js"
  },
  "/_nuxt/VAlert.1b968a9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f7b-F9QIdLpkyki8Kfa0Bbsi5I4rIAk\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 3963,
    "path": "../../.output/public/_nuxt/VAlert.1b968a9b.css"
  },
  "/_nuxt/VAlert.d510c814.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bba-Qri+SrNRwq+XegQgDpCDFi8eGog\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 3002,
    "path": "../../.output/public/_nuxt/VAlert.d510c814.js"
  },
  "/_nuxt/VAvatar.2a21003b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39f-UoXmgZhBr2qf4wtI6uhqRoy4jw8\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 927,
    "path": "../../.output/public/_nuxt/VAvatar.2a21003b.js"
  },
  "/_nuxt/VAvatar.38e0a2ed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b7-u2EjGt+2LGVV5Va4+WpOOzcRCzc\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 1975,
    "path": "../../.output/public/_nuxt/VAvatar.38e0a2ed.css"
  },
  "/_nuxt/VCard.25dee8f1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1677-9ibtRgngBZa+OrcnX4pmd+1uc9Q\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 5751,
    "path": "../../.output/public/_nuxt/VCard.25dee8f1.css"
  },
  "/_nuxt/VCard.9d39ab92.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1118-9rnw7KHznE+abKiGDvH5id0vre4\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 4376,
    "path": "../../.output/public/_nuxt/VCard.9d39ab92.js"
  },
  "/_nuxt/VCheckbox.1ea139e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b-vJ3aTEYj+oFM3o/WsG+I/mJ2n2c\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 75,
    "path": "../../.output/public/_nuxt/VCheckbox.1ea139e1.css"
  },
  "/_nuxt/VCheckbox.f0b330b1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3bc-93UqeV16yUszHNpTvogCVrBQEb4\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 956,
    "path": "../../.output/public/_nuxt/VCheckbox.f0b330b1.js"
  },
  "/_nuxt/VCheckboxBtn.7df7b8f0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5727-v9P1ovHQThn8MK/cM9B4n3ZtAag\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 22311,
    "path": "../../.output/public/_nuxt/VCheckboxBtn.7df7b8f0.js"
  },
  "/_nuxt/VCheckboxBtn.a27dfc86.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6276-pEDqVdLIGuZ3JzY1eE2gFqzRo1Q\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 25206,
    "path": "../../.output/public/_nuxt/VCheckboxBtn.a27dfc86.css"
  },
  "/_nuxt/VCol.56e6ffca.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ac-9+lWo9vgSV0xht4hwhMfzcarCrI\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 1452,
    "path": "../../.output/public/_nuxt/VCol.56e6ffca.js"
  },
  "/_nuxt/VContainer.756d32e1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"190-vFo1RZwqp+vb2bDIj7CGuNF+190\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 400,
    "path": "../../.output/public/_nuxt/VContainer.756d32e1.js"
  },
  "/_nuxt/VDataTable.7cc5b423.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2459-TBjpsE0TeYvTSraSXZ395t02fFU\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 9305,
    "path": "../../.output/public/_nuxt/VDataTable.7cc5b423.css"
  },
  "/_nuxt/VDataTable.d1ba4617.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ebc-2+6cz1B1niUBMfdP0YwSepnlxa8\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 24252,
    "path": "../../.output/public/_nuxt/VDataTable.d1ba4617.js"
  },
  "/_nuxt/VDialog.173d9169.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80f-3Jps2aegpbFybQ8YzBhhU2/u0lw\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 2063,
    "path": "../../.output/public/_nuxt/VDialog.173d9169.css"
  },
  "/_nuxt/VDialog.b6443236.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"707-hzQAGXWedpGKbp0iJZDrz8iGyT4\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 1799,
    "path": "../../.output/public/_nuxt/VDialog.b6443236.js"
  },
  "/_nuxt/VDivider.d1296279.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"363-MhspLClID/zDLMaETVNvybt6cU0\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 867,
    "path": "../../.output/public/_nuxt/VDivider.d1296279.js"
  },
  "/_nuxt/VDivider.fc38186d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"212-2zbZWgmPnm3BHaXfgA4w27X/skI\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 530,
    "path": "../../.output/public/_nuxt/VDivider.fc38186d.css"
  },
  "/_nuxt/VForm.075cdcd0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"325-LmK/Yafa49cSgWXZYaX20Wi8lNA\"",
    "mtime": "2025-06-19T08:20:37.487Z",
    "size": 805,
    "path": "../../.output/public/_nuxt/VForm.075cdcd0.js"
  },
  "/_nuxt/VGrid.77e116d4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47e0-aCw+B+CuhX3OtsbCNX4aXU/izNk\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 18400,
    "path": "../../.output/public/_nuxt/VGrid.77e116d4.css"
  },
  "/_nuxt/VMenu.2e511fd8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a1c0-QR4PKyLl/fUkKYYHWqfWTZgVTmc\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 41408,
    "path": "../../.output/public/_nuxt/VMenu.2e511fd8.js"
  },
  "/_nuxt/VMenu.834d4565.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3461-3nhZrUxBsN56cIsdEw4dqplsdwY\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 13409,
    "path": "../../.output/public/_nuxt/VMenu.834d4565.css"
  },
  "/_nuxt/VNodeRenderer.4ddf4a5b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6-mNAiWZUxsIr35DhUEHJavJF1iN4\"",
    "mtime": "2025-06-19T08:20:37.495Z",
    "size": 166,
    "path": "../../.output/public/_nuxt/VNodeRenderer.4ddf4a5b.js"
  },
  "/_nuxt/VPagination.127b0577.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d5-918vLSBSctWxESc+mcCeHDw6F40\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 213,
    "path": "../../.output/public/_nuxt/VPagination.127b0577.css"
  },
  "/_nuxt/VPagination.622ffcd2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1634-b7oMpnwMr6YLX3LGnESmo3e3Pyo\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 5684,
    "path": "../../.output/public/_nuxt/VPagination.622ffcd2.js"
  },
  "/_nuxt/VRow.f081c54f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"616-4WjJfzYBRTZrYpcI+aXtRH3+cjw\"",
    "mtime": "2025-06-19T08:20:37.495Z",
    "size": 1558,
    "path": "../../.output/public/_nuxt/VRow.f081c54f.js"
  },
  "/_nuxt/VSelect.79599eec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2baf-JOhyXmpLGjfZdMO5KbEaH45r08k\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 11183,
    "path": "../../.output/public/_nuxt/VSelect.79599eec.css"
  },
  "/_nuxt/VSelect.ce97ab09.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cc4-JZP6PXNVZh90QiAu6hFMk35juOY\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 15556,
    "path": "../../.output/public/_nuxt/VSelect.ce97ab09.js"
  },
  "/_nuxt/VSnackbar.9d1f10b2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91c-x8q7IkD+K171sS9D1HE2WePnL54\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 2332,
    "path": "../../.output/public/_nuxt/VSnackbar.9d1f10b2.css"
  },
  "/_nuxt/VSnackbar.b9c88be7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"777-J82ZkQ42fBBuS12bAml14gRcOK4\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 1911,
    "path": "../../.output/public/_nuxt/VSnackbar.b9c88be7.js"
  },
  "/_nuxt/VSpacer.60bc430b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6f-mTS3gxs5ukH3/GY5xr+air1qwCU\"",
    "mtime": "2025-06-19T08:20:37.480Z",
    "size": 111,
    "path": "../../.output/public/_nuxt/VSpacer.60bc430b.js"
  },
  "/_nuxt/VTabs.15e7de7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9bb-m90QHJpdCzz0EPVjHs9O9KjgCyM\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 2491,
    "path": "../../.output/public/_nuxt/VTabs.15e7de7a.css"
  },
  "/_nuxt/VTabs.917385ff.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"226e-vk4d6vrA1hXwJLlCgHmWft/ZHQU\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 8814,
    "path": "../../.output/public/_nuxt/VTabs.917385ff.js"
  },
  "/_nuxt/VTextarea.50d3944d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48e-xNNHNgrNpF6llLezI9+hAw2lwRk\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 1166,
    "path": "../../.output/public/_nuxt/VTextarea.50d3944d.css"
  },
  "/_nuxt/VTextarea.638ea425.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1205-1OhWww7AmyRZPBuz9xXQjxxEQ4s\"",
    "mtime": "2025-06-19T08:20:37.513Z",
    "size": 4613,
    "path": "../../.output/public/_nuxt/VTextarea.638ea425.js"
  },
  "/_nuxt/VWindowItem.497ecbdb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1765-KDSp6X4L+qtk7eQOHen+Lgkdy68\"",
    "mtime": "2025-06-19T08:20:37.512Z",
    "size": 5989,
    "path": "../../.output/public/_nuxt/VWindowItem.497ecbdb.js"
  },
  "/_nuxt/VWindowItem.59c3a0b5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"743-JKnZXSGyQ5hZmi1qEZLeyYMIT8Q\"",
    "mtime": "2025-06-19T08:20:37.464Z",
    "size": 1859,
    "path": "../../.output/public/_nuxt/VWindowItem.59c3a0b5.css"
  },
  "/_nuxt/webfontloader.523643f5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31e0-NxvNdIdQYcgZfMpOI+gAZ1NfcJ4\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 12768,
    "path": "../../.output/public/_nuxt/webfontloader.523643f5.js"
  },
  "/_nuxt/xlsx.f5126985.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45926-6fxHDqJ68VegNbvI2/n4+0SbK/k\"",
    "mtime": "2025-06-19T08:20:37.501Z",
    "size": 284966,
    "path": "../../.output/public/_nuxt/xlsx.f5126985.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2025-06-19T08:20:37.479Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _VhuqAP = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_vtZBaK = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _VhuqAP, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_vtZBaK, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

export { useRuntimeConfig as a, useStorage as b, defineRenderHandler as d, getRouteRules as g, trapUnhandledNodeErrors as t, useNitroApp as u };
