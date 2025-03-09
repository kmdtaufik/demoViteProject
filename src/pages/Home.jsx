const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
      category: "Accessories",
    },
    // Add more products...
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        {/* ... existing hero section ... */}
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-2xl font-medium text-center mb-8">
            Featured Products
          </h2>
          <div className="flex flex-wrap -m-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="p-6">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
