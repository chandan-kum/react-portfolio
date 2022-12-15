import React from 'react'
import "./About.css"; 
import ME from "../../assits/me-about.jpg"  
import {FaAward}  from "react-icons/fa"  
import {FiUsers} from "react-icons/fi"  
import {VscFolderActive} from "react-icons/vsc"                                                         
const About = () => {
  return (
    <section id='about'>
       <h5>Get to know</h5>
       <h2>About Me</h2>
       <div className="container about_cont">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About image' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderActive className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores ad ipsa sed 
            tenetur aliquam, reprehenderit, dolor id quidem ea laboriosam exercitationem repellat
             error voluptas et aliquid distinctio similique animi.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
       </div>
    </section>
  )
}

export default About