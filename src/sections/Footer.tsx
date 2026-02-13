import { useLanguage } from '../i18n/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#1F2D3D] border-t border-white/10">
      <div className="px-6 lg:px-[9vw] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase mb-4">
              {t.footer.company}
            </h3>
            <p className="text-[#B8C2CC] leading-relaxed max-w-md">
              {t.about.description}
            </p>
            
            {/* Address */}
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F2A900] mt-0.5 flex-shrink-0" />
              <p className="text-[#B8C2CC]">{t.footer.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('work');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  {t.nav.work}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:602-480-3557"
                  className="flex items-center gap-2 text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {t.footer.phone1}
                </a>
              </li>
              <li>
                <a
                  href="tel:602-377-0134"
                  className="flex items-center gap-2 text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {t.footer.phone2}
                </a>
              </li>
              <li>
                <a
                  href="mailto:estimates.azdrywall@gmail.com"
                  className="flex items-center gap-2 text-[#B8C2CC] hover:text-[#F2A900] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B8C2CC]/60 text-sm">
            © {currentYear} {t.footer.company}. {t.footer.rights}
          </p>
          <p className="text-[#B8C2CC]/60 text-sm">
            LLC #23874318
          </p>
        </div>
      </div>
    </footer>
  );
}
