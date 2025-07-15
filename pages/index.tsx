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
import { PongGame } from "../components/PongGame";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-4">
        <div className="container mx-auto px-6 lg:px-12">
          <HeroSection />
        </div>
      </section>

      {/* Background Section */}
      <section className="pt-4 pb-12 bg-slate-800/50">
        <div className="container mx-auto px-6 lg:px-12">
          <Background />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <Projects />
        </div>
      </section>

      {/* Demos Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6 lg:px-12">
          <Demos />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="glass-effect rounded-xl p-6">
              <TicTacToe />
            </div>
            <div className="glass-effect rounded-xl p-6">
              <PongGame />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <Experience />
        </div>
      </section>

      {/* Creative Section */}
      {/* <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6 lg:px-12">
          <Creative />
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 lg:px-12">
          <Footer />
        </div>
      </footer>
    </main>
  );
}
