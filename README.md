# SafetyWise AI Platform

## 🚀 2025 KOMIPO 혁신 50대 과제

**AI 기반 스마트 안전관리 및 고령친화 직무재설계 통합시스템**

## 📋 프로젝트 개요

SafetyWise AI Platform은 AI와 IoT 기술을 활용하여 발전소 안전을 혁신하고, 세대간 지식 전수를 통해 지속가능한 안전 문화를 구축하는 차세대 통합 안전관리 시스템입니다.

### 🎯 핵심 가치 제안

- **Zero Incident**: 중대재해 제로화를 위한 예측적 안전관리
- **Smart Learning**: AI 기반 개인 맞춤형 안전 교육
- **Knowledge Transfer**: 베테랑 노하우의 디지털 전수
- **ESG Integration**: 통합 ESG 관리 및 자동 보고

## 🔧 기술 스택

### Frontend
- **React 18** + **TypeScript**
- **Vite** (빌드 도구)
- **Tailwind CSS** (스타일링)
- **Lucide React** (아이콘)
- **Framer Motion** (애니메이션)
- **React Router DOM** (라우팅)

### 디자인 시스템
- **컬러 팔레트**: Primary Blue (#2C5AA0), Success Green (#4CAF50), Warning Orange (#FF9800), Danger Red (#F44336)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **접근성**: 고령자 친화적 UI (큰 폰트, 명확한 색상 대비)

### PWA 지원
- **Service Worker** 캐싱
- **웹 앱 매니페스트**
- **오프라인 지원**
- **모바일 설치** 가능

## 🌟 주요 기능

### 1. 실시간 안전 모니터링
- 웨어러블 센서 데이터 수집
- AI 영상 분석 (위험 행동 감지)
- 자동 알림 및 비상 대응
- 개인별 안전 프로필 관리

### 2. 지식 전수 플랫폼
- VR/AR 기반 교육 콘텐츠
- AI 챗봇 질의응답 시스템
- 멘토-멘티 매칭 시스템
- 학습 진도 추적 및 평가

### 3. ESG 통합 대시보드
- 실시간 ESG KPI 모니터링
- IFRS S1/S2 기준 자동 보고서
- 이해관계자별 맞춤 뷰
- 개선 과제 추천 시스템

### 4. 개인 맞춤형 안전 교육
- 개인 역량 진단
- 맞춤형 교육 과정 생성
- 실습 시뮬레이션
- 성과 평가 및 피드백

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/komipo/safetywise-ai-platform.git
cd safetywise-ai-platform
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 `http://localhost:3000` 접속

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📱 PWA 기능

이 애플리케이션은 Progressive Web App으로 제작되어 다음 기능을 지원합니다:

- **오프라인 사용** 가능
- **모바일 홈 화면에 설치** 가능
- **푸시 알림** 지원
- **백그라운드 동기화**
- **반응형 디자인**

## 📊 성능 목표

| 지표 | 목표값 | 측정 방법 |
|------|--------|----------|
| 응답 시간 | < 2초 (일반 조회) | Load Testing |
| 실시간성 | < 500ms (위험 감지) | Latency Monitoring |
| 가용성 | 99.9% | Uptime Monitoring |
| 동시 사용자 | 1,000명 | Performance Testing |

## 🎯 핵심 성과 지표 (KPIs)

### 비즈니스 KPI
- **중대재해 발생률**: 0% 달성 목표
- **안전사고 발생률**: 80% 이상 감소
- **교육 완료율**: 95% 이상
- **투자 수익률**: 28.5% 이상

### 기술 KPI
- **AI 위험 감지 정확도**: 95% 이상
- **시스템 가용성**: 99.9% 이상
- **평균 응답 시간**: 2초 이하

## 👥 타겟 사용자

- **안전관리자**: 발전소 안전 총괄
- **현장 작업자**: 일선 운영/정비 직원
- **베테랑 직원**: 숙련 기술 보유자
- **신입/전환 직원**: 학습이 필요한 직원
- **경영진**: 의사결정권자

## 🏗️ 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Layout.tsx      # 메인 레이아웃
│   ├── StatCard.tsx    # 통계 카드
│   ├── SafetyHeatmap.tsx # 안전 히트맵
│   └── ...
├── pages/              # 페이지 컴포넌트
│   ├── Dashboard.tsx   # 대시보드
│   ├── Monitoring.tsx  # 실시간 모니터링
│   ├── LearningCenter.tsx # 교육 센터
│   ├── Reports.tsx     # ESG 보고서
│   └── Profile.tsx     # 사용자 프로필
├── styles/             # 스타일 파일
├── utils/              # 유틸리티 함수
└── types/              # TypeScript 타입 정의
```

## 🔮 향후 계획

### Phase 1: MVP 개발 (3개월)
- [x] 기본 대시보드 UI 개발
- [x] 실시간 데이터 수집 시스템
- [x] 기본 알림 시스템
- [ ] 사용자 인증 및 권한 관리

### Phase 2: AI 기능 통합 (6개월)
- [ ] 컴퓨터 비전 모델 통합
- [ ] 생체 데이터 분석 AI
- [ ] 위험 예측 알고리즘
- [ ] 개인 맞춤형 안전 교육

### Phase 3: 지식 전수 플랫폼 (9개월)
- [ ] VR 콘텐츠 제작 도구
- [ ] AI 챗봇 시스템
- [ ] 멘토링 플랫폼
- [ ] 학습 분석 시스템

### Phase 4: ESG 통합 (12개월)
- [ ] ESG 대시보드
- [ ] 자동 보고서 생성
- [ ] 외부 시스템 연동
- [ ] 고도화 및 최적화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 📞 연락처

**프로젝트 팀**: KOMIPO 디지털혁신팀
- 이메일: innovation@komipo.co.kr
- 웹사이트: https://www.komipo.co.kr

## 🙏 감사의 말

이 프로젝트는 KOMIPO의 안전하고 지속가능한 미래를 위한 혁신적인 도전입니다. 모든 관련자들의 노고에 감사드립니다.

---

**Made with ❤️ for KOMIPO 2025 혁신 50대 과제**