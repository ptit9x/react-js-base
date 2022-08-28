import React from "react";
import { Box, Typography, Stack } from "@mui/material";

interface SwapItemProps {
  label: string;
  image: string;
}

const SwapItem = ({ label, image }: SwapItemProps) => {
  return (
    <Box p="10px" mb="10px" borderRadius="10px" sx={{ background: "#f2f3f6" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="body1" fontSize="14">
            1ETH / {label}
          </Typography>
        </div>
        <Stack direction="row">
          <img
            src="	https://www.myetherwallet.com/img/eth.5b2fc1fc.svg"
            alt="eth-icon"
            width="20px"
          />
          <Box m="0 7px">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAF6ADAAQAAAABAAAAEAAAAAAUxw25AAABp0lEQVQ4EaVTPU8CQRCd2Ts1xsKCRG39aIyVsbShMPEoLAwBKo0NAoWFvX/AkgpNSBAb42mMFnwFEiqotLDSGAo6YwEhAqKgN84RMXA5CB+XbHZn9r03s+92EUy+dDotP7/VwiAw6XPazkwgfaXQiIpGoxP5Ml4B0RYifAhZLHnsyqsR108st4POE4mpfEm7ZeENAKwKwK1hhXXd/85P1eS0Ro0IEaxz+l2WhG3fsZltLz7ouikevklZqo1Ggjte43IlILAtz07e9ytmtVp/EJGMeAyp6bma9pkCoBXj5igxEs7LNa2WYZGFUYS6cZu2EJE+t49u+G55U1vkx1xuplKpWzpZdanBJnbmekfFSgXGuEtG8RgnSfopy9mH3F6GXo57U4fZFW6Zf3KB6z0Z6BIgCkOuZ8jHXPyzF5h55HMqwYGObqauCwbUuJ+v8YF+HXkcep2KX8d2vFAzcq8cC4sTNXbCLrsZp3Edj8+lBFucoTtXVZIKWjxEQDts4Td7uOt12S5awvo8dOdFiG3ztdCFv4RAl9eh3LULj7wOXEbsgevoajehX6SmlbRrdaRfAAAAAElFTkSuQmCC"
              alt="eth-icon"
              width="20px"
            />
          </Box>
          <img src={image} alt="eth-icon" width="20px" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SwapItem;
