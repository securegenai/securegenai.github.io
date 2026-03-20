import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Available: Q2 2025",
      excerpt: "Update the threat landscape.",
      date: "July, 01 2025",
      readTime: "4 min read",
      image: "https://substackcdn.com/image/fetch/$s_!8ZHk!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F68b93298-809a-4923-96b7-f0f895364269_1464x1056.png",
      category: "Security",
      url: "https://securedgenai.substack.com/p/available-q2-2025-report"
    },
    {
      title: "Review: Threat Modeling for Agentic AI",
      excerpt: "Introducing 7 layer MAESTRO.",
      date: "June 08, 2025",
      readTime: "7 min read",
      image: "https://substackcdn.com/image/fetch/$s_!EWrP!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7f3d465a-3a00-499e-b816-9d8d622b6d44_812x462.png",
      category: "Implementation",
      url: "https://securedgenai.substack.com/p/review-threat-modeling-for-agentic"
    },
    {
      title: "Review: Agentic AI security",
      excerpt: "A Simple Walk through of Agentic AI Architecture.",
      date: "January 1, 2025",
      readTime: "7 min read",
      image: "https://substackcdn.com/image/fetch/$s_!Qnjy!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F843cd9c0-2077-4ae1-a7c1-079ee8032097_1101x727.png",
      category: "Regulation",
      url: "https://securedgenai.substack.com/p/review-agentic-ai-security"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Safety Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge research and analysis on emerging GenAI security threats, vulnerabilities, and defense strategies from leading experts worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read article: ${article.title} - ${article.excerpt}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer block card-hover"
            >
              <div className="relative overflow-hidden">
                <picture>
                  <source 
                    srcSet={article.image.replace('.png', '.webp')} 
                    type="image/webp"
                  />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 image-hover"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="192"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </picture>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-green-500 font-semibold group-hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://securedgenai.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all intelligence reports on Secure GenAI Substack"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 group"
          >
            View All Intelligence Reports
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;