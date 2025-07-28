// src/components/Portfolio.jsx
const Portfolio = () => {
  const projects = [
    { title: "Project One", img: "/images/01.jpeg" },
    { title: "Project Two", img: "/images/02.jpeg" },
    { title: "Project Three", img: "/images/03.jpeg" },
    { title: "Project Four", img: "/images/04.jpeg" },
    { title: "Project Five", img: "/images/05.jpeg" },
    { title: "Project Six", img: "/images/06.jpeg" },
  ];

  return (
    <section id="portfolio" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
