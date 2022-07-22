const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
} 

let MBTI_questions = shuffle([
    {
      "type": "EI",
      "q": "당신은 팀플을 하게 되었습니다. 어떻게 행동하실건가요 ?",
      "A": "자기소개를 먼저 한다.",
      "B": "입을 꾸욱 닫고 있는다.",
    },
    {
      "type": "EI",
      "q": "공강시간이 되었습니다. 어떻게 행동하실건가요 ?",
      "A": "같이 있을 동기에게 연락을 한다.",
      "B": "혼자서 휴식할 공간을 찾아본다,",
    },
    {
      "type": "EI",
      "q": "MT일정이 나왔는데, 알바랑 날짜가 겹칩니다! 어떻게 행동하실건가요 ?",
      "A": "알바를 빼고 MT를 간다.",
      "B": "가봤자 귀찮을 것 같으니 알바를 간다.",
    },
    {
      "type": "EI",
      "q": "드디어 종강을 했습니다! 무엇을 할건가요?",
      "A": "밖으로 놀러간다",
      "B": "바로 집으로 들어간다",
    },
    {
      "type": "EI",
      "q": "오랜만에 과 동기들을 만나는 날입니다. 당신은 어떤 기분인가요?",
      "A": "얼른 만나고 싶어서 설렐 것 같다",
      "B": "갑자기 나가기 귀찮을 것 같다",
    },
    {
      "type": "NS",
      "q": "이번에 새로 놓은 학관 옆 여객기(A300)가 보입니다. 어떤 생각이 들 것 같나요?",
      "A": "저거 날 수 있나 ? 날 수 있을 듯 ??",
      "B": "돈이 아깝게 저걸 왜 세웠어 ?",
    },
    {
      "type": "NS",
      "q": "다음 강의 때문에 조금 멀리있는 강의실로 이동할 겁니다. 당신은 ?",
      "A": "새로운 길로 가볼까 ? 운명의 상대를 만날지도...",
      "B": "늘 가던 길로 간다",
    },
    {
      "type": "NS",
      "q": "CC(캠퍼스 커플)할 수 있다고 가정하자. 당신은 어떻게 할 것인가?",
      "A": "당연히 한다!",
      "B": "훗날이 두렵다. 하지 않는다",
    },
    {
      "type": "NS",
      "q": "수업을 듣다가 헬기 소리가 엄청 크게 들린다. 어떤 생각이 들겠는가?",
      "A": "나한테 떨어지면.. 어떡하지 ?",
      "B": "어우 시끄러 !!",
    },
    {
      "type": "NS",
      "q": "축제 떄 연예인들의 무대를 보고 있다. 어떤 생각이 드는가?",
      "A": "저 분을 찍는 카메라는 몇 대일까? 행사비 얼마정도 받으실까?",
      "B": "꺄!!!!!!!!!!!!!!!!!!!!!!",
    },
    {
      "type": "FT",
      "q": "선배가 족보를 준다고 한다. 뭐라고 할 것 같은가?",
      "A": "아 선배님! 너무 감사해요 ㅠㅠ",
      "B": "몇 년도 족보에요 ?",
    },
    {
      "type": "FT",
      "q": "슬픔을 나눈다면 ? 뭘까?",
      "A": "슬픔이 반",
      "B": "슬픈 사람이 둘",
    },
    {
      "type": "FT",
      "q": "친구가 어디서 코로나에 걸려왔다. 당신이 해줄 말은 ?",
      "A": "헐 .. 괜찮아 ? 많아 아퍼?",
      "B": "어디서 걸렸어? 일단 신청부터 해 그리고 ~",
    },
    {
      "type": "FT",
      "q": "어느게 더 화가 나는가 ?",
      "A": "화장실에 다녀왔떠니 아무 말없이 내 노트 필기를 배끼는 친구",
      "B": "화장실에 다녀왔더니 내 노트에 물 쏟은 친구",
    },
    {
      "type": "FT",
      "q": "친구가 시험을 망쳐버리고 울고 있다.",
      "A": "괜찮아 다음에 더 열심히 하자",
      "B": "진작 열심히 하지 왜 울어?",
    },
    {
      "q": "교수님이 과제를 내주셨다.",
      "A": "음 .. 다음주 월요일까지니까 토요일정도에 하면 되겠다.",
      "B": "아 과제 또 생겼네 ..",
    },
    {
      "type": "JP",
      "q": "당신은 화전역을 가는 중이다.",
      "A": "경중선 시간표를 확인한다.",
      "B": "옆의 친구와 떠든다.",
    },
    {
      "type": "JP",
      "q": "곧 학교에 도착하는 당신. 그런데 교수님이 휴강공지를 하셨다.",
      "A": "화가 치밀 것 같다.",
      "B": "개꿀 ㅎ",
    },
    {
      "type": "JP",
      "q": "교수님이 과제를 내주셨다.",
      "A": "음 .. 다음주 월요일까지니까 토요일정도에 하면 되겠다.",
      "B": "아 과제 또 생겼네 ..",
    },
    {
      "type": "JP",
      "q": "교수님이 과제를 내주셨다.",
      "A": "음 .. 다음주 월요일까지니까 토요일정도에 하면 되겠다.",
      "B": "아 과제 또 생겼네 ..",
    },
]);

// KEY: {
//   "body": MBTI 설명,
//   "major": 학과,
//   "sub_major": 세부전공 (없으면 NULL),
//   "url": 각 과 URL
// }
const result = {
  "ESFJ": {
    "body": "타인을 돕고 싶어하고, 사회에 도움이 되는 역할에 이끌림",
    "major": "항공교통물류학부",
    "sub_major": "물류 전공",
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=am_www",
  },
  "ESTJ": {
    "body": "단시간에 실용적인 결정을 내릴 수 있어 지도자의 역할을 잘 수행함",
    "major": "항공경영학과",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=biz_www",
  },
  "ESFP": {
    "body": "상식을 중요시하며 다른 사람들과 상호작용하고 자기 자신을 표현하는 일에서 휼륭한 성과를 발휘할 수 있다고 한다.",
    "major": "항공전자정보공학부",
    "sub_major": "통신 전공",
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=eie_www",
  },
  "ENTP": {
    "body": "뛰어난 창의력의 소유자가 많아 지속적인 독창성이 요구되는 직무에 적합",
    "major": "창업",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=eie_www",
  },
  "ESTP": {
    "body": "뛰어난 창의력의 소유자가 많아 지속적인 독창성이 요구되는 직무에 적합",
    "major": "Al자율주행시스템공학과",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=eie_www",
  },
  "ENTJ": {
    "body": "논리적, 분석적이므로 조직성 및 효율성이 요구되는 권위적인 직업에 끌리는 경향",
    "major": "학군단",
    "sub_major": NULL,
    "url": "http://rotc.kau.ac.kr/",
  },
  "INTP": {
    "body": "이론적이고 정확한 대상을 선호하기 때문에 이와 관련된 업무 역량이 요구되는 직업에서 훌륭한 성과를 얻을 가능성이 큼",
    "major": "신소재공학과",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=materials_www",
  },
  "ENFP": {
    "body": "어떤 경우에도 가능성을 발견할 수 있으며, 자기표현에 뛰어나기 때문에 해당 역량이 요구되는 업무에서 능력을 발휘",
    "major": "자율전공학부",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=free_www",
  },
  "ENFJ": {
    "body": "타인을 사랑하며 자신의 의견을 표현할 수 있고 협동심이 요구되는 역할을 잘 수행함",
    "major": "항공교통물류학부",
    "sub_major": "교통 전공",
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=attll_www",
  },
  "ISTP": {
    "body": "대화보다는 행동을 선호하며 도구 활용 능력이 훌륭한 경우가 많다.",
    "major": "항공우주기계공학부",
    "sub_major": "기계 전공",
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=am_www",
  },
  "ISTJ": {
    "body": "책임감이 강하고 일을 열심히 하는 사람들이 많다. 비밀스럽지만, 신뢰성이 요구되는 직종에 종사하면 훌륭한 성과를 낼 수 있다.",
    "major": "항공운항학과",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=hw_www",
  },
  "ISFJ": {
    "body": "타인을 돕는 것을 즐김으로 서비스를 제공하는 직업에 적합한 경우가 많다.",
    "major": "항공전자정보공학부",
    "sub_major": "통신 전공",
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=eie_www",
  },
  "INTJ": {
    "body": "항상 무언가를 하고 싶어 합니다. 이론적인 사고가 주요 업무 역량인 직무에서 빛을 발할 수 있다.",
    "major": "소프트웨어학과",
    "sub_major": NULL,
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=sw_www",
  },
  "ISFP": {
    "body": "눈에 보이지 않는 방식으로 사람을 도우며 동정심과 세심함이 요구되는 역할에 적합함.",
    "major": "항공우주기계공학부",
    "sub_major": "항공우주 전공",
    "url": "http://college.kau.ac.kr/web/index.do?siteFlag=am_www",
  },
  "INFP": {
    "body": "자기 자신이 가지고 있는 가치에 동기 부여를 받으며 이들을 포용력 및 적응력이 요구되는 직무에 적합하다.",
    "major": "대학원",
    "sub_major": NULL,
    "url": "http://grad.kau.ac.kr/index/main.php",
  },
  "INFJ": {
    "body": "원칙과 신의에 의해 움직이는 사려 깊고 창의적인 사람들이 다수 포함되어 있다. 따라서 이들은 의사소통을 중심으로 한 업무에서 뛰어난 능력을 보이는 경우가 많다.",
    "major": "항공전자정보공학부",
    "sub_major": "전자 전공",
    "url": "http://grad.kau.ac.kr/index/main.php",
  },

};