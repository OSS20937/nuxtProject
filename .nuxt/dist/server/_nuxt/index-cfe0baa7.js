import { h as hrApi, d as defineStore } from "../server.mjs";
const SALARY_URL = "/salary";
function selectBaseSalary(payload) {
  return hrApi.get(`${SALARY_URL}/BaseSalaryList`, {
    params: { payload }
  });
}
function modifyBaseSalary(payload) {
  console.log(payload);
  return hrApi.put(`${SALARY_URL}/updateBaseSalary`, payload);
}
function registerBaseSalary(payload) {
  console.log(payload);
  return hrApi.post(`${SALARY_URL}/registerBaseSalary`, payload);
}
function deleteBaseSalary(payload) {
  console.log(payload.deptCode);
  return hrApi.delete(`${SALARY_URL}/removeBaseSalary`, {
    params: {
      deptCode: payload.deptCode,
      positionCode: payload.positionCode
    }
  });
}
function selectSocialInsure(payload) {
  return hrApi.get(`${SALARY_URL}/SocialInsureList`, {
    params: { year: payload }
  });
}
function registerSocialInsure(payload) {
  console.log(payload);
  return hrApi.post(`${SALARY_URL}/registerSocialInsure`, payload);
}
function selectBaseExtSalary() {
  return hrApi.get(`${SALARY_URL}/searchBaseExtSalary`);
}
function modifyBaseExtSalary(payload) {
  console.log(payload);
  return hrApi.put(`${SALARY_URL}/updateBaseExtSalary`, payload);
}
function registerBaseExtSal(payload) {
  console.log(payload);
  return hrApi.post(`${SALARY_URL}/registerBaseExtSal`, payload);
}
function deleteBaseExtSal(payload) {
  return hrApi.delete(`${SALARY_URL}/removeBaseExtSal`, {
    params: {
      extSalCode: payload
    }
  });
}
function selectSalaryInit(payload) {
  return hrApi.get(`${SALARY_URL}/searchSalaryInit`, {
    params: {
      applyYearMonth: payload.applyYearMonth,
      empCode: payload.empCode
    }
  });
}
function salaryProcess(payload) {
  return hrApi.get(`${SALARY_URL}/salaryProcess`, {
    params: {
      applyYearMonth: payload.applyYearMonth,
      empCode: payload.empCode,
      deptCode: payload.deptCode
    }
  });
}
function updateMonthSal(payload) {
  console.log(payload);
  return hrApi.put(`${SALARY_URL}/updateMonthSal`, payload);
}
function deleteMonthSalay(payload) {
  return hrApi.delete(`${SALARY_URL}/removeMonthSalary`, {
    params: {
      empCode: payload.empCode,
      applyYearMonth: payload.applyYearMonth
    }
  });
}
function findTax(payload) {
  return hrApi.get(`${SALARY_URL}/findMonthDeduction`, {
    params: {
      empCode: payload.empCode,
      applyYearMonth: payload.applyYearMonth
    }
  });
}
function findSalary(payload) {
  return hrApi.get(`${SALARY_URL}/findSalary`, {
    params: {
      applyYearMonth: payload.applyYearMonth,
      empCode: payload.empCode
    }
  });
}
function findBonus(payload) {
  return hrApi.get(`${SALARY_URL}/findBonus`, {
    params: {
      empCode: payload.empCode,
      applyYearMonth: payload.applyYearMonth,
      detailCodeName: payload.detailCodeName,
      finalizeStatus: payload.finalizeStatus
    }
  });
}
function registerBonus(payload) {
  console.log(payload);
  return hrApi.post(`${SALARY_URL}/registerBonus`, payload);
}
function deleteBonus(payload) {
  return hrApi.delete(`${SALARY_URL}/removeBonus`, {
    params: {
      empCode: payload.empCode,
      applyYearMonth: payload.applyYearMonth,
      bonusCode: payload.bonusCode
    }
  });
}
function findSeverancePay(payload) {
  return hrApi.get(`${SALARY_URL}/findSeverancePay`, {
    params: {
      firstDay: payload.firstDay,
      today: payload.today
    }
  });
}
function registerSeverancePay(payload) {
  console.log(payload);
  return hrApi.post(`${SALARY_URL}/registerSeverancePay`, payload);
}
function deleteSeverance(payload) {
  return hrApi.delete(`${SALARY_URL}/removeSeverance`, {
    params: {
      empCode: payload
    }
  });
}
const salaryStore = defineStore("salaryStore", {
  state: () => ({
    baseSalaryList: [],
    baseInsureList: [{
      attributionYear: "",
      empinsureRates: "",
      healthinsureRates: "",
      // 건강보험
      industinsureRates: "",
      // 산재보험
      industinsurecharRates: "",
      // 출퇴근
      jobstabilRates: "",
      // 고용안정
      longtermcareRate: "",
      // 장기요양보험
      nationpensionRates: "",
      // 국민연금
      teachpenisionRates: "",
      //
      vocacompetencyRates: "",
      wrkinsureRates: ""
      // 실업급여
    }],
    baseExtSalList: [],
    initSalaryList: [],
    salaryList: [],
    monthDeductionList: [],
    bonusList: [],
    severanceList: [],
    isDialogVisible: false,
    isDialogBtn: false,
    selectedrow: "",
    rowList: [],
    deptList: [],
    posList: []
  }),
  actions: {
    // -------------------------------기준급여-------------------------------
    /**
     * 기준 급여 조회
     * @param commit
     */
    async FETCH_BASE_SALARY(payload) {
      try {
        const response = await selectBaseSalary(payload);
        this.baseSalaryList = response.data.baseSalaryList;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 기준 급여 수정
     */
    async EDIT_BASE_SALARY(payload) {
      try {
        console.log(payload);
        const response = await modifyBaseSalary(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 기준 급여 등록
     */
    async ADD_BASE_SALARY(payload) {
      try {
        const response = await registerBaseSalary(payload);
        if (response.data.errorCode !== -1)
          return response.data.errorCode;
        else
          alert("등록에 실패하였습니다.");
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 기준 급여 삭제
     */
    async DELETE_BASE_SALARY(payload) {
      try {
        return await deleteBaseSalary(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    // -------------------------------사회보험-------------------------------
    /**
     * 보험률 조회
     */
    async SEARCH_SOCIAL_INSURE(payload) {
      try {
        const response = await selectSocialInsure(payload);
        this.baseInsureList = response.data.baseInsureList[0];
        console.log(response);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 사회 보험 등록/수정
     * @param {}
     * @param payload
     * @returns {Promise<*>}
     * @constructor
     */
    async ADD_SOCIAL_INSURE(payload) {
      try {
        console.log(payload);
        await registerSocialInsure(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    // -------------------------------초과수당-------------------------------
    /**
     * 초과 수당 조회
     */
    async SEARCH_BASE_EXT_SAL() {
      try {
        const response = await selectBaseExtSalary();
        this.baseExtSalList = response.data.baseExtSalList;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 초과 수당 수정
     */
    async EDIT_BASE_EXT_SAL(payload) {
      try {
        console.log(payload);
        const response = await modifyBaseExtSalary(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 초과 수당 등록
     */
    async ADD_BASE_EXT_SAL(payload) {
      try {
        const response = await registerBaseExtSal(payload);
        if (response.data.errorCode !== -1)
          return response.data.errorCode;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 초과 수당 삭제
     */
    async DELETE_BASE_EXT_SAL(payload) {
      try {
        return await deleteBaseExtSal(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    // -------------------------------월급여 관리-------------------------------
    /**
     * 월 급여 초기 조회
     */
    async SEARCH_SALARY_INIT(payload) {
      try {
        const response = await selectSalaryInit(payload);
        this.initSalaryList = response.data.initSalaryList;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 월 급여 생성 및 조회
     * 승우 수정
     */
    async SALARY_PROCESS(payload) {
      try {
        console.log(payload);
        const response = await salaryProcess(payload);
        const responseData = response.data.salaryList.filter((item) => item.empCode === payload.empCode)[0];
        this.salaryList = responseData;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 월 급여 승인 수정
     */
    async MONTH_SAL_FINAL(payload) {
      try {
        const response = await updateMonthSal(payload);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 월 급여 삭제
     */
    async DELETE_MONTH_SALARY(payload) {
      try {
        return await deleteMonthSalay(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 소득세 조회
     */
    async FIND_TAX(payload) {
      try {
        const response = await findTax(payload);
        this.monthDeductionList = response.data.monthDeductionList;
        console.log("이야아", response.data.monthDeductionList);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // -------------------------------월급여 조회-------------------------------
    /**
     * 월 급여 조회
     */
    async SEARCH_SALARY(payload) {
      try {
        const response = await findSalary(payload);
        console.log(response);
        this.salaryList = response.data.salaryList;
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    // -------------------------------상여 및 성과급-------------------------------
    /**
     * 상여 및 성과급 조회
     */
    async FIND_BONUS(payload) {
      try {
        const response = await findBonus(payload);
        this.bonusList = response.data.bonusList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 성과급 등록
     */
    async ADD_BONUS(payload) {
      try {
        const response = await registerBonus(payload);
        if (response.data.errorCode !== -1)
          return response.data.errorCode;
        else
          alert("등록에 실패하였습니다.");
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 성과급 삭제
     */
    async DELETE_BONUS(payload) {
      try {
        return await deleteBonus(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    // -------------------------------퇴직금-------------------------------
    /**
     * 퇴직금 조회
     */
    async FIND_SEVERANCE_PAY(payload) {
      try {
        const response = await findSeverancePay(payload);
        console.log(response.data.severanceList);
        this.severanceList = response.data.severanceList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 퇴직금 등록 및 조회
     */
    async ADD_SEVERANCE_PAY(payload) {
      try {
        const response = await registerSeverancePay(payload);
        console.log(response.data.severanceList);
        this.severanceList = response.data.severanceList;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 퇴직금 삭제
     */
    async DELETE_SEVERANCE(payload) {
      try {
        return await deleteSeverance(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_DIALOG(payload) {
      try {
        this.isDialogVisible = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_DIALOG_BTN(payload) {
      try {
        this.isDialogBtn = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_ROW_LIST(payload) {
      try {
        this.rowList = payload;
        return payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_SELECTED_ROW(payload) {
      try {
        this.selectedrow = payload;
        return payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_POS_LIST(payload) {
      try {
        this.posList = payload;
        return payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    SET_DEPT_LIST(payload) {
      try {
        this.deptList = payload;
        return payload;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
export {
  salaryStore as s
};
