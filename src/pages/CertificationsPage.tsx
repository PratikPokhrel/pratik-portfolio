
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default CertificationsPage;
