import React from "react";
import { ItemPaper } from "src/assets/common.styled";
import DashBoardIntroduce from "src/components/DashBoardIntroduce/DashBoardIntroduce";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";

const DashboardPage = () => {
  return (
    <DashBoardLayout
      main={<DashBoardIntroduce />}
      sideRight={<ItemPaper></ItemPaper>}
    ></DashBoardLayout>
  );
};

export default DashboardPage;
