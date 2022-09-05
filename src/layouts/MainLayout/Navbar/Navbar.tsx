import { Box, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTranslation } from "react-i18next";
import { ButtonCusTom } from "src/assets/common.styled";
import icon_open_sidebar from "src/assets/icons/icon-open-sidebar.svg";
import { BREAKPOINT } from "src/constants/styles";
import { useAppDispatch } from "src/store";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import theme from "src/theme";

import { onOpenSidebar } from "../MainLayout.reducer";
import { OpenSidebarButton } from "./Navbar.styled";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <Grid2
      container
      sx={{ my: 2 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      align-center
    >
      <Grid2 xs={12} md={8}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontWeight={theme.typography.fontWeightBold}>
              {t("you-can-now-buy-crypto")}
            </Typography>
            <Typography
              fontWeight={theme.typography.fontWeightLight}
              fontSize={theme.typography.fontSize}
              color={theme.palette.text.secondary}
            >
              {t("enjoy-low-fee")}
            </Typography>
          </Box>
          <ButtonCusTom>{t("buy-crypto-now")}</ButtonCusTom>
        </Box>
        <OpenSidebarButton
          onClick={() => dispatch(onOpenSidebar())}
          BREAKPOINT={BREAKPOINT.XL}
        >
          <img src={icon_open_sidebar} alt="open-sidebar" width="40px" />
        </OpenSidebarButton>
      </Grid2>
      <Grid2
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <NotificationsNoneIcon></NotificationsNoneIcon>
      </Grid2>
    </Grid2>
  );
};

export default Navbar;
