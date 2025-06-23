import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import AppointmentForm from "@/sections/AppointmentForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <AppointmentForm />
    </main>
  );
} 