/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

/**
 * font-icons
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

/** node modules **/
import { useState } from 'react';

/** components **/
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            type="button"
            className="p-2 rounded-md transition-all duration-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 md:hidden"
            onClick={() => setNavOpen(prev => !prev)}
          >
            <span className="text-2xl text-white">
              {navOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
