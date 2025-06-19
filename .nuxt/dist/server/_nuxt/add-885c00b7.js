import { defineComponent, ref, watch, computed, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./index-77616e20.js";
import { e as evalStore } from "./index-af2be6da.js";
import { V as VCard, b as VBtn, f as VCardText, l as VDialog, g as VCardTitle, e as VCardActions, m as VSpacer } from "../server.mjs";
import { V as VRow } from "./VRow-c98dee58.js";
import { V as VCol } from "./VCol-2b70c3e1.js";
import { V as VSelect } from "./VSelect-03a0285c.js";
import { V as VDataTable } from "./VDataTable-34954fd7.js";
import { V as VTextField } from "./VCheckboxBtn-aab82c77.js";
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
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const store = evalStore();
    const searchYear = ref("");
    const searchEmp = ref("");
    const searchDept = ref("");
    ref("");
    const positionName = ref("");
    const durationOfTraining = ref("");
    const numberOfCertificate = ref("");
    const attendanceStatus = ref("");
    const numberOfRestDay = ref("");
    const remainingHoliday = ref("");
    const disqualification = ref("");
    const career = ref("");
    const score = ref("");
    const grade = ref("");
    const status = ref("");
    const positionNameList = ref([]);
    const durationOfTrainingList = ref([]);
    const numberOfCertificateList = ref([]);
    const attendanceStatusList = ref([]);
    const numberOfRestDayList = ref([]);
    const remainingHolidayList = ref([]);
    const disqualificationList = ref([]);
    const careerList = ref([]);
    const yearList = ref([]);
    const deptList = ref([]);
    const empList = ref([]);
    const evalList = ref([]);
    const showTardyModal = ref(false);
    const selectedTardyCount = ref("");
    const headers = [
      { title: "이름", key: "empName", width: "150px" },
      { title: "부서", key: "deptName", width: "150px" },
      { title: "직급", key: "positionName", width: "150px" },
      { title: "교육", key: "durationOfTraining", width: "200px" },
      { title: "자격증", key: "numberOfCertificate", width: "200px" },
      { title: "근태", key: "attendanceStatus", width: "150px" },
      { title: "남은 휴가", key: "numberOfRestDay", width: "150px" },
      { title: "휴가", key: "remainingHoliday", width: "200px" },
      { title: "결격여부", key: "disqualification", width: 120 },
      { title: "장기근속", key: "career", width: "160px" },
      { title: "총 점수", key: "score", width: "150px" },
      { title: "등급", key: "grade" }
    ];
    watch([searchEmp, searchDept, positionName, durationOfTraining, attendanceStatus, numberOfCertificate, numberOfRestDay, remainingHoliday, disqualification, career, score, grade, status], () => {
      evalList.value = [{
        empName: searchEmp.value,
        deptName: searchDept.value,
        positionName: positionName.value,
        durationOfTraining: durationOfTraining.value,
        attendanceStatus: attendanceStatus.value,
        numberOfCertificate: numberOfCertificate.value,
        numberOfRestDay: numberOfRestDay.value,
        remainingHoliday: remainingHoliday.value,
        disqualification: disqualification.value,
        career: career.value,
        score: score.value,
        grade: grade.value,
        status: "미승인"
      }];
    }, { immediate: true });
    const filteredPositionNameList = computed(() => positionNameList.value.filter((item) => item !== null && item !== ""));
    const filteredDurationOfTrainingList = computed(() => durationOfTrainingList.value.filter((item) => item !== null && item !== ""));
    const filteredNumberOfCertificateList = computed(() => numberOfCertificateList.value.filter((item) => item !== null && item !== ""));
    const filteredAttendanceStatusList = computed(() => attendanceStatusList.value.filter((item) => item !== null && item !== ""));
    const filteredNumberOfRestDayList = computed(() => numberOfRestDayList.value.filter((item) => item !== null && item !== ""));
    const filteredRemainingHolidayList = computed(() => remainingHolidayList.value.filter((item) => item !== null && item !== ""));
    const filteredDisqualificationList = computed(() => disqualificationList.value.filter((item) => item !== null && item !== ""));
    const filteredCareerList = computed(() => careerList.value.filter((item) => item !== null && item !== ""));
    const btnAddEmpEval = async () => {
      if (!searchYear.value || !searchDept.value || !searchEmp.value || !positionName.value || !numberOfCertificate.value || !attendanceStatus.value || !remainingHoliday.value || !disqualification.value || !career.value) {
        alert("모든 슬롯 창을 선택하거나 값을 입력해주세요.");
        return;
      }
      const adjustedPayload = {
        positionName: positionName.value,
        // 단일 값 사용
        durationOfTraining: durationOfTraining.value,
        numberOfCertificate: numberOfCertificate.value,
        attendanceStatus: attendanceStatus.value,
        numberOfRestDay: numberOfRestDay.value,
        remainingHoliday: remainingHoliday.value,
        disqualification: disqualification.value,
        career: career.value
      };
      const evalEmpData = {
        searchYear: searchYear.value,
        deptName: searchDept.value,
        empName: searchEmp.value,
        positionName: adjustedPayload.positionName || positionName.value,
        // 값이 없다면 텍스트 필드 값
        durationOfTraining: adjustedPayload.durationOfTraining || durationOfTraining.value,
        numberOfCertificate: adjustedPayload.numberOfCertificate || numberOfCertificate.value,
        attendanceStatus: adjustedPayload.attendanceStatus || attendanceStatus.value,
        numberOfRestDay: adjustedPayload.numberOfRestDay || numberOfRestDay.value,
        remainingHoliday: adjustedPayload.remainingHoliday || remainingHoliday.value,
        disqualification: adjustedPayload.disqualification || disqualification.value,
        career: adjustedPayload.career || career.value
      };
      console.log("evalEmpData:", evalEmpData);
      try {
        await store.ADD_EMP_EVAL(evalEmpData);
        evalList.value = store.evalList;
        console.log("Updated evalList:", evalList.value);
      } catch (error) {
        console.error("Error in btnAddEmpEval", error);
      }
    };
    watch(attendanceStatus, (newVal) => {
      if (newVal === "자주 지각") {
        showTardyModal.value = true;
      }
    });
    const applyTardy = () => {
      attendanceStatus.value = `자주 지각 (${selectedTardyCount.value})`;
      showTardyModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-6">인사고과 대상자 추가</h1>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-6 mb-6",
        elevation: "2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: searchYear.value,
                          "onUpdate:modelValue": ($event) => searchYear.value = $event,
                          class: "ma-3",
                          label: "검색년도",
                          items: yearList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: searchYear.value,
                            "onUpdate:modelValue": ($event) => searchYear.value = $event,
                            class: "ma-3",
                            label: "검색년도",
                            items: yearList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: searchDept.value,
                          "onUpdate:modelValue": ($event) => searchDept.value = $event,
                          class: "ma-3",
                          label: "부서명",
                          items: deptList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: searchDept.value,
                            "onUpdate:modelValue": ($event) => searchDept.value = $event,
                            class: "ma-3",
                            label: "부서명",
                            items: deptList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: searchEmp.value,
                          "onUpdate:modelValue": ($event) => searchEmp.value = $event,
                          class: "ma-3",
                          label: "사원명",
                          items: empList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: searchEmp.value,
                            "onUpdate:modelValue": ($event) => searchEmp.value = $event,
                            class: "ma-3",
                            label: "사원명",
                            items: empList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: searchYear.value,
                          "onUpdate:modelValue": ($event) => searchYear.value = $event,
                          class: "ma-3",
                          label: "검색년도",
                          items: yearList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: searchDept.value,
                          "onUpdate:modelValue": ($event) => searchDept.value = $event,
                          class: "ma-3",
                          label: "부서명",
                          items: deptList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: searchEmp.value,
                          "onUpdate:modelValue": ($event) => searchEmp.value = $event,
                          class: "ma-3",
                          label: "사원명",
                          items: empList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: positionName.value,
                          "onUpdate:modelValue": ($event) => positionName.value = $event,
                          class: "ma-3",
                          label: "직급",
                          items: filteredPositionNameList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: positionName.value,
                            "onUpdate:modelValue": ($event) => positionName.value = $event,
                            class: "ma-3",
                            label: "직급",
                            items: filteredPositionNameList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: durationOfTraining.value,
                          "onUpdate:modelValue": ($event) => durationOfTraining.value = $event,
                          class: "ma-3",
                          label: "교육",
                          items: filteredDurationOfTrainingList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: durationOfTraining.value,
                            "onUpdate:modelValue": ($event) => durationOfTraining.value = $event,
                            class: "ma-3",
                            label: "교육",
                            items: filteredDurationOfTrainingList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: numberOfCertificate.value,
                          "onUpdate:modelValue": ($event) => numberOfCertificate.value = $event,
                          class: "ma-3",
                          label: "자격증",
                          items: filteredNumberOfCertificateList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: numberOfCertificate.value,
                            "onUpdate:modelValue": ($event) => numberOfCertificate.value = $event,
                            class: "ma-3",
                            label: "자격증",
                            items: filteredNumberOfCertificateList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: positionName.value,
                          "onUpdate:modelValue": ($event) => positionName.value = $event,
                          class: "ma-3",
                          label: "직급",
                          items: filteredPositionNameList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: durationOfTraining.value,
                          "onUpdate:modelValue": ($event) => durationOfTraining.value = $event,
                          class: "ma-3",
                          label: "교육",
                          items: filteredDurationOfTrainingList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: numberOfCertificate.value,
                          "onUpdate:modelValue": ($event) => numberOfCertificate.value = $event,
                          class: "ma-3",
                          label: "자격증",
                          items: filteredNumberOfCertificateList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: attendanceStatus.value,
                          "onUpdate:modelValue": ($event) => attendanceStatus.value = $event,
                          class: "ma-3",
                          label: "근태",
                          items: filteredAttendanceStatusList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: attendanceStatus.value,
                            "onUpdate:modelValue": ($event) => attendanceStatus.value = $event,
                            class: "ma-3",
                            label: "근태",
                            items: filteredAttendanceStatusList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: numberOfRestDay.value,
                          "onUpdate:modelValue": ($event) => numberOfRestDay.value = $event,
                          class: "ma-3",
                          label: "남은 휴가",
                          items: filteredNumberOfRestDayList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: numberOfRestDay.value,
                            "onUpdate:modelValue": ($event) => numberOfRestDay.value = $event,
                            class: "ma-3",
                            label: "남은 휴가",
                            items: filteredNumberOfRestDayList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: remainingHoliday.value,
                          "onUpdate:modelValue": ($event) => remainingHoliday.value = $event,
                          class: "ma-3",
                          label: "휴가",
                          items: filteredRemainingHolidayList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: remainingHoliday.value,
                            "onUpdate:modelValue": ($event) => remainingHoliday.value = $event,
                            class: "ma-3",
                            label: "휴가",
                            items: filteredRemainingHolidayList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: attendanceStatus.value,
                          "onUpdate:modelValue": ($event) => attendanceStatus.value = $event,
                          class: "ma-3",
                          label: "근태",
                          items: filteredAttendanceStatusList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: numberOfRestDay.value,
                          "onUpdate:modelValue": ($event) => numberOfRestDay.value = $event,
                          class: "ma-3",
                          label: "남은 휴가",
                          items: filteredNumberOfRestDayList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: remainingHoliday.value,
                          "onUpdate:modelValue": ($event) => remainingHoliday.value = $event,
                          class: "ma-3",
                          label: "휴가",
                          items: filteredRemainingHolidayList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: disqualification.value,
                          "onUpdate:modelValue": ($event) => disqualification.value = $event,
                          class: "ma-3",
                          label: "결격여부",
                          items: filteredDisqualificationList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: disqualification.value,
                            "onUpdate:modelValue": ($event) => disqualification.value = $event,
                            class: "ma-3",
                            label: "결격여부",
                            items: filteredDisqualificationList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: career.value,
                          "onUpdate:modelValue": ($event) => career.value = $event,
                          class: "ma-3",
                          label: "근속연수",
                          items: filteredCareerList.value,
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: career.value,
                            "onUpdate:modelValue": ($event) => career.value = $event,
                            class: "ma-3",
                            label: "근속연수",
                            items: filteredCareerList.value,
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: disqualification.value,
                          "onUpdate:modelValue": ($event) => disqualification.value = $event,
                          class: "ma-3",
                          label: "결격여부",
                          items: filteredDisqualificationList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: career.value,
                          "onUpdate:modelValue": ($event) => career.value = $event,
                          class: "ma-3",
                          label: "근속연수",
                          items: filteredCareerList.value,
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "mt-4 justify-end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    class: "ml-3",
                    color: "primary",
                    onClick: btnAddEmpEval
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 사원 추가 `);
                      } else {
                        return [
                          createTextVNode(" 사원 추가 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      class: "ml-3",
                      color: "primary",
                      onClick: btnAddEmpEval
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 사원 추가 ")
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
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: searchYear.value,
                        "onUpdate:modelValue": ($event) => searchYear.value = $event,
                        class: "ma-3",
                        label: "검색년도",
                        items: yearList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: searchDept.value,
                        "onUpdate:modelValue": ($event) => searchDept.value = $event,
                        class: "ma-3",
                        label: "부서명",
                        items: deptList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: searchEmp.value,
                        "onUpdate:modelValue": ($event) => searchEmp.value = $event,
                        class: "ma-3",
                        label: "사원명",
                        items: empList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: positionName.value,
                        "onUpdate:modelValue": ($event) => positionName.value = $event,
                        class: "ma-3",
                        label: "직급",
                        items: filteredPositionNameList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: durationOfTraining.value,
                        "onUpdate:modelValue": ($event) => durationOfTraining.value = $event,
                        class: "ma-3",
                        label: "교육",
                        items: filteredDurationOfTrainingList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: numberOfCertificate.value,
                        "onUpdate:modelValue": ($event) => numberOfCertificate.value = $event,
                        class: "ma-3",
                        label: "자격증",
                        items: filteredNumberOfCertificateList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: attendanceStatus.value,
                        "onUpdate:modelValue": ($event) => attendanceStatus.value = $event,
                        class: "ma-3",
                        label: "근태",
                        items: filteredAttendanceStatusList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: numberOfRestDay.value,
                        "onUpdate:modelValue": ($event) => numberOfRestDay.value = $event,
                        class: "ma-3",
                        label: "남은 휴가",
                        items: filteredNumberOfRestDayList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: remainingHoliday.value,
                        "onUpdate:modelValue": ($event) => remainingHoliday.value = $event,
                        class: "ma-3",
                        label: "휴가",
                        items: filteredRemainingHolidayList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: disqualification.value,
                        "onUpdate:modelValue": ($event) => disqualification.value = $event,
                        class: "ma-3",
                        label: "결격여부",
                        items: filteredDisqualificationList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: career.value,
                        "onUpdate:modelValue": ($event) => career.value = $event,
                        class: "ma-3",
                        label: "근속연수",
                        items: filteredCareerList.value,
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-4 justify-end" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    class: "ml-3",
                    color: "primary",
                    onClick: btnAddEmpEval
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 사원 추가 ")
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
      _push(ssrRenderComponent(VCard, {
        class: "pa-6",
        elevation: "1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VDataTable), {
              class: "mt-10",
              headers,
              items: evalList.value
            }, {
              [`item.empName`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.empName,
                    "onUpdate:modelValue": ($event) => item.empName = $event,
                    label: item.empName || "이름",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.empName,
                      "onUpdate:modelValue": ($event) => item.empName = $event,
                      label: item.empName || "이름",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.deptName`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.deptName,
                    "onUpdate:modelValue": ($event) => item.deptName = $event,
                    label: item.deptName || "부서",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.deptName,
                      "onUpdate:modelValue": ($event) => item.deptName = $event,
                      label: item.deptName || "부서",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.positionName`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.positionName,
                    "onUpdate:modelValue": ($event) => item.positionName = $event,
                    label: item.positionName || "직급",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.positionName,
                      "onUpdate:modelValue": ($event) => item.positionName = $event,
                      label: item.positionName || "직급",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.durationOfTraining`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.durationOfTraining,
                    "onUpdate:modelValue": ($event) => item.durationOfTraining = $event,
                    label: item.durationOfTraining || "교육",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.durationOfTraining,
                      "onUpdate:modelValue": ($event) => item.durationOfTraining = $event,
                      label: item.durationOfTraining || "교육",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.numberOfCertificate`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.numberOfCertificate,
                    "onUpdate:modelValue": ($event) => item.numberOfCertificate = $event,
                    label: item.numberOfCertificate || "자격증",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.numberOfCertificate,
                      "onUpdate:modelValue": ($event) => item.numberOfCertificate = $event,
                      label: item.numberOfCertificate || "자격증",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.attendanceStatus`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.attendanceStatus,
                    "onUpdate:modelValue": ($event) => item.attendanceStatus = $event,
                    label: item.attendanceStatus || "근태",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.attendanceStatus,
                      "onUpdate:modelValue": ($event) => item.attendanceStatus = $event,
                      label: item.attendanceStatus || "근태",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.numberOfRestDay`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.numberOfRestDay,
                    "onUpdate:modelValue": ($event) => item.numberOfRestDay = $event,
                    label: item.numberOfRestDay || "남은 휴가",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.numberOfRestDay,
                      "onUpdate:modelValue": ($event) => item.numberOfRestDay = $event,
                      label: item.numberOfRestDay || "남은 휴가",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.remainingHoliday`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.remainingHoliday,
                    "onUpdate:modelValue": ($event) => item.remainingHoliday = $event,
                    label: item.remainingHoliday || "휴가",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.remainingHoliday,
                      "onUpdate:modelValue": ($event) => item.remainingHoliday = $event,
                      label: item.remainingHoliday || "휴가",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.disqualification`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.disqualification,
                    "onUpdate:modelValue": ($event) => item.disqualification = $event,
                    label: item.disqualification || "결격여부",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.disqualification,
                      "onUpdate:modelValue": ($event) => item.disqualification = $event,
                      label: item.disqualification || "결격여부",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.career`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.career,
                    "onUpdate:modelValue": ($event) => item.career = $event,
                    label: item.career || "근속연수",
                    dense: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.career,
                      "onUpdate:modelValue": ($event) => item.career = $event,
                      label: item.career || "근속연수",
                      dense: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.score`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.score,
                    "onUpdate:modelValue": ($event) => item.score = $event,
                    label: item.score || "총 점수",
                    dense: "",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.score,
                      "onUpdate:modelValue": ($event) => item.score = $event,
                      label: item.score || "총 점수",
                      dense: "",
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              [`item.grade`]: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: item.grade,
                    "onUpdate:modelValue": ($event) => item.grade = $event,
                    label: item.grade || "등급",
                    dense: "",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: item.grade,
                      "onUpdate:modelValue": ($event) => item.grade = $event,
                      label: item.grade || "등급",
                      dense: "",
                      disabled: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VDataTable), {
                class: "mt-10",
                headers,
                items: evalList.value
              }, {
                [`item.empName`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.empName,
                    "onUpdate:modelValue": ($event) => item.empName = $event,
                    label: item.empName || "이름",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.deptName`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.deptName,
                    "onUpdate:modelValue": ($event) => item.deptName = $event,
                    label: item.deptName || "부서",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.positionName`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.positionName,
                    "onUpdate:modelValue": ($event) => item.positionName = $event,
                    label: item.positionName || "직급",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.durationOfTraining`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.durationOfTraining,
                    "onUpdate:modelValue": ($event) => item.durationOfTraining = $event,
                    label: item.durationOfTraining || "교육",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.numberOfCertificate`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.numberOfCertificate,
                    "onUpdate:modelValue": ($event) => item.numberOfCertificate = $event,
                    label: item.numberOfCertificate || "자격증",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.attendanceStatus`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.attendanceStatus,
                    "onUpdate:modelValue": ($event) => item.attendanceStatus = $event,
                    label: item.attendanceStatus || "근태",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.numberOfRestDay`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.numberOfRestDay,
                    "onUpdate:modelValue": ($event) => item.numberOfRestDay = $event,
                    label: item.numberOfRestDay || "남은 휴가",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.remainingHoliday`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.remainingHoliday,
                    "onUpdate:modelValue": ($event) => item.remainingHoliday = $event,
                    label: item.remainingHoliday || "휴가",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.disqualification`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.disqualification,
                    "onUpdate:modelValue": ($event) => item.disqualification = $event,
                    label: item.disqualification || "결격여부",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.career`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.career,
                    "onUpdate:modelValue": ($event) => item.career = $event,
                    label: item.career || "근속연수",
                    dense: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.score`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.score,
                    "onUpdate:modelValue": ($event) => item.score = $event,
                    label: item.score || "총 점수",
                    dense: "",
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                [`item.grade`]: withCtx(({ item }) => [
                  createVNode(VTextField, {
                    modelValue: item.grade,
                    "onUpdate:modelValue": ($event) => item.grade = $event,
                    label: item.grade || "등급",
                    dense: "",
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(VCard, { title: "<등급 산정 기준>" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>근태</span><p${_scopeId2}>결근 없음, +20 / 1~2일 결근, +16 / 3~4일 결근, +12 / 5일 이상 결근, +8 / 자주 지각, +10 이하</p><span${_scopeId2}>직급</span><p${_scopeId2}>사원, +10 / 대리, +12 / 과장, +15 / 차장, +18 / 부장 이상, +20</p><span${_scopeId2}>결격(징계 등)여부</span><p${_scopeId2}>결격 사유 없음, +10 / 결격 사유 있음, +0</p><span${_scopeId2}>교육이수</span><p${_scopeId2}>직무 관련 교육 이수 5회 이상, +15 / 직무 관련 교육 이수 3~4회, +10 / 직무 관련 교육 이수 1~2회, +6 / 직무 관련 교육 이수내역 없음, +0</p><span${_scopeId2}>근속년수</span><p${_scopeId2}>10년 이상, +10 / 5~9년 근속, +7 / 1~4년 근속, +5 / 1년 미만 근속, +2</p><span${_scopeId2}>자격증</span><p${_scopeId2}>직무 관련 자격증 보유, +15 / 일부 관련 자격증 보유, +6 / 자격증 없음, +0</p><span${_scopeId2}>휴가 사용</span><p${_scopeId2}>휴가 사용 적절, +10 / 과도한 휴가 사용, +5 / 휴가 사용 적지 않음, +2</p><span${_scopeId2}>등급산정</span><p${_scopeId2}> 90점 이상, S / 90점 미만 ~ 80점 이상, A / 80점 미만 ~ 70점 이상, B / 70점 미만 ~ 60점 이상, C / 60점 미만 ~ 50점 이상, D / 50점 미만, E </p>`);
                } else {
                  return [
                    createVNode("span", null, "근태"),
                    createVNode("p", null, "결근 없음, +20 / 1~2일 결근, +16 / 3~4일 결근, +12 / 5일 이상 결근, +8 / 자주 지각, +10 이하"),
                    createVNode("span", null, "직급"),
                    createVNode("p", null, "사원, +10 / 대리, +12 / 과장, +15 / 차장, +18 / 부장 이상, +20"),
                    createVNode("span", null, "결격(징계 등)여부"),
                    createVNode("p", null, "결격 사유 없음, +10 / 결격 사유 있음, +0"),
                    createVNode("span", null, "교육이수"),
                    createVNode("p", null, "직무 관련 교육 이수 5회 이상, +15 / 직무 관련 교육 이수 3~4회, +10 / 직무 관련 교육 이수 1~2회, +6 / 직무 관련 교육 이수내역 없음, +0"),
                    createVNode("span", null, "근속년수"),
                    createVNode("p", null, "10년 이상, +10 / 5~9년 근속, +7 / 1~4년 근속, +5 / 1년 미만 근속, +2"),
                    createVNode("span", null, "자격증"),
                    createVNode("p", null, "직무 관련 자격증 보유, +15 / 일부 관련 자격증 보유, +6 / 자격증 없음, +0"),
                    createVNode("span", null, "휴가 사용"),
                    createVNode("p", null, "휴가 사용 적절, +10 / 과도한 휴가 사용, +5 / 휴가 사용 적지 않음, +2"),
                    createVNode("span", null, "등급산정"),
                    createVNode("p", null, " 90점 이상, S / 90점 미만 ~ 80점 이상, A / 80점 미만 ~ 70점 이상, B / 70점 미만 ~ 60점 이상, C / 60점 미만 ~ 50점 이상, D / 50점 미만, E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("span", null, "근태"),
                  createVNode("p", null, "결근 없음, +20 / 1~2일 결근, +16 / 3~4일 결근, +12 / 5일 이상 결근, +8 / 자주 지각, +10 이하"),
                  createVNode("span", null, "직급"),
                  createVNode("p", null, "사원, +10 / 대리, +12 / 과장, +15 / 차장, +18 / 부장 이상, +20"),
                  createVNode("span", null, "결격(징계 등)여부"),
                  createVNode("p", null, "결격 사유 없음, +10 / 결격 사유 있음, +0"),
                  createVNode("span", null, "교육이수"),
                  createVNode("p", null, "직무 관련 교육 이수 5회 이상, +15 / 직무 관련 교육 이수 3~4회, +10 / 직무 관련 교육 이수 1~2회, +6 / 직무 관련 교육 이수내역 없음, +0"),
                  createVNode("span", null, "근속년수"),
                  createVNode("p", null, "10년 이상, +10 / 5~9년 근속, +7 / 1~4년 근속, +5 / 1년 미만 근속, +2"),
                  createVNode("span", null, "자격증"),
                  createVNode("p", null, "직무 관련 자격증 보유, +15 / 일부 관련 자격증 보유, +6 / 자격증 없음, +0"),
                  createVNode("span", null, "휴가 사용"),
                  createVNode("p", null, "휴가 사용 적절, +10 / 과도한 휴가 사용, +5 / 휴가 사용 적지 않음, +2"),
                  createVNode("span", null, "등급산정"),
                  createVNode("p", null, " 90점 이상, S / 90점 미만 ~ 80점 이상, A / 80점 미만 ~ 70점 이상, B / 70점 미만 ~ 60점 이상, C / 60점 미만 ~ 50점 이상, D / 50점 미만, E ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: showTardyModal.value,
        "onUpdate:modelValue": ($event) => showTardyModal.value = $event,
        "max-width": "400px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`지각 횟수를 선택해주세요`);
                      } else {
                        return [
                          createTextVNode("지각 횟수를 선택해주세요")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: selectedTardyCount.value,
                          "onUpdate:modelValue": ($event) => selectedTardyCount.value = $event,
                          type: "number",
                          placeholder: "숫자를 입력하세요",
                          variant: "outlined"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: selectedTardyCount.value,
                            "onUpdate:modelValue": ($event) => selectedTardyCount.value = $event,
                            type: "number",
                            placeholder: "숫자를 입력하세요",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          text: "",
                          onClick: ($event) => showTardyModal.value = false
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
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: applyTardy
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`적용`);
                            } else {
                              return [
                                createTextVNode("적용")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            text: "",
                            onClick: ($event) => showTardyModal.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("취소")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: applyTardy
                          }, {
                            default: withCtx(() => [
                              createTextVNode("적용")
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("지각 횟수를 선택해주세요")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: selectedTardyCount.value,
                          "onUpdate:modelValue": ($event) => selectedTardyCount.value = $event,
                          type: "number",
                          placeholder: "숫자를 입력하세요",
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          text: "",
                          onClick: ($event) => showTardyModal.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("취소")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: applyTardy
                        }, {
                          default: withCtx(() => [
                            createTextVNode("적용")
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("지각 횟수를 선택해주세요")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: selectedTardyCount.value,
                        "onUpdate:modelValue": ($event) => selectedTardyCount.value = $event,
                        type: "number",
                        placeholder: "숫자를 입력하세요",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        text: "",
                        onClick: ($event) => showTardyModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("취소")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: applyTardy
                      }, {
                        default: withCtx(() => [
                          createTextVNode("적용")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/empeval/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
