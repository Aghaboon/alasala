import Hero from '@/components/homePage/Hero';
import ServicesSection from '@/components/homePage/Services';
import AboutSection from '@/components/homePage/AboutUs';
import ClientWrapper from '@/components/homePage/ClientWrapper';
import ProjectSection from '@/components/homePage/Projects';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ClientWrapper />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      

    </div>
  );
}