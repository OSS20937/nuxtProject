import { useLoginStore } from './../store/hr/login/index'

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return  // SSR에서 localStorage 접근 금지
  const store = useLoginStore()

//새로고침 시 사용자 정보 유지
  // if (store.isLoggedIn === 'N') {
  //   const empCode = localStorage.getItem('empCode')
  //   const empName = localStorage.getItem('empName')
  //   const positionCode = localStorage.getItem('positionCode')
  //   const deptCode = localStorage.getItem('deptCode')
  //   const authorityCode = localStorage.getItem('authorityCode')
  //   const isLoggedIn = localStorage.getItem('isLoggedIn')
  //   if (empCode && empName && positionCode && deptCode && authorityCode && isLoggedIn) {
  //     store.empCode = empCode
  //     store.empName = empName
  //     store.positionCode = positionCode
  //     store.deptCode = deptCode
  //     store.authorityCode = authorityCode
  //     store.isLoggedIn = isLoggedIn
  //   }
  // }

  // 사용자가 비로그인 상태면 로그인 페이지로 이동(세션 만료 등) '/login' 페이지일 때는 리디렉션하지 않도록 예외처리
  if (store.isLoggedIn === 'N' && to.path !== '/login') {
    return navigateTo('/login')
  }
})