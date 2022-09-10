import React from "react";
import DashBoardIntroduce from "src/components/DashBoardIntroduce/DashBoardIntroduce";
import Swap from "src/components/Swap/Swap";
import ContentLayout from "src/layouts/ContentLayout/ContentLayout";

const DashboardPage = () => {
  return (
    <ContentLayout
      main={<DashBoardIntroduce />}
      sideRight={<Swap></Swap>}
    ></ContentLayout>
  );
};

export default DashboardPage;
