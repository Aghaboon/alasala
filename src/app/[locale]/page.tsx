import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Hero from '@/components/homePage/Hero';
import ServicesSection from '@/components/homePage/Services';
import AboutSection from '@/components/homePage/AboutUs';
import ClientWrapper from '@/components/homePage/ClientWrapper';
import ProjectSection from '@/components/homePage/Projects';

export default function HomePage() {
  const t = useTranslations('HomePage');
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