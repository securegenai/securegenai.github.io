import { ArrowRight, CalendarDays } from 'lucide-react';
import q3ReportCover from '../images/q3-2026-cover.png';

const Articles = () => (
  <section id="articles" className="bg-[#f5f7f5] py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#363737] sm:text-sm">
            Latest release
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Latest Safety Intelligence
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A field guide to Q3 AI safety and security, organized around boundaries, scale, and response.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 md:mb-1">
          <CalendarDays className="h-4 w-4 text-brand-muted" aria-hidden="true" />
          <span>October 1, 2026</span>
        </div>
      </div>

      <a
        href="https://q3y2026.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read GenAI Safety and Security Q3 2026, the latest Secure GenAI special report"
        className="group mt-9 grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-muted focus-visible:ring-offset-4 md:mt-12 md:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative aspect-square overflow-hidden bg-[#f8f6ed] sm:aspect-[4/3] md:aspect-auto md:min-h-[360px] lg:min-h-[440px]">
          <img
            src={q3ReportCover}
            alt="GenAI Safety & Security Q3 2026 report cover, featuring a golden eagle"
            className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.025] sm:p-8 md:p-10"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 lg:p-12">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-mint px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-ink sm:text-sm">
            Special report · Q3 2026
          </span>
          <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-gray-950 sm:text-3xl lg:text-4xl">
            GenAI Safety &amp; Security
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            The illustrated executive edition brings together field reporting and source figures on evaluation boundaries, risks that spread through shared systems, and incident response.
          </p>

          <dl className="mt-7 grid grid-cols-3 gap-3 border-t border-gray-200 pt-5 sm:mt-8 sm:gap-5 sm:pt-6">
            <div>
              <dt className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">65</dt>
              <dd className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">field notes</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">11</dt>
              <dd className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">source figures</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">3</dt>
              <dd className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">report themes</dd>
            </div>
          </dl>

          <span className="mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-brand-mint px-5 py-3 text-sm font-semibold text-brand-ink transition-colors group-hover:bg-brand-hover sm:mt-8 sm:text-base">
            Read the special report
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </a>
    </div>
  </section>
);

export default Articles;
