// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="/images/Profile_pic.png" 
          alt="Profile" 
          className="w-40 h-40 mx-auto rounded-full mb-6 border-4 border-blue-500"
        />
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a passionate visual storyteller dedicated to capturing timeless moments through the lens. 
          My work blends creativity, emotion, and narrative to craft experiences that resonate deeply.
        </p>
      </div>
    </section>
  );
};

export default About;
