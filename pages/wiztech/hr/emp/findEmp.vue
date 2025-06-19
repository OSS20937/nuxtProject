<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { VDataTable } from "vuetify/labs/VDataTable";
  import { useDepartmentStore } from '@/store/wiztech/hr/department';
  import { usePositionStore } from '@/store/wiztech/hr/position';
  import { useEmpStore } from '@/store/wiztech/hr/emp';
  import empDetail from './modal/empDetail.vue';


  const departmentStore = useDepartmentStore();
  const positionStore = usePositionStore();
  const empStore = useEmpStore();

  const modalValue = ref(false)
  const selectedEmpCode = ref<string | null>(null)

    //테이블 로우를 클릭했을 때
  const onRowClick = (event: PointerEvent, item: any) => {
    selectedEmpCode.value = item.item.empCode
    modalValue.value = true
  }

  //모달 닫기
  const closeDetailModal = () => {
    modalValue.value = false
    selectedEmpCode.value = null
  }


  //부서 리스트 얻는 함수
  const getDepartmentInfo = async () => {
    await departmentStore.GET_DEPARTMENT_LIST()

    // useYn === 'Y'인 부서의 이름만 추출하여 departmentList에 저장
    departmentList.value = toRaw(departmentStore.deptList)
      .filter(dept => dept.useYn === 'Y')
      .map(dept => dept.deptName)

    department.value = departmentStore.deptList;
  }

  //직급 리스트 얻기
  const getPositionInfo = async () => {
    await positionStore.GET_POSITION_LIST()
    const errorCode = positionStore.errorCode;
    const errorMsg = positionStore.errorMsg;
    const positionsList = [...positionStore.positionList];

    if (errorCode === 0) {
      console.log("직급 정보 조회 성공:", positionsList)

      const activePositions = positionsList.filter(pos => pos.useYn === 'Y')
      const positionNames = activePositions.map(pos => pos.positionName)
      position.value = positionsList

      positionList.value = positionNames
    } else {
      console.error("직급 정보 조회 실패:", errorMsg)
      positionList.value = [] // 실패 시 빈 리스트 처리
    }
  }

  //페이지 로드할 때 부서, 직급 정보 가져오기
  onMounted( async ()  => {

    //부서 정보 가져오기
    getDepartmentInfo();


    //직급 정보 가져오기
    getPositionInfo();

  })

  //메인 검색 옵션
  const searchOptions = [
    '부서',
    '직급',
    '계약',
    '사원 번호',
    '이름',
  ]

  //메인 검색 옵션 드롭다운 폼의 요소이 변경될 때
  const onMainOptionChange = () => {
    if(searchOption.value === '사원 번호' || searchOption.value === '이름'){
      isNextSearch.value = true;
      isSearch.value = false;
    }
    else{
      isSearch.value = true;
    }

  }


  //세부 옵션 드롭다운 폼의 요소가 변경될 때(예를 들어 인사부서를 선택했을 때 인사부서에 해당하는 코드를 deptCode 변수에 할당하기 위함)
  const onSubOptionChange = (newValue: string) => {
    console.log('선택된 세부 옵션:', newValue);

    // 선택한 부서 이름에 해당하는 부서 코드 찾기
    const selectedDept = toRaw(department.value.find(dept => dept.deptName === newValue));
    console.log('selectedDept', selectedDept)
    const selectedPosition = toRaw(position.value.find(postion => postion.positionName === newValue));
    console.log('selectedPosition', selectedPosition)
    if (selectedDept !== undefined) {
      deptCode.value = selectedDept.deptCode; // 부서 코드 할당
      console.log('선택된 부서 코드:', deptCode.value);
    } else {
      deptCode.value = ""; // 부서가 없을 경우 빈 값
    }
      if (selectedPosition !== undefined) {
      positionCode.value = selectedPosition.positionCode; // 부서 코드 할당
      console.log('선택된 직급 코드:', positionCode.value);
    }

    isNextSearch.value = true; // 다음 검색 버튼 비활성화
    isSearch.value = false; //검색 버튼 활성화
  }

  const searchOption = ref('')          //검색 메인 옵션 요소
  const searchSubOption = ref('')       //검색 서브 옵션 요소
  const searchWord = ref('')            //검색 단어
  const pageSize = ref(10)              //검색 시 가져올 항목 갯수

  //마지막 검색 항목 번호
  const lastRowNum = ref(0);

  const isSearch = ref(true);

  const isFirstSearch = ref(false)          // 처음 검색 여부
  const isNextSearch = ref(true)           // 다음 검색 가능 여부


  //부서 이름과 부서 코드가 매핑된 객체
  const department = ref({});
  const deptCode = ref("");

  //직급 이름과 직급 코드가 매핑괸 객체
  const position = ref({});
  const positionCode = ref("");



  const employeeList = ref<any[]>([])
  // 보조 옵션 항목
  const departmentList = ref<any[]>([])
  const positionList = ref<any[]>([])
  const contractList = ['정규직', '계약직', '인턴']

  const tableHeaders = [
    { title: '번호', key: 'rnum' },  
    { title: '사원코드', key: 'empCode' },  
    { title: '이름', key: 'empName' },
    { title: '출생년도', key: 'birthDate' },
    { title: '성별', key: 'gender' },
    { title: '전화번호', key: 'phoneNumber' },
    { title: '부서', key: 'deptName' },
    { title: '직급', key: 'positionName' },
    { title: '계약', key: 'empType' },
    { title: '상태', key: 'empStatus' },
  ]

  // 보조 옵션 드롭다운 표시 여부
  const shouldShowSubOption = computed(() =>
    ['부서', '직급', '계약'].includes(searchOption.value)
  )

  // 입력창 표시 여부
  const shouldShowKeywordInput = computed(() =>
    ['사원 번호', '이름', '전체'].includes(searchOption.value)
  )

  // 보조 드롭다운 항목 동적 처리
  const subOptionItems = computed(() => {
    switch (searchOption.value) {
      case '부서':
        return departmentList.value
      case '직급':
        return positionList.value
      case '계약':
        return contractList 
      default:
        return []
    }
  })


  //검색 함수
    const handleSearch = async () => {
    const empSearchCondition = {
      searchCondition: searchOption.value,            //메인 검색 옵션
      deptCode:deptCode.value,                        //부서 코드
      positionCode:positionCode.value,                //직급 코드
      contract: searchSubOption.value,                //세부 옵션에서 선택한 것
      size: pageSize.value + 1,                       //검색 단위
      searchWord: searchWord.value,                   //검색 단어
    }
    const res = ref([]);
    console.log('검색 조건:', empSearchCondition)

    await empStore.GET_EMP_LIST(empSearchCondition);
    res.value = [];
    res.value = [...empStore.empList];

    if(res.value.length > pageSize.value){
        isNextSearch.value = false;
        employeeList.value = res.value.slice(0, pageSize.value);
        lastRowNum.value = pageSize.value;
    }

    else {
      isNextSearch.value = false;
      employeeList.value = [...res.value];
      lastRowNum.value = res.value.length;
    }
    if(res.value.length === 0){
      alert("검색 결과가 없습니다.");
      isNextSearch.value = true;
    }
  }

    //다음 검색 함수 
  const handleNextSearch = async() =>{
      const empListNextSearchData = {
      searchCondition: searchOption.value,            //메인 검색 옵션
      deptCode:deptCode.value,                        //부서 코드
      positionCode:positionCode.value,                //직급 코드
      contract: searchSubOption.value,                //세부 옵션에서 선택한 것
      size: pageSize.value + 1,                       //검색 단위
      searchWord: searchWord.value,                   //검색 단어
      lastRowNum: lastRowNum.value,                   //마지막 검색 항목 번호
      }

      const res = ref([]);
      console.log('검색 조건:', empListNextSearchData)

      await empStore.GET_EMP_LIST_NEXT_SEARCH(empListNextSearchData);
      res.value = [];
      res.value = [...empStore.empList];

      if(res.value.length > pageSize.value){
        isNextSearch.value = false;
        employeeList.value = [...employeeList.value, ...res.value.slice(0, pageSize.value)];
        lastRowNum.value = employeeList.value.length;
        return;
        }
      else if(res.value.length !== 0){
        employeeList.value = [...employeeList.value, ...res.value];
        lastRowNum.value = employeeList.value.length;
        return;
      }
      else if(res.value.length == 0){
        isNextSearch.value = true;
        alert("검색 결과가 없습니다.");
        return;
      }
    

  }

</script>


<template>
  <VContainer>
    <!-- 🔍 검색 조건 영역 -->
     <!-- <button @click="handleSearchTest">검색 테스트</button> -->
    <VCard class="mt-6 pa-6 elevation-2" style="border-radius: 8px;">
      <!-- 카드 제목 (선택사항) -->
      <VCardTitle class="text-h6 font-weight-bold mb-4">
        직원 검색
      </VCardTitle>

      <VRow class="align-center" dense>
        <!-- 상위 검색 옵션 -->
        <VCol cols="12" md="2">
          <VSelect
            v-model="searchOption"
            :items="searchOptions"
            label="검색 옵션"
            variant="outlined"
            dense
            @update:modelValue="onMainOptionChange"
          />
        </VCol>

        <!-- 세부 옵션 -->
        <VCol cols="12" md="2">
          <VSelect
            v-model="searchSubOption"
            :items="subOptionItems"
            label="세부 옵션"
            variant="outlined"
            :disabled="!shouldShowSubOption"
            dense
            @update:modelValue="onSubOptionChange"
          />
        </VCol>

        <!-- 키워드 입력 -->
        <VCol cols="12" md="3">
          <VTextField
            v-model="searchWord"
            label="검색어 입력"
            variant="outlined"
            :disabled="!shouldShowKeywordInput"
            dense
          />
        </VCol>

        <!-- 검색 단위 선택 -->
        <VCol cols="12" md="2">
          <VSelect
            v-model="pageSize"
            :items="[2, 5, 10, 25, 50, 100]"
            label="검색 단위"
            variant="outlined"
            dense
          />
        </VCol>

        <!-- 오른쪽 정렬 버튼 -->
        <VSpacer />
        <VCol cols="auto">
          <VBtn color="primary" class="text-white" @click="handleSearch" :disabled="isSearch">
            검색
          </VBtn>
        </VCol>

          <VCol cols="auto">
          <VBtn color="primary" class="text-white" @click="handleNextSearch" :disabled="isNextSearch">
            다음 검색
          </VBtn>
        </VCol>
      </VRow>
    </VCard>

    <!-- 결과 테이블 -->
    <VDataTable
      class="elevation-1 mt-6"
      style="background: white; border-radius: 8px; min-height: 300px;"
      :headers="tableHeaders"
      :items="employeeList"
      item-value="empCode"
      @click:row="onRowClick"
    />
  </VContainer>

  <!-- 상세 정보 모달 -->
  <VDialog v-model="modalValue" max-width="600px">
    <empDetail :empCode="selectedEmpCode" @close="closeDetailModal" />
  </VDialog>

</template>

<style>

</style>