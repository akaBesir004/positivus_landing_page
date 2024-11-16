import CaseStudies from "@/components/CaseStudies";
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
  </div>
  );
}
