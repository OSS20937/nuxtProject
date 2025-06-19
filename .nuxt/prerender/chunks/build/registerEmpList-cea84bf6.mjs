import { _ as _sfc_main$1 } from './AppDateTimePicker-c59f48ad.mjs';
import { defineComponent, ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import { useRouter } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VCard, g as VCardTitle, b as VBtn, f as VCardText, j as VAvatar } from './server.mjs';
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
  __name: "registerEmpList",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    const accountData = {
      avatarImg: "/_nuxt/assets/images/empImages/EMP-09.jpeg"
    };
    const isSuccessFunc = ref(false);
    const issaveFunc = ref(false);
    const selectedDept = ref("");
    const accountDataLocal = ref(structuredClone(accountData));
    const refInputEl = ref();
    const formImg = ref(null);
    const itemProps = (item) => {
      return {
        title: item.text,
        value: item.value
      };
    };
    const gender = [
      { value: "male", text: "\uB0A8\uC131" },
      { value: "female", text: "\uC5EC\uC131" }
    ];
    const positions = [
      { value: "\uC0AC\uC7A5", text: "\uC0AC\uC7A5" },
      { value: "\uC774\uC0AC", text: "\uC774\uC0AC" },
      { value: "\uBD80\uC7A5", text: "\uBD80\uC7A5" },
      { value: "\uCC28\uC7A5", text: "\uCC28\uC7A5" },
      { value: "\uACFC\uC7A5", text: "\uACFC\uC7A5" },
      { value: "\uB300\uB9AC", text: "\uB300\uB9AC" },
      { value: "\uC0AC\uC6D0", text: "\uC0AC\uC6D0" },
      { value: "\uC778\uD134", text: "\uC778\uD134" },
      { value: "\uACC4\uC57D\uC9C1", text: "\uACC4\uC57D\uC9C1" }
    ];
    const educations = [
      { value: "\uC911\uC878\uC774\uD558", text: "\uC911\uC878\uC774\uD558" },
      { value: "\uC911\uC878", text: "\uC911\uC878" },
      { value: "\uACE0\uC878", text: "\uACE0\uC878" },
      { value: "\uB300\uC878", text: "\uD559\uC0AC" },
      { value: "\uC11D\uC0AC", text: "\uC11D\uC0AC" },
      { value: "\uBC15\uC0AC", text: "\uBC15\uC0AC" }
    ];
    const empList = ref([]);
    const deptList = ref([]);
    const workplaceList = ref([]);
    const empDetail = ref({
      empCode: "",
      workplaceName: "",
      positionName: "",
      phoneNumber: "",
      email: "",
      zipCode: "",
      basicAddress: "",
      detailAddress: "",
      levelOfEducation: "",
      empName: "",
      deptName: "",
      gender: "",
      birthDate: "",
      socialSecurityNumber: "",
      hireDate: ""
    });
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8282/hr/affair/emp");
        empList.value = response.data.empList;
        console.log("[empList]", empList.value);
      } catch (error) {
        console.error(error);
      }
    };
    const saveFunc = async () => {
      if (empDetail.value.empCode === "") {
        issaveFunc.value = true;
      } else {
        try {
          empDetail.value.deptName = selectedDept.value.deptName;
          console.log(empDetail.value);
          const postData = empDetail.value;
          const formData = new FormData();
          const res = await axios.post(
            "http://localhost:8282/hr/affair/emp",
            postData
          );
          console.log("[res.postData]", res.data);
          if (formImg.value) {
            formData.append("file", formImg.value);
            await axios.post(
              "http://localhost:8282/hr/affairFile/photoUpdate",
              formData
            );
          }
          console.log("[postData]", postData);
          await fetchData();
          Object.keys(empDetail.value).forEach((key) => {
            empDetail.value[key] = "";
          });
          isSuccessFunc.value = true;
        } catch (error) {
          console.log("\uB4F1\uB85D \uC624\uB958", error);
          alert("\uC9C1\uC6D0\uC815\uBCF4 \uB4F1\uB85D \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
        }
      }
    };
    const onImageChange = (file) => {
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
    const resetAvatar = () => {
      accountDataLocal.value.avatarImg = accountData.avatarImg;
    };
    const sample6ExecDaumPostcode = () => {
      new daum.Postcode({
        oncomplete: (data) => {
          let addr = "";
          let extraAddr = "";
          if (data.userSelectedType === "R")
            addr = data.roadAddress;
          else
            addr = data.jibunAddress;
          if (data.userSelectedType === "R") {
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname))
              extraAddr += data.bname;
            if (data.buildingName !== "" && data.apartment === "Y") {
              extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            if (extraAddr !== "")
              extraAddr = ` (${extraAddr})`;
            empDetail.value.zipCode = data.zonecode;
            empDetail.value.basicAddress = addr;
            empDetail.value.detailAddress = extraAddr;
            const zipcodeElement = document.getElementById("sample6Postcode");
            if (zipcodeElement)
              zipcodeElement.value = data.zonecode;
            else
              console.error("zipcodeElement is null or not found");
            document.getElementById("sample6Address").value = addr;
            document.getElementById("sample6DetailAddress").focus();
          } else {
            document.getElementById("sample6ExtraAddress").value = "";
            empDetail.value.zipCode = data.zonecode;
            empDetail.value.basicAddress = addr;
            empDetail.value.detailAddress = "";
          }
        }
      }).open();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-2">\uC9C1\uC6D0\uC815\uBCF4 \uB4F1\uB85D</h1>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { md: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "d-flex justify-space-between" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 `);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      onClick: saveFunc
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \uB4F1\uB85D `);
                                        } else {
                                          return [
                                            createTextVNode(" \uB4F1\uB85D ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: saveFunc
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uB4F1\uB85D ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
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
                                          _push7(`<span class="d-none d-sm-block"${_scopeId6}>Upload photo</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "d-none d-sm-block" }, "Upload photo")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<input type="file" accept="image/jpeg, image/jpg, image/png" hidden${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      type: "reset",
                                      color: "secondary",
                                      variant: "outlined",
                                      onClick: resetAvatar
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="d-none d-sm-block"${_scopeId6}>Reset</span>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "d-none d-sm-block" }, "Reset")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><p class="text-body-1 mb-0"${_scopeId5}> Allowed JPG, JPEG or PNG. </p></form>`);
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
                                              createVNode("span", { class: "d-none d-sm-block" }, "Upload photo")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode("input", {
                                            ref_key: "refInputEl",
                                            ref: refInputEl,
                                            type: "file",
                                            accept: "image/jpeg, image/jpg, image/png",
                                            hidden: "",
                                            onChange: onImageChange
                                          }, null, 544),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: resetAvatar
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "d-none d-sm-block" }, "Reset")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, JPEG or PNG. ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: empDetail.value.empName,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                                  label: "\uC0AC\uC6D0\uBA85",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: empDetail.value.empName,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                                    label: "\uC0AC\uC6D0\uBA85",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: empDetail.value.empCode,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                                  label: "\uC0AC\uBC88",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: empDetail.value.empCode,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                                    label: "\uC0AC\uBC88",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppDateTimePicker, {
                                                  modelValue: empDetail.value.birthDate,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                                  placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppDateTimePicker, {
                                                    modelValue: empDetail.value.birthDate,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                                    placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: empDetail.value.socialSecurityNumber,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                                  label: "\uC8FC\uBBFC\uBC88\uD638",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: empDetail.value.socialSecurityNumber,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                                    label: "\uC8FC\uBBFC\uBC88\uD638",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: selectedDept.value,
                                                  "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                                  label: "\uBD80\uC11C",
                                                  variant: "outlined",
                                                  items: deptList.value
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: selectedDept.value,
                                                    "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                                    label: "\uBD80\uC11C",
                                                    variant: "outlined",
                                                    items: deptList.value
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: selectedDept.value.deptCode,
                                                  "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                                  label: "\uBD80\uC11C\uBC88\uD638",
                                                  variant: "outlined",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: selectedDept.value.deptCode,
                                                    "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                                    label: "\uBD80\uC11C\uBC88\uD638",
                                                    variant: "outlined",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppDateTimePicker, {
                                                  modelValue: empDetail.value.hireDate,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                                  placeholder: "\uC785\uC0AC\uC77C",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppDateTimePicker, {
                                                    modelValue: empDetail.value.hireDate,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                                    placeholder: "\uC785\uC0AC\uC77C",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: empDetail.value.gender,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                                  label: "\uC131\uBCC4",
                                                  variant: "outlined",
                                                  items: gender,
                                                  "item-props": itemProps
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: empDetail.value.gender,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                                    label: "\uC131\uBCC4",
                                                    variant: "outlined",
                                                    items: gender,
                                                    "item-props": itemProps
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
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
                                                createVNode(VTextField, {
                                                  modelValue: empDetail.value.socialSecurityNumber,
                                                  "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                                  label: "\uC8FC\uBBFC\uBC88\uD638",
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
                                                  modelValue: selectedDept.value,
                                                  "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                                  label: "\uBD80\uC11C",
                                                  variant: "outlined",
                                                  items: deptList.value
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
                                                  modelValue: selectedDept.value.deptCode,
                                                  "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                                  label: "\uBD80\uC11C\uBC88\uD638",
                                                  variant: "outlined",
                                                  readonly: ""
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
                                                  placeholder: "\uC785\uC0AC\uC77C",
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
                                                  label: "\uC131\uBCC4",
                                                  variant: "outlined",
                                                  items: gender,
                                                  "item-props": itemProps
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
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
                                              createVNode(VTextField, {
                                                modelValue: empDetail.value.socialSecurityNumber,
                                                "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                                label: "\uC8FC\uBBFC\uBC88\uD638",
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
                                                modelValue: selectedDept.value,
                                                "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                                label: "\uBD80\uC11C",
                                                variant: "outlined",
                                                items: deptList.value
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
                                                modelValue: selectedDept.value.deptCode,
                                                "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                                label: "\uBD80\uC11C\uBC88\uD638",
                                                variant: "outlined",
                                                readonly: ""
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
                                                placeholder: "\uC785\uC0AC\uC77C",
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
                                                label: "\uC131\uBCC4",
                                                variant: "outlined",
                                                items: gender,
                                                "item-props": itemProps
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "d-flex justify-space-between" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: saveFunc
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uB4F1\uB85D ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "d-flex align-center" }, {
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
                                            createVNode("span", { class: "d-none d-sm-block" }, "Upload photo")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode("input", {
                                          ref_key: "refInputEl",
                                          ref: refInputEl,
                                          type: "file",
                                          accept: "image/jpeg, image/jpg, image/png",
                                          hidden: "",
                                          onChange: onImageChange
                                        }, null, 544),
                                        createVNode(VBtn, {
                                          type: "reset",
                                          color: "secondary",
                                          variant: "outlined",
                                          onClick: resetAvatar
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "d-none d-sm-block" }, "Reset")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, JPEG or PNG. ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "d-flex" }, {
                                  default: withCtx(() => [
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
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.socialSecurityNumber,
                                              "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                              label: "\uC8FC\uBBFC\uBC88\uD638",
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
                                              modelValue: selectedDept.value,
                                              "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                              label: "\uBD80\uC11C",
                                              variant: "outlined",
                                              items: deptList.value
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
                                              modelValue: selectedDept.value.deptCode,
                                              "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                              label: "\uBD80\uC11C\uBC88\uD638",
                                              variant: "outlined",
                                              readonly: ""
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
                                              placeholder: "\uC785\uC0AC\uC77C",
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
                                              label: "\uC131\uBCC4",
                                              variant: "outlined",
                                              items: gender,
                                              "item-props": itemProps
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
                        }, _parent4, _scopeId3));
                        _push4(`<br${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCard, { title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: empDetail.value.positionName,
                                "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                                class: "ma-4",
                                label: "\uC9C1\uAE09",
                                variant: "outlined",
                                items: positions,
                                "item-props": itemProps
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.phoneNumber,
                                "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                class: "ma-4",
                                label: "\uC804\uD654\uBC88\uD638",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.email,
                                "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                class: "ma-4",
                                label: "\uC774\uBA54\uC77C",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: empDetail.value.workplaceName,
                                "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                                class: "ma-4",
                                label: "\uADFC\uBB34\uC9C0",
                                variant: "outlined",
                                items: workplaceList.value,
                                "item-props": itemProps
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: empDetail.value.levelOfEducation,
                                "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                class: "ma-4",
                                label: "\uCD5C\uC885\uD559\uB825",
                                variant: "outlined",
                                items: educations,
                                "item-props": itemProps
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.zipCode,
                                "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                class: "ma-4",
                                label: "\uC6B0\uD3B8\uBC88\uD638",
                                variant: "outlined",
                                onClick: sample6ExecDaumPostcode
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.basicAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                class: "ma-4",
                                label: "\uC8FC\uC18C",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.detailAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                class: "ma-4",
                                label: "\uC0C1\uC138\uC8FC\uC18C",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: empDetail.value.positionName,
                                  "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                                  class: "ma-4",
                                  label: "\uC9C1\uAE09",
                                  variant: "outlined",
                                  items: positions,
                                  "item-props": itemProps
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.phoneNumber,
                                  "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                  class: "ma-4",
                                  label: "\uC804\uD654\uBC88\uD638",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.email,
                                  "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                  class: "ma-4",
                                  label: "\uC774\uBA54\uC77C",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VSelect, {
                                  modelValue: empDetail.value.workplaceName,
                                  "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                                  class: "ma-4",
                                  label: "\uADFC\uBB34\uC9C0",
                                  variant: "outlined",
                                  items: workplaceList.value,
                                  "item-props": itemProps
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                createVNode(VSelect, {
                                  modelValue: empDetail.value.levelOfEducation,
                                  "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                  class: "ma-4",
                                  label: "\uCD5C\uC885\uD559\uB825",
                                  variant: "outlined",
                                  items: educations,
                                  "item-props": itemProps
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.zipCode,
                                  "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                  class: "ma-4",
                                  label: "\uC6B0\uD3B8\uBC88\uD638",
                                  variant: "outlined",
                                  onClick: sample6ExecDaumPostcode
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.basicAddress,
                                  "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                  class: "ma-4",
                                  label: "\uC8FC\uC18C",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.detailAddress,
                                  "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                  class: "ma-4",
                                  label: "\uC0C1\uC138\uC8FC\uC18C",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex justify-space-between" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: saveFunc
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uB4F1\uB85D ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "d-flex align-center" }, {
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
                                          createVNode("span", { class: "d-none d-sm-block" }, "Upload photo")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode("input", {
                                        ref_key: "refInputEl",
                                        ref: refInputEl,
                                        type: "file",
                                        accept: "image/jpeg, image/jpg, image/png",
                                        hidden: "",
                                        onChange: onImageChange
                                      }, null, 544),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        color: "secondary",
                                        variant: "outlined",
                                        onClick: resetAvatar
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "d-none d-sm-block" }, "Reset")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, JPEG or PNG. ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "d-flex" }, {
                                default: withCtx(() => [
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
                                          createVNode(VTextField, {
                                            modelValue: empDetail.value.socialSecurityNumber,
                                            "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                            label: "\uC8FC\uBBFC\uBC88\uD638",
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
                                            modelValue: selectedDept.value,
                                            "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                            label: "\uBD80\uC11C",
                                            variant: "outlined",
                                            items: deptList.value
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
                                            modelValue: selectedDept.value.deptCode,
                                            "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                            label: "\uBD80\uC11C\uBC88\uD638",
                                            variant: "outlined",
                                            readonly: ""
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
                                            placeholder: "\uC785\uC0AC\uC77C",
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
                                            label: "\uC131\uBCC4",
                                            variant: "outlined",
                                            items: gender,
                                            "item-props": itemProps
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
                          createVNode("br"),
                          createVNode(VCard, { title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: empDetail.value.positionName,
                                "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                                class: "ma-4",
                                label: "\uC9C1\uAE09",
                                variant: "outlined",
                                items: positions,
                                "item-props": itemProps
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.phoneNumber,
                                "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                class: "ma-4",
                                label: "\uC804\uD654\uBC88\uD638",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.email,
                                "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                class: "ma-4",
                                label: "\uC774\uBA54\uC77C",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VSelect, {
                                modelValue: empDetail.value.workplaceName,
                                "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                                class: "ma-4",
                                label: "\uADFC\uBB34\uC9C0",
                                variant: "outlined",
                                items: workplaceList.value,
                                "item-props": itemProps
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                              createVNode(VSelect, {
                                modelValue: empDetail.value.levelOfEducation,
                                "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                class: "ma-4",
                                label: "\uCD5C\uC885\uD559\uB825",
                                variant: "outlined",
                                items: educations,
                                "item-props": itemProps
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.zipCode,
                                "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                class: "ma-4",
                                label: "\uC6B0\uD3B8\uBC88\uD638",
                                variant: "outlined",
                                onClick: sample6ExecDaumPostcode
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.basicAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                class: "ma-4",
                                label: "\uC8FC\uC18C",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.detailAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                class: "ma-4",
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { md: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "d-flex justify-space-between" }, {
                              default: withCtx(() => [
                                createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: saveFunc
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB4F1\uB85D ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "d-flex align-center" }, {
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
                                        createVNode("span", { class: "d-none d-sm-block" }, "Upload photo")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("input", {
                                      ref_key: "refInputEl",
                                      ref: refInputEl,
                                      type: "file",
                                      accept: "image/jpeg, image/jpg, image/png",
                                      hidden: "",
                                      onChange: onImageChange
                                    }, null, 544),
                                    createVNode(VBtn, {
                                      type: "reset",
                                      color: "secondary",
                                      variant: "outlined",
                                      onClick: resetAvatar
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "d-none d-sm-block" }, "Reset")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, JPEG or PNG. ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "d-flex" }, {
                              default: withCtx(() => [
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
                                        createVNode(VTextField, {
                                          modelValue: empDetail.value.socialSecurityNumber,
                                          "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                          label: "\uC8FC\uBBFC\uBC88\uD638",
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
                                          modelValue: selectedDept.value,
                                          "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                          label: "\uBD80\uC11C",
                                          variant: "outlined",
                                          items: deptList.value
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
                                          modelValue: selectedDept.value.deptCode,
                                          "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                          label: "\uBD80\uC11C\uBC88\uD638",
                                          variant: "outlined",
                                          readonly: ""
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
                                          placeholder: "\uC785\uC0AC\uC77C",
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
                                          label: "\uC131\uBCC4",
                                          variant: "outlined",
                                          items: gender,
                                          "item-props": itemProps
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
                        createVNode("br"),
                        createVNode(VCard, { title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4" }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: empDetail.value.positionName,
                              "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                              class: "ma-4",
                              label: "\uC9C1\uAE09",
                              variant: "outlined",
                              items: positions,
                              "item-props": itemProps
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.phoneNumber,
                              "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                              class: "ma-4",
                              label: "\uC804\uD654\uBC88\uD638",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.email,
                              "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                              class: "ma-4",
                              label: "\uC774\uBA54\uC77C",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VSelect, {
                              modelValue: empDetail.value.workplaceName,
                              "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                              class: "ma-4",
                              label: "\uADFC\uBB34\uC9C0",
                              variant: "outlined",
                              items: workplaceList.value,
                              "item-props": itemProps
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                            createVNode(VSelect, {
                              modelValue: empDetail.value.levelOfEducation,
                              "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                              class: "ma-4",
                              label: "\uCD5C\uC885\uD559\uB825",
                              variant: "outlined",
                              items: educations,
                              "item-props": itemProps
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.zipCode,
                              "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                              class: "ma-4",
                              label: "\uC6B0\uD3B8\uBC88\uD638",
                              variant: "outlined",
                              onClick: sample6ExecDaumPostcode
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.basicAddress,
                              "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                              class: "ma-4",
                              label: "\uC8FC\uC18C",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.detailAddress,
                              "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                              class: "ma-4",
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { md: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex justify-space-between" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC9C1\uC6D0\uAE30\uCD08\uC815\uBCF4 "),
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: saveFunc
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uB4F1\uB85D ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "d-flex align-center" }, {
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
                                      createVNode("span", { class: "d-none d-sm-block" }, "Upload photo")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("input", {
                                    ref_key: "refInputEl",
                                    ref: refInputEl,
                                    type: "file",
                                    accept: "image/jpeg, image/jpg, image/png",
                                    hidden: "",
                                    onChange: onImageChange
                                  }, null, 544),
                                  createVNode(VBtn, {
                                    type: "reset",
                                    color: "secondary",
                                    variant: "outlined",
                                    onClick: resetAvatar
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "d-none d-sm-block" }, "Reset")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, JPEG or PNG. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "d-flex" }, {
                            default: withCtx(() => [
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
                                      createVNode(VTextField, {
                                        modelValue: empDetail.value.socialSecurityNumber,
                                        "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                        label: "\uC8FC\uBBFC\uBC88\uD638",
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
                                        modelValue: selectedDept.value,
                                        "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                        label: "\uBD80\uC11C",
                                        variant: "outlined",
                                        items: deptList.value
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
                                        modelValue: selectedDept.value.deptCode,
                                        "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                        label: "\uBD80\uC11C\uBC88\uD638",
                                        variant: "outlined",
                                        readonly: ""
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
                                        placeholder: "\uC785\uC0AC\uC77C",
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
                                        label: "\uC131\uBCC4",
                                        variant: "outlined",
                                        items: gender,
                                        "item-props": itemProps
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
                      createVNode("br"),
                      createVNode(VCard, { title: "\uC9C1\uC6D0\uC138\uBD80\uC815\uBCF4" }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: empDetail.value.positionName,
                            "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                            class: "ma-4",
                            label: "\uC9C1\uAE09",
                            variant: "outlined",
                            items: positions,
                            "item-props": itemProps
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.phoneNumber,
                            "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                            class: "ma-4",
                            label: "\uC804\uD654\uBC88\uD638",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.email,
                            "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                            class: "ma-4",
                            label: "\uC774\uBA54\uC77C",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VSelect, {
                            modelValue: empDetail.value.workplaceName,
                            "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                            class: "ma-4",
                            label: "\uADFC\uBB34\uC9C0",
                            variant: "outlined",
                            items: workplaceList.value,
                            "item-props": itemProps
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(VSelect, {
                            modelValue: empDetail.value.levelOfEducation,
                            "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                            class: "ma-4",
                            label: "\uCD5C\uC885\uD559\uB825",
                            variant: "outlined",
                            items: educations,
                            "item-props": itemProps
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.zipCode,
                            "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                            class: "ma-4",
                            label: "\uC6B0\uD3B8\uBC88\uD638",
                            variant: "outlined",
                            onClick: sample6ExecDaumPostcode
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.basicAddress,
                            "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                            class: "ma-4",
                            label: "\uC8FC\uC18C",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.detailAddress,
                            "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                            class: "ma-4",
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
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: issaveFunc.value,
        "onUpdate:modelValue": ($event) => issaveFunc.value = $event,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/affair/registerEmpList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
