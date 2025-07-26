import React from 'react';
import { Shield, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-6">
            {/* <Shield className="w-6 h-6" /> */}
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Join the AI Safety Community</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Connect with researchers and practitioners building safer AI systems worldwide.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <Globe className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Secure GenAI. All rights reserved. 
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;