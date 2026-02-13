import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, Mail, Clock, Send, Check } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative w-full bg-[#E6E9EE] py-20 lg:py-28">
      <div className="px-6 lg:px-[9vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title and Contact Info */}
          <div
            ref={titleRef}
            className={`transition-all duration-800 ${
              titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2
              className="text-[#1F2D3D] font-bold"
              style={{ fontSize: 'clamp(32px, 3.6vw, 48px)' }}
            >
              {t.contact.title}
            </h2>
            <p className="mt-4 text-[#1F2D3D]/70 text-lg">
              {t.contact.subheadline}
            </p>

            {/* Direct Contact Info */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F2D3D] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#F2A900]" />
                </div>
                <div>
                  <p className="text-[#1F2D3D]/50 text-xs uppercase tracking-wider">
                    {t.contact.direct.call}
                  </p>
                  <a 
                    href="tel:602-480-3557" 
                    className="text-[#1F2D3D] font-semibold hover:text-[#F2A900] transition-colors"
                  >
                    602-480-3557
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F2D3D] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#F2A900]" />
                </div>
                <div>
                  <p className="text-[#1F2D3D]/50 text-xs uppercase tracking-wider">
                    {t.contact.direct.email}
                  </p>
                  <a 
                    href="mailto:estimates.azdrywall@gmail.com"
                    className="text-[#1F2D3D] font-semibold hover:text-[#F2A900] transition-colors"
                  >
                    estimates.azdrywall@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F2D3D] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#F2A900]" />
                </div>
                <div>
                  <p className="text-[#1F2D3D]/50 text-xs uppercase tracking-wider">
                    {t.contact.direct.hours}
                  </p>
                  <p className="text-[#1F2D3D] font-semibold">
                    {t.contact.direct.hoursValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            ref={formRef}
            className={`transition-all duration-800 delay-200 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 lg:p-10 border border-[#1F2D3D]/10"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-[#F2A900] rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#1F2D3D]" />
                  </div>
                  <p className="text-[#1F2D3D] font-semibold text-lg">
                    {t.contact.form.success}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[#1F2D3D]/60 text-xs uppercase tracking-wider mb-2">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent focus:border-[#F2A900] focus:bg-white text-[#1F2D3D] outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#1F2D3D]/60 text-xs uppercase tracking-wider mb-2">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent focus:border-[#F2A900] focus:bg-white text-[#1F2D3D] outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[#1F2D3D]/60 text-xs uppercase tracking-wider mb-2">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent focus:border-[#F2A900] focus:bg-white text-[#1F2D3D] outline-none transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-[#1F2D3D]/60 text-xs uppercase tracking-wider mb-2">
                        {t.contact.form.projectType}
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent focus:border-[#F2A900] focus:bg-white text-[#1F2D3D] outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">{t.contact.form.projectTypes.other}</option>
                        <option value="installation">{t.contact.form.projectTypes.installation}</option>
                        <option value="repair">{t.contact.form.projectTypes.repair}</option>
                        <option value="insulation">{t.contact.form.projectTypes.insulation}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-6">
                    <label className="block text-[#1F2D3D]/60 text-xs uppercase tracking-wider mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent focus:border-[#F2A900] focus:bg-white text-[#1F2D3D] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-8 w-full btn-primary flex items-center justify-center gap-2"
                  >
                    {t.contact.form.button}
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
