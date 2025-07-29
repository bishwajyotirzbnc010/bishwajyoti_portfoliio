import React from 'react';
const Hero = () => {
  return (
    <section className="text-center px-6 py-20 bg-gray-50 grid grid-cols-2 sm:grid-cols">
      {/* Slogon text section */}
      <div className='flex flex-col items-center'>
      <h1 className="text-7xl md:text-9xl font-bold mb-6 text-left">Visual Journey</h1>
      <br /><br />

      <div className='w-1/2'>
      <p className="text-lg text-gray-700 mb-10 text-left">
        Welcome to a visual journey that transcends time and space. 
        Discover the artistry of moments captured in motion.
      </p>
      </div>

      <div className="flex md:flex-row gap-10">
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

    {/*Profile_pic section*/}
      <div className='flex justify-center m-auto '>
        <div className='w-4/5 rounded-4xl overflow-hidden'>
        <img 
          src="/image/Profile_pic.png" 
          alt="Profile" 
          className="border-black "
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
