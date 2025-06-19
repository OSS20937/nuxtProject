import { h as hrApi, d as defineStore } from "../server.mjs";
const Emp = "/affair/emp";
const appoint = "/affair/appoint";
const getDeptList = "/base/deptList";
const getWorkPlace = "/company/searchWorkplace";
const empPhotoUpdate = "/affairFile/photoUpdate";
const empPhotoRegi = "/affairFile/photoResi";
function getEmployeesInDept(deptCode) {
  return hrApi.get("/affair/getEmployeesInDept", {
    params: {
      deptCode
    }
  });
}
function getAllEmpList() {
  console.log(hrApi.defaults);
  return hrApi.get(`${Emp}`);
}
function getEmpDetail(clickEmp) {
  console.log(clickEmp);
  return hrApi.get(`${Emp}/${clickEmp}`);
}
function addEmp(regiEmp) {
  console.log(regiEmp);
  return hrApi.post(`${Emp}`, regiEmp);
}
function editEmp(empUpdate) {
  console.log(empUpdate);
  return hrApi.put(`${Emp}`, empUpdate);
}
function removeEmp(emp) {
  console.log(emp);
  return hrApi.delete(`${Emp}/${emp}`);
}
function editPhotoEmp(file) {
  console.log(file);
  return hrApi.post(`${empPhotoUpdate}`, file);
}
function addImgEmp(file) {
  console.log(file);
  return hrApi.post(`${empPhotoRegi}`, file);
}
function getAllDepartmentList() {
  return hrApi.get(`${getDeptList}`);
}
function getWorkPlaceList(COM) {
  console.log("근무지 조회", COM);
  return hrApi.get(`${getWorkPlace}`, {
    params: {
      companyCode: COM
    }
  });
}
function addAppointRegi(appRegi) {
  console.log("발령정보 등록 API", appRegi);
  return hrApi.post(`${appoint}`, appRegi);
}
function getAppList() {
  return hrApi.get(`${appoint}`);
}
function editApproveAppoint(approveAppoint) {
  console.log("발령 승인", approveAppoint);
  return hrApi.put(`${appoint}`, approveAppoint);
}
function removeAppoint(approveAppoint) {
  console.log("발령 삭제", approveAppoint);
  return hrApi.delete(`${appoint}`, {
    params: {
      approveAppoint
    }
  });
}
function getLogAppoint() {
  return hrApi.get(`${appoint}/log`);
}
function findDeptEmpList(payload) {
  console.log(payload);
  return hrApi.get(`${Emp}/findDeptEmpList`, {
    params: {
      deptCode: payload
    }
  });
}
const affairStore = defineStore("affairStore", {
  state: () => ({
    employeesInDeptList: [],
    all_emp_list: [],
    selected_emp_detail: [],
    all_dept_list: [],
    all_work_place_list: [],
    all_appointments_list: [],
    all_appointments_log: [],
    selected_dept_Emp_List: []
  }),
  actions: {
    //부서에 소속된 사원 조회
    async FETCH_EMP_DEPT_IN(deptCode) {
      try {
        const response = await getEmployeesInDept(deptCode);
        console.log("부서에 소속된 사원들", response);
        this.employeesInDeptList = response.data;
        console.log("employeesInDeptList", this.employeesInDeptList);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 직원전체조회 O
     */
    async FETCH_ALL_EMP() {
      try {
        const response = await getAllEmpList();
        this.all_emp_list = response.data.empList;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 부서전체조회 O
     */
    async FETCH_ALL_DEPARTMENT() {
      try {
        const response = await getAllDepartmentList();
        this.all_dept_list = response.data.deptlist;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 근무지 조회
     */
    async FETCH_WORKPLACE(COM) {
      try {
        console.log("근무지 조회", COM);
        const response = await getWorkPlaceList(COM);
        console.log("근무지 조회", response);
        this.all_work_place_list = response.data.gridRowJson;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 겹침
    async FETCH_EMP_DETAIL(clickEmp) {
      try {
        console.log(clickEmp);
        const response = await getEmpDetail(clickEmp);
        console.log("직원 상세 조회", response.data.empDetailInfo);
        this.selected_emp_detail = response.data.empDetailInfo[0];
        return Promise.resolve(response);
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_EMP_LIST_BY_DEPT(clickEmp) {
      try {
        console.log(clickEmp);
        const response = await getEmpDetail(clickEmp);
        console.log("직원 상세 조회", response.data.empDetailInfo);
        this.selected_emp_detail = response.data.empDetailInfo;
        return Promise.resolve(response);
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 직원 정보 수정
     */
    async UPDATE_EMP_INFO(empUpdate) {
      console.log(empUpdate);
      try {
        const response = await editEmp(empUpdate);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 직원 사진 수정
     */
    async UPDATE_PHOTO_FILE(empPhoto) {
      console.log(empPhoto);
      try {
        const response = await editPhotoEmp(empPhoto);
        console.log(response);
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 직원 사진 등록
     */
    async INSERT_IMG(empPhoto) {
      console.log(empPhoto);
      try {
        const response = await addImgEmp(empPhoto);
        console.log(response);
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 직원 등록
     */
    async INSERT_EMP(empregi) {
      console.log(empregi);
      try {
        const response = await addEmp(empregi);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 직원 삭제
     */
    async DELETE_SELECTED_EMP(emp) {
      console.log(emp);
      try {
        const response = await removeEmp(emp);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 발령 등록
     */
    async INSERT_APPOINT_EMP(empApp) {
      console.log("발령 정보 액션", empApp);
      try {
        const response = await addAppointRegi(empApp);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 발령 신청 내역 조회
     */
    async FETCH_APPOINT_LIST() {
      try {
        const response = await getAppList();
        console.log("발령 내역 조회 회신", response);
        this.all_appointments_list = response.data.appoint;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 발령 승인 반려
     */
    async UPDATE_APPOINT_APPROVE_EMP(approveAppoint) {
      try {
        console.log("발령 내역 조회 액션~~~~~~", approveAppoint);
        const response = await editApproveAppoint(approveAppoint);
        console.log("발령 내역 조회 회신", response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 발령 삭제
     */
    async DELETE_APPOINT_EMP(approveAppoint) {
      try {
        console.log("발령 삭제 액션~~~~~~", approveAppoint);
        const response = await removeAppoint(approveAppoint);
        console.log("발령 삭제 회신", response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 발령 승인 기록 조회
     */
    async FETCH_APPOINT_LOG() {
      try {
        const response = await getLogAppoint();
        console.log("발령 삭제 회신", response);
        this.all_appointments_log = response.data.appoint;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_DEPT_EMP_LIST(payload) {
      try {
        const response = await findDeptEmpList(payload);
        this.selected_dept_Emp_List = response.data.deptEmpList;
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
export {
  affairStore as a
};
