import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import ProgramDetails from './components/ProgramDetails';
import About from './components/About';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark-2">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <ProgramDetails />
        <About />
        <Testimonials />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
