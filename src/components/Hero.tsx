import { useState, useEffect } from 'react';

const Hero = () => {
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    // Load iframe after initial page render for better performance
    const timer = setTimeout(() => {
      setLoadIframe(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
          Secure GenAI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Your weekly source for GenAI security & safety intelligence
        </p>
        
        {/* Loading placeholder */}
        <div className="subscription-box mb-8 flex justify-center min-h-[240px] items-center animate-fade-in">
          {loadIframe ? (
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
          ) : (
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="skeleton rounded-lg h-4 mb-4"></div>
              <div className="skeleton rounded-lg h-4 w-3/4 mx-auto mb-6"></div>
              <div className="skeleton rounded-lg h-10"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;