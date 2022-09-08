import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { onCloseSidebar } from "../../MainLayout.reducer";
import { useAppDispatch } from "src/store";

import { ActionButton, VerticalDivider, Wrapper } from "./ActionButtons.styled";
import { actionButtons } from "src/constants/sidebarMenu";
import theme from "src/theme";
import { useState } from "react";
import Modal from "src/components/Modal";
import BuySellModalContent from "./BuySellModalContent";

const ActionButtons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const [shouldModalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleActionButtonClick = (link: string) => {
    if (link) {
      navigate(link);
      dispatch(onCloseSidebar());
    } else {
      handleModalOpen();
    }
  };

  return (
    <Wrapper>
      {actionButtons.map((actionBtn, i) => (
        <ActionButton
          key={i}
          isActive={pathname === actionBtn.link}
          onClick={() => {
            handleActionButtonClick(actionBtn.link);
          }}
        >
          <img src={actionBtn.icon} alt="sidebar-icon" width="30px" />
          <Typography
            color={theme.palette.common.white}
            fontSize={theme.spacing(1.5)}
          >
            {t(actionBtn.text)}
          </Typography>
          {i !== actionButtons.length - 1 && <VerticalDivider />}
        </ActionButton>
      ))}

      <Modal
        shouldModalOpen={shouldModalOpen}
        handleModalClose={handleModalClose}
        modalWidth={theme.spacing(67.5)}
      >
        <BuySellModalContent />
      </Modal>
    </Wrapper>
  );
};

export default ActionButtons;
