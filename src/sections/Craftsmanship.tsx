import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Craftsmanship() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1F2D3D]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/craftsmanship_finish.jpg"
          alt="Drywall finishing work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2D3D]/70" />
      </div>

      {/* Left Accent Triangle */}
      <div
        ref={sectionRef}
        className={`absolute triangle-accent bg-[#F2A900]/90 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
        style={{
          left: '-6vw',
          top: '-10vh',
          width: '60vw',
          height: '120vh',
        }}
      />

      {/* Content - Right aligned */}
      <div className="relative z-10 h-full flex flex-col justify-center items-end px-6 lg:px-[9vw]">
        <div className="max-w-[40vw] text-right">
          {/* Headline */}
          <h2
            className={`text-white font-bold leading-tight tracking-tight transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            {t.craftsmanship.headline}
          </h2>

          {/* Body */}
          <p
            className={`mt-8 text-[#B8C2CC] text-lg leading-relaxed transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t.craftsmanship.body}
          </p>

          {/* CTA */}
          <div
            className={`mt-10 flex justify-end transition-all duration-800 delay-600 ${
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
              {t.craftsmanship.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
