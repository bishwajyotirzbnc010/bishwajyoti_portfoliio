// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Visual Journey</h1>
      <p className="max-w-2xl text-lg text-gray-700 mb-10">
        Welcome to a visual journey that transcends time and space. 
        Discover the artistry of moments captured in motion.
      </p>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="text-xl">
          <span className="block text-3xl italic font-bold">+250k</span>
          Videos reaching wide audiences
        </div>
        <div className="text-xl">
          <span className="block text-3xl italic font-bold">+800k</span>
          Hours watched, cinematic impact
        </div>
      </div>
    </section>
  );
};

export default Hero;
