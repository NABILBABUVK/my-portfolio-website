/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

import PropTypes from 'prop-types';

// Generate a static 5-star rating
const Rating = new Array(5).fill(null).map(() => ({
  icon: 'star',
  style: {
    fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48',
  },
}));

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Rating.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Review Content */}
      <p className="text-zinc-400 mb-8">{content}</p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-2 mt-auto">
        <figure className="rounded-lg overflow-hidden w-[44px] h-[44px]">
          <img
            src={imgSrc}
            alt={`Photo of ${name}`}
            width={44}
            height={44}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
