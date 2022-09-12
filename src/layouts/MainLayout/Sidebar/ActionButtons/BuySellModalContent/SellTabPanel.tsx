import { useTranslation } from "react-i18next";
import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { cryptocurrencyUnits } from "src/constants/currencyUnits";
import { useEffect, useState } from "react";
import { ButtonCusTom } from "src/assets/common.styled";
import theme from "src/theme";

interface SellTabPanelProps {
  balance?: number;
}

const SellTabPanel = ({ balance = 0 }: SellTabPanelProps) => {
  const { t } = useTranslation();
  const [cryptoUnit, setCryptoUnit] = useState(cryptocurrencyUnits[0]);
  const [amountToSell, setAmountToSell] = useState(0);
  const [helperText, setHelperText] = useState("");

  const estimatedNetworkFee = 0.0001;

  useEffect(() => {
    if (amountToSell < 0) {
      setHelperText(t("amount-cant-be-neg"));
    } else if (!amountToSell) {
      setHelperText(t("amount-required"));
    } else if (amountToSell > balance) {
      setHelperText(t("you-do-not-have-enough-eth", { cryptoUnit }));
    } else {
      setHelperText("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountToSell, balance, cryptoUnit]);

  return (
    <>
      <TextField
        id="select-currency"
        fullWidth
        select
        label={t("currency")}
        value={cryptoUnit}
        onChange={e => setCryptoUnit(e.target.value)}
        sx={{ mb: 3, mt: 1 }}
      >
        {cryptocurrencyUnits.map(unit => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </TextField>

      <Box my={4}>
        <Typography color="primary" variant="body2" textAlign="end">
          {t("balance")}: {balance}
        </Typography>
        <TextField
          label={t("amount")}
          variant="outlined"
          type="number"
          helperText={helperText}
          error={!!helperText}
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
        {t("after-submitting-sell-order")}
      </Typography>

      <ButtonCusTom
        fullWidth
        sx={{ mt: 5, mb: 2 }}
        disabled={!!helperText}
        padd={theme.spacing(2.25)}
        backgroundColor={!!helperText ? theme.palette.gray[300] : undefined}
      >
        {t("sell-with-moonpay")}
      </ButtonCusTom>
    </>
  );
};

export default SellTabPanel;
