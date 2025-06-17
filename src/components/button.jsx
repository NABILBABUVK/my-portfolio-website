/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

/**
icons
 **/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

/**
node modules
 **/
import PropTypes from 'prop-types';

/**
ButtonPrimary button
 **/

const ButtonPrimary = ({ href, target = '_self', label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn btn-primary ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-primary ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string, // ✅ fixed from hreaf
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node, // ✅ use `PropTypes.node` instead of `element` if you might pass a string (icon font)
  classes: PropTypes.string,
};

/**
outline button
 **/

const ButtonOutline = ({ href, target = '_self', label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn btn-outline ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-outline ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  href: PropTypes.string, // ✅ fixed from hreaf
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node, // ✅ use `PropTypes.node` instead of `element` if you might pass a string (icon font)
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
