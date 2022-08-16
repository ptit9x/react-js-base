import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthenticatedGuard from "./guards/AuthenticatedGuard";
import PublicGuard from "./guards/PublicGuard";
import { PATH } from "./constants/paths";
import MainLayout from "./layouts/MainLayout/MainLayout";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));

const RouterConfig = () => {
  const createRoutes = useRoutes([
    {
      path: PATH.LOGIN,
      element: (
        <PublicGuard>
          <Login />
        </PublicGuard>
      )
    },
    {
      path: PATH.HOME,
      element: (
        <AuthenticatedGuard>
          <MainLayout />
        </AuthenticatedGuard>
      ),
      children: [
        {
          path: PATH.HOME,
          element: <Navigate to={PATH.DASHBOARD} />
        },
        {
          path: PATH.DASHBOARD,
          element: <Home />
        }
      ]
    }
  ]);
  return createRoutes;
};

export default RouterConfig;
