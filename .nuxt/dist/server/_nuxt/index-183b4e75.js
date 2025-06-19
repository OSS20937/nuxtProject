import { h as hrApi, d as defineStore } from "../server.mjs";
const DAILYLABOR_EMP_URL = "/dailyemp";
const DAILYLABOR_ATTEND_URL = "/dailyattend";
const DAILYLABOR_SALARY_URL = "/dailysal";
function selectDailyLaborEmp() {
  return hrApi.get(`${DAILYLABOR_EMP_URL}/emp`);
}
function getDailyLaborEmpDetail(clickEmp) {
  console.log(clickEmp);
  return hrApi.get(`${DAILYLABOR_EMP_URL}/emp/${clickEmp}`);
}
function addDailyLaborEmp(regiEmp) {
  console.log(regiEmp);
  return hrApi.post(`${DAILYLABOR_EMP_URL}/emp`, regiEmp);
}
function updateDailyLaborEmp(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_EMP_URL}/emp`, payload);
}
function deleteDailyLaborEmp(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_EMP_URL}/deleteemp`, payload);
}
function selectDailyLaborEmpLog() {
  return hrApi.get(`${DAILYLABOR_EMP_URL}/log`);
}
function deleteDailyLaborEmpLog(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_EMP_URL}/log`, payload);
}
function addDailyLaborAttend(regiAttend) {
  console.log(regiAttend);
  return hrApi.post(`${DAILYLABOR_ATTEND_URL}/attned`, regiAttend);
}
function updateDailyLaborAttend(updateAttend) {
  console.log(updateAttend);
  return hrApi.put(`${DAILYLABOR_ATTEND_URL}/attned`, updateAttend);
}
function selectDailyLaborAttend(date, approval) {
  console.log(approval);
  return hrApi.get(`${DAILYLABOR_ATTEND_URL}/attneddate`, {
    params: {
      workDate: date,
      deadlineRequest: approval
    }
  });
}
function deleteDailyLaborAttend(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_ATTEND_URL}/attenddate`, payload);
}
function updateDailyLaborAttendApproval(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_ATTEND_URL}/approval`, payload);
}
function insertSalaryList(payload) {
  console.log(payload);
  return hrApi.post(`${DAILYLABOR_SALARY_URL}/salary`, payload);
}
function findSalaryList(payload) {
  console.log(payload);
  return hrApi.get(`${DAILYLABOR_SALARY_URL}/salary`, {
    params: {
      date: payload.date,
      deadline: payload.deadline,
      status: payload.status
    }
  });
}
function updateDailyLaborSalaryList(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_SALARY_URL}/salary`, payload);
}
function deleteDailyLaborSalary(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_SALARY_URL}/delete`, payload);
}
function selectSalaryTaxList(payload) {
  console.log(payload);
  return hrApi.get(`${DAILYLABOR_SALARY_URL}/salarytax`, {
    params: {
      workDate: payload.workDate,
      deadlineRequest: payload.deadlineRequest,
      status: payload.status
    }
  });
}
function selectTax(payload) {
  console.log(payload);
  return hrApi.get(`${DAILYLABOR_SALARY_URL}/tax`, {
    params: {
      date: payload
    }
  });
}
function updateSalaryTaxList(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_SALARY_URL}/salarytax`, payload);
}
function deleteSalaryTax(payload) {
  console.log(payload);
  return hrApi.put(`${DAILYLABOR_SALARY_URL}/deletesalarytax`, payload);
}
const dailyLaborStore = defineStore("dailyLaborStore", {
  state: () => ({
    dailyLaborEmpList: [],
    dailyLaborEmpDetailInfo: [],
    dailyLaborAttendList: [],
    dailyLaborSalaryList: [],
    dailyLaborSalaryTaxList: [],
    dailyLaborTaxList: [],
    isModal: false,
    detailSalaryTax: [],
    empLogList: []
  }),
  actions: {
    async SEARCH_EMP_LIST() {
      try {
        const res = await selectDailyLaborEmp();
        console.log(res.data.dailyLaborEmpList);
        this.dailyLaborEmpList = res.data.dailyLaborEmpList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_EMP_DETAIL(clickEmp) {
      try {
        const res = await getDailyLaborEmpDetail(clickEmp);
        console.log(res.data.dailyLaborEmpDetailInfo[0]);
        this.dailyLaborEmpDetailInfo = res.data.dailyLaborEmpDetailInfo[0];
      } catch (err) {
        throw new Error(err);
      }
    },
    async INSERT_EMP(regiEmp) {
      try {
        await addDailyLaborEmp(regiEmp);
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_EMP(payload) {
      try {
        await updateDailyLaborEmp(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_EMP(payload) {
      try {
        await deleteDailyLaborEmp(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_EMP_LOG() {
      try {
        const res = await selectDailyLaborEmpLog();
        this.empLogList = res.data.dailyLaborEmpLogList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_EMP_LOG(payload) {
      try {
        await deleteDailyLaborEmpLog(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async INSERT_ATTEND(regiAttend) {
      try {
        await addDailyLaborAttend(regiAttend);
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_WORK_ATTEND(updateAttend) {
      try {
        await updateDailyLaborAttend(updateAttend);
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_ATTEND(date, approval) {
      try {
        const res = await selectDailyLaborAttend(date, approval);
        this.dailyLaborAttendList = res.data.dailyLaborAttendList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_ATTEND(payload) {
      try {
        await deleteDailyLaborAttend(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_ATTEND_APPROVAL(payload) {
      try {
        await updateDailyLaborAttendApproval(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async INSERT_SALARY_LIST(payload) {
      try {
        await insertSalaryList(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async FIND_SALARY_LIST(payload) {
      try {
        const res = await findSalaryList(payload);
        this.dailyLaborSalaryList = res.data.dailyLaborSalaryList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_SALARY_LIST(payload) {
      try {
        await updateDailyLaborSalaryList(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_SALARY_LIST(payload) {
      try {
        await deleteDailyLaborSalary(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_SALARY_TAX(payload) {
      try {
        const res = await selectSalaryTaxList(payload);
        this.dailyLaborSalaryTaxList = res.data.dailyLaborSalaryTaxList;
      } catch (err) {
        throw new Error(err);
      }
    },
    async FETCH_TAX(payload) {
      try {
        const res = await selectTax(payload);
        this.dailyLaborTaxList = res.data.dailyLaborTaxList[0];
      } catch (err) {
        throw new Error(err);
      }
    },
    async MODAL_SET(payload) {
      try {
        this.isModal = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    async DETAIL_SALARY_TAX(payload) {
      try {
        this.detailSalaryTax = payload;
      } catch (err) {
        throw new Error(err);
      }
    },
    async UPDATE_SALARY_TAX(payload) {
      try {
        await updateSalaryTaxList(payload);
      } catch (err) {
        throw new Error(err);
      }
    },
    async DELETE_SALARY_TAX(payload) {
      try {
        await deleteSalaryTax(payload);
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
export {
  dailyLaborStore as d
};
