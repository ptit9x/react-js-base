import icon_open_sidebar from "src/assets/icons/icon-open-sidebar.svg";
import { BREAKPOINT } from "src/constants/styles";
import { useAppDispatch } from "src/store";
import theme from "src/theme";

import { onOpenSidebar } from "../MainLayout.reducer";
import { OpenSidebarButton } from "./Navbar.styled";

const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        minHeight: "60px",
      }}
    >
      <OpenSidebarButton
        onClick={() => dispatch(onOpenSidebar())}
        BREAKPOINT={BREAKPOINT.XL}
      >
        <img src={icon_open_sidebar} alt="open-sidebar" width="40px" />
      </OpenSidebarButton>
      Navbar
    </div>
  );
};

export default Navbar;
