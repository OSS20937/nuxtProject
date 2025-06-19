import { defineStore } from 'pinia'
import {
  getDeptList,
}
from '../../../../api/wiztech/hr/department'

export const useDepartmentStore = defineStore('departmentStore', {
  state: () => ({
      deptList:{},
  }),

  actions: {

        //부서 목록 조회
        async GET_DEPARTMENT_LIST() {
            const res = await getDeptList();
            this.deptList = res.data;
        },
  },
})