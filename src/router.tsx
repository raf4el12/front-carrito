import { createBrowserRouter } from "react-router-dom";
import ClientPage from './pages/Client';
import ProductPage from './pages/Product';
import OrderPage from './pages/Order';
import MainPage from './pages/Main';
import LayoutWithNavbar from './components/LayoutWithNavbar'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithNavbar />, 
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/clients',
        element: <ClientPage />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/orders',
        element: <OrderPage />
      }
    ]
  },
]);

export default router;
