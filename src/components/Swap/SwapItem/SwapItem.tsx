import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ItemImage } from "./SwapItem.styled";

interface SwapItemProps {
    label: string;
    image: string;
}

const SwapItem = (props: SwapItemProps) => {
    return (
        <Box
            p="10px"
            mb="10px"
            borderRadius="10px"
            style={{ background: "#f2f3f6" }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <div>
                    <Typography variant="body1" mb="10px" fontSize="14">
                        1ETH / {props.label}
                    </Typography>
                </div>
                <div>
                    <ItemImage
                        src="	https://www.myetherwallet.com/img/eth.5b2fc1fc.svg"
                        alt="eth-icon"
                    ></ItemImage>
                    <ItemImage
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAF6ADAAQAAAABAAAAEAAAAAAUxw25AAABp0lEQVQ4EaVTPU8CQRCd2Ts1xsKCRG39aIyVsbShMPEoLAwBKo0NAoWFvX/AkgpNSBAb42mMFnwFEiqotLDSGAo6YwEhAqKgN84RMXA5CB+XbHZn9r03s+92EUy+dDotP7/VwiAw6XPazkwgfaXQiIpGoxP5Ml4B0RYifAhZLHnsyqsR108st4POE4mpfEm7ZeENAKwKwK1hhXXd/85P1eS0Ro0IEaxz+l2WhG3fsZltLz7ouikevklZqo1Ggjte43IlILAtz07e9ytmtVp/EJGMeAyp6bma9pkCoBXj5igxEs7LNa2WYZGFUYS6cZu2EJE+t49u+G55U1vkx1xuplKpWzpZdanBJnbmekfFSgXGuEtG8RgnSfopy9mH3F6GXo57U4fZFW6Zf3KB6z0Z6BIgCkOuZ8jHXPyzF5h55HMqwYGObqauCwbUuJ+v8YF+HXkcep2KX8d2vFAzcq8cC4sTNXbCLrsZp3Edj8+lBFucoTtXVZIKWjxEQDts4Td7uOt12S5awvo8dOdFiG3ztdCFv4RAl9eh3LULj7wOXEbsgevoajehX6SmlbRrdaRfAAAAAElFTkSuQmCC"
                        alt="eth-icon"
                        style={{ margin: "0 7px" }}
                    ></ItemImage>
                    <ItemImage src={props.image} alt="eth-icon"></ItemImage>
                </div>
            </Stack>
        </Box>
    );
};

export default SwapItem;
