import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-brand/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/ChatGPT Image Oct 4, 2025, 09_31_03 PM copy.png" alt="AiLogic Agency" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-white">AiLogic Agency</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-cyan-brand transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-cyan-brand transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:text-cyan-brand transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-cyan-brand text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-brand/50 transition-all">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-brand"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-cyan-brand transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left text-gray-300 hover:text-cyan-brand transition-colors py-2">
              Process
            </button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left text-gray-300 hover:text-cyan-brand transition-colors py-2">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full bg-cyan-brand text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-brand/50 transition-all mt-2">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
