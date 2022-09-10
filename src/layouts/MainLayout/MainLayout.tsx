import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { Wrapper, Container, Content } from "./MainLayout.styled";

const MainLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Content>
          <Navbar />
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
          <Footer />
        </Content>
      </Container>
    </Wrapper>
  );
};
export default MainLayout;
