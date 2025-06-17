/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

const ProjectCards = ({ imgsrc, title, tags, projectLink, classes }) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${
        classes || ''
      }`}
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgsrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div className="project-card-header">
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="w-5 h-5"
          />
        </div>
      </div>
    </a>
  );
};

ProjectCards.propTypes = {
  imgsrc: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  projectLink: propTypes.string,
  classes: propTypes.string,
};

export default ProjectCards;
