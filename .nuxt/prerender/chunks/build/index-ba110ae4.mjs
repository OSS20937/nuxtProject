import { d as defineStore, h as hrApi } from './server.mjs';

const conExp = "conexpense/conexp";
function getReqAllList() {
  return hrApi.get(`${conExp}`);
}
function findConList(payload) {
  console.log(payload);
  return hrApi.get(`${conExp}/${payload.startDate}/${payload.endDate}/${payload.searchEmpCode}`);
}
function addConRegi(conRegi) {
  console.log("\uACBD\uC870\uBE44 \uC2E0\uCCAD API", conRegi);
  return hrApi.post(`${conExp}`, conRegi);
}
function editConExp(conUpdate) {
  console.log("\uB0B4\uC5ED \uC218\uC815", conUpdate);
  return hrApi.put(`${conExp}`, conUpdate);
}
function removeConExp(reqNum) {
  console.log("\uB0B4\uC5ED \uC0AD\uC81C", reqNum);
  return hrApi.delete(`${conExp}`, {
    params: {
      reqNum
    }
  });
}
function approveConExp(reqNumList) {
  console.log("\uC2B9\uC778 \uC694\uCCAD", reqNumList);
  return hrApi.put(`${conExp}/status`, {
    reqNumList,
    status: "\uC2B9\uC778"
  });
}
function rejectConExp(reqNumList) {
  console.log("\uBC18\uB824 \uC694\uCCAD", reqNumList);
  return hrApi.put(`${conExp}/status`, {
    reqNumList,
    status: "\uBC18\uB824"
  });
}
const conExpStore = defineStore("conExpStore", {
  state: () => ({
    conExpList: [{
      reqNum: "",
      empCode: "",
      empName: "",
      reqDate: "",
      conType: "",
      trgt: "",
      conTermStart: "",
      conTermEnd: "",
      conAmt: "",
      rel: "",
      conPlace: "",
      bank: "",
      accNum: "",
      accHolder: "",
      note: "",
      approvalStatus: ""
    }],
    allReqList: [],
    conExpenseList: []
  }),
  actions: {
    // 전체 내역 조회
    async FETCH_ALL_REQ() {
      try {
        const response = await getReqAllList();
        this.allReqList = response.data.conExpList;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 검색 조회
    async FETCH_REQ_DETAIL(payload) {
      try {
        console.log(payload);
        const response = await findConList(payload);
        console.log("\uAC80\uC0C91", response);
        console.log("\uAC80\uC0C92", response.data);
        console.log("\uAC80\uC0C93", response.data.conExpenseList);
        this.conExpenseList = response.data.conExpenseList;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 등록(신규)
    async REGI_CONEXP(conRegi) {
      console.log(conRegi);
      try {
        const response = await addConRegi(conRegi);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 수정
    async UPDATE_CONEXP(conUpdate) {
      console.log(conUpdate);
      try {
        const response = await editConExp(conUpdate);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 삭제
    async DELETE_CONEXP(reqNum) {
      try {
        console.log("\uC0AD\uC81C~~~~~", reqNum);
        const response = await removeConExp(reqNum);
        console.log("\uC0AD\uC81C \uD68C\uC2E0", response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 승인
    async APPROVE_CONEXP(reqNumList) {
      try {
        const response = await approveConExp(reqNumList);
        console.log("\uC2B9\uC778 \uC644\uB8CC", response.data);
      } catch (err) {
        console.error("\uC2B9\uC778 \uC624\uB958", err);
        throw new Error(err);
      }
    },
    // 반려
    async REJECT_CONEXP(reqNumList) {
      try {
        const response = await rejectConExp(reqNumList);
        console.log("\uBC18\uB824 \uC644\uB8CC", response.data);
      } catch (err) {
        console.error("\uBC18\uB824 \uC624\uB958", err);
        throw new Error(err);
      }
    }
  }
});

export { conExpStore as c };
