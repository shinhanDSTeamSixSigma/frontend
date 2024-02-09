// 필요한 순간까지 컴포넌트를 메모리상으로 올리지 않도록 지연로딩
import { Suspense, lazy } from 'react';

const { createBrowserRouter } = require('react-router-dom');

// 컴포넌트 처리 끝나기 전 로딩
const Loading = <div>Loading....</div>;
const Main = lazy(() => import('../pages/main/MainPage'));
const Farm = lazy(() => import('../pages/member/farm/FarmListPage'));

// farmer 16개
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// main 4개
//
//
//
//
// member 24개
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//식물 기록-다이어리
const Diary = lazy(() => import('../pages/member/mypage/diary/DiaryPage'));
const DiaryEdit = lazy(() =>
  import('../pages/member/mypage/diary/DiaryEditPage'),
);
//포인트 결제 내역
const PointDetail = lazy(() =>
  import('../pages/member/mypage/point/PointDetailPage'),
);

// 기본 라우팅 설정(어떤 경로에 어떤 컴포넌트 줄건지)
const root = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: 'farm-list',
    element: (
      <Suspense fallback={Loading}>
        <Farm />
      </Suspense>
    ),
  },
  {
    path: 'crop-diary',
    element: (
      <Suspense fallback={Loading}>
        <Diary />
      </Suspense>
    ),
  },
  {
    path: 'crop-diary/crop-diary-edit',
    element: (
      <Suspense fallback={Loading}>
        <DiaryEdit />
      </Suspense>
    ),
  },
  {
    path: 'point-result',
    element: (
      <Suspense fallback={Loading}>
        <PointDetail />
      </Suspense>
    ),
  },
]);

export default root;
