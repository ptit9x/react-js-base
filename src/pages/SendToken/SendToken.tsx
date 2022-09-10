import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import SendAccordion from "src/pages/SendToken/SendAccordion";
import theme from "src/theme";

import { ButtonClear, ButtonDisable, FeeTypo } from "./SendToken.styled";

interface SendTokenProps {
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

const walletAddress = "0xd9e49813B2d97C2E4B9bbB333C65961720B46CDc";

const SendToken = ({
  token,
  amount,
  balance = 0,
  address,
  fee = 0.47,
  time = 15,
  total = "0.000318",
  gasLimit,
  addData
}: SendTokenProps) => {
  const { t } = useTranslation();

  return (
    <ItemPaper>
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
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            value={token}
            options={["ETH"]}
            sx={{ width: "100%", mb: 2.5 }}
            renderInput={params => <TextField {...params} label={t("token")} />}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            value={amount}
            sx={{ width: "100%", mb: 2.5 }}
            label={t("amount")}
          />
        </Grid>
      </Grid>

      <Box
        p={2.5}
        my={2}
        borderRadius="10px"
        bgcolor={theme.palette.blueGrey.A200}
      >
        <Box display="flex">
          <ErrorOutlineIcon fontSize="small" />
          <Box ml={0.5}>
            <Typography fontWeight="bold" fontSize={theme.spacing(1.75)}>
              {t("eth-balance-low")}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} mt={0.5}>
          <Grid item xs={6}>
            <Typography variant="body2" color={theme.palette.blueGrey.A100}>
              {t("describe-eth")}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Button
              variant="text"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              {t("transfer-eth")}
            </Button>
            <Button
              variant="text"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              {t("buy-eth")}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Autocomplete
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
        >
          <Stack direction="row" alignItems="center">
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
            sx={{ mb: theme.spacing(1.25) }}
            fontSize={theme.spacing(1.75)}
          >
            {t("total")}: {total} ETH
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <FeeTypo>{t("not-enough-eth")} </FeeTypo>
            <Button variant="text" sx={{ textTransform: "none" }}>
              {t("buy-more-eth")}
            </Button>
          </Stack>
          <Button
            variant="text"
            sx={{ textTransform: "none", marginRight: theme.spacing(-1) }}
          >
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

export default SendToken;
