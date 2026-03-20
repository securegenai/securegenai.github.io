import { BookOpen, Star, ExternalLink } from 'lucide-react';
import frame1Image from '../images/Frame 1.png';
import frame2Image from '../images/Frame 2.png';
import frame3Image from '../images/Frame 3.png';
import frame4Image from '../images/Frame 4.png';
import frame5Image from '../images/Frame 5.png';
import frame6Image from '../images/Frame 6.png';

const Books = () => {
  const books = [
    {
      title: "Q1&2 Y2025",
      author: "Emma",
      description: "Comprehensive quarterly report covering the latest developments in GenAI security, emerging threats, and mitigation strategies for the first half of 2025.",
      rating: 4.8,
      category: "Security",
      image: frame1Image,
      url: "https://securedgenai.substack.com/p/free-e-book-genai-safety-and-security"
    },
    {
      title: "Q3 Y2025",
      author: "Emma",
      description: "Third quarter analysis of GenAI implementation challenges, regulatory updates, and best practices for secure AI deployment in enterprise environments.",
      rating: 4.6,
      category: "Implementation",
      image: frame2Image,
      url: "https://securedgenai.substack.com/p/available-now-book-report-q3-2024"
    },
    {
      title: "Q4 Y2025",
      author: "Emma",
      description: "Year-end comprehensive review of GenAI safety protocols, ethical considerations, and future outlook for responsible AI development.",
      rating: 4.7,
      category: "AI Safety",
      image: frame3Image,
      url: "https://securedgenai.substack.com/p/available-q4-2024-book-report"
    },
    {
      title: "Year 2024",
      author: "Emma",
      description: "Annual retrospective on GenAI security landscape, major incidents, lessons learned, and strategic recommendations for 2025.",
      rating: 4.5,
      category: "Security",
      image: frame4Image,
      url: "https://securedgenai.substack.com/p/available-y2-genai-safety-and-security?utm_source=publication-search"
    },
    {
      title: "Q1 Y2024",
      author: "Emma",
      description: "First quarter insights into emerging GenAI threats, vulnerability assessments, and proactive security measures for AI systems.",
      rating: 4.4,
      category: "Ethics",
      image: frame5Image,
      url: "https://securedgenai.substack.com/p/available-q1-2025-book-report"
    },
    {
      title: "Q2 Y2024",
      author: "Emma",
      description: "Second quarter analysis of GenAI regulatory developments, compliance frameworks, and policy implications for AI governance.",
      rating: 4.9,
      category: "Regulation",
      image: frame6Image,
      url: "https://securedgenai.substack.com/p/available-q2-2025-report"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Safety': 'bg-blue-100 text-blue-800',
      'Security': 'bg-red-100 text-red-800',
      'Ethics': 'bg-purple-100 text-purple-800',
      'Implementation': 'bg-green-100 text-green-800',
      'Regulation': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="books" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recommended Reading
          </h2>
          <p className="text-xl text-gray-600">
            Essential books for understanding GenAI security, safety, and responsible development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <picture>
                  <source 
                    srcSet={book.image.replace('.png', '.webp')} 
                    type="image/webp"
                  />
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 image-hover"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="256"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </picture>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(book.category)}`}>
                    {book.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-800">{book.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {book.title}
                </h3>
                
                <p className="text-green-600 font-medium mb-3">
                  by {book.author}
                </p>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {book.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <BookOpen className="w-4 h-4" />
                    <span>Report</span>
                  </div>
                  
                  <a
                    href={book.url}
                    className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Have a book recommendation for our community?
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Suggest a Book</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Books;
