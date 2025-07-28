// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-gray-700">Let’s create something amazing together. Drop me a message!</p>
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
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
