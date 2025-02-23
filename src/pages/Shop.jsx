import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useCartContext } from "../context/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartContext();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">${product.price}</p>
                <Link
                  to={`/shop/${product.id}`}
                  className="mt-2 rounded-md inline-block text-center w-full text-black bg-white border-2 py-2 px-4 focus:outline-none"
                >
                  See Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 rounded-md inline-block text-center w-full text-white bg-black border-2 py-2 px-4 focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
