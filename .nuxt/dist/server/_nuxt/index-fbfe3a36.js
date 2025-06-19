import { h as hrApi, d as defineStore } from "../server.mjs";
const requestEmp = "/emp";
function registerEmp(registerEmpInfo) {
  return hrApi.post(`${requestEmp}/registerEmp`, registerEmpInfo, { withCredentials: true });
}
function registerEmpProfileImage(empCodeAndImage) {
  return hrApi.post(`${requestEmp}/registerEmpProfileImage`, empCodeAndImage, { withCredentials: true });
}
function getEmpList(searchCondition) {
  return hrApi.get(`${requestEmp}/findEmpList`, {
    params: searchCondition
  });
}
function getEmpListNextSearch(searchCondition) {
  return hrApi.get(`${requestEmp}/findEmpListNextSearch`, {
    params: searchCondition
  });
}
function getEmpDetail(empCode) {
  return hrApi.get(`${requestEmp}/findEmpDetail`, {
    params: { empCode }
  });
}
const useEmpStore = defineStore("empStore", {
  state: () => ({
    empCode: "",
    isSuccess: "",
    isImageRegist: false,
    empList: [],
    empDetatil: {}
  }),
  actions: {
    //직원 정보 등록
    async REGISTER_EMP(registerEmpInfo) {
      const res = await registerEmp(registerEmpInfo);
      this.isSuccess = res.data.result;
      this.empCode = res.data.empCode;
    },
    //직원 사진 등록
    async REGISTER_EMP_PROFILE_IMAGE(empCodeAndImage) {
      const res = await registerEmpProfileImage(empCodeAndImage);
      if (res.data.result === "success") {
        this.isImageRegist = true;
      } else if (res.data.result === "fail") {
        this.isImageRegist = false;
      }
    },
    //직원 조회
    async GET_EMP_LIST(searchCondition) {
      const res = await getEmpList(searchCondition);
      console.log("직원 검색 결과: ", res.data);
      this.empList = [...res.data];
    },
    //직원 리스트 다음 검색
    async GET_EMP_LIST_NEXT_SEARCH(searchCondition) {
      const res = await getEmpListNextSearch(searchCondition);
      this.empList = [...res.data];
    },
    //직원 코드로 상세 조회
    async GET_EMP_DETAIL(empCode) {
      const res = await getEmpDetail(empCode);
      console.log("res: ", res);
      this.empDetatil = { ...res.data };
      console.log("empDetail: ", this.empDetatil);
    }
  }
});
export {
  useEmpStore as u
};
