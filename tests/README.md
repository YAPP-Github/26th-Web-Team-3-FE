# Playwright Test Suite

이 프로젝트는 타임캡슐 애플리케이션의 종합적인 테스트 스위트입니다.

## 테스트 파일 구조

```
tests/
├── README.md                    # 이 파일
├── utils/
│   └── test-helpers.ts         # 공통 테스트 유틸리티
├── home.spec.ts                # 홈페이지 기능 테스트
├── auth.spec.ts                # 인증 기능 테스트
├── navigation.spec.ts          # 네비게이션 테스트
├── performance.spec.ts         # 성능 및 로딩 테스트
├── comprehensive.spec.ts       # 종합 테스트 스위트
```

## 테스트 실행 방법

### 모든 테스트 실행
```bash
pnpm test
```

### 특정 테스트 파일 실행
```bash
pnpm test home.spec.ts
pnpm test auth.spec.ts
pnpm test navigation.spec.ts
```

### 특정 브라우저에서 실행
```bash
pnpm test --project=chromium
pnpm test --project=firefox
pnpm test --project=webkit
```

### UI 모드로 실행 (테스트 결과 시각화)
```bash
pnpm test --ui
```

### 헤드리스 모드 비활성화 (브라우저 창 표시)
```bash
pnpm test --headed
```

## 테스트 커버리지

### 1. 홈페이지 테스트 (`home.spec.ts`)
- ✅ 메인 섹션 표시 확인
- ✅ 네비게이션 버튼 기능
- ✅ 사용자 수 표시
- ✅ 물리 엔진 요소 확인
- ✅ 플로팅 스타 애니메이션
- ✅ 반응형 디자인

### 2. 네비게이션 테스트 (`navigation.spec.ts`)
- ✅ 페이지 간 이동
- ✅ 브라우저 뒤로/앞으로 버튼
- ✅ 직접 URL 접근
- ✅ 404 페이지 처리
- ✅ 키보드 네비게이션
- ✅ 모바일 네비게이션

### 3. 성능 테스트 (`performance.spec.ts`)
- ✅ 페이지 로딩 시간 측정
- ✅ 이미지 로딩 확인
- ✅ API 호출 효율성
- ✅ 페이지 전환 성능
- ✅ 느린 네트워크 환경
- ✅ 오프라인 모드 처리
- ✅ 메모리 사용량 최적화

### 4. 종합 테스트 (`comprehensive.spec.ts`)
- ✅ 전체 사용자 여정
- ✅ 성능 및 로딩 테스트
- ✅ 에러 처리 및 엣지 케이스
- ✅ 반응형 디자인
- ✅ 네트워크 조건
- ✅ 메모리 및 성능
- ✅ 키보드 접근성
- ✅ 브라우저 호환성
- ✅ API 통합
- ✅ 동시 사용자 상호작용

## 테스트 유틸리티 (`test-helpers.ts`)

공통 테스트 기능을 제공하는 유틸리티 클래스:

### 주요 메서드
- `waitForPageLoad()` - 페이지 로딩 대기
- `navigateToHome()` - 홈페이지로 이동
- `navigateToExplore()` - 탐색 페이지로 이동
- `navigateToCreateCapsule()` - 캡슐 생성 페이지로 이동
- `checkMainElementsVisible()` - 메인 요소 표시 확인
- `measurePageLoadTime()` - 페이지 로딩 시간 측정
- `checkImagesLoaded()` - 이미지 로딩 확인
- `checkConsoleErrors()` - 콘솔 에러 확인
- `simulateSlowNetwork()` - 느린 네트워크 시뮬레이션
- `setViewportSize()` - 뷰포트 크기 설정
- `testResponsiveDesign()` - 반응형 디자인 테스트

## 테스트 환경 설정

### Playwright 설정 (`playwright.config.ts`)
- 테스트 디렉토리: `./tests`
- 기본 URL: `http://localhost:3000`
- 지원 브라우저: Chromium, Firefox, WebKit
- 웹서버: `pnpm run start`

### 환경 변수
- `CI`: CI 환경에서만 재시도 및 제한된 워커 사용
- `CI` 환경에서는 2회 재시도, 1개 워커 사용

## 테스트 작성 가이드라인

### 1. 테스트 구조
```typescript
import { expect, test } from "@playwright/test";

test.describe("기능명", () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전 실행할 설정
  });

  test("테스트 설명", async ({ page }) => {
    // 테스트 로직
    await expect(element).toBeVisible();
  });
});
```

### 2. 요소 선택자 우선순위
1. `getByRole()` - 접근성과 의미론적 의미
2. `getByText()` - 사용자가 보는 텍스트
3. `getByTestId()` - 테스트 전용 ID
4. `locator()` - CSS 선택자 (최후의 수단)

### 3. 대기 전략
- `waitForLoadState()` - 페이지 로딩 상태
- `waitForURL()` - URL 변경 대기
- `waitForTimeout()` - 고정 시간 대기 (최소한으로 사용)

### 4. 어설션
- `toBeVisible()` - 요소 표시 확인
- `toHaveText()` - 텍스트 내용 확인
- `toHaveURL()` - URL 확인
- `toHaveCount()` - 요소 개수 확인

## 문제 해결

### 일반적인 문제들

1. **테스트가 실패하는 경우**
   - 개발 서버가 실행 중인지 확인: `pnpm run start`
   - 브라우저가 설치되었는지 확인: `pnpm exec playwright install`

2. **느린 테스트**
   - `waitForTimeout()` 대신 적절한 대기 조건 사용
   - 불필요한 네트워크 요청 최소화

3. **플레이크한 테스트**
   - 적절한 대기 조건 사용
   - 테스트 격리 확인
   - 상태 초기화 확인

### 디버깅 팁

1. **헤드리스 모드 비활성화**
   ```bash
   pnpm test --headed
   ```

2. **UI 모드 사용**
   ```bash
   pnpm test --ui
   ```

3. **특정 테스트만 실행**
   ```bash
   pnpm test --grep "테스트명"
   ```

4. **스크린샷 캡처**
   ```typescript
   await page.screenshot({ path: 'screenshot.png' });
   ```

## CI/CD 통합

### GitHub Actions 예시
```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: pnpm install
      - run: pnpm exec playwright install
      - run: pnpm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## 성능 기준

- 홈페이지 로딩: < 3초
- 페이지 전환: < 1초
- 이미지 로딩: 모든 이미지가 적절한 크기로 로드
- 콘솔 에러: 없음
- 실패한 요청: 없음

## 추가 리소스

- [Playwright 공식 문서](https://playwright.dev/)
- [Playwright 테스트 가이드](https://playwright.dev/docs/intro)
- [Playwright API 참조](https://playwright.dev/docs/api/class-playwright)
