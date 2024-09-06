import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import SecondHome from './SecondHome';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city') || 'Bhubaneswar';
  return (
    <div>
      <div className="row mt-5 bg-secondary mb-5">
        
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-2 me-0 ">
          <Navbar />
          <div className="row g-0 d-flex align-items-stretch background-image3 rounded-bottom">
            <div className="col-md-7 d-flex flex-column ">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Home city={city} />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
            <div className="col-md-5 d-flex flex-column">
              <div className="w-100" style={{minHeight: '100vh'}}>
                <SecondHome />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
