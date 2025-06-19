import { h as hrApi, a_ as sys, d as defineStore } from "../server.mjs";
const BASE_URL = "/base";
function selectDeptList() {
  return hrApi.get(`${BASE_URL}/deptList`);
}
function selectDeptListDetail() {
  return hrApi.get(`${BASE_URL}/deptList`);
}
function findDeptManageList() {
  return hrApi.get(`${BASE_URL}/findDeptManageList`);
}
function selectPositionList() {
  return hrApi.get(`${BASE_URL}/positionList`);
}
function selectYearList() {
  return hrApi.get(`${BASE_URL}/yearList`);
}
function selectMonthList() {
  return hrApi.get(`${BASE_URL}/monthList`);
}
function selectCompanyList() {
  return hrApi.get(`${BASE_URL}/companyList`);
}
function selectWorkplaceList() {
  return hrApi.get(`${BASE_URL}/workplaceList`);
}
function selectHolidayList(payload) {
  return hrApi.get(`${BASE_URL}/holidayList`, {
    params: {
      applyDay: payload
    }
  });
}
function selectHolidayType() {
  return sys.get("/findHolidayType");
}
function addHoliday(payload) {
  return hrApi.post(`${BASE_URL}/addHoliday`, payload);
}
function modifyHoliday(payload) {
  return hrApi.put(`${BASE_URL}/modifyHoliday`, payload);
}
function removeHoliday(payload) {
  return hrApi.delete(`${BASE_URL}/removeHoliday`, {
    params: {
      applyDay: payload
    }
  });
}
function addPublicHoliday(payload) {
  return hrApi.post(`${BASE_URL}/addPublicHoliday`, payload);
}
function addDept(payload) {
  return hrApi.post(`${BASE_URL}/addDept`, payload);
}
function modifyDept(payload) {
  return hrApi.put(`${BASE_URL}/modifyDept`, payload);
}
function removeDept(payload) {
  return hrApi.delete(`${BASE_URL}/removeDept`, {
    params: {
      deptCode: payload.deptCode,
      workplaceCode: payload.workplaceCode
    }
  });
}
function selectProjectList() {
  return hrApi.get(`${BASE_URL}/project`);
}
function addProject(payload) {
  return hrApi.post(`${BASE_URL}/project`, payload);
}
function modifyProject(payload) {
  return hrApi.put(`${BASE_URL}/project`, payload);
}
function removeProject(payload) {
  return hrApi.delete(`${BASE_URL}/project`, {
    params: {
      projectID: payload
    }
  });
}
const baseStore = defineStore("baseStore", {
  state: () => ({
    deptList: [],
    deptlistDetail: [],
    deptManageList: [],
    posList: [],
    yearList: [],
    companyList: [],
    workplaceList: [],
    monthList: [],
    holidayList: [],
    holidayTypeList: [],
    selectYear: "",
    isDialog: false,
    deptRow: [],
    holidayRow: [],
    projectList: [],
    project: [],
    isDialogBtn: false
  }),
  actions: {
    async FETCH_DEPTLIST() {
      try {
        const response = await selectDeptList();
        console.log("[deptList]", response.data.deptlist);
        this.deptList = response.data.deptlist;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * deptList-직원 있는 부서만
     */
    async FETCH_DEPTLIST_DETAIL() {
      try {
        const response = await selectDeptListDetail();
        this.deptlistDetail = response.data.deptlist;
        return response.data.deptlistDetail;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * deptManageList
     */
    async FIND_DEPT_MANAGE_LIST() {
      try {
        const response = await findDeptManageList();
        console.log(response.data);
        this.deptManageList = response.data.deptManageList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * positionList
     */
    async FETCH_POSLIST() {
      try {
        const response = await selectPositionList();
        this.posList = response.data.positionList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * yearList
     * @param commit
     * @return {Promise<*>}
     * @constructor
     */
    async FETCH_YEARLIST() {
      try {
        const response = await selectYearList();
        console.log(response.data.yearList);
        this.yearList = response.data.yearList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * monthList
     */
    async FETCH_MONTHLIST() {
      try {
        const response = await selectMonthList();
        console.log(response.data.monthList);
        this.monthList = response.data.monthList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * companyList
     */
    async FETCH_COMPANYLIST() {
      try {
        const response = await selectCompanyList();
        this.companyList = response.data.companyList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * workplaceList
     */
    async FETCH_WORKPLACELIST() {
      try {
        const response = await selectWorkplaceList();
        this.workplaceList = response.data.workplaceList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 년도 or 년도-월에 맞는 휴일 찾기
     * allHolidayList
     */
    async FETCH_HOLIDAYLIST(payload) {
      try {
        const response = await selectHolidayList(payload);
        this.holidayList = response.data.holidayList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 휴일 종류 찾기
     * holidayType
     */
    async FETCH_HOLIDAYTYPE() {
      try {
        const response = await selectHolidayType();
        this.holidayTypeList = response.data.holidayTypeList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 휴일 저장
     * insertHoliday
     */
    async ADD_HOLIDAY(payload) {
      console.log(payload);
      try {
        const response = await addHoliday(payload);
        console.log(response);
      } catch (err) {
        alert("중복된 휴일을 입력하셨습니다.");
      }
    },
    /**
     * 휴일 수정
     * modifyHoliday
     */
    async MODIFY_HOLIDAY(payload) {
      console.log(payload);
      try {
        const response = await modifyHoliday(payload);
        console.log(response);
      } catch (err) {
        alert("중복된 휴일을 입력하셨습니다.");
      }
    },
    /**
     * 휴일 삭제
     * removeHoliday
     */
    async REMOVE_HOLIDAY(payload) {
      console.log(payload);
      try {
        const response = await removeHoliday(payload);
        console.log(response);
      } catch (err) {
        alert("중복된 휴일을 입력하셨습니다.");
      }
    },
    // /**
    //  * PA 공휴일 찾기
    //  * holiday
    //  * @param commit
    //  * @return {Promise<*>}
    //  * @constructor
    //  */
    // async FETCH_PA_HOLIDAY({commit},payload){
    //     console.log(payload)
    //     try{
    //         const response = await findPAHoliday(payload)
    //         console.log(response)
    //         commit('GET_PA_HOLIDAY', response.data)
    //     }catch(err){
    //         throw new Error(err)
    //     }
    // },
    /**
     * 법정 공휴일 저장
     * insertPublicHoliday
     */
    async ADD_PUBLIC_HOLIDAY(payload) {
      console.log(payload);
      try {
        const response = await addPublicHoliday(payload);
        console.log(response);
      } catch (err) {
        alert("오류입니다.");
      }
    },
    /**
     * 부서 저장
     * addDept
     */
    async ADD_DEPT(payload) {
      console.log(payload);
      try {
        const response = await addDept(payload);
        console.log(response.data);
        if (response.data.errorCode === 0) {
        }
      } catch (err) {
        alert("중복된 부서를 입력하셨습니다.");
      }
    },
    /**
     * 부서 수정
     * modifyDept
     */
    async MODIFY_DEPT(payload) {
      console.log(payload);
      try {
        const response = await modifyDept(payload);
        console.log(response);
      } catch (err) {
        alert("오류입니다.");
      }
    },
    /**
     * 부서 삭제
     * removeDept
     */
    async REMOVE_DEPT(payload) {
      console.log(payload);
      try {
        const response = await removeDept(payload);
        console.log(response);
      } catch (err) {
        alert("오류입니다.");
      }
    },
    SET_SELECT_YEAR(payload) {
      try {
        console.log("year");
        this.selectYear = payload;
        console.log(payload);
        return payload;
      } catch (err) {
        alert("오류입니다.");
      }
    },
    SET_DIALOG(payload) {
      try {
        this.isDialog = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_DEPT_ROW(payload) {
      try {
        this.deptRow = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_HOLIDAY_ROW(payload) {
      try {
        this.holidayRow = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_PROJECT() {
      try {
        const response = await selectProjectList();
        this.projectList = response.data.projectList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async ADD_PROJECT(payload) {
      try {
        await addProject(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async MODIFY_PROJECT(payload) {
      try {
        await modifyProject(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async REMOVE_PROJECT(payload) {
      try {
        await removeProject(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_PROJECT_ROW(payload) {
      try {
        this.project = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_DIALOG_BTN(payload) {
      try {
        this.isDialogBtn = payload;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
export {
  baseStore as b
};
