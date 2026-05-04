import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Models from "@/components/sections/Models";
import Reviews from "@/components/sections/Reviews";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Models />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  );
}