import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import '../styles/sidebar.css';
import Home from '../pages/Home';


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    function hiddenBar() {
     setIsOpen(prev => !prev)
    }

    const customStyle = {
      width: isOpen ? '200px' : '0px',
      opacity: isOpen ? 1 : 0,
      transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
      overflow: 'hidden',
      display: 'block',
    };

    return (
      <BrowserRouter>
      <div className='outerborder'>
        <div className='sidebar'>
          <div className='logo-con'>
           <span onClick={hiddenBar} className="material-symbols-outlined logo">warehouse</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">home</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">local_shipping</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">monitoring</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">all_inbox</span>
          </div>
        </div>

        <div id='Hidden' className='Hidden-bar' style={customStyle}>
           <div className='outline'>
            <p>Inventory</p>
          </div>
          <div className='link1'>
            <Link to='/home' >Home Page</Link> <br />
          </div>
          <div className='links'>
            <Link to='/suppliers' >Suppliers</Link> <br />
          </div>
          <div className='links'>
            <Link to='/graph' >Profit Graph</Link> <br />
          </div>
          <div className='links'>
            <Link to='/Item List' >Items List</Link>
          </div>
        </div>
      </div>
     
      </BrowserRouter>
    );
}

export default Sidebar;
