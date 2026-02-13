import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1F2D3D]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero_desert_site.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1F2D3D]/72" />
      </div>

      {/* Triangle Shapes */}
      {/* Left Accent Triangle */}
      <div
        className={`absolute triangle-accent bg-[#F2A900]/90 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}
        style={{
          left: '-6vw',
          top: '-10vh',
          width: '62vw',
          height: '120vh',
        }}
      />

      {/* Right Dark Triangle */}
      <div
        className={`absolute triangle-dark bg-[#1F2D3D]/85 transition-all duration-1000 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}
        style={{
          right: '-10vw',
          top: '-18vh',
          width: '70vw',
          height: '140vh',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[9vw]">
        {/* Headline */}
        <h1
          className={`text-white font-bold leading-[0.95] tracking-tight max-w-[42vw] transition-all duration-800 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          {t.hero.headline}
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-8 text-[#B8C2CC] text-lg lg:text-xl max-w-[34vw] leading-relaxed transition-all duration-800 ease-out delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-wrap gap-4 transition-all duration-800 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
          }`}
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary flex items-center gap-2"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={scrollToWork} className="btn-secondary">
            {t.hero.ctaSecondary}
          </button>
        </div>

        {/* Trust Line */}
        <p
          className={`mt-12 text-white/60 text-sm uppercase tracking-wider transition-all duration-800 ease-out delay-900 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t.hero.trust}
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#F2A900] transition-all duration-500 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
}
