import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assits/portfolio1.jpg"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My REcent Work</h5>
      <h2>Portfolio</h2>
      <div className="container port_cont">
        <article className='port_item'>
          <div className="port_imag">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is project tittle</h3>
          <div className="prot-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='port_item'>
          <div className="port_imag">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is project tittle</h3>
          <div className="prot-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='port_item'>
          <div className="port_imag">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is project tittle</h3>
          <div className="prot-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='port_item'>
          <div className="port_imag">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is project tittle</h3>
          <div className="prot-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='port_item'>
          <div className="port_imag">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is project tittle</h3>
          <div className="prot-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='port_item'>
          <div className="port_imag">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is project tittle</h3>
          <div className="prot-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio