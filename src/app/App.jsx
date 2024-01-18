import { Suspense, lazy } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
// import { MainPage } from '../pages/Main';
import MyPosts from '../pages/MyPosts';
import { Footer } from '../components/Footer';
import Loading from '../components/Loading'

import './App.css';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <MyPosts />
      </Suspense>
      <Footer />
    </div>
  )
}