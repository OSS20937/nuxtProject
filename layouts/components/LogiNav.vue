<script lang="ts" setup>
import {useLoginStore} from '../../store/hr/login/index'

const localLoginStore = useLoginStore();

const clickLogout = () => {
    localLoginStore.LOG_OUT(localLoginStore.userId);
}
</script>

<template>
    <div class="bookmark-wrapper align-items-left d-lg-flex ml-2" style="cursor: pointer;" @click="clickLogout">
        <VIcon
            class="me-1"
            icon="tabler-logout"
        />
        <span class="ml-50">로그아웃</span>
    </div>
</template>
