import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Home, Wrench, Thermometer } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLHeadingElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  const services = [
    {
      icon: Home,
      title: t.services.card1.title,
      description: t.services.card1.description,
      image: '/services_install.jpg',
    },
    {
      icon: Wrench,
      title: t.services.card2.title,
      description: t.services.card2.description,
      image: '/services_repair.jpg',
    },
    {
      icon: Thermometer,
      title: t.services.card3.title,
      description: t.services.card3.description,
      image: '/services_insulation.jpg',
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#E6E9EE] py-20 lg:py-28">
      {/* Top border rule */}
      <div className="absolute top-10 left-[9vw] right-[9vw] h-px bg-[#1F2D3D]/20" />

      <div className="px-6 lg:px-[9vw]">
        {/* Title */}
        <h2
          ref={titleRef}
          className={`text-[#1F2D3D] font-bold transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(32px, 3.6vw, 48px)' }}
        >
          {t.services.title}
        </h2>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`mt-16 transition-all duration-800 delay-500 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#1F2D3D] font-semibold hover:text-[#F2A900] transition-colors group"
          >
            {t.services.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`service-card overflow-hidden transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#1F2D3D] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#F2A900]" />
          </div>
          <h3 className="text-[#1F2D3D] font-bold text-lg">{service.title}</h3>
        </div>
        <p className="text-[#1F2D3D]/70 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}
