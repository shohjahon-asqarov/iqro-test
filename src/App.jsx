import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// pages
import Categories from './pages/Categories';
import Test from './pages/Test';

// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// css for loader
import './css/loader.css';

const App = () => {

  // initialize aos
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/test" element={<Test />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}


export default App