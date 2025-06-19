import { _ as _sfc_main$1 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, isRef, withKeys, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useLoginStore, V as VCard, g as VCardTitle, f as VCardText, a as VImg, b as VBtn, l as VDialog, e as VCardActions } from "../server.mjs";
import { u as useDepartmentStore, a as usePositionStore } from "./index-1216d084.js";
import { u as useEmpStore } from "./index-fbfe3a36.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { V as VSelect } from "./VSelect-03a0285c.js";
import "vue-flatpickr-component";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "@unhead/shared";
import "vue-router";
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
/* empty css                */import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
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
      { label: "남성", value: "M" },
      { label: "여성", value: "F" }
    ];
    const workContractOptions = ["정규직", "계약직", "인턴"];
    const workExperienceOptions = ["신입", "경력"];
    const hireAuthorityOptions = [
      { label: "인사 일반", value: "ROLE_EMP" },
      { label: "인사 관리", value: "ROLE_HR" }
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
      const input = event.target;
      const cursor = input.selectionStart ?? 0;
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
        alert("사진을 선택하세요.");
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
      console.log("전송 데이터:", registerEmpInfo2);
      await empStore.REGISTER_EMP(registerEmpInfo2);
      console.log("empCode: ", empStore.empCode);
      console.log("result: ", empStore.isSuccess);
      await uplodeEmpPoto(empStore.empCode);
      if (empStore.isImageRegist) {
        alert("직원 등록 성공");
      } else {
        alert("직원 등록 실패");
      }
    };
    const validateForm = () => {
      const requiredFields = [
        { label: "이름", value: empName.value },
        { label: "성별", value: gender.value },
        { label: "생년월일", value: birthDate.value },
        { label: "주민등록번호 뒷자리", value: socialSecurityNoBack.value },
        { label: "전화번호", value: phoneNumber.value },
        { label: "주소", value: address.value },
        { label: "상세 주소", value: addressDetail.value },
        { label: "우편번호", value: postalCode.value },
        { label: "최종 학력", value: educationLevel.value },
        { label: "이메일", value: email.value },
        { label: "입사일", value: hireDate.value },
        { label: "소속 부서", value: department.value },
        { label: "직급", value: position.value },
        { label: "근로 계약 구분", value: workContract.value },
        { label: "경력 구분", value: workExperience.value },
        { label: "인사 권한", value: authCode.value },
        { label: "등록자", value: infoRegistrar.value }
      ];
      for (const field of requiredFields) {
        if (field.value === "" || field.value === null) {
          alert(`"${field.label}" 항목을 입력해 주세요.`);
          return false;
        }
      }
      return true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$1;
      _push(`<!--[--><h1 class="mb-2">사원 등록</h1>`);
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
                                                  alt: "프로필 이미지",
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
                                                      _push9(` 사진 선택 `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" 사진 선택 ")
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
                                                    alt: "프로필 이미지",
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
                                                        createTextVNode(" 사진 선택 ")
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
                                                              label: "이름",
                                                              variant: "outlined",
                                                              modelValue: unref(empName),
                                                              "onUpdate:modelValue": ($event) => isRef(empName) ? empName.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                label: "이름",
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
                                                              label: "성별",
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
                                                                label: "성별",
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
                                                              placeholder: "생년월일",
                                                              variant: "outlined",
                                                              modelValue: unref(birthDate),
                                                              "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_AppDateTimePicker, {
                                                                placeholder: "생년월일",
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
                                                              label: "주민등록번호 뒷자리",
                                                              variant: "outlined",
                                                              maxlength: "7",
                                                              rules: [
                                                                (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
                                                              ],
                                                              onInput: onInputSSN
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(socialSecurityNoBack),
                                                                "onUpdate:modelValue": ($event) => isRef(socialSecurityNoBack) ? socialSecurityNoBack.value = $event : null,
                                                                label: "주민등록번호 뒷자리",
                                                                variant: "outlined",
                                                                maxlength: "7",
                                                                rules: [
                                                                  (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                              label: "전화번호",
                                                              variant: "outlined",
                                                              onInput: onPhoneInput,
                                                              onKeydown: onBackspace
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(phoneNumber),
                                                                "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                                                label: "전화번호",
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
                                                              label: "주소",
                                                              readonly: "",
                                                              onClick: openDaumPostcode
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(address),
                                                                "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                                                label: "주소",
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
                                                              label: "상세 주소",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(addressDetail),
                                                                "onUpdate:modelValue": ($event) => isRef(addressDetail) ? addressDetail.value = $event : null,
                                                                label: "상세 주소",
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
                                                              label: "우편번호",
                                                              readonly: ""
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(postalCode),
                                                                "onUpdate:modelValue": ($event) => isRef(postalCode) ? postalCode.value = $event : null,
                                                                label: "우편번호",
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
                                                              label: "최종 학력",
                                                              variant: "outlined"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(educationLevel),
                                                                "onUpdate:modelValue": ($event) => isRef(educationLevel) ? educationLevel.value = $event : null,
                                                                label: "최종 학력",
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
                                                              placeholder: "입사일",
                                                              variant: "outlined",
                                                              modelValue: unref(hireDate),
                                                              "onUpdate:modelValue": ($event) => isRef(hireDate) ? hireDate.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_AppDateTimePicker, {
                                                                placeholder: "입사일",
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
                                                              label: "소속 부서",
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
                                                                label: "소속 부서",
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
                                                              label: "직급",
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
                                                                label: "직급",
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
                                                              label: "근로 계약 구분",
                                                              variant: "outlined",
                                                              items: workContractOptions,
                                                              modelValue: unref(workContract),
                                                              "onUpdate:modelValue": ($event) => isRef(workContract) ? workContract.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "근로 계약 구분",
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
                                                              label: "경력 구분",
                                                              variant: "outlined",
                                                              items: workExperienceOptions,
                                                              modelValue: unref(workExperience),
                                                              "onUpdate:modelValue": ($event) => isRef(workExperience) ? workExperience.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                label: "경력 구분",
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
                                                              label: "인사 권한",
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
                                                                label: "인사 권한",
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
                                                              label: "이름",
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
                                                              label: "성별",
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
                                                              placeholder: "생년월일",
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
                                                              label: "주민등록번호 뒷자리",
                                                              variant: "outlined",
                                                              maxlength: "7",
                                                              rules: [
                                                                (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                              label: "전화번호",
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
                                                              label: "주소",
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
                                                              label: "상세 주소",
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
                                                              label: "우편번호",
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
                                                              label: "최종 학력",
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
                                                              placeholder: "입사일",
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
                                                              label: "소속 부서",
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
                                                              label: "직급",
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
                                                              label: "근로 계약 구분",
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
                                                              label: "경력 구분",
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
                                                              label: "인사 권한",
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
                                                            label: "이름",
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
                                                            label: "성별",
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
                                                            placeholder: "생년월일",
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
                                                            label: "주민등록번호 뒷자리",
                                                            variant: "outlined",
                                                            maxlength: "7",
                                                            rules: [
                                                              (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                            label: "전화번호",
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
                                                            label: "주소",
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
                                                            label: "상세 주소",
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
                                                            label: "우편번호",
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
                                                            label: "최종 학력",
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
                                                            placeholder: "입사일",
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
                                                            label: "소속 부서",
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
                                                            label: "직급",
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
                                                            label: "근로 계약 구분",
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
                                                            label: "경력 구분",
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
                                                            label: "인사 권한",
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
                                                  alt: "프로필 이미지",
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
                                                      createTextVNode(" 사진 선택 ")
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
                                                          label: "이름",
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
                                                          label: "성별",
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
                                                          placeholder: "생년월일",
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
                                                          label: "주민등록번호 뒷자리",
                                                          variant: "outlined",
                                                          maxlength: "7",
                                                          rules: [
                                                            (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                          label: "전화번호",
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
                                                          label: "주소",
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
                                                          label: "상세 주소",
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
                                                          label: "우편번호",
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
                                                          label: "최종 학력",
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
                                                          placeholder: "입사일",
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
                                                          label: "소속 부서",
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
                                                          label: "직급",
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
                                                          label: "근로 계약 구분",
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
                                                          label: "경력 구분",
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
                                                          label: "인사 권한",
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
                                                alt: "프로필 이미지",
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
                                                    createTextVNode(" 사진 선택 ")
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
                                                        label: "이름",
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
                                                        label: "성별",
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
                                                        placeholder: "생년월일",
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
                                                        label: "주민등록번호 뒷자리",
                                                        variant: "outlined",
                                                        maxlength: "7",
                                                        rules: [
                                                          (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                        label: "전화번호",
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
                                                        label: "주소",
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
                                                        label: "상세 주소",
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
                                                        label: "우편번호",
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
                                                        label: "최종 학력",
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
                                                        placeholder: "입사일",
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
                                                        label: "소속 부서",
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
                                                        label: "직급",
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
                                                        label: "근로 계약 구분",
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
                                                        label: "경력 구분",
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
                                                        label: "인사 권한",
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
                                          _push7(` 등록 `);
                                        } else {
                                          return [
                                            createTextVNode(" 등록 ")
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
                                          createTextVNode(" 등록 ")
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
                                              alt: "프로필 이미지",
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
                                                  createTextVNode(" 사진 선택 ")
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
                                                      label: "이름",
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
                                                      label: "성별",
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
                                                      placeholder: "생년월일",
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
                                                      label: "주민등록번호 뒷자리",
                                                      variant: "outlined",
                                                      maxlength: "7",
                                                      rules: [
                                                        (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                      label: "전화번호",
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
                                                      label: "주소",
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
                                                      label: "상세 주소",
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
                                                      label: "우편번호",
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
                                                      label: "최종 학력",
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
                                                      placeholder: "입사일",
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
                                                      label: "소속 부서",
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
                                                      label: "직급",
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
                                                      label: "근로 계약 구분",
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
                                                      label: "경력 구분",
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
                                                      label: "인사 권한",
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
                                        createTextVNode(" 등록 ")
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
                                            alt: "프로필 이미지",
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
                                                createTextVNode(" 사진 선택 ")
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
                                                    label: "이름",
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
                                                    label: "성별",
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
                                                    placeholder: "생년월일",
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
                                                    label: "주민등록번호 뒷자리",
                                                    variant: "outlined",
                                                    maxlength: "7",
                                                    rules: [
                                                      (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                    label: "전화번호",
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
                                                    label: "주소",
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
                                                    label: "상세 주소",
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
                                                    label: "우편번호",
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
                                                    label: "최종 학력",
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
                                                    placeholder: "입사일",
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
                                                    label: "소속 부서",
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
                                                    label: "직급",
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
                                                    label: "근로 계약 구분",
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
                                                    label: "경력 구분",
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
                                                    label: "인사 권한",
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
                                      createTextVNode(" 등록 ")
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
                                          alt: "프로필 이미지",
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
                                              createTextVNode(" 사진 선택 ")
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
                                                  label: "이름",
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
                                                  label: "성별",
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
                                                  placeholder: "생년월일",
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
                                                  label: "주민등록번호 뒷자리",
                                                  variant: "outlined",
                                                  maxlength: "7",
                                                  rules: [
                                                    (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                  label: "전화번호",
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
                                                  label: "주소",
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
                                                  label: "상세 주소",
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
                                                  label: "우편번호",
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
                                                  label: "최종 학력",
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
                                                  placeholder: "입사일",
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
                                                  label: "소속 부서",
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
                                                  label: "직급",
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
                                                  label: "근로 계약 구분",
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
                                                  label: "경력 구분",
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
                                                  label: "인사 권한",
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
                                    createTextVNode(" 등록 ")
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
                                        alt: "프로필 이미지",
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
                                            createTextVNode(" 사진 선택 ")
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
                                                label: "이름",
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
                                                label: "성별",
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
                                                placeholder: "생년월일",
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
                                                label: "주민등록번호 뒷자리",
                                                variant: "outlined",
                                                maxlength: "7",
                                                rules: [
                                                  (v) => /^\d{7}$/.test(v) || "숫자 7자리를 입력하세요"
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
                                                label: "전화번호",
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
                                                label: "주소",
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
                                                label: "상세 주소",
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
                                                label: "우편번호",
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
                                                label: "최종 학력",
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
                                                placeholder: "입사일",
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
                                                label: "소속 부서",
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
                                                label: "직급",
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
                                                label: "근로 계약 구분",
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
                                                label: "경력 구분",
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
                                                label: "인사 권한",
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
                                  createTextVNode(" 등록 ")
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
                        _push4(`사원 등록 확인`);
                      } else {
                        return [
                          createTextVNode("사원 등록 확인")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`입력하신 정보로 사원을 등록하시겠습니까?`);
                      } else {
                        return [
                          createTextVNode("입력하신 정보로 사원을 등록하시겠습니까?")
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
                              _push5(`확인`);
                            } else {
                              return [
                                createTextVNode("확인")
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
                              _push5(`취소`);
                            } else {
                              return [
                                createTextVNode("취소")
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
                              createTextVNode("확인")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            text: "",
                            onClick: ($event) => confirmDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("취소")
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
                        createTextVNode("사원 등록 확인")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode("입력하신 정보로 사원을 등록하시겠습니까?")
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
                            createTextVNode("확인")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          text: "",
                          onClick: ($event) => confirmDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("취소")
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
                      createTextVNode("사원 등록 확인")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode("입력하신 정보로 사원을 등록하시겠습니까?")
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
                          createTextVNode("확인")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        text: "",
                        onClick: ($event) => confirmDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("취소")
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
export {
  _sfc_main as default
};
