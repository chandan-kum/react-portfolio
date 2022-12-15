import React from 'react'
import CTA from "./Cta"
import Hsocal from './Hsocal'
import "./Header.css"
import ME from "../../assits/me.png"
const Header = () => {
  return (
    <header>
      <div className="container header_conta">
        <h5>
          Hello I'm
        </h5>
        <h1>Chandan kumar</h1>
        <h5 className='text-light'>Fullstack deveioper</h5>
        <CTA/>
        <Hsocal/>
        <div className="me">
          <img src={ME} alt='' />
        </div>
        <a href='#contact' className='scroll_down'>Scrool Down</a>
      </div>
    </header>
  )
}

export default Header