import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  Autocomplete as MuiAutocomplete
} from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import { tokenUnits } from "src/constants/currencyUnits";
import { walletAddress } from "src/constants";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";
import MyTokenValue from "src/components/MyTokenValue/MyTokenValue";
import SendAccordion from "src/pages/SendToken/SendAccordion";
import Autocomplete, { Option } from "src/components/Autocomplete/Autocomplete";
import theme from "src/theme";

import { ButtonClear, ButtonDisable, FeeTypo } from "./SendToken.styled";

interface SendTokenPageProps {
  token?: string;
  amount?: number;
  balance?: number;
  address?: string;
  fee?: number;
  time?: number;
  total?: string;
  gasLimit?: number;
  addData?: string;
}

const SendTokenPage = ({
  token = "ETH",
  amount,
  balance = 0,
  address,
  fee = 0.47,
  time = 15,
  total = "0.000318",
  gasLimit,
  addData
}: SendTokenPageProps) => {
  const { t } = useTranslation();
  const [currentToken, setCurrentToken] = useState<Option | null>(
    tokenUnits[0]
  );

  const handleTokenChange = (
    _e: React.SyntheticEvent,
    value: Option | null
  ) => {
    setCurrentToken(value);
  };

  return (
    <ItemPaper hasNarrowPaddOnSM>
      <Typography
        component="h1"
        fontWeight="bold"
        fontSize={theme.spacing(2.5)}
      >
        {t("send")}
      </Typography>
      <Typography color="primary" variant="body2" textAlign="end">
        {t("balance")}: {balance}
      </Typography>

      <Grid container spacing={2} mt={1.25}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            fullWidth
            disableClearable
            options={[tokenUnits[0]]}
            label={t("token")}
            inputValue={currentToken}
            onChange={handleTokenChange}
            sx={{ width: "100%", mb: 2.5 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            value={amount}
            sx={{ width: "100%", mb: 2.5 }}
            label={t("amount")}
          />
        </Grid>
      </Grid>

      {balance === 0 && (
        <Box p={2.5} my={2} borderRadius="10px" bgcolor="background.paper">
          <Box display="flex">
            <ErrorOutlineIcon fontSize="small" />
            <Typography
              fontWeight="bold"
              fontSize={theme.spacing(1.75)}
              sx={{ ml: 0.5 }}
            >
              {t("low-token-balance", { token })}
            </Typography>
          </Box>

          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color={theme.palette.blueGrey.A100}>
                {t("low-balance-description", { token })}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Button
                variant="text"
                sx={{
                  p: 0,
                  textAlign: "left",
                  fontWeight: "bold",
                  textTransform: "none"
                }}
              >
                {t("transfer-eth")}
              </Button>
              <Button
                variant="text"
                sx={{
                  p: 0,
                  mt: 1,
                  minWidth: 0,
                  fontWeight: "bold",
                  textTransform: "none"
                }}
              >
                {t("buy-eth")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      <MuiAutocomplete
        disablePortal
        value={address}
        options={[walletAddress]}
        sx={{ width: "100%", my: 3 }}
        renderInput={params => (
          <TextField {...params} label={t("to-address")} />
        )}
      />

      <Box mt={4} mb={2}>
        <Typography variant="body1" fontWeight="bold" mb={1} ml={2}>
          {t("fee")}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <Box
              p={0.75}
              mb={1.25}
              mr={1.25}
              borderRadius="4px"
              bgcolor="rgba(0,0,0,.12)"
              display="flex"
              alignItems="center"
            >
              <FeeTypo sx={{ ml: 2 }}>${fee}</FeeTypo>
              <ArrowForwardIcon
                htmlColor={theme.palette.blueGrey[500]}
                sx={{
                  width: theme.spacing(2.5),
                  mx: 1.25
                }}
              />
              <QueryBuilderIcon
                htmlColor={theme.palette.blueGrey[500]}
                sx={{
                  width: theme.spacing(2.5),
                  mr: 0.25
                }}
              />
              <FeeTypo>{time} min</FeeTypo>
              <KeyboardArrowDownIcon
                htmlColor={theme.palette.blueGrey[500]}
                sx={{
                  width: theme.spacing(2.5),
                  mx: 1.25
                }}
              />
            </Box>
            <FeeTypo sx={{ mb: 1.25 }}>{total} ETH</FeeTypo>
          </Stack>
          <Typography
            color={theme.palette.blueGrey.A100}
            fontSize={theme.spacing(1.75)}
            sx={{ mb: 1.25 }}
          >
            {t("total")}: {total} ETH
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <FeeTypo>{t("not-enough-eth")} </FeeTypo>
            <Button variant="text" sx={{ p: 0, textTransform: "none" }}>
              {t("buy-more-eth")}
            </Button>
          </Stack>
          <Button variant="text" sx={{ p: 0, textTransform: "none", mr: -1 }}>
            {t("fees-determined")}
          </Button>
        </Stack>
      </Box>

      <Box py={2.5}>
        <SendAccordion gasLimit={gasLimit} addData={addData} />
      </Box>

      <ButtonDisable disabled>{t("next")}</ButtonDisable>
      <ButtonClear>{t("clear-all")}</ButtonClear>
    </ItemPaper>
  );
};

const SendToken = () => (
  <DashBoardLayout
    main={<SendTokenPage />}
    sideRight={<MyTokenValue />}
  ></DashBoardLayout>
);

export default SendToken;
