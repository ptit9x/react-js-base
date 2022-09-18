import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";
import MyTokenValue from "src/components/MyTokenValue/MyTokenValue";
import Autocomplete, { Option } from "src/components/Autocomplete/Autocomplete";
import {
  Box,
  Stack,
  IconButton,
  TextField,
  Typography,
  Button
} from "@mui/material";
import { tokenUnits } from "src/constants/currencyUnits";
import theme from "src/theme";

const SwapTokenPage = () => {
  const { t } = useTranslation();
  const [tokenToSwapFrom, setTokenToSwapFrom] = useState<Option | null>(
    tokenUnits[0]
  );
  const [tokenToSwapTo, setTokenToSwapTo] = useState<Option | null>(null);
  const [amountToSwapFrom, setAmountToSwapFrom] = useState(0);
  const [amountToSwapTo, setAmountToSwapTo] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const balance = 0;

  useEffect(() => {
    if (amountToSwapFrom < 0) {
      setErrorMessage(t("amount-cant-be-neg"));
    } else if (!amountToSwapFrom) {
      setErrorMessage(t("amount-required"));
    } else if (amountToSwapFrom > balance) {
      setErrorMessage(
        t("you-do-not-have-enough-to-swap", { token: tokenToSwapFrom?.label })
      );
    } else {
      setErrorMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountToSwapFrom, balance, tokenToSwapFrom]);

  const handleTokenToSwapFromChange = (
    _e: React.SyntheticEvent,
    value: Option | null
  ) => {
    setTokenToSwapFrom(value);
    if (value?.label === tokenToSwapTo?.label) {
      setTokenToSwapTo(null);
    }
  };

  const handleTokenToSwapToChange = (
    _e: React.SyntheticEvent,
    value: Option | null
  ) => {
    setTokenToSwapTo(value);
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
              {t("balance")}: {balance}
            </Typography>
            <Autocomplete
              options={tokenUnits}
              label={t("from")}
              fullWidth
              disableClearable
              inputValue={tokenToSwapFrom}
              onChange={handleTokenToSwapFromChange}
            />
          </Box>

          <Box mt={3.5} mb={2.5}>
            <TextField
              fullWidth
              type="number"
              error={!!errorMessage}
              label={t("amount")}
              value={amountToSwapFrom}
              onChange={e => setAmountToSwapFrom(parseInt(e.target.value))}
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
              </Box>
            )}
          </Box>
        </Stack>

        <IconButton sx={{ alignSelf: "center" }}>
          <SwapHorizIcon htmlColor={theme.palette.gray[600]} />
        </IconButton>

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
            inputValue={tokenToSwapTo}
            onChange={handleTokenToSwapToChange}
            options={tokenUnits.filter(
              ({ label }) => label !== tokenToSwapFrom?.label
            )}
          />
          <TextField
            label={t("amount")}
            fullWidth
            value={amountToSwapTo}
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
              {t("low-token-balance", { token: tokenToSwapFrom?.label })}
            </Typography>
          </Box>

          <Typography variant="body2" color={theme.palette.blueGrey.A100}>
            {t("low-balance-description", { token: tokenToSwapFrom?.label })}
          </Typography>

          <Button variant="outlined" sx={{ mt: 1.5, textTransform: "none" }}>
            {t("buy-token", { token: tokenToSwapFrom?.label })}
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
