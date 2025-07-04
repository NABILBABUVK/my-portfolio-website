/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/
/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies

/**
 components
 **/
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Review from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach(element => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        ease: 'power2.out',
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
