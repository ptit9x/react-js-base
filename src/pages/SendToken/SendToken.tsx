import React from "react";
import { Box, Typography, Grid, Autocomplete, TextField } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/system";
import {
  ButtonClear,
  ButtonDisable,
  FeeTypo,
  ItemPaper,
  PrimaryTypo,
} from "./SendToken.styled";
import SendAccordion from "src/components/SendAccordion/SendAccordion";
import { useTranslation } from "react-i18next";

interface SendTokenProps {
  token?: string;
  amount?: number;
  balance?: number;
  address?: string;
  fee?: number;
  time?: string;
  total?: string;
  gasLimit?: number;
  addData?: string;
}

const SendToken = ({
  token,
  amount,
  balance,
  address,
  fee,
  time,
  total = "0.000318",
  gasLimit,
  addData,
}: SendTokenProps) => {
  const { t } = useTranslation();
  return (
    <ItemPaper>
      <h2>{t("sendPage.token")}</h2>
      <PrimaryTypo variant="body2" textAlign="end">
        {t("sendPage.balance")}: {balance}
      </PrimaryTypo>
      <Grid container spacing={2} mt="10px">
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-token"
            value={token}
            options={[]}
            sx={{ width: "100%", mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label={t("sendPage.token")} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-amount"
            options={[]}
            value={amount}
            sx={{ width: "100%", mb: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label={t("sendPage.amount")} />
            )}
          />
        </Grid>
      </Grid>
      <Box
        p="20px"
        mb="10px"
        borderRadius="10px"
        sx={{ background: "#f8f9fb" }}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          alignItems="center"
          display="flex"
        >
          <ErrorOutlineIcon />
          <Box ml="10px">
            <p>{t("sendPage.eth-balance-low")}</p>
          </Box>
        </Typography>
        <Grid container spacing={2} mt="10px">
          <Grid item xs={6}>
            <Typography variant="body2" color="#5e6b8d">
              {t("sendPage.describe-eth")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <PrimaryTypo variant="body2" fontWeight="bold">
              {t("sendPage.transfer-eth")}
            </PrimaryTypo>
            <PrimaryTypo variant="body2" fontWeight="bold">
              {t("sendPage.buy-eth")}
            </PrimaryTypo>
          </Grid>
        </Grid>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-address"
        options={[]}
        value={address}
        sx={{ width: "100%", m: "20px 0" }}
        renderInput={(params) => (
          <TextField {...params} label={t("sendPage.to-address")} />
        )}
      />
      <Box>
        <Typography variant="body1" fontWeight="bold" mb="20px">
          {t("sendPage.fee")}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Box
              p="10px"
              mb="10px"
              mr="10px"
              borderRadius="10px"
              style={{ background: "#f8f9fb" }}
              display="flex"
              alignItems="center"
            >
              <FeeTypo>{fee} $</FeeTypo>
              <ArrowForwardIcon
                style={{ margin: "0 10px", color: "#5e6b8d", padding: "2px" }}
              />
              <QueryBuilderIcon style={{ color: "#5e6b8d", padding: "2px" }} />
              <FeeTypo>{time} min</FeeTypo>
              <KeyboardArrowDownIcon
                style={{ margin: "0 10px", color: "#5e6b8d", padding: "2px" }}
              />
            </Box>
            <FeeTypo>{total} ETH</FeeTypo>
          </Stack>
          <Typography variant="body1" color="#5e6b8d">
            {t("sendPage.total")}: {total} ETH
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <FeeTypo>{t("sendPage.not-enough-eth")} </FeeTypo>
            <PrimaryTypo>{t("sendPage.buy-more-eth")}</PrimaryTypo>
          </Stack>
          <FeeTypo>{t("sendPage.fees-determined")}</FeeTypo>
        </Stack>
      </Box>
      <Box paddingY="20px">
        <SendAccordion gasLimit={gasLimit} addData={addData} />
      </Box>

      <ButtonDisable disabled>{t("sendPage.next")}</ButtonDisable>
      <ButtonClear>{t("sendPage.clear-all")}</ButtonClear>
    </ItemPaper>
  );
};

export default SendToken;
