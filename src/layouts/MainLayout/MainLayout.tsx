import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { Container, Content } from "./MainLayout.styled";

const MainLayout = () => {
  return (
    <Box display="flex" sx={{ backgroundColor: "background.paper" }}>
      <Sidebar />
      <Container>
        <Content>
          <Navbar />
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer />
      </Container>
    </Box>
  );
};
export default MainLayout;
