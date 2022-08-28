import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Network = () => {
  const { t } = useTranslation();
  return (
    <Box p="20px" borderRadius="10px" sx={{ background: "#fff" }}>
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="h6" fontWeight="bold" mb="10px">
            {t("network.network")}
          </Typography>
          <Typography variant="body1">{t("network.eth-ethereum")}</Typography>
          <Typography variant="body1">
            {t("network.last-block")}: 15,402,326
          </Typography>
        </div>
        <img
          src="	https://www.myetherwallet.com/img/eth.5b2fc1fc.svg"
          alt="eth-icon"
          width="60px"
        ></img>
      </Stack>
    </Box>
  );
};

export default Network;
