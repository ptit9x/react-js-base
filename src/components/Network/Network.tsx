import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ItemPaper } from "src/assets/common.styled";
import theme from "src/theme";

const Network = () => {
  const { t } = useTranslation();
  return (
    <ItemPaper padd={theme.spacing(2.25)}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Stack direction="row">
            <Typography variant="h6" fontWeight="bold" mb={1.25}>
              {t("network")}
            </Typography>
            <IconButton sx={{ height: theme.spacing(4), p: 0.5 }}>
              <ChevronRightIcon />
            </IconButton>
          </Stack>

          <Typography fontSize={theme.spacing(1.75)}>
            {t("eth-ethereum")}
          </Typography>
          <Typography fontSize={theme.spacing(1.75)}>
            {t("last-block")}: 15,402,326
          </Typography>
        </Box>

        <img
          src="https://www.myetherwallet.com/img/eth.219e902e.svg"
          alt="eth-icon"
          width="60px"
        />
      </Stack>
    </ItemPaper>
  );
};

export default Network;
