import { lazy } from 'react';

export const LazyMessages = lazy(() => delayForDemo(import('./MessagesPage')));

function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    }).then(() => promise);
}