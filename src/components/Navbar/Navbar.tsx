import { Typography } from "@mui/material";
import React from "react";
import { ButtonCusTom } from "src/assets/common.styled";
import { Container } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Container>
      <Typography>
        You can now Buy crypto with low fees Enjoy 0.7% fee when you select
        <Typography> Bank account’ as payment method</Typography>
      </Typography>
      <ButtonCusTom>Buy Crypto Now</ButtonCusTom>
    </Container>
  );
};

export default Navbar;
