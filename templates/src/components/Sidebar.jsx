import React, { useState } from 'react';
import {  Link} from "react-router-dom";
import '../styles/sidebar.css';

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
  
      <div className='outerborder'>
        <div className='sidebar'>
          <div className='logo-con'>
           <span onClick={hiddenBar} className="material-symbols-outlined logo">warehouse</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">Dashboard</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">local_shipping</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">monitoring</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">inventory_2</span>
          </div>
          <div className='logo-object'>
            <span onClick={hiddenBar} className="material-symbols-outlined object">trending_up</span>
          </div>
          <div className='notification'>
            <span onClick={hiddenBar} className="material-symbols-outlined noti-icon">notifications_active</span>
          </div>

        <div className='profile-con'>
           <span className="material-symbols-outlined profile">account_circle</span>

         <div className='profile-content'>
           <div className='profile-info'>
              <span class="material-symbols-outlined pic">account_circle</span>
              <div>
                <p className='profile-name'>John Doe</p> 
                <p className='profile-email'>johndoe@gmail.com</p>
              </div>
            </div>

             <div className='profile-options'>
                <div className='profile-link'>
                  <span class="material-symbols-outlined">person</span>
                  <a href="/">View profile </a></div>
                <div className='profile-link'>
                  <span class="material-symbols-outlined">settings_account_box</span>
                  <a href="/">Account settings </a>
                </div>
                <div className='profile-link'>
                  <span class="material-symbols-outlined">deployed_code_history</span>
                  <a href="/">Updates</a></div>
                <div className='profile-link'>
                  <span class="material-symbols-outlined">logout</span>
                  <a href="/">Logout </a></div>
                </div>
          </div>
         </div>

        </div>

        <div id='Hidden' className='Hidden-bar' style={customStyle}>
          <button style={{ float: 'right', margin: '8px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }} onClick={hiddenBar}>&times;</button>
          <div className='outline'>
            <p>Inventory</p>
          </div>
          <div className='link1'>
            <Link to='/' >Dashboard</Link> <br />
          </div>
          <div className='links'>
            <Link to='/suppliers' >Suppliers</Link> <br />
          </div>
          <div className='links'>
            <Link to='/sales' >Sales</Link> <br />
          </div>
          <div className='links'>
            <Link to='/inventory' >Inventory</Link>
          </div>
          <div className='links'>
            <Link to='/analysis' >Trend analysis</Link>
          </div>
        </div>
      </div>
   
    );
}

export default Sidebar;
