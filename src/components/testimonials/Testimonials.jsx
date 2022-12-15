import React from 'react'
import "./Testimonials.css"
import AVAT from "../../assits/avatar1.jpg"
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Testimonials = () => {
  return (
    <section id='testmonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container tes_conten"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testmo'>
          <div className="cli_avat">
            <img src={AVAT} alt="" />
          </div>
          <h5 className='cli_nam'>Jasan jugar</h5>
          <small className='cli_revi'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Obcaecati
            tempora illum nobis architecto sint corrupti exercitationem repudiandae! Maxime.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testmo'>
          <div className="cli_avat">
            <img src={AVAT} alt="" />
          </div>
          <h5 className='cli_nam'>Jasan jugar</h5>
          <small className='cli_revi'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Obcaecati
            tempora illum nobis architecto sint corrupti exercitationem repudiandae! Maxime.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testmo'>
          <div className="cli_avat">
            <img src={AVAT} alt="" />
          </div>
          <h5 className='cli_nam'>Jasan jugar</h5>
          <small className='cli_revi'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Obcaecati
            tempora illum nobis architecto sint corrupti exercitationem repudiandae! Maxime.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testmo'>
          <div className="cli_avat">
            <img src={AVAT} alt="" />
          </div>
          <h5 className='cli_nam'>Jasan jugar</h5>
          <small className='cli_revi'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Obcaecati
            tempora illum nobis architecto sint corrupti exercitationem repudiandae! Maxime.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials