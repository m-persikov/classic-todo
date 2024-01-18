import { lazy } from 'react';

export const LazyMyPosts = lazy(() => delayForDemo(import('./MyPostsPage')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}