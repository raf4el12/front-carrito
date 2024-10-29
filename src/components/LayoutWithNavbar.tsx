
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const LayoutWithNavbar = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default LayoutWithNavbar;
