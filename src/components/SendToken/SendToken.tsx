import React from "react";
import { ItemPaper, PrimaryButton } from "./SendToken.styled";
import { Box, Button } from "@mui/material";

const SendToken = () => {
  return (
    <ItemPaper>
      <h2>My ETH balance is empty</h2>
      <PrimaryButton size="large" variant="contained">
        Buy ETH with a Credit card
      </PrimaryButton>
      <div>We accept Credit card Visa</div>
      <div className="text-alight">
        Tip: You can also send your ETH from another wallet!
      </div>
    </ItemPaper>
  );
};

export default SendToken;
