import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Hero from '@/components/homePage/Hero';
import ServicesSection from '@/components/homePage/Services';
import AboutSection from '@/components/homePage/AboutUs';
import Slider from '@/components/homePage/Slider';

 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      
      <Hero />
      <AboutSection />
      <ServicesSection />
      

    </div>
  );
}