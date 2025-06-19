import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { h as hrApi, d as defineStore, u as useLoginStore, V as VCard, a as VImg, b as VBtn, e as VCardActions } from "../server.mjs";
import { u as useUserStore } from "./index-fabf10eb.js";
import { V as VContainer } from "./VContainer-0419be8f.js";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VDivider } from "./VDivider-8fd47435.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "defu";
import "klona";
import "unhead";
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
/* empty css                */async function getEmpPhotoURL(empCode) {
  return await hrApi.get("/getEmpPhoto", {
    params: {
      empCode
    },
    withCredentials: true
  });
}
async function updateEmpPhotoUrl(empCodeAndFile) {
  return await hrApi.post("/updatePhoto", empCodeAndFile);
}
const empProfileStore = defineStore("empProfileStore", {
  state: () => ({
    photoURL: ""
  }),
  actions: {
    //직원 사진 경로 검색
    async GET_EMP_PHOTO_URL(empCode) {
      try {
        const res = await getEmpPhotoURL(empCode);
        this.photoURL = res.data;
        console.log("potoURL: ", this.photoURL);
        return true;
      } catch (err) {
        console.log("사진경로 얻기 실패 에러: ", err);
        return false;
      }
    },
    //직원 사진 경로 수정
    async UPDATE_EMP_PHOTO_URL(empCodeAndFile) {
      try {
        const res = await updateEmpPhotoUrl(empCodeAndFile);
        this.photoURL = res.data;
        console.log("potoURL: ", this.photoURL);
        return true;
      } catch (err) {
        console.log("사진 수정 실패: ", err);
        return false;
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const localLoginStore = useLoginStore();
    const localEmpProfileStore = empProfileStore();
    const userStore = useUserStore();
    const imageUrl = ref("");
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
    const updatePhoto = async () => {
      if (!selectedFile.value) {
        alert("사진을 먼저 선택하세요.");
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedFile.value);
      formData.append("empCode", localLoginStore.empCode);
      try {
        const res = await localEmpProfileStore.UPDATE_EMP_PHOTO_URL(formData);
        if (res) {
          console.log("업로드 완료:");
          alert("사진이 성공적으로 업로드되었습니다.");
        }
      } catch (err) {
        console.error("업로드 실패:", err);
        alert("사진 업로드 중 오류가 발생했습니다.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h5 font-weight-bold mb-6"${_scopeId}>내 정보</h2>`);
            _push2(ssrRenderComponent(VCard, {
              class: "pa-6",
              elevation: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4",
                          class: "d-flex flex-column align-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                src: unref(imageUrl),
                                alt: "프로필 이미지",
                                height: "200",
                                width: "160",
                                class: "mb-4 elevation-2",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                variant: "tonal",
                                onClick: triggerFileSelect
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`사진 선택`);
                                  } else {
                                    return [
                                      createTextVNode("사진 선택")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                variant: "tonal",
                                onClick: updatePhoto
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`사진 적용`);
                                  } else {
                                    return [
                                      createTextVNode("사진 적용")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><input type="file" accept="image/*" class="d-none"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode(VImg, {
                                  src: unref(imageUrl),
                                  alt: "프로필 이미지",
                                  height: "200",
                                  width: "160",
                                  class: "mb-4 elevation-2",
                                  cover: ""
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "tonal",
                                    onClick: triggerFileSelect
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("사진 선택")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "tonal",
                                    onClick: updatePhoto
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("사진 적용")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("input", {
                                  type: "file",
                                  ref_key: "fileInput",
                                  ref: fileInput,
                                  accept: "image/*",
                                  class: "d-none",
                                  onChange: handleFileChange
                                }, null, 544)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-lg"${_scopeId6}><strong${_scopeId6}>이름:</strong> ${ssrInterpolate(unref(userStore).empName)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>생년월일:</strong> ${ssrInterpolate(unref(userStore).birthDate)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>성별:</strong> ${ssrInterpolate(unref(userStore).gender)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>전화번호:</strong> ${ssrInterpolate(unref(userStore).phoneNumber)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>주소:</strong> ${ssrInterpolate(unref(userStore).basicAddress)} ${ssrInterpolate(unref(userStore).detailAddress)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>최종학력:</strong> ${ssrInterpolate(unref(userStore).levelOfEducation)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>이메일:</strong> ${ssrInterpolate(unref(userStore).email)}</p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "이름:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).empName), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "생년월일:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).birthDate), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "성별:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).gender), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "전화번호:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).phoneNumber), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "주소:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).basicAddress) + " " + toDisplayString(unref(userStore).detailAddress), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "최종학력:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).levelOfEducation), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "이메일:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).email), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-lg"${_scopeId6}><strong${_scopeId6}>부서:</strong> ${ssrInterpolate(unref(userStore).deptCode)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>사번:</strong> ${ssrInterpolate(unref(userStore).empCode)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>직급:</strong> ${ssrInterpolate(unref(userStore).positionCode)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>호봉:</strong> ${ssrInterpolate(unref(userStore).Hobong)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>입사일:</strong> ${ssrInterpolate(unref(userStore).hireDate)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>인사접근권한:</strong> ${ssrInterpolate(unref(userStore).AuthorityCode)}</p><p class="text-lg"${_scopeId6}><strong${_scopeId6}>로그인 아이디:</strong> ${ssrInterpolate(unref(userStore).userId)}</p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "부서:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).deptCode), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "사번:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).empCode), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "직급:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).positionCode), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "호봉:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).Hobong), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "입사일:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).hireDate), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "인사접근권한:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).AuthorityCode), 1)
                                            ]),
                                            createVNode("p", { class: "text-lg" }, [
                                              createVNode("strong", null, "로그인 아이디:"),
                                              createTextVNode(" " + toDisplayString(unref(userStore).userId), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "이름:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).empName), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "생년월일:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).birthDate), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "성별:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).gender), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "전화번호:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).phoneNumber), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "주소:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).basicAddress) + " " + toDisplayString(unref(userStore).detailAddress), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "최종학력:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).levelOfEducation), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "이메일:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).email), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "부서:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).deptCode), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "사번:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).empCode), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "직급:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).positionCode), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "호봉:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).Hobong), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "입사일:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).hireDate), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "인사접근권한:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).AuthorityCode), 1)
                                          ]),
                                          createVNode("p", { class: "text-lg" }, [
                                            createVNode("strong", null, "로그인 아이디:"),
                                            createTextVNode(" " + toDisplayString(unref(userStore).userId), 1)
                                          ])
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
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "이름:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).empName), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "생년월일:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).birthDate), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "성별:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).gender), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "전화번호:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).phoneNumber), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "주소:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).basicAddress) + " " + toDisplayString(unref(userStore).detailAddress), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "최종학력:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).levelOfEducation), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "이메일:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).email), 1)
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "부서:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).deptCode), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "사번:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).empCode), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "직급:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).positionCode), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "호봉:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).Hobong), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "입사일:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).hireDate), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "인사접근권한:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).AuthorityCode), 1)
                                        ]),
                                        createVNode("p", { class: "text-lg" }, [
                                          createVNode("strong", null, "로그인 아이디:"),
                                          createTextVNode(" " + toDisplayString(unref(userStore).userId), 1)
                                        ])
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
                          createVNode(VCol, {
                            cols: "12",
                            md: "4",
                            class: "d-flex flex-column align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: unref(imageUrl),
                                alt: "프로필 이미지",
                                height: "200",
                                width: "160",
                                class: "mb-4 elevation-2",
                                cover: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "tonal",
                                  onClick: triggerFileSelect
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("사진 선택")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "tonal",
                                  onClick: updatePhoto
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("사진 적용")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("input", {
                                type: "file",
                                ref_key: "fileInput",
                                ref: fileInput,
                                accept: "image/*",
                                class: "d-none",
                                onChange: handleFileChange
                              }, null, 544)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "이름:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).empName), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "생년월일:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).birthDate), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "성별:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).gender), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "전화번호:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).phoneNumber), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "주소:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).basicAddress) + " " + toDisplayString(unref(userStore).detailAddress), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "최종학력:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).levelOfEducation), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "이메일:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).email), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "부서:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).deptCode), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "사번:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).empCode), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "직급:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).positionCode), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "호봉:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).Hobong), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "입사일:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).hireDate), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "인사접근권한:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).AuthorityCode), 1)
                                      ]),
                                      createVNode("p", { class: "text-lg" }, [
                                        createVNode("strong", null, "로그인 아이디:"),
                                        createTextVNode(" " + toDisplayString(unref(userStore).userId), 1)
                                      ])
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
                  _push3(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "outlined",
                          class: "mr-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`아이디 변경`);
                            } else {
                              return [
                                createTextVNode("아이디 변경")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "outlined"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`비밀번호 변경`);
                            } else {
                              return [
                                createTextVNode("비밀번호 변경")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "outlined",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("아이디 변경")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("비밀번호 변경")
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "4",
                          class: "d-flex flex-column align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: unref(imageUrl),
                              alt: "프로필 이미지",
                              height: "200",
                              width: "160",
                              class: "mb-4 elevation-2",
                              cover: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "tonal",
                                onClick: triggerFileSelect
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("사진 선택")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "tonal",
                                onClick: updatePhoto
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("사진 적용")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("input", {
                              type: "file",
                              ref_key: "fileInput",
                              ref: fileInput,
                              accept: "image/*",
                              class: "d-none",
                              onChange: handleFileChange
                            }, null, 544)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "이름:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).empName), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "생년월일:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).birthDate), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "성별:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).gender), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "전화번호:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).phoneNumber), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "주소:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).basicAddress) + " " + toDisplayString(unref(userStore).detailAddress), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "최종학력:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).levelOfEducation), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "이메일:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).email), 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "부서:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).deptCode), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "사번:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).empCode), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "직급:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).positionCode), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "호봉:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).Hobong), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "입사일:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).hireDate), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "인사접근권한:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).AuthorityCode), 1)
                                    ]),
                                    createVNode("p", { class: "text-lg" }, [
                                      createVNode("strong", null, "로그인 아이디:"),
                                      createTextVNode(" " + toDisplayString(unref(userStore).userId), 1)
                                    ])
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
                    createVNode(VDivider, { class: "my-6" }),
                    createVNode(VCardActions, { class: "justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "outlined",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("아이디 변경")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("비밀번호 변경")
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
              createVNode("h2", { class: "text-h5 font-weight-bold mb-6" }, "내 정보"),
              createVNode(VCard, {
                class: "pa-6",
                elevation: "2"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4",
                        class: "d-flex flex-column align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: unref(imageUrl),
                            alt: "프로필 이미지",
                            height: "200",
                            width: "160",
                            class: "mb-4 elevation-2",
                            cover: ""
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "d-flex gap-2" }, [
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "tonal",
                              onClick: triggerFileSelect
                            }, {
                              default: withCtx(() => [
                                createTextVNode("사진 선택")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "tonal",
                              onClick: updatePhoto
                            }, {
                              default: withCtx(() => [
                                createTextVNode("사진 적용")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("input", {
                            type: "file",
                            ref_key: "fileInput",
                            ref: fileInput,
                            accept: "image/*",
                            class: "d-none",
                            onChange: handleFileChange
                          }, null, 544)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "이름:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).empName), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "생년월일:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).birthDate), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "성별:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).gender), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "전화번호:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).phoneNumber), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "주소:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).basicAddress) + " " + toDisplayString(unref(userStore).detailAddress), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "최종학력:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).levelOfEducation), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "이메일:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).email), 1)
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "부서:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).deptCode), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "사번:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).empCode), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "직급:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).positionCode), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "호봉:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).Hobong), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "입사일:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).hireDate), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "인사접근권한:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).AuthorityCode), 1)
                                  ]),
                                  createVNode("p", { class: "text-lg" }, [
                                    createVNode("strong", null, "로그인 아이디:"),
                                    createTextVNode(" " + toDisplayString(unref(userStore).userId), 1)
                                  ])
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
                  createVNode(VDivider, { class: "my-6" }),
                  createVNode(VCardActions, { class: "justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "outlined",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("아이디 변경")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("비밀번호 변경")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/empProfile/empProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
