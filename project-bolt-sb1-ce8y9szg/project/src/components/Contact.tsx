import { useState } from 'react';
import { Mail, MapPin, Send, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!supabase) {
        throw new Error('Database connection not available');
      }

      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            budget: formData.budget,
            service: formData.service,
            timeline: formData.timeline,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        timeline: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-brand/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-cyan-brand">Get Started</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule your free consultation and discover how AI automation can transform your business
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-brand/10 border-2 border-cyan-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-brand" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <div className="text-white font-semibold">ailogicagency@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-brand/10 border-2 border-cyan-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cyan-brand" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Location</div>
                    <div className="text-white font-semibold">Remote & On-site Available</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-800/30 border border-cyan-brand/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Project Budget *</label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                  >
                    <option value="">Select Your Budget Range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Primary Interest *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                  >
                    <option value="">Select Your Primary Interest</option>
                    <option value="process-automation">Process Automation</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="custom-ai">Custom AI Solution</option>
                    <option value="chatbot">Chatbot Development</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Project Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (Less than 1 month)</option>
                    <option value="quarter">This Quarter</option>
                    <option value="planning">Planning Phase</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-semibold">Tell us about your automation goals</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors resize-none"
                  placeholder="Describe your current challenges and what you hope to achieve with AI automation..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400">
                  Thank you! We'll be in touch within 24 hours to schedule your free consultation.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
                  Something went wrong. Please try again or contact us directly at ailogicagency@gmail.com
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-brand text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-brand/50 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Get Your Free Consultation'}</span>
                {!isSubmitting && <Send size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
