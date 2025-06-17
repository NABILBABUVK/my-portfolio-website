/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

/**
icons
 **/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons';

/**
components
 **/

import { ButtonPrimary, ButtonOutline } from './button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-2">
            <figure className="w-9 h-9 rounded-lg overflow-hidden">
              <img
                src="/images/nabilcopy02.jpg"
                width={40}
                height={40}
                alt="Nabil's Portrait"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon={<FontAwesomeIcon icon={faDownload} />}
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={<FontAwesomeIcon icon={faArrowDown} />}
            />
            {/* If ButtonOutline is needed, import and use it properly */}
            {/* <ButtonOutline label="Contact Me" icon={<FontAwesomeIcon icon={faEnvelope} />} /> */}
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] 
          ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/images/image-upscaled.jpeg"
              width={656}
              height={800}
              alt="NabilBabuVk"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
