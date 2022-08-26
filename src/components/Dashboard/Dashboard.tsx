import { Box, Typography } from "@mui/material";
import React from "react";
import { ButtonCusTom, ItemPaper, Table } from "../common/DashBoard.styled";
import StickyHeadTable from "../common/StickyHeadTable";
interface DasboardProps {
  loading?: boolean;
}

const Dashboard = (props: DasboardProps) => {
  return (
    <>
      <ItemPaper elevation={2} square>
        <h2>My ETH balance is empty</h2>
        <ButtonCusTom>Buy ETH with a Credit card</ButtonCusTom>
        <Typography>We accept Credit card Visa</Typography>
        <Typography className="text-alight">
          Tip: You can also send your ETH from another wallet!
        </Typography>
      </ItemPaper>

      <Table elevation={2} square>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0rem 1rem",
            alignItems: "center",
          }}
        >
          <h3>My Token Value</h3>
          <Typography>+Custom</Typography>
        </Box>
        <StickyHeadTable></StickyHeadTable>
      </Table>
    </>
  );
};

export default Dashboard;
