const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of E-commerce",
      excerpt: "Exploring trends shaping online shopping",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=600",
    },
    {
      id: 2,
      title: "Sustainable Packaging Solutions",
      excerpt: "How we are reducing environmental impact",
      date: "March 10, 2024",
      image:
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600",
    },
    // Add more posts...
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-2xl font-medium text-center mb-8">Latest Posts</h2>
        <div className="flex flex-wrap -m-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                  <p className="leading-relaxed mt-2">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
