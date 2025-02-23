import { Link } from "react-router";
import { Icon } from "@iconify/react";
import { useCartContext } from "../context/CartContext";

const Header = () => {
  const { openCart, cartItems } = useCartContext();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
          <Link to="/shop" className="mr-5 hover:text-gray-900">
            Shop
          </Link>
        </nav>
        <button onClick={openCart} className="inline-flex items-center gap-2">
          <Icon icon="mdi:cart-outline" width="24" height="24" />
          {cartItems.length > 0 && (
            <span className="bg-indigo-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
