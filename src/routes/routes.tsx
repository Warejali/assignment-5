import App from '@/App';
import AddNewBook from '@/pages/AddNewBook';
import Checkout from '@/pages/Checkout';
import EditProduct from '@/pages/EditProduct';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/addproduct',
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/EditProduct/:id',
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
