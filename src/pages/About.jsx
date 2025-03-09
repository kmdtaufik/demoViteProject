const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "10+ years experience in e-commerce",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech visionary with passion for innovation",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    // Add more team members...
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 p-8 rounded">
                <img
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  src={member.image}
                />
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {member.name}
                </h2>
                <h3 className="text-indigo-500 mb-3">{member.role}</h3>
                <p className="leading-relaxed mb-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
