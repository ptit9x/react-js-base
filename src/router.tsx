import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { PATH } from "./constants/paths";
import AuthenticatedGuard from "./guards/AuthenticatedGuard";
// import PublicGuard from "./guards/PublicGuard";
const MainLayout = lazy(() => import("./layouts/MainLayout/MainLayout"));
const GuestLayout = lazy(() => import("./layouts/GuestLayout/GuestLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const AccessWallet = lazy(() => import("./pages/AccessWallet/AccessWallet"));
const CreateWallet = lazy(() => import("./pages/CreateWallet/CreateWallet"));
const DApps = lazy(() => import("./pages/DApps/DApps"));
const NFT = lazy(() => import("./pages/NFT/NFT"));
const SendToken = lazy(() => import("./pages/SendToken/SendToken"));
const SwapToken = lazy(() => import("./pages/SwapToken/SwapToken"));
const DeployContract = lazy(
  () => import("./pages/DeployContract/DeployContract")
);
const InteractContract = lazy(
  () => import("./pages/InteractContract/InteractContract")
);

const RouterConfig = () => {
  const createRoutes = useRoutes([
    {
      path: PATH.WALLET,
      element: <GuestLayout />,
      children: [
        {
          path: PATH.ACCESS_WALLET,
          element: <AccessWallet />
        },
        {
          path: PATH.CREATE_WALLET,
          element: <CreateWallet />
        }
      ]
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
          element: <Dashboard />
        },
        {
          path: PATH.NFT,
          element: <NFT />
        },
        {
          path: PATH.DAPPS,
          element: <DApps />
        },
        {
          path: PATH.DEPLOY_CONTRACT,
          element: <DeployContract />
        },
        {
          path: PATH.INTERACT_CONTRACT,
          element: <InteractContract />
        },
        {
          path: PATH.SETTINGS,
          element: <></>
        },
        {
          path: PATH.SEND_TOKEN,
          element: <SendToken />
        },
        {
          path: PATH.SWAP_TOKEN,
          element: <SwapToken />
        }
      ]
    }
  ]);
  return createRoutes;
};

export default RouterConfig;
