import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/hero/Hero';
import Layout from '@/components/layout/Layout';
import ResumeSection from '@/components/resumeSection/ResumeSection';
import SelectedWork from '@/components/selectedWork/SelectedWork';
import SkillsSection from '@/components/skillsSection/SkillsSection';
import TestimonySlider from '@/components/testimony/TestimonySlider';

const Index = () => {
  return (
    <Layout>
      <div className="text-gray-600 antialiased">
        <div className="h-[2px]" id="home"></div>
        <Hero />
        <SelectedWork />
        <ResumeSection />
        <SkillsSection />
        <TestimonySlider />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
