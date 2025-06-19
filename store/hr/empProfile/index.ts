import { defineStore } from 'pinia'
import {
  getEmpPhotoURL,
  updateEmpPhotoUrl,
} 
from '@/api/hr/empProfile/index'


export const empProfileStore = defineStore('empProfileStore', {
  state: () => ({
      photoURL:''
  }),

  actions: {


        //직원 사진 경로 검색
        async GET_EMP_PHOTO_URL(empCode:string) {
          try {
            const res = await getEmpPhotoURL(empCode);
            this.photoURL = res.data;
            console.log('potoURL: ', this.photoURL);
            return true;
          }
          catch (err: any) {
            console.log('사진경로 얻기 실패 에러: ',err);
            return false;
          }
        },



        //직원 사진 경로 수정
        async UPDATE_EMP_PHOTO_URL(empCodeAndFile:FormData) {
          try {
            const res = await updateEmpPhotoUrl(empCodeAndFile);
            this.photoURL = res.data;
            console.log('potoURL: ', this.photoURL);
            return true;
          }
          catch (err: any) {
            console.log('사진 수정 실패: ',err);
            return false;
          }
        },
  },
})
