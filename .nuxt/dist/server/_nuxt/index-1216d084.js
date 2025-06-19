import { h as hrApi, d as defineStore } from "../server.mjs";
const departmentRequestURL = "department";
async function getDeptList() {
  return await hrApi.get(
    `${departmentRequestURL}/getDepartmentList`,
    { withCredentials: true }
  );
}
const useDepartmentStore = defineStore("departmentStore", {
  state: () => ({
    deptList: {}
  }),
  actions: {
    //부서 목록 조회
    async GET_DEPARTMENT_LIST() {
      const res = await getDeptList();
      this.deptList = res.data;
    }
  }
});
const positionURL = "position";
async function getPositionList() {
  return await hrApi.get(
    `${positionURL}/getPositionList`,
    { withCredentials: true }
  );
}
const usePositionStore = defineStore("PositionStore", {
  state: () => ({
    positionList: [],
    errorCode: -1,
    errorMsg: ""
  }),
  actions: {
    //직급 목록 조회
    async GET_POSITION_LIST() {
      const res = await getPositionList();
      this.positionList = res.data.positionList;
      this.errorCode = res.data.errorCode;
      this.errorMsg = res.data.errorMsg;
    }
  }
});
export {
  usePositionStore as a,
  useDepartmentStore as u
};
