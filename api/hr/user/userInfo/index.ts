import { hrApi } from "@/api";


//세션 확인
async function getUserInfo(empCode:string){
  return await hrApi.get(`/user/userInfo?empCode=${empCode}`,{withCredentials: true })
}

export {getUserInfo, }; 