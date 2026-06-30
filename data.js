// 도쿄 가족여행 2026.7.5–7.10 — 일정 데이터
// 이 파일만 고치면 사이트 내용이 바뀐다.
const TRIP = {
  "title": "도쿄 가족여행",
  "dates": "2026. 7. 5 (일) – 7. 10 (금)",
  "subtitle": "엘리 · 안드레스 · 진유",
  "days": [
    {
      "id": "d1", "date": "7/5", "weekday": "일",
      "theme": "도착 + 플리마켓",
      "hotel": "JW 메리어트 (타카나와)",
      "note": "플리마켓은 이날(일요일)이 유일한 개장일!",
      "items": [
        { "id": "d1-arrive", "time": "11:20", "emoji": "🛬", "title": "하네다 도착 + 교통카드 만들기", "who": ["가족"],
          "desc": "김포 09:00 출발 → 하네다 11:20 도착. 입국심사 후 T3 도착홀 JR EAST 트래블 서비스센터에서 IC카드(스이카) 3장 발급. ⚠️ 진유 어린이카드는 여권 필요!",
          "search": "Haneda Airport Terminal 3", "lat": 35.5444, "lon": 139.7689 },
        { "id": "d1-jw", "time": "오후", "emoji": "🏨", "title": "JW 메리어트 체크인", "who": ["가족"],
          "desc": "타카나와의 새 호텔. 여기서 3박 (7/5·6·7). 하네다에서 ~20분.",
          "search": "JW Marriott Hotel Tokyo Takanawa", "lat": 35.6353, "lon": 139.7407 },
        { "id": "d1-oedo", "time": "오후", "emoji": "🏺", "title": "오에도 골동시장", "who": ["엘리"],
          "desc": "도쿄 최대 야외 앤티크 플리마켓 (마루노우치, ~16시). 에도·메이지 시대 도자기, 100년 전 물건들. 한 달에 두 번만 열리는데 마침 이날!",
          "search": "Oedo Antique Market Tokyo International Forum", "lat": 35.6772, "lon": 139.7638 },
        { "id": "d1-gateway", "time": "저녁", "emoji": "🏙️", "title": "타카나와 게이트웨이 시티", "who": ["안드레스"],
          "desc": "호텔 코앞 신상 재개발 지구. 쿠마 켄고 건축 + 뮤지엄·라이브러리. 산책 겸 구경.",
          "search": "Takanawa Gateway City", "lat": 35.6356, "lon": 139.7404 },
        { "id": "d1-footbath", "time": "저녁", "emoji": "♨️", "title": "MoN 루프탑 족욕 테라스", "who": ["가족"],
          "desc": "게이트웨이 시티 안 MoN 미술관 6층 옥상의 무료 족욕 테라스. 풀·나무에 둘러싸인 반야외 공간 — 더운 7월엔 냉수 족욕으로 발 담그며 쉬기 딱. 10–21시, 무료.",
          "search": "MoN Takanawa footbath terrace", "lat": 35.6359, "lon": 139.74 },
        { "id": "d1-aqua", "time": "저녁", "emoji": "🐬", "title": "아쿠아파크 시나가와", "who": ["진유"],
          "desc": "돌고래 쇼 + 미디어아트 수족관. 시나가와역 바로 앞이라 저녁에 가볍게.",
          "search": "Maxell Aqua Park Shinagawa", "lat": 35.6285, "lon": 139.7388 }
      ]
    },
    {
      "id": "d2", "date": "7/6", "weekday": "월",
      "theme": "메구로 → 하라주쿠 → 시부야",
      "hotel": "JW 메리어트 (타카나와)",
      "note": "월요일은 박물관·동물원 휴무 → 쇼핑·애니의 날. ☔ 비 오면 이케부쿠로 실내(가챠 백화점+수족관)로 변경.",
      "items": [
        { "id": "d2-toolbox", "time": "오전", "emoji": "🔧", "title": "TOOLBOX 쇼룸 (메구로)", "who": ["엘리"],
          "desc": "인테리어 부자재·소품 쇼룸. 손잡이·조명·세면대 같은 실용 디테일 구경.",
          "search": "toolbox showroom Meguro Tokyo", "lat": 35.632, "lon": 139.7155 },
        { "id": "d2-travelers", "time": "오전", "emoji": "📓", "title": "트래블러스 팩토리 (나카메구로)", "who": ["엘리"],
          "desc": "트래블러스 노트 본진. 여행·기록 감성 소품 가득.",
          "search": "Traveler's Factory Nakameguro", "lat": 35.6447, "lon": 139.6995 },
        { "id": "d2-kakura", "time": "점심", "emoji": "🍛", "title": "Kakura 약선 카레 (나카메구로)", "who": ["가족"],
          "desc": "식べ로그 나카메구로 카레 1위. 27종 향신료·약재로 하루 종일 곤 약선 카레 — 식용유·밀가루·화학조미료 없이 속 편한 맛. 나카메구로 쇼핑하다 점심으로.",
          "search": "香食楽 中目黒 Kakura curry", "lat": 35.6409, "lon": 139.6952 },
        { "id": "d2-porter", "time": "오후", "emoji": "🎒", "title": "포터 오모테산도", "who": ["안드레스"],
          "desc": "요시다카방 플래그십. 포터 가방 풀 라인업 + 한정판.",
          "search": "PORTER Omotesando", "lat": 35.6663, "lon": 139.7095 },
        { "id": "d2-kiddy", "time": "오후", "emoji": "🧸", "title": "키디랜드 하라주쿠", "who": ["진유"],
          "desc": "캐릭터 굿즈 천국 + 가챠. 스누피·산리오·포켓몬 다 있음.",
          "search": "KIDDY LAND Harajuku", "lat": 35.6685, "lon": 139.7055 },
        { "id": "d2-graniph", "time": "오후", "emoji": "👕", "title": "헌터x헌터 × 그라니프", "who": ["진유", "엘리"],
          "desc": "헌터x헌터 콜라보 티셔츠·굿즈 (기간 한정). 곤·키루아·히소카!",
          "search": "graniph Harajuku", "lat": 35.6695, "lon": 139.7035 },
        { "id": "d2-yarn", "time": "오후", "emoji": "🧶", "title": "WALNUT Tokyo + 빈티지 데코", "who": ["엘리"],
          "desc": "도쿄에서 제일 좋아한다는 털실가게 WALNUT + 1940년대 빈티지 비즈 가게 (라포레 하라주쿠).",
          "search": "WALNUT Tokyo yarn shop", "lat": 35.6702, "lon": 139.7027 },
        { "id": "d2-warataco", "time": "간식", "emoji": "🐙", "title": "와라타코 (타코야키)", "who": ["가족"],
          "desc": "하라주쿠 타코야키 맛집. 걷다가 간식 타임.",
          "search": "Warataco Harajuku takoyaki", "lat": null, "lon": null },
        { "id": "d2-sky", "time": "늦오후", "emoji": "🌆", "title": "시부야 스카이 (스크램블 스퀘어)", "who": ["안드레스"],
          "desc": "시부야역 위 옥상 전망대. 스크램블 교차로를 위에서!",
          "search": "Shibuya Sky observation deck", "lat": 35.658, "lon": 139.7016 },
        { "id": "d2-nintendo", "time": "늦오후", "emoji": "🎮", "title": "닌텐도 도쿄 (Nintendo TOKYO) ★", "who": ["진유", "엘리"],
          "desc": "일본 첫 공식 닌텐도 직영 스토어 (시부야 파르코 6F). 마리오·젤다·동물의 숲·스플래툰 한정 굿즈·피규어·인형. 진유 본진! 같은 층에 포켓몬센터 시부야·캡콤 스토어도.",
          "search": "Nintendo TOKYO Shibuya PARCO", "lat": 35.6624, "lon": 139.6985 },
        { "id": "d2-parco", "time": "늦오후", "emoji": "🛍️", "title": "시부야 파르코 + RofJ 점프샵", "who": ["진유", "엘리"],
          "desc": "파르코 6F에 닌텐도·포켓몬센터·캡콤이 한 층. 미야시타파크 2F의 RofJ: 점프 애니 라이프스타일 (원피스·나루토·헌터 굿즈).",
          "search": "Shibuya PARCO", "lat": 35.6615, "lon": 139.6985 },
        { "id": "d2-ryan", "time": "늦오후", "emoji": "🍜", "title": "雷庵 라이안 소바 (시부야)", "who": ["가족"],
          "desc": "엘리가 가본 시부야 소바집. 토미가야 골목, 오픈키친에서 면 뽑는 거 보며 카운터·야외석에서 한 그릇. 점심이나 이른 저녁 대안.",
          "search": "雷庵 Ryan soba Shibuya", "lat": 35.6613, "lon": 139.7047 },
        { "id": "d2-pizza", "time": "간식", "emoji": "🍕", "title": "PIZZA SLICE (참고)", "who": ["가족"],
          "desc": "뉴욕식 슬라이스 피자. 시부야·다이칸야마 권역, 쇼핑 중 가볍게 한 조각. 참고용.",
          "search": "PIZZA SLICE Tokyo", "lat": 35.6535, "lon": 139.7051 },
        { "id": "d2-gonpachi", "time": "저녁 7:30", "emoji": "🍢", "title": "곤파치 니시아자부 ✅ 예약 확정", "who": ["가족"],
          "desc": "영화 〈킬빌〉의 그 식당. 소바·꼬치·튀김. 시부야에서 한 정거장. ✅ 7/6 저녁 7:30 예약 완료!",
          "search": "Gonpachi Nishi-Azabu", "lat": 35.6586, "lon": 139.7224 }
      ]
    },
    {
      "id": "d3", "date": "7/7", "weekday": "화",
      "theme": "다마곤충원 + 기치조지",
      "hotel": "JW 메리어트 (타카나와)",
      "note": "곤충원은 수요일 휴무라 화요일에! 서쪽으로 가는 날.",
      "items": [
        { "id": "d3-insect", "time": "오전~점심", "emoji": "🦋", "title": "다마동물공원 곤충원 ★", "who": ["진유"],
          "desc": "진유 필수 코스! 16m 나비 모양 대온실에 나비 1,000마리가 날아다님. 장수풍뎅이·사슴벌레 전시까지. 반나절 잡았어.",
          "search": "Tama Zoological Park insectarium", "lat": 35.6489, "lon": 139.4019 },
        { "id": "d3-kichijoji", "time": "오후", "emoji": "🚶", "title": "기치조지 산책", "who": ["가족"],
          "desc": "36 Sublo(아기자기 문구) + 뜨개샵(엘리), 하모니카 요코초 골목 산책(안드레스). 동네 자체가 좋은 곳.",
          "search": "36 Sublo Kichijoji", "lat": 35.7035, "lon": 139.58 },
        { "id": "d3-yuria", "time": "카페", "emoji": "🍨", "title": "유리아 페무페루 (킷사텐)", "who": ["가족"],
          "desc": "동화책 같은 앤틱 찻집. 크림소다 + 바닐라 아이스크림. 진유도 좋아할 분위기.",
          "search": "ゆりあぺむぺる 吉祥寺", "lat": null, "lon": null },
        { "id": "d3-tagoto", "time": "저녁", "emoji": "🍢", "title": "오뎅 다고토 (니시오기쿠보)", "who": ["가족"],
          "desc": "3대째 오뎅 전문 이자카야. 기치조지에서 한 정거장.",
          "search": "おでん 田ごと 西荻窪", "lat": null, "lon": null }
      ]
    },
    {
      "id": "d4", "date": "7/8", "weekday": "수",
      "theme": "하코네 온천 ♨️ 쉬는 날",
      "hotel": "세츠게츠카 (하코네 고라)",
      "note": "관광 없음! 료칸에서 온천·가이세키·휴식만. JW 체크아웃하며 짐 다 들고 이동.",
      "items": [
        { "id": "d4-romancecar", "time": "오전", "emoji": "🚂", "title": "로망스카 타고 하코네로", "who": ["가족"],
          "desc": "신주쿠 → 하코네유모토 (로망스카 ~85분, 전망 좌석!) → 고라 (산악열차). 기차 여행 자체가 코스.",
          "search": "Odakyu Romancecar Shinjuku", "lat": 35.2329, "lon": 139.1057 },
        { "id": "d4-ryokan", "time": "낮~밤", "emoji": "♨️", "title": "세츠게츠카 료칸 — 온천 & 가이세키", "who": ["가족"],
          "desc": "고라역 바로 앞 료칸 1박. 온천 들어갔다 나와서 가이세키 저녁, 유카타 입고 뒹굴뒹굴. 오늘은 아무것도 안 하는 게 일정.",
          "search": "箱根強羅 雪月花", "lat": 35.2486, "lon": 139.0508 }
      ]
    },
    {
      "id": "d5", "date": "7/9", "weekday": "목",
      "theme": "도쿄 복귀 · 안드레스 귀국 ✈️ · 진보초+아키하바라",
      "hotel": "도쿄 메리어트 시나가와 (엘리·진유)",
      "note": "안드레스는 도쿄역·진보초까지 같이 보고 거기서 귀국, 엘리·진유는 아키하바라 보고 하루 더!",
      "items": [
        { "id": "d5-onsen", "time": "오전", "emoji": "♨️", "title": "아침 온천 → 도쿄 복귀", "who": ["가족"],
          "desc": "료칸 조식 + 마지막 온천 → 로망스카로 도쿄 복귀.",
          "search": "Gora Station Hakone", "lat": 35.2486, "lon": 139.0508 },
        { "id": "d5-charstreet", "time": "오후", "emoji": "👒", "title": "도쿄역 캐릭터 스트리트", "who": ["엘리", "진유", "안드레스"],
          "desc": "도쿄역 지하 캐릭터숍 거리. 원피스 밀짚모자 스토어 도쿄역점 (상설 최대 규모)! 점프숍·포켓몬·가챠도 줄줄이. 셋이 같이.",
          "search": "Tokyo Character Street Tokyo Station", "lat": 35.6812, "lon": 139.7665 },
        { "id": "d5-jimbocho", "time": "오후", "emoji": "📚", "title": "진보초 책방거리", "who": ["엘리", "안드레스"],
          "desc": "세계 최대 헌책방 거리 — 고서점 100곳+, 빈티지 문구·판화·고지도. 목요일이라 다 열어! 안드레스도 여기까지 같이 보고 출발.",
          "search": "Jimbocho book town Tokyo", "lat": 35.6958, "lon": 139.758 },
        { "id": "d5-dad", "time": "늦오후", "emoji": "✈️", "title": "안드레스 하네다 귀국", "who": ["안드레스"],
          "desc": "도쿄역·진보초까지 같이 본 뒤 진보초에서 하네다로 (~40분) → 귀국. 먼저 안녕! 👋",
          "search": "Haneda Airport Terminal 3", "lat": 35.5444, "lon": 139.7689 },
        { "id": "d5-akiba", "time": "늦오후", "emoji": "🕹️", "title": "아키하바라", "who": ["진유"],
          "desc": "애니·가챠·피규어 본진. 가챠 기계 수백 대, 만다라케·애니메이트. 진보초 바로 옆이라 같이 묶음.",
          "search": "Akihabara Electric Town", "lat": 35.6987, "lon": 139.7714 },
        { "id": "d5-marriott", "time": "저녁", "emoji": "🏨", "title": "도쿄 메리어트 시나가와 체크인", "who": ["엘리", "진유"],
          "desc": "마지막 1박. 시나가와역 셔틀 있어서 다음날 하네다 가기 편함.",
          "search": "Tokyo Marriott Hotel Shinagawa", "lat": 35.6175, "lon": 139.7397 }
      ]
    },
    {
      "id": "d6", "date": "7/10", "weekday": "금",
      "theme": "나카노 브로드웨이 + 귀국",
      "hotel": "— (귀국)",
      "note": "짐은 호텔에 맡기고 나카노 다녀온 뒤 찾아서 하네다로. 비행기 19:55 출발이라 여유 있음.",
      "items": [
        { "id": "d6-nakano", "time": "오전~점심", "emoji": "🎰", "title": "나카노 브로드웨이", "who": ["엘리", "진유"],
          "desc": "가챠 + 만다라케 피규어(진유) + 빈티지·레트로 잡화(엘리). 둘 다 만족하는 미궁 같은 건물. 마지막 쇼핑 찬스!",
          "search": "Nakano Broadway", "lat": 35.708, "lon": 139.6657 },
        { "id": "d6-fly", "time": "19:55", "emoji": "🛫", "title": "하네다 → 김포 귀국", "who": ["엘리", "진유"],
          "desc": "시나가와 들러 짐 찾고 하네다로 (~20분). 19:55 출발 → 김포 22:15 도착. 수고했어 우리!",
          "search": "Haneda Airport Terminal 3", "lat": 35.5444, "lon": 139.7689 }
      ]
    }
  ],
  "tips": [
    { "id": "tip-ic", "emoji": "💳", "title": "교통카드 (스이카)",
      "desc": "셋 다 실물 카드 (한국 갤럭시는 모바일 스이카 안 됨). 도착날 하네다 T3에서 발급. 충전은 편의점에서 \"스이카 차지 오네가이시마스\" 하면 끝 — 편의점 결제도 이 카드로 가능. 하루 1인 ¥1,500~2,500 정도." },
    { "id": "tip-flight", "emoji": "✈️", "title": "항공편",
      "desc": "대한항공 김포↔하네다. 가는 편 7/5 09:00→11:20, 오는 편 7/10 19:55→22:15. 안드레스는 7/9 별도 귀국." },
    { "id": "tip-rain", "emoji": "☔", "title": "장마 플랜B",
      "desc": "7월 초는 장마철. 비 많이 오는 날은 이케부쿠로 선샤인시티(가챠 백화점 3,000대 + 수족관) 실내 코스로 변경." }
  ]
};
