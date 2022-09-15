import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import DashBoardLayout from "src/layouts/ContentLayout/ContentLayout";
import MyTokenValue from "src/components/MyTokenValue/MyTokenValue";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  Box,
  Stack,
  IconButton,
  TextField,
  MenuItem,
  Typography,
  Button
} from "@mui/material";
import { cryptocurrencyUnits } from "src/constants/currencyUnits";
import theme from "src/theme";

const SwapTokenPage = () => {
  const { t } = useTranslation();
  const [tokenToSwapFrom, setTokenToSwapFrom] = useState(
    cryptocurrencyUnits[0]
  );
  const [tokenToSwapTo, setTokenToSwapTo] = useState(" ");
  const [amountToSwapFrom, setAmountToSwapFrom] = useState(0);
  const [amountToSwapTo, setAmountToSwapTo] = useState(0);
  const [helperText, setHelperText] = useState("");

  const balance = 0;

  useEffect(() => {
    if (amountToSwapFrom < 0) {
      setHelperText(t("amount-cant-be-neg"));
    } else if (!amountToSwapFrom) {
      setHelperText(t("amount-required"));
    } else if (amountToSwapFrom > balance) {
      setHelperText(t("you-do-not-have-enough-to-swap", { tokenToSwapFrom }));
    } else {
      setHelperText("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountToSwapFrom, balance, tokenToSwapFrom]);

  return (
    <ItemPaper>
      <Typography
        component="h1"
        fontWeight="bold"
        fontSize={theme.spacing(2.5)}
      >
        {t("swap")}
      </Typography>

      <ItemPaper
        padd={theme.spacing(2.25)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4
        }}
      >
        <Stack direction="column" position="relative" top={theme.spacing(2.25)}>
          <Box width={theme.spacing(28)}>
            <Typography color="primary" variant="body2" textAlign="end">
              {t("balance")}: {balance}
            </Typography>
            <TextField
              id="from-token"
              select
              label="From"
              value={tokenToSwapFrom}
              onChange={e => setTokenToSwapFrom(e.target.value)}
              sx={{ width: theme.spacing(28) }}
            >
              {cryptocurrencyUnits.map(unit => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box width={theme.spacing(28)}>
            <TextField
              type="number"
              error={!!helperText}
              helperText={helperText}
              label={t("amount")}
              value={amountToSwapFrom}
              onChange={e => setAmountToSwapFrom(parseInt(e.target.value))}
              sx={{ mt: 3.5, mb: 2.5 }}
            />
            <Typography
              display={!helperText ? "none" : "inline"}
              color="primary"
              fontSize={theme.spacing(1.5)}
              sx={{
                cursor: "pointer",
                position: "absolute",
                left: theme.spacing(1.75),
                bottom: theme.spacing(1)
              }}
            >
              {t("buy-more")}
            </Typography>
          </Box>
        </Stack>

        <IconButton>
          <SwapHorizIcon htmlColor={theme.palette.gray[600]} />
        </IconButton>

        <Stack direction="column">
          <TextField
            id="to-token"
            select
            label="To"
            value={tokenToSwapTo}
            onChange={e => setTokenToSwapTo(e.target.value)}
            sx={{ mt: 3, width: theme.spacing(28) }}
          >
            <MenuItem disabled value=" ">
              Select Token
            </MenuItem>
            {cryptocurrencyUnits.map(unit => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            type="number"
            value={amountToSwapTo}
            sx={{ width: theme.spacing(28), mb: 2.5, mt: 3.5 }}
            label={t("amount")}
          />
        </Stack>
      </ItemPaper>

      <Box
        display={!!helperText ? "block" : "none"}
        p={2.5}
        my={2}
        borderRadius="10px"
        bgcolor={theme.palette.background.paper}
      >
        <Box display="flex" mb={1}>
          <ErrorOutlineIcon fontSize="small" />
          <Typography
            fontWeight="bold"
            fontSize={theme.spacing(1.75)}
            sx={{ ml: 0.5 }}
          >
            {t("low-token-balance", { token: tokenToSwapFrom })}
          </Typography>
        </Box>

        <Typography variant="body2" color={theme.palette.blueGrey.A100}>
          {t("low-balance-description", { token: tokenToSwapFrom })}
        </Typography>

        <Button variant="outlined" sx={{ mt: 1.5, textTransform: "none" }}>
          {t("buy-token", { token: tokenToSwapFrom })}
        </Button>
      </Box>
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
