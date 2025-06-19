import { _ as _sfc_main$1 } from "./AppSelect-04d0f8a2.js";
import { _ as _sfc_main$2 } from "./DialogCloseBtn-438c6daf.js";
import { _ as _sfc_main$3 } from "./AppTextField-dee429aa.js";
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { p as paginationMeta, V as VPagination } from "./VPagination-fe9c4821.js";
import { s as salaryStore } from "./index-cfe0baa7.js";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VCard, f as VCardText, m as VSpacer, b as VBtn, l as VDialog } from "../server.mjs";
import { V as VDivider } from "./VDivider-8fd47435.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "./VCheckboxBtn-aab82c77.js";
import "./VSelect-03a0285c.js";
import "./VMenu-4a1335b2.js";
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
/* empty css                */const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "extManage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
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
      { title: "초과근무코드", key: "extSalCode" },
      { title: "초과근무종류", key: "extSalName" },
      { title: "배율", key: "ratio" }
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
      _push(`<!--[--><h1 class="mb-6">초과수당관리</h1>`);
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
                        _push4(` 초과 기준 추가 `);
                      } else {
                        return [
                          createTextVNode(" 초과 기준 추가 ")
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
                          createTextVNode(" 초과 기준 추가 ")
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
                        createTextVNode(" 초과 기준 추가 ")
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
            _push2(ssrRenderComponent(VCard, { title: "초과 수당 기준 추가" }, {
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
                                        label: "초과 근무 코드",
                                        disabled: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalCode),
                                          "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                          label: "초과 근무 코드",
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
                                        label: "초과 근무 종류",
                                        disabled: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalName),
                                          "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                          label: "초과 근무 종류",
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
                                        label: "배율"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(ratio),
                                          "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                          label: "배율"
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
                                        label: "초과 근무 코드",
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
                                        label: "초과 근무 종류",
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
                                        label: "배율"
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
                                        label: "초과 근무 코드"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalCode),
                                          "onUpdate:modelValue": ($event) => isRef(extSalCode) ? extSalCode.value = $event : null,
                                          label: "초과 근무 코드"
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
                                        label: "초과 근무 종류"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(extSalName),
                                          "onUpdate:modelValue": ($event) => isRef(extSalName) ? extSalName.value = $event : null,
                                          label: "초과 근무 종류"
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
                                        label: "배율"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppTextField, {
                                          modelValue: unref(ratio),
                                          "onUpdate:modelValue": ($event) => isRef(ratio) ? ratio.value = $event : null,
                                          label: "배율"
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
                                        label: "초과 근무 코드"
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
                                        label: "초과 근무 종류"
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
                                        label: "배율"
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
                                    label: "초과 근무 코드",
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
                                    label: "초과 근무 종류",
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
                                    label: "배율"
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
                                    label: "초과 근무 코드"
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
                                    label: "초과 근무 종류"
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
                                    label: "배율"
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
                                _push5(` 수정 `);
                              } else {
                                return [
                                  createTextVNode(" 수정 ")
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
                                _push5(` 삭제 `);
                              } else {
                                return [
                                  createTextVNode(" 삭제 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VBtn, { onClick: addBaseExt }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` 추가 `);
                              } else {
                                return [
                                  createTextVNode(" 추가 ")
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
                              createTextVNode(" 수정 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: deleteBaseExt
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 삭제 ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 2,
                            onClick: addBaseExt
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 추가 ")
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
                                  label: "초과 근무 코드",
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
                                  label: "초과 근무 종류",
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
                                  label: "배율"
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
                                  label: "초과 근무 코드"
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
                                  label: "초과 근무 종류"
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
                                  label: "배율"
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
                            createTextVNode(" 수정 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: deleteBaseExt
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 삭제 ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 2,
                          onClick: addBaseExt
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 추가 ")
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
              createVNode(VCard, { title: "초과 수당 기준 추가" }, {
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
                                label: "초과 근무 코드",
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
                                label: "초과 근무 종류",
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
                                label: "배율"
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
                                label: "초과 근무 코드"
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
                                label: "초과 근무 종류"
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
                                label: "배율"
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
                          createTextVNode(" 수정 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(isDialogBtn) ? (openBlock(), createBlock(VBtn, {
                        key: 1,
                        onClick: deleteBaseExt
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 삭제 ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VBtn, {
                        key: 2,
                        onClick: addBaseExt
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 추가 ")
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
              text: "초과 근무 종류, 배율을 확인해주세요."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "초과 근무 종류, 배율을 확인해주세요."
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
              text: "완료되었습니다."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "success",
                title: "success!",
                text: "완료되었습니다."
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
export {
  _sfc_main as default
};
