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
  Typography,
  useTheme
} from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import { walletAddress } from "src/constants";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";
import SendAccordion from "src/pages/SendToken/SendAccordion";
import { useAppSelector } from "../../store";
import useWeb3 from "../../hooks/useWeb3";
import { toBN, fromWei, toWei } from "web3-utils";
import { ButtonClear, FeeTypo } from "./SendToken.styled";
import hasValidDecimals from "src/helper/has-valid-decimals";

interface SendTokenPageProps {
  token?: string;
  balance?: number;
  address?: string;
  fee?: number;
  time?: number;
  total?: string;
  gasLimit?: number;
  addData?: string;
}

const SendTokenPage = ({
  token,
  fee = 0.47,
  time = 15,
  total = "0.000318",
  gasLimit,
  addData
}: SendTokenPageProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const web3 = useWeb3();
  const [amount, setAmount] = useState("0");
  const [totalCost, setTotalCost] = useState("0");
  const [receiveAddress, setReceiveAddress] = useState("");
  const [amountError, setAmountError] = useState(false);

  const wallet = useAppSelector(state => state.app.wallet);
  const currentAddress = wallet.getAddress();
  const balance = wallet.getBalance();

  useEffect(() => {
    if (+balance <= 0) setAmountError(true);
  }, [balance]);

  useEffect(() => {
    try {
      if (!hasValidDecimals(amount, 18)) setTotalCost("0");
      const amountToWei = toWei(amount);
      web3.getGasPrice().then(gasPrice => {
        const totalCostInWei = toBN(21000 * gasPrice)
          .add(toBN(amountToWei))
          .toString();
        setTotalCost(fromWei(totalCostInWei, "ether"));
      });
    } catch (error) {}
  }, [amount, web3]);

  async function send() {
    // const cost = calculateTotalCost();
    // console.log("cost: ", cost);
    const nonce = await web3.getNonce(currentAddress);
    const gasPrice = await web3.getGasPrice();
    const value = toWei(amount);
    const tx = {
      from: currentAddress,
      to: receiveAddress,
      nonce,
      gasPrice,
      gas: 21000,
      value,
      destinationValue: "0x",
      data: "0x"
    };
    web3.sendTransaction(tx).then(console.log).catch(console.log);
    return;
  }

  // function calculateTotalCost() {
  //   console.log("amount: ", amount);
  //   if (!hasValidDecimals(amount, 18)) return "0";
  //   const amountToWei = toBase(amount, 18);
  //   const totalCostInWei = toBN(21000).add(toBN(amountToWei)).toString();
  //   setTotalCost(fromWei(totalCostInWei, "ether"));
  // }

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
            error={amountError}
            type="number"
            value={amount}
            helperText={amountError ? t("error-not-enough-balance") : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (+event.target.value >= +balance) {
                setAmountError(true);
              } else {
                setAmountError(false);
              }
              setAmount(event.target.value);
            }}
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
        freeSolo
        value={receiveAddress}
        onChange={(event: any, newValue: string | null) => {
          setReceiveAddress(newValue || "");
        }}
        inputValue={receiveAddress}
        onInputChange={(event, newInputValue) => {
          setReceiveAddress(newInputValue);
        }}
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
            {t("total")}: {totalCost} ETH
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

      <Button variant="contained" onClick={send}>
        {t("next")}
      </Button>
      <ButtonClear>{t("clear-all")}</ButtonClear>
    </ItemPaper>
  );
};

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
