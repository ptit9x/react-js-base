import React from "react";
import { ItemPaper } from "src/components/common/DashBoard.styled";
import DashBoardLayout from "src/layouts/DashBoardLayout/DashBoard";
import DashboardComponent from "../../components/Dashboard/Dashboard";

const Dashboard = () => {
  return (
    <DashBoardLayout
      main={<DashboardComponent />}
      sideRight={<ItemPaper>jdjj</ItemPaper>}
    ></DashBoardLayout>
  );
};

export default Dashboard;
