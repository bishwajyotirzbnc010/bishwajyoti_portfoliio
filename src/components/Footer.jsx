// src/components/Footer.jsx
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGooglePlusG,
  FaFlickr,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm px-6">
        <div>
          <h3 className="font-bold mb-2">LOGO</h3>
          <p>SOLOGAN COMPANY</p>
        </div>
        <div>
          <ul className="space-y-1">
            <li>WEEBLY THEMES</li>
            <li>PRE-SALE FAQS</li>
            <li>SUBMIT A TICKET</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li>SERVICES</li>
            <li>THEME TWEAK</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li>SHOWCASE</li>
            <li>WIDGETKIT</li>
            <li>SUPPORT</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>AFFILIATES</li>
            <li>RESOURCES</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <FaFacebookF />
          <FaTwitter />
          <FaRss />
          <FaGooglePlusG />
          <FaFlickr />
        </div>
        <p className="text-sm text-gray-400">&copy;Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
