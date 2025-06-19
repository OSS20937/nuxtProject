<script setup lang="ts">
import { useEmpStore } from '@/store/wiztech/hr/emp';
import type {findEmpDetailType} from '../../../../../types/wiztech/emp/findEmp'

const empStore = useEmpStore();

const props = defineProps<{
  empCode: string | null
}>()
const emit = defineEmits(['close'])

//직원 상세 정보
const employee:findEmpDetailType = {
  empCode: '',
  empName: '',
  hireDate: '',
  retireDate: '',
  birthDate: '',
  phoneNumber: '',
  gender: '',
  deptCode: '',
  positionCode: '',
  email: '',
  address: '',
  detailAddress: '',
  postalCode: '',
  hobong: '',
  educationLevel: '',
  profileImagePath: '',
  empType: '',
  entryType: '',
  authCode: '',
  empStatus: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  socialSecurityNo: '',
}

const getEmpDetail = async () => {
  console.log('empCode: ', props.empCode)
  const empCode = props.empCode;
  await empStore.GET_EMP_DETAIL(empCode);


}
// empCode 변경 감지
watch(
  () => props.empCode,
  (newEmpCode) => { // null일 때 fetchEmployee 실행 X
    if (newEmpCode) {
      console.log('empCode 변경되어 실행됨: ', props.empCode)
      getEmpDetail()
    }
  },
  { immediate: true }
)
</script>


<template>
  <VCard>
  <VCardTitle>
    직원 상세 정보
    <VSpacer />

  </VCardTitle>

  <VCardText>
    <div v-if="employee">
      <p><strong>사번:</strong> {{ employee.empCode }}</p>
      <p><strong>이름:</strong> {{ employee.empName }}</p>
      <p><strong>부서:</strong> {{ employee.deptName }}</p>
      <p><strong>직급:</strong> {{ employee.positionName }}</p>
      <!-- 필요한 만큼 더 표시 -->
    </div>
    <div v-else>데이터가 없습니다.</div>
    <VCardActions>
      <VSpacer />
        <VBtn color="primary" variant="elevated" class="text-white" @click="$emit('close')">
          닫기
        </VBtn>
    </VCardActions>
  </VCardText>

</VCard>
</template>



<style>

</style>