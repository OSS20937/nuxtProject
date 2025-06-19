import { hrApi } from "@/api";
import type { registerEmpInfoType } from '@/types/wiztech/emp/registerEmp';

const requestEmp = '/emp'
//직원 등록
function registerEmp(registerEmpInfo:registerEmpInfoType){
  return hrApi.post(`${requestEmp}/registerEmp`, registerEmpInfo, {withCredentials: true})
}

//직원 사진 등록
function registerEmpProfileImage(empCodeAndImage:FormData){
  return hrApi.post(`${requestEmp}/registerEmpProfileImage`, empCodeAndImage, {withCredentials: true})
  }

function getEmpByDept(deptCodeAndpageSize:any) {
  return hrApi.get(`${requestEmp}/findEmpByDeptList`, {
    params:deptCodeAndpageSize
  })
}
function getEmpByDeptNextSearch(nextSearchData:any){
  return hrApi.get(`${requestEmp}/findEmpByDeptListNextSearch`, {
    params:nextSearchData
  })
}

function getEmpList(searchCondition:any){
  return hrApi.get(`${requestEmp}/findEmpList`,{
    params:searchCondition
  })
  
}
function getEmpListNextSearch(searchCondition:any){
  return hrApi.get(`${requestEmp}/findEmpListNextSearch`,{
    params:searchCondition
  })


  
}
  function getEmpDetail(empCode:any){
  return hrApi.get(`${requestEmp}/findEmpDetail`,{
    params:{empCode}
  })
}
export {
  registerEmp,
  registerEmpProfileImage,
  getEmpByDept,
  getEmpByDeptNextSearch,
  getEmpList,
  getEmpListNextSearch,
  getEmpDetail
}