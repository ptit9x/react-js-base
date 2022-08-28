import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import SwapItem from "./SwapItem/SwapItem";
import { useTranslation } from "react-i18next";

const swapListItem = [
  {
    label: "0.072684 BTC ",
    image: "https://www.myetherwallet.com/img/btc.6e701c88.png"
  },
  {
    label: "1,434.64 USDT ",
    image: "https://www.myetherwallet.com/img/usdt.0f48e38b.png"
  },
  {
    label: "843.4072 KNC ",
    image: "https://www.myetherwallet.com/img/knc.b5476529.png"
  },
  {
    label: "1,434.4076 DAI ",
    image: "https://www.myetherwallet.com/img/dai.a214e7b4.png"
  },
  {
    label: "215.4885 LINK ",
    image: "https://www.myetherwallet.com/img/link.4ad2e078.png"
  },
  {
    label: "1,434.4792 USDC ",
    image: "https://www.myetherwallet.com/img/usdc.5aede8c5.png"
  }
];

const Swap = () => {
  const { t } = useTranslation();
  return (
    <Box p="20px" borderRadius="10px" style={{ background: "#fff" }} mt="20px">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb="30px"
      >
        <Typography variant="h6" fontWeight="bold" mb="10px">
          {t("swapComponent.swap")}
        </Typography>

        <Link href="#" underline="none">
          {t("swapComponent.more")}...
        </Link>
      </Stack>
      <div>
        {swapListItem.map((item, index) => (
          <SwapItem key={index} label={item.label} image={item.image} />
        ))}
      </div>
    </Box>
  );
};

export default Swap;
