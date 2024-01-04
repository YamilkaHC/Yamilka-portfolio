import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/hero/Hero';
import Layout from '@/components/layout/Layout';
import TestimonySlider from '@/components/testimony/TestimonySlider';

const Index = () => {
  return (
    <Layout>
      <div className="text-gray-600 antialiased">
        <Hero />
        <TestimonySlider />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
