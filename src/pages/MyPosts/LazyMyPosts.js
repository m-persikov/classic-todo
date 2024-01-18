import { lazy } from 'react';

export const LazyMyPosts = lazy(() => delayForDemo(import('./MyPostsPage')));

// Add a fixed delay so you can see the loading state
//TODO: test it.
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}