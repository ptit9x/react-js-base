import { ItemPaper } from "src/assets/common.styled";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";

import SendTokenPage from "./SendToken";

const SendToken = () => {
  return (
    <DashBoardLayout
      main={<SendTokenPage />}
      sideRight={<ItemPaper></ItemPaper>}
      disableSide
    ></DashBoardLayout>
  );
};

export default SendToken;
