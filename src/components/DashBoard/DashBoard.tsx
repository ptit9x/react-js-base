import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { ItemPaper, ButtonCusTom } from "src/assets/common.styled";
import StickyHeadTable from "../Table/StickyTable";
import { Table } from "./DashBoard.styled";

interface DasboardProps {
  loading?: boolean;
}

const Dashboard = ({ loading }: DasboardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <ItemPaper elevation={2} square>
        <h2>{t("my-eth-balance")}</h2>
        <ButtonCusTom>{t("buy-crypto-now")}</ButtonCusTom>
        <div>{t("we-accept-credit")}</div>
        <span className="text-alight">{t("tip-you-can-send-your-ETH")}</span>
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
          <h3>{t("my-token-value")}</h3>
          <Typography>{t("+custom")}</Typography>
        </Box>
        <StickyHeadTable></StickyHeadTable>
      </Table>
    </>
  );
};

export default Dashboard;
