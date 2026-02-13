import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Partnership() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1F2D3D]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/partnership_team.jpg"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2D3D]/70" />
      </div>

      {/* Right Dark Triangle */}
      <div
        ref={sectionRef}
        className={`absolute triangle-dark bg-[#1F2D3D]/88 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
        style={{
          right: '-8vw',
          top: '-12vh',
          width: '66vw',
          height: '130vh',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[9vw]">
        {/* Headline */}
        <h2
          className={`text-white font-bold leading-tight tracking-tight max-w-[40vw] transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}
          style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
        >
          {t.partnership.headline}
        </h2>

        {/* Body */}
        <p
          className={`mt-8 text-[#B8C2CC] text-lg max-w-[36vw] leading-relaxed transition-all duration-800 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t.partnership.body}
        </p>

        {/* CTA */}
        <div
          className={`mt-10 transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary flex items-center gap-2"
          >
            {t.partnership.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
