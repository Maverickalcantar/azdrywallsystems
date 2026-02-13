import { LanguageProvider } from './i18n/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Insulation } from './sections/Insulation';
import { Craftsmanship } from './sections/Craftsmanship';
import { Partnership } from './sections/Partnership';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#1F2D3D]">
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <Hero />
          <Services />
          <Insulation />
          <Craftsmanship />
          <Partnership />
          <About />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
