import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { navigateTo } from '#app'

export default function setInterceptors(instance: AxiosInstance): AxiosInstance {
  //const router = useRouter();
  // 요청 인터셉터
  // instance.interceptors.request.use(
  //   (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config,
  //   error => Promise.reject(error),
  // )

  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true // 모든 요청에 세션 ID 포함된 쿠키 전송
      return config
    },
    error => Promise.reject(error)
  )

  // 응답 인터셉터
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    error => {
      if (error.response?.status === 401) {
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");


        navigateTo('/login');
          
      }
      return Promise.reject(error);
    }
  )

  return instance
}