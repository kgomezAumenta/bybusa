import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
