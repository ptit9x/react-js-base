import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { ItemPaper, ButtonCusTom } from "src/assets/common.styled";
import StickyHeadTable from "../Table/StickyHeadTable";
import { Table } from "./DashBoard.styled";

interface DasboardProps {
  loading?: boolean;
}

const Dashboard = ({ loading }: DasboardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <ItemPaper elevation={2} square>
        <h2>{t("My ETH balance is empty")}</h2>
        <ButtonCusTom padd={0.7}>{t("Buy Crypto Now")}</ButtonCusTom>
        <div>{t("We accept Credit card Visa")}</div>
        <span className="text-alight">
          {t("Tip: You can also send your ETH from another wallet!")}
        </span>
      </ItemPaper>

      <Table elevation={2} square>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 1rem",
            alignItems: "center",
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
