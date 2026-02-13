import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Shield, Clock, Award } from 'lucide-react';

export function About() {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLHeadingElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  const stats = [
    { number: t.about.stat1.number, label: t.about.stat1.label, icon: Award },
    { number: t.about.stat2.number, label: t.about.stat2.label, icon: Shield },
    { number: t.about.stat3.number, label: t.about.stat3.label, icon: Clock },
  ];

  return (
    <section id="about" className="relative w-full bg-[#1F2D3D] py-20 lg:py-28">
      <div className="px-6 lg:px-[9vw]">
        {/* Title */}
        <h2
          ref={titleRef}
          className={`text-white font-bold transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(32px, 3.6vw, 48px)' }}
        >
          {t.about.title}
        </h2>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={statsVisible}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-800 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Description */}
          <div>
            <p className="text-[#B8C2CC] text-lg leading-relaxed">
              {t.about.description}
            </p>
            
            {/* Coverage */}
            <div className="mt-8 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F2A900] mt-1 flex-shrink-0" />
              <p className="text-white/80 leading-relaxed">
                {t.about.coverage}
              </p>
            </div>
            
            {/* License */}
            <p className="mt-8 text-white/50 text-sm uppercase tracking-wider">
              {t.about.license}
            </p>
          </div>

          {/* Arizona Map SVG */}
          <div className="flex items-center justify-center lg:justify-end">
            <ArizonaMap />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: {
    number: string;
    label: string;
    icon: React.ElementType;
  };
  isVisible: boolean;
  delay: number;
}

function StatCard({ stat, isVisible, delay }: StatCardProps) {
  const Icon = stat.icon;
  
  return (
    <div
      className={`text-center lg:text-left transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
        <Icon className="w-6 h-6 text-[#F2A900]" />
        <span className="text-[#F2A900] font-bold text-5xl lg:text-6xl">
          {stat.number}
        </span>
      </div>
      <p className="text-[#B8C2CC] uppercase tracking-wider text-sm">
        {stat.label}
      </p>
    </div>
  );
}

function ArizonaMap() {
  return (
    <div className="relative w-full max-w-md">
      <svg
        viewBox="0 0 200 250"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arizona state outline */}
        <path
          d="M20 30 L180 30 L180 220 L100 220 L20 180 Z"
          stroke="#F2A900"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        />
        
        {/* Internal grid lines */}
        <line x1="20" y1="80" x2="180" y2="80" stroke="#F2A900" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="130" x2="180" y2="130" stroke="#F2A900" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="180" x2="100" y2="180" stroke="#F2A900" strokeWidth="0.5" opacity="0.3" />
        <line x1="70" y1="30" x2="70" y2="180" stroke="#F2A900" strokeWidth="0.5" opacity="0.3" />
        <line x1="125" y1="30" x2="125" y2="220" stroke="#F2A900" strokeWidth="0.5" opacity="0.3" />
        
        {/* City dots */}
        <circle cx="100" cy="100" r="4" fill="#F2A900" />
        <text x="108" y="104" fill="white" fontSize="8" opacity="0.8">Phoenix</text>
        
        <circle cx="70" cy="85" r="3" fill="#F2A900" opacity="0.7" />
        <text x="50" y="80" fill="white" fontSize="6" opacity="0.6">Glendale</text>
        
        <circle cx="125" cy="70" r="3" fill="#F2A900" opacity="0.7" />
        <text x="132" y="73" fill="white" fontSize="6" opacity="0.6">Scottsdale</text>
        
        <circle cx="140" cy="120" r="3" fill="#F2A900" opacity="0.7" />
        <text x="147" y="123" fill="white" fontSize="6" opacity="0.6">Mesa</text>
        
        <circle cx="60" cy="140" r="3" fill="#F2A900" opacity="0.7" />
        <text x="35" y="150" fill="white" fontSize="6" opacity="0.6">Peoria</text>
      </svg>
      
      {/* Service area label */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-[#F2A900] text-xs uppercase tracking-wider">
          Service Area
        </p>
      </div>
    </div>
  );
}
