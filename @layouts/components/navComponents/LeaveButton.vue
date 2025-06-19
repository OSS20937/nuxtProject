<!-- components/LeaveButton.vue -->
<template>
  <v-btn
    color="primary"
    class="text-white"
    style="width: 90px"
    @click="emit('click')"
  >
    퇴근(외출)
  </v-btn>
</template>

<script setup lang="ts">
// 외부에서 @click 이벤트를 받을 수 있도록 설정
const emit = defineEmits(["click"]);
</script>
