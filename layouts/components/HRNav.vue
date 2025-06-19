<script lang="ts" setup>
import { useUserStore } from '@/store/hr/user'
import { useLoginStore } from '@/store/hr/login';
const userStore = useUserStore();
const loginStore = useLoginStore();
const nextPage = () => {
  console.log('empCode: ', loginStore.empCode)
userStore.GET_USER_INFO(loginStore.empCode);
  navigateTo('/empProfile/empProfile')
}
</script>

<template>
    <div class="bookmark-wrapper align-items-left d-lg-flex ml-2" style="cursor: pointer;" @click="nextPage">
        <VIcon 
            class="me-1"
            icon="tabler-users" 
        />
        <span class="ml-50">내 정보</span>
    </div>
</template>
