import React from "react";
import { ItemPaper, PrimaryButton } from "./SendToken.styled";
import { Box, Button, Select, Stack, Typography, Grid } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";

const SendToken = () => {
  return (
    <ItemPaper>
      <h2>Send</h2>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <Typography variant="body2" fontWeight="bold">
                <ErrorOutlineIcon></ErrorOutlineIcon>Your ETH balance is too low
              </Typography>
              <Typography variant="body2">
                Every transaction requires a small amount of ETH to execute.
                Even if you have tokens to swap, when your ETH balance is close
                to zero, you won't be able to send anything until you fund your
                account.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Typography variant="body2" color="secondary">
                Transfer ETH from another account
              </Typography>
              <Typography variant="body2">Buy ETH</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </ItemPaper>
  );
};

export default SendToken;
