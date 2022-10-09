import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTranslation } from "react-i18next";
import { ButtonCusTom } from "src/assets/common.styled";
import { ReactComponent as MenuIcon } from "src/assets/icons/icon-open-sidebar.svg";
import { BREAKPOINT } from "src/constants/styles";
import { useAppDispatch } from "src/store";
import theme from "src/theme";

import { onOpenSidebar } from "../MainLayout.reducer";
import {
  OpenSidebarButton,
  BuyCryptoContainer,
  NotiButton
} from "./Navbar.styled";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <Grid2
      container
      sx={{ my: 2 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      align-center
      position="relative"
    >
      <BuyCryptoContainer xs={12} md={8}>
        <OpenSidebarButton
          onClick={() => dispatch(onOpenSidebar())}
          BREAKPOINT={BREAKPOINT.XL}
        >
          <MenuIcon fill={theme.palette.blue[500]} width={40} height={40} />
        </OpenSidebarButton>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          width="100%"
          gap={1}
        >
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
          <ButtonCusTom
            padd={theme.spacing(2)}
            sx={{ height: theme.spacing(5) }}
          >
            {t("buy-crypto-now")}
          </ButtonCusTom>
        </Box>
      </BuyCryptoContainer>

      <NotiButton xs={12} md={4}>
        <NotificationsNoneIcon />
      </NotiButton>
    </Grid2>
  );
};

export default Navbar;
