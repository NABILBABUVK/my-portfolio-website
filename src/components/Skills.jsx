/**
 * @copyright 2025 Nabil's_portfolio
 * @license Apache-2.0
 **/

/**
 * componets
 **/
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/Figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: '/images/CSS3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/images/JavaScript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: '/images/Nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: '/images/Expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: '/images/MongoDB.svg',
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: '/images/React.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/Tailwind CSS.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
