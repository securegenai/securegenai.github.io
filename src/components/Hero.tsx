import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="subscription-box mb-8 flex justify-center">
          <iframe 
            src="https://securedgenai.substack.com/embed" 
            width="1440" 
            height="240"
            style={{ border: 'none', maxWidth: '100%' }} 
            title="Subscription box"
            sandbox="allow-scripts allow-same-origin allow-forms"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        {/* <p className="text-sm text-gray-500">
          Secure, privacy-focused delivery. Unsubscribe anytime.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;