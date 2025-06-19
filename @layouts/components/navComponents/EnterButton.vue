<template>
  <div>


    <!-- 입장 버튼 -->
    <v-btn
      color="primary"
      class="text-white"
      style="width: 90px"
      @click="enterClicked"
    >
      출근(귀사)
    </v-btn>



    <!--입장 버튼을 눌렀을 때 선택창 -->
    <v-dialog v-model="selectDialogOnOff" max-width="400">
      <v-card>
        <v-card-title class="text-h6">{{ enterDialogTitle }}</v-card-title>
        <v-card-text> {{ enterDialogText }} </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="confirm">확인</v-btn>
          <v-btn text @click="selectDialogOnOff = false">취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>




    <!--선택창에서 확인 버튼을 눌렀을 때 확인창 -->
    <v-dialog v-model="confirmRegistDialogOnOff" max-width="400">
      <v-card>
        <v-card-title class="text-h6">{{ confirmRegistDialogTitle }}</v-card-title>
        <v-card-text> {{ confirmRegistDialogText }} </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="confirmRegistDialogOnOff = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>



</template>

<script setup lang="ts">

import { attenStore } from "@/store/hr/attendance";
import { ref } from "vue";



  // ADC1001: "출근",
  // ADC1002: "퇴근",
  // ADC2001: "공외출",
  // ADC2002: "공귀사",
  // ADC3001: "사외출",
  // ADC3002: "사귀사",
  // ADC4001: "교육출장",
  // ADC4002: "교육복귀",
  // ADC5001: "무단외출",
  // ADC5002: "무단복귀",



const enterDialogTitle = ref("출근 등록");                                   // 선택창 제목 변수
const enterDialogText = ref("출근 등록 하시겠습니까?");                       // 선택창 내용 변수
const confirmRegistDialogTitle = ref("");                                   // 등록확인 창 제목 변수
const confirmRegistDialogText = ref("");                                    // 등록확인 창 내용 변수
const isDayAttdEnter = ref("");                                             // 등록 성공 여부 변수
const selectDialogOnOff = ref(false);                                       // 선택창 On/Off 변수
const confirmRegistDialogOnOff = ref(false);                                // 등록 확인창 On/Off 변수
const attdTypeCode = ref("");                                               // 가장 최근의 dayAttd 테이블의 attdTypeCode 변수
const today = ref("");                                                      // 오늘 날짜 저장 변수

//입장 버튼을 눌렀을 때
const enterClicked = async () => {
  try {


    //오늘 날짜를 'YYYY-MM-DD' 형식으로 얻음
    today.value = new Date().toISOString().slice(0, 10); 



    //요청 시 파라미터로 사용할 객체
    const empCodeAndApplyDay = {
      empCode: "EMP-01",
      date: today.value,
    }; 



    //API 호출(Axios 요청)
    await attenStore().SEARCH_DAY_ATTD_LAST_CODE(empCodeAndApplyDay); 
    console.log("attenStore().dayAttdLastCode: ", attenStore().dayAttdLastCode);



    //Axios 요청 후 응답한 값 할당
    attdTypeCode.value = attenStore().dayAttdLastCode.ATTD_TYPE_CODE;
    console.log("a.value: ", attdTypeCode.value);



    //응답한 값에 따라 처리
    switch (attdTypeCode.value) {
      case undefined: //당일 출근 기록이 없을 때
        enterDialogTitle.value = "출근 등록";
        break;
      case "ADC2001": //공외출일 때
        enterDialogTitle.value = "공귀사 등록";
        break;
      case "ADC3001": //사외출일 때
        enterDialogTitle.value = "사귀사 등록";
        break;
      case "ADC4001": //교육출장일 때
        enterDialogTitle.value = "교육복귀 등록";
        break;
      case "ADC5001": //무단외출일 때
        enterDialogTitle.value = "무단복귀 등록";
        break;
      default: //위의 케이스가 아닐 때 전부 무단 복귀
        enterDialogTitle.value = "무단복귀 등록";
        break;
    }


    //주 내용 동적할당, 선택창 on
    enterDialogText.value = `${enterDialogTitle.value} 하시겠습니까?`;
    selectDialogOnOff.value = true;



    //HTTP 오류 발생 시
  } catch (error) {
    confirmRegistDialogTitle.value = '에러 발생';
    confirmRegistDialogText.value = '서버와 통신 중 오류가 발생했습니다.';
    confirmRegistDialogOnOff.value = true;
    console.error("출근 조회 중 에러 발생:", error);
  }
};

const confirm = async () => {


  //확인 버튼을 누르면 입장 상황에 맞는 입장 등록
  const empCodeAndApplyDay = {
    empCode: "EMP-01",
    date: today.value,
  };


  //API 호출
  await attenStore().INSERT_DAY_ATTD_ENTER(empCodeAndApplyDay); 
  console.log("attenStore().isAddDayAttd: ", attenStore().isAddDayAttd);



  //성공/실패 응답
  isDayAttdEnter.value = attenStore().isAddDayAttd;  
  console.log('isDayAttdEnter.value: ', isDayAttdEnter.value)




  //성공
  if(isDayAttdEnter.value === "SUCCESS"){
    console.log("입장 등록이 성공했습니다.")
    selectDialogOnOff.value = false;
    confirmRegistDialogTitle.value = '정상 등록';
    confirmRegistDialogText.value = '정상 등록되었습니다.';
    confirmRegistDialogOnOff.value = true;
    return;
  }


    //실패
    console.log("입장 등록이 실패했습니다.")
    selectDialogOnOff.value = false;
    confirmRegistDialogTitle.value = '등록 실패';
    confirmRegistDialogText.value = '등록에 실패했습니다.';
    confirmRegistDialogOnOff.value = true;


};
</script>
