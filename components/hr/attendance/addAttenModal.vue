<template>
  <VDialog v-model="dialog" max-width="600">
    <VCard>
      <VCardTitle class="d-flex flex-column align-start px-4 pt-6">
        <span class="text-h6 font-weight-bold">일근태 추가</span>
        <span class="text-subtitle-2 text-medium-emphasis mt-1">
          일자: {{ props.applyDay }}
        </span>
      </VCardTitle>
      <VCardText>
        <VContainer>
          <VRow>
            <VCol cols="5">
              <VSelect
                v-model="selectedDeptCode"
                :items="props.depList"
                item-title="deptName"
                item-value="deptCode"
                label="부서 선택"
                variant="outlined"
                clearable
                @update:modelValue="onDeptSelected"
                style="width: 250px"
              />
            </VCol>
          </VRow>

          <VRow>
            <VCol cols="6">
              <VSelect
                v-model="selectedEmpCode"
                :items="employeesInDept"
                item-title="empName"
                item-value="empCode"
                label="사원명 선택"
                variant="outlined"
                :disabled="isDeptSelectOff"
                @update:modelValue="onEmpNameSelected"
              />
            </VCol>
            <VCol cols="6">
              <VTextField
                label="사원코드"
                v-model="empCode"
                variant="outlined"
                readonly
              />
            </VCol>
          </VRow>

          <VRow>
            <VCol cols="6">
              <VSelect
                label="근태 유형"
                :items="attdTypes"
                v-model="attdType"
                variant="outlined"
                clearable
                :disabled="isFormDisabled"
                @update:modelValue="onAttendTypeSelected"
              />
            </VCol>

            <VCol cols="3">
              <VSelect
                label="시"
                :items="hourOptions"
                v-model="selectedHour"
                variant="outlined"
                :disabled="isTimeFormDisabled"
              />
            </VCol>

            <VCol cols="3">
              <VTextField
                label="분(0~59)"
                v-model="selectedMinute"
                variant="outlined"
                maxlength="2"
                :rules="[validateMinute]"
                :disabled="isTimeFormDisabled"
                @update:modelValue="onMinuteInput"
              />
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>

      <VCardActions class="justify-end">
        <VBtn
          color="primary"
          variant="elevated"
          size="large"
          class="font-weight-bold text-white px-4 py-1"
          @click="onAdd"
          :disabled="isAddButtonDisabled"
        >
          기록 추가
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { attenStore } from "@/store/hr/attendance";
import { affairStore } from "@/store/hr/affair";
const empName = ref("");
const dialog = defineModel<boolean>(); // v-model로 사용

const selectedEmpCode = ref(""); //선택한 사원명
const empCode = ref("사원명을 선택하세요"); //선택한 사원 코드
const attdType = ref("사원명을 선택하세요"); //선택한 근태유형
const selectedHour = ref(""); //선택한 시
const selectedMinute = ref(); //작성한 분
const selectedDeptCode = ref("부서 선택"); //드롭다운 메뉴에서 선택한 부서

const isFormDisabled = ref(true); //근태 유형 on/of
const isTimeFormDisabled = ref(true); //시, 분 on/off
const isDeptSelectOff = ref(true); //부서 드롭다운 on/off 핸들러
const isAddButtonDisabled = ref(true); //기록 추가버튼 on/off

const addAttendData = ref(); //부모에 전달할 데이터

const emit = defineEmits(["submitAttendData"]); //부모 컴포넌트 이벤트 유발
// 근태 유형
const attdTypes = [
  "출근",
  "퇴근",
  "공외출",
  "공귀사",
  "외출(무단)",
  "귀사(무단)",
];

//선택한 부서에 소속된 사원 리스트
const employeesInDept = ref([
  {
    empCode: "",
    empName: "부서를 먼저 선택하세요",
  },
]);
//부모로부터 전달받는 값
const props = defineProps<{
  depList: { deptName: string; deptCode: string }[];
  applyDay: string;
}>();

// 0~23 시
const hourOptions = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);

//부서 드롭다운에서 부서를 선택했을 때
const onDeptSelected = async (deptCode: string) => {
  console.log("선택된 부서코드:", deptCode);
  await affairStore().FETCH_EMP_DEPT_IN(deptCode);
  //사원명 드롭다운 on/off
  if (affairStore().employeesInDeptList.length === 0) {
    isDeptSelectOff.value = true;
    employeesInDept.value = [
      {
        empCode: "",
        empName: "해당 부서에 직원이 없습니다.",
      },
    ];
  } else {
    isDeptSelectOff.value = false;
    employeesInDept.value = [
      {
        empCode: "",
        empName: "사원을 선택하세요",
      },
      ...affairStore().employeesInDeptList,
    ];
  }
  console.log("employeesInDept: ", employeesInDept.value);
};

//사원 이름 선택했을 때
const onEmpNameSelected = () => {
  empCode.value = selectedEmpCode.value;
  const matchedEmp = employeesInDept.value.find(
    (emp) => emp.empCode === selectedEmpCode.value
  );
  empName.value = matchedEmp?.empName ?? "";

  isFormDisabled.value = false;
  attdType.value = "근태 유형";
};

//근태 유형 선택했을 때
const onAttendTypeSelected = () => {
  isTimeFormDisabled.value = false;
};

//분 입력 제약(0~59 숫자만)
const validateMinute = (value: string) => {
  const num = Number(value);
  if (!value) return true; // 빈 값은 허용 (선택적으로 변경 가능)
  if (/^\d{1,2}$/.test(value) && num >= 0 && num <= 59) {
    return true;
  }
  return "0~59 사이 숫자를 입력하세요.";
};

//분 입력이 발생할 때 마다 추가 버튼 on/off
const onMinuteInput = () => {
  if (selectedMinute.value <= 59 && selectedMinute.value >= 0) {
    isAddButtonDisabled.value = false;
  } else {
    isAddButtonDisabled.value = true;
  }
};

const onAdd = () => {
  console.log("추가 버튼 클릭됨");
  //시 + 분
  const formattedTime =
    String(selectedHour.value).padStart(2, "0") +
    String(selectedMinute.value).padStart(2, "0");

  let deptName;
  const matchedDept = props.depList.find(
    (dept) => dept.deptCode === selectedDeptCode.value
  );
  deptName = matchedDept?.deptName ?? "";

  console.log("찾은 부서 이름:", deptName);

  console.log(formattedTime);
  //부모 테이블의 헤더 키값과 매칭
  addAttendData.value = {
    empName: empName.value,
    empCode: empCode.value,
    attdTypeName: attdType.value,
    time: formattedTime,
    deptName: deptName,
    applyDay: props.applyDay,
    dayAttdCode: "아직 반영되지 않음",
  };
  const payload = { ...addAttendData.value };
  console.log("추가된 데이터 객체:", addAttendData.value);
  console.log("payload:", payload);

  emit("submitAttendData", payload);
};
</script>
