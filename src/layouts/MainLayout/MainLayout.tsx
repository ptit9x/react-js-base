import { Box, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "src/components/Footer/Footer";
import Navbar from "src/components/Navbar/Navbar";
import { useWindowSize } from "src/hooks/useWindowSize";
import { BREAKPOINT } from "src/constants/styles";
import Grid from "@mui/material/Grid";

import { Container, Content, ItemBlock } from "./MainLayout.styled";
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
          <Grid container spacing={2}>
            <Grid item md={8} xs={12} style={{ backgroundColor: "#fff" }}>
              <ItemBlock>
                <Outlet />
              </ItemBlock>
            </Grid>
            <Grid item md={4} xs={12}>
              <div>sx=4</div>
              {/* <SideLeft></SideLeft> */}
            </Grid>
          </Grid>
          {/* <Outlet /> */}
        </Content>
        <Footer />
      </Container>
    </Box>
  );
};
export default MainLayout;
