import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "@emotion/styled";
import Header from "./Header";

const BoxStyled = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding-bottom: 70px;
  height: 100vh;
`;

const GuestLayout = () => {
  return (
    <div>
      <Header />
      <BoxStyled>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
        </Grid>
      </BoxStyled>
    </div>
  );
};
export default GuestLayout;
