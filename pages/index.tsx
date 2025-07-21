// Import components
import HeroSection from "../components/HeroSection";
import Background from "../components/Background";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Creative from "../components/Creative";

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

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <Experience />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6 lg:px-12">
          <Projects />
        </div>
      </section>

      {/* Demos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
              Interactive Demos
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I enjoy teaching myself and learning new technologies. Here are
              some interactive demos I&apos;ve built using React and modern web
              technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-16">
            <div className="glass-effect rounded-xl p-8">
              <TicTacToe />
            </div>
            <div className="glass-effect rounded-xl p-8">
              <PongGame />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Section */}
      {/* <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6 lg:px-12">
          <Creative />
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
