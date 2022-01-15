import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import HowToReachPage from './pages/HowToReachPage';
import { Layout } from 'antd';
import { MainHeader } from './components/MainHeader';
import React from 'react';

function App() {
  return (
    <>
      <Layout className='layout'>
        <MainHeader />
      </Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='events' element={<EventsPage />} />
        <Route path='how-to-reach' element={<HowToReachPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
