<script setup lang="ts">
import { useLoginStore } from '../../store/hr/login'
import { empProfileStore } from '../../store/hr/empProfile'
import { useUserStore } from '@/store/hr/user'


const localLoginStore = useLoginStore()
const localEmpProfileStore = empProfileStore()
const userStore = useUserStore()

const imageUrl = ref('');



onMounted(async ()=>{

  //직원 사진 경로 얻기
  const getPhotoURL = await localEmpProfileStore.GET_EMP_PHOTO_URL(localLoginStore.empCode);
  if(getPhotoURL){
      imageUrl.value = `http://localhost:8282${localEmpProfileStore.photoURL}`
  }else{
    alert('직원 사진 경로 얻기에 실패했습니다.')
  }
})






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

  selectedFile.value = file
  imageUrl.value = URL.createObjectURL(file)
}

// 실제 업로드 요청
const updatePhoto = async () => {
  if (!selectedFile.value) {
    alert('사진을 먼저 선택하세요.')
    return
  }

  const formData = new FormData() // 브라우저 제공 내장 객체
  formData.append('file', selectedFile.value) // 이미지 파일 할당
  formData.append('empCode', localLoginStore.empCode) // 사번 할당

  try {
    const res = await localEmpProfileStore.UPDATE_EMP_PHOTO_URL(formData)
    if(res){
      console.log('업로드 완료:');
      alert('사진이 성공적으로 업로드되었습니다.')
    }
  } catch (err) {
    console.error('업로드 실패:', err)
    alert('사진 업로드 중 오류가 발생했습니다.')
  }
}



</script>

<template>
  <v-container class="py-6">
    <h2 class="text-h5 font-weight-bold mb-6">내 정보</h2>
    <!-- <button @click="console.log(selectedFile)">테스트</button> -->

    <v-card class="pa-6" elevation="2">
      <v-row>
        <!-- 프로필 이미지 + 버튼 -->
        <v-col cols="12" md="4" class="d-flex flex-column align-center">
          <v-img
            :src="imageUrl"
            alt="프로필 이미지"
            height="200"
            width="160"
            class="mb-4 elevation-2"
            cover
          />

          <div class="d-flex gap-2">
            <v-btn color="primary" variant="tonal" @click="triggerFileSelect">사진 선택</v-btn>
            <v-btn color="primary" variant="tonal" @click="updatePhoto">사진 적용</v-btn>
          </div>

          <!-- 숨겨진 파일 input -->
          <input
            type="file"
            ref="fileInput"
            accept="image/*"
            class="d-none"
            @change="handleFileChange"
          />
        </v-col>

        <!-- 텍스트 정보 -->
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" sm="6">
              <p class="text-lg"><strong>이름:</strong> {{ userStore.empName }}</p>
              <p class="text-lg"><strong>생년월일:</strong> {{ userStore.birthDate }}</p>
              <p class="text-lg"><strong>성별:</strong> {{ userStore.gender }}</p>
              <p class="text-lg"><strong>전화번호:</strong> {{ userStore.phoneNumber }}</p>
              <p class="text-lg"><strong>주소:</strong> {{ userStore.basicAddress }} {{ userStore.detailAddress }}</p>
              <p class="text-lg"><strong>최종학력:</strong> {{ userStore.levelOfEducation }}</p>
              <p class="text-lg"><strong>이메일:</strong> {{ userStore.email }}</p>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-lg"><strong>부서:</strong> {{ userStore.deptCode }}</p>
              <p class="text-lg"><strong>사번:</strong> {{ userStore.empCode }}</p>
              <p class="text-lg"><strong>직급:</strong> {{ userStore.positionCode }}</p>
              <p class="text-lg"><strong>호봉:</strong> {{ userStore.Hobong }}</p>
              <p class="text-lg"><strong>입사일:</strong> {{ userStore.hireDate }}</p>
              <p class="text-lg"><strong>인사접근권한:</strong> {{ userStore.AuthorityCode }}</p>
              <p class="text-lg"><strong>로그인 아이디:</strong> {{ userStore.userId }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <v-card-actions class="justify-end">
        <v-btn color="primary" variant="outlined" class="mr-2">아이디 변경</v-btn>
        <v-btn color="primary" variant="outlined">비밀번호 변경</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>