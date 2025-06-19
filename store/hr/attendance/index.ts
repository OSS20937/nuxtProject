import { defineStore } from "pinia";
import type { EmpCodeAndApplyDay } from "../../../types/attendance/types";
import {
  addDayAttdEnter,
  getDayAttdLastCode,
  getDayAttdNextPageList,
  addDayAttd,
  addRequestVacation,
  addRestAttd,
  batchDayAttdMgt,
  deleteDayAttdmgtApplyStatus,
  editDayAttd,
  editTravelAndEducationList,
  executeVacationCreate,
  getAnnualVactionMgtList,
  getDayAttdListDay,
  addDayAttdListEMP,
  getEmpListByDept,
  getRestAttdListByAnnulVacation,
  getRestAttdListByEmpCodeAndYM,
  getTravelAndEducationList,
  removeDayAttd,
  removeRestAttd,
  removeTravelAndEducationList,
  selectDayAttdMgtListByStatus,
  selectDayAttdMgtListByStatusAndEmpCode,
  updateDayAttdmgtApplyStatus,
  updateVacationApplyStatus,
} from "@/api/hr/attendance";

export const attenStore = defineStore("attenStore", {
  state: () => ({
    isAddDayAttd: "",
    dayAttdLastCode: {},
    isDialogBtn: false,
    dayAttdList: [],
    dayAttdDayleList: [],
    dayAttdDayleNextPageList: [],
    empList: [],
    annualVacationMgtList: [],
    restAttdList: [],
    travelAndEducationList: [],
    dayAttdMgtList: [],
  }),
  actions: {


    //입장 시 DAY_ATTD 테이블에 삽입
    async INSERT_DAY_ATTD_ENTER(empCodeAndApplyDay: EmpCodeAndApplyDay) {
      try {
        const res = await addDayAttdEnter(empCodeAndApplyDay); //성공/실패 반환
        console.log("res: ", res);
        this.isAddDayAttd = res.data;
      } catch (err: any) {
        throw new Error(err);
      }
    },



    //가장 최근의 DAY_ATTD 테이블 데이터 가져오기
    async SEARCH_DAY_ATTD_LAST_CODE(empCodeAndApplyDay: EmpCodeAndApplyDay) {
      try {
        const res = await getDayAttdLastCode(empCodeAndApplyDay);
        console.log("가장 최근 DAY_ATTD 데이터", res);
        this.dayAttdLastCode = { ...res.data };
      } catch (err: any) {
        throw new Error(err);
      }
    },

    //다음 검색 버튼을 눌렀을 때 기록을 가져오는 함수
    async SEARCH_DAY_ATTD_NEXT_PAGE_LIST(nextPageQueryString: any) {
      try {
        const res = await getDayAttdNextPageList(nextPageQueryString);
        console.log("다음 페이지 목록 JSON 데이터", res);
        console.log("[dayAttdList]", res.data);
        this.dayAttdDayleNextPageList = res.data;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    //일근태 기록을 하루 단위로 가져오는 함수
    async SEARCH_DAY_ATTD_LIST(dayAndPage: any) {
      try {
        const res = await getDayAttdListDay(dayAndPage);
        console.log("[res]", res);
        console.log("[dayAttdList]", res.data);
        this.dayAttdDayleList = res.data;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    SET_DIALOG_BTN(payload: any) {
      try {
        this.isDialogBtn = payload;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    async ADD_DAY_ATTD_BY_PARMS(payload: any) {
      try {
        const res = await addDayAttdListEMP(payload);

        console.log("[dayAttdList]", res.data.dayAttdList);
        this.dayAttdList = res.data.dayAttdList;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async FETCH_EMPLIST_BY_DEPT(payload: any) {
      try {
        const response = await getEmpListByDept(payload);

        console.log("[empList]", response.data.empList);
        this.empList = response.data.empList;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async INSERT_DAY_ATTD(payload: any) {
      try {
        const response = await addDayAttd(payload);
        if (response.data.errorCode === -1) {
          alert("저장에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async DELETE_DAT_ATTD(payload: any) {
      try {
        const response = await removeDayAttd(payload);
        if (response.data.errorCode === -1) {
          alert("삭제에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async UPDATE_DAYATTD(payload: any) {
      try {
        const response = await editDayAttd(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    async SEARCH_ANNUAL_VACTION_MGTLIST(payload: any) {
      try {
        const response = await getAnnualVactionMgtList(payload);

        this.annualVacationMgtList = response.data.annualVacationMgtList;
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response.data.annualVacationMgtList;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async FETCH_REST_ATTD_LIST_BY_EMP_CODE_AND_YM(payload: any) {
      try {
        const response = await getRestAttdListByEmpCodeAndYM(payload);

        this.restAttdList = response.data.restAttdList;
        console.log(response);
        if (response.data.errorCode === -1) {
          alert(`근태 조회에 실패하였습니다.${response.data.errorMsg}`);
          console.log(response.data.errorMsg);
        }
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async FETCH_REST_ATTD_BY_ANNUAL_VACTION(payload: any) {
      try {
        const response = await getRestAttdListByAnnulVacation(payload);

        this.restAttdList = response.data.restAttdList;
        console.log(response);
        if (response.data.errorCode === -1) {
          alert(`근태 조회에 실패하였습니다.${response.data.errorMsg}`);
          console.log(response.data.errorMsg);
        }
      } catch (err: any) {
        throw new Error(err);
      }
    },
    ADD_REST_ATTD(payload: any) {
      try {
        addRestAttd(payload);
      } catch (err: any) {
        throw new Error(err);
      }
    },
    DELTE_REST_ATTD(payload: any) {
      try {
        removeRestAttd(payload);
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async INSERT_REQUEST_REST_ATTD(payload: any) {
      try {
        console.log("여기는 액션입니다", payload);

        const response = await addRequestVacation(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async SEARCH_TRAVEL_AND_EDUCATION_LIST(payload: any) {
      try {
        const response = await getTravelAndEducationList(payload);

        this.travelAndEducationList = response.data.travelAndEducationList;
        console.log(response);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response.data.travelAndEducationList;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async UPDATE_TRAVEL_AND_EDUCATION_LIST(payload: any) {
      try {
        const response = await editTravelAndEducationList(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async DELETE_TRAVEL_AND_EDUCATION_LIST(payload: any) {
      try {
        const response = await removeTravelAndEducationList(payload);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    // 일근태 관리 목록 조회
    async SEARCH_DAYATTDMGT_BY_STATUS(payload: any) {
      try {
        const response = await selectDayAttdMgtListByStatus(payload);

        console.log("[dayAttdMgtList]", response.data.dayAttdMgtList);
        this.dayAttdMgtList = response.data.dayAttdMgtList;
        if (response.data.errorCode === -1) console.log(response.data.errorMsg);

        return response.data.dayAttdMgtList;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async SEARCH_DAYATTDMGT_BY_STATUS_BY_EMP_CODE(payload: any) {
      try {
        const response = await selectDayAttdMgtListByStatusAndEmpCode(payload);

        console.log("[dayAttdMgtList]", response.data.dayAttdMgtList);
        this.dayAttdMgtList = response.data.dayAttdMgtList;
        if (response.data.errorCode === -1) console.log(response.data.errorMsg);

        return response.data.dayAttdMgtList;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async BATCH_DAY_ATTDMGT(payload: any) {
      try {
        const response = await batchDayAttdMgt(payload);

        console.log("[dayAttdMgtList]", response.data.dayAttdMgtList);
        this.dayAttdMgtList = response.data.dayAttdMgtList;
        if (response.data.errorCode === -1) console.log(response.data.errorMsg);

        return response.data.dayAttdMgtList;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    // 연차 마감 관리
    async BETCH_VACATION_CREATE(payload: any) {
      try {
        const response = executeVacationCreate(payload);

        console.log(response);

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    // 연차 승인 관리
    async UPDATE_VACATION_APPLYSTATUS(payload: any) {
      try {
        const response = updateVacationApplyStatus(payload);

        console.log(response);

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },

    // 일근태 관리 - 근태 승인, 승인 취소
    async UPDATE_DAY_ATTDMGT_APPLYSTATUS(payload: any) {
      try {
        const response = await updateDayAttdmgtApplyStatus(payload);

        console.log(response.data);
        if (response.data.errorCode === -1) {
          alert("수정에 실패 하였습니다.");
          console.log(response.data.errorMsg);
        }

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },
    async DELETE_DAY_ATTDMGT_APPLYSTATUS(payload: any) {
      try {
        const response = await deleteDayAttdmgtApplyStatus(payload);

        console.log(response);
        if (response.data.errorCode === -1) console.log(response.data.errorMsg);

        return response;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
});
