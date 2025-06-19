// store/hr/emp.ts
import { defineStore } from 'pinia'

export const useEmpStore = defineStore('emp', {
  state: () => ({
    empCode: '',          
    name: '',
    position: '',
    department: '',
    authority: '',
    isLoggedIn: false,
  }),
  actions: {
    // localStorage에서 불러오기
    loadEmpCode() {
      
      if (process.client) {
        const empCode = localStorage.getItem('empCode')
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
        if (empCode && isLoggedIn) {
          this.empCode = empCode
          this.isLoggedIn = true
        }
      }
      
    },
    // empCode 설정 + localStorage에 저장
    setEmpCode(code: string) {
      this.empCode = code
      this.isLoggedIn = true
      localStorage.setItem('empCode', code)
      localStorage.setItem('isLoggedIn', 'true')
    },
    // 로그아웃 등 초기화용
    clearEmpCode() {
      this.empCode = ''
      if (process.client) {
        localStorage.removeItem('empCode')
      }
    },
  },
})
