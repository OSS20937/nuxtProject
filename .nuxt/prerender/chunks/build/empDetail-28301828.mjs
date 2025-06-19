import { _ as _sfc_main$1 } from './AppTextField-dee429aa.mjs';
import { _ as _sfc_main$2 } from './AppDateTimePicker-c59f48ad.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VCard, f as VCardText, g as VCardTitle, b as VBtn, i as VIcon, j as VAvatar } from './server.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VSelect } from './VSelect-03a0285c.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import '../virtual/_commonjsHelpers.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/flatpickr@4.6.13/node_modules/flatpickr/dist/flatpickr.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
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
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empDetail",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    const headers = [
      { title: "\uC0AC\uBC88", key: "empCode" },
      { title: "\uC9C1\uC6D0\uBA85", key: "empName" },
      { title: "\uBD80\uC11C\uC774\uB984", key: "deptName" }
    ];
    const educations = [
      { value: "\uC911\uC878\uC774\uD558", text: "\uC911\uC878\uC774\uD558" },
      { value: "\uC911\uC878", text: "\uC911\uC878" },
      { value: "\uACE0\uC878", text: "\uACE0\uC878" },
      { value: "\uB300\uC878", text: "\uD559\uC0AC" },
      { value: "\uC11D\uC0AC", text: "\uC11D\uC0AC" },
      { value: "\uBC15\uC0AC", text: "\uBC15\uC0AC" }
    ];
    const positions = [
      { value: "POS-01", text: "\uC0AC\uC7A5" },
      { value: "POS-02", text: "\uC774\uC0AC" },
      { value: "POS-03", text: "\uBD80\uC7A5" },
      { value: "POS-04", text: "\uCC28\uC7A5" },
      { value: "POS-05", text: "\uACFC\uC7A5" },
      { value: "POS-06", text: "\uB300\uB9AC" },
      { value: "POS-07", text: "\uC0AC\uC6D0" },
      { value: "POS-08", text: "\uC778\uD134" },
      { value: "POS-09", text: "\uACC4\uC57D\uC9C1" }
    ];
    const accountData = {
      avatarImg: "/_nuxt/assets/images/empImages/EMP-09.jpeg"
    };
    const formImg = ref(null);
    const isSuccessFunc = ref(false);
    const iseditFunc = ref(false);
    const isdeleteFunc = ref(false);
    const gender = [
      { value: "male", text: "\uB0A8\uC131" },
      { value: "female", text: "\uC5EC\uC131" }
    ];
    const itemProps = (item) => {
      return {
        title: item.text,
        value: item.value
      };
    };
    const now = /* @__PURE__ */ new Date();
    now.toLocaleString("default", {
      year: "numeric",
      month: "2-digit"
    });
    const empList = ref([]);
    const search = ref("");
    const workplaceList = ref([]);
    const deptList = ref([]);
    const loading = ref(false);
    const refInputEl = ref();
    const accountDataLocal = ref(structuredClone(accountData));
    const empDetail = ref({
      empCode: "",
      workplaceCode: "",
      deptCode: "",
      positionCode: "",
      phoneNumber: "",
      email: "",
      zipCode: "",
      basicAddress: "",
      detailAddress: "",
      levelOfEducation: "",
      image: "",
      empName: "",
      deptName: "",
      gender: "",
      hireDate: "",
      birthDate: ""
    });
    const fetchData = async () => {
      try {
        loading.value = true;
        const response = await axios.get("http://localhost:8282/hr/affair/emp");
        empList.value = response.data.empList;
        console.log("[empList]", response.data.empList);
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };
    const filteredEmpList = computed(() => {
      return empList.value.filter((emp) => {
        return Object.values(emp).some((field) => {
          if (typeof field === "string")
            return field.toLowerCase().includes(search.value.toLowerCase());
          return false;
        });
      });
    });
    const onRowClick = async (event, item) => {
      console.log("[clickEmp]", item.item.empCode);
      try {
        formImg.value = null;
        const clickEmp = item.item.empCode;
        const res = await axios.get(
          `http://localhost:8282/hr/affair/emp/${clickEmp}`
        );
        console.log("[empDetailInfo]", res.data.empDetailInfo[0]);
        empDetail.value = res.data.empDetailInfo[0];
        console.log(empDetail.value);
        console.log("positionCode", empDetail.value.positionCode);
        console.log("[clickEmp]", clickEmp);
        accountDataLocal.value.avatarImg = `/_nuxt/assets/images/empImages/${empDetail.value.image}`;
      } catch (e) {
        console.error(e);
      }
    };
    const editFunc = async () => {
      if (empDetail.value.empCode === "") {
        iseditFunc.value = true;
      } else {
        console.log("\uC218\uC815\uBC84\uD2BC \uD074\uB9AD!!!");
        try {
          const empUpdate = empDetail.value;
          const formData = new FormData();
          const res = await axios.put(
            "http://localhost:8282/hr/affair/emp",
            empUpdate,
            {
              headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
              }
            }
          );
          if (formImg.value) {
            formData.append("file", formImg.value);
            await axios.post(
              "http://localhost:8282/hr/affairFile/photoUpdate",
              formData,
              {
                headers: {
                  "Cache-Control": "no-cache",
                  Pragma: "no-cache"
                }
              }
            );
          }
          console.log("[res.empUpdate]", res.data);
          await fetchData();
          isSuccessFunc.value = true;
        } catch (e) {
          console.error(e);
        }
      }
    };
    const deleteFunc = async (params) => {
      if (empDetail.value.empCode === "") {
        isdeleteFunc.value = true;
      } else {
        try {
          params = empDetail.value.empCode;
          console.log("[delEmpCode]", params);
          const res = await axios.delete(
            `http://localhost:8282/hr/affair/emp/${params}`
          );
          console.log("[res.empUpdate]", res.data);
          await fetchData();
          isSuccessFunc.value = true;
        } catch (e) {
          console.error(e);
        }
      }
    };
    const searchPost = () => {
      alert("\uC6B0\uD3B8\uBC88\uD638 \uAC80\uC0C9 api\uBAA8\uB2EC \uCD9C\uB825!!! ");
      console.log("\uC6B0\uD3B8\uBC88\uD638 \uAC80\uC0C9!!!");
    };
    const changeAvatar = (file) => {
      const fileReader = new FileReader();
      const { files } = file.target;
      if (files && files.length > 0)
        formImg.value = files[0];
      if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
          if (typeof fileReader.result === "string")
            accountDataLocal.value.avatarImg = fileReader.result;
        };
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextField = _sfc_main$1;
      const _component_AppDateTimePicker = _sfc_main$2;
      _push(`<!--[--><h1 class="mb-6">\uC9C1\uC6D0\uC815\uBCF4 \uAD00\uB9AC</h1>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { md: "4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mb-6",
                    height: "725",
                    title: "\uC9C1\uC6D0\uC815\uBCF4 \uC870\uD68C"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      "offset-md": "",
                                      md: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppTextField, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            density: "compact",
                                            placeholder: "\uAC80\uC0C9",
                                            "append-inner-icon": "tabler-search",
                                            "single-line": "",
                                            "hide-details": "",
                                            dense: "",
                                            outlined: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppTextField, {
                                              modelValue: search.value,
                                              "onUpdate:modelValue": ($event) => search.value = $event,
                                              density: "compact",
                                              placeholder: "\uAC80\uC0C9",
                                              "append-inner-icon": "tabler-search",
                                              "single-line": "",
                                              "hide-details": "",
                                              dense: "",
                                              outlined: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        "offset-md": "",
                                        md: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppTextField, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            density: "compact",
                                            placeholder: "\uAC80\uC0C9",
                                            "append-inner-icon": "tabler-search",
                                            "single-line": "",
                                            "hide-details": "",
                                            dense: "",
                                            outlined: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VDataTable), {
                                headers,
                                items: filteredEmpList.value,
                                "items-per-page": 10,
                                "onClick:row": onRowClick
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      "offset-md": "",
                                      md: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppTextField, {
                                          modelValue: search.value,
                                          "onUpdate:modelValue": ($event) => search.value = $event,
                                          density: "compact",
                                          placeholder: "\uAC80\uC0C9",
                                          "append-inner-icon": "tabler-search",
                                          "single-line": "",
                                          "hide-details": "",
                                          dense: "",
                                          outlined: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VDataTable), {
                                  headers,
                                  items: filteredEmpList.value,
                                  "items-per-page": 10,
                                  "onClick:row": onRowClick
                                }, null, 8, ["items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    "offset-md": "",
                                    md: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextField, {
                                        modelValue: search.value,
                                        "onUpdate:modelValue": ($event) => search.value = $event,
                                        density: "compact",
                                        placeholder: "\uAC80\uC0C9",
                                        "append-inner-icon": "tabler-search",
                                        "single-line": "",
                                        "hide-details": "",
                                        dense: "",
                                        outlined: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(VDataTable), {
                                headers,
                                items: filteredEmpList.value,
                                "items-per-page": 10,
                                "onClick:row": onRowClick
                              }, null, 8, ["items"])
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
                    createVNode(VCard, {
                      class: "mb-6",
                      height: "725",
                      title: "\uC9C1\uC6D0\uC815\uBCF4 \uC870\uD68C"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  "offset-md": "",
                                  md: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextField, {
                                      modelValue: search.value,
                                      "onUpdate:modelValue": ($event) => search.value = $event,
                                      density: "compact",
                                      placeholder: "\uAC80\uC0C9",
                                      "append-inner-icon": "tabler-search",
                                      "single-line": "",
                                      "hide-details": "",
                                      dense: "",
                                      outlined: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(VDataTable), {
                              headers,
                              items: filteredEmpList.value,
                              "items-per-page": 10,
                              "onClick:row": onRowClick
                            }, null, 8, ["items"])
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
            _push2(ssrRenderComponent(VCol, { md: "8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mb-6",
                    height: "400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "mt-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 `);
                                    _push6(ssrRenderComponent(VBtn, {
                                      class: "ml-3",
                                      onClick: editFunc
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "tabler-edit"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`\uC218\uC815 `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "tabler-edit"
                                            }),
                                            createTextVNode("\uC218\uC815 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "error",
                                      class: "ml-3",
                                      onClick: deleteFunc
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "tabler-trash"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`\uC0AD\uC81C `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "tabler-trash"
                                            }),
                                            createTextVNode("\uC0AD\uC81C ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                      createVNode(VBtn, {
                                        class: "ml-3",
                                        onClick: editFunc
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "tabler-edit"
                                          }),
                                          createTextVNode("\uC218\uC815 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "error",
                                        class: "ml-3",
                                        onClick: deleteFunc
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "tabler-trash"
                                          }),
                                          createTextVNode("\uC0AD\uC81C ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAvatar, {
                                      rounded: "",
                                      size: "100",
                                      class: "me-6",
                                      image: accountDataLocal.value.avatarImg
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<form class="d-flex flex-column justify-center gap-4"${_scopeId5}><div class="d-flex flex-wrap gap-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "outlined",
                                      onClick: ($event) => {
                                        var _a;
                                        return (_a = refInputEl.value) == null ? void 0 : _a.click();
                                      }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "tabler-cloud-upload",
                                            class: "d-sm-none"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<span class="d-none d-sm-block"${_scopeId6}>Upload new photo</span>`);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: "tabler-cloud-upload",
                                              class: "d-sm-none"
                                            }),
                                            createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<input type="file" name="file" accept=".jpg, .jpeg, .png" hidden${_scopeId5}></div><p class="text-body-1 mb-0"${_scopeId5}>Allowed JPG, JPEG or PNG.</p></form>`);
                                  } else {
                                    return [
                                      createVNode(VAvatar, {
                                        rounded: "",
                                        size: "100",
                                        class: "me-6",
                                        image: accountDataLocal.value.avatarImg
                                      }, null, 8, ["image"]),
                                      createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                        createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            onClick: ($event) => {
                                              var _a;
                                              return (_a = refInputEl.value) == null ? void 0 : _a.click();
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "tabler-cloud-upload",
                                                class: "d-sm-none"
                                              }),
                                              createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode("input", {
                                            ref_key: "refInputEl",
                                            ref: refInputEl,
                                            type: "file",
                                            name: "file",
                                            accept: ".jpg, .jpeg, .png",
                                            hidden: "",
                                            onInput: changeAvatar
                                          }, null, 544)
                                        ]),
                                        createVNode("p", { class: "text-body-1 mb-0" }, "Allowed JPG, JPEG or PNG.")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.empName,
                                            "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                            class: "mb-3",
                                            label: "\uC0AC\uC6D0\uBA85",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.empName,
                                              "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                              class: "mb-3",
                                              label: "\uC0AC\uC6D0\uBA85",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.empCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                            class: "mb-3",
                                            label: "\uC0AC\uBC88",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.empCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                              class: "mb-3",
                                              label: "\uC0AC\uBC88",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppDateTimePicker, {
                                            modelValue: empDetail.value.birthDate,
                                            "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                            class: "mb-3",
                                            placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: empDetail.value.birthDate,
                                              "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                              class: "mb-3",
                                              placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: empDetail.value.gender,
                                            "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                            class: "mb-3",
                                            label: "\uC131\uBCC4",
                                            items: gender,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: empDetail.value.gender,
                                              "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                              class: "mb-3",
                                              label: "\uC131\uBCC4",
                                              items: gender,
                                              "item-props": itemProps,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: empDetail.value.deptCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                            class: "mb-3",
                                            label: "\uBD80\uC11C",
                                            items: deptList.value,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: empDetail.value.deptCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                              class: "mb-3",
                                              label: "\uBD80\uC11C",
                                              items: deptList.value,
                                              "item-props": itemProps,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.deptCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                            class: "mb-3",
                                            label: "\uBD80\uC11C\uBC88\uD638",
                                            "read-only": "",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.deptCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                              class: "mb-3",
                                              label: "\uBD80\uC11C\uBC88\uD638",
                                              "read-only": "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AppDateTimePicker, {
                                            modelValue: empDetail.value.hireDate,
                                            "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                            class: "mb-3",
                                            placeholder: "\uC785\uC0AC\uC77C"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: empDetail.value.hireDate,
                                              "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                              class: "mb-3",
                                              placeholder: "\uC785\uC0AC\uC77C"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.empName,
                                            "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                            class: "mb-3",
                                            label: "\uC0AC\uC6D0\uBA85",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.empCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                            class: "mb-3",
                                            label: "\uC0AC\uBC88",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppDateTimePicker, {
                                            modelValue: empDetail.value.birthDate,
                                            "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                            class: "mb-3",
                                            placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: empDetail.value.gender,
                                            "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                            class: "mb-3",
                                            label: "\uC131\uBCC4",
                                            items: gender,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: empDetail.value.deptCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                            class: "mb-3",
                                            label: "\uBD80\uC11C",
                                            items: deptList.value,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.deptCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                            class: "mb-3",
                                            label: "\uBD80\uC11C\uBC88\uD638",
                                            "read-only": "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppDateTimePicker, {
                                            modelValue: empDetail.value.hireDate,
                                            "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                            class: "mb-3",
                                            placeholder: "\uC785\uC0AC\uC77C"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "mt-3" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                    createVNode(VBtn, {
                                      class: "ml-3",
                                      onClick: editFunc
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "tabler-edit"
                                        }),
                                        createTextVNode("\uC218\uC815 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "error",
                                      class: "ml-3",
                                      onClick: deleteFunc
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "tabler-trash"
                                        }),
                                        createTextVNode("\uC0AD\uC81C ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "d-flex" }, {
                                  default: withCtx(() => [
                                    createVNode(VAvatar, {
                                      rounded: "",
                                      size: "100",
                                      class: "me-6",
                                      image: accountDataLocal.value.avatarImg
                                    }, null, 8, ["image"]),
                                    createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                      createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          onClick: ($event) => {
                                            var _a;
                                            return (_a = refInputEl.value) == null ? void 0 : _a.click();
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "tabler-cloud-upload",
                                              class: "d-sm-none"
                                            }),
                                            createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode("input", {
                                          ref_key: "refInputEl",
                                          ref: refInputEl,
                                          type: "file",
                                          name: "file",
                                          accept: ".jpg, .jpeg, .png",
                                          hidden: "",
                                          onInput: changeAvatar
                                        }, null, 544)
                                      ]),
                                      createVNode("p", { class: "text-body-1 mb-0" }, "Allowed JPG, JPEG or PNG.")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.empName,
                                          "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                          class: "mb-3",
                                          label: "\uC0AC\uC6D0\uBA85",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.empCode,
                                          "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                          class: "mb-3",
                                          label: "\uC0AC\uBC88",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppDateTimePicker, {
                                          modelValue: empDetail.value.birthDate,
                                          "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                          class: "mb-3",
                                          placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: empDetail.value.gender,
                                          "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                          class: "mb-3",
                                          label: "\uC131\uBCC4",
                                          items: gender,
                                          "item-props": itemProps,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: empDetail.value.deptCode,
                                          "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                          class: "mb-3",
                                          label: "\uBD80\uC11C",
                                          items: deptList.value,
                                          "item-props": itemProps,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.deptCode,
                                          "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                          class: "mb-3",
                                          label: "\uBD80\uC11C\uBC88\uD638",
                                          "read-only": "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppDateTimePicker, {
                                          modelValue: empDetail.value.hireDate,
                                          "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                          class: "mb-3",
                                          placeholder: "\uC785\uC0AC\uC77C"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "mt-3" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                  createVNode(VBtn, {
                                    class: "ml-3",
                                    onClick: editFunc
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "tabler-edit"
                                      }),
                                      createTextVNode("\uC218\uC815 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "error",
                                    class: "ml-3",
                                    onClick: deleteFunc
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "tabler-trash"
                                      }),
                                      createTextVNode("\uC0AD\uC81C ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "d-flex" }, {
                                default: withCtx(() => [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "100",
                                    class: "me-6",
                                    image: accountDataLocal.value.avatarImg
                                  }, null, 8, ["image"]),
                                  createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                    createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        onClick: ($event) => {
                                          var _a;
                                          return (_a = refInputEl.value) == null ? void 0 : _a.click();
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "tabler-cloud-upload",
                                            class: "d-sm-none"
                                          }),
                                          createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode("input", {
                                        ref_key: "refInputEl",
                                        ref: refInputEl,
                                        type: "file",
                                        name: "file",
                                        accept: ".jpg, .jpeg, .png",
                                        hidden: "",
                                        onInput: changeAvatar
                                      }, null, 544)
                                    ]),
                                    createVNode("p", { class: "text-body-1 mb-0" }, "Allowed JPG, JPEG or PNG.")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.empName,
                                        "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                        class: "mb-3",
                                        label: "\uC0AC\uC6D0\uBA85",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.empCode,
                                        "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                        class: "mb-3",
                                        label: "\uC0AC\uBC88",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppDateTimePicker, {
                                        modelValue: empDetail.value.birthDate,
                                        "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                        class: "mb-3",
                                        placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: empDetail.value.gender,
                                        "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                        class: "mb-3",
                                        label: "\uC131\uBCC4",
                                        items: gender,
                                        "item-props": itemProps,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: empDetail.value.deptCode,
                                        "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                        class: "mb-3",
                                        label: "\uBD80\uC11C",
                                        items: deptList.value,
                                        "item-props": itemProps,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.deptCode,
                                        "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                        class: "mb-3",
                                        label: "\uBD80\uC11C\uBC88\uD638",
                                        "read-only": "",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppDateTimePicker, {
                                        modelValue: empDetail.value.hireDate,
                                        "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                        class: "mb-3",
                                        placeholder: "\uC785\uC0AC\uC77C"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4",
                    height: "300"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: empDetail.value.positionCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                            class: "mb-3",
                                            label: "\uC9C1\uAE09",
                                            items: positions,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: empDetail.value.positionCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                              class: "mb-3",
                                              label: "\uC9C1\uAE09",
                                              items: positions,
                                              "item-props": itemProps,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.phoneNumber,
                                            "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                            class: "mb-3",
                                            label: "\uC804\uD654\uBC88\uD638",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.phoneNumber,
                                              "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                              class: "mb-3",
                                              label: "\uC804\uD654\uBC88\uD638",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.email,
                                            "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                            class: "mb-3",
                                            label: "\uC774\uBA54\uC77C",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.email,
                                              "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                              class: "mb-3",
                                              label: "\uC774\uBA54\uC77C",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: empDetail.value.workplaceCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                            class: "mb-3",
                                            label: "\uADFC\uBB34\uC9C0",
                                            items: workplaceList.value,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: empDetail.value.workplaceCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                              class: "mb-3",
                                              label: "\uADFC\uBB34\uC9C0",
                                              items: workplaceList.value,
                                              "item-props": itemProps,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: empDetail.value.levelOfEducation,
                                            "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                            class: "mb-3",
                                            label: "\uCD5C\uC885\uD559\uB825",
                                            items: educations,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: empDetail.value.levelOfEducation,
                                              "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                              class: "mb-3",
                                              label: "\uCD5C\uC885\uD559\uB825",
                                              items: educations,
                                              "item-props": itemProps,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.zipCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                            class: "mb-3",
                                            label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                            variant: "outlined",
                                            onClick: searchPost
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.zipCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                              class: "mb-3",
                                              label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                              variant: "outlined",
                                              onClick: searchPost
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.basicAddress,
                                            "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                            class: "mb-3",
                                            label: "\uC8FC\uC18C",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.basicAddress,
                                              "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                              class: "mb-3",
                                              label: "\uC8FC\uC18C",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: empDetail.value.detailAddress,
                                            "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                            class: "mb-3",
                                            label: "\uC0C1\uC138\uC8FC\uC18C",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.detailAddress,
                                              "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                              class: "mb-3",
                                              label: "\uC0C1\uC138\uC8FC\uC18C",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: empDetail.value.positionCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                            class: "mb-3",
                                            label: "\uC9C1\uAE09",
                                            items: positions,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.phoneNumber,
                                            "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                            class: "mb-3",
                                            label: "\uC804\uD654\uBC88\uD638",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.email,
                                            "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                            class: "mb-3",
                                            label: "\uC774\uBA54\uC77C",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: empDetail.value.workplaceCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                            class: "mb-3",
                                            label: "\uADFC\uBB34\uC9C0",
                                            items: workplaceList.value,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: empDetail.value.levelOfEducation,
                                            "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                            class: "mb-3",
                                            label: "\uCD5C\uC885\uD559\uB825",
                                            items: educations,
                                            "item-props": itemProps,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.zipCode,
                                            "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                            class: "mb-3",
                                            label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                            variant: "outlined",
                                            onClick: searchPost
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.basicAddress,
                                            "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                            class: "mb-3",
                                            label: "\uC8FC\uC18C",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.detailAddress,
                                            "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                            class: "mb-3",
                                            label: "\uC0C1\uC138\uC8FC\uC18C",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: empDetail.value.positionCode,
                                          "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                          class: "mb-3",
                                          label: "\uC9C1\uAE09",
                                          items: positions,
                                          "item-props": itemProps,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.phoneNumber,
                                          "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                          class: "mb-3",
                                          label: "\uC804\uD654\uBC88\uD638",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.email,
                                          "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                          class: "mb-3",
                                          label: "\uC774\uBA54\uC77C",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: empDetail.value.workplaceCode,
                                          "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                          class: "mb-3",
                                          label: "\uADFC\uBB34\uC9C0",
                                          items: workplaceList.value,
                                          "item-props": itemProps,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: empDetail.value.levelOfEducation,
                                          "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                          class: "mb-3",
                                          label: "\uCD5C\uC885\uD559\uB825",
                                          items: educations,
                                          "item-props": itemProps,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.zipCode,
                                          "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                          class: "mb-3",
                                          label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                          variant: "outlined",
                                          onClick: searchPost
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.basicAddress,
                                          "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                          class: "mb-3",
                                          label: "\uC8FC\uC18C",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.detailAddress,
                                          "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                          class: "mb-3",
                                          label: "\uC0C1\uC138\uC8FC\uC18C",
                                          variant: "outlined"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: empDetail.value.positionCode,
                                        "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                        class: "mb-3",
                                        label: "\uC9C1\uAE09",
                                        items: positions,
                                        "item-props": itemProps,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.phoneNumber,
                                        "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                        class: "mb-3",
                                        label: "\uC804\uD654\uBC88\uD638",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.email,
                                        "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                        class: "mb-3",
                                        label: "\uC774\uBA54\uC77C",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: empDetail.value.workplaceCode,
                                        "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                        class: "mb-3",
                                        label: "\uADFC\uBB34\uC9C0",
                                        items: workplaceList.value,
                                        "item-props": itemProps,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: empDetail.value.levelOfEducation,
                                        "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                        class: "mb-3",
                                        label: "\uCD5C\uC885\uD559\uB825",
                                        items: educations,
                                        "item-props": itemProps,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.zipCode,
                                        "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                        class: "mb-3",
                                        label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                        variant: "outlined",
                                        onClick: searchPost
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.basicAddress,
                                        "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                        class: "mb-3",
                                        label: "\uC8FC\uC18C",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.detailAddress,
                                        "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                        class: "mb-3",
                                        label: "\uC0C1\uC138\uC8FC\uC18C",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "mb-6",
                      height: "400"
                    }, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "mt-3" }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                createVNode(VBtn, {
                                  class: "ml-3",
                                  onClick: editFunc
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "tabler-edit"
                                    }),
                                    createTextVNode("\uC218\uC815 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "error",
                                  class: "ml-3",
                                  onClick: deleteFunc
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "tabler-trash"
                                    }),
                                    createTextVNode("\uC0AD\uC81C ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "d-flex" }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: "100",
                                  class: "me-6",
                                  image: accountDataLocal.value.avatarImg
                                }, null, 8, ["image"]),
                                createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                  createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      onClick: ($event) => {
                                        var _a;
                                        return (_a = refInputEl.value) == null ? void 0 : _a.click();
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "tabler-cloud-upload",
                                          class: "d-sm-none"
                                        }),
                                        createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("input", {
                                      ref_key: "refInputEl",
                                      ref: refInputEl,
                                      type: "file",
                                      name: "file",
                                      accept: ".jpg, .jpeg, .png",
                                      hidden: "",
                                      onInput: changeAvatar
                                    }, null, 544)
                                  ]),
                                  createVNode("p", { class: "text-body-1 mb-0" }, "Allowed JPG, JPEG or PNG.")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.empName,
                                      "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                      class: "mb-3",
                                      label: "\uC0AC\uC6D0\uBA85",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.empCode,
                                      "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                      class: "mb-3",
                                      label: "\uC0AC\uBC88",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppDateTimePicker, {
                                      modelValue: empDetail.value.birthDate,
                                      "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                      class: "mb-3",
                                      placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: empDetail.value.gender,
                                      "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                      class: "mb-3",
                                      label: "\uC131\uBCC4",
                                      items: gender,
                                      "item-props": itemProps,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: empDetail.value.deptCode,
                                      "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                      class: "mb-3",
                                      label: "\uBD80\uC11C",
                                      items: deptList.value,
                                      "item-props": itemProps,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.deptCode,
                                      "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                      class: "mb-3",
                                      label: "\uBD80\uC11C\uBC88\uD638",
                                      "read-only": "",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppDateTimePicker, {
                                      modelValue: empDetail.value.hireDate,
                                      "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                      class: "mb-3",
                                      placeholder: "\uC785\uC0AC\uC77C"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VCard, {
                      title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4",
                      height: "300"
                    }, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: empDetail.value.positionCode,
                                      "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                      class: "mb-3",
                                      label: "\uC9C1\uAE09",
                                      items: positions,
                                      "item-props": itemProps,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.phoneNumber,
                                      "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                      class: "mb-3",
                                      label: "\uC804\uD654\uBC88\uD638",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.email,
                                      "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                      class: "mb-3",
                                      label: "\uC774\uBA54\uC77C",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: empDetail.value.workplaceCode,
                                      "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                      class: "mb-3",
                                      label: "\uADFC\uBB34\uC9C0",
                                      items: workplaceList.value,
                                      "item-props": itemProps,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: empDetail.value.levelOfEducation,
                                      "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                      class: "mb-3",
                                      label: "\uCD5C\uC885\uD559\uB825",
                                      items: educations,
                                      "item-props": itemProps,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.zipCode,
                                      "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                      class: "mb-3",
                                      label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                      variant: "outlined",
                                      onClick: searchPost
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.basicAddress,
                                      "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                      class: "mb-3",
                                      label: "\uC8FC\uC18C",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: empDetail.value.detailAddress,
                                      "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                      class: "mb-3",
                                      label: "\uC0C1\uC138\uC8FC\uC18C",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { md: "4" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "mb-6",
                    height: "725",
                    title: "\uC9C1\uC6D0\uC815\uBCF4 \uC870\uD68C"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                "offset-md": "",
                                md: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextField, {
                                    modelValue: search.value,
                                    "onUpdate:modelValue": ($event) => search.value = $event,
                                    density: "compact",
                                    placeholder: "\uAC80\uC0C9",
                                    "append-inner-icon": "tabler-search",
                                    "single-line": "",
                                    "hide-details": "",
                                    dense: "",
                                    outlined: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VDataTable), {
                            headers,
                            items: filteredEmpList.value,
                            "items-per-page": 10,
                            "onClick:row": onRowClick
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { md: "8" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "mb-6",
                    height: "400"
                  }, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "mt-3" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                              createVNode(VBtn, {
                                class: "ml-3",
                                onClick: editFunc
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "tabler-edit"
                                  }),
                                  createTextVNode("\uC218\uC815 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "error",
                                class: "ml-3",
                                onClick: deleteFunc
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "tabler-trash"
                                  }),
                                  createTextVNode("\uC0AD\uC81C ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "d-flex" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "100",
                                class: "me-6",
                                image: accountDataLocal.value.avatarImg
                              }, null, 8, ["image"]),
                              createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    onClick: ($event) => {
                                      var _a;
                                      return (_a = refInputEl.value) == null ? void 0 : _a.click();
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "tabler-cloud-upload",
                                        class: "d-sm-none"
                                      }),
                                      createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("input", {
                                    ref_key: "refInputEl",
                                    ref: refInputEl,
                                    type: "file",
                                    name: "file",
                                    accept: ".jpg, .jpeg, .png",
                                    hidden: "",
                                    onInput: changeAvatar
                                  }, null, 544)
                                ]),
                                createVNode("p", { class: "text-body-1 mb-0" }, "Allowed JPG, JPEG or PNG.")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.empName,
                                    "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                    class: "mb-3",
                                    label: "\uC0AC\uC6D0\uBA85",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.empCode,
                                    "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                    class: "mb-3",
                                    label: "\uC0AC\uBC88",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppDateTimePicker, {
                                    modelValue: empDetail.value.birthDate,
                                    "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                    class: "mb-3",
                                    placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: empDetail.value.gender,
                                    "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                    class: "mb-3",
                                    label: "\uC131\uBCC4",
                                    items: gender,
                                    "item-props": itemProps,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: empDetail.value.deptCode,
                                    "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                    class: "mb-3",
                                    label: "\uBD80\uC11C",
                                    items: deptList.value,
                                    "item-props": itemProps,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.deptCode,
                                    "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                    class: "mb-3",
                                    label: "\uBD80\uC11C\uBC88\uD638",
                                    "read-only": "",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppDateTimePicker, {
                                    modelValue: empDetail.value.hireDate,
                                    "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                    class: "mb-3",
                                    placeholder: "\uC785\uC0AC\uC77C"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(VCard, {
                    title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4",
                    height: "300"
                  }, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: empDetail.value.positionCode,
                                    "onUpdate:modelValue": ($event) => empDetail.value.positionCode = $event,
                                    class: "mb-3",
                                    label: "\uC9C1\uAE09",
                                    items: positions,
                                    "item-props": itemProps,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.phoneNumber,
                                    "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                    class: "mb-3",
                                    label: "\uC804\uD654\uBC88\uD638",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.email,
                                    "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                    class: "mb-3",
                                    label: "\uC774\uBA54\uC77C",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: empDetail.value.workplaceCode,
                                    "onUpdate:modelValue": ($event) => empDetail.value.workplaceCode = $event,
                                    class: "mb-3",
                                    label: "\uADFC\uBB34\uC9C0",
                                    items: workplaceList.value,
                                    "item-props": itemProps,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: empDetail.value.levelOfEducation,
                                    "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                    class: "mb-3",
                                    label: "\uCD5C\uC885\uD559\uB825",
                                    items: educations,
                                    "item-props": itemProps,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.zipCode,
                                    "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                    class: "mb-3",
                                    label: "\uC6B0\uD3B8\uBC88\uD638(\uD074\uB9AD)",
                                    variant: "outlined",
                                    onClick: searchPost
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.basicAddress,
                                    "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                    class: "mb-3",
                                    label: "\uC8FC\uC18C",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: empDetail.value.detailAddress,
                                    "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                    class: "mb-3",
                                    label: "\uC0C1\uC138\uC8FC\uC18C",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
        modelValue: iseditFunc.value,
        "onUpdate:modelValue": ($event) => iseditFunc.value = $event,
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
              text: "\uBE48\uCE78\uC774 \uC5C6\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uBE48\uCE78\uC774 \uC5C6\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: isdeleteFunc.value,
        "onUpdate:modelValue": ($event) => isdeleteFunc.value = $event,
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
              text: "\uC0AC\uBC88\uC744 \uAE30\uC785\uD574\uC8FC\uC138\uC694."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "\uC0AC\uBC88\uC744 \uAE30\uC785\uD574\uC8FC\uC138\uC694."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: isSuccessFunc.value,
        "onUpdate:modelValue": ($event) => isSuccessFunc.value = $event,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/affair/empDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
