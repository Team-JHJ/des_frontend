# DES ⚡
Distributed Energy resources monitoring System  
분산에너지 자원 모니터링 시스템

👨‍💻 **개발 인원**: 2명  
🗓️ **개발 기간**: 2024.10 ~ 2024.11

## 📌 프로젝트 개요
DES는 분산 에너지 시스템 관리를 위한 웹으로, 가정용 에너지 시설(DER, Homeload, Inverter, SmartMeter)과  
VPP(Virtual Power Plant)의 모니터링 및 관리 기능을 제공합니다.

### 🫧 주요 기능
- **가정 에너지 시설 관리**: 등록 / 수정 / 삭제
- **실시간 에너지 데이터 모니터링** : 데이터를 표 형태로 시각화
- **VPP 통합 관리**: vpp 데이터 수정
- **고장 상태 추적**: 시설별 이상 상태 확인
- **데이터 편집**: 상세 페이지 내 리스트 수정

## 🛠️ 기술 스택

**Frontend**  
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

**Style**  
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">

**Data Fetching**  
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">

## ⚙️ 기술 선택 이유
- **Tailwind CSS**
    - 모바일 우선 반응형 UI에 최적화
    - 짧은 개발 기간(1개월) 내 빠른 개발 가능

- **Axios vs Fetch → Axios**
    - Axios 인스턴스를 사용하여 기본 설정 및 헤더 관리, 기능별 모듈 분리 → 재사용성·유지보수성 향상
    - Fetch 대비 반복 코드 감소, 응답 처리·에러 처리 등 개발 효율성 향상

## 📂 라우팅 구조
react-router-dom v6 사용
```
/ (BasePage)
├── / (MainPage)              # 가정 목록
├── /vpp (VppPage)            # VPP 모니터링
├── /house/:id/:category      # 카테고리별 상세
└── /house/:id/:category/edit # 데이터 편집
```

## 🚧 문제 및 해결 방안

#### 1. 모달 내부 클릭 시 닫힘 방지
- **문제**: 모달·툴팁 클릭 시 이벤트 버블링으로 닫히는 현상 발생
- **해결**: 내부 요소에서 `e.stopPropagation()` 호출로 이벤트 전파 차단
```jsx
onClick={(e) => e.stopPropagation()}
```

#### 2. 모달 상태 동기화 문제
- **문제**: 모달에서 데이터 추가 후 부모 상태가 즉시 반영되지 않음
- **해결**: onSuccess 콜백을 부모로 전달 → 모달에서 API 요청 성공 시 실행 → 부모 컴포넌트가 최신 데이터 다시 불러오기
```jsx
// 부모 컴포넌트 (MainPage.jsx)
const updateHouse = async () => {
  await getHouse()  // 최신 데이터로 갱신
}
<AddHomeModal closeModal={modalClose} onSuccess={updateHouse} />

// 자식 컴포넌트 (AddHomeModal.jsx)
const response = await houseAPI.addHouse(houseName)
if (response.status === 200 || response.status === 201) {
  await onSuccess()   // 부모의 updateHouse 실행
}
```
실행 흐름:
추가 버튼 클릭 → API 요청 → onSuccess 실행 → 부모 상태 갱신 → 모달 닫기 → 최신 목록 반영

#### 3. forwardRef를 통한 DOM 참조
- **문제**: 외부 클릭 시 툴팁 닫기 기능 구현 필요 → 부모가 툴팁 DOM에 직접 접근해야 하지만 ref 전달 불가
- **해결**: forwardRef를 사용하여 부모에서 전달한 ref를 자식 DOM에 연결
```jsx
import { forwardRef } from "react"

const Tooltip = forwardRef(function Tooltip({ tooltipState, data }, ref) {
  return <div ref={ref}> ... </div>
})
```
부모가 툴팁의 DOM을 직접 참조하여 외부 클릭 감지 및 제어 가능