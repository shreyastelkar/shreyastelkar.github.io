// Import components
import HeroSection from "../components/HeroSection";
import Background from "../components/Background";
import Projects from "../components/Projects";
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Creative from "../components/Creative"

// Optionally import Contact and ChakraProvider if needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#19432d]" >
      <Navigation />
      <div className= "container mt-20 mx-auto px-12 py-4">
        <HeroSection />
        <Background />
      </div>
      <div className="border border-black border-width:500px bg-[#323030]"> 
        <Projects />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Creative />
      </div> 
      <div className="bg-black text-white">
        <Footer />
      </div>
    </main>
  );
}

{/* 
    <Navigation />
    <Background />
      </div>

      <div className="border border-black border-width:500px bg-[#323030]"> 
        <Projects />
      </div>
      <div>
        <Experience />
      </div>

      <div className="bg-black text-white">
        <Footer />
      </div> */}