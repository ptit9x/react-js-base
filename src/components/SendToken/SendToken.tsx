import React from "react";
import { Box, Typography, Grid, Autocomplete, TextField } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/system";
import { FeeTypo, PrimaryTypo } from "./SendToken.styled";
import SendAccordion from "src/components/SendToken/SendAccordion";
import { useTranslation } from "react-i18next";
import { ButtonCusTom, ItemPaper } from "src/assets/common.styled";

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

const SendTokenMain = ({
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
      <h2>Send</h2>
      <PrimaryTypo variant="body2" textAlign="end">
        Balance: 0
      </PrimaryTypo>
      <Grid container spacing={2} mt="10px">
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-token"
            options={[]}
            sx={{ width: "100%", mb: "20px" }}
            renderInput={params => <TextField {...params} label="Token" />}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="combo-box-amount"
            options={[]}
            sx={{ width: "100%", mb: "20px" }}
            renderInput={params => <TextField {...params} label="Amount" />}
          />
        </Grid>
      </Grid>
      <Box
        p="20px"
        mb="10px"
        borderRadius="10px"
        style={{ background: "#f8f9fb" }}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          alignItems="center"
          display="flex"
        >
          <ErrorOutlineIcon />
          <p style={{ marginLeft: "10px" }}>Your ETH balance is too low</p>
        </Typography>
        <Grid container spacing={2} mt="10px">
          <Grid item xs={6}>
            <Typography variant="body2" color="#5e6b8d">
              Every transaction requires a small amount of ETH to execute. Even
              if you have tokens to swap, when your ETH balance is close to
              zero, you won't be able to send anything until you fund your
              account.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <PrimaryTypo variant="body2">
              Transfer ETH from another account
            </PrimaryTypo>
            <PrimaryTypo variant="body2">Buy ETH</PrimaryTypo>
          </Grid>
        </Grid>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-address"
        options={[]}
        sx={{ width: "100%", m: "20px 0" }}
        renderInput={params => <TextField {...params} label="To Address" />}
      />
      <Box>
        <Typography variant="body1" fontWeight="bold" mb="20px">
          Transaction fee
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
              <FeeTypo>0.23 $</FeeTypo>
              <ArrowForwardIcon
                style={{ margin: "0 10px", color: "#5e6b8d", padding: "2px" }}
              />
              <QueryBuilderIcon style={{ color: "#5e6b8d", padding: "2px" }} />
              <FeeTypo>15 min</FeeTypo>
              <KeyboardArrowDownIcon
                style={{ margin: "0 10px", color: "#5e6b8d", padding: "2px" }}
              />
            </Box>
            <FeeTypo>0.000144 ETH</FeeTypo>
          </Stack>
          <Typography variant="body1" color="#5e6b8d">
            Total: 0.000144 ETH
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
      </ButtonPopover>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        style={{ width: "70%" }}
      >
        <div style={{ padding: "20px", backgroundColor: "#fff" }}>
          <Box
            p="20px"
            mb="10px"
            borderRadius="10px"
            style={{ background: "#fff2dc" }}
          >
            <Typography
              variant="body2"
              fontWeight="bold"
              alignItems="center"
              display="flex"
            >
              <ErrorOutlineIcon />
              <p style={{ marginLeft: "10px" }}>For advanced users only</p>
            </Typography>
            <Typography variant="body2" color="#5e6b8d">
              Please don’t edit these fields unless you are an expert user &
              know what you’re doing. Entering the wrong information could
              result in your transaction failing or getting stuck.
            </Typography>
      </Box>
      <Box paddingY="20px">
        <SendAccordion gasLimit={gasLimit} addData={addData} />
      </Box>
      <Grid display="flex" justifyContent="center">
        <ButtonCusTom disabled padd="0.7rem 2rem">
          {t("sendPage.next")}
        </ButtonCusTom>
      </Grid>
      <Box padding={1}></Box>
      <Grid display="flex" justifyContent="center">
        <ButtonCusTom
          padd="0.7rem 2rem"
          backgroundColor="#f2f3f6"
          colorButton="#646464"
        >
          {t("sendPage.clear-all")}
        </ButtonCusTom>
      </Grid>
    </ItemPaper>
  );
};

export default SendToken;
