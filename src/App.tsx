import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Law } from './components/Law';
import { HowItWorks } from './components/HowItWorks';
import { Differentiator } from './components/Differentiator';
import { CallToAction } from './components/CallToAction';
import { Service } from './components/Service';
import { Contact } from './components/Contact';
import { AssessmentForm } from './components/AssessmentForm';

export const App: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Service />
        <Problem />
        <Law />
        <HowItWorks />
        <Differentiator />
        <Contact />
        <AssessmentForm />
        <CallToAction />
      </main>
      
      <footer style={{ backgroundColor: 'var(--c-dark)', color: 'var(--c-light)', padding: '2rem', textAlign: 'center', fontFamily: 'var(--font-body)' }}>
        <p>&copy; {new Date().getFullYear()} Jusclick<br/>Proteção da mulher</p>
      </footer>
    </>
  );
};

export default App;
