import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import Projects from './components/Projects';
import GamesSection from './features/games/GamesSection';

import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <ThreeBackground />
      <div className="container">
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <GamesSection />
        <Workflow />
        <Quiz />
        <Contact />
        <Footer />
      </div>
      <Toaster position="bottom-right" theme="dark" />
    </>
  );
}

export default App;
