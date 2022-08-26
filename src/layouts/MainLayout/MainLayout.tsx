import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer/Footer";
import Navbar from "src/components/Navbar/Navbar";
import { BREAKPOINT } from "src/constants/styles";
import { useWindowSize } from "src/hooks/useWindowSize";
import { Content } from "./\bMainLayout.styled";
import Sidebar from "./Sidebar/Sidebar";

interface Props {
  disableFooter?: boolean;
  disableNav?: boolean;
}

const MainLayout = (props: Props) => {
  const { disableFooter = false, disableNav = false } = props;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentWidth] = useWindowSize();
  function handleOpenSidebar(value: boolean) {
    setSidebarOpen(value);
  }

  return (
    <Box display="flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        handleOpenSidebar={handleOpenSidebar}
      />
      <Container>
        {currentWidth <= BREAKPOINT.XL && (
          <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
            Open Sidebar
          </Button>
        )}
        {!disableNav && <Navbar />}
        <Content>
          <Outlet />
        </Content>
        {!disableFooter && <Footer />}
      </Container>
    </Box>
  );
};
export default MainLayout;
