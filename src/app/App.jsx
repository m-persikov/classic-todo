import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import Loading from '../components/Loading';

import { MainPage } from '../pages/Main';
import Posts from '../pages/MyPosts';
import Messages from '../pages/Messages';

import './App.css';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Footer />
      <Routes>
        <Route path='/' element={
          // <Suspense fallback={<Loading />}>
          <MainPage />
          // </Suspense>
        } />
        <Route path='/messages' element={
          <Suspense fallback={<Loading />}>
            <Messages />
          </Suspense>
        } />
        <Route path='/posts' element={
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        } />
      </Routes>
    </div>
  )
}