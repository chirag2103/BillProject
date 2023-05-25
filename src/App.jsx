import './style/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Customers } from './components/Customers.jsx';
import Dashboard from './components/Dashboard.jsx';
import SideBar from './components/SideBar.js';
function App() {
  return (
    <BrowserRouter>
      <div className='MainHome'>
        <SideBar />
        <div className='centrepart'>
          <Routes>
            <Route path='/' element={<Customers />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
