<script setup>
import { useEmpStore } from '@/store/hr/emp'
import { useLoginStore } from './../store/hr/login/index'
import { useRouter } from 'vue-router';

const router = useRouter();
const empCode = ref('');
const empName = ref('');
onMounted( () => {
      if(useLoginStore().isLoggedIn === 'N'){
        router.push('/login');
      }
    }
  )
  definePageMeta({
  prerender: true
})
</script>
<template>
  <div>
    <h1 class="mb-6">WizTech Hire System Main</h1>
    <VCard class="mb-6" title="인사관리페이지🚀">
      <VCardText>
        WizTech 인사관리시스템에 오신 {{empCode}}님 진심으로 환영합니다.<br />
        여러분의 업적과 성장을 함께 기록하며, 조직의 발전에 동참할 수 있도록
        최선을 다하겠습니다.<br />
        <br />
        *업무관련은 아래로 연락해주세요 문의 페이지. 저녁 7시 이후로는
        급한용무만 관리자에게 연락 바랍니다.*
      </VCardText>
      <VCardText>
      </VCardText>
    </VCard>
  </div>
</template>
