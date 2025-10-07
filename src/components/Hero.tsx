import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToROI = () => {
    const element = document.getElementById('roi-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-brand/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-brand/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 229, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-brand/10 border border-cyan-brand/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="text-cyan-brand" size={18} />
            <span className="text-cyan-brand text-sm font-semibold">AI-Powered Business Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="text-cyan-brand">Intelligent Automation</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in developing tailored AI automation systems that streamline operations,
            reduce costs, and unlock new opportunities for growing businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-cyan-brand text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-brand/50 transition-all flex items-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={scrollToROI}
              className="border-2 border-cyan-brand text-cyan-brand px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-brand/10 transition-all"
            >
              Calculate Your ROI
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-brand mb-2">75%</div>
              <div className="text-gray-400">Reduction in Processing Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-brand mb-2">24/7</div>
              <div className="text-gray-400">Automated Operations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-brand mb-2">24h</div>
              <div className="text-gray-400">Reply Within (Business Days)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
