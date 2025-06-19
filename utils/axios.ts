import axios from 'axios'

const axiosApi = axios.create({
  withCredentials: true,            // 세션 쿠키 포함 설정
})

export default axiosApi