import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartModal from "../components/CartModal";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CartModal />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#3B82F6",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default Layout;
