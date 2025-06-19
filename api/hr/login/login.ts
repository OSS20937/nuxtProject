import { sys } from "@/api";
import type { authenticationData } from "../../../types/login/types";

//세션 확인
async function checkSession(){
  return await sys.get('/checkSession',{withCredentials: true }
  )
}

//로그인 인증
async function loginAuthentication(authenticationData:authenticationData){
  return await sys.post('/authentication',authenticationData,{withCredentials: true })
}


//로그아웃 요청
async function requestLogout(userId:string){
  return await sys.post('/requestLogout',{userId: userId},{withCredentials: true })
}

export {checkSession, loginAuthentication, requestLogout}; 