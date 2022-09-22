import React from 'react';
import { Link } from 'react-router-dom';
import imgb1 from '../img/blog/b1.png';
import imgb2 from '../img/blog/b2.png';
import imgb4 from '../img/blog/b4.png';

export default function Blog() {
  return (
    <div>
      <section className='blog section active' id='blog'>
        <div className='container'>
          <div className='row'>
            <div className='section-title pading-15'>
              <h1> letest Blog</h1>
            </div>
            <div className='row'>
              <div className='blog-item pading-15'>
                <div className='blog-item-inner'>
                  <div className='blog-img'>
                    <img src={imgb1} alt='blog' />
                    <div className='blog-date'>jun 2021</div>
                  </div>
                  <div className='blog-info'>
                    <h4 className='blog-title'>Responsive Web design</h4>
                    <p className='blog-description'>
                      Blogging can be very beneficial for web development
                      companies because they can keep their clients up to date
                      with their latest projects and showcase their expertise.
                      It also allows them to engage with their customers and
                      provide them with valuable insight into the latest trends
                      in the industry.
                    </p>
                    <p className='blog-tag'>
                      Tags : <Link to='#'>Adobe XD </Link>
                      <Link to='#'>Photoshop</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='blog-item pading-15'>
                <div className='blog-item-inner'>
                  <div className='blog-img'>
                    <img src={imgb2} alt='blog' />
                    <div className='blog-date'>Feb 2022</div>
                  </div>
                  <div className='blog-info'>
                    <h4 className='blog-title'>Responsive shop Web design</h4>
                    <p className='blog-description'>
                      Ecommerce web design at its finest, a wide selection of
                      different online stores and retailers for your inspiration
                      and ideas. If you have a physical store, be sure, your
                      website needs as much thought – maybe more. In a global
                      market, you’re going to need something that sets you apart
                      and stands out in the crowd.
                    </p>
                    <p className='blog-tag'>
                      Tags : <Link to='#'>React Js </Link>
                      <Link to='#'>Material UI </Link>
                      <Link to='#'>Redux</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='blog-item pading-15'>
                <div className='blog-item-inner'>
                  <div className='blog-img'>
                    <img src={imgb4} alt='blog' />
                    <div className='blog-date'>Apr 2022</div>
                  </div>
                  <div className='blog-info'>
                    <h4 className='blog-title'>Image gallery litebox</h4>
                    <p className='blog-description'>
                      Photographers and web designers are constantly looking for
                      a way to showcase their creativity. In the internet age,
                      creating an online gallery to highlight the best works is
                      a great way to attract clients.Most website layouts in
                      this collection have a clean and minimalist design. So,
                      your audience won’t be distracted from your stunning
                      photography or web design portfolio.
                    </p>
                    <p className='blog-tag'>
                      Tags : <Link to='#'>html </Link>
                      <Link to='#'>css </Link>
                      <Link to='#'>JavaScript </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
