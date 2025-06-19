<!-- 
 0423 수정 목표: 사용자가 시간을 입력하면 입력된 시간을 기준으로 등록이 가능하게 변경(관리자 입장에서)
- 0423수정사항: 기존 time 변수의 값을 설정하는 onAddAttendanceClick() 함수 삭제하고
사용자가 입력한 시간을 반영하는 코드를 추가

0423 수정목표: 드롭다운 메뉴와 검색 버튼을 사용해서 일근태를 하루를 기준으로 검색하고 결과를 10, 50 ,100개 단위로 가져오기
- 0423수정사항: '다음검색' 버튼을 누르면 마지막 코드를 기준으로 다음 검색을 요청
- 0423수정예정: 원래의 사원 조회 이벤트는 일근태를 조회한 테이블에서 사원을 조회하도록 변경 기존 사원 조회 로직 삭제
- 0423수정예정: '다음검색' 버튼 요청 이벤트 만들어야됨
-->
<script lang="ts" setup>
import { attenStore } from "@/store/hr/attendance";
import { affairStore } from "@/store/hr/affair";
import type {
  AttenHeaders,
  AttenProps,
  DayAttdProps,
  ItemPropsTypes,
} from "@/types/attendance/types";
import axios from "axios";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useRouter } from "vue-router"; // router 가져오기
import { inject } from "vue";

//일근태 기록 추가 모달창에서 기록 추가 버튼을 눌렀을 때
const handleAddAttendData = (data: any) => {
  console.log("부모가 받은 데이터:", data);
  // rowNumber는 현재 리스트 길이에 따라 자동 부여
  const rowNumber = dayAttdList.value.length + 1;
  isAddAttendanceDialogOpen.value = false;
  const formattedItem = {
    ...data,
    rowNumber,
  };

  dayAttdList.value.push(formattedItem);
};

//일근태 추가 버튼을 눌렀을 때
const handleAddAttendanceClick = () => {
  isAddAttendanceDialogOpen.value = true;
  //리스트 맨 앞 요소 추가
  //addAttdDeptList.value = ["부서를 선택하세요", ...depList.value];
  addAttdDeptList.value = [...depList.value];
};

//테이블에 시간 표시 1400 -> 14:00 으로 처리
const formatTime = (rawTime: string | number) => {
  const str = rawTime.toString().padStart(4, "0"); // 예: 900 → "0900"
  return `${str.slice(0, 2)}:${str.slice(2)}`;
};
//부서 코드로 부서이름 찾아서 추가
const attachDeptName = () => {
  dayAttdList.value = dayAttdList.value.map((item) => {
    const deptInfo = depList.value.find(
      (dept) => dept.deptCode === item.deptCode
    );
    return {
      ...item,
      deptName: deptInfo ? deptInfo.deptName : item.deptCode, // 못 찾으면 그대로 코드
    };
  });
};

//일근태 추가 할 때 필요한 직원 정보 가져오기
const depList = ref<any[]>([]); //부서 정보 가지고 있는 리스트
const addAttdDeptList = ref<any[]>([]); //일근태 기록 추가 모달에 전달할 부서list
//일근태 추가 컴포넌트 on/off
const isAddAttendanceDialogOpen = ref(false);

//부서 정보 전부 가져오기
const fetchDepList = async () => {
  try {
    await affairStore().FETCH_ALL_DEPARTMENT();
    depList.value = affairStore().all_dept_list;

    console.log("depList", depList.value);
  } catch (error) {
    console.error(error);
  }
};
//일근태 추가 할 때 필요한 부서 정보 가져오기
//0424 수정
onMounted(() => {
  fetchDeptList();
  fetchDepList();
});

// 0423 수정
//일근태 테이블 로우 값
const dayAttdList = ref<any[]>([]);

//사용자가 입력한 시간을 반영하는 코드
//시간과 분을 저장하는 변수
const selectedHour = ref("");
const selectedMinute = ref("");

const hourOptions = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);

// 분 입력 유효성 검사 (0~59)
const validateMinute = (v: string) => {
  const num = Number(v);
  if (!v) return true;
  if (/^\d{1,2}$/.test(v) && num >= 0 && num <= 59) return true;
  return "0~59 사이 숫자를 입력하세요";
};

// 최종 HHmm 형식으로 저장될 변수
watch([selectedHour, selectedMinute], () => {
  if (selectedHour.value && selectedMinute.value) {
    const hour = selectedHour.value.padStart(2, "0");
    const minute = selectedMinute.value.padStart(2, "0");
    time.value = `${hour}${minute}`; // 예: "1930"
    console.log(time.value);
  }
});
//사용자가 입력한 시간을 반영하는 코드

//일근태 조회를 위한 코드

//가져올 로우갯수 기본값 10
const itemsPerPage = ref(10); // 기본값: 10
const lastCode = ref<string>(""); //마지막 로우 코드 값
const attendDaliyList = ref([]); //일근태 기록 리스트
const fetchedApplyDay = ref(""); //일근태 조회 시점에 사용한 날짜

//일근태 리스트를 가져올 함수
const fetchAttendance = async () => {
  if (!applyDay.value) {
    alert("날짜를 선택해주세요.");
    return;
  }

  try {
    fetchedApplyDay.value = applyDay.value;
    const dayAndPage = {
      applyDay: fetchedApplyDay.value,
      pageSize: itemsPerPage.value,
    };
    console.log("dayAndPage", dayAndPage);

    await attenStore().SEARCH_DAY_ATTD_LIST(dayAndPage);
    attendDaliyList.value = attenStore().dayAttdDayleList;
    console.log("attendDaliyList.value", attendDaliyList.value);
    // rowNumber를 부여하면서 맨 앞에 추가
    dayAttdList.value = attendDaliyList.value.map((item: any, idx) => ({
      ...item,
      rowNumber: idx + 1,
    }));
    attachDeptName(); //부서 번호로 부서 이름 매치해서 테이블에 표시
    console.log("dayAttdList: ", dayAttdList.value);
    //마지막 로우의 dayAttdCode 저장
    if (attendDaliyList.value.length > 0) {
      const lastItem = attendDaliyList.value[attendDaliyList.value.length - 1];
      lastCode.value = lastItem.dayAttdCode;
      console.log("lastCode 업데이트:", lastCode.value);
    }
  } catch (err) {
    console.error("일근태 조회 실패:", err);
  }
};
//일근태 조회를 위한 코드

//다음 검색 코드
const getNextPage = async () => {
  //마지막으로 가져온 일근태기록코드 값
  //몇 개의 로우를 더 가져올지에 대한 값
  //일근태 조회 시점의 날짜에 대한 값
  //마지막으로 가져온 일근태기록 로우 이후의 로우를 알맞는 단위로 가져오고 만약 가져온 값이 없으면 검색된 내용 없음 표시
  if (fetchedApplyDay.value != applyDay.value) {
    alert("일근태 조회를 먼저 누르십시오.");
    return;
  }
  if (applyDay.value == "") {
    alert("일근태 조회를 먼저 하십시오.");
    return;
  }
  const nextPageQueryString = {
    applyDay: fetchedApplyDay.value,
    pageSize: itemsPerPage.value,
    lastCode: lastCode.value,
  };
  console.log("nextPageQueryString: ", nextPageQueryString);

  try {
    await attenStore().SEARCH_DAY_ATTD_NEXT_PAGE_LIST(nextPageQueryString);
    const nextPageList = attenStore().dayAttdDayleNextPageList;
    if (nextPageList.length === 0) {
      alert("마지막 검색입니다.");
      return;
    }
    // 처음 조회했을 때 row 개수 기준으로 이어붙이기
    const startRowNumber = dayAttdList.value.length;
    const newDataWithRowNumber = nextPageList.map((item: any, idx: number) => ({
      ...item,
      rowNumber: startRowNumber + idx + 1,
    }));

    //누적
    dayAttdList.value.push(...newDataWithRowNumber);
    attachDeptName(); //부서 번호로 부서 이름 매치해서 테이블에 표시
    //다음 검색 버튼을 눌렀을 때 마지막 코드 갱신
    lastCode.value = nextPageList[nextPageList.length - 1].dayAttdCode;
  } catch (err) {
    console.error("다음 검색 실패:", err);
  }
};

// 0423 수정
const router = useRouter();
import { useEmpStore } from "@/store/hr/emp";

const empStore = useEmpStore();
empStore.loadEmpCode();

console.log("현재 로그인된 직원 코드:", empStore.empCode);

// 로그인된 empCode가 'EMP-01'이 아닌 경우 페이지 이동
if (empStore.empCode !== "EMP-01" && empStore.empCode !== "EMP-00") {
  router.push("/hr/confinement/unauthorized");
}

// Dialog
const isEmployeeDialogVisible = ref(false);
const isAttendanceDialogVisible = ref(false);
const isModifyDialogVisible = ref(false);

// DateTimePicker
const applyDay = ref("");
const selectedDept: globalThis.Ref<string> = ref("");
const dept_list = ref([]);
const selectedEmp: globalThis.Ref<string> = ref("");
const emp_list = ref([]);
const time = ref("");
const day_attd_list = ref([]);
const selectedAttdTypeText = ref("");
const selectedAttdTypeValue = ref("");
const selectedRow = ref({});
const modalStatus = ref("insert");
const targetTime = ref("");
const targetDayAttdCode = ref("");

// Table Columns
const headers: AttenHeaders[] = [
  { title: "번호", key: "rowNumber" },
  { title: "부서", key: "deptName" },
  { title: "사원번호", key: "empCode" },
  { title: "이름", key: "empName" },
  { title: "승인날짜", key: "applyDay" },
  { title: "근태내용", key: "attdTypeName" },
  { title: "시간", key: "time" },
  { title: "전체기록번호", key: "dayAttdCode" },
];

const attdType: AttenProps = [
  { text: "출근", value: "ADC001" },
  { text: "퇴근", value: "ADC002" },
  { text: "공외출", value: "ADC003" },
  { text: "공귀사", value: "ADC007" },
  { text: "귀사(무단)", value: "ADC010" },
  { text: "외출(무단)", value: "ADC012" },
];

// select component에 사용되는 함수
const itemProps = (item: ItemPropsTypes) => {
  return {
    title: item.text,
    value: item.value,
  };
};

watch(selectedAttdTypeValue, (newValue, oldValue) => {
  const selectedItem = attdType.find((item) => item.value === newValue);
  if (selectedItem) {
    selectedAttdTypeText.value = selectedItem.text;
    selectedAttdTypeValue.value = selectedItem.value;
    console.log("Selected Title:", selectedAttdTypeText.value);
    console.log("Selected value:", selectedAttdTypeValue.value);
  }
});

// selectedDept가 변경될때마다 fetchEmpList 호출
watch(selectedDept, (newValue, oldValue) => {
  if (newValue !== oldValue) fetchEmpList();
});

// 부서리스트 조회
const fetchDeptList = async () => {
  try {
    const res = await axios.get("http://localhost:8282/hr/base/deptList");
    const deptData = res.data.deptlist;

    dept_list.value = deptData.map((e: any) => ({
      value: e.deptCode,
      text: e.deptName,
    }));
    console.log("[deptList]", dept_list.value);
  } catch (error) {
    console.error(error);
  }
};

// 직원리스트 조회 240번째 줄
//사번 조회 컴포넌트 코드
//empSearchModal 컴포넌트에서 조회 버튼을 눌렀을 때 실행하는 함수
const handleSearchEmp = (empCode: string) => {
  console.log("자식으로부터 받은 사번:", empCode);
  dayAttdList.value = dayAttdList.value.filter(
    (item) => item.empCode === empCode
  );
};
const isDialogOpen = ref(false); //모달창 on/off
const uniqueEmpCodes = ref<{ empCode: string; empName: string }[]>([]); //테이블 로우의 고유한 사번을 가지는 리스트

//버튼을 누르면 사번검색 모달창이 나오고 현재 테이블의 사번들을 넘겨준다
const openEmpSearchDialog = () => {
  isDialogOpen.value = true;

  const seen = new Set<string>();

  //중복되지 않는 사번을 가지고 사번과 이름을  uniqueEmpCodes에 저장
  uniqueEmpCodes.value = dayAttdList.value
    .filter((item) => {
      if (!seen.has(item.empCode)) {
        seen.add(item.empCode);
        return true;
      }
      return false;
    })
    .map((item) => ({
      empCode: item.empCode,
      empName: item.empName,
    }));
  console.log(uniqueEmpCodes.value);
};

//사번 조회 컴포넌트 코드

// 일근태리스트 조회
const fetchDayAttdList = async () => {
  if (applyDay.value === "") {
    alert("조회할 신청일자를 선택해주세요.");
    isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
  } else {
    try {
      console.log("[applyDay]", applyDay.value);
      console.log("[empCode]", selectedEmp.value);

      const res = await axios.get(
        "http://localhost:8282/hr/attendance/dayAttendance",
        { params: { applyDay: applyDay.value, empCode: selectedEmp.value } }
      );

      console.log("[day_attd_list.value]", res.data.dayAttdList);
      day_attd_list.value = res.data.dayAttdList;
      isEmployeeDialogVisible.value = false;
    } catch (e) {
      console.error(e);
    }
  }
};

// 일근태 추가 - 선택
const insertDayAttd = async () => {
  if (applyDay.value === "") {
    alert("조회할 신청일자를 선택해주세요.");
    isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
  } else {
    try {
      const dayAttd: DayAttdProps = {
        empCode: selectedEmp.value,
        applyDay: applyDay.value,
        attdTypeCode: selectedAttdTypeValue.value,
        attdTypeName: selectedAttdTypeText.value,
        time: time.value,
      };

      if (Object.values(dayAttd).some((datavalue) => datavalue == "")) {
        alert("모든 항목을 선택해주세요.");
      } else {
        await attenStore().ADD_DAY_ATTD_BY_PARMS(dayAttd);
        alert("신청이 완료되었습니다. ");
        fetchDayAttdList();
        isAttendanceDialogVisible.value = false;

        // window.location.reload
        // reset()
      }
    } catch (e) {
      console.error(e);
    }
  }
};

// 일근태 수정
const updateDayAttd = async () => {
  console.log("selectedAttdTypeValue.value", selectedAttdTypeValue.value);
  console.log("selectedAttdTypeText.value", selectedAttdTypeText.value);
  console.log("selectedEmp.value", selectedEmp.value);
  console.log("targetDayAttdCode", targetDayAttdCode.value);

  if (applyDay.value === "") {
    alert("조회할 신청일자를 선택해주세요.");
    isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
  } else {
    if (
      selectedAttdTypeText.value === "" ||
      selectedAttdTypeValue.value === ""
    ) {
      alert("근태 유형을 선택해주세요.");
    } else {
      await attenStore()
        .UPDATE_DAYATTD({
          attdTypeCode: selectedAttdTypeValue.value,
          attdTypeName: selectedAttdTypeText.value,
          empCode: selectedEmp.value,
          dayAttdCode: targetDayAttdCode.value,
        })
        .then((res) => {
          console.log("[수정완료]", res.data);
          alert("수정이 완료되었습니다.");
          fetchDayAttdList();
        })
        .catch((e) => console.error(e));
      isAttendanceDialogVisible.value = false;
      modalStatus.value = "insert";
    }
  }
};

// 일근태 삭제
const deleteDayAttd = () => {
  console.log("삭제");
  console.log("selectedEmp.value", selectedEmp.value);
  console.log("targetDayAttdCode", targetDayAttdCode.value);

  if (applyDay.value === "") {
    alert("조회할 신청일자를 선택해주세요.");
    isEmployeeDialogVisible.value = !isEmployeeDialogVisible.value;
  } else {
    const deleteData = {
      empCode: selectedEmp.value,
      dayAttdCode: targetDayAttdCode.value,
    };

    attenStore()
      .DELETE_DAT_ATTD(deleteData)
      .then((res) => {
        console.log("[삭제결과]", res.data);
        isAttendanceDialogVisible.value = false;
        modalStatus.value = "insert";
        alert("삭제가 완료되었습니다.");
        fetchDayAttdList();
      })
      .catch((e) => console.error(e));
  }
};

// 행 클릭
const onRowClick = async (event: any, item: any) => {
  try {
    console.log("[clickRow]", item);
    targetTime.value = item.item.time;
    targetDayAttdCode.value = item.item.dayAttdCode;
    console.log("[targetTime]", item.item.time);
    modalStatus.value = "update";
    isAttendanceDialogVisible.value = true;
    console.log(isAttendanceDialogVisible.value);
  } catch (e) {
    console.error(e);
  }
};
</script>

<template>
  <h1 class="mb-6">일근태 등록</h1>
  <div>
    <VCard>
      <VContainer class="mt-4">
        <VForm @submit.prevent="() => {}">
          <VRow align="center" justify="end" class="mb-2">
            <VCol>
              <h1>&nbsp;&nbsp;&nbsp;일근태 기록</h1>
            </VCol>
            <!--  👉 날짜 선택 -->
            <VCol md="2">
              <AppDateTimePicker
                v-model="applyDay"
                placeholder="날짜선택"
                prepend-icon="tabler-calendar-event"
              />
            </VCol>
            <!--  일근태 조회 버튼 -->
            <VCol cols="auto">
              <VBtn
                color="primary"
                @click="fetchAttendance"
                class="text-white"
                prepend-icon="tabler-calendar-search"
                style="min-width: 120px"
              >
                일근태 조회
              </VBtn>
            </VCol>
            <!--  사원 조회 -->
            <VCol cols="auto">
              <v-btn
                style="min-width: 120px"
                @click="openEmpSearchDialog"
                :disabled="dayAttdList.length === 0"
              >
                사번조회
              </v-btn>
            </VCol>
            <!-- 👉 일 근태 추가/수정,삭제 -->
            <VCol cols="auto" class="me-2">
              <VDialog v-model="isAttendanceDialogVisible" width="500">
                <template #activator="{ props }">
                  <!-- <VBtn
                    v-bind="props"
                    prepend-icon="tabler-calendar-plus"
                    @click="modalStatus = 'insert'"
                    style="min-width: 120px"
                  >
                    일근태 추가
                  </VBtn> -->
                  <VBtn
                    @click="handleAddAttendanceClick"
                    :disabled="applyDay === ''"
                  >
                    일근태 기록 추가
                  </VBtn>
                </template>

                <VContainer>
                  <DialogCloseBtn
                    @click="
                      isAttendanceDialogVisible = !isAttendanceDialogVisible
                    "
                  />
                </VContainer>
                <VCard
                  :title="`${
                    modalStatus === 'insert'
                      ? '일근태 추가'
                      : '일근태 수정/삭제'
                  }`"
                >
                  <VContainer>
                    <VRow>
                      <VCol>
                        <VTextField
                          v-model="selectedEmp"
                          class="mb-3"
                          label="사원명"
                          readonly
                          variant="outlined"
                        />
                      </VCol>
                      <VCol>
                        <VTextField
                          v-model="selectedEmp"
                          class="mb-3"
                          label="사원코드"
                          readonly
                          variant="outlined"
                        />
                      </VCol>
                    </VRow>
                    <VRow>
                      <VCol>
                        <VSelect
                          v-model="selectedAttdTypeValue"
                          class="mb-3"
                          label="근무타입"
                          :items="attdType"
                          :item-props="itemProps"
                          variant="outlined"
                          clearable
                          clear-icon="tabler-x"
                        />
                      </VCol>
                      <VCol>
                        <VRow>
                          <!-- 시(hour) 선택 드롭다운 -->
                          <VCol cols="6">
                            <VSelect
                              v-model="selectedHour"
                              :items="hourOptions"
                              label="시"
                              variant="outlined"
                              dense
                              clearable
                              style="min-width: 120px"
                            />
                          </VCol>

                          <!-- 분(minute) 직접 입력 -->
                          <VCol cols="6">
                            <VTextField
                              v-model="selectedMinute"
                              label="분"
                              variant="outlined"
                              dense
                              :rules="[validateMinute]"
                              maxlength="2"
                            />
                          </VCol>
                        </VRow>
                      </VCol>
                    </VRow>
                  </VContainer>
                  <VCardText class="d-flex justify-end">
                    <VBtn
                      v-if="modalStatus === 'insert'"
                      @click="insertDayAttd"
                    >
                      추가
                    </VBtn>
                    <VBtn
                      v-if="modalStatus === 'update'"
                      @click="updateDayAttd"
                    >
                      수정
                    </VBtn>
                    <VBtn
                      v-if="modalStatus === 'update'"
                      class="ml-3"
                      @click="deleteDayAttd"
                    >
                      삭제
                    </VBtn>
                  </VCardText>
                </VCard>
              </VDialog>
            </VCol>
          </VRow>
        </VForm>

        <!-- 👉 일근태 등록 테이블 -->
        <VRow>
          <VDataTable
            class="mt-6"
            :headers="headers"
            :items="dayAttdList"
            :items-per-page="100"
            @click:row="onRowClick"
            hide-default-footer
          >
            <template #item.time="{ item }">
              {{ formatTime(item.time) }}
            </template>
          </VDataTable>
        </VRow>

        <!--드롭다운 폼 (행 수 선택) -->
        <VRow align="center" class="mt-2">
          <VCol cols="auto">
            <span>표시할 행 수:</span>
          </VCol>
          <VCol cols="3">
            <VSelect
              v-model="itemsPerPage"
              :items="[10, 50, 100]"
              label="행 수 선택"
              variant="outlined"
              dense
            />
          </VCol>
          <!-- 다음 검색 버튼 -->
          <VCol cols="auto">
            <VBtn color="primary" class="text-white" @click="getNextPage">
              다음 검색
            </VBtn>
          </VCol>
        </VRow>
      </VContainer>
    </VCard>

    <!-- 외부 모달창 컴포넌트 -->
    <!-- 사번조회모달창 -->
    <empSearchModal
      v-model="isDialogOpen"
      :empOptions="uniqueEmpCodes"
      @searchEmp="handleSearchEmp"
    />
    <!-- 일근태 추가 모달창 -->
    <addAttenModal
      v-model="isAddAttendanceDialogOpen"
      :depList="addAttdDeptList"
      :applyDay="applyDay"
      @submitAttendData="handleAddAttendData"
    />
  </div>
</template>
