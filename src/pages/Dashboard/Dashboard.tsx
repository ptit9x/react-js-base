import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import DashBoardLayout from "src/layouts/DashBoardLayout/DashBoard";
import {
  ItemPaper,
  ButtonCusTom,
  Table
} from "src/components/common/DashBoard.styled";
import StickyHeadTable from "src/components/common/StickyHeadTable";

const Dashboard = () => {
  return (
    <DashBoardLayout
      main={<DashboardComponent />}
      sideRight={<ItemPaper>jdjj</ItemPaper>}
    ></DashBoardLayout>
  );
};

const DashboardComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <ItemPaper elevation={2} square>
        <h2>{t("My ETH balance is empty")}</h2>
        <ButtonCusTom>{t("Buy ETH with a Credit card")}</ButtonCusTom>
        <Typography>{t("We accept Credit card Visa")}</Typography>
        <Typography className="text-alight">
          {t("Tip: You can also send your ETH from another wallet!")}
        </Typography>
      </ItemPaper>

      <Table elevation={2} square>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 1rem",
            alignItems: "center"
          }}
        >
          <h3>{t("My Token Value")}</h3>
          <Typography>{t("+Custom")}</Typography>
        </Box>
        <StickyHeadTable></StickyHeadTable>
      </Table>
    </>
  );
};

export default Dashboard;
