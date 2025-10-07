import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-brand/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/ChatGPT Image Oct 4, 2025, 09_31_03 PM copy.png" alt="AiLogic Agency" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold text-white">AiLogic Agency</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transform your business with intelligent AI automation solutions.
              We help growing businesses streamline operations and unlock new opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-cyan-brand/10 border border-cyan-brand/30 rounded-lg flex items-center justify-center hover:bg-cyan-brand/20 transition-colors">
                <Linkedin className="text-cyan-brand" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-brand/10 border border-cyan-brand/30 rounded-lg flex items-center justify-center hover:bg-cyan-brand/20 transition-colors">
                <Twitter className="text-cyan-brand" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-brand/10 border border-cyan-brand/30 rounded-lg flex items-center justify-center hover:bg-cyan-brand/20 transition-colors">
                <Github className="text-cyan-brand" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-brand/10 border border-cyan-brand/30 rounded-lg flex items-center justify-center hover:bg-cyan-brand/20 transition-colors">
                <Mail className="text-cyan-brand" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-cyan-brand transition-colors">n8n Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-brand transition-colors">Voiceflow Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-brand transition-colors">Website Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#why-us" className="text-gray-400 hover:text-cyan-brand transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-cyan-brand transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-brand transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-brand transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-brand/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AiLogic Agency. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Powered by AI Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
