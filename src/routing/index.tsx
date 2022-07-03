import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NewsPage = lazy(() => import('../pages/news/index'));

export const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<NewsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
