import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { a as affairStore } from "./index-4eaf1d02.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard } from "../server.mjs";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
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
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "log",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    affairStore();
    const searchQuery = ref("");
    const headers = [
      { title: "발령번호", key: "appointNo" },
      { title: "사번", key: "empCode" },
      { title: "직원명", key: "empName" },
      { title: "부서", key: "deptName" },
      { title: "발령부서", key: "appointDept" },
      { title: "직급", key: "positionName" },
      { title: "발령직급", key: "appointLevel" },
      { title: "근무지", key: "workPlaceName" },
      { title: "발령근무지", key: "appointWP" },
      { title: "승인상태", key: "status" }
    ];
    const appointmentsLog = ref([]);
    const handleSearch = () => {
      console.log("Searching:", searchQuery.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-6">인사발령 이력</h1>`);
      _push(ssrRenderComponent(VCard, { class: "mt-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              density: "compact",
              placeholder: "직원 정보 검색",
              "append-inner-icon": "tabler-search",
              "single-line": "",
              "hide-details": "",
              dense: "",
              outlined: "",
              onInput: handleSearch
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              modelValue: _ctx.selectedRows,
              "onUpdate:modelValue": ($event) => _ctx.selectedRows = $event,
              headers,
              items: appointmentsLog.value,
              "items-per-page": 5,
              "footer-props": {
                "items-per-page-options": [5, 10, 20],
                "show-current-page": true,
                "show-first-last-page": true
              },
              search: searchQuery.value,
              align: "center",
              "show-select": "",
              "item-value": "appointNo",
              "return-object": ""
            }, {
              "item.empCode": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.empCode)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.empCode), 1)
                  ];
                }
              }),
              "item.empName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.empName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.empName), 1)
                  ];
                }
              }),
              "item.deptName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.deptName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.deptName), 1)
                  ];
                }
              }),
              "item.appointDept": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.appointDept)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.appointDept), 1)
                  ];
                }
              }),
              "item.appointWP": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.appointWP)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.appointWP), 1)
                  ];
                }
              }),
              "item.appointLevel": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.appointLevel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.appointLevel), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.status), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextField, {
                modelValue: searchQuery.value,
                "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                density: "compact",
                placeholder: "직원 정보 검색",
                "append-inner-icon": "tabler-search",
                "single-line": "",
                "hide-details": "",
                dense: "",
                outlined: "",
                onInput: handleSearch
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(VDataTable), {
                modelValue: _ctx.selectedRows,
                "onUpdate:modelValue": ($event) => _ctx.selectedRows = $event,
                headers,
                items: appointmentsLog.value,
                "items-per-page": 5,
                "footer-props": {
                  "items-per-page-options": [5, 10, 20],
                  "show-current-page": true,
                  "show-first-last-page": true
                },
                search: searchQuery.value,
                align: "center",
                "show-select": "",
                "item-value": "appointNo",
                "return-object": ""
              }, {
                "item.empCode": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.empCode), 1)
                ]),
                "item.empName": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.empName), 1)
                ]),
                "item.deptName": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.deptName), 1)
                ]),
                "item.appointDept": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.appointDept), 1)
                ]),
                "item.appointWP": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.appointWP), 1)
                ]),
                "item.appointLevel": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.appointLevel), 1)
                ]),
                "item.status": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.status), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items", "search"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/appo/log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
