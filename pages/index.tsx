// Import components
import HeroSection from "../components/HeroSection";
import Background from "../components/Background";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Creative from "../components/Creative";
import Demos from "../components/Demos";
import { TicTacToe } from "../components/TicTacToe";
// Optionally import Contact and ChakraProvider if needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#19432d]">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Navigation />
      <div className="container mt-20 mx-auto px-12 py-4">
        <HeroSection />
        <Background />
      </div>
      <div className="border border-black border-width:500px bg-[#323030]">
        <Projects />
      </div>
      <div>
        <Demos />
        <TicTacToe />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Creative />
      </div>
      <div className="text-white">
        <Footer />
      </div>
    </main>
  );
}
