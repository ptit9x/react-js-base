import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer/Footer";
import Navbar from "src/components/Navbar/Navbar";
import { BREAKPOINT } from "src/constants/styles";
import { useWindowSize } from "src/hooks/useWindowSize";
import { Content } from "./\bMainLayout.styled";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = () => {
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
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </Box>
  );
};
export default MainLayout;
