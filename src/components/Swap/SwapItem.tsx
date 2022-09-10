import { Box, Stack, Typography } from "@mui/material";
import swap_icon from "src/assets/icons/swap-arrow-icon.png";
import theme from "src/theme";

interface SwapItemProps {
  label: string;
  image: string;
}

const SwapItem = ({ label, image }: SwapItemProps) => {
  return (
    <Box
      p={1.25}
      mb={1.25}
      borderRadius="10px"
      bgcolor={theme.palette.background.paper}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={theme.spacing(1.75)}>1 ETH / {label}</Typography>
        <Stack direction="row">
          <img
            src="https://img.mewapi.io/?image=https://raw.githubusercontent.com/MyEtherWallet/ethereum-lists/master/src/icons/ETH-0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.svg"
            alt="eth-icon"
            width="18px"
          />
          <Box mx={1} mt={0.5}>
            <img src={swap_icon} alt="arrow-icon" width="16px" />
          </Box>
          <Box mt={0.5}>
            <img src={image} alt="coin-icon" width="24px" height="24px" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SwapItem;
