import { Brain, MessageSquare, Globe } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'n8n Automation',
    description: 'Build powerful workflow automations with n8n',
    benefit: 'Connect your tools and automate complex processes',
    features: ['Workflow Automation', 'API Integration', 'Custom Nodes']
  },
  {
    icon: MessageSquare,
    title: 'Voiceflow Solutions',
    description: 'Create intelligent conversational AI experiences',
    benefit: 'Natural language processing for seamless interactions',
    features: ['Voice Assistants', 'Chatbot Development', 'Multi-channel Support']
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites with AI integration',
    benefit: 'From concept to deployment',
    features: ['Custom Design', 'AI-Powered Features', 'SEO Optimized']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-brand">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI automation services designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 border border-cyan-brand/20 rounded-xl p-8 hover:border-cyan-brand/50 hover:shadow-xl hover:shadow-cyan-brand/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cyan-brand/10 border-2 border-cyan-brand rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-brand/20 transition-colors">
                <service.icon className="text-cyan-brand" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="bg-cyan-brand/10 border-l-4 border-cyan-brand rounded px-4 py-3 mb-6">
                <p className="text-cyan-brand font-semibold text-sm">
                  {service.benefit}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-brand rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
