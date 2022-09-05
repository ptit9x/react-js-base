import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { ItemPaper, ButtonCusTom } from "src/assets/common.styled";
import StickyHeadTable from "../Table/StickyTable";
import { Table } from "./DashBoardIntroduce.styled";
import theme from "src/theme";

const DashBoardIntroduce = () => {
  const { t } = useTranslation();
  return (
    <>
      <ItemPaper elevation={2} square>
        <h2>{t("my-eth-balance")}</h2>
        <ButtonCusTom padd={"1.5rem 2.5rem"}>{t("buy-eth-with")}</ButtonCusTom>
        <Box sx={{ mt: 2, opacity: 0.9 }}>{t("we-accept-credit")}</Box>
        <Typography
          fontWeight={theme.typography.fontWeightLight}
          color={theme.palette.text.secondary}
          sx={{
            mt: 3,
            fontStyle: "italic",
          }}
          className="text-alight"
        >
          {t("tip-send-ETH")}
        </Typography>
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

export default DashBoardIntroduce;
