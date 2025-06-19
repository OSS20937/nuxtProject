import { defineStore } from 'pinia'
import type { authenticationData } from "../../../types/login/types";

import {
  checkSession,
  loginAuthentication,
  requestLogout
} from '@/api/hr/login/login'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    empCode: '',          
    empName: '',
    positionCode: '',
    deptCode: '',
    authorityCode: '',
    isLoggedIn: 'N',
    idCheck:'',
    pwCheck:'',
    userId:'',
  }),

  actions: {

    //세션 확인
    async CHECK_SESSION() {
      try {
        await checkSession()
        return true;
      }
      catch (err: any) {
        console.log(err);
        return false;
      }
    },

    async LOGIN_AUTHENTICATION(authenticationData:authenticationData) {
      try {
        console.log('로그인 인증 요청')
        const response = await loginAuthentication(authenticationData)

        this.idCheck = response.data.idCheck
        this.pwCheck = response.data.pwCheck
        this.empCode = response.data.empCode
        this.empName = response.data.empName
        this.positionCode = response.data.positionCode
        this.deptCode = response.data.deptCode
        this.authorityCode = response.data.authorityCode
        this.userId = response.data.userId

        //로그인 성공 시 로컬 스토리지(브라우저)에 사용자 정보 저장(새로고침 시 로그아웃 예방)
        if(this.idCheck === 'Y' && this.pwCheck ==='Y') {
          this.isLoggedIn = 'Y';
          // localStorage.setItem('isLoggedIn',this.isLoggedIn);
          // localStorage.setItem('empCode',this.empCode);
          // localStorage.setItem('empName',this.empName);
          // localStorage.setItem('positionCode',this.positionCode);
          // localStorage.setItem('deptCode',this.deptCode);
          // localStorage.setItem('authorityCode',this.authorityCode);
        }
      }
      catch (err: any) {
        throw new Error(err)
      }
    },



        async LOG_OUT(userId:string) {
      try {
        const response = await requestLogout(userId)
        console.log(response.data);
        //프론트 서버 사용자 정보 초기화
        this.idCheck = "";
        this.pwCheck = "";
        this.empCode = "";
        this.empName = "";
        this.positionCode = "";
        this.deptCode = "";
        this.authorityCode = "";
        this.isLoggedIn = 'N';

        navigateTo('/login');
      }
      catch (err: any) {
        throw new Error(err)
      }
    },
  },
})
