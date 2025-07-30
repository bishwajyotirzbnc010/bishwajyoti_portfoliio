import React from 'react';

const Hero = () => {
  return (
    <section className="text-center px-6 py-20 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Slogan text section */}
      <div className="flex flex-col items-start text-left space-y-6">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold">Visual Journey</h1>
        
        <p className="text-lg text-gray-700 md:w-4/5">
          Welcome to a visual journey that transcends time and space. 
          Discover the artistry of moments captured in motion.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 mt-4">
          <div className="text-xl">
            <span className="block text-3xl italic font-bold">+250k</span>
            Videos reaching wide audiences
          </div>
          <div className="text-xl">
            <span className="block text-3xl italic font-bold">+800k</span>
            Hours watched, cinematic impact
          </div>
        </div>
      </div>

      {/* Profile pic section */}
      <div className="flex justify-center">
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 rounded-3xl overflow-hidden">
          <img 
            src="/image/Profile_pic.png" 
            alt="Profile" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
