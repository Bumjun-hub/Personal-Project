# Project M – Game Promotion Website

TypeScript 학습을 목적으로 제작한 **소규모 게임 홍보 웹사이트**입니다.  
대규모 기능 구현보다는 **React + TypeScript 구조 이해와 타입 적용 경험**에 집중하여  
프로젝트 범위를 의도적으로 제한했습니다.

게임 홍보 사이트라는 명확한 콘셉트 안에서  
컴포넌트 분리, 상태 관리, DOM 타입 지정 등  
실무에서 자주 사용되는 패턴을 연습하는 것을 목표로 했습니다.

---

## 📌 프로젝트 목적

- React 환경에서 TypeScript를 사용하는 흐름에 익숙해지기
- 상태, 이벤트, DOM 접근에 타입을 적용하며 안정성 체감
- 복잡한 비즈니스 로직 없이 **UI 중심 컴포넌트 설계 경험**
- 작은 규모에서도 구조와 가독성을 고려한 코드 작성 연습

---

## 🛠 Tech Stack

- **Frontend**
  - React
  - **TypeScript**
  - Vite
- **Styling**
  - CSS (컴포넌트별 분리)

---

## 📂 프로젝트 구조

src/
└─ components/
├─ Header.tsx / Header.css
├─ Hero.tsx / Hero.css
├─ About.tsx / About.css
└─ Features.tsx / Features.css


- 컴포넌트 단위로 명확한 책임 분리
- UI / 로직 분리를 고려한 구조

---

## 🎮 주요 구현 내용

### 1. TypeScript 적용 전략

- 상태 값에 명확한 타입 정의
  ```ts
  type HoverZone = "left" | "center" | "right" | null;


### 2. Hero 섹션 – Hover 기반 인터랙션 UI

3개의 패널로 구성된 Hero 섹션

Hover 시:

패널 확대 및 Skew 해제

이미지 Zoom 효과

오버레이 텍스트 노출

시각적 효과는 CSS로 처리하고
상태 관리 및 제어는 TypeScript로 담당

학습 포인트

상태 기반 UI 제어

스타일과 로직의 역할 분리

### 3. About 섹션 – 스크롤 진입 애니메이션

IntersectionObserver를 활용한 Fade-up 애니메이션

관찰 대상 요소를 useRef로 관리

비교적 단순한 기능이지만 실제 서비스에서 자주 쓰이는 패턴 학습

### 4. Features 섹션 – 게임 시스템 소개

전투 시스템 (공격 / 패링 / 가드)

GIF + 텍스트 조합 레이아웃

좌우 반전 레이아웃으로 전투 리듬 표현

퀘스트 시스템

와이드 GIF 구성

object-fit: cover를 활용해 비율 문제 해결

프로젝트 규모

페이지 수: Single Page

컴포넌트 수: 4개

데이터 처리: 정적 데이터 기반

의도

기능 확장보다는
TypeScript를 사용하는 흐름과 패턴을 이해하는 데 집중


