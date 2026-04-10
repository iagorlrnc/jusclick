import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Law } from './components/Law';
import { HowItWorks } from './components/HowItWorks';
import { Differentiator } from './components/Differentiator';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Law />
        <HowItWorks />
        <Differentiator />
        <Contact />
        <CallToAction />
      </main>
      
      <footer style={{ backgroundColor: 'var(--c-dark)', color: 'var(--c-light)', padding: '2rem', textAlign: 'center', fontFamily: 'var(--font-body)' }}>
        <p>&copy; {new Date().getFullYear()} Jusclick. Uso consciente da tecnologia para proteção da mulher.</p>
      </footer>
    </>
  );
};

export default App;
