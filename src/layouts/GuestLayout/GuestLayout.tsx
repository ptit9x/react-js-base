import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import HeaderGuest from "src/components/HeaderGuest/HeaderGuest";
const BoxStyled = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding-bottom: 70px;
  height: 100vh;
`;

const GuestLayout = () => {
  return (
    <div>
      <HeaderGuest />
      <BoxStyled>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Outlet />
        </Grid>
      </BoxStyled>
    </div>
  );
};
export default GuestLayout;
