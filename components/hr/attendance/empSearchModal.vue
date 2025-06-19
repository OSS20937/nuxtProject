<template>
  <VDialog v-model="internalDialog" max-width="600">
    <VCard>
      <VCardTitle>사번으로 검색</VCardTitle>
      <VCardActions>
        <VSpacer />
        <VSelect
          v-model="selectedEmpCode"
          :items="props.empOptions"
          item-title="empCode"
          item-value="empCode"
          label="사번 선택"
          variant="outlined"
          style="width: 70px"
        />
        <VTextField
          v-model="matchedEmpName"
          variant="outlined"
          readonly
          label="사원 이름"
          style="width: 70px"
        />
        <v-btn @click="search">조회</v-btn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue: boolean;
  empOptions: { empCode: string; empName: string }[];
}>();
const emit = defineEmits(["update:modelValue", "searchEmp"]);

const internalDialog = ref(false);
const selectedEmpCode = ref(""); //드롭다운 메뉴에서 선택한 사번
const matchedEmpName = ref(""); //선택한 사번에 맞는 사원 이름

// 외부 modelValue가 바뀌면 내부에 반영
watch(
  () => props.modelValue,
  (val) => {
    internalDialog.value = val;
  }
);

// 내부가 바뀌면 외부에도 반영 (양방향 바인딩)
watch(internalDialog, (val) => {
  emit("update:modelValue", val);
});

// 사번 선택되면 이름 자동 설정
watch(selectedEmpCode, (code) => {
  const emp = props.empOptions.find((e) => e.empCode === code);
  matchedEmpName.value = emp?.empName ?? "";
});

const search = () => {
  emit("searchEmp", selectedEmpCode.value);
  internalDialog.value = false;
};
</script>
