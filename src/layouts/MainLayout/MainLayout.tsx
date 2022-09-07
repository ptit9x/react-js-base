import { Outlet } from "react-router-dom";
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
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </Wrapper>
  );
};
export default MainLayout;
