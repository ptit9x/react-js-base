import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import theme from "src/theme";

interface MyTokenValueProps {
  balance?: number;
  tokenIcon?: string;
}

const MyTokenValue = ({ tokenIcon, balance = 0.0 }: MyTokenValueProps) => {
  const { t } = useTranslation();

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
          src={
            tokenIcon ??
            "https://img.mewapi.io/?image=https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
          }
          alt="token-icon"
          width="32px"
        />
      </Stack>
    </ItemPaper>
  );
};

export default MyTokenValue;
