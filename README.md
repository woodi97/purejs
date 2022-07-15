# PureJS

## 프로젝트 시작방법

1. yarn
2. yarn start:dev

## 주의사항

1. tsconfig.json에서 target을 `commonJS`로 설정하지 마세요. tree-shaking이 제대로 동작하지 않습니다.
2. 리액트 처럼 `<div />`같이 한 태그안에 클로징 태그를 넣지 마세요. 의도치 않은 동작을 할 수 있습니다

## 기능

1. 브라우저 라우터
2. 컴포넌트 기반 제작(라이프 사이클 확인 필요)
