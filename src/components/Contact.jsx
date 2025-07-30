import React from 'react';
const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-4 relative">
  <div className="flex animate-scrollMarqueeR hover:[animation-play-state:paused]">
    <span className="text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
      contact . contact . contact . contact .
    </span>
    <span className="text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
      contact . contact . contact . contact .
    </span>
  </div>
</div>
        <p className="mb-10 text-gray-700">Let’s create something amazing together. Drop me a message!</p>
        <div className="max-w-xl mx-auto text-center">
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 border rounded-lg h-32 focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
