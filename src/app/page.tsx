import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import ClientWrapper from "./ClientWrapper";

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-white">
      <ClientWrapper>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </ClientWrapper>
    </main>
  );
} 