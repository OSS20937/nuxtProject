import { _ as _sfc_main$1 } from './AppDateTimePicker-c59f48ad.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, isRef, withKeys, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { u as useLoginStore, V as VCard, g as VCardTitle, f as VCardText, a as VImg, b as VBtn, l as VDialog, e as VCardActions } from './server.mjs';
import { u as useDepartmentStore, a as usePositionStore } from './index-1216d084.mjs';
import { u as useEmpStore } from './index-fbfe3a36.mjs';
import { V as VContainer } from './VContainer-0419be8f.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VSelect } from './VSelect-03a0285c.mjs';
import '../virtual/_commonjsHelpers.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/flatpickr@4.6.13/node_modules/flatpickr/dist/flatpickr.js';
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
  __name: "eddEmp",
  __ssrInlineRender: true,
  setup(__props) {
    useDepartmentStore();
    useLoginStore();
    const empStore = useEmpStore();
    usePositionStore();
    const confirmDialog = ref(false);
    const departmentInfo = ref();
    const positionListInfo = ref();
    const infoRegistrar = ref("");
    const empName = ref("");
    const gender = ref(null);
    const birthDate = ref("");
    const socialSecurityNoBack = ref("");
    const phoneNumber = ref("");
    const address = ref("");
    const addressDetail = ref("");
    const postalCode = ref("");
    const educationLevel = ref("");
    const email = ref("");
    const hireDate = ref("");
    const department = ref(null);
    const position = ref(null);
    const workContract = ref(null);
    const workExperience = ref(null);
    const authCode = ref(null);
    const imageUrl = ref("");
    ({
      empName: empName.value,
      gender: gender.value,
      birthDate: birthDate.value,
      socialSecurityNo: socialSecurityNoBack.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
      addressDetail: addressDetail.value,
      postalCode: postalCode.value,
      educationLevel: educationLevel.value,
      email: email.value,
      hireDate: hireDate.value,
      deptCode: department.value,
      positionCode: position.value,
      workContract: workContract.value,
      workExperience: workExperience.value,
      authCode: authCode.value,
      createdBy: infoRegistrar.value
    });
    const genderOptions = [
      { label: "\uB0A8\uC131", value: "M" },
      { label: "\uC5EC\uC131", value: "F" }
    ];
    const workContractOptions = ["\uC815\uADDC\uC9C1", "\uACC4\uC57D\uC9C1", "\uC778\uD134"];
    const workExperienceOptions = ["\uC2E0\uC785", "\uACBD\uB825"];
    const hireAuthorityOptions = [
      { label: "\uC778\uC0AC \uC77C\uBC18", value: "ROLE_EMP" },
      { label: "\uC778\uC0AC \uAD00\uB9AC", value: "ROLE_HR" }
    ];
    function onInputSSN(event) {
      const input = event.target;
      socialSecurityNoBack.value = input.value.replace(/\D/g, "").slice(0, 7);
    }
    function onPhoneInput(event) {
      const input = event.target;
      phoneNumber.value = formatPhoneNumber(input.value);
    }
    function onBackspace(event) {
      var _a;
      const input = event.target;
      const cursor = (_a = input.selectionStart) != null ? _a : 0;
      if (cursor > 0 && input.value[cursor - 1] === "-") {
        phoneNumber.value = phoneNumber.value.slice(0, cursor - 1) + phoneNumber.value.slice(cursor);
        event.preventDefault();
      }
    }
    function openDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: function(data) {
          address.value = data.address;
          postalCode.value = data.zonecode;
        }
      }).open();
    }
    function formatPhoneNumber(raw) {
      const digits = raw.replace(/\D/g, "");
      if (digits.startsWith("02")) {
        if (digits.length <= 2)
          return digits;
        else if (digits.length <= 5)
          return digits.replace(/(\d{2})(\d+)/, "$1-$2");
        else if (digits.length <= 9)
          return digits.replace(/(\d{2})(\d{3,4})(\d{0,4})/, "$1-$2-$3");
        else
          return digits.slice(0, 10).replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      }
      if (digits.length === 10) {
        return digits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
      if (digits.length === 11) {
        return digits.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      }
      if (digits.length <= 3)
        return digits;
      else if (digits.length <= 7)
        return digits.replace(/(\d{3})(\d+)/, "$1-$2");
      else
        return digits.replace(/(\d{3})(\d{4})(\d*)/, "$1-$2-$3");
    }
    const fileInput = ref(null);
    const selectedFile = ref(null);
    const triggerFileSelect = () => {
      var _a;
      (_a = fileInput.value) == null ? void 0 : _a.click();
    };
    const handleFileChange = (event) => {
      var _a;
      const target = event.target;
      const file = (_a = target.files) == null ? void 0 : _a[0];
      if (!file)
        return;
      selectedFile.value = file;
      imageUrl.value = URL.createObjectURL(file);
    };
    const uplodeEmpPoto = async (empCode) => {
      if (!selectedFile.value) {
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedFile.value);
      formData.append("empCode", empCode);
      await empStore.REGISTER_EMP_PROFILE_IMAGE(formData);
    };
    const empRegister = async () => {
      confirmDialog.value = false;
      if (!validateForm())
        return;
      if (selectedFile.value === null) {
        alert("\uC0AC\uC9C4\uC744 \uC120\uD0DD\uD558\uC138\uC694.");
        return;
      }
      const registerEmpInfo2 = {
        empName: empName.value,
        gender: gender.value,
        birthDate: birthDate.value,
        socialSecurityNo: socialSecurityNoBack.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        addressDetail: addressDetail.value,
        postalCode: postalCode.value,
        educationLevel: educationLevel.value,
        email: email.value,
        hireDate: hireDate.value,
        deptCode: department.value,
        positionCode: position.value,
        workContract: workContract.value,
        workExperience: workExperience.value,
        authCode: authCode.value,
        createdBy: infoRegistrar.value
      };
      console.log("\uC804\uC1A1 \uB370\uC774\uD130:", registerEmpInfo2);
      await empStore.REGISTER_EMP(registerEmpInfo2);
      console.log("empCode: ", empStore.empCode);
      console.log("result: ", empStore.isSuccess);
      await uplodeEmpPoto(empStore.empCode);
      if (empStore.isImageRegist) {
        alert("\uC9C1\uC6D0 \uB4F1\uB85D \uC131\uACF5");
      } else {
        alert("\uC9C1\uC6D0 \uB4F1\uB85D \uC2E4\uD328");
      }
    };
    const validateForm = () => {
      const requiredFields = [
        { label: "\uC774\uB984", value: empName.value },
        { label: "\uC131\uBCC4", value: gender.value },
        { label: "\uC0DD\uB144\uC6D4\uC77C", value: birthDate.value },
        { label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC", value: socialSecurityNoBack.value },
        { label: "\uC804\uD654\uBC88\uD638", value: phoneNumber.value },
        { label: "\uC8FC\uC18C", value: address.value },
        { label: "\uC0C1\uC138 \uC8FC\uC18C", value: addressDetail.value },
        { label: "\uC6B0\uD3B8\uBC88\uD638", value: postalCode.value },
        { label: "\uCD5C\uC885 \uD559\uB825", value: educationLevel.value },
        { label: "\uC774\uBA54\uC77C", value: email.value },
        { label: "\uC785\uC0AC\uC77C", value: hireDate.value },
        { label: "\uC18C\uC18D \uBD80\uC11C", value: department.value },
        { label: "\uC9C1\uAE09", value: position.value },
        { label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84", value: workContract.value },
        { label: "\uACBD\uB825 \uAD6C\uBD84", value: workExperience.value },
        { label: "\uC778\uC0AC \uAD8C\uD55C", value: authCode.value },
        { label: "\uB4F1\uB85D\uC790", value: infoRegistrar.value }
      ];
      for (const field of requiredFields) {
        if (field.value === "" || field.value === null) {
          alert(`"${field.label}" \uD56D\uBAA9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.`);
          return false;
        }
      }
      return true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-2">\uC0AC\uC6D0 \uB4F1\uB85D</h1>`);
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
                              _push5(ssrRenderComponent(VCardTitle, { class: "d-flex justify-space-between" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "2",
                                            class: "d-flex flex-column align-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, {
                                                  src: unref(imageUrl),
                                                  alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                                  height: "180",
                                                  width: "140",
                                                  class: "elevation-2 mb-2",
                                                  cover: "",
                                                  style: { "max-height": "180px", "max-width": "140px" }
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<div class="d-flex justify-center gap-2 mt-2"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  variant: "outlined",
                                                  size: "small",
                                                  onClick: triggerFileSelect
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` \uC0AC\uC9C4 \uC120\uD0DD `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<input type="file" accept="image/*" class="d-none"${_scopeId7}></div>`);
                                              } else {
                                                return [
                                                  createVNode(VImg, {
                                                    src: unref(imageUrl),
                                                    alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                                    height: "180",
                                                    width: "140",
                                                    class: "elevation-2 mb-2",
                                                    cover: "",
                                                    style: { "max-height": "180px", "max-width": "140px" }
                                                  }, null, 8, ["src"]),
                                                  createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                                    createVNode(VBtn, {
                                                      variant: "outlined",
                                                      size: "small",
                                                      onClick: triggerFileSelect
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("input", {
                                                      type: "file",
                                                      ref_key: "fileInput",
                                                      ref: fileInput,
                                                      accept: "image/*",
                                                      class: "d-none",
                                                      onChange: handleFileChange
                                                    }, null, 544)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "10"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              label: "\uC774\uB984",
                                                              variant: "outlined",
                                                              modelValue: unref(empName),
                                                              "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                label: "\uC774\uB984",
                                                                variant: "outlined",
                                                                modelValue: unref(empName),
                                                                "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              label: "\uC131\uBCC4",
                                                              variant: "outlined",
                                                              items: genderOptions,
                                                              "item-title": "label",
                                                              "item-value": "value",
                                                              modelValue: unref(gender),
                                                              "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "\uC131\uBCC4",
                                                                variant: "outlined",
                                                                items: genderOptions,
                                                                "item-title": "label",
                                                                "item-value": "value",
                                                                modelValue: unref(gender),
                                                                "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_AppDateTimePicker, {
                                                              placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                              variant: "outlined",
                                                              modelValue: unref(birthDate),
                                                              "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_AppDateTimePicker, {
                                                                placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                                variant: "outlined",
                                                                modelValue: unref(birthDate),
                                                                "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(socialSecurityNoBack),
                                                              "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                              label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                              variant: "outlined",
                                                              maxlength: "7",
                                                              rules: [
                                                                (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                              ],
                                                              onInput: onInputSSN
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(socialSecurityNoBack),
                                                                "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                                label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                                variant: "outlined",
                                                                maxlength: "7",
                                                                rules: [
                                                                  (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                                ],
                                                                onInput: onInputSSN
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(phoneNumber),
                                                              "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                              label: "\uC804\uD654\uBC88\uD638",
                                                              variant: "outlined",
                                                              onInput: onPhoneInput,
                                                              onKeydown: onBackspace
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(phoneNumber),
                                                                "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                                label: "\uC804\uD654\uBC88\uD638",
                                                                variant: "outlined",
                                                                onInput: onPhoneInput,
                                                                onKeydown: withKeys(onBackspace, ["backspace"])
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(address),
                                                              "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                              label: "\uC8FC\uC18C",
                                                              readonly: "",
                                                              onClick: openDaumPostcode
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(address),
                                                                "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                                label: "\uC8FC\uC18C",
                                                                readonly: "",
                                                                onClick: openDaumPostcode
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(addressDetail),
                                                              "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                              label: "\uC0C1\uC138 \uC8FC\uC18C",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(addressDetail),
                                                                "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                                label: "\uC0C1\uC138 \uC8FC\uC18C",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(postalCode),
                                                              "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                              label: "\uC6B0\uD3B8\uBC88\uD638",
                                                              readonly: ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(postalCode),
                                                                "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                                label: "\uC6B0\uD3B8\uBC88\uD638",
                                                                readonly: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(educationLevel),
                                                              "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                              label: "\uCD5C\uC885 \uD559\uB825",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(educationLevel),
                                                                "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                                label: "\uCD5C\uC885 \uD559\uB825",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(email),
                                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                              label: "E-Mail",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(email),
                                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                                label: "E-Mail",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_AppDateTimePicker, {
                                                              placeholder: "\uC785\uC0AC\uC77C",
                                                              variant: "outlined",
                                                              modelValue: unref(hireDate),
                                                              "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_AppDateTimePicker, {
                                                                placeholder: "\uC785\uC0AC\uC77C",
                                                                variant: "outlined",
                                                                modelValue: unref(hireDate),
                                                                "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              modelValue: unref(department),
                                                              "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                              items: unref(departmentInfo),
                                                              "item-title": "deptName",
                                                              "item-value": "deptCode",
                                                              label: "\uC18C\uC18D \uBD80\uC11C",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                modelValue: unref(department),
                                                                "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                                items: unref(departmentInfo),
                                                                "item-title": "deptName",
                                                                "item-value": "deptCode",
                                                                label: "\uC18C\uC18D \uBD80\uC11C",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              modelValue: unref(position),
                                                              "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                              items: unref(positionListInfo),
                                                              "item-title": "positionName",
                                                              "item-value": "positionCode",
                                                              label: "\uC9C1\uAE09",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                modelValue: unref(position),
                                                                "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                                items: unref(positionListInfo),
                                                                "item-title": "positionName",
                                                                "item-value": "positionCode",
                                                                label: "\uC9C1\uAE09",
                                                                variant: "outlined"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                              variant: "outlined",
                                                              items: workContractOptions,
                                                              modelValue: unref(workContract),
                                                              "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                                variant: "outlined",
                                                                items: workContractOptions,
                                                                modelValue: unref(workContract),
                                                                "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              label: "\uACBD\uB825 \uAD6C\uBD84",
                                                              variant: "outlined",
                                                              items: workExperienceOptions,
                                                              modelValue: unref(workExperience),
                                                              "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "\uACBD\uB825 \uAD6C\uBD84",
                                                                variant: "outlined",
                                                                items: workExperienceOptions,
                                                                modelValue: unref(workExperience),
                                                                "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              label: "\uC778\uC0AC \uAD8C\uD55C",
                                                              variant: "outlined",
                                                              items: hireAuthorityOptions,
                                                              "item-title": "label",
                                                              "item-value": "value",
                                                              modelValue: unref(authCode),
                                                              "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "\uC778\uC0AC \uAD8C\uD55C",
                                                                variant: "outlined",
                                                                items: hireAuthorityOptions,
                                                                "item-title": "label",
                                                                "item-value": "value",
                                                                modelValue: unref(authCode),
                                                                "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              label: "\uC774\uB984",
                                                              variant: "outlined",
                                                              modelValue: unref(empName),
                                                              "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                              label: "\uC131\uBCC4",
                                                              variant: "outlined",
                                                              items: genderOptions,
                                                              "item-title": "label",
                                                              "item-value": "value",
                                                              modelValue: unref(gender),
                                                              "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                              placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                              variant: "outlined",
                                                              modelValue: unref(birthDate),
                                                              "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                              modelValue: unref(socialSecurityNoBack),
                                                              "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                              label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                              variant: "outlined",
                                                              maxlength: "7",
                                                              rules: [
                                                                (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                              ],
                                                              onInput: onInputSSN
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(phoneNumber),
                                                              "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                              label: "\uC804\uD654\uBC88\uD638",
                                                              variant: "outlined",
                                                              onInput: onPhoneInput,
                                                              onKeydown: withKeys(onBackspace, ["backspace"])
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(address),
                                                              "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                              label: "\uC8FC\uC18C",
                                                              readonly: "",
                                                              onClick: openDaumPostcode
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
                                                              modelValue: unref(addressDetail),
                                                              "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                              label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                              modelValue: unref(postalCode),
                                                              "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                              label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                            createVNode(VTextField, {
                                                              modelValue: unref(educationLevel),
                                                              "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                              label: "\uCD5C\uC885 \uD559\uB825",
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
                                                              modelValue: unref(email),
                                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                              label: "E-Mail",
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
                                                              placeholder: "\uC785\uC0AC\uC77C",
                                                              variant: "outlined",
                                                              modelValue: unref(hireDate),
                                                              "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                              modelValue: unref(department),
                                                              "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                              items: unref(departmentInfo),
                                                              "item-title": "deptName",
                                                              "item-value": "deptCode",
                                                              label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                              modelValue: unref(position),
                                                              "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                              items: unref(positionListInfo),
                                                              "item-title": "positionName",
                                                              "item-value": "positionCode",
                                                              label: "\uC9C1\uAE09",
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
                                                              label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                              variant: "outlined",
                                                              items: workContractOptions,
                                                              modelValue: unref(workContract),
                                                              "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                              label: "\uACBD\uB825 \uAD6C\uBD84",
                                                              variant: "outlined",
                                                              items: workExperienceOptions,
                                                              modelValue: unref(workExperience),
                                                              "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                              label: "\uC778\uC0AC \uAD8C\uD55C",
                                                              variant: "outlined",
                                                              items: hireAuthorityOptions,
                                                              "item-title": "label",
                                                              "item-value": "value",
                                                              modelValue: unref(authCode),
                                                              "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                                            label: "\uC774\uB984",
                                                            variant: "outlined",
                                                            modelValue: unref(empName),
                                                            "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                            label: "\uC131\uBCC4",
                                                            variant: "outlined",
                                                            items: genderOptions,
                                                            "item-title": "label",
                                                            "item-value": "value",
                                                            modelValue: unref(gender),
                                                            "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                            placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                            variant: "outlined",
                                                            modelValue: unref(birthDate),
                                                            "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                            modelValue: unref(socialSecurityNoBack),
                                                            "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                            label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                            variant: "outlined",
                                                            maxlength: "7",
                                                            rules: [
                                                              (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                            ],
                                                            onInput: onInputSSN
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(phoneNumber),
                                                            "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                            label: "\uC804\uD654\uBC88\uD638",
                                                            variant: "outlined",
                                                            onInput: onPhoneInput,
                                                            onKeydown: withKeys(onBackspace, ["backspace"])
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(address),
                                                            "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                            label: "\uC8FC\uC18C",
                                                            readonly: "",
                                                            onClick: openDaumPostcode
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
                                                            modelValue: unref(addressDetail),
                                                            "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                            label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                            modelValue: unref(postalCode),
                                                            "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                            label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                          createVNode(VTextField, {
                                                            modelValue: unref(educationLevel),
                                                            "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                            label: "\uCD5C\uC885 \uD559\uB825",
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
                                                            modelValue: unref(email),
                                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                            label: "E-Mail",
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
                                                            placeholder: "\uC785\uC0AC\uC77C",
                                                            variant: "outlined",
                                                            modelValue: unref(hireDate),
                                                            "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                            modelValue: unref(department),
                                                            "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                            items: unref(departmentInfo),
                                                            "item-title": "deptName",
                                                            "item-value": "deptCode",
                                                            label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                            modelValue: unref(position),
                                                            "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                            items: unref(positionListInfo),
                                                            "item-title": "positionName",
                                                            "item-value": "positionCode",
                                                            label: "\uC9C1\uAE09",
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
                                                            label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                            variant: "outlined",
                                                            items: workContractOptions,
                                                            modelValue: unref(workContract),
                                                            "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                            label: "\uACBD\uB825 \uAD6C\uBD84",
                                                            variant: "outlined",
                                                            items: workExperienceOptions,
                                                            modelValue: unref(workExperience),
                                                            "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                            label: "\uC778\uC0AC \uAD8C\uD55C",
                                                            variant: "outlined",
                                                            items: hireAuthorityOptions,
                                                            "item-title": "label",
                                                            "item-value": "value",
                                                            modelValue: unref(authCode),
                                                            "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "2",
                                              class: "d-flex flex-column align-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: unref(imageUrl),
                                                  alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                                  height: "180",
                                                  width: "140",
                                                  class: "elevation-2 mb-2",
                                                  cover: "",
                                                  style: { "max-height": "180px", "max-width": "140px" }
                                                }, null, 8, ["src"]),
                                                createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                                  createVNode(VBtn, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    onClick: triggerFileSelect
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("input", {
                                                    type: "file",
                                                    ref_key: "fileInput",
                                                    ref: fileInput,
                                                    accept: "image/*",
                                                    class: "d-none",
                                                    onChange: handleFileChange
                                                  }, null, 544)
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "10"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          label: "\uC774\uB984",
                                                          variant: "outlined",
                                                          modelValue: unref(empName),
                                                          "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                          label: "\uC131\uBCC4",
                                                          variant: "outlined",
                                                          items: genderOptions,
                                                          "item-title": "label",
                                                          "item-value": "value",
                                                          modelValue: unref(gender),
                                                          "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                          placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                          variant: "outlined",
                                                          modelValue: unref(birthDate),
                                                          "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                          modelValue: unref(socialSecurityNoBack),
                                                          "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                          label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                          variant: "outlined",
                                                          maxlength: "7",
                                                          rules: [
                                                            (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                          ],
                                                          onInput: onInputSSN
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(phoneNumber),
                                                          "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                          label: "\uC804\uD654\uBC88\uD638",
                                                          variant: "outlined",
                                                          onInput: onPhoneInput,
                                                          onKeydown: withKeys(onBackspace, ["backspace"])
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(address),
                                                          "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                          label: "\uC8FC\uC18C",
                                                          readonly: "",
                                                          onClick: openDaumPostcode
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
                                                          modelValue: unref(addressDetail),
                                                          "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                          label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                          modelValue: unref(postalCode),
                                                          "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                          label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                        createVNode(VTextField, {
                                                          modelValue: unref(educationLevel),
                                                          "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                          label: "\uCD5C\uC885 \uD559\uB825",
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
                                                          modelValue: unref(email),
                                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                          label: "E-Mail",
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
                                                          placeholder: "\uC785\uC0AC\uC77C",
                                                          variant: "outlined",
                                                          modelValue: unref(hireDate),
                                                          "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                          modelValue: unref(department),
                                                          "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                          items: unref(departmentInfo),
                                                          "item-title": "deptName",
                                                          "item-value": "deptCode",
                                                          label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                          modelValue: unref(position),
                                                          "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                          items: unref(positionListInfo),
                                                          "item-title": "positionName",
                                                          "item-value": "positionCode",
                                                          label: "\uC9C1\uAE09",
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
                                                          label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                          variant: "outlined",
                                                          items: workContractOptions,
                                                          modelValue: unref(workContract),
                                                          "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                          label: "\uACBD\uB825 \uAD6C\uBD84",
                                                          variant: "outlined",
                                                          items: workExperienceOptions,
                                                          modelValue: unref(workExperience),
                                                          "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                          label: "\uC778\uC0AC \uAD8C\uD55C",
                                                          variant: "outlined",
                                                          items: hireAuthorityOptions,
                                                          "item-title": "label",
                                                          "item-value": "value",
                                                          modelValue: unref(authCode),
                                                          "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "2",
                                            class: "d-flex flex-column align-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: unref(imageUrl),
                                                alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                                height: "180",
                                                width: "140",
                                                class: "elevation-2 mb-2",
                                                cover: "",
                                                style: { "max-height": "180px", "max-width": "140px" }
                                              }, null, 8, ["src"]),
                                              createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  size: "small",
                                                  onClick: triggerFileSelect
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("input", {
                                                  type: "file",
                                                  ref_key: "fileInput",
                                                  ref: fileInput,
                                                  accept: "image/*",
                                                  class: "d-none",
                                                  onChange: handleFileChange
                                                }, null, 544)
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "10"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        label: "\uC774\uB984",
                                                        variant: "outlined",
                                                        modelValue: unref(empName),
                                                        "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                        label: "\uC131\uBCC4",
                                                        variant: "outlined",
                                                        items: genderOptions,
                                                        "item-title": "label",
                                                        "item-value": "value",
                                                        modelValue: unref(gender),
                                                        "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                        placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                        variant: "outlined",
                                                        modelValue: unref(birthDate),
                                                        "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                        modelValue: unref(socialSecurityNoBack),
                                                        "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                        label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                        variant: "outlined",
                                                        maxlength: "7",
                                                        rules: [
                                                          (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                        ],
                                                        onInput: onInputSSN
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(phoneNumber),
                                                        "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                        label: "\uC804\uD654\uBC88\uD638",
                                                        variant: "outlined",
                                                        onInput: onPhoneInput,
                                                        onKeydown: withKeys(onBackspace, ["backspace"])
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(address),
                                                        "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                        label: "\uC8FC\uC18C",
                                                        readonly: "",
                                                        onClick: openDaumPostcode
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
                                                        modelValue: unref(addressDetail),
                                                        "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                        label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                        modelValue: unref(postalCode),
                                                        "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                        label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                      createVNode(VTextField, {
                                                        modelValue: unref(educationLevel),
                                                        "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                        label: "\uCD5C\uC885 \uD559\uB825",
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
                                                        modelValue: unref(email),
                                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                        label: "E-Mail",
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
                                                        placeholder: "\uC785\uC0AC\uC77C",
                                                        variant: "outlined",
                                                        modelValue: unref(hireDate),
                                                        "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                        modelValue: unref(department),
                                                        "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                        items: unref(departmentInfo),
                                                        "item-title": "deptName",
                                                        "item-value": "deptCode",
                                                        label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                        modelValue: unref(position),
                                                        "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                        items: unref(positionListInfo),
                                                        "item-title": "positionName",
                                                        "item-value": "positionCode",
                                                        label: "\uC9C1\uAE09",
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
                                                        label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                        variant: "outlined",
                                                        items: workContractOptions,
                                                        modelValue: unref(workContract),
                                                        "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                        label: "\uACBD\uB825 \uAD6C\uBD84",
                                                        variant: "outlined",
                                                        items: workExperienceOptions,
                                                        modelValue: unref(workExperience),
                                                        "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                        label: "\uC778\uC0AC \uAD8C\uD55C",
                                                        variant: "outlined",
                                                        items: hireAuthorityOptions,
                                                        "item-title": "label",
                                                        "item-value": "value",
                                                        modelValue: unref(authCode),
                                                        "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "d-flex justify-end" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      onClick: ($event) => confirmDialog.value = true
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
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: ($event) => confirmDialog.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \uB4F1\uB85D ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "d-flex justify-space-between" }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "2",
                                          class: "d-flex flex-column align-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: unref(imageUrl),
                                              alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                              height: "180",
                                              width: "140",
                                              class: "elevation-2 mb-2",
                                              cover: "",
                                              style: { "max-height": "180px", "max-width": "140px" }
                                            }, null, 8, ["src"]),
                                            createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                size: "small",
                                                onClick: triggerFileSelect
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("input", {
                                                type: "file",
                                                ref_key: "fileInput",
                                                ref: fileInput,
                                                accept: "image/*",
                                                class: "d-none",
                                                onChange: handleFileChange
                                              }, null, 544)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "10"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      label: "\uC774\uB984",
                                                      variant: "outlined",
                                                      modelValue: unref(empName),
                                                      "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                      label: "\uC131\uBCC4",
                                                      variant: "outlined",
                                                      items: genderOptions,
                                                      "item-title": "label",
                                                      "item-value": "value",
                                                      modelValue: unref(gender),
                                                      "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                      placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                      variant: "outlined",
                                                      modelValue: unref(birthDate),
                                                      "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                      modelValue: unref(socialSecurityNoBack),
                                                      "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                      label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                      variant: "outlined",
                                                      maxlength: "7",
                                                      rules: [
                                                        (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                      ],
                                                      onInput: onInputSSN
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(phoneNumber),
                                                      "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                      label: "\uC804\uD654\uBC88\uD638",
                                                      variant: "outlined",
                                                      onInput: onPhoneInput,
                                                      onKeydown: withKeys(onBackspace, ["backspace"])
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(address),
                                                      "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                      label: "\uC8FC\uC18C",
                                                      readonly: "",
                                                      onClick: openDaumPostcode
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
                                                      modelValue: unref(addressDetail),
                                                      "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                      label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                      modelValue: unref(postalCode),
                                                      "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                      label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                    createVNode(VTextField, {
                                                      modelValue: unref(educationLevel),
                                                      "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                      label: "\uCD5C\uC885 \uD559\uB825",
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
                                                      modelValue: unref(email),
                                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                      label: "E-Mail",
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
                                                      placeholder: "\uC785\uC0AC\uC77C",
                                                      variant: "outlined",
                                                      modelValue: unref(hireDate),
                                                      "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                      modelValue: unref(department),
                                                      "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                      items: unref(departmentInfo),
                                                      "item-title": "deptName",
                                                      "item-value": "deptCode",
                                                      label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                      modelValue: unref(position),
                                                      "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                      items: unref(positionListInfo),
                                                      "item-title": "positionName",
                                                      "item-value": "positionCode",
                                                      label: "\uC9C1\uAE09",
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
                                                      label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                      variant: "outlined",
                                                      items: workContractOptions,
                                                      modelValue: unref(workContract),
                                                      "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                      label: "\uACBD\uB825 \uAD6C\uBD84",
                                                      variant: "outlined",
                                                      items: workExperienceOptions,
                                                      modelValue: unref(workExperience),
                                                      "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                      label: "\uC778\uC0AC \uAD8C\uD55C",
                                                      variant: "outlined",
                                                      items: hireAuthorityOptions,
                                                      "item-title": "label",
                                                      "item-value": "value",
                                                      modelValue: unref(authCode),
                                                      "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                                }),
                                createVNode(VCardText, { class: "d-flex justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: ($event) => confirmDialog.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \uB4F1\uB85D ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
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
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex justify-space-between" }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "2",
                                        class: "d-flex flex-column align-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: unref(imageUrl),
                                            alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                            height: "180",
                                            width: "140",
                                            class: "elevation-2 mb-2",
                                            cover: "",
                                            style: { "max-height": "180px", "max-width": "140px" }
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              size: "small",
                                              onClick: triggerFileSelect
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("input", {
                                              type: "file",
                                              ref_key: "fileInput",
                                              ref: fileInput,
                                              accept: "image/*",
                                              class: "d-none",
                                              onChange: handleFileChange
                                            }, null, 544)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    label: "\uC774\uB984",
                                                    variant: "outlined",
                                                    modelValue: unref(empName),
                                                    "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                    label: "\uC131\uBCC4",
                                                    variant: "outlined",
                                                    items: genderOptions,
                                                    "item-title": "label",
                                                    "item-value": "value",
                                                    modelValue: unref(gender),
                                                    "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                    placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                    variant: "outlined",
                                                    modelValue: unref(birthDate),
                                                    "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                    modelValue: unref(socialSecurityNoBack),
                                                    "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                    label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                    variant: "outlined",
                                                    maxlength: "7",
                                                    rules: [
                                                      (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                    ],
                                                    onInput: onInputSSN
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(phoneNumber),
                                                    "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                    label: "\uC804\uD654\uBC88\uD638",
                                                    variant: "outlined",
                                                    onInput: onPhoneInput,
                                                    onKeydown: withKeys(onBackspace, ["backspace"])
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(address),
                                                    "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                    label: "\uC8FC\uC18C",
                                                    readonly: "",
                                                    onClick: openDaumPostcode
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
                                                    modelValue: unref(addressDetail),
                                                    "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                    label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                    modelValue: unref(postalCode),
                                                    "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                    label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                  createVNode(VTextField, {
                                                    modelValue: unref(educationLevel),
                                                    "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                    label: "\uCD5C\uC885 \uD559\uB825",
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
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    label: "E-Mail",
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
                                                    placeholder: "\uC785\uC0AC\uC77C",
                                                    variant: "outlined",
                                                    modelValue: unref(hireDate),
                                                    "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                    modelValue: unref(department),
                                                    "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                    items: unref(departmentInfo),
                                                    "item-title": "deptName",
                                                    "item-value": "deptCode",
                                                    label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                    modelValue: unref(position),
                                                    "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                    items: unref(positionListInfo),
                                                    "item-title": "positionName",
                                                    "item-value": "positionCode",
                                                    label: "\uC9C1\uAE09",
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
                                                    label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                    variant: "outlined",
                                                    items: workContractOptions,
                                                    modelValue: unref(workContract),
                                                    "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                    label: "\uACBD\uB825 \uAD6C\uBD84",
                                                    variant: "outlined",
                                                    items: workExperienceOptions,
                                                    modelValue: unref(workExperience),
                                                    "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                    label: "\uC778\uC0AC \uAD8C\uD55C",
                                                    variant: "outlined",
                                                    items: hireAuthorityOptions,
                                                    "item-title": "label",
                                                    "item-value": "value",
                                                    modelValue: unref(authCode),
                                                    "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                              }),
                              createVNode(VCardText, { class: "d-flex justify-end" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: ($event) => confirmDialog.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \uB4F1\uB85D ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
                    createVNode(VCol, { md: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "d-flex justify-space-between" }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "2",
                                      class: "d-flex flex-column align-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: unref(imageUrl),
                                          alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                          height: "180",
                                          width: "140",
                                          class: "elevation-2 mb-2",
                                          cover: "",
                                          style: { "max-height": "180px", "max-width": "140px" }
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            size: "small",
                                            onClick: triggerFileSelect
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("input", {
                                            type: "file",
                                            ref_key: "fileInput",
                                            ref: fileInput,
                                            accept: "image/*",
                                            class: "d-none",
                                            onChange: handleFileChange
                                          }, null, 544)
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "\uC774\uB984",
                                                  variant: "outlined",
                                                  modelValue: unref(empName),
                                                  "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                  label: "\uC131\uBCC4",
                                                  variant: "outlined",
                                                  items: genderOptions,
                                                  "item-title": "label",
                                                  "item-value": "value",
                                                  modelValue: unref(gender),
                                                  "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                  placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                  variant: "outlined",
                                                  modelValue: unref(birthDate),
                                                  "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                  modelValue: unref(socialSecurityNoBack),
                                                  "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                  label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                  variant: "outlined",
                                                  maxlength: "7",
                                                  rules: [
                                                    (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                  ],
                                                  onInput: onInputSSN
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(phoneNumber),
                                                  "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                  label: "\uC804\uD654\uBC88\uD638",
                                                  variant: "outlined",
                                                  onInput: onPhoneInput,
                                                  onKeydown: withKeys(onBackspace, ["backspace"])
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(address),
                                                  "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                  label: "\uC8FC\uC18C",
                                                  readonly: "",
                                                  onClick: openDaumPostcode
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
                                                  modelValue: unref(addressDetail),
                                                  "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                  label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                  modelValue: unref(postalCode),
                                                  "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                  label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                                createVNode(VTextField, {
                                                  modelValue: unref(educationLevel),
                                                  "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                  label: "\uCD5C\uC885 \uD559\uB825",
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
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  label: "E-Mail",
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
                                                  placeholder: "\uC785\uC0AC\uC77C",
                                                  variant: "outlined",
                                                  modelValue: unref(hireDate),
                                                  "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                  modelValue: unref(department),
                                                  "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                  items: unref(departmentInfo),
                                                  "item-title": "deptName",
                                                  "item-value": "deptCode",
                                                  label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                  modelValue: unref(position),
                                                  "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                  items: unref(positionListInfo),
                                                  "item-title": "positionName",
                                                  "item-value": "positionCode",
                                                  label: "\uC9C1\uAE09",
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
                                                  label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                  variant: "outlined",
                                                  items: workContractOptions,
                                                  modelValue: unref(workContract),
                                                  "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                  label: "\uACBD\uB825 \uAD6C\uBD84",
                                                  variant: "outlined",
                                                  items: workExperienceOptions,
                                                  modelValue: unref(workExperience),
                                                  "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                  label: "\uC778\uC0AC \uAD8C\uD55C",
                                                  variant: "outlined",
                                                  items: hireAuthorityOptions,
                                                  "item-title": "label",
                                                  "item-value": "value",
                                                  modelValue: unref(authCode),
                                                  "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                            }),
                            createVNode(VCardText, { class: "d-flex justify-end" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: ($event) => confirmDialog.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \uB4F1\uB85D ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { md: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex justify-space-between" }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "2",
                                    class: "d-flex flex-column align-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: unref(imageUrl),
                                        alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
                                        height: "180",
                                        width: "140",
                                        class: "elevation-2 mb-2",
                                        cover: "",
                                        style: { "max-height": "180px", "max-width": "140px" }
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "d-flex justify-center gap-2 mt-2" }, [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          size: "small",
                                          onClick: triggerFileSelect
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \uC0AC\uC9C4 \uC120\uD0DD ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("input", {
                                          type: "file",
                                          ref_key: "fileInput",
                                          ref: fileInput,
                                          accept: "image/*",
                                          class: "d-none",
                                          onChange: handleFileChange
                                        }, null, 544)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "\uC774\uB984",
                                                variant: "outlined",
                                                modelValue: unref(empName),
                                                "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
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
                                                label: "\uC131\uBCC4",
                                                variant: "outlined",
                                                items: genderOptions,
                                                "item-title": "label",
                                                "item-value": "value",
                                                modelValue: unref(gender),
                                                "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null
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
                                                placeholder: "\uC0DD\uB144\uC6D4\uC77C",
                                                variant: "outlined",
                                                modelValue: unref(birthDate),
                                                "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
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
                                                modelValue: unref(socialSecurityNoBack),
                                                "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                label: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 \uB4B7\uC790\uB9AC",
                                                variant: "outlined",
                                                maxlength: "7",
                                                rules: [
                                                  (v) => /^\d{7}$/.test(v) || "\uC22B\uC790 7\uC790\uB9AC\uB97C \uC785\uB825\uD558\uC138\uC694"
                                                ],
                                                onInput: onInputSSN
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(phoneNumber),
                                                "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                label: "\uC804\uD654\uBC88\uD638",
                                                variant: "outlined",
                                                onInput: onPhoneInput,
                                                onKeydown: withKeys(onBackspace, ["backspace"])
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(address),
                                                "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                label: "\uC8FC\uC18C",
                                                readonly: "",
                                                onClick: openDaumPostcode
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
                                                modelValue: unref(addressDetail),
                                                "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                label: "\uC0C1\uC138 \uC8FC\uC18C",
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
                                                modelValue: unref(postalCode),
                                                "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                label: "\uC6B0\uD3B8\uBC88\uD638",
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
                                              createVNode(VTextField, {
                                                modelValue: unref(educationLevel),
                                                "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                label: "\uCD5C\uC885 \uD559\uB825",
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
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                label: "E-Mail",
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
                                                placeholder: "\uC785\uC0AC\uC77C",
                                                variant: "outlined",
                                                modelValue: unref(hireDate),
                                                "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
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
                                                modelValue: unref(department),
                                                "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null,
                                                items: unref(departmentInfo),
                                                "item-title": "deptName",
                                                "item-value": "deptCode",
                                                label: "\uC18C\uC18D \uBD80\uC11C",
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
                                                modelValue: unref(position),
                                                "onUpdate:modelValue": [($event) => isRef(position) ? position.value = $event : null, _ctx.onPositionChange],
                                                items: unref(positionListInfo),
                                                "item-title": "positionName",
                                                "item-value": "positionCode",
                                                label: "\uC9C1\uAE09",
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
                                                label: "\uADFC\uB85C \uACC4\uC57D \uAD6C\uBD84",
                                                variant: "outlined",
                                                items: workContractOptions,
                                                modelValue: unref(workContract),
                                                "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
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
                                                label: "\uACBD\uB825 \uAD6C\uBD84",
                                                variant: "outlined",
                                                items: workExperienceOptions,
                                                modelValue: unref(workExperience),
                                                "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
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
                                                label: "\uC778\uC0AC \uAD8C\uD55C",
                                                variant: "outlined",
                                                items: hireAuthorityOptions,
                                                "item-title": "label",
                                                "item-value": "value",
                                                modelValue: unref(authCode),
                                                "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null
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
                          }),
                          createVNode(VCardText, { class: "d-flex justify-end" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: ($event) => confirmDialog.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \uB4F1\uB85D ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(confirmDialog),
        "onUpdate:modelValue": ($event) => isRef(confirmDialog) ? confirmDialog.value = $event : null,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uC0AC\uC6D0 \uB4F1\uB85D \uD655\uC778`);
                      } else {
                        return [
                          createTextVNode("\uC0AC\uC6D0 \uB4F1\uB85D \uD655\uC778")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uC785\uB825\uD558\uC2E0 \uC815\uBCF4\uB85C \uC0AC\uC6D0\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`);
                      } else {
                        return [
                          createTextVNode("\uC785\uB825\uD558\uC2E0 \uC815\uBCF4\uB85C \uC0AC\uC6D0\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: empRegister
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uD655\uC778`);
                            } else {
                              return [
                                createTextVNode("\uD655\uC778")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          text: "",
                          onClick: ($event) => confirmDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uCDE8\uC18C`);
                            } else {
                              return [
                                createTextVNode("\uCDE8\uC18C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: empRegister
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uD655\uC778")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            text: "",
                            onClick: ($event) => confirmDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uCDE8\uC18C")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("\uC0AC\uC6D0 \uB4F1\uB85D \uD655\uC778")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode("\uC785\uB825\uD558\uC2E0 \uC815\uBCF4\uB85C \uC0AC\uC6D0\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: empRegister
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uD655\uC778")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          text: "",
                          onClick: ($event) => confirmDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uCDE8\uC18C")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("\uC0AC\uC6D0 \uB4F1\uB85D \uD655\uC778")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode("\uC785\uB825\uD558\uC2E0 \uC815\uBCF4\uB85C \uC0AC\uC6D0\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: empRegister
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uD655\uC778")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        text: "",
                        onClick: ($event) => confirmDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uCDE8\uC18C")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiztech/hr/emp/eddEmp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
