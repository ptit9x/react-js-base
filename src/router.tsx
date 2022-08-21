import { Navigate, useRoutes } from "react-router-dom";

import { PATH } from "./constants/paths";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AccessWallet from "./pages/AccessWallet/AccessWallet";
import CreateWallet from "./pages/CreateWallet/CreateWallet";
import DApps from "./pages/DApps/DApps";
import Dashboard from "./pages/Dashboard/Dashboard";
import DeployContract from "./pages/DeployContract/DeployContract";
import InteractContract from "./pages/InteractContract/InteractContract";
import NFT from "./pages/NFT/NFT";
import SendToken from "./pages/SendToken/SendToken";
import SwapToken from "./pages/SwapToken/SwapToken";

const RouterConfig = () => {
  const createRoutes = useRoutes([
    {
      path: PATH.ACCESS_WALLET,
      element: (
        // <PublicGuard>
        <AccessWallet />
        // </PublicGuard>
      )
    },
    {
      path: PATH.CREATE_WALLET,
      element: (
        // <PublicGuard>
        <CreateWallet />
        // </PublicGuard>
      )
    },
    {
      path: PATH.HOME,
      element: (
        // <AuthenticatedGuard>
        <MainLayout />
        //  </AuthenticatedGuard>
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
