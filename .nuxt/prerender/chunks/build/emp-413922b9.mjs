import { d as defineStore } from './server.mjs';

const useEmpStore = defineStore("emp", {
  state: () => ({
    empCode: "",
    name: "",
    position: "",
    department: "",
    authority: "",
    isLoggedIn: false
  }),
  actions: {
    // localStorage에서 불러오기
    loadEmpCode() {
    },
    // empCode 설정 + localStorage에 저장
    setEmpCode(code) {
      this.empCode = code;
      this.isLoggedIn = true;
      localStorage.setItem("empCode", code);
      localStorage.setItem("isLoggedIn", "true");
    },
    // 로그아웃 등 초기화용
    clearEmpCode() {
      this.empCode = "";
    }
  }
});

export { useEmpStore as u };
