import { BookOpen, ExternalLink } from 'lucide-react';
import q2_2026Cover from '../images/q2-2026-cover.png';
import q1_2026Cover from '../images/q1-2026-cover.png';
import q4_2025Cover from '../images/q4-2025-cover.png';
import q3_2025Cover from '../images/q3-2025-cover.png';
import agenticAiQuantumCover from '../images/agentic-ai-quantum-cover.png';
import q2_2025Cover from '../images/q2-2025-cover.png';
import q4_2024Cover from '../images/q4-2024-cover.png';
import q3_2024Cover from '../images/q3-2024-cover.png';
import q1q2_2024Cover from '../images/q1-q2-2024-cover.png';
import theFirstChapterCover from '../images/the-first-chapter-cover.png';

type Publication = {
  title: string;
  type: string;
  description: string;
  url: string;
  coverImage?: string;
};

const publications: Publication[] = [
  {
    title: 'Q2, 2026 Book Report',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/Q2Y2026',
    coverImage: q2_2026Cover,
  },
  {
    title: 'Q1, 2026 Book Report',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/q12026',
    coverImage: q1_2026Cover,
  },
  {
    title: 'Q4, 2025 Book Report',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/Q42025',
    coverImage: q4_2025Cover,
  },
  {
    title: 'Q3, 2025 Book Report',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/Q42025BookReport',
    coverImage: q3_2025Cover,
  },
  {
    title: 'Agentic AI & Quantum',
    type: 'Special report',
    description: 'A publication exploring security and safety across agentic AI and quantum technology.',
    url: 'https://emmapn.gumroad.com/l/AgenticAIAndQuantum',
    coverImage: agenticAiQuantumCover,
  },
  {
    title: 'Book Report: GenAI Safety and Security, Q2 2025',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/Q22025Report',
    coverImage: q2_2025Cover,
  },
  {
    title: 'Book Report: GenAI Safety and Security, Q4 2024',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/nvphjq',
    coverImage: q4_2024Cover,
  },
  {
    title: 'Book Report: GenAI Safety and Security, Q3 2024',
    type: 'Quarterly report',
    description: 'A quarterly review of GenAI safety and security developments.',
    url: 'https://emmapn.gumroad.com/l/GenAISafetySecurityQ3Y2024',
    coverImage: q3_2024Cover,
  },
  {
    title: 'Book Report: GenAI Safety and Security, Q1&2 2024',
    type: 'Quarterly report',
    description: 'A combined first and second quarter review of GenAI safety and security.',
    url: 'https://emmapn.gumroad.com/l/GenAISafetySecurityQ12Y2024',
    coverImage: q1q2_2024Cover,
  },
  {
    title: 'The first chapter: Stories of human and machine.',
    type: 'Book',
    description: 'Stories of human and machine.',
    url: 'https://emmapn.gumroad.com/l/thefirstchapter',
    coverImage: theFirstChapterCover,
  },
];

const Books = () => (
  <section id="books" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Publications
        </h2>
        <p className="text-xl text-gray-600">
          Earlier reports and books by Emma Nguyen, listed newest first.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((publication) => (
          <article
            key={publication.url}
            className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
          >
            {publication.coverImage ? (
              <img
                src={publication.coverImage}
                alt={`${publication.title} cover`}
                className="mb-5 h-52 w-full rounded-lg border border-gray-100 bg-gray-50 object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pale text-brand-ink">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
              </div>
            )}
            <p className="mb-2 text-sm font-medium text-brand-ink">{publication.type}</p>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{publication.title}</h3>
            <p className="mb-6 flex-1 text-gray-600">{publication.description}</p>
            <a
              href={publication.url}
              className="inline-flex items-center gap-2 font-medium text-brand-ink underline decoration-brand-muted decoration-2 underline-offset-4 hover:decoration-brand-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              View publication
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://emmapn.gumroad.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-mint px-6 py-3 font-semibold text-brand-ink transition-colors hover:bg-brand-hover"
        >
          Browse all publications on Gumroad
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Books;
