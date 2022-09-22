import React from 'react';
import ServiceData from './ServiceData';
export default function Services() {
  return (
    <div>
      <section className='service section active' id='service'>
        <div className='container'>
          <div className='row'>
            <div className='section-title pading-15'>
              <h1> Services</h1>
            </div>
          </div>
          <div className='row'>
            {ServiceData.map((val, index) => {
              return (
                <div className='service-item pading-15' key={index}>
                  <div className='service-item-inner'>
                    <div className='icon'>{val.icon}</div>
                    <h4>{val.heading}</h4>
                    <p>{val.paragraph}</p>
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
