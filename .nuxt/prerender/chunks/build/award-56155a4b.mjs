import { _ as _sfc_main$1 } from './AppSelect-04d0f8a2.mjs';
import { _ as _sfc_main$2 } from './DialogCloseBtn-438c6daf.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, isRef, toDisplayString, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { p as paginationMeta, V as VPagination } from './VPagination-fe9c4821.mjs';
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, l as VDialog, n as attenStore } from './server.mjs';
import { s as salaryStore } from './index-cfe0baa7.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import './VCheckboxBtn-aab82c77.mjs';
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "award",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
      router.push("/hr/confinement/unauthorized");
    }
    const isSuccessFunc = ref(false);
    const isinputPersonalBonus = ref(false);
    const isinputDetpBonus = ref(false);
    const selectedEmp = ref("");
    const selectedRatio = ref("");
    const selectedDept = ref("");
    const selectedRows = ref([]);
    const deptlistDetail = ref([]);
    const bonusList = ref([]);
    const empList = ref([]);
    const today = ref("");
    const lastMonth = ref("");
    const isDialogVisible1 = ref(false);
    const isDialogVisible2 = ref(false);
    const headers = [
      { title: "\uD574\uB2F9 \uB144\uC6D4", key: "applyYearMonth", align: "center" },
      { title: "\uC0AC\uC6D0 \uBA85", key: "empName", align: "center" },
      { title: "\uC9C0\uAE09\uC561", key: "bonus", align: "center" },
      { title: "\uBD84\uB958", key: "detailCodeName", align: "center" },
      { title: "\uC2B9\uC778\uC0C1\uD0DC", key: "finalizeStatus", align: "center" }
    ];
    const percent = [
      { title: "100%", value: 1 },
      { title: "200%", value: 2 },
      { title: "300%", value: 3 },
      { title: "400%", value: 4 },
      { title: "500%", value: 5 }
    ];
    const findBonus = async () => {
      const date = /* @__PURE__ */ new Date();
      today.value = `${date.getFullYear()}-${date.getMonth() + 1}`;
      lastMonth.value = `${date.getFullYear()}-${date.getMonth()}`;
      const initData = {
        applyYearMonth: today.value,
        empCode: "%",
        detailCodeName: "\uC131\uACFC\uAE09",
        finalizeStatus: "%"
      };
      await salaryStore().FIND_BONUS(initData);
      bonusList.value = await salaryStore().bonusList;
    };
    const inputPersonalBonus = async () => {
      if (selectedEmp.value === "" || selectedRatio.value === "" || selectedEmp.value === null || selectedRatio.value === null) {
        isinputPersonalBonus.value = true;
      } else {
        const salData = {
          applyYearMonth: lastMonth.value,
          empCode: selectedEmp.value.empCode
        };
        await salaryStore().SEARCH_SALARY_INIT(salData);
        const newPersonalBonus = {
          applyYearMonth: today.value,
          empName: selectedEmp.value.empName,
          empCode: selectedEmp.value.empCode,
          bonus: salaryStore().initSalaryList[0].salary * selectedRatio.value,
          bonusCode: "BON002",
          detailCodeName: "\uC131\uACFC\uAE09",
          finalizeStatus: "N"
        };
        selectedEmp.value = "";
        selectedRatio.value = "";
        await salaryStore().ADD_BONUS(newPersonalBonus);
        await findBonus();
        isDialogVisible1.value = false;
        isSuccessFunc.value = true;
      }
    };
    const inputDetpBonus = async () => {
      if (selectedDept.value === "" || selectedRatio.value === "" || selectedDept.value === null || selectedRatio.value === null) {
        isinputDetpBonus.value = true;
      } else {
        await attenStore().FETCH_EMPLIST_BY_DEPT(selectedDept.value.empCode);
        for (const e of attenStore().empList) {
          const salDate = {
            applyYearMonth: lastMonth.value,
            empCode: e.empCode
          };
          await salaryStore().SEARCH_SALARY_INIT(salDate);
          const newPersonalBonus = {
            applyYearMonth: today.value,
            empName: e.empName,
            empCode: e.empCode,
            bonus: salaryStore().initSalaryList[0].salary * selectedRatio.value,
            bonusCode: "BON002",
            detailCodeName: "\uC131\uACFC\uAE09",
            finalizeStatus: "N"
          };
          await salaryStore().ADD_BONUS(newPersonalBonus);
          isSuccessFunc.value = true;
        }
        await findBonus();
        isDialogVisible2.value = false;
      }
    };
    const deleteBonus = () => {
      selectedRows.value.forEach((e) => {
        const deleteBonusData = {
          empCode: e,
          applyYearMonth: today.value,
          bonusCode: "BON002"
        };
        salaryStore().DELETE_BONUS(deleteBonusData).then(() => findBonus());
      });
      isDialogVisible1.value = false;
      isSuccessFunc.value = true;
    };
    const options = ref({ page: 1, itemsPerPage: 5, sortBy: [""], sortDesc: [false] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$1;
      const _component_DialogCloseBtn = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6">\uC131\uACFC\uAE09 \uB4F1\uB85D</h1>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-3 d-flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppSelect, {
                    "model-value": unref(options).itemsPerPage,
                    items: [
                      { value: 5, title: "5" },
                      { value: 10, title: "10" },
                      { value: 25, title: "25" },
                      { value: 50, title: "50" },
                      { value: -1, title: "All" }
                    ],
                    style: { "inline-size": "6.25rem" },
                    "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="app-user-search-filter d-flex align-center flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "tabler-plus",
                    onClick: ($event) => isDialogVisible1.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC131\uACFC\uAE08 \uB4F1\uB85D(\uAC1C\uC778) `);
                      } else {
                        return [
                          createTextVNode(" \uC131\uACFC\uAE08 \uB4F1\uB85D(\uAC1C\uC778) ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "tabler-plus",
                    onClick: ($event) => isDialogVisible2.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC131\uACFC\uAE08 \uB4F1\uB85D(\uBD80\uC11C) `);
                      } else {
                        return [
                          createTextVNode(" \uC131\uACFC\uAE08 \uB4F1\uB85D(\uBD80\uC11C) ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    "prepend-icon": "tabler-minus",
                    onClick: deleteBonus
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uC131\uACFC\uAE08 \uC0AD\uC81C `);
                      } else {
                        return [
                          createTextVNode(" \uC131\uACFC\uAE08 \uC0AD\uC81C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-3 d-flex gap-3" }, [
                      createVNode(_component_AppSelect, {
                        "model-value": unref(options).itemsPerPage,
                        items: [
                          { value: 5, title: "5" },
                          { value: 10, title: "10" },
                          { value: 25, title: "25" },
                          { value: 50, title: "50" },
                          { value: -1, title: "All" }
                        ],
                        style: { "inline-size": "6.25rem" },
                        "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    createVNode(VSpacer),
                    createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                      createVNode(VBtn, {
                        "prepend-icon": "tabler-plus",
                        onClick: ($event) => isDialogVisible1.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC131\uACFC\uAE08 \uB4F1\uB85D(\uAC1C\uC778) ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        "prepend-icon": "tabler-plus",
                        onClick: ($event) => isDialogVisible2.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC131\uACFC\uAE08 \uB4F1\uB85D(\uBD80\uC11C) ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        "prepend-icon": "tabler-minus",
                        onClick: deleteBonus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC131\uACFC\uAE08 \uC0AD\uC81C ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              modelValue: unref(selectedRows),
              "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
              headers,
              items: unref(bonusList),
              "items-per-page": unref(options).itemsPerPage,
              page: unref(options).page,
              options: unref(options),
              "item-value": "empCode",
              "show-select": ""
            }, {
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"${_scopeId3}><p class="text-sm text-disabled mb-0"${_scopeId3}>${ssrInterpolate(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(bonusList).length))}</p>`);
                        _push4(ssrRenderComponent(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(bonusList).length / unref(options).itemsPerPage)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                            createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(bonusList).length)), 1),
                            createVNode(VPagination, {
                              modelValue: unref(options).page,
                              "onUpdate:modelValue": ($event) => unref(options).page = $event,
                              "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                              length: Math.ceil(unref(bonusList).length / unref(options).itemsPerPage)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "pt-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                          createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(bonusList).length)), 1),
                          createVNode(VPagination, {
                            modelValue: unref(options).page,
                            "onUpdate:modelValue": ($event) => unref(options).page = $event,
                            "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                            length: Math.ceil(unref(bonusList).length / unref(options).itemsPerPage)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                        ])
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
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "me-3 d-flex gap-3" }, [
                    createVNode(_component_AppSelect, {
                      "model-value": unref(options).itemsPerPage,
                      items: [
                        { value: 5, title: "5" },
                        { value: 10, title: "10" },
                        { value: 25, title: "25" },
                        { value: 50, title: "50" },
                        { value: -1, title: "All" }
                      ],
                      style: { "inline-size": "6.25rem" },
                      "onUpdate:modelValue": ($event) => unref(options).itemsPerPage = parseInt($event, 10)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  createVNode(VSpacer),
                  createVNode("div", { class: "app-user-search-filter d-flex align-center flex-wrap gap-4" }, [
                    createVNode(VBtn, {
                      "prepend-icon": "tabler-plus",
                      onClick: ($event) => isDialogVisible1.value = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC131\uACFC\uAE08 \uB4F1\uB85D(\uAC1C\uC778) ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      "prepend-icon": "tabler-plus",
                      onClick: ($event) => isDialogVisible2.value = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC131\uACFC\uAE08 \uB4F1\uB85D(\uBD80\uC11C) ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      "prepend-icon": "tabler-minus",
                      onClick: deleteBonus
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC131\uACFC\uAE08 \uC0AD\uC81C ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                modelValue: unref(selectedRows),
                "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                headers,
                items: unref(bonusList),
                "items-per-page": unref(options).itemsPerPage,
                page: unref(options).page,
                options: unref(options),
                "item-value": "empCode",
                "show-select": ""
              }, {
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                        createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)({ page: unref(options).page, itemsPerPage: unref(options).itemsPerPage }, unref(bonusList).length)), 1),
                        createVNode(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(bonusList).length / unref(options).itemsPerPage)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items", "items-per-page", "page", "options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isDialogVisible1),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible1) ? isDialogVisible1.value = $event : null,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogCloseBtn, {
              onClick: ($event) => isDialogVisible1.value = !unref(isDialogVisible1)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { title: "\uC131\uACFC\uAE08 \uB4F1\uB85D(\uAC1C\uC778)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppSelect, {
                                      modelValue: unref(selectedEmp),
                                      "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                      items: unref(empList),
                                      label: "\uC0AC\uC6D0\uBA85",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(selectedEmp),
                                        "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                        items: unref(empList),
                                        label: "\uC0AC\uC6D0\uBA85",
                                        clearable: "",
                                        "clear-icon": "tabler-x"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppSelect, {
                                      modelValue: unref(selectedRatio),
                                      "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                      items: percent,
                                      label: "\uBC30\uC728",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(selectedRatio),
                                        "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                        items: percent,
                                        label: "\uBC30\uC728",
                                        clearable: "",
                                        "clear-icon": "tabler-x"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(selectedEmp),
                                      "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                      items: unref(empList),
                                      label: "\uC0AC\uC6D0\uBA85",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(selectedRatio),
                                      "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                      items: percent,
                                      label: "\uBC30\uC728",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(selectedEmp),
                                    "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                    items: unref(empList),
                                    label: "\uC0AC\uC6D0\uBA85",
                                    clearable: "",
                                    "clear-icon": "tabler-x"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(selectedRatio),
                                    "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                    items: percent,
                                    label: "\uBC30\uC728",
                                    clearable: "",
                                    "clear-icon": "tabler-x"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "tonal",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible1.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { onClick: inputPersonalBonus }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save `);
                            } else {
                              return [
                                createTextVNode(" Save ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "secondary",
                            onClick: ($event) => isDialogVisible1.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, { onClick: inputPersonalBonus }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedEmp),
                                  "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                  items: unref(empList),
                                  label: "\uC0AC\uC6D0\uBA85",
                                  clearable: "",
                                  "clear-icon": "tabler-x"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedRatio),
                                  "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                  items: percent,
                                  label: "\uBC30\uC728",
                                  clearable: "",
                                  "clear-icon": "tabler-x"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "tonal",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible1.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, { onClick: inputPersonalBonus }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
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
          } else {
            return [
              createVNode(_component_DialogCloseBtn, {
                onClick: ($event) => isDialogVisible1.value = !unref(isDialogVisible1)
              }, null, 8, ["onClick"]),
              createVNode(VCard, { title: "\uC131\uACFC\uAE08 \uB4F1\uB85D(\uAC1C\uC778)" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedEmp),
                                "onUpdate:modelValue": ($event) => isRef(selectedEmp) ? selectedEmp.value = $event : null,
                                items: unref(empList),
                                label: "\uC0AC\uC6D0\uBA85",
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedRatio),
                                "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                items: percent,
                                label: "\uBC30\uC728",
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "tonal",
                        color: "secondary",
                        onClick: ($event) => isDialogVisible1.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, { onClick: inputPersonalBonus }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
                        ]),
                        _: 1
                      })
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
        modelValue: unref(isDialogVisible2),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible2) ? isDialogVisible2.value = $event : null,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogCloseBtn, {
              onClick: ($event) => isDialogVisible2.value = !unref(isDialogVisible2)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { title: "\uC131\uACFC\uAE08 \uB4F1\uB85D(\uBD80\uC11C)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppSelect, {
                                      modelValue: unref(selectedDept),
                                      "onUpdate:modelValue": ($event) => isRef(selectedDept) ? selectedDept.value = $event : null,
                                      items: unref(deptlistDetail),
                                      label: "\uBD80\uC11C\uBA85",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(selectedDept),
                                        "onUpdate:modelValue": ($event) => isRef(selectedDept) ? selectedDept.value = $event : null,
                                        items: unref(deptlistDetail),
                                        label: "\uBD80\uC11C\uBA85",
                                        clearable: "",
                                        "clear-icon": "tabler-x"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppSelect, {
                                      modelValue: unref(selectedRatio),
                                      "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                      items: percent,
                                      label: "\uBC30\uC728",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppSelect, {
                                        modelValue: unref(selectedRatio),
                                        "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                        items: percent,
                                        label: "\uBC30\uC728",
                                        clearable: "",
                                        "clear-icon": "tabler-x"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(selectedDept),
                                      "onUpdate:modelValue": ($event) => isRef(selectedDept) ? selectedDept.value = $event : null,
                                      items: unref(deptlistDetail),
                                      label: "\uBD80\uC11C\uBA85",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppSelect, {
                                      modelValue: unref(selectedRatio),
                                      "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                      items: percent,
                                      label: "\uBC30\uC728",
                                      clearable: "",
                                      "clear-icon": "tabler-x"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(selectedDept),
                                    "onUpdate:modelValue": ($event) => isRef(selectedDept) ? selectedDept.value = $event : null,
                                    items: unref(deptlistDetail),
                                    label: "\uBD80\uC11C\uBA85",
                                    clearable: "",
                                    "clear-icon": "tabler-x"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppSelect, {
                                    modelValue: unref(selectedRatio),
                                    "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                    items: percent,
                                    label: "\uBC30\uC728",
                                    clearable: "",
                                    "clear-icon": "tabler-x"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "tonal",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible2.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { onClick: inputDetpBonus }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save `);
                            } else {
                              return [
                                createTextVNode(" Save ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "secondary",
                            onClick: ($event) => isDialogVisible2.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, { onClick: inputDetpBonus }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedDept),
                                  "onUpdate:modelValue": ($event) => isRef(selectedDept) ? selectedDept.value = $event : null,
                                  items: unref(deptlistDetail),
                                  label: "\uBD80\uC11C\uBA85",
                                  clearable: "",
                                  "clear-icon": "tabler-x"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppSelect, {
                                  modelValue: unref(selectedRatio),
                                  "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                  items: percent,
                                  label: "\uBC30\uC728",
                                  clearable: "",
                                  "clear-icon": "tabler-x"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "tonal",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible2.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, { onClick: inputDetpBonus }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
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
          } else {
            return [
              createVNode(_component_DialogCloseBtn, {
                onClick: ($event) => isDialogVisible2.value = !unref(isDialogVisible2)
              }, null, 8, ["onClick"]),
              createVNode(VCard, { title: "\uC131\uACFC\uAE08 \uB4F1\uB85D(\uBD80\uC11C)" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedDept),
                                "onUpdate:modelValue": ($event) => isRef(selectedDept) ? selectedDept.value = $event : null,
                                items: unref(deptlistDetail),
                                label: "\uBD80\uC11C\uBA85",
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppSelect, {
                                modelValue: unref(selectedRatio),
                                "onUpdate:modelValue": ($event) => isRef(selectedRatio) ? selectedRatio.value = $event : null,
                                items: percent,
                                label: "\uBC30\uC728",
                                clearable: "",
                                "clear-icon": "tabler-x"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "tonal",
                        color: "secondary",
                        onClick: ($event) => isDialogVisible2.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, { onClick: inputDetpBonus }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
                        ]),
                        _: 1
                      })
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
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isinputPersonalBonus),
        "onUpdate:modelValue": ($event) => isRef(isinputPersonalBonus) ? isinputPersonalBonus.value = $event : null,
        location: "top",
        timeout: 3e3,
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: "warning",
              title: "warning!",
              text: "\uC0AC\uC6D0\uBA85, \uBC30\uC728\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uC0AC\uC6D0\uBA85, \uBC30\uC728\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isinputDetpBonus),
        "onUpdate:modelValue": ($event) => isRef(isinputDetpBonus) ? isinputDetpBonus.value = $event : null,
        location: "top",
        timeout: 3e3,
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: "warning",
              title: "warning!",
              text: "\uBD80\uC11C\uBA85, \uBC30\uC728\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uBD80\uC11C\uBA85, \uBC30\uC728\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSuccessFunc),
        "onUpdate:modelValue": ($event) => isRef(isSuccessFunc) ? isSuccessFunc.value = $event : null,
        location: "top",
        timeout: 3e3,
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: "success",
              title: "success!",
              text: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "success",
                title: "success!",
                text: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/salreg/award.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
