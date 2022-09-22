import React, { useState } from 'react';
import PorfolioData from './PortfolioData';

export default function Porfolio() {
  const [item, setItem] = useState(PorfolioData);
  const [isActive, setIsActive] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const datafilter = (categitem) => {
    const datacateg = PorfolioData.filter((curritem) => {
      return curritem.heading === categitem;
    });
    setItem(datacateg);
  };

  const handleNavigation = (value) => {
    setIsActive(value);
    if (value === 'all') {
      setItem(PorfolioData);
    } else {
      datafilter(value);
    }
  };

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {openModal && (
        <div className='bigimg' onClick={handleCloseModal}>
          <img src={item[slideNumber].imgsrc} alt='img ' />
        </div>
      )}
      <section className='portfolio section active' id='portfolio'>
        <div className='container'>
          <div className=' '>
            <div className='row'>
              <div className='section-title pading-15'>
                <h1> portfolio</h1>
              </div>
            </div>
            <div className='row'>
              <div className='portfolio-filter pading-15'>
                <button
                  type='button'
                  onClick={() => handleNavigation('all')}
                  className={isActive === 'all' ? 'active' : ''}
                >
                  all
                </button>
                <button
                  type='button'
                  onClick={() => handleNavigation('Web Design')}
                  className={isActive === 'Web Design' ? 'active ' : ''}
                >
                  Web Design
                </button>
                <button
                  type='button'
                  onClick={() => handleNavigation('Web Development')}
                  className={isActive === 'Web Development' ? 'active ' : ''}
                >
                  Web Development
                </button>
                <button
                  type='button'
                  onClick={() => handleNavigation('Logo Design')}
                  className={isActive === 'Logo Design' ? 'active ' : ''}
                >
                  Logo Design
                </button>
              </div>
            </div>
          </div>

          <div className='row'>
            {item &&
              item.map((val, ind) => {
                return (
                  <div
                    className='portfolio-item pading-15'
                    data-category='web-design'
                    key={ind}
                    onClick={() => handleOpenModal(ind)}
                  >
                    <div className='portfolio-item-inner shadow-dark'>
                      <div className='portfolio-img'>
                        <img src={val.imgsrc} alt='portflio' className='img' />
                      </div>
                      <div className='portfolio-info'>
                        <h4>{val.heading}</h4>
                        <span className='icon'>{val.icon}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
