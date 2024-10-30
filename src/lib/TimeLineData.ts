interface TimeLineData {
  year: string;
  events: Array<{ date: string; description: string }>;
}

export const TimeLineData: TimeLineData[] = [
  {
    year: '2024',
    events: [
      {
        date: '11.11',
        description: '아프지마 앱 내 실손보험 청구 서비스 런칭',
      },
      {
        date: '10.28',
        description: '아프지마 앱 내 건강정보 콘텐츠 서비스 런칭',
      },
      {
        date: '04.09',
        description: '초기창업패키지 선정',
      },
      {
        date: '03.18',
        description: '2024년 동국대 일산병원 개방형실험실 구축사업 협약 체결',
      },
    ],
  },
  {
    year: '2023',
    events: [
      { date: '12.13', description: 'TIPS 선정' },
      {
        date: '09.04',
        description: 'KT 헬스케어 사업 대상 콘텐츠 기획 및 제작 계약 체결',
      },
      {
        date: '08.10',
        description: 'DB생명 업무제휴 협약 체결',
      },
      {
        date: '03.08',
        description:
          '2023년 동국대학교 일산병원 개방형실험실 구축사업 협약 체결',
      },
    ],
  },
  {
    year: '2022',
    events: [
      { date: '12.30', description: '벤처박스 투자 유치' },
      { date: '12.28', description: '벤처기업 인증' },
      { date: '12.14', description: 'Y&Archer 투자 유치' },
      {
        date: '12.14',
        description: '2022년 대한민국 위치기반 서비스 공모전 최우수상 수상',
      },
      {
        date: '08.30',
        description: '라이징에스벤처스 투자 유치',
      },
      {
        date: '04.29',
        description:
          '글로벌 협업 프로그램 창구(창업진흥원 & 구글) 프로그램 선발',
      },
      {
        date: '04.15',
        description: 'DGB금융그룹 피움랩 4기 선발',
      },
      {
        date: '04.07',
        description:
          'DB손해보험, 한국인터넷진흥원 인슈어테크 스타트업 3기 선발',
      },
    ],
  },
  {
    year: '2021',
    events: [
      {
        date: '11.01',
        description: '아프지마 앱 내 비급여 병원비 비교 서비스 런칭',
      },
      {
        date: '08.05',
        description: '보건의료 빅데이터 활용 창업경진대회 입상',
      },
      {
        date: '07.05',
        description: '(주)헬스피디아 창업',
      },
    ],
  },
];
