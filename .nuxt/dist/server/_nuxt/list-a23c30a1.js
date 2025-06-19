import { defineComponent, ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./index-77616e20.js";
import { e as evalStore } from "./index-af2be6da.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, b as VBtn, f as VCardText } from "../server.mjs";
import { V as VSelect } from "./VSelect-03a0285c.js";
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
import "./VCheckboxBtn-aab82c77.js";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const store = evalStore();
    const searchYear = ref("");
    const searchEmp = ref("");
    const searchDept = ref("");
    const yearList = ref([]);
    const deptList = ref([]);
    const empList = ref([]);
    const evalList = ref([]);
    const headers = [
      { title: "이름", key: "empName" },
      { title: "부서", key: "deptName" },
      { title: "직급", key: "positionName" },
      { title: "교육", key: "durationOfTraining" },
      { title: "자격증", key: "numberOfCertificate" },
      { title: "근태", key: "numberOfRestDay" },
      { title: "휴가", key: "remainingHoliday" },
      { title: "결격여부", key: "disqualification" },
      { title: "장기근속", key: "career" },
      { title: "총 점수", key: "score" },
      { title: "등급", key: "grade" }
    ];
    const searchEmpEval = async () => {
      const evalEmpData = {
        searchYear: searchYear.value,
        empCode: searchEmp.value
      };
      await store.SEARCH_EMP_EVAL(evalEmpData);
      evalList.value = await store.evalList;
    };
    const searchDeptEval = async () => {
      const empEvalDeptData = {
        searchYear: searchYear.value,
        deptCode: searchDept.value
      };
      console.log(empEvalDeptData);
      await store.SEARCH_EMP_EVAL_DEPT(empEvalDeptData);
      evalList.value = await store.evalList;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-6">인사고과 조회</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSelect, {
              modelValue: searchYear.value,
              "onUpdate:modelValue": ($event) => searchYear.value = $event,
              class: "ma-3",
              label: "검색년도",
              items: yearList.value,
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSelect, {
              modelValue: searchDept.value,
              "onUpdate:modelValue": ($event) => searchDept.value = $event,
              class: "ma-3",
              label: "부서명",
              items: deptList.value,
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSelect, {
              modelValue: searchEmp.value,
              "onUpdate:modelValue": ($event) => searchEmp.value = $event,
              class: "ma-3",
              label: "사원명",
              items: empList.value,
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              class: "ml-3",
              color: "primary",
              onClick: searchEmpEval
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 사원 조회 `);
                } else {
                  return [
                    createTextVNode(" 사원 조회 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              class: "ml-3",
              variant: "tonal",
              onClick: searchDeptEval
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 부서 조회 `);
                } else {
                  return [
                    createTextVNode(" 부서 조회 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mt-10",
              headers,
              items: evalList.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSelect, {
                modelValue: searchYear.value,
                "onUpdate:modelValue": ($event) => searchYear.value = $event,
                class: "ma-3",
                label: "검색년도",
                items: yearList.value,
                variant: "outlined"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(VSelect, {
                modelValue: searchDept.value,
                "onUpdate:modelValue": ($event) => searchDept.value = $event,
                class: "ma-3",
                label: "부서명",
                items: deptList.value,
                variant: "outlined"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(VSelect, {
                modelValue: searchEmp.value,
                "onUpdate:modelValue": ($event) => searchEmp.value = $event,
                class: "ma-3",
                label: "사원명",
                items: empList.value,
                variant: "outlined"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(VBtn, {
                class: "ml-3",
                color: "primary",
                onClick: searchEmpEval
              }, {
                default: withCtx(() => [
                  createTextVNode(" 사원 조회 ")
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                class: "ml-3",
                variant: "tonal",
                onClick: searchDeptEval
              }, {
                default: withCtx(() => [
                  createTextVNode(" 부서 조회 ")
                ]),
                _: 1
              }),
              createVNode(unref(VDataTable), {
                class: "mt-10",
                headers,
                items: evalList.value
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(VCard, { title: "<등급 산정 기준>" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>근태</span><p${_scopeId2}>결근 없음, +20 / 1~2일 결근, +16 / 3~4일 결근, +12 / 5일 이상 결근, +8 / 자주 지각, +10 이하</p><span${_scopeId2}>직급</span><p${_scopeId2}>사원, +10 / 대리, +12 / 과장, +15 / 차장, +18 / 부장 이상, +20</p><span${_scopeId2}>결격(징계 등)여부</span><p${_scopeId2}>결격 사유 없음, +10 / 결격 사유 있음, +0</p><span${_scopeId2}>교육이수</span><p${_scopeId2}>직무 관련 교육 이수 5회 이상, +15 / 직무 관련 교육 이수 3~4회, +10 / 직무 관련 교육 이수 1~2회, +6 / 직무 관련 교육 이수내역 없음, +0</p><span${_scopeId2}>근속년수</span><p${_scopeId2}>10년 이상, +10 / 5~9년 근속, +7 / 1~4년 근속, +5 / 1년 미만 근속, +2</p><span${_scopeId2}>자격증</span><p${_scopeId2}>직무 관련 자격증 보유, +15 / 일부 관련 자격증 보유, +6 / 자격증 없음, +0</p><span${_scopeId2}>휴가 사용</span><p${_scopeId2}>휴가 사용 적절, +10 / 과도한 휴가 사용, +5 / 휴가 사용 적지 않음, +2</p><span${_scopeId2}>등급산정</span><p${_scopeId2}> 90점 이상, S / 90점 미만 ~ 80점 이상, A / 80점 미만 ~ 70점 이상, B / 70점 미만 ~ 60점 이상, C / 60점 미만 ~ 50점 이상, D / 50점 미만, E </p>`);
                } else {
                  return [
                    createVNode("span", null, "근태"),
                    createVNode("p", null, "결근 없음, +20 / 1~2일 결근, +16 / 3~4일 결근, +12 / 5일 이상 결근, +8 / 자주 지각, +10 이하"),
                    createVNode("span", null, "직급"),
                    createVNode("p", null, "사원, +10 / 대리, +12 / 과장, +15 / 차장, +18 / 부장 이상, +20"),
                    createVNode("span", null, "결격(징계 등)여부"),
                    createVNode("p", null, "결격 사유 없음, +10 / 결격 사유 있음, +0"),
                    createVNode("span", null, "교육이수"),
                    createVNode("p", null, "직무 관련 교육 이수 5회 이상, +15 / 직무 관련 교육 이수 3~4회, +10 / 직무 관련 교육 이수 1~2회, +6 / 직무 관련 교육 이수내역 없음, +0"),
                    createVNode("span", null, "근속년수"),
                    createVNode("p", null, "10년 이상, +10 / 5~9년 근속, +7 / 1~4년 근속, +5 / 1년 미만 근속, +2"),
                    createVNode("span", null, "자격증"),
                    createVNode("p", null, "직무 관련 자격증 보유, +15 / 일부 관련 자격증 보유, +6 / 자격증 없음, +0"),
                    createVNode("span", null, "휴가 사용"),
                    createVNode("p", null, "휴가 사용 적절, +10 / 과도한 휴가 사용, +5 / 휴가 사용 적지 않음, +2"),
                    createVNode("span", null, "등급산정"),
                    createVNode("p", null, " 90점 이상, S / 90점 미만 ~ 80점 이상, A / 80점 미만 ~ 70점 이상, B / 70점 미만 ~ 60점 이상, C / 60점 미만 ~ 50점 이상, D / 50점 미만, E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("span", null, "근태"),
                  createVNode("p", null, "결근 없음, +20 / 1~2일 결근, +16 / 3~4일 결근, +12 / 5일 이상 결근, +8 / 자주 지각, +10 이하"),
                  createVNode("span", null, "직급"),
                  createVNode("p", null, "사원, +10 / 대리, +12 / 과장, +15 / 차장, +18 / 부장 이상, +20"),
                  createVNode("span", null, "결격(징계 등)여부"),
                  createVNode("p", null, "결격 사유 없음, +10 / 결격 사유 있음, +0"),
                  createVNode("span", null, "교육이수"),
                  createVNode("p", null, "직무 관련 교육 이수 5회 이상, +15 / 직무 관련 교육 이수 3~4회, +10 / 직무 관련 교육 이수 1~2회, +6 / 직무 관련 교육 이수내역 없음, +0"),
                  createVNode("span", null, "근속년수"),
                  createVNode("p", null, "10년 이상, +10 / 5~9년 근속, +7 / 1~4년 근속, +5 / 1년 미만 근속, +2"),
                  createVNode("span", null, "자격증"),
                  createVNode("p", null, "직무 관련 자격증 보유, +15 / 일부 관련 자격증 보유, +6 / 자격증 없음, +0"),
                  createVNode("span", null, "휴가 사용"),
                  createVNode("p", null, "휴가 사용 적절, +10 / 과도한 휴가 사용, +5 / 휴가 사용 적지 않음, +2"),
                  createVNode("span", null, "등급산정"),
                  createVNode("p", null, " 90점 이상, S / 90점 미만 ~ 80점 이상, A / 80점 미만 ~ 70점 이상, B / 70점 미만 ~ 60점 이상, C / 60점 미만 ~ 50점 이상, D / 50점 미만, E ")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/empeval/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
