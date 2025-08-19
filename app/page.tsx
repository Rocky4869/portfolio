import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
// import Portfolio from "@/components/Portfolio";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SideBar />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Portfolio />
    </main>
  );
}
