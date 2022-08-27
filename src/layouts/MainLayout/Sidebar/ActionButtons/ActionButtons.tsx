import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import icon_menu_buy_sell from "src/assets/icons/icon-menu-buy-sell.svg";
import icon_menu_send from "src/assets/icons/icon-menu-send.svg";
import icon_menu_swap from "src/assets/icons/icon-menu-swap.svg";
import { onCloseSidebar } from "../../MainLayout.reducer";
import { useAppDispatch } from "src/store";

import { ActionButton, VerticalDivider, Wrapper } from "./ActionButtons.styled";
import theme from "src/theme";

const ActionButtons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const actionButtons = [
    {
      icon: icon_menu_buy_sell,
      text: t("buy/sell"),
      link: ""
    },
    {
      icon: icon_menu_send,
      text: t("send"),
      link: "/wallet/send-tx"
    },
    {
      icon: icon_menu_swap,
      text: t("swap"),
      link: "/wallet/swap"
    }
  ];

  const handleActionButtonClick = (link: string) => {
    if (link) {
      navigate(link);
      dispatch(onCloseSidebar());
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
            {actionBtn.text}
          </Typography>
          {i !== actionButtons.length - 1 && <VerticalDivider />}
        </ActionButton>
      ))}
    </Wrapper>
  );
};

export default ActionButtons;
