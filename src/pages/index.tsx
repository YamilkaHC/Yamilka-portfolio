import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/hero/Hero';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="text-gray-600 antialiased">
        <Hero />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
