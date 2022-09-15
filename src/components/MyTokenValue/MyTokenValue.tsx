import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import theme from "src/theme";

const MyTokenValue = () => {
  const { t } = useTranslation();
  const balance = "0.00";

  return (
    <ItemPaper padd={theme.spacing(2.25)}>
      <Stack direction="column" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {t("my-token-value")}
        </Typography>

        <Typography fontWeight="bold" fontSize={theme.spacing(2)} mb={1}>
          ${balance}
        </Typography>

        <img
          src="https://img.mewapi.io/?image=https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
          alt="eth-icon"
          width="32px"
        />
      </Stack>
    </ItemPaper>
  );
};

export default MyTokenValue;
