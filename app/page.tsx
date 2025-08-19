import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import Experiences from "@/components/Experiences";
// import Portfolio from "@/components/Portfolio";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SideBar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
