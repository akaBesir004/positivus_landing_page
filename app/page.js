import CaseStudies from "@/components/CaseStudies";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Logotypes } from "@/components/Logotypes";
import Team from "@/components/Team";



export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <Logotypes />
    <CaseStudies />
    <Team />
    <ContactUs />
    <Footer />
    
  </div>
  );
}
