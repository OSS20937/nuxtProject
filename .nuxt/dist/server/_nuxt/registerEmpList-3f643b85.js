import { _ as _sfc_main$1 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VCard, g as VCardTitle, b as VBtn, f as VCardText, j as VAvatar } from "../server.mjs";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
import { V as VSelect } from "./VSelect-03a0285c.js";
import { V as VSnackbar } from "./VSnackbar-2c0a46be.js";
import { V as VAlert } from "./VAlert-81d540a6.js";
import "vue-flatpickr-component";
/* empty css                */import "ofetch";
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
import "cookie-es";
import "destr";
import "ohash";
import "@antfu/utils";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@casl/vue";
import "./VMenu-4a1335b2.js";
import "./VDivider-8fd47435.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "registerEmpList",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
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
      { value: "male", text: "남성" },
      { value: "female", text: "여성" }
    ];
    const positions = [
      { value: "사장", text: "사장" },
      { value: "이사", text: "이사" },
      { value: "부장", text: "부장" },
      { value: "차장", text: "차장" },
      { value: "과장", text: "과장" },
      { value: "대리", text: "대리" },
      { value: "사원", text: "사원" },
      { value: "인턴", text: "인턴" },
      { value: "계약직", text: "계약직" }
    ];
    const educations = [
      { value: "중졸이하", text: "중졸이하" },
      { value: "중졸", text: "중졸" },
      { value: "고졸", text: "고졸" },
      { value: "대졸", text: "학사" },
      { value: "석사", text: "석사" },
      { value: "박사", text: "박사" }
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
          console.log("등록 오류", error);
          alert("직원정보 등록 중 오류가 발생했습니다.");
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
      _push(`<!--[--><h1 class="mb-2">직원정보 등록</h1>`);
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
                                    _push6(` 직원기초정보 `);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      onClick: saveFunc
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
                                      createTextVNode(" 직원기초정보 "),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: saveFunc
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 등록 ")
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
                                                  label: "사원명",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: empDetail.value.empName,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                                    label: "사원명",
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
                                                  label: "사번",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: empDetail.value.empCode,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                                    label: "사번",
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
                                                  placeholder: "생년월일",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppDateTimePicker, {
                                                    modelValue: empDetail.value.birthDate,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                                    placeholder: "생년월일",
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
                                                  label: "주민번호",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: empDetail.value.socialSecurityNumber,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.socialSecurityNumber = $event,
                                                    label: "주민번호",
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
                                                  label: "부서",
                                                  variant: "outlined",
                                                  items: deptList.value
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: selectedDept.value,
                                                    "onUpdate:modelValue": ($event) => selectedDept.value = $event,
                                                    label: "부서",
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
                                                  label: "부서번호",
                                                  variant: "outlined",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: selectedDept.value.deptCode,
                                                    "onUpdate:modelValue": ($event) => selectedDept.value.deptCode = $event,
                                                    label: "부서번호",
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
                                                  placeholder: "입사일",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppDateTimePicker, {
                                                    modelValue: empDetail.value.hireDate,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                                    placeholder: "입사일",
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
                                                  label: "성별",
                                                  variant: "outlined",
                                                  items: gender,
                                                  "item-props": itemProps
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: empDetail.value.gender,
                                                    "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                                    label: "성별",
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
                                                  label: "사원명",
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
                                                  label: "사번",
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
                                                  placeholder: "생년월일",
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
                                                  label: "주민번호",
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
                                                  label: "부서",
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
                                                  label: "부서번호",
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
                                                  placeholder: "입사일",
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
                                                  label: "성별",
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
                                                label: "사원명",
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
                                                label: "사번",
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
                                                placeholder: "생년월일",
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
                                                label: "주민번호",
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
                                                label: "부서",
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
                                                label: "부서번호",
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
                                                placeholder: "입사일",
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
                                                label: "성별",
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
                                    createTextVNode(" 직원기초정보 "),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: saveFunc
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 등록 ")
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
                                              label: "사원명",
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
                                              label: "사번",
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
                                              placeholder: "생년월일",
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
                                              label: "주민번호",
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
                                              label: "부서",
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
                                              label: "부서번호",
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
                                              placeholder: "입사일",
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
                                              label: "성별",
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
                        _push4(ssrRenderComponent(VCard, { title: "직원세부정보" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: empDetail.value.positionName,
                                "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                                class: "ma-4",
                                label: "직급",
                                variant: "outlined",
                                items: positions,
                                "item-props": itemProps
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.phoneNumber,
                                "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                class: "ma-4",
                                label: "전화번호",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.email,
                                "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                class: "ma-4",
                                label: "이메일",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: empDetail.value.workplaceName,
                                "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                                class: "ma-4",
                                label: "근무지",
                                variant: "outlined",
                                items: workplaceList.value,
                                "item-props": itemProps
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: empDetail.value.levelOfEducation,
                                "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                class: "ma-4",
                                label: "최종학력",
                                variant: "outlined",
                                items: educations,
                                "item-props": itemProps
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.zipCode,
                                "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                class: "ma-4",
                                label: "우편번호",
                                variant: "outlined",
                                onClick: sample6ExecDaumPostcode
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.basicAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                class: "ma-4",
                                label: "주소",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: empDetail.value.detailAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                class: "ma-4",
                                label: "상세주소",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: empDetail.value.positionName,
                                  "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                                  class: "ma-4",
                                  label: "직급",
                                  variant: "outlined",
                                  items: positions,
                                  "item-props": itemProps
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.phoneNumber,
                                  "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                  class: "ma-4",
                                  label: "전화번호",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.email,
                                  "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                  class: "ma-4",
                                  label: "이메일",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VSelect, {
                                  modelValue: empDetail.value.workplaceName,
                                  "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                                  class: "ma-4",
                                  label: "근무지",
                                  variant: "outlined",
                                  items: workplaceList.value,
                                  "item-props": itemProps
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                createVNode(VSelect, {
                                  modelValue: empDetail.value.levelOfEducation,
                                  "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                  class: "ma-4",
                                  label: "최종학력",
                                  variant: "outlined",
                                  items: educations,
                                  "item-props": itemProps
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.zipCode,
                                  "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                  class: "ma-4",
                                  label: "우편번호",
                                  variant: "outlined",
                                  onClick: sample6ExecDaumPostcode
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.basicAddress,
                                  "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                  class: "ma-4",
                                  label: "주소",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: empDetail.value.detailAddress,
                                  "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                  class: "ma-4",
                                  label: "상세주소",
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
                                  createTextVNode(" 직원기초정보 "),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: saveFunc
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 등록 ")
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
                                            label: "사원명",
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
                                            label: "사번",
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
                                            placeholder: "생년월일",
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
                                            label: "주민번호",
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
                                            label: "부서",
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
                                            label: "부서번호",
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
                                            placeholder: "입사일",
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
                                            label: "성별",
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
                          createVNode(VCard, { title: "직원세부정보" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: empDetail.value.positionName,
                                "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                                class: "ma-4",
                                label: "직급",
                                variant: "outlined",
                                items: positions,
                                "item-props": itemProps
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.phoneNumber,
                                "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                class: "ma-4",
                                label: "전화번호",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.email,
                                "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                class: "ma-4",
                                label: "이메일",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VSelect, {
                                modelValue: empDetail.value.workplaceName,
                                "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                                class: "ma-4",
                                label: "근무지",
                                variant: "outlined",
                                items: workplaceList.value,
                                "item-props": itemProps
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                              createVNode(VSelect, {
                                modelValue: empDetail.value.levelOfEducation,
                                "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                                class: "ma-4",
                                label: "최종학력",
                                variant: "outlined",
                                items: educations,
                                "item-props": itemProps
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.zipCode,
                                "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                class: "ma-4",
                                label: "우편번호",
                                variant: "outlined",
                                onClick: sample6ExecDaumPostcode
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.basicAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                class: "ma-4",
                                label: "주소",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: empDetail.value.detailAddress,
                                "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                class: "ma-4",
                                label: "상세주소",
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
                                createTextVNode(" 직원기초정보 "),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: saveFunc
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 등록 ")
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
                                          label: "사원명",
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
                                          label: "사번",
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
                                          placeholder: "생년월일",
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
                                          label: "주민번호",
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
                                          label: "부서",
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
                                          label: "부서번호",
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
                                          placeholder: "입사일",
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
                                          label: "성별",
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
                        createVNode(VCard, { title: "직원세부정보" }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: empDetail.value.positionName,
                              "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                              class: "ma-4",
                              label: "직급",
                              variant: "outlined",
                              items: positions,
                              "item-props": itemProps
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.phoneNumber,
                              "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                              class: "ma-4",
                              label: "전화번호",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.email,
                              "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                              class: "ma-4",
                              label: "이메일",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VSelect, {
                              modelValue: empDetail.value.workplaceName,
                              "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                              class: "ma-4",
                              label: "근무지",
                              variant: "outlined",
                              items: workplaceList.value,
                              "item-props": itemProps
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                            createVNode(VSelect, {
                              modelValue: empDetail.value.levelOfEducation,
                              "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                              class: "ma-4",
                              label: "최종학력",
                              variant: "outlined",
                              items: educations,
                              "item-props": itemProps
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.zipCode,
                              "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                              class: "ma-4",
                              label: "우편번호",
                              variant: "outlined",
                              onClick: sample6ExecDaumPostcode
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.basicAddress,
                              "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                              class: "ma-4",
                              label: "주소",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: empDetail.value.detailAddress,
                              "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                              class: "ma-4",
                              label: "상세주소",
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
                              createTextVNode(" 직원기초정보 "),
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: saveFunc
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 등록 ")
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
                                        label: "사원명",
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
                                        label: "사번",
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
                                        placeholder: "생년월일",
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
                                        label: "주민번호",
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
                                        label: "부서",
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
                                        label: "부서번호",
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
                                        placeholder: "입사일",
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
                                        label: "성별",
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
                      createVNode(VCard, { title: "직원세부정보" }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: empDetail.value.positionName,
                            "onUpdate:modelValue": ($event) => empDetail.value.positionName = $event,
                            class: "ma-4",
                            label: "직급",
                            variant: "outlined",
                            items: positions,
                            "item-props": itemProps
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.phoneNumber,
                            "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                            class: "ma-4",
                            label: "전화번호",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.email,
                            "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                            class: "ma-4",
                            label: "이메일",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VSelect, {
                            modelValue: empDetail.value.workplaceName,
                            "onUpdate:modelValue": ($event) => empDetail.value.workplaceName = $event,
                            class: "ma-4",
                            label: "근무지",
                            variant: "outlined",
                            items: workplaceList.value,
                            "item-props": itemProps
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(VSelect, {
                            modelValue: empDetail.value.levelOfEducation,
                            "onUpdate:modelValue": ($event) => empDetail.value.levelOfEducation = $event,
                            class: "ma-4",
                            label: "최종학력",
                            variant: "outlined",
                            items: educations,
                            "item-props": itemProps
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.zipCode,
                            "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                            class: "ma-4",
                            label: "우편번호",
                            variant: "outlined",
                            onClick: sample6ExecDaumPostcode
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.basicAddress,
                            "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                            class: "ma-4",
                            label: "주소",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: empDetail.value.detailAddress,
                            "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                            class: "ma-4",
                            label: "상세주소",
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
              text: "빈칸이 없는지 확인해주세요."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "빈칸이 없는지 확인해주세요."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/affair/registerEmpList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
