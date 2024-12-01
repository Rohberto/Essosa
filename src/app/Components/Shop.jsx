"use client"
import React from 'react';
import { Collections } from '../Utils';
import Marquee from './Marquee';
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper/modules";

const Shop = () => {
  return (
    <section className='Shop_container' data-scroll-section>
        <Marquee/>
        <Swiper 
   grabCursor={true}
   slidesPerView={4}
   spaceBetween={20}
   breakpoints={{
    320: {
      slidesPerView: 1.5, // 1 slide per view for screens 320px and up
      spaceBetween: 10, // 10px space between slides
    },
    768: {
      slidesPerView: 2, // 2 slides per view for screens 768px and up (tablets)
      spaceBetween: 20, // 20px space between slides
    },
    1024: {
      slidesPerView: 3, // 3 slides per view for screens 1024px and up (desktops)
      spaceBetween: 30, // 30px space between slides
    },
  }}
  className='swiper_container' >
        {
          Collections.map((collection, i) => (
            <SwiperSlide key={i} className='slider-container'>
              <div className="slideImageContainer">
                <img src={`/${collection.image}`} alt="" className="slideImage" />
              </div>
              <h4 className='slide_name'>{collection.name}</h4>
              <p className="slide_price">&#8358;{collection.price}</p>
            <button className="slide_cart">Add to Cart</button>
            </SwiperSlide>

          ))
        }
    </Swiper>

      
    </section>
  )
}

export default Shop
