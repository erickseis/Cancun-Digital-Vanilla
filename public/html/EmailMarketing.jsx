import React, { Fragment } from 'react';
import Contact from './Contact';
import '../assets/styles/email.css';
import imgEmail from '../assets/images/SVG/mail.svg';
import imgText from '../assets/images/email/text.png';
import imgGraphic from '../assets/images/email/diseñoweb.png';
import imgObj from '../assets/images/email/objetivos.png';
import imgSeg from '../assets/images/email/icon_segmentacionj.png';
import imgAnal from '../assets/images/email/analisis.png';
import { Helmet } from 'react-helmet';

const EmailMarketing = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Email Marketign</title>
        <meta
          name='desciption'
          content='Empleando esta herramienta, podras comunicarte digitalmente con leads y clientes a través del envío masivo de correos electrónicos a una base de contactos.'
        />
      </Helmet>
      <div className='email-container-general'>
        <div className='container-img-title-email web'>
          <img src={imgEmail} alt='' />
        </div>
        <div class='wave email'></div>
        <div class='wave2 email'></div>
        <div class='wave3 email'></div>
        <h1>EMAIL MARKETING</h1>
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ab
          fugiat possimus reiciendis nisi animi hic ducimus? Expedita nulla
          dolores tempora amet veniam ipsa magni odit recusandae cupiditate.
          Non, laborum?
        </p>
      </div>
      <div className='container-email'>
        <div className='email-description-card'>
          <img src={imgText} alt='' />
          <h4>Contenido Texto</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='email-description-card'>
          <img src={imgGraphic} alt='' />

          <h4>Banner para Campaña</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='email-description-card'>
          <img src={imgObj} alt='' />

          <h4>Diseño Web</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='email-description-card'>
          <img src={imgSeg} alt='' />

          <h4>Segmentacion</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='email-description-card'>
          <img src={imgAnal} alt='' />

          <h4>Análisis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
      </div>
      <section>
        <Contact />
      </section>
    </Fragment>
  );
};

export default EmailMarketing;
