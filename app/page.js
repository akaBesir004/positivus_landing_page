import CaseStudies from "@/components/CaseStudies";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Logotypes } from "@/components/Logotypes";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";



export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <Logotypes />
    <Services />
    <CaseStudies />
    <WorkingProcess />
    <Team />
    <Testimonials />
    <ContactUs />
    <Footer />
    
  </div>
  );
}
