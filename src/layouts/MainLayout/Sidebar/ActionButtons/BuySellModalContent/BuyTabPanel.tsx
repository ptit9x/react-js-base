import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Autocomplete as MuiAutocomplete
} from "@mui/material";
import { ButtonCusTom } from "src/assets/common.styled";
import { globalCurrencyUnits } from "src/constants/currencyUnits";
import Autocomplete from "src/components/Autocomplete/Autocomplete";
import { useAppSelector } from "src/store";
import { LightTooltip as Tooltip } from "../../AccountCard/AccountCard.styled";
import theme from "src/theme";

interface GlobalCurrencyUnit {
  symbol: string;
  image: string;
}

const BuyTabPanel = () => {
  const { t } = useTranslation();
  const tokenMarkets: Token[] = useAppSelector(state => state.app.tokens);
  const [currentToken, setCurrentToken] = useState<Token | null>(
    tokenMarkets[1]
  );
  const [globalUnit, setGlobalUnit] = useState<GlobalCurrencyUnit>(
    globalCurrencyUnits[0]
  );
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

  const handleTokenChange = (_e: React.SyntheticEvent, value: Token | null) => {
    setCurrentToken(value);
  };

  const handleGlobalUnitChange = (
    _e: React.SyntheticEvent,
    value: GlobalCurrencyUnit
  ) => {
    setGlobalUnit(value);
  };

  return (
    <>
      <Typography component="h1" fontSize={theme.spacing(2)} fontWeight={700}>
        {t("select-currency")}
      </Typography>

      <Autocomplete
        fullWidth
        disableClearable
        options={tokenMarkets}
        label={t("currency")}
        inputValue={currentToken}
        onChange={handleTokenChange}
        sx={{ position: "relative", top: theme.spacing(2) }}
      />

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

      <MuiAutocomplete
        disableClearable
        options={globalCurrencyUnits}
        value={globalUnit}
        onChange={handleGlobalUnitChange}
        getOptionLabel={option => option.symbol}
        sx={{ display: "inline-block", width: "25%", mt: 3 }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            position="relative"
            display="flex"
            {...props}
          >
            <img loading="lazy" width="24" src={option.image} alt="icon" />
            <Box>
              <Typography fontSize={theme.spacing(1.75)}>
                {option.symbol}
              </Typography>
            </Box>
          </Box>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label=""
            inputProps={{
              ...params.inputProps,
              autoComplete: ""
            }}
          />
        )}
      />

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

      <ButtonCusTom fullWidth padd={theme.spacing(2.25)} sx={{ mb: 2 }}>
        {t("buy-now")}
      </ButtonCusTom>
    </>
  );
};

export default BuyTabPanel;
