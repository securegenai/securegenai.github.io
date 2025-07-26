import React from 'react';
import { AlertTriangle, Clock, Users, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Latest AI security vulnerabilities, attack vectors, and emerging risks from leading researchers."
    },
    {
      icon: Clock,
      title: "Weekly Delivery",
      description: "Critical updates and analysis delivered every Tuesday, keeping you ahead of evolving threats."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with AI safety researchers, security professionals, and policy makers worldwide."
    },
    {
      icon: BookOpen,
      title: "Implementation Guides",
      description: "Practical frameworks and best practices for implementing AI safety measures in your organization."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Weekly newsletter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Short. Concise. To the point.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;