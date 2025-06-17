/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    const el = lastActiveLink.current;
    activeBox.current.style.top = `${el.offsetTop}px`;
    activeBox.current.style.left = `${el.offsetLeft}px`;
    activeBox.current.style.width = `${el.offsetWidth}px`;
    activeBox.current.style.height = `${el.offsetHeight}px`;
  };

  useEffect(() => {
    // Set first nav link as active by default
    const firstActive = document.querySelector('.nav-link');
    if (firstActive) {
      firstActive.classList.add('active');
      lastActiveLink.current = firstActive;
      initActiveBox();
    }

    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  const activeCurrentLink = event => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    lastActiveLink.current = event.currentTarget;
    initActiveBox();
  };

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav className={`navbar${navOpen ? ' open' : ''}`}>
      {navItems.map(({ label, link, className }) => (
        <a
          key={label}
          href={link}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
