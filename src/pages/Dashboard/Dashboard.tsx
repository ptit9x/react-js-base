import React from "react";
import { ItemPaper } from "src/assets/common.styled";
import Dashboard from "src/components/DashBoard/DashBoard";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";

const DashboardPage = () => {
  return (
    <DashBoardLayout
      main={<Dashboard />}
      sideRight={<ItemPaper></ItemPaper>}
    ></DashBoardLayout>
  );
};

export default DashboardPage;
