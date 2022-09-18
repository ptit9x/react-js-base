import { Box, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonCusTom } from "src/assets/common.styled";
import Autocomplete, { Option } from "src/components/Autocomplete/Autocomplete";
import { tokenUnits } from "src/constants/currencyUnits";
import theme from "src/theme";

interface SellTabPanelProps {
  balance?: number;
}

const SellTabPanel = ({ balance = 0 }: SellTabPanelProps) => {
  const { t } = useTranslation();
  const [currentToken, setCurrentToken] = useState<Option | null>(
    tokenUnits[0]
  );
  const [amountToSell, setAmountToSell] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const estimatedNetworkFee = 0.0001;

  useEffect(() => {
    if (amountToSell < 0) {
      setErrorMessage(t("amount-cant-be-neg"));
    } else if (!amountToSell) {
      setErrorMessage(t("amount-required"));
    } else if (amountToSell > balance) {
      setErrorMessage(
        t("you-do-not-have-enough-to-sell", { token: currentToken?.label })
      );
    } else {
      setErrorMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountToSell, balance, currentToken]);

  const handleTokenChange = (
    _e: React.SyntheticEvent,
    value: Option | null
  ) => {
    setCurrentToken(value);
  };

  return (
    <>
      <Autocomplete
        fullWidth
        disableClearable
        options={tokenUnits}
        label={t("currency")}
        inputValue={currentToken}
        onChange={handleTokenChange}
        sx={{ mb: 3, mt: 1 }}
      />

      <Box my={4}>
        <Typography color="primary" variant="body2" textAlign="end">
          {t("balance")}: {balance}
        </Typography>
        <TextField
          label={t("amount")}
          variant="outlined"
          type="number"
          helperText={errorMessage}
          error={!!errorMessage}
          fullWidth
          value={amountToSell}
          onChange={e => setAmountToSell(parseInt(e.target.value))}
        />
      </Box>

      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography fontSize={theme.spacing(1.75)} fontWeight={700}>
          {t("estimated-network-fee")}
        </Typography>
        <Typography fontSize={theme.spacing(1.75)}>
          ~ {estimatedNetworkFee}ETH
        </Typography>
      </Stack>

      <Typography
        fontSize={theme.spacing(1.75)}
        color={theme.palette.blueGrey[600]}
      >
        {t("after-submitting-sell-order", { token: currentToken?.label })}
      </Typography>

      <ButtonCusTom
        fullWidth
        sx={{ mt: 5, mb: 2 }}
        disabled={!!errorMessage}
        padd={theme.spacing(2.25)}
        backgroundColor={!!errorMessage ? theme.palette.gray[300] : undefined}
      >
        {t("sell-with-moonpay")}
      </ButtonCusTom>
    </>
  );
};

export default SellTabPanel;
