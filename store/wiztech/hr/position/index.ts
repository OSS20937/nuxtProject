import { defineStore } from 'pinia'
import {
  getPositionList,
}
from '../../../../api/wiztech/hr/position'

export const usePositionStore = defineStore('PositionStore', {
  state: () => ({
      positionList:[],
      errorCode: -1,
      errorMsg: "",
  }),

  actions: {

        //직급 목록 조회
        async GET_POSITION_LIST() {
            const res = await getPositionList();
            this.positionList = res.data.positionList;
            this.errorCode = res.data.errorCode;
            this.errorMsg = res.data.errorMsg;

        },
  },
})