import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import LayoutWithSidebar from './pages/MainLayout';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <Routes>
    //   <Route path="/auth" element={<Auth />} />

    //   <Route element={<LayoutWithSidebar />}>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/suppliers" element={<Inventory />} />
    //   </Route>
    // </Routes>
    <Sidebar />
  );
}

export default App;