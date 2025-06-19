import { defineStore } from 'pinia'
import type { registerEmpInfoType } from '@/types/wiztech/emp/registerEmp';
import type { findEmpDetailType } from '@/types/wiztech/emp/findEmp';
import {
  registerEmp,
  registerEmpProfileImage,
  getEmpList,
  getEmpListNextSearch,
  getEmpDetail
}
from '../../../../api/wiztech/hr/emp'

export const useEmpStore = defineStore('empStore', {
  state: () => ({
    empCode:'',
    isSuccess: '',
    isImageRegist:false,
    empList: [] as any[],
    empDetatil: {} as findEmpDetailType
  }),

  actions: {

        //직원 정보 등록
        async REGISTER_EMP(registerEmpInfo:registerEmpInfoType) {
        const res = await registerEmp(registerEmpInfo);
        this.isSuccess = res.data.result;
        this.empCode = res.data.empCode;
        },


        //직원 사진 등록
        async REGISTER_EMP_PROFILE_IMAGE(empCodeAndImage:FormData) {
        const res = await registerEmpProfileImage(empCodeAndImage);
        if(res.data.result === 'success') {
            this.isImageRegist = true;
          }
          else if(res.data.result ==='fail'){
            this.isImageRegist = false
          }
        },

        //직원 조회
        async GET_EMP_LIST(searchCondition:any) {
        const res = await getEmpList(searchCondition);
        console.log('직원 검색 결과: ', res.data);
        this.empList = [...res.data];

        },

        //직원 리스트 다음 검색
        async GET_EMP_LIST_NEXT_SEARCH(searchCondition:any) {
        const res = await getEmpListNextSearch(searchCondition);
        this.empList = [...res.data];

        },

        //직원 코드로 상세 조회
        async GET_EMP_DETAIL(empCode:any) {
        const res = await getEmpDetail(empCode);
        console.log("res: ",res);
        this.empDetatil = {...res.data};
        console.log("empDetail: ", this.empDetatil)
        },
  },
})