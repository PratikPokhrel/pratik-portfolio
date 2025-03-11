
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
