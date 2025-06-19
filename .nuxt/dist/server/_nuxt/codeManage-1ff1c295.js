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
  __name: "codeManage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const headers = [
      { title: "코드분할번호", key: "division_code_no" },
      { title: "코드타입", key: "code_type" },
      { title: "분할코드명", key: "division_code_name" },
      { title: "코드변경사항", key: "code_change_available" },
      { title: "정규분포", key: "description" }
    ];
    const items = [
      { division_code_no: "CO-02", code_type: "공통", division_code_name: "사업장", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "CO-03", code_type: "공통", division_code_name: "부서", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "CO-04", code_type: "공통", division_code_name: "창고", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "HR-01", code_type: "공통", division_code_name: "직급", code_change_available: "변경가능", description: "null" },
      { division_code_no: "HR-02", code_type: "공통", division_code_name: "사원", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "CL-01", code_type: "공통", division_code_name: "거래처", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "CL-02", code_type: "회계", division_code_name: "금융거래처", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "IT", code_type: "구매", division_code_name: "품목구분", code_change_available: "변경가능", description: "null" },
      { division_code_no: "IT-CI", code_type: "구매", division_code_name: "완제품", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "IT-SI", code_type: "구매", division_code_name: "반제품", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "IT-MA", code_type: "구매", division_code_name: "원재료", code_change_available: "변경불가능", description: "null" },
      { division_code_no: "CT", code_type: "영업", division_code_name: "수주 유형 분류", code_change_available: "변경가능", description: "null" },
      { division_code_no: "DT", code_type: "영업", division_code_name: "납품 여부 분류", code_change_available: "변경가능", description: "null" },
      { division_code_no: "IT-GROUP", code_type: "구매", division_code_name: "품목군 구분", code_change_available: "변경불가능", description: "null" }
    ];
    const tab = ref("personal-info");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">코드조회</h1>`);
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
                        _push4(` 코드조회 `);
                      } else {
                        return [
                          createTextVNode(" 코드조회 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "personal-info" }, {
                      default: withCtx(() => [
                        createTextVNode(" 코드조회 ")
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
                      createTextVNode(" 코드조회 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/base/codeManage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
