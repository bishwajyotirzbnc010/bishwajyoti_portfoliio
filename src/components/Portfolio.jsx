import React from 'react';
const Portfolio = () => {
  const projects = [
    { title: "", img: "/image/01.jpeg" },
    { title: "", img: "/image/02.jpeg" },
    { title: "", img: "/image/03.jpeg" },
    { title: "", img: "/image/04.jpeg" },
    { title: "", img: "/image/05.jpeg" },
    { title: "", img: "/image/06.jpeg" },
  ];

  return (
    <section id="portfolio" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white shadow-md rounded-3xl overflow-hidden">
              <img src={p.img} alt={p.title} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
