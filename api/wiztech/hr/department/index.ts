import { hrApi } from "@/api";

const departmentRequestURL = 'department';

//부서 조회
async function getDeptList(){
  return await hrApi.get(`${departmentRequestURL}/getDepartmentList`,
    {withCredentials: true})
}

export {
  getDeptList,
}