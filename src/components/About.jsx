import React from 'react';
const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-4 relative">
  <div className="flex animate-scrollMarqueeL hover:[animation-play-state:paused]">
    <span className="text-white text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
      about . about . about . about . about . about .
    </span>
    <span className="text-white text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
      about . about . about . about . about . about .
    </span>
  </div>
</div>

        <p className="text-lg text-white leading-relaxed">
          I'm a passionate visual storyteller dedicated to capturing timeless moments through the lens. 
          My work blends creativity, emotion, and narrative to craft experiences that resonate deeply.
        </p>
      </div>
    </section>
  );
};

export default About;
