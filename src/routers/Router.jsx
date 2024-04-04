import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root'
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Login from '../pages/Login';
import Register from '../pages/Register';
import News from '../pages/News';
import PrivateRoute from './PrivateRoute';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/news",
          element:<PrivateRoute>
            <News />

          </PrivateRoute>
           ,
        },
      ],
    },
  ]);
  export default router; 