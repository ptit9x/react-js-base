import React from "react";
import { ItemPaper } from "./DashBoard.styled";
import { Box, Button } from "@mui/material";
const Dashboard = () => {
  return (
    <ItemPaper elevation={2} square>
      <h2>My ETH balance is empty</h2>
      <Button style={{ padding: "1rem" }} size="large" variant="contained">
        Buy ETH with a Credit card
      </Button>
      <div>We accept Credit card Visa</div>
      <div className="text-alight">
        Tip: You can also send your ETH from another wallet!
      </div>
    </ItemPaper>
  );
};

export default Dashboard;
