import { defineComponent, ref, withCtx, unref, isRef, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard } from "../server.mjs";
import { V as VTabs, a as VTab } from "./VTabs-78beaebe.js";
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
import "./VCheckboxBtn-aab82c77.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "authManage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-0001") {
      router.push("/hr/confinement/unauthorized");
    }
    const headers = [
      { title: "비고", key: "remark" },
      { title: "권한코드번호", key: "authority_code_number" },
      { title: "권한코드이름", key: "authority_code_name" },
      { title: "권한레벨", key: "authority_level" }
    ];
    const items = [
      { remark: "관리자 권한", authority_code_number: "MA0001", authority_code_name: "MASTER", authority_level: "1" },
      { remark: "인사 권한", authority_code_number: "HR0001", authority_code_name: "HUMAN_RESOURCE", authority_level: "1" },
      { remark: "회계 권한", authority_code_number: "AC0001", authority_code_name: "ACCOUNT", authority_level: "1" },
      { remark: "물류 권한", authority_code_number: "LOGI0001", authority_code_name: "LOGISTICS", authority_level: "1" }
    ];
    const tab = ref("personal-info");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">권한관리</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
              height: "70"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: "personal-info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 권한관리 `);
                      } else {
                        return [
                          createTextVNode(" 권한관리 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 권한관리 ")
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
              createVNode(VTabs, {
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                height: "70"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: "personal-info" }, {
                    default: withCtx(() => [
                      createTextVNode(" 권한관리 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(VDataTable), {
        headers,
        items,
        "items-per-page": 5
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/base/authManage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
