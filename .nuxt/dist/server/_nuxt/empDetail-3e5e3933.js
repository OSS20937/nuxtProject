import { _ as _sfc_main$1 } from "./AppTextField-dee429aa.js";
import { _ as _sfc_main$2 } from "./AppDateTimePicker-c59f48ad.js";
import { defineComponent, ref, computed, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import { useRouter } from "vue-router";
import { u as useEmpStore } from "./emp-413922b9.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VCard, f as VCardText, g as VCardTitle, b as VBtn, i as VIcon, j as VAvatar } from "../server.mjs";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
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
  __name: "empDetail",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("현재 로그인된 직원 코드:", empStore.empCode);
    const headers = [
      { title: "사번", key: "empCode" },
      { title: "직원명", key: "empName" },
      { title: "부서이름", key: "deptName" }
    ];
    const educations = [
      { value: "중졸이하", text: "중졸이하" },
      { value: "중졸", text: "중졸" },
      { value: "고졸", text: "고졸" },
      { value: "대졸", text: "학사" },
      { value: "석사", text: "석사" },
      { value: "박사", text: "박사" }
    ];
    const positions = [
      { value: "POS-01", text: "사장" },
      { value: "POS-02", text: "이사" },
      { value: "POS-03", text: "부장" },
      { value: "POS-04", text: "차장" },
      { value: "POS-05", text: "과장" },
      { value: "POS-06", text: "대리" },
      { value: "POS-07", text: "사원" },
      { value: "POS-08", text: "인턴" },
      { value: "POS-09", text: "계약직" }
    ];
    const accountData = {
      avatarImg: "/_nuxt/assets/images/empImages/EMP-09.jpeg"
    };
    const formImg = ref(null);
    const isSuccessFunc = ref(false);
    const iseditFunc = ref(false);
    const isdeleteFunc = ref(false);
    const gender = [
      { value: "male", text: "남성" },
      { value: "female", text: "여성" }
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
        console.log("수정버튼 클릭!!!");
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
      alert("우편번호 검색 api모달 출력!!! ");
      console.log("우편번호 검색!!!");
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
      _push(`<!--[--><h1 class="mb-6">직원정보 관리</h1>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { md: "4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "mb-6",
                    height: "725",
                    title: "직원정보 조회"
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
                                            placeholder: "검색",
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
                                              placeholder: "검색",
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
                                            placeholder: "검색",
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
                                          placeholder: "검색",
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
                                        placeholder: "검색",
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
                      title: "직원정보 조회"
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
                                      placeholder: "검색",
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
                                    _push6(` 직원기초정보 `);
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
                                          _push7(`수정 `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "tabler-edit"
                                            }),
                                            createTextVNode("수정 ")
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
                                          _push7(`삭제 `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "tabler-trash"
                                            }),
                                            createTextVNode("삭제 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" 직원기초정보 "),
                                      createVNode(VBtn, {
                                        class: "ml-3",
                                        onClick: editFunc
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "tabler-edit"
                                          }),
                                          createTextVNode("수정 ")
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
                                          createTextVNode("삭제 ")
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
                                            label: "사원명",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.empName,
                                              "onUpdate:modelValue": ($event) => empDetail.value.empName = $event,
                                              class: "mb-3",
                                              label: "사원명",
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
                                            label: "사번",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.empCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.empCode = $event,
                                              class: "mb-3",
                                              label: "사번",
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
                                            placeholder: "생년월일",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: empDetail.value.birthDate,
                                              "onUpdate:modelValue": ($event) => empDetail.value.birthDate = $event,
                                              class: "mb-3",
                                              placeholder: "생년월일",
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
                                            label: "성별",
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
                                              label: "성별",
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
                                            label: "부서",
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
                                              label: "부서",
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
                                            label: "부서번호",
                                            "read-only": "",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.deptCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.deptCode = $event,
                                              class: "mb-3",
                                              label: "부서번호",
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
                                            placeholder: "입사일"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: empDetail.value.hireDate,
                                              "onUpdate:modelValue": ($event) => empDetail.value.hireDate = $event,
                                              class: "mb-3",
                                              placeholder: "입사일"
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
                                            class: "mb-3",
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
                                            class: "mb-3",
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
                                          createVNode(VSelect, {
                                            modelValue: empDetail.value.gender,
                                            "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                            class: "mb-3",
                                            label: "성별",
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
                                            label: "부서",
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
                                            label: "부서번호",
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
                                            placeholder: "입사일"
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
                                    createTextVNode(" 직원기초정보 "),
                                    createVNode(VBtn, {
                                      class: "ml-3",
                                      onClick: editFunc
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "tabler-edit"
                                        }),
                                        createTextVNode("수정 ")
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
                                        createTextVNode("삭제 ")
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
                                          class: "mb-3",
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
                                          class: "mb-3",
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
                                        createVNode(VSelect, {
                                          modelValue: empDetail.value.gender,
                                          "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                          class: "mb-3",
                                          label: "성별",
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
                                          label: "부서",
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
                                          label: "부서번호",
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
                                          placeholder: "입사일"
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
                                  createTextVNode(" 직원기초정보 "),
                                  createVNode(VBtn, {
                                    class: "ml-3",
                                    onClick: editFunc
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "tabler-edit"
                                      }),
                                      createTextVNode("수정 ")
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
                                      createTextVNode("삭제 ")
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
                                        class: "mb-3",
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
                                        class: "mb-3",
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
                                      createVNode(VSelect, {
                                        modelValue: empDetail.value.gender,
                                        "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                        class: "mb-3",
                                        label: "성별",
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
                                        label: "부서",
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
                                        label: "부서번호",
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
                                        placeholder: "입사일"
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
                    title: "직원세부정보",
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
                                            label: "직급",
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
                                              label: "직급",
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
                                            label: "전화번호",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.phoneNumber,
                                              "onUpdate:modelValue": ($event) => empDetail.value.phoneNumber = $event,
                                              class: "mb-3",
                                              label: "전화번호",
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
                                            label: "이메일",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.email,
                                              "onUpdate:modelValue": ($event) => empDetail.value.email = $event,
                                              class: "mb-3",
                                              label: "이메일",
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
                                            label: "근무지",
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
                                              label: "근무지",
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
                                            label: "최종학력",
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
                                              label: "최종학력",
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
                                            label: "우편번호(클릭)",
                                            variant: "outlined",
                                            onClick: searchPost
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.zipCode,
                                              "onUpdate:modelValue": ($event) => empDetail.value.zipCode = $event,
                                              class: "mb-3",
                                              label: "우편번호(클릭)",
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
                                            label: "주소",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.basicAddress,
                                              "onUpdate:modelValue": ($event) => empDetail.value.basicAddress = $event,
                                              class: "mb-3",
                                              label: "주소",
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
                                            label: "상세주소",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: empDetail.value.detailAddress,
                                              "onUpdate:modelValue": ($event) => empDetail.value.detailAddress = $event,
                                              class: "mb-3",
                                              label: "상세주소",
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
                                            label: "직급",
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
                                            label: "전화번호",
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
                                            label: "이메일",
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
                                            label: "근무지",
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
                                            label: "최종학력",
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
                                            label: "우편번호(클릭)",
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
                                            label: "주소",
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
                                          label: "직급",
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
                                          label: "전화번호",
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
                                          label: "이메일",
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
                                          label: "근무지",
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
                                          label: "최종학력",
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
                                          label: "우편번호(클릭)",
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
                                          label: "주소",
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
                                        label: "직급",
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
                                        label: "전화번호",
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
                                        label: "이메일",
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
                                        label: "근무지",
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
                                        label: "최종학력",
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
                                        label: "우편번호(클릭)",
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
                                        label: "주소",
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
                                createTextVNode(" 직원기초정보 "),
                                createVNode(VBtn, {
                                  class: "ml-3",
                                  onClick: editFunc
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "tabler-edit"
                                    }),
                                    createTextVNode("수정 ")
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
                                    createTextVNode("삭제 ")
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
                                      class: "mb-3",
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
                                      class: "mb-3",
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
                                    createVNode(VSelect, {
                                      modelValue: empDetail.value.gender,
                                      "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                      class: "mb-3",
                                      label: "성별",
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
                                      label: "부서",
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
                                      label: "부서번호",
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
                                      placeholder: "입사일"
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
                      title: "직원세부정보",
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
                                      label: "직급",
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
                                      label: "전화번호",
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
                                      label: "이메일",
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
                                      label: "근무지",
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
                                      label: "최종학력",
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
                                      label: "우편번호(클릭)",
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
                                      label: "주소",
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
                    title: "직원정보 조회"
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
                                    placeholder: "검색",
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
                              createTextVNode(" 직원기초정보 "),
                              createVNode(VBtn, {
                                class: "ml-3",
                                onClick: editFunc
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "tabler-edit"
                                  }),
                                  createTextVNode("수정 ")
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
                                  createTextVNode("삭제 ")
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
                                    class: "mb-3",
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
                                    class: "mb-3",
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
                                  createVNode(VSelect, {
                                    modelValue: empDetail.value.gender,
                                    "onUpdate:modelValue": ($event) => empDetail.value.gender = $event,
                                    class: "mb-3",
                                    label: "성별",
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
                                    label: "부서",
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
                                    label: "부서번호",
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
                                    placeholder: "입사일"
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
                    title: "직원세부정보",
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
                                    label: "직급",
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
                                    label: "전화번호",
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
                                    label: "이메일",
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
                                    label: "근무지",
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
                                    label: "최종학력",
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
                                    label: "우편번호(클릭)",
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
                                    label: "주소",
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
              text: "사번을 기입해주세요."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: "warning",
                title: "warning!",
                text: "사번을 기입해주세요."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/affair/empDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
