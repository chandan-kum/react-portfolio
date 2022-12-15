import React from 'react'
import "./Experence.css"
import { BsPatchCheckFill } from "react-icons/bs"
const Experence = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experence</h2>
      <div className="container exp_cont">
        <div className="exp_full">
          <h3>FullStack Developer</h3>
          <div className="exp_conte">
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>HTML & CSS</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>

            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>REACT JS</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>NODE JS & EXPRESS JS </h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>REST & GRAPHQL API</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>SQL  & NOSQL</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>NEST JS</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>FLUTTER</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
          </div>
        </div>
        {/* devops */}
        <div className="exp_devo">
          <h3>Devops</h3>
          <div className="exp_conte">
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>Linux</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>

            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>Ansible & Chef</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>AWS & GCP</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>SHELL & PYTHON SCRIPT </h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>DOCKER</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>KUBERNETES</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>NGINX & TOMCAT</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
            <article className='exp_detail'>
              <BsPatchCheckFill className='exp_icon' />
              <div>
              <h4>JENKIN</h4>
              <small className='text_light'>Experenced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experence