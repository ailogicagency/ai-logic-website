import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import ROICalculator from './components/ROICalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <ROICalculator />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
