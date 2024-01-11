import { motion, useScroll } from 'framer-motion';

import AboutMe from '@/components/aboutMe/AboutMe';
import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/hero/Hero';
import Layout from '@/components/layout/Layout';
import ResumeSection from '@/components/resumeSection/ResumeSection';
import SelectedWork from '@/components/selectedWork/SelectedWork';
import SkillsSection from '@/components/skillsSection/SkillsSection';
import TestimonySlider from '@/components/testimony/TestimonySlider';

const Index = () => {
  const { scrollYProgress } = useScroll();
  return (
    <Layout>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="text-gray-600 antialiased">
        <div className="h-[2px]" id="home"></div>
        <Hero />
        <AboutMe />
        <SelectedWork />
        <SkillsSection />
        <ResumeSection />
        <TestimonySlider />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
