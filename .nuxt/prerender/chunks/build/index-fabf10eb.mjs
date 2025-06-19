import { d as defineStore, h as hrApi } from './server.mjs';

async function getUserInfo(empCode) {
  return await hrApi.get(`/user/userInfo?empCode=${empCode}`, { withCredentials: true });
}
const useUserStore = defineStore("userStore", {
  state: () => ({
    empCode: "",
    empName: "",
    hireDate: "",
    birthDate: "",
    gender: "",
    deptCode: "",
    positionCode: "",
    phoneNumber: "",
    email: "",
    basicAddress: "",
    detailAddress: "",
    levelOfEducation: "",
    Hobong: "",
    AuthorityCode: "",
    userId: ""
  }),
  actions: {
    //사용자 정보 획득
    async GET_USER_INFO(empCode) {
      try {
        const userInfo = await getUserInfo(empCode);
        console.log(userInfo);
        this.empCode = userInfo.data.EMP_CODE;
        this.empName = userInfo.data.EMP_NAME;
        this.hireDate = userInfo.data.HIRE_DATE;
        this.birthDate = userInfo.data.BIRTH_DATE;
        this.gender = userInfo.data.GENDER;
        this.deptCode = userInfo.data.DEPT_CODE;
        this.positionCode = userInfo.data.POSITION_CODE;
        this.phoneNumber = userInfo.data.PHONE_NUMBER;
        this.email = userInfo.data.EMAIL;
        this.basicAddress = userInfo.data.BASIC_ADDRESS;
        this.detailAddress = userInfo.data.DETAIL_ADDRESS;
        this.levelOfEducation = userInfo.data.LEVEL_OF_EDUCATION;
        this.Hobong = userInfo.data.HOBONG;
        this.AuthorityCode = userInfo.data.AUTHORITY_CODE;
        this.userId = userInfo.data.USER_ID;
        console.log("empCode", this.empCode);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
});

export { useUserStore as u };
