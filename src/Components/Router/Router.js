import { useRoutes } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import PublicRoutes from "../PublicRoutes/PublicRoutes";

const Router = () => {
  return useRoutes([
    {
      path: '/login',
      element: <PublicRoutes redirectTo={'/'}><div>Login Page</div></PublicRoutes>
    },{
      path: '/sign-up',
      element: <PublicRoutes redirectTo={'/'}><div>Sign-up Page</div></PublicRoutes>
    },{
      path: '/',
      element: <Layout />,
      children: [
        {
          element: <ProtectedRoutes redirectTo='/login'/>,
          children: [
            {
              path: '/',
              element: <div>Home</div>
            },
            {
              path: '/dashboard',
              element: <div>Dashboard</div>
            },{
              path: '/product',
              element: <div>Product-Detail</div>
            },{
              path: '/profile',
              element: <div>Profile</div>
            }
          ]
        }
      ],
    },
    {
      path: '*',
      element: <div>Page not found.</div>
    }
  ]);
}

export default Router;