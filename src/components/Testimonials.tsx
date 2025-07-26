import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: 'Hi Emma. Good luck with your work!',
      name: 'Micheal',
      role: 'CTO, an AI testing startup',
    },
    {
      content: "I've really enjoyed reading your post - you've done some great work there. I'll certainly reach out to you for anything related to AI compliance and governance, as I'll be spending more time in these areas in the coming months.",
      name: 'Joe',
      role: 'CTO, an applied AI startup',
    },
    {
      content: 'Thank you for sharing Emma, and all the best!',
      name: 'Vijay',
      role: 'Executive, AI policy maker',
    },
    {
      content: "That's an interesting topic. I have subscribed to your newsletter. Thanks Emma.",
      name: 'Ludovic',
      role: 'Cloud Architech, BioTech',
    },
    {
      content: `Really enjoyed this, Emma—super digestible breakdown.👏\n\nThe agent vs. agentic AI distinction isn’t just academic—it’s shaping how we think about automation, orchestration, and even risk in real-world deployments.\n\nFrom a business perspective, architectures like this help us see where value is created and where potential vulnerabilities might emerge. Excited to see how these patterns evolve, especially as multi-agent systems start showing up in more enterprise use cases.\n\nAppreciate you sharing this!`,
      name: 'Adam',
      role: 'Managing Partner, Security',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by leaders and pioneers,
          </h2>
          <p className="text-xl text-gray-600">
            Join top startups, academic researchers, cybersecurity experts, and policy makers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;