import { h as hrApi, d as defineStore } from "../server.mjs";
const EVAL_URL = "/eval";
function selEmpEvalList() {
  return hrApi.get(`${EVAL_URL}/selEmpEvalList`);
}
function addEmpEval(payload) {
  return hrApi.post(`${EVAL_URL}/addEmpEval`, payload, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
function findEmpEval(payload) {
  return hrApi.get(`${EVAL_URL}/SearchEmpEval`, {
    params: payload
  });
}
function findEmpEvalByDept(payload) {
  return hrApi.get(`${EVAL_URL}/searchEmpEvalByDept`, {
    params: payload
  });
}
function findEmpEvalByStatus(payload) {
  console.log(payload);
  return hrApi.get(`${EVAL_URL}/searchEmpEvalByStatus`, {
    params: payload
  });
}
function updateEmpEval(payload) {
  console.log(payload);
  return hrApi.post(`${EVAL_URL}/updateEmpEval`, payload);
}
function updateEmpEvalByDept(payload) {
  console.log(payload);
  return hrApi.post(`${EVAL_URL}/updateEmpEvalByDept`, payload);
}
function removeEmpEval(payload) {
  return hrApi.delete(`${EVAL_URL}/removeEmpEval`, {
    params: {
      searchYear: payload.searchYear,
      empCode: payload.empCode
    }
  });
}
function registerEvalStatus(payload) {
  console.log(payload);
  return hrApi.post(`${EVAL_URL}/registerEvalStatus`, payload);
}
function addKpiRegi(payload) {
  console.log(payload);
  return hrApi.post(`${EVAL_URL}/addKpiRegi`, payload);
}
function addKpiPerf(payload) {
  console.log(payload);
  return hrApi.post(`${EVAL_URL}/addKpiPerf`, payload);
}
function getKpiPerf(payload) {
  return hrApi.get(`${EVAL_URL}/getKpiPerf`, {
    params: payload
  });
}
function getKpiPlan(payload) {
  return hrApi.get(`${EVAL_URL}/getKpiPlan`, {
    params: payload
  });
}
function removeKpiPlan(payload) {
  return hrApi.delete(`${EVAL_URL}/removeKpiPlan`, {
    params: {
      empCode: payload.empCode,
      targetYear: payload.targetYear,
      performanceIndicator: payload.performanceIndicator,
      status: payload.status
    }
  });
}
function editKpiStatus(payload) {
  console.log(payload);
  return hrApi.post(`${EVAL_URL}/editKpiStatus`, payload);
}
const evalStore = defineStore("evalStore", {
  state: () => ({
    evalList: [{
      deptName: "",
      disqualification: "",
      durationOfTraining: "",
      empCode: "",
      empName: "",
      grade: "",
      lastSchool: "",
      numberOfCertificate: "",
      numberOfRestDay: "",
      positionName: "",
      remainingHoliday: "",
      score: "",
      searchYear: "",
      status: "",
      attendanceStatus: ""
    }],
    kpiList: [{
      empCode: "",
      targetYear: "",
      perfGoal: "",
      performanceIndicator: "",
      measurementCriteria: "",
      unit: "",
      weight: "",
      target: "",
      calcMethod: "",
      actual: "",
      achievementRate: "",
      status: "",
      score: ""
    }]
  }),
  actions: {
    /**
     * 인사고과 대상자 슬롯창
     */
    async FETCH_EVALLIST() {
      try {
        console.log("인사고과 대상자 슬롯가져오는 중");
        const response = await selEmpEvalList();
        this.evalList = response.data.selEvalList;
        console.log("슬롯 값 가져옴", response.data);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 대상자 추가
     */
    async ADD_EMP_EVAL(payload) {
      try {
        console.log("대상자 추가중", payload);
        const response = await addEmpEval(payload);
        this.evalList = response.data.selEmpEvalList;
        console.log("추가완료", response.data);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 조회
     */
    async SEARCH_EMP_EVAL(payload) {
      try {
        console.log("인사고과 조회");
        const response = await findEmpEval(payload);
        this.evalList = response.data.evalList;
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 부서별 조회
     */
    async SEARCH_EMP_EVAL_DEPT(payload) {
      try {
        console.log("인사고과 부서별 조회");
        const response = await findEmpEvalByDept(payload);
        this.evalList = response.data.evalList;
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 승인상태별 조회
     */
    async SEARCH_EMP_EVAL_STATUS(payload) {
      try {
        console.log("인사고과 승인여부 조회");
        const response = await findEmpEvalByStatus(payload);
        this.evalList = response.data.evalList;
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 갱신
     */
    async UPDATE_EMP_EVAL(payload) {
      try {
        console.log("인사고과 갱신");
        const response = await updateEmpEval(payload);
        if (response.data.errorCode !== -1)
          return response.data.errorCode;
        else
          alert("고과갱신에 실패하였습니다.");
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 부서별 갱신
     */
    async UPDATE_EMP_EVAL_DEPT(payload) {
      try {
        console.log("인사고과 부서별 갱신");
        const response = await updateEmpEvalByDept(payload);
        if (response.data.errorCode !== -1)
          return response.data.errorCode;
        else
          alert("부서별 갱신에 실패하였습니다.");
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 삭제
     */
    async DELETE_EMP_EVAL(payload) {
      try {
        console.log("인사고과 삭제");
        return await removeEmpEval(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 인사고과 승인/반려
     */
    async EDIT_EMP_EVAL(payload) {
      try {
        console.log("인사고과 승인/반려");
        const response = await registerEvalStatus(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 사원 KPI 목표 등록
     */
    async insertEmpKpi(payload) {
      console.log("KPI 목표 등록 액션", payload);
      try {
        const response = await addKpiRegi(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * KPI 성과 등록
     */
    async insertKpiPerf(payload) {
      console.log("KPI 성과 등록 액션", payload);
      try {
        const response = await addKpiPerf(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * KPI 성과 조회
     */
    async fetchKpiPerf(payload) {
      try {
        console.log("KPI 성과 조회 액션", payload);
        const response = await getKpiPerf(payload);
        this.kpiList = response.data.kpiList;
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * KPI 목표 조회
     */
    async fetchKpiPlan(payload) {
      try {
        console.log("KPI 목표 조회");
        const response = await getKpiPlan(payload);
        this.kpiList = response.data.kpiList;
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * KPI 목표 삭제
     */
    async deleteKpiPlan(payload) {
      try {
        console.log("KPI 목표 삭제");
        return await removeKpiPlan(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * KPI 승인/반려
     */
    async updateKpiPlan(payload) {
      try {
        console.log("KPI 승인/반려");
        const response = await editKpiStatus(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
export {
  evalStore as e
};
