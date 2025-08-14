import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SideBar />
      <Hero />
    </main>
  );
}
