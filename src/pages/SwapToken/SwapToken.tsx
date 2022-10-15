import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  CircularProgress
} from "@mui/material";
import qs from "qs";
import axios from "axios";
import BigNumber from "bignumber.js";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";

import Autocomplete from "src/components/Autocomplete/Autocomplete";
import MyTokenValue from "src/components/MyTokenValue/MyTokenValue";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";
import { doGetTokenMarkets } from "src/App/App.thunks";
import { ItemPaper } from "src/assets/common.styled";
import COIN_LIST from "src/assets/coin-list.json";
import { useAppSelector } from "src/store";
import { useAppDispatch } from "src/store/index";
import { REGEX_NUMBER } from "src/constants";
import useWeb3 from "src/hooks/useWeb3";
import Wallet from "src/common/Wallet";
import theme from "src/theme";

const SwapTokenPage = () => {
  const currentNetWork = "";
  const PRICE_PROVIDER_URL = `https://api.0x.org/swap/v1/price`;
  const QUOTE_PROVIDER_URL = `https://${currentNetWork}api.0x.org/swap/v1/quote`;

  const { t } = useTranslation();
  const { swapTokens } = useWeb3();
  const dispatch = useAppDispatch();
  const wallet: Wallet = useAppSelector(state => state.app.wallet);
  const tokenMarkets: Token[] = useAppSelector(state => state.app.tokens);
  const currentBalance = Number.parseFloat(wallet.getBalance());

  const [sellToken, setSellToken] = useState<Token | null>(null);
  const [buyToken, setBuyToken] = useState<Token | null>(null);
  const [sellAmount, setSellAmount] = useState("0");
  const [buyAmount, setBuyAmount] = useState("0");

  const [errorMessage, setErrorMessage] = useState("");
  const [isAmountError, setIsAmountError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const maxApproval = useMemo(
    () =>
      new BigNumber(1)
        .multipliedBy(new BigNumber(10).pow(sellToken?.decimals || 18))
        .toFixed(),
    [sellToken]
  );

  useEffect(() => {
    dispatch(doGetTokenMarkets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getPrice = async () => {
      const currentSellAmount = parseFloat(sellAmount);

      if (!currentSellAmount || !sellToken || !buyToken || isAmountError)
        return;

      if (!sellToken.decimals || !buyToken.decimals) {
        setErrorMessage(t("token-not-supported"));
        return;
      }

      try {
        setIsLoading(true);

        const params = qs.stringify({
          sellToken: sellToken.symbol,
          buyToken: buyToken.symbol,
          sellAmount: Number(currentSellAmount * 10 ** sellToken.decimals)
        });

        const { data } = await axios.get(`${PRICE_PROVIDER_URL}?${params}`);

        setBuyAmount((data.buyAmount / 10 ** buyToken.decimals).toString());
        setErrorMessage("");
      } catch (e: any) {
        setErrorMessage(e?.response?.data?.reason || t("something-went-wrong"));
      }
      setIsLoading(false);
    };

    getPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellAmount, sellToken, buyToken]);

  const handleTokenSwap = async () => {
    if (wallet.getAddress()) {
      setErrorMessage("");
      setIsLoading(true);

      const swapQuoteJSON = await getQuote();
      if (swapQuoteJSON) {
        try {
          await swapTokens(
            swapQuoteJSON.sellTokenAddress,
            wallet.getAddress(),
            swapQuoteJSON,
            maxApproval
          );
        } catch (e: any) {
          setErrorMessage(t("something-went-wrong"));
        }
      }

      setIsLoading(false);
    }
  };

  const getQuote = async () => {
    if (!sellAmount || !sellToken?.decimals || !buyToken || isAmountError)
      return;

    const params = qs.stringify({
      sellToken: sellToken.symbol,
      buyToken: buyToken.symbol,
      takerAddress: wallet.getAddress(),
      sellAmount: Number(parseFloat(sellAmount) * 10 ** sellToken.decimals)
    });

    try {
      const { data } = await axios.get(`${QUOTE_PROVIDER_URL}?${params}`);
      return data;
    } catch (e: any) {
      if (e?.response?.data?.reason === "Validation Failed") {
        setErrorMessage(t("network-or-swap-pair-not-supported"));
      } else {
        setErrorMessage(e?.response?.data?.reason || t("something-went-wrong"));
      }
    }
  };

  const handleSellTokenChange = (
    _e: React.SyntheticEvent,
    value: Token | null
  ) => {
    if (value) {
      setSellToken(() => ({
        ...value,
        decimals:
          COIN_LIST[value?.symbol?.toUpperCase() || ""]?.currency_precision || 0
      }));

      if (value?.id === buyToken?.id) {
        setBuyToken(null);
      }
    }
  };

  const handleBuyTokenChange = (
    _e: React.SyntheticEvent,
    value: Token | null
  ) => {
    if (value) {
      setBuyToken(() => ({
        ...value,
        decimals:
          COIN_LIST[value?.symbol?.toUpperCase() || ""]?.currency_precision || 0
      }));

      if (value?.id === sellToken?.id) {
        setSellToken(null);
      }
    }
  };

  const handleSellAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let amount: number | string = e.target.value;

    if (REGEX_NUMBER.test(amount)) {
      setSellAmount(amount);

      amount = parseFloat(amount);
      setIsAmountError(true);

      switch (true) {
        case amount < 0:
          setErrorMessage(t("amount-cant-be-neg"));
          break;
        case !amount:
          setErrorMessage(t("amount-required"));
          break;
        case amount > currentBalance:
          setErrorMessage(
            t("you-do-not-have-enough-to-swap", { token: sellToken?.name })
          );
          break;
        default:
          setErrorMessage("");
          setIsAmountError(false);
      }
    }
  };

  return (
    <ItemPaper hasNarrowPaddOnSM>
      <Typography
        component="h1"
        fontWeight="bold"
        fontSize={theme.spacing(2.5)}
        mb={2}
      >
        {t("swap")}
      </Typography>

      <ItemPaper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: theme.spacing(30),
          p: 2.25,
          "@media screen and (max-width: 576px)": {
            flexDirection: "column",
            height: "fit-content",
            alignItems: "center",
            p: 1.5,
            pb: 5
          }
        }}
      >
        <Stack
          direction="column"
          width="100%"
          maxWidth={theme.spacing(34)}
          position="relative"
          top={theme.spacing(1)}
        >
          <Box>
            <Typography color="primary" variant="body2" textAlign="end">
              {t("balance")}: {currentBalance.toFixed(4)}
            </Typography>
            <Autocomplete
              options={tokenMarkets}
              label={t("from")}
              fullWidth
              disableClearable
              inputValue={sellToken}
              onChange={handleSellTokenChange}
            />
          </Box>

          <Box mt={3.5} mb={2.5}>
            <TextField
              fullWidth
              error={!!errorMessage}
              label={t("amount")}
              value={sellAmount}
              onChange={handleSellAmountChange}
            />
            {!!errorMessage && (
              <Box
                ml={1.5}
                mt={0.5}
                lineHeight="1px"
                maxWidth={theme.spacing(28.5)}
              >
                <Typography
                  color="error"
                  display="inline"
                  fontSize={theme.spacing(1.5)}
                >
                  {errorMessage}
                </Typography>
                {parseFloat(sellAmount) > currentBalance && (
                  <Typography
                    color="primary"
                    display="inline"
                    fontSize={theme.spacing(1.5)}
                    sx={{
                      cursor: "pointer"
                    }}
                  >
                    {t("buy-more")}
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </Stack>

        {isLoading ? (
          <Box
            width={theme.spacing(4.25)}
            height={theme.spacing(2)}
            top={theme.spacing(1)}
            position="relative"
            alignSelf="center"
            p="0 8px"
          >
            <CircularProgress color="inherit" size={18} />
          </Box>
        ) : (
          <IconButton
            onClick={handleTokenSwap}
            disabled={!!errorMessage}
            sx={{ alignSelf: "center", top: theme.spacing(1.25) }}
          >
            <SwapHorizIcon htmlColor={theme.palette.gray[600]} />
          </IconButton>
        )}

        <Stack
          direction="column"
          width="100%"
          maxWidth={theme.spacing(34)}
          position="relative"
          top={theme.spacing(3.5)}
        >
          <Autocomplete
            label={t("to")}
            fullWidth
            disableClearable
            inputValue={buyToken}
            onChange={handleBuyTokenChange}
            options={tokenMarkets}
          />
          <TextField
            label={t("amount")}
            fullWidth
            value={buyAmount}
            sx={{ mb: 2.5, mt: 3.5, pointerEvents: "none" }}
          />
        </Stack>
      </ItemPaper>

      {!!errorMessage && (
        <Box p={2.5} my={2} borderRadius="10px" bgcolor="background.paper">
          <Box display="flex" mb={1}>
            <ErrorOutlineIcon fontSize="small" />
            <Typography
              fontWeight="bold"
              fontSize={theme.spacing(1.75)}
              sx={{ ml: 0.5 }}
            >
              {t("low-token-balance", { token: sellToken?.name })}
            </Typography>
          </Box>

          <Typography variant="body2" color={theme.palette.blueGrey.A100}>
            {t("low-balance-description", { token: sellToken?.name })}
          </Typography>

          <Button variant="outlined" sx={{ mt: 1.5, textTransform: "none" }}>
            {t("buy-token", { token: sellToken?.name })}
          </Button>
        </Box>
      )}
    </ItemPaper>
  );
};

const SwapToken = () => (
  <DashBoardLayout
    main={<SwapTokenPage />}
    sideRight={<MyTokenValue />}
  ></DashBoardLayout>
);
export default SwapToken;
