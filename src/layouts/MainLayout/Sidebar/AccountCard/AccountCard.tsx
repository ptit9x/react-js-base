import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LogoutIcon from "@mui/icons-material/Logout";
import PrintIcon from "@mui/icons-material/Print";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "src/components/Modal/Modal";
import { useAppSelector } from "src/store";
import theme from "src/theme";

import {
  LightTooltip as Tooltip,
  AccountOptionsButton,
  AccountBalance,
  UtilButton,
  Wrapper
} from "./AccountCard.styled";
import QRModalContent from "./QRModalContent";

const AccountCard = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [shouldModalOpen, setModalOpen] = useState(false);

  const wallet = useAppSelector(state => state.app.wallet);
  const balance = wallet.getBalance();
  const accountMenuOpen = Boolean(anchorEl);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const shortenAddress = () =>
    `${wallet.getAddress().slice(0, 6)}...${wallet
      .getAddress()
      .slice(wallet.getAddress().length - 4)}`;

  const handleOpenAccountMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <Box display="flex" flexDirection="column" alignItems="left">
        <AccountOptionsButton
          aria-haspopup="true"
          aria-expanded={accountMenuOpen ? "true" : undefined}
          disableElevation
          onClick={handleOpenAccountMenu}
          endIcon={<ArrowDropDownIcon htmlColor={theme.palette.common.white} />}
        >
          {t("my-personal-account")}
        </AccountOptionsButton>

        <Tooltip title={wallet.getAddress()} placement="top">
          <Typography
            fontSize={theme.spacing(1.25)}
            color={theme.palette.common.white}
            width="fit-content"
          >
            {shortenAddress()}
          </Typography>
        </Tooltip>
      </Box>

      <AccountBalance fontWeight={700}>$0.00</AccountBalance>

      <Menu
        anchorEl={anchorEl}
        open={accountMenuOpen}
        onClose={handleCloseAccountMenu}
      >
        <MenuItem onClick={handleCloseAccountMenu}>
          <ListItemIcon>
            <RefreshIcon />
          </ListItemIcon>
          <ListItemText>{t("refresh-balance")}</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleCloseAccountMenu}>
          <ListItemIcon>
            <PrintIcon />
          </ListItemIcon>
          <ListItemText>{t("view-paper-wallet")}</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseAccountMenu}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>{t("logout")}</ListItemText>
        </MenuItem>
      </Menu>

      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          fontSize={theme.spacing(1.75)}
          color={theme.palette.common.white}
        >
          {parseFloat(balance).toFixed(4)} ETH
        </Typography>
        <Box>
          <UtilButton onClick={handleModalOpen}>
            <QrCode2Icon fontSize="small" htmlColor={theme.palette.gray[800]} />
          </UtilButton>
          <UtilButton>
            <ContentCopyIcon
              fontSize="small"
              htmlColor={theme.palette.gray[800]}
            />
          </UtilButton>
        </Box>
      </Box>

      <Modal
        shouldModalOpen={shouldModalOpen}
        handleModalClose={handleModalClose}
      >
        <QRModalContent />
      </Modal>
    </Wrapper>
  );
};

export default AccountCard;
