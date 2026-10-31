import React from 'react';
import './portfolio.css';
import Menu from '../../components/portfolio/Menu';

const Portfolio = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>

      <div className='work__container grid'>
        {Menu.map((elem) => {
          const { id, image, title, subtitle, category, links } = elem;
          return (
            <div className='work__card' key={id}>
              <div className='work__thumbnail'>
                <img src={image} alt='' className='work__img' aria-hidden='true' />
                <div className='work__mask'></div>
              </div>

              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <p className='work__subtitle'>{subtitle}</p>
              <div className='work__links'>
                {links.map((link) => (
                  <a
                    className='work__link'
                    href={link.url}
                    key={link.type}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
