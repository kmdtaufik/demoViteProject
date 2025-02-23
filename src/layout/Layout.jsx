import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartModal from "../components/CartModal";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CartModal />
    </>
  );
};

export default Layout;
