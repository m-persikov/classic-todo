import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { MainPage } from '../pages/Main/MainPage';
import { Footer } from '../components/Footer';

import './App.css';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Footer />
      <Sidebar />
      <MainPage />
    </div>
  )
}