import { hrApi } from "@/api";

const positionURL = 'position';

//직급 조회
async function getPositionList(){
  return await hrApi.get(`${positionURL}/getPositionList`,
    {withCredentials: true})
}

export {
  getPositionList,
}