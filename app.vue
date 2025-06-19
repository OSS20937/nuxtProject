<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useEmpStore } from '@/store/hr/emp'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import initCore from '@core/initCore'
import { initConfigStore, useConfigStore } from '@core/stores/config'
import { hexToRgb } from '@layouts/utils'
import { watch, ref, provide } from 'vue'
import {useLoginStore} from './store/hr/login/index'
import { useRouter, useRoute } from 'vue-router';
import { navigateTo } from '#app'
const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

// const empCode = ref("EMP-01"); // 예시로 "EMP-01"을 설정
// provide('empCode', empCode);
// 🔹 empCode 전역 상태 생성
const empCode = ref("")
provide('empCode', empCode) // 전역 제공
const router = useRouter();
const route = useRoute();
const localLoginStore = useLoginStore()

watch(empCode, (newVal) => {
  console.log('empCode 변경됨:', newVal) // 값이 변경될 때마다 출력
})
const configStore = useConfigStore()
const { isMobile } = useDevice()
if (isMobile)
  configStore.appContentLayoutNav = 'vertical'

const checkSession = async () => {
  // 로그인 페이지에서는 세션 체크 안 함
  if (router.currentRoute.value.path === '/login') return

  const KeepSession = await localLoginStore.CHECK_SESSION()
  console.log('세션 유지 중')
  if (!KeepSession) {
    router.push('/login')
  }
}

onMounted(()=>{
  setInterval(checkSession, 60 * 1000); // 1분마다 세션 확인

  if(localLoginStore.isLoggedIn === 'N'){
    navigateTo('/login');
  }
})
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <div v-if="localLoginStore.isLoggedIn !== 'N' || route.path === '/login'">        <!-- 로그인을 했을 때 또는 이미 login 페이지일 때만 렌더링한다. -->
      <NuxtLayout>
        <NuxtPage />
        <NuxtLoadingIndicator color="rgb(var(--v-theme-primary))" />
      </NuxtLayout>
      </div>
      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
  <!-- <button @click="checkSession">세션 체크</button> -->
</template>
