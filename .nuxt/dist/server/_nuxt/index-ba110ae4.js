import { h as hrApi, d as defineStore } from "../server.mjs";
const conExp = "conexpense/conexp";
function getReqAllList() {
  return hrApi.get(`${conExp}`);
}
function findConList(payload) {
  console.log(payload);
  return hrApi.get(`${conExp}/${payload.startDate}/${payload.endDate}/${payload.searchEmpCode}`);
}
function addConRegi(conRegi) {
  console.log("경조비 신청 API", conRegi);
  return hrApi.post(`${conExp}`, conRegi);
}
function editConExp(conUpdate) {
  console.log("내역 수정", conUpdate);
  return hrApi.put(`${conExp}`, conUpdate);
}
function removeConExp(reqNum) {
  console.log("내역 삭제", reqNum);
  return hrApi.delete(`${conExp}`, {
    params: {
      reqNum
    }
  });
}
function approveConExp(reqNumList) {
  console.log("승인 요청", reqNumList);
  return hrApi.put(`${conExp}/status`, {
    reqNumList,
    status: "승인"
  });
}
function rejectConExp(reqNumList) {
  console.log("반려 요청", reqNumList);
  return hrApi.put(`${conExp}/status`, {
    reqNumList,
    status: "반려"
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
        console.log("검색1", response);
        console.log("검색2", response.data);
        console.log("검색3", response.data.conExpenseList);
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
        console.log("삭제~~~~~", reqNum);
        const response = await removeConExp(reqNum);
        console.log("삭제 회신", response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // 승인
    async APPROVE_CONEXP(reqNumList) {
      try {
        const response = await approveConExp(reqNumList);
        console.log("승인 완료", response.data);
      } catch (err) {
        console.error("승인 오류", err);
        throw new Error(err);
      }
    },
    // 반려
    async REJECT_CONEXP(reqNumList) {
      try {
        const response = await rejectConExp(reqNumList);
        console.log("반려 완료", response.data);
      } catch (err) {
        console.error("반려 오류", err);
        throw new Error(err);
      }
    }
  }
});
export {
  conExpStore as c
};
