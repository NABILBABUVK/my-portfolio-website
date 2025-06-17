/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

import React from 'react';

const aboutItems = [
  {
    label: 'Project done',
    number: 45,
  },
  {
    label: 'Years of experience',
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! Bachelor of Computer Applications graduate with hands-on
            experience in MERN stack development. Adept at building modern,
            scalable full-stack applications with clean and maintainable code.
            Skilled in crafting responsive user interfaces, designing RESTful
            APIs, and working collaboratively in agile environments. Passionate
            about developing meaningful products and solving real-world problems
            through code.
          </p>
          <div className="flex flex-wrap itemsicenter gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="\images\logo.svg"
              alt="Logo"
              className="ml-auto md:w-[40px] md:h-[40px]"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
