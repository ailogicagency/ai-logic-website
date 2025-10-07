import { Zap, Users, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Personalized Attention',
    description: 'As a boutique agency, we provide dedicated focus to each client, ensuring your project gets the attention it deserves.'
  },
  {
    icon: Zap,
    title: 'Agile Implementation',
    description: 'Faster deployment without corporate red tape. We adapt quickly to your needs and deliver results efficiently.'
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees. You always know what you are paying for and why.'
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support',
    description: 'We are with you every step of the way, from initial consultation to post-deployment optimization and beyond.'
  }
];

const techPartners = [
  'n8n',
  'Voiceflow',
  'OpenAI',
  'Vapi',
  'Google Workspace',
  'Supabase'
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-cyan-brand">AiLogic</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Partner with industry experts who put your success first
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-cyan-brand/20 rounded-xl p-8 hover:bg-gray-800/50 hover:border-cyan-brand/40 transition-all"
            >
              <div className="w-14 h-14 bg-cyan-brand/10 border-2 border-cyan-brand rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="text-cyan-brand" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-cyan-brand/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Platforms & Technologies We Work With
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-black/50 border border-cyan-brand/20 rounded-lg p-4 flex items-center justify-center hover:border-cyan-brand/50 transition-colors"
                >
                  <span className="text-gray-300 font-semibold text-sm text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-cyan-brand/10 border border-cyan-brand/30 rounded-full px-4 py-2">
                <Shield className="text-cyan-brand" size={16} />
                <span className="text-cyan-brand text-sm font-semibold">Compliant with Industry Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
