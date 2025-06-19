import { _ as _sfc_main$1 } from './AppTextField-dee429aa.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createTextVNode, createVNode, toRaw, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { a as affairStore } from './index-4eaf1d02.mjs';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VCard, f as VCardText, b as VBtn } from './server.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VDivider } from './VDivider-8fd47435.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import './VCheckboxBtn-aab82c77.mjs';
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
import './VSelect-03a0285c.mjs';
import './VMenu-4a1335b2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    const iswarningFunc = ref(false);
    const isSuccessFunc = ref(false);
    const store = affairStore();
    const myTableRef = ref();
    const selectedItems = ref([]);
    const headers = [
      { title: "\uBC1C\uB839\uBC88\uD638", key: "appointNo" },
      { title: "\uC0AC\uBC88", key: "empCode" },
      { title: "\uC9C1\uC6D0\uBA85", key: "empName" },
      { title: "\uBD80\uC11C", key: "deptName" },
      { title: "\uBC1C\uB839\uBD80\uC11C", key: "appointDept" },
      { title: "\uC9C1\uAE09", key: "positionName" },
      { title: "\uBC1C\uB839\uC9C1\uAE09", key: "appointLevel" },
      { title: "\uC2B9\uAE09\uD638\uBD09", key: "appointHobong" },
      { title: "\uADFC\uBB34\uC9C0", key: "workPlaceName" },
      { title: "\uBC1C\uB839\uADFC\uBB34\uC9C0", key: "appointWP" }
    ];
    const appointmentsList = ref([]);
    const search = ref("");
    const perPage = ref(5);
    const currentPage = ref(1);
    const pagination = {
      enabled: true,
      setCurrentPage: 2
    };
    const fetchData = async () => {
      try {
        console.log("\uC5EC\uAE30\uC694");
        await store.FETCH_APPOINT_LIST();
        appointmentsList.value = store.all_appointments_list;
      } catch (error) {
        console.error("Failed to fetch appointments list", error);
      }
    };
    const appointApprove = async () => {
      if (selectedItems.value.length === 0) {
        iswarningFunc.value = true;
      } else {
        for (const val of selectedItems.value) {
          const matchingAppointments = appointmentsList.value.filter(
            (item) => item.appointNo === val
          );
          if (matchingAppointments.length > 0) {
            const rawAppointments = matchingAppointments.map(
              (appointment) => toRaw(appointment)
            );
            rawAppointments[0].status = "\uC2B9\uC778";
            console.log("\uBC1C\uB839 \uC2B9\uC778", rawAppointments[0]);
            await store.UPDATE_APPOINT_APPROVE_EMP(rawAppointments[0]);
          }
        }
        isSuccessFunc.value = true;
        await fetchData();
      }
    };
    const appointReject = async () => {
      if (selectedItems.value.length === 0) {
        iswarningFunc.value = true;
      } else {
        for (const val of selectedItems.value) {
          const matchingAppointments = appointmentsList.value.filter(
            (item) => item.appointNo === val
          );
          if (matchingAppointments.length > 0) {
            const rawAppointments = matchingAppointments.map(
              (appointment) => toRaw(appointment)
            );
            rawAppointments[0].status = "\uBC18\uB824";
            console.log("\uBC1C\uB839 \uBC18\uB824", rawAppointments[0]);
            await store.UPDATE_APPOINT_APPROVE_EMP(rawAppointments[0]);
          }
        }
        isSuccessFunc.value = true;
        await fetchData();
      }
    };
    const appointDelete = async () => {
      if (selectedItems.value.length === 0) {
        iswarningFunc.value = true;
      } else {
        for (const val of selectedItems.value) {
          const matchingAppointments = appointmentsList.value.filter(
            (item) => item.appointNo === val
          );
          if (matchingAppointments.length > 0) {
            const rawAppointments = matchingAppointments.map(
              (appointment) => toRaw(appointment)
            );
            await store.DELETE_APPOINT_EMP(rawAppointments[0].appointNo);
          }
        }
        isSuccessFunc.value = true;
        await fetchData();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-6">\uC778\uC0AC\uBC1C\uB839 \uAD00\uB9AC</h1>`);
      _push(ssrRenderComponent(VCard, { class: "mt-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "inline-size": "10rem" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppTextField, {
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    density: "compact",
                    placeholder: "Search",
                    "append-inner-icon": "tabler-search",
                    "single-line": "",
                    "hide-details": "",
                    dense: "",
                    outlined: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VRow, { class: "text-right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                class: "ma-2",
                                color: "primary",
                                onClick: appointApprove
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC2B9\uC778 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC2B9\uC778 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "ma-2",
                                color: "secondary",
                                onClick: appointReject
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uBC18\uB824 `);
                                  } else {
                                    return [
                                      createTextVNode(" \uBC18\uB824 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "ma-2",
                                color: "error",
                                onClick: appointDelete
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC0AD\uC81C `);
                                  } else {
                                    return [
                                      createTextVNode(" \uC0AD\uC81C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  class: "ma-2",
                                  color: "primary",
                                  onClick: appointApprove
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC2B9\uC778 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  class: "ma-2",
                                  color: "secondary",
                                  onClick: appointReject
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uBC18\uB824 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  class: "ma-2",
                                  color: "error",
                                  onClick: appointDelete
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC0AD\uC81C ")
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
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "ma-2",
                                color: "primary",
                                onClick: appointApprove
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC2B9\uC778 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                class: "ma-2",
                                color: "secondary",
                                onClick: appointReject
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uBC18\uB824 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                class: "ma-2",
                                color: "error",
                                onClick: appointDelete
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC0AD\uC81C ")
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
                } else {
                  return [
                    createVNode("div", { style: { "inline-size": "10rem" } }, [
                      createVNode(_component_AppTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        density: "compact",
                        placeholder: "Search",
                        "append-inner-icon": "tabler-search",
                        "single-line": "",
                        "hide-details": "",
                        dense: "",
                        outlined: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(VRow, { class: "text-right" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              class: "ma-2",
                              color: "primary",
                              onClick: appointApprove
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC2B9\uC778 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              class: "ma-2",
                              color: "secondary",
                              onClick: appointReject
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uBC18\uB824 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              class: "ma-2",
                              color: "error",
                              onClick: appointDelete
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC0AD\uC81C ")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              ref_key: "myTableRef",
              ref: myTableRef,
              modelValue: unref(selectedItems),
              "onUpdate:modelValue": ($event) => isRef(selectedItems) ? selectedItems.value = $event : null,
              headers,
              items: unref(appointmentsList),
              search: unref(search),
              "items-per-page": unref(perPage),
              page: unref(currentPage),
              pagination,
              "item-value": "appointNo",
              "show-select": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex flex-wrap py-4 gap-4" }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "inline-size": "10rem" } }, [
                    createVNode(_component_AppTextField, {
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      density: "compact",
                      placeholder: "Search",
                      "append-inner-icon": "tabler-search",
                      "single-line": "",
                      "hide-details": "",
                      dense: "",
                      outlined: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(VRow, { class: "text-right" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "ma-2",
                            color: "primary",
                            onClick: appointApprove
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC2B9\uC778 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-2",
                            color: "secondary",
                            onClick: appointReject
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBC18\uB824 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-2",
                            color: "error",
                            onClick: appointDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC0AD\uC81C ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(unref(VDataTable), {
                ref_key: "myTableRef",
                ref: myTableRef,
                modelValue: unref(selectedItems),
                "onUpdate:modelValue": ($event) => isRef(selectedItems) ? selectedItems.value = $event : null,
                headers,
                items: unref(appointmentsList),
                search: unref(search),
                "items-per-page": unref(perPage),
                page: unref(currentPage),
                pagination,
                "item-value": "appointNo",
                "show-select": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "search", "items-per-page", "page"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(iswarningFunc),
        "onUpdate:modelValue": ($event) => isRef(iswarningFunc) ? iswarningFunc.value = $event : null,
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
              text: "\uC120\uD0DD \uD574\uC8FC\uC138\uC694."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uC120\uD0DD \uD574\uC8FC\uC138\uC694."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/appo/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
