import React, { useState } from 'react';
import { Phone, LocationOn, Email } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();

    setEmail('');
    setMessage('');
    setName('');
    setSubject('');

    emailjs
      .sendForm(
        'service_qcm28xo',
        'template_tjpdiqs',
        e.target,
        'FFAroOxqgtqBE0WhO'
      )
      .then(
        (result) => {
          alert('your message is send successfully');
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div>
      <section className='contact section active' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='section-title pading-15'>
              <h1>contact me</h1>
            </div>
          </div>
          <div className='row'>
            <div className='contact-info-item pading-15'>
              <div className='icon'>
                <Phone className='fa' />{' '}
              </div>
              <h4>call us on</h4>
              <p>+92-345-5311063</p>
            </div>

            <div className='contact-info-item pading-15'>
              <div className='icon'>
                <LocationOn className='fa' />{' '}
              </div>
              <h4>office</h4>
              <p>kohat, KPK, pakistan</p>
            </div>

            <div className='contact-info-item pading-15'>
              <div className='icon'>
                <Email className='fa' />{' '}
              </div>
              <h4>email</h4>
              <p>iafridi640@gmail.com</p>
            </div>
          </div>
          <div className='row'>
            <form className='contact-form pading-15' onSubmit={submitRequest}>
              <div className='row'>
                <div className='form-item col-6 pading-15 '>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      placeholder='Name'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                </div>
                <div className='form-item col-6 pading-15 '>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='user_email'
                      className='form-control'
                      placeholder='Email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='form-item col-12 pading-15 '>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='form-item col-12 pading-15 '>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      name='message'
                      placeholder='Message'
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className=' col-12 pading-15 '>
                  <button type='submit' value='send' className='btn'>
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
