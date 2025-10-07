import { Search, Lightbulb, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We analyze your current processes and identify automation opportunities',
    details: ['Process mapping', 'Pain point identification', 'ROI estimation']
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: 'We create a tailored AI solution blueprint aligned with your goals',
    details: ['Custom architecture', 'Technology selection', 'Implementation roadmap']
  },
  {
    icon: Cog,
    title: 'Development & Testing',
    description: 'We build and rigorously test your AI automation system',
    details: ['Agile development', 'Quality assurance', 'User acceptance testing']
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description: 'We launch your solution and provide ongoing optimization',
    details: ['Seamless integration', 'Team training', 'Continuous improvement']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-brand/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-brand/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-brand">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology to transform your business with AI automation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-brand to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-brand/50">
                  <step.icon className="text-black" size={36} />
                </div>

                <div className="flex-1 bg-gray-800/50 border border-cyan-brand/20 rounded-xl p-6 hover:border-cyan-brand/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <span className="text-cyan-brand/50 font-bold text-3xl">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-brand/10 text-cyan-brand text-sm px-3 py-1 rounded-full border border-cyan-brand/30"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-brand to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
