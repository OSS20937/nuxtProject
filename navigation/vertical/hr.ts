export default [
  { heading: "hr" },
  {
    title: "insaHome",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" },
  }, 
    {
    title: "인사 일반",
    alwaysOpenAndLocked: true,
    icon: { icon: 'tabler-point-filled' },
    children: [   
    {
    title: "근태",
    icon: { icon: '' },
    children: [
          {
            title: "일근태 조회",

            to: { name: "hr-affair-empList" },
          },
          {
            title: "월근태 조회",
            to: { name: "hr-affair-empDetail" },
          },
          {
            title: "조퇴 신청",
            to: { name: "hr-affair-empDetail" },
          },
    ],
  },
      {
    title: "연차",
        icon: { icon: '' },
    children: [
          {
            title: "연차 신청",
            to: { name: "hr-affair-empList" },
          },
          {
            title: "연차 현황",
            to: { name: "hr-affair-empDetail" },
          },
    ],
  },
        {
    title: "급여",
        icon: { icon: '' },
    //icon: { icon: "tabler-user-circle" },
    children: [
          {
            title: "급여 명세서 조회",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
  {
    title: "인사고과",
        icon: { icon: '' },
    //icon: { icon: "tabler-user-circle" },
    children: [
          {
            title: "인사고과 조회",
            to: { name: "hr-affair-empList" },
          },
    ],
  },]
    },
 
  {
    title: "인사 관리 ",
    icon: { icon: 'tabler-point-filled' },
    alwaysOpenAndLocked: true,
    children: [  {
    title: "사원 정보 ",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "사원정보 조회",
            to: { name: "wiztech-hr-emp-findEmp" },
          },
          {
            title: "사원정보 등록",
            to: { name: "wiztech-hr-emp-eddEmp" },
          },
          {
            title: "사원정보 수정",
            to: { name: "hr-affair-registerEmpList" },
          },
          {
            title: "사원정보 삭제",
            to: { name: "hr-affair-registerEmpList" },
          },
    ],
  },
    {
    title: "근태 관리",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "일근태 조회",
            to: { name: "hr-affair-empList" },
          },
                    {
            title: "월근태 조회",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
      {
    title: "연차 관리",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "연차 신청 승인",
            to: { name: "hr-affair-empList" },
          },
                    {
            title: "연차 조회",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
    {
    title: "인사고과 관리",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "인사고과 등록",
            to: { name: "hr-affair-empList" },
          },
          {
            title: "인사고과 조회",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
    {
    title: "인사발령",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "사원 직급 변경",
            to: { name: "hr-affair-empList" },
          },
                    {
            title: "사원 부서 이동",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
      {
    title: "부서관리",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "부서 증설",
            to: { name: "hr-affair-empList" },
          },
          {
            title: "부서 이름 변경",
            to: { name: "hr-affair-empList" },
          },
          {
            title: "부서 삭제",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
        {
    title: "직급관리",
    // icon: { icon: "tabler-user-circle" },
    icon: { icon: '' },
    children: [
          {
            title: "직급 추가",
            to: { name: "hr-affair-empList" },
          },
                    {
            title: "직급 수정",
            to: { name: "hr-affair-empList" },
          },
          {
            title: "직급 삭제",
            to: { name: "hr-affair-empList" },
          },
    ],
  },
    ]
  },

];
