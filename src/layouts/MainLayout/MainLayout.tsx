import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import { Container, Content } from "./MainLayout.styled";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Container>
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
