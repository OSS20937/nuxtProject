<script setup lang="ts">
import AuthProvider from "@/views/pages/AuthProvider.vue";
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import authV2LoginIllustrationBorderedDark from "@images/pages/auth-v2-login-illustration-bordered-dark.png";
import authV2LoginIllustrationBorderedLight from "@images/pages/auth-v2-login-illustration-bordered-light.png";
import authV2LoginIllustrationDark from "@images/pages/auth-v2-login-illustration-dark.png";
import authV2LoginIllustrationLight from "@images/pages/auth-v2-login-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import axiosApi from '../utils/axios'
import { useEmpStore } from '@/store/hr/emp'
import {useLoginStore} from '../store/hr/login/index'
import type { authenticationData } from "../types/login/types";

const router = useRouter();
const localuseLoginStore = useLoginStore()

//사용자 정보 초기화
onMounted(() => {


  // 상태 초기화
  localuseLoginStore.idCheck = ''
  localuseLoginStore.pwCheck = ''
  localuseLoginStore.empCode = ''
  localuseLoginStore.empName = ''
  localuseLoginStore.positionCode = ''
  localuseLoginStore.deptCode = ''
  localuseLoginStore.authorityCode = ''
  localuseLoginStore.userId = ''
  localuseLoginStore.isLoggedIn = 'N'
  
  console.log("로그인 상태 초기화")
  console.log(localuseLoginStore.idCheck)
  console.log(localuseLoginStore.pwCheck)
  console.log(localuseLoginStore.empCode)
  console.log(localuseLoginStore.empName)
  console.log(localuseLoginStore.positionCode)
  console.log(localuseLoginStore.deptCode)
  console.log(localuseLoginStore.authorityCode)
  console.log(localuseLoginStore.userId)
  console.log(localuseLoginStore.isLoggedIn)
  
})


definePageMeta({
  layout: "blank",
});

const form = ref({
  empCode: "EMP-01",
  password: "1208125847",
  remember: false,
});

// 비밀번호 표시 여부
const isPasswordVisible = ref(false);

// const linkbtn = () => {
//   router.push("/");
// };
// 🔹 inject로 empCode 가져오기 (초기값: 빈 문자열)
const empCode = inject('empCode', ref(''))

//세션 테스트용
const sessionTest = async() =>{
  localuseLoginStore.CHECK_SESSION();

  console.log('empCode: ', localStorage.getItem('empCode'))
  console.log('isLoggedIn: ', localStorage.getItem('isLoggedIn'))

  // if(localStorage.getItem('isLoggedIn') === 'Y'){
  //   localStorage.removeItem('empCode')
  //   localStorage.removeItem('empName')
  //   localStorage.removeItem('positionCode')
  //   localStorage.removeItem('deptCode')
  //   localStorage.removeItem('isLoggedIn')
  //   localStorage.removeItem('isLoggedIn')
  // }
}

//테스트용 로그인 함수
const loginTest = async () => {

  const authenticationData:authenticationData={
      userId: form.value.empCode,
      password: form.value.password,
    }
    await useLoginStore().LOGIN_AUTHENTICATION(authenticationData)

    if(useLoginStore().idCheck === 'N'){
      alert('아이디를 찾을 수 없습니다.');
    } else if(useLoginStore().pwCheck === 'N'){
      alert('비밀번호가 다릅니다.');
    } else {
      console.log('로그인 성공', useLoginStore().empCode)
      await router.push("/");
    }
}

// 로그인 함수
const login = async () => {
  try {
    // 서버로 로그인 요청 보내기
    const response = await axios.api.post('http://localhost:8282/sys/login', {
      empCode: form.value.empCode,
      password: form.value.password,
      companyCode: 'COM-01',
      workplaceCode: 'BRC-01',
    });
    console.log('정보:', response.data);
    console.log('정보:', response.data.empInfo.empCode);
    // 로그인 성공 여부 확인
    if (response.data.errorCode === 0) {
      // 로그인 성공 처리
      console.log('로그인 성공')//이 줄은 나중에 삭제
       const empStore =  useEmpStore()   // ✅ Pinia 스토어 인스턴스 호출
      empStore.setEmpCode(response.data.empInfo.empCode)  // ✅ 전역 상태 + localStorage 저장
      empCode.value = response.data.empInfo.empCode; // empCode 업데이트
      provide('empCode', empCode.value); // empCode 제공 
      console.log('정보1:', empCode);
      await nextTick();
      await router.push("/"); // 기본 페이지로 리디렉션
      } else {
      // 로그인 실패 처리
      alert(response.data.errorMsg || 'Invalid ID or password'); // 서버에서 제공하는 오류 메시지 출력
    }
  } catch (error) {
    console.error('로그인 실패:', error);
    alert('로그인 중 에러 발생');
  }
};

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
</script>

<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="505"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg class="auth-footer-mask" :src="authThemeMask" />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <VNodeRenderer :nodes="themeConfig.app.logo" class="mb-6" />
          <h4 class="text-h4 mb-1">
            Welcome to
            <span class="text-capitalize">{{ themeConfig.app.title }}</span>! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VForm @submit.prevent="loginTest">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.empCode"
                  autofocus
                  label="Email"
                  type="empCode"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div
                  class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4"
                >
                  <VCheckbox v-model="form.remember" label="Remember me" />
                  <a class="text-primary ms-2 mb-1" href="/">
                    Forgot Password?
                  </a>
                </div>
                <VBtn block type="submit"> Login </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center text-base">
                <span>New on our platform?</span>

                <a class="text-primary ms-2" href="#"> Create an account </a>
              </VCol>

              <VCol cols="12" class="d-flex align-center">
                <VDivider />

                <span class="mx-4">or</span>

                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <!-- <button @click = 'sessionTest'>123</button> -->
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
