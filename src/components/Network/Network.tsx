import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const Network = () => {
    return (
        <Box p="20px" borderRadius="10px" style={{ background: "#fff" }}>
            <Stack direction="row">
                <div>
                    <Typography variant="h6" fontWeight="bold" mb="10px">
                        Network
                    </Typography>
                    <Typography variant="body1">ETH - Ethereum</Typography>
                    <Typography variant="body1">Last Block: 15,402,326</Typography>
                </div>
                <img
                    src="	https://www.myetherwallet.com/img/eth.5b2fc1fc.svg"
                    alt="eth-icon"
                    style={{ width: "60px", margin: "0 0 0 auto" }}
                ></img>
            </Stack>
        </Box>
    );
};

export default Network;
