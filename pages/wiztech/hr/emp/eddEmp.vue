<script setup lang="ts">
  import { useLoginStore } from '@/store/hr/login'
  import { useDepartmentStore } from '@/store/wiztech/hr/department';
  import { useEmpStore } from '@/store/wiztech/hr/emp';
  import { usePositionStore } from '@/store/wiztech/hr/position';
  import type { registerEmpInfoType } from '@/types/wiztech/emp/registerEmp';



  //poinia 함수 사용 변수
  const departmentStore = useDepartmentStore();
  const loginStore = useLoginStore();
  const empStore = useEmpStore();
  const positionStore = usePositionStore();

  //확인 다이얼로그 on/off
  const confirmDialog = ref(false)


  //부서 목록 관련 함수 및 변수
  const departmentInfo = ref(); //DB로부터 가져온 부서 정보 저장 변수

  const getDepartmentInfo = async ()=>{
      await departmentStore.GET_DEPARTMENT_LIST();
      console.log(departmentStore.deptList);
      departmentInfo.value = departmentStore.deptList
  }

  //직급 목록 관련 함수 및 변수
  const positionListInfo = ref(); //직급 정보 저장 변수

  //직급 목록 요청 함수
  const getPositionInfo = async ()=>{
      await positionStore.GET_POSITION_LIST();

      const errorCode = positionStore.errorCode;
      const errorMsg = positionStore.errorMsg;
      const positionsList = [...positionStore.positionList];

      console.log(positionStore.positionList);
      if(errorCode === 0){
        console.log('직급 정보 조회 성공: errorMsg: ', errorMsg);
        console.log('직급 정보: ', positionsList);
        positionListInfo.value = positionsList;
      } else {
        console.log('직급 정보 조회 실패: errorMsg: ', errorMsg);
      }
  }


  //폼에 입력하지 않지만 전달해야 하는 요소
    const infoRegistrar = ref('')            // 직원 정보 등록자 사원코드





  // 폼에 입력한 값 저장 변수(시작)
    const empName = ref('')                    //  값 예시: 이병헌
    const gender = ref(null)                   //  값 예시: 남성
    const birthDate = ref('')                  //  값 예시: 2020-05-23  
    const socialSecurityNoBack = ref('')       //  값 예시: 1234567
    const phoneNumber = ref('')                //  값 예시: 010-1234-5678
    const address = ref('')                    //  값 예시: 서울 강남구 강남대로 238
    const addressDetail = ref('')              //  값 예시: XX아파트 XXX동 XXXX호
    const postalCode = ref('')                 //  값 예시: 06267
    const educationLevel = ref('')             //  값 예시: 대구대학교 컴퓨터 공학과 학사
    const email = ref('')                      //  값 예시: qwer@naver.com
    const hireDate = ref('')                   //  값 예시: 2019-03-18
    const department = ref(null)               //  값 예시: D001
    const position = ref(null)                 //  값 예시: 사원
    const workContract = ref(null)             //  값 예시: 정규직
    const workExperience = ref(null)           //  값 예시: 경력
    const authCode = ref(null)            //  값 예시: ROLE_EMP
    const imageUrl = ref('');                  //  값 예시: c:/ ..

  // 폼에 입력한 값 저장 변수(끝)

  //선택한 권한을 인사 코드로 변환

  //사원 등록 요청할 때 사용할 정보 Spring DTO와 필드와 키 이름을 일치시킬 것
const registerEmpInfo: registerEmpInfoType = {
    empName:empName.value,
    gender:gender.value,
    birthDate:birthDate.value,
    socialSecurityNo:socialSecurityNoBack.value,
    phoneNumber:phoneNumber.value,
    address:address.value,
    addressDetail:addressDetail.value,
    postalCode:postalCode.value,
    educationLevel:educationLevel.value,
    email:email.value,
    hireDate:hireDate.value,
    deptCode:department.value,
    positionCode:position.value,
    workContract:workContract.value,
    workExperience:workExperience.value,
    authCode:authCode.value,
    createdBy:infoRegistrar.value,
}



  // 드롭 다운 메뉴 요소(시작)
  const genderOptions = [
    { label: '남성', value: 'M' },
    { label: '여성', value: 'F' }
  ]
  const workContractOptions = ['정규직', '계약직', '인턴']
  const workExperienceOptions = ['신입', '경력']
  const hireAuthorityOptions = [
    {label: '인사 일반', value: 'ROLE_EMP'},
    {label: '인사 관리', value: 'ROLE_HR'}
  ]
  // 드롭 다운 메뉴 요소(끝)

  onMounted( async ()  => {

    //주소 찾기 라이브러리 로드
    if (!window.daum) {
      const script = document.createElement('script')
      script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
      script.async = true
      document.head.appendChild(script)
    }


    //부서 정보 가져오기
    getDepartmentInfo();


    //직급 정보 가져오기
    getPositionInfo();


    //등록자 정보 가져오기
    infoRegistrar.value = loginStore.empCode
  })

  //폼에 입력 또는 폼을 클릭했을 때 실행되는 함수(시작)

    //주민등록번호 7자리 숫자 제약 함수
    function onInputSSN(event: Event) {
      const input = event.target as HTMLInputElement
      socialSecurityNoBack.value = input.value.replace(/\D/g, '').slice(0, 7)
    }

    //전화번호 자동 포맷팅
    function onPhoneInput(event: Event) {
      const input = event.target as HTMLInputElement
      phoneNumber.value = formatPhoneNumber(input.value)
    }



    //백스페이스 입력

      function onBackspace(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement
        const cursor = input.selectionStart ?? 0

        // 커서 앞 문자가 하이픈이면 한 글자 더 삭제
        if (cursor > 0 && input.value[cursor - 1] === '-') {
          phoneNumber.value = phoneNumber.value.slice(0, cursor - 1) + phoneNumber.value.slice(cursor)
          event.preventDefault()
        }
      }

      
    //주소폼 클릭했을 때
        function openDaumPostcode() {
          new window.daum.Postcode({
            oncomplete: function (data: any) {
              address.value = data.address
              postalCode.value = data.zonecode
            }
          }).open()
    }

  //폼에 입력했을 때 실행되는 함수(끝)


  //일반 함수(시작)

    //전화번호 자동 포맷팅(시작)
      function formatPhoneNumber(raw: string): string {
        const digits = raw.replace(/\D/g, '') // 숫자만 추출

        // 02 - 서울 지역번호 (2자리 지역번호)
        if (digits.startsWith('02')) {
          if (digits.length <= 2) return digits
          else if (digits.length <= 5) return digits.replace(/(\d{2})(\d+)/, '$1-$2')
          else if (digits.length <= 9) return digits.replace(/(\d{2})(\d{3,4})(\d{0,4})/, '$1-$2-$3')
          else return digits.slice(0, 10).replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
        }

        // 10자리: XXX-XXX-XXXX
        if (digits.length === 10) {
          return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        }

        // 11자리: XXX-XXXX-XXXX
        if (digits.length === 11) {
          return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
        }

        // 입력 중일 때의 처리
        if (digits.length <= 3) return digits
        else if (digits.length <= 7) return digits.replace(/(\d{3})(\d+)/, '$1-$2')
        else return digits.replace(/(\d{3})(\d{4})(\d*)/, '$1-$2-$3')
      }
    //전화번호 자동 포맷팅(끝)


  //일반 함수(끝)




// 증명사진 업로드 관련 함수 및 변수
  const fileInput = ref<HTMLInputElement | null>(null)
  const selectedFile = ref<File | null>(null)

  // 숨겨진 input 클릭
  const triggerFileSelect = () => {
    fileInput.value?.click()
  }


  // 파일 선택 처리
  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    if (!file) return

    selectedFile.value = file // 선택한 사진 정보
    imageUrl.value = URL.createObjectURL(file) // 이미지 미리보기 URL
  }
    
  // 사진 등록 요청
  const uplodeEmpPoto = async (empCode:string) => {
    if (!selectedFile.value) {
      return
    }

    const formData = new FormData() // 브라우저 제공 내장 객체
    formData.append('file', selectedFile.value) // 이미지 파일 할당
    formData.append('empCode', empCode) // 사번 할당

    // 사진 등록 요청
      const res = await empStore.REGISTER_EMP_PROFILE_IMAGE(formData)
  }


  //테스트용 직원 정보 json 객체
    const registerEmpInfoTest:registerEmpInfoType = {
      empName: "테스트",
      gender: "M",
      birthDate: "1995-02-15",
      socialSecurityNo: "8723121234521",
      phoneNumber: "010-1234-5678",
      address: "서울시 강남구",
      addressDetail: "역삼동 123-4",
      postalCode: "06236",
      educationLevel: "대졸",
      email: "hong@test2.com",
      hireDate: "2025-05-21",
      deptCode: "D001",
      positionCode: "POS01",
      workContract: "정규직",
      workExperience: "신입",
      authCode: "ROLE_EMP",
      createdBy: "ADMIN",
    }


  //직원 등록 테스트 함수(테스트용 객체)
  // const test = async (registerEmpInfoTest:registerEmpInfoType) =>{
  // await empStore.REGISTER_EMP(registerEmpInfoTest);
  // console.log('empCode: ', empStore.empCode);
  // console.log('result: ', empStore.isSuccess);
  // }


  //직원 등록 테스트 함수(직접 폼에 입력)
const empRegister = async () => {
  confirmDialog.value = false
  if (!validateForm()) return
  if (selectedFile.value === null) {
    alert("사진을 선택하세요.")
    return;
  }
  const registerEmpInfo: registerEmpInfoType = {
    empName:empName.value,
    gender:gender.value,
    birthDate:birthDate.value,
    socialSecurityNo:socialSecurityNoBack.value,
    phoneNumber:phoneNumber.value,
    address:address.value,
    addressDetail:addressDetail.value,
    postalCode:postalCode.value,
    educationLevel:educationLevel.value,
    email:email.value,
    hireDate:hireDate.value,
    deptCode:department.value,
    positionCode:position.value,
    workContract:workContract.value,
    workExperience:workExperience.value,
    authCode:authCode.value,
    createdBy:infoRegistrar.value,
  }
  console.log('전송 데이터:', registerEmpInfo)

  await empStore.REGISTER_EMP(registerEmpInfo);
  console.log('empCode: ', empStore.empCode);
  console.log('result: ', empStore.isSuccess);

  await uplodeEmpPoto(empStore.empCode)
  if(empStore.isImageRegist){
    alert("직원 등록 성공");
  }
  else{
    alert("직원 등록 실패");
  }
}


  //드롭 다운 요소 클릭했을 때 이벤트 함수
  // const onPositionChange = ()=>{
  //   console.log('직급 선택: ', position.value);
  // }

//필드를 작성했는지 확인하는 함수
const validateForm = (): boolean => {
  const requiredFields = [
    { label: '이름', value: empName.value },
    { label: '성별', value: gender.value },
    { label: '생년월일', value: birthDate.value },
    { label: '주민등록번호 뒷자리', value: socialSecurityNoBack.value },
    { label: '전화번호', value: phoneNumber.value },
    { label: '주소', value: address.value },
    { label: '상세 주소', value: addressDetail.value },
    { label: '우편번호', value: postalCode.value },
    { label: '최종 학력', value: educationLevel.value },
    { label: '이메일', value: email.value },
    { label: '입사일', value: hireDate.value },
    { label: '소속 부서', value: department.value },
    { label: '직급', value: position.value },
    { label: '근로 계약 구분', value: workContract.value },
    { label: '경력 구분', value: workExperience.value },
    { label: '인사 권한', value: authCode.value },
    { label: '등록자', value: infoRegistrar.value },
  ]

  for (const field of requiredFields) {
    if (field.value === '' || field.value === null) {
      alert(`"${field.label}" 항목을 입력해 주세요.`)
      return false
    }
  }

  return true
}


</script>


<template>
  <h1 class="mb-2">사원 등록</h1>
  <!-- <button @click="test">테스트 함수 실행 버튼</button> -->
  <VContainer>
    <VRow>
      <!-- 직원기초정보 -->
      <VCol md="12">
        <VCard>
          <VCardTitle class="d-flex justify-space-between">
          </VCardTitle>
        <VCardText>
          <VRow>
            <!-- 왼쪽: 사진 + 버튼 -->
            <VCol cols="12" md="2" class="d-flex flex-column align-center">
              <!-- 프로필 이미지 -->
              <v-img
                :src="imageUrl"
                alt="프로필 이미지"
                height="180"
                width="140"
                class="elevation-2 mb-2"
                cover
                style="max-height: 180px; max-width: 140px"
              />
              <!-- 사진 버튼 -->
              <div class="d-flex justify-center gap-2 mt-2">
                <VBtn variant="outlined" size="small" @click="triggerFileSelect">
                  사진 선택
                </VBtn>
              <!-- 숨겨진 파일 input -->
              <input
                type="file"
                ref="fileInput"
                accept="image/*"
                class="d-none"
                @change="handleFileChange"
              />
              </div>
            </VCol>

            <!-- 오른쪽: 입력폼 -->
            <VCol cols="12" md="10">
              <VRow>
                <VCol cols="12" md="3">


                  <!-- 이름 입력  -->
                  <VTextField 
                    label="이름" 
                    variant="outlined" 
                    v-model="empName"
                  />


                </VCol>

                <VCol cols="12" md="3">


                  <!-- 성별 입력  -->
                  <VSelect
                    label="성별"
                    variant="outlined"
                    :items="genderOptions"
                    item-title="label"
                    item-value="value"
                    v-model="gender"
                  />


                </VCol>
                <VCol cols="12" md="3">


                  <!-- 생년월일 입력 -->
                  <AppDateTimePicker
                    placeholder="생년월일"
                    variant="outlined"
                    v-model="birthDate"
                  />


                </VCol>
                <VCol cols="12" md="3">


                  <!-- 주민등록번호 뒷자리 입력  -->
                  <VTextField
                    v-model="socialSecurityNoBack"
                    label="주민등록번호 뒷자리"
                    variant="outlined"
                    maxlength="7"
                    :rules="[
                      (v: string) => /^\d{7}$/.test(v) || '숫자 7자리를 입력하세요'
                    ]"
                    @input="onInputSSN"
                  />


                </VCol>
                <VCol cols="12" md="3">


                  <!-- 전화번호 입력  --> 
                  <VTextField
                    v-model="phoneNumber"
                    label="전화번호"
                    variant="outlined"
                    @input="onPhoneInput"
                    @keydown.backspace="onBackspace"
                  />
                </VCol>
                <VCol cols="12" md="3">


                  <VTextField 
                    v-model="address" 
                    label="주소"
                    readonly 
                    @click="openDaumPostcode" 
                    />


                </VCol>
                <VCol cols="12" md="3">


                  <VTextField 
                    v-model="addressDetail"
                    label="상세 주소" 
                    variant="outlined" 
                  />


                </VCol>
                <VCol cols="12" md="3">


                  <VTextField 
                    v-model="postalCode" 
                    label="우편번호" 
                    readonly 
                  />

                  
                </VCol>
                <VCol cols="12" md="3">


                  <VTextField 
                    v-model="educationLevel"
                    label="최종 학력" 
                    variant="outlined" 
                  />


                </VCol>
                <VCol cols="12" md="3">
                  <VTextField 
                    v-model = "email"
                    label="E-Mail" 
                    variant="outlined" 
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <AppDateTimePicker
                    placeholder="입사일"
                    variant="outlined"
                    v-model="hireDate"
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <VSelect 
                    v-model = "department"
                      :items="departmentInfo"
                      item-title="deptName"   
                      item-value="deptCode"
                    label="소속 부서" 
                    variant="outlined" 
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <VSelect 
                    v-model = "position"
                    :items="positionListInfo"
                    item-title="positionName"
                    item-value="positionCode"
                    label="직급" 
                    variant="outlined"
                    @update:modelValue="onPositionChange"
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <VSelect
                    label="근로 계약 구분"
                    variant="outlined"
                    :items="workContractOptions"
                    v-model="workContract"
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <VSelect 
                    label="경력 구분" 
                    variant="outlined"
                    :items="workExperienceOptions"
                    v-model="workExperience"
                  />
                </VCol>
                <VCol cols="12" md="3">
                  <VSelect
                    label="인사 권한"
                    variant="outlined"
                    :items="hireAuthorityOptions"
                    item-title = "label"
                    item-value = "value"
                    v-model="authCode"
                  />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VCardText>
            <VCardText class="d-flex justify-end">
              <VBtn color="primary" @click="confirmDialog = true">
                등록
              </VBtn>
            </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>


  <!-- 등록 확인 다이얼로그 -->
<v-dialog v-model="confirmDialog" max-width="400">
  <v-card>
    <v-card-title class="text-h6">사원 등록 확인</v-card-title>
    <v-card-text>입력하신 정보로 사원을 등록하시겠습니까?</v-card-text>
    <v-card-actions class="justify-end">
      <v-btn color="primary" @click="empRegister">확인</v-btn>
      <v-btn text @click="confirmDialog = false">취소</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>



<style>

</style>