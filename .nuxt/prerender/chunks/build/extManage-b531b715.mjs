import { _ as _sfc_main$1 } from './AppSelect-04d0f8a2.mjs';
import { _ as _sfc_main$2 } from './DialogCloseBtn-438c6daf.mjs';
import { _ as _sfc_main$3 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, isRef, createBlock, openBlock, createCommentVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { p as paginationMeta, V as VPagination } from './VPagination-fe9c4821.mjs';
import { s as salaryStore } from './index-cfe0baa7.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, l as VDialog } from './server.mjs';
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
  __name: "extManage",
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
    const isaddBaseExt = ref(false);
    const extSalCode = ref("");
    const extSalName = ref("");
    const ratio = ref("");
    const isDialogBtn = ref(false);
    const isDialogVisible = ref(false);
    const baseExtSalList = ref([]);
    const options = ref({
      page: 1,
      itemsPerPage: 5,
      sortBy: [""],
      sortDesc: [false]
    });
    const headers = [
      { title: "\uCD08\uACFC\uADFC\uBB34\uCF54\uB4DC", key: "extSalCode" },
      { title: "\uCD08\uACFC\uADFC\uBB34\uC885\uB958", key: "extSalName" },
      { title: "\uBC30\uC728", key: "ratio" }
    ];
    const fetchData = async () => {
      await salaryStore().SEARCH_BASE_EXT_SAL();
      baseExtSalList.value = salaryStore().baseExtSalList;
    };
    const addBaseModal = async () => {
      extSalCode.value = "";
      extSalName.value = "";
      ratio.value = "";
      isDialogBtn.value = false;
      isDialogVisible.value = true;
    };
    const handleRowClick = async (row) => {
      extSalCode.value = row.item.extSalCode;
      extSalName.value = row.item.extSalName;
      ratio.value = row.item.ratio;
      isDialogBtn.value = true;
      isDialogVisible.value = true;
    };
    const editBaseExt = async () => {
      const editData = {
        extSalCode: extSalCode.value,
        extSalName: extSalName.value,
        ratio: ratio.value
      };
      await salaryStore().EDIT_BASE_EXT_SAL(editData);
      await fetchData();
      isDialogVisible.value = false;
      isSuccessFunc.value = true;
    };
    const addBaseExt = async () => {
      const addData = {
        extSalCode: extSalCode.value,
        extSalName: extSalName.value,
        ratio: ratio.value
      };
      if (ratio.value === "" || ratio.value === null || extSalName.value === "" || extSalName.value === null) {
        isaddBaseExt.value = true;
      } else {
        await salaryStore().ADD_BASE_EXT_SAL(addData);
        await fetchData();
        isDialogVisible.value = false;
        isSuccessFunc.value = true;
      }
    };
    const deleteBaseExt = async () => {
      await salaryStore().DELETE_BASE_EXT_SAL(extSalCode.value);
      await fetchData();
      isDialogVisible.value = false;
      isSuccessFunc.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSelect = _sfc_main$1;
      const _component_DialogCloseBtn = _sfc_main$2;
      const _component_AppTextField = _sfc_main$3;
      _push(`<!--[--><h1 class="mb-6">\uCD08\uACFC\uC218\uB2F9\uAD00\uB9AC</h1>`);
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
                    onClick: addBaseModal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \uCD08\uACFC \uAE30\uC900 \uCD94\uAC00 `);
                      } else {
                        return [
                          createTextVNode(" \uCD08\uACFC \uAE30\uC900 \uCD94\uAC00 ")
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
                        onClick: addBaseModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCD08\uACFC \uAE30\uC900 \uCD94\uAC00 ")
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
              headers,
              items: unref(baseExtSalList),
              "items-per-page": unref(options).itemsPerPage,
              page: unref(options).page,
              options: unref(options),
              "onClick:row": (_2, row) => handleRowClick(row)
            }, {
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"${_scopeId3}><p class="text-sm text-disabled mb-0"${_scopeId3}>${ssrInterpolate(unref(paginationMeta)(
                          { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                          unref(baseExtSalList).length
                        ))}</p>`);
                        _push4(ssrRenderComponent(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(baseExtSalList).length / unref(options).itemsPerPage)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                            createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                              { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                              unref(baseExtSalList).length
                            )), 1),
                            createVNode(VPagination, {
                              modelValue: unref(options).page,
                              "onUpdate:modelValue": ($event) => unref(options).page = $event,
                              "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                              length: Math.ceil(unref(baseExtSalList).length / unref(options).itemsPerPage)
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
                          createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                            { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                            unref(baseExtSalList).length
                          )), 1),
                          createVNode(VPagination, {
                            modelValue: unref(options).page,
                            "onUpdate:modelValue": ($event) => unref(options).page = $event,
                            "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                            length: Math.ceil(unref(baseExtSalList).length / unref(options).itemsPerPage)
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
                      onClick: addBaseModal
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uCD08\uACFC \uAE30\uC900 \uCD94\uAC00 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                headers,
                items: unref(baseExtSalList),
                "items-per-page": unref(options).itemsPerPage,
                page: unref(options).page,
                options: unref(options),
                "onClick:row": (_2, row) => handleRowClick(row)
              }, {
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2" }, [
                        createVNode("p", { class: "text-sm text-disabled mb-0" }, toDisplayString(unref(paginationMeta)(
                          { page: unref(options).page, itemsPerPage: unref(options).itemsPerPage },
                          unref(baseExtSalList).length
                        )), 1),
                        createVNode(VPagination, {
                          modelValue: unref(options).page,
                          "onUpdate:modelValue": ($event) => unref(options).page = $event,
                          "total-visible": _ctx.$vuetify.display.smAndDown ? 3 : 5,
                          length: Math.ceil(unref(baseExtSalList).length / unref(options).itemsPerPage)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-visible", "length"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items", "items-per-page", "page", "options", "onClick:row"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        "max-width": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogCloseBtn, {
              onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCard, { title: "\uCD08\uACFC \uC218\uB2F9 \uAE30\uC900 \uCD94\uAC00" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(isDialogBtn)) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(extSalCode),
                                        "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC",
                                        disabled: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalCode),
                                          "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                          label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(extSalName),
                                        "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958",
                                        disabled: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalName),
                                          "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                          label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(ratio),
                                        "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                        label: "\uBC30\uC728"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(ratio),
                                          "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                          label: "\uBC30\uC728"
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
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(extSalCode),
                                        "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(extSalName),
                                        "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(ratio),
                                        "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                        label: "\uBC30\uC728"
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
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(extSalCode),
                                        "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalCode),
                                          "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                          label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(extSalName),
                                        "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalName),
                                          "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                          label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      _push6(ssrRenderComponent(_component_AppTextField, {
                                        modelValue: unref(ratio),
                                        "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                        label: "\uBC30\uC728"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(ratio),
                                          "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                          label: "\uBC30\uC728"
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
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(extSalCode),
                                        "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(extSalName),
                                        "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                        label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: unref(ratio),
                                        "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                        label: "\uBC30\uC728"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(isDialogBtn) ? (openBlock(), createBlock(VRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(extSalCode),
                                    "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                    label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(extSalName),
                                    "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                    label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(ratio),
                                    "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                    label: "\uBC30\uC728"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(extSalCode),
                                    "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                    label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(extSalName),
                                    "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                    label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: unref(ratio),
                                    "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                    label: "\uBC30\uC728"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(isDialogBtn)) {
                          _push4(ssrRenderComponent(VBtn, { onClick: editBaseExt }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \uC218\uC815 `);
                              } else {
                                return [
                                  createTextVNode(" \uC218\uC815 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(isDialogBtn)) {
                          _push4(ssrRenderComponent(VBtn, { onClick: deleteBaseExt }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \uC0AD\uC81C `);
                              } else {
                                return [
                                  createTextVNode(" \uC0AD\uC81C ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VBtn, { onClick: addBaseExt }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \uCD94\uAC00 `);
                              } else {
                                return [
                                  createTextVNode(" \uCD94\uAC00 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            onClick: editBaseExt
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC218\uC815 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: deleteBaseExt
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC0AD\uC81C ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 2,
                            onClick: addBaseExt
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uCD94\uAC00 ")
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        unref(isDialogBtn) ? (openBlock(), createBlock(VRow, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(extSalCode),
                                  "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                  label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(extSalName),
                                  "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                  label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(ratio),
                                  "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                  label: "\uBC30\uC728"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(extSalCode),
                                  "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                  label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(extSalName),
                                  "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                  label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextField, {
                                  modelValue: unref(ratio),
                                  "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                  label: "\uBC30\uC728"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }))
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                      default: withCtx(() => [
                        unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          onClick: editBaseExt
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC218\uC815 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: deleteBaseExt
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC0AD\uC81C ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 2,
                          onClick: addBaseExt
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uCD94\uAC00 ")
                          ]),
                          _: 1
                        }))
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
                onClick: ($event) => isDialogVisible.value = !unref(isDialogVisible)
              }, null, 8, ["onClick"]),
              createVNode(VCard, { title: "\uCD08\uACFC \uC218\uB2F9 \uAE30\uC900 \uCD94\uAC00" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      unref(isDialogBtn) ? (openBlock(), createBlock(VRow, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(extSalCode),
                                "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(extSalName),
                                "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958",
                                disabled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(ratio),
                                "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                label: "\uBC30\uC728"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(extSalCode),
                                "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                label: "\uCD08\uACFC \uADFC\uBB34 \uCF54\uB4DC"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(extSalName),
                                "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                label: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextField, {
                                modelValue: unref(ratio),
                                "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                label: "\uBC30\uC728"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-3 mt-2" }, {
                    default: withCtx(() => [
                      unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        onClick: editBaseExt
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC218\uC815 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                        key: 1,
                        onClick: deleteBaseExt
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC0AD\uC81C ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VBtn, {
                        key: 2,
                        onClick: addBaseExt
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCD94\uAC00 ")
                        ]),
                        _: 1
                      }))
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
        modelValue: unref(isaddBaseExt),
        "onUpdate:modelValue": ($event) => isRef(isaddBaseExt) ? isaddBaseExt.value = $event : null,
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
              text: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958, \uBC30\uC728\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uCD08\uACFC \uADFC\uBB34 \uC885\uB958, \uBC30\uC728\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/salbase/extManage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
