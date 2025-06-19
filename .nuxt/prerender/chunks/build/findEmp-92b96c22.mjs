import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, unref, toRaw, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { u as useDepartmentStore, a as usePositionStore } from './index-1216d084.mjs';
import { u as useEmpStore } from './index-fbfe3a36.mjs';
import _sfc_main$1 from './empDetail-45f96c46.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VCard, g as VCardTitle, m as VSpacer, b as VBtn, l as VDialog } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VSelect } from './VSelect-03a0285c.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@antfu+utils@0.7.6/node_modules/@antfu/utils/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue3-perfect-scrollbar@1.6.1_postcss@8.5.3/node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.cjs.js';
import '../_/nitro.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "findEmp",
  __ssrInlineRender: true,
  setup(__props) {
    useDepartmentStore();
    usePositionStore();
    const empStore = useEmpStore();
    const modalValue = ref(false);
    const selectedEmpCode = ref(null);
    const onRowClick = (event, item) => {
      selectedEmpCode.value = item.item.empCode;
      modalValue.value = true;
    };
    const closeDetailModal = () => {
      modalValue.value = false;
      selectedEmpCode.value = null;
    };
    const searchOptions = [
      "\uBD80\uC11C",
      "\uC9C1\uAE09",
      "\uACC4\uC57D",
      "\uC0AC\uC6D0 \uBC88\uD638",
      "\uC774\uB984"
    ];
    const onMainOptionChange = () => {
      if (searchOption.value === "\uC0AC\uC6D0 \uBC88\uD638" || searchOption.value === "\uC774\uB984") {
        isNextSearch.value = true;
        isSearch.value = false;
      } else {
        isSearch.value = true;
      }
    };
    const onSubOptionChange = (newValue) => {
      console.log("\uC120\uD0DD\uB41C \uC138\uBD80 \uC635\uC158:", newValue);
      const selectedDept = toRaw(department.value.find((dept) => dept.deptName === newValue));
      console.log("selectedDept", selectedDept);
      const selectedPosition = toRaw(position.value.find((postion) => postion.positionName === newValue));
      console.log("selectedPosition", selectedPosition);
      if (selectedDept !== void 0) {
        deptCode.value = selectedDept.deptCode;
        console.log("\uC120\uD0DD\uB41C \uBD80\uC11C \uCF54\uB4DC:", deptCode.value);
      } else {
        deptCode.value = "";
      }
      if (selectedPosition !== void 0) {
        positionCode.value = selectedPosition.positionCode;
        console.log("\uC120\uD0DD\uB41C \uC9C1\uAE09 \uCF54\uB4DC:", positionCode.value);
      }
      isNextSearch.value = true;
      isSearch.value = false;
    };
    const searchOption = ref("");
    const searchSubOption = ref("");
    const searchWord = ref("");
    const pageSize = ref(10);
    const lastRowNum = ref(0);
    const isSearch = ref(true);
    ref(false);
    const isNextSearch = ref(true);
    const department = ref({});
    const deptCode = ref("");
    const position = ref({});
    const positionCode = ref("");
    const employeeList = ref([]);
    const departmentList = ref([]);
    const positionList = ref([]);
    const contractList = ["\uC815\uADDC\uC9C1", "\uACC4\uC57D\uC9C1", "\uC778\uD134"];
    const tableHeaders = [
      { title: "\uBC88\uD638", key: "rnum" },
      { title: "\uC0AC\uC6D0\uCF54\uB4DC", key: "empCode" },
      { title: "\uC774\uB984", key: "empName" },
      { title: "\uCD9C\uC0DD\uB144\uB3C4", key: "birthDate" },
      { title: "\uC131\uBCC4", key: "gender" },
      { title: "\uC804\uD654\uBC88\uD638", key: "phoneNumber" },
      { title: "\uBD80\uC11C", key: "deptName" },
      { title: "\uC9C1\uAE09", key: "positionName" },
      { title: "\uACC4\uC57D", key: "empType" },
      { title: "\uC0C1\uD0DC", key: "empStatus" }
    ];
    const shouldShowSubOption = computed(
      () => ["\uBD80\uC11C", "\uC9C1\uAE09", "\uACC4\uC57D"].includes(searchOption.value)
    );
    const shouldShowKeywordInput = computed(
      () => ["\uC0AC\uC6D0 \uBC88\uD638", "\uC774\uB984", "\uC804\uCCB4"].includes(searchOption.value)
    );
    const subOptionItems = computed(() => {
      switch (searchOption.value) {
        case "\uBD80\uC11C":
          return departmentList.value;
        case "\uC9C1\uAE09":
          return positionList.value;
        case "\uACC4\uC57D":
          return contractList;
        default:
          return [];
      }
    });
    const handleSearch = async () => {
      const empSearchCondition = {
        searchCondition: searchOption.value,
        //메인 검색 옵션
        deptCode: deptCode.value,
        //부서 코드
        positionCode: positionCode.value,
        //직급 코드
        contract: searchSubOption.value,
        //세부 옵션에서 선택한 것
        size: pageSize.value + 1,
        //검색 단위
        searchWord: searchWord.value
        //검색 단어
      };
      const res = ref([]);
      console.log("\uAC80\uC0C9 \uC870\uAC74:", empSearchCondition);
      await empStore.GET_EMP_LIST(empSearchCondition);
      res.value = [];
      res.value = [...empStore.empList];
      if (res.value.length > pageSize.value) {
        isNextSearch.value = false;
        employeeList.value = res.value.slice(0, pageSize.value);
        lastRowNum.value = pageSize.value;
      } else {
        isNextSearch.value = false;
        employeeList.value = [...res.value];
        lastRowNum.value = res.value.length;
      }
      if (res.value.length === 0) {
        alert("\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        isNextSearch.value = true;
      }
    };
    const handleNextSearch = async () => {
      const empListNextSearchData = {
        searchCondition: searchOption.value,
        //메인 검색 옵션
        deptCode: deptCode.value,
        //부서 코드
        positionCode: positionCode.value,
        //직급 코드
        contract: searchSubOption.value,
        //세부 옵션에서 선택한 것
        size: pageSize.value + 1,
        //검색 단위
        searchWord: searchWord.value,
        //검색 단어
        lastRowNum: lastRowNum.value
        //마지막 검색 항목 번호
      };
      const res = ref([]);
      console.log("\uAC80\uC0C9 \uC870\uAC74:", empListNextSearchData);
      await empStore.GET_EMP_LIST_NEXT_SEARCH(empListNextSearchData);
      res.value = [];
      res.value = [...empStore.empList];
      if (res.value.length > pageSize.value) {
        isNextSearch.value = false;
        employeeList.value = [...employeeList.value, ...res.value.slice(0, pageSize.value)];
        lastRowNum.value = employeeList.value.length;
        return;
      } else if (res.value.length !== 0) {
        employeeList.value = [...employeeList.value, ...res.value];
        lastRowNum.value = employeeList.value.length;
        return;
      } else if (res.value.length == 0) {
        isNextSearch.value = true;
        alert("\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        return;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "mt-6 pa-6 elevation-2",
              style: { "border-radius": "8px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h6 font-weight-bold mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC9C1\uC6D0 \uAC80\uC0C9 `);
                      } else {
                        return [
                          createTextVNode(" \uC9C1\uC6D0 \uAC80\uC0C9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, {
                    class: "align-center",
                    dense: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: searchOption.value,
                                "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                                items: searchOptions,
                                label: "\uAC80\uC0C9 \uC635\uC158",
                                variant: "outlined",
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: searchOption.value,
                                  "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                                  items: searchOptions,
                                  label: "\uAC80\uC0C9 \uC635\uC158",
                                  variant: "outlined",
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: searchSubOption.value,
                                "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                                items: subOptionItems.value,
                                label: "\uC138\uBD80 \uC635\uC158",
                                variant: "outlined",
                                disabled: !shouldShowSubOption.value,
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: searchSubOption.value,
                                  "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                                  items: subOptionItems.value,
                                  label: "\uC138\uBD80 \uC635\uC158",
                                  variant: "outlined",
                                  disabled: !shouldShowSubOption.value,
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: searchWord.value,
                                "onUpdate:modelValue": ($event) => searchWord.value = $event,
                                label: "\uAC80\uC0C9\uC5B4 \uC785\uB825",
                                variant: "outlined",
                                disabled: !shouldShowKeywordInput.value,
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: searchWord.value,
                                  "onUpdate:modelValue": ($event) => searchWord.value = $event,
                                  label: "\uAC80\uC0C9\uC5B4 \uC785\uB825",
                                  variant: "outlined",
                                  disabled: !shouldShowKeywordInput.value,
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: pageSize.value,
                                "onUpdate:modelValue": ($event) => pageSize.value = $event,
                                items: [2, 5, 10, 25, 50, 100],
                                label: "\uAC80\uC0C9 \uB2E8\uC704",
                                variant: "outlined",
                                dense: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: pageSize.value,
                                  "onUpdate:modelValue": ($event) => pageSize.value = $event,
                                  items: [2, 5, 10, 25, 50, 100],
                                  label: "\uAC80\uC0C9 \uB2E8\uC704",
                                  variant: "outlined",
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleSearch,
                                disabled: isSearch.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uAC80\uC0C9 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uAC80\uC0C9 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-white",
                                  onClick: handleSearch,
                                  disabled: isSearch.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uAC80\uC0C9 ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleNextSearch,
                                disabled: isNextSearch.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uB2E4\uC74C \uAC80\uC0C9 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uB2E4\uC74C \uAC80\uC0C9 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-white",
                                  onClick: handleNextSearch,
                                  disabled: isNextSearch.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB2E4\uC74C \uAC80\uC0C9 ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: searchOption.value,
                                "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                                items: searchOptions,
                                label: "\uAC80\uC0C9 \uC635\uC158",
                                variant: "outlined",
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: searchSubOption.value,
                                "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                                items: subOptionItems.value,
                                label: "\uC138\uBD80 \uC635\uC158",
                                variant: "outlined",
                                disabled: !shouldShowSubOption.value,
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: searchWord.value,
                                "onUpdate:modelValue": ($event) => searchWord.value = $event,
                                label: "\uAC80\uC0C9\uC5B4 \uC785\uB825",
                                variant: "outlined",
                                disabled: !shouldShowKeywordInput.value,
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: pageSize.value,
                                "onUpdate:modelValue": ($event) => pageSize.value = $event,
                                items: [2, 5, 10, 25, 50, 100],
                                label: "\uAC80\uC0C9 \uB2E8\uC704",
                                variant: "outlined",
                                dense: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleSearch,
                                disabled: isSearch.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uAC80\uC0C9 ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "text-white",
                                onClick: handleNextSearch,
                                disabled: isNextSearch.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uB2E4\uC74C \uAC80\uC0C9 ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "text-h6 font-weight-bold mb-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC9C1\uC6D0 \uAC80\uC0C9 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, {
                      class: "align-center",
                      dense: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: searchOption.value,
                              "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                              items: searchOptions,
                              label: "\uAC80\uC0C9 \uC635\uC158",
                              variant: "outlined",
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: searchSubOption.value,
                              "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                              items: subOptionItems.value,
                              label: "\uC138\uBD80 \uC635\uC158",
                              variant: "outlined",
                              disabled: !shouldShowSubOption.value,
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: searchWord.value,
                              "onUpdate:modelValue": ($event) => searchWord.value = $event,
                              label: "\uAC80\uC0C9\uC5B4 \uC785\uB825",
                              variant: "outlined",
                              disabled: !shouldShowKeywordInput.value,
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: pageSize.value,
                              "onUpdate:modelValue": ($event) => pageSize.value = $event,
                              items: [2, 5, 10, 25, 50, 100],
                              label: "\uAC80\uC0C9 \uB2E8\uC704",
                              variant: "outlined",
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer),
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "text-white",
                              onClick: handleSearch,
                              disabled: isSearch.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uAC80\uC0C9 ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "auto" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "text-white",
                              onClick: handleNextSearch,
                              disabled: isNextSearch.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uB2E4\uC74C \uAC80\uC0C9 ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "elevation-1 mt-6",
              style: { "background": "white", "border-radius": "8px", "min-height": "300px" },
              headers: tableHeaders,
              items: employeeList.value,
              "item-value": "empCode",
              "onClick:row": onRowClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "mt-6 pa-6 elevation-2",
                style: { "border-radius": "8px" }
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6 font-weight-bold mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC9C1\uC6D0 \uAC80\uC0C9 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, {
                    class: "align-center",
                    dense: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: searchOption.value,
                            "onUpdate:modelValue": [($event) => searchOption.value = $event, onMainOptionChange],
                            items: searchOptions,
                            label: "\uAC80\uC0C9 \uC635\uC158",
                            variant: "outlined",
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: searchSubOption.value,
                            "onUpdate:modelValue": [($event) => searchSubOption.value = $event, onSubOptionChange],
                            items: subOptionItems.value,
                            label: "\uC138\uBD80 \uC635\uC158",
                            variant: "outlined",
                            disabled: !shouldShowSubOption.value,
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: searchWord.value,
                            "onUpdate:modelValue": ($event) => searchWord.value = $event,
                            label: "\uAC80\uC0C9\uC5B4 \uC785\uB825",
                            variant: "outlined",
                            disabled: !shouldShowKeywordInput.value,
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: pageSize.value,
                            "onUpdate:modelValue": ($event) => pageSize.value = $event,
                            items: [2, 5, 10, 25, 50, 100],
                            label: "\uAC80\uC0C9 \uB2E8\uC704",
                            variant: "outlined",
                            dense: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-white",
                            onClick: handleSearch,
                            disabled: isSearch.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uAC80\uC0C9 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-white",
                            onClick: handleNextSearch,
                            disabled: isNextSearch.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uB2E4\uC74C \uAC80\uC0C9 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(VDataTable), {
                class: "elevation-1 mt-6",
                style: { "background": "white", "border-radius": "8px", "min-height": "300px" },
                headers: tableHeaders,
                items: employeeList.value,
                "item-value": "empCode",
                "onClick:row": onRowClick
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: modalValue.value,
        "onUpdate:modelValue": ($event) => modalValue.value = $event,
        "max-width": "600px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              empCode: selectedEmpCode.value,
              onClose: closeDetailModal
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                empCode: selectedEmpCode.value,
                onClose: closeDetailModal
              }, null, 8, ["empCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiztech/hr/emp/findEmp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
