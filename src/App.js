import { Layout } from 'antd';
import MainHeader from './components/MainHeader';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import HowToReachPage from './pages/HowToReachPage';
import ContactPage from './pages/ContactPage';

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
        <Route path='*' element={<div>Not Found</div>} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
