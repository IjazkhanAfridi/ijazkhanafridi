import React from 'react';
import { CalendarToday } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import cv from '../img/CV.pdf';
export default function About() {
  return (
    <div>
      <section className='about section active' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='section-title pading-15'>
              <h1> About me</h1>
            </div>
          </div>
          <div className='row'>
            <div className='about-content pading-15'>
              <div className='row'>
                <div className='about-text pading-15'>
                  <h3>I am ijaz Khan and i am a web Developer </h3>
                  <p>
                    My Name is Ijaz khan, I belong from Kohat KPK pakistan,I
                    have completed graduation in software engineering from Kohat
                    University of Sciece and Technology, I am proficient in Web
                    Development and work on HTML, CSS, JavaScript, Bootstrap,
                    React Js, Node Js MongoDb etc.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='personal-info pading-15'>
                  <h2>Personal Info</h2>
                  <div className='row'>
                    <div className='info-item pading-15 info-item-margin'>
                      <p>
                        D o B : <span> Aug 2000</span>
                      </p>
                    </div>
                    <div className='info-item info-item-margin pading-15'>
                      <p>
                        Email : <span> iafridi640@gmail</span>
                      </p>
                    </div>
                    <div className='info-item info-item-margin pading-15'>
                      <p>
                        Degree : <span> BS Software Engineering</span>
                      </p>
                    </div>
                    <div className='info-item info-item-margin pading-15'>
                      <p>
                        Phone : <span>+92-345-5311063</span>{' '}
                      </p>
                    </div>
                    <div className='info-item info-item-margin pading-15'>
                      <p>
                        City : <span> Kohat </span>
                      </p>
                    </div>
                    <div className='info-item info-item-margin pading-15'>
                      <p>
                        freelancing : <span> Available</span>{' '}
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='buttons pading-15'>
                      <a href={cv} download>
                        <button type='download' className='btn'>
                          Download CV
                        </button>
                      </a>
                      <Link
                        to='/contact'
                        data-section-index='1'
                        className='btn hire-me'
                      >
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='skills pading-15'>
                  <h2>Skills</h2>
                  <div className='row'>
                    <div className='skill-item pading-15'>
                      <h5>HTML</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '85%' }}
                        ></div>
                        <div className='skill-percentage'>85%</div>
                      </div>
                    </div>
                    <div className='skill-item pading-15'>
                      <h5>CSS</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '85%' }}
                        ></div>
                        <div className='skill-percentage'>85%</div>
                      </div>
                    </div>
                    <div className='skill-item pading-15'>
                      <h5>JavaScript</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '80%' }}
                        ></div>
                        <div className='skill-percentage'>80%</div>
                      </div>
                    </div>
                    <div className='skill-item pading-15'>
                      <h5>Bootstap</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '85%' }}
                        ></div>
                        <div className='skill-percentage'>85%</div>
                      </div>
                    </div>
                    <div className='skill-item pading-15'>
                      <h5>React Js</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '75%' }}
                        ></div>
                        <div className='skill-percentage'>75%</div>
                      </div>
                    </div>
                    <div className='skill-item pading-15'>
                      <h5>Node Js</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '50%' }}
                        ></div>
                        <div className='skill-percentage'>50%</div>
                      </div>
                    </div>
                    <div className='skill-item pading-15'>
                      <h5>Mongo DB</h5>
                      <div className='progress'>
                        <div
                          className='progress-in'
                          style={{ width: '60%' }}
                        ></div>
                        <div className='skill-percentage'>60%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row position'>
                <div className='education pading-15'>
                  <h3 className='title'>education</h3>
                  <div className='row'>
                    <div className='timeline-box pading-15'>
                      <div className='timeline'>
                        <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h6 className='timeline-date'>
                            <CalendarToday className='fa' />
                            2018 - 2022
                          </h6>
                          <h4 className='timeline-title'>
                            BS in software Engineering
                          </h4>
                          <p className='timeline-text'>
                            <b>Institute : </b>
                            Kohat University of Science and Technolgy Kohat
                          </p>

                          <p className='timeline-text'>
                            <b>Date : </b>
                            Apr 2018 to Aug 2022
                          </p>

                          <p className='timeline-text'>
                            <b>Marks : </b>
                            3.12 CGPA / 4
                          </p>
                        </div>
                        <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h6 className='timeline-date'>
                            <CalendarToday className='fa ' />
                            2016 - 2018
                          </h6>
                          <h4 className='timeline-title'>
                            FSc in Pre Engineering
                          </h4>

                          <p className='timeline-text'>
                            <b>Collage : </b>
                            Govt Heigher Scondry School Togh Bala Kohat
                          </p>

                          <p className='timeline-text'>
                            <b>Date : </b>
                            March 2016 to March 2018
                          </p>

                          <p className='timeline-text'>
                            <b>Marks : </b>
                            67 Perscent
                          </p>
                        </div>
                        <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h6 className='timeline-date'>
                            <CalendarToday className='fa' />
                            2014 - 2016
                          </h6>
                          <h4 className='timeline-title'>Matric in Science</h4>
                          <p className='timeline-text'>
                            <b>School : </b>
                            Govt Heigh Scondry School shadi khel Kohat
                          </p>

                          <p className='timeline-text'>
                            <b>Date : </b>
                            March 2014 to March 2016
                          </p>

                          <p className='timeline-text'>
                            <b>Marks : </b>
                            65 Perscent
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='experience pading-15'>
                  <h3 className='title'>experience</h3>
                  <div className='row'>
                    <div className='timeline-box pading-15'>
                      <div className='timeline'>
                        <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h6 className='timeline-date'>
                            <CalendarToday className='fa ' />
                            2018 - Present
                          </h6>
                          <h4 className='timeline-title'>Frontend Developer</h4>
                          <p className='timeline-text'>
                            i have been working as a Frontend Developer since
                            2018 using HTML, CSS, JavaScript, Bootasrap etc, and
                            I build Multiple Project using these Technologies,
                            Such as EComrace, Portfolio, learning Sites etc.
                          </p>
                        </div>
                        <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h6 className='timeline-date'>
                            <CalendarToday className='fa ' />
                            2020 - Present
                          </h6>
                          <h4 className='timeline-title'>React Js Developer</h4>
                          <p className='timeline-text'>
                            i have been working as a React Developer since 2020,
                            and I build Multiple Project Such as Online
                            ClassRoom, EComrace, Portfolio, learning Sites and
                            Social Sites etc, using React, Readux, Material UI,
                            Style Component, etc.
                          </p>
                        </div>
                        <div className='timeline-item'>
                          <div className='circle-dot'></div>
                          <h6 className='timeline-date'>
                            <CalendarToday className='fa' />
                            2021 - 2022
                          </h6>
                          <h4 className='timeline-title'>Final Year Project</h4>
                          <p className='timeline-text'>
                            I build Final Year Project Name Online ClassRoom
                            Using React Js, Node Js, Express Js and MongoDB
                            (MERN).
                          </p>
                        </div>
                      </div>
                    </div>
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
