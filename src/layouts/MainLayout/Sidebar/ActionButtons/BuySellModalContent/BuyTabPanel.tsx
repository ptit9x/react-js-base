import InfoIcon from "@mui/icons-material/Info";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  cryptocurrencyUnits,
  globalCurrencyUnits
} from "src/constants/currencyUnits";
import { ButtonCusTom } from "src/assets/common.styled";
import theme from "src/theme";

import { LightTooltip as Tooltip } from "../../AccountCard/AccountCard.styled";

const BuyTabPanel = () => {
  const { t } = useTranslation();
  const [cryptoUnit, setCryptoUnit] = useState(cryptocurrencyUnits[0]);
  const [globalUnit, setGlobalUnit] = useState(globalCurrencyUnits[0]);
  const [amountToSpend, setAmountToSpend] = useState(300);

  const buyFee = 3.25;
  const minBuyFee = 4.43;
  const dailyLimit = 20000.0;
  const ethNetworkFee = 0.27;
  const monthlyLimit = 50000.0;
  const cryptoAmountWillGet = 0.162359;
  const currencyAmountWillSpend = 290.03;

  const buyFeeExplanation = (
    <Trans i18nKey="buy-fee-explanation">
      Includes {{ buyFee }}% fee (${{ minBuyFee }} min) <br /> <br />
      ETH network fee (for transfers to your wallet) ~${{ ethNetworkFee }}
      <br /> <br />
      Daily limit: ${{ dailyLimit }} <br />
      Monthly limit: ${{ monthlyLimit }}
    </Trans>
  );

  return (
    <>
      <Typography fontSize={theme.spacing(2)} fontWeight={700}>
        {t("select-currency")}
      </Typography>
      <TextField
        id="select-currency"
        fullWidth
        select
        label="Currency"
        value={cryptoUnit}
        onChange={e => setCryptoUnit(e.target.value)}
        sx={{ mt: 3 }}
      >
        {cryptocurrencyUnits.map(unit => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </TextField>

      <Typography fontSize={theme.spacing(2)} fontWeight={700} sx={{ mt: 5 }}>
        {t("how-much-want-to-spend")}
      </Typography>
      <TextField
        label=""
        variant="outlined"
        type="number"
        value={amountToSpend}
        onChange={e => setAmountToSpend(parseInt(e.target.value))}
        sx={{ width: "73%", mr: 1, mt: 3 }}
      />
      <TextField
        id="select-token-name"
        select
        label=""
        value={globalUnit}
        onChange={e => setGlobalUnit(e.target.value)}
        sx={{ width: "25%", mt: 3 }}
      >
        {globalCurrencyUnits.map(unit => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </TextField>

      <Box mt={4} mb={5}>
        <Typography
          fontSize={theme.spacing(2)}
          color={theme.palette.secondary.light}
        >
          {t("you-will-get")}
        </Typography>

        <Stack direction="row">
          <Typography fontSize={theme.spacing(2)} fontWeight={700}>
            {cryptoAmountWillGet} ETH
          </Typography>
          <Typography
            fontSize={theme.spacing(2)}
            color={theme.palette.secondary.light}
            sx={{ ml: 0.5 }}
          >
            ≈ ${currencyAmountWillSpend}
          </Typography>
          <Tooltip
            placement="top"
            title={buyFeeExplanation}
            maxwidth={theme.spacing(45)}
            padding={theme.spacing(1)}
          >
            <InfoIcon
              sx={{
                ml: 0.75,
                mb: 0.75,
                cursor: "pointer",
                fontSize: theme.spacing(2)
              }}
              htmlColor={theme.palette.blueGrey.A400}
            />
          </Tooltip>
        </Stack>
      </Box>

      <ButtonCusTom fullWidth padd={theme.spacing(2.25)}>
        {t("buy-now")}
      </ButtonCusTom>
    </>
  );
};

export default BuyTabPanel;
