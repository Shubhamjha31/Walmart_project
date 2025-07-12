import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function LayoutWithSidebar() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-page">
        <Outlet /> 
        </div>
    </div>
  );
}

export default LayoutWithSidebar;