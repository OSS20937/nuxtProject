import { hrApi } from "@/api";


//직원 사진 경로 얻기
async function getEmpPhotoURL(empCode:string){
  return await hrApi.get('/getEmpPhoto',{
    params:{
      empCode: empCode,
    },withCredentials: true
  })
}

async function updateEmpPhotoUrl(empCodeAndFile:FormData){
  return await hrApi.post('/updatePhoto', empCodeAndFile)
  }

export {
  getEmpPhotoURL,
  updateEmpPhotoUrl,
} 