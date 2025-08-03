import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css'


export default function Testimonials() {
    const clients = [
      {
          img: profilePic1,
          review: 
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolore beatae, blanditiis repellendus possimus incidunt mollitia saepe aliquid reiciendis ad dolorum illum sapiente culpa voluptates facilis commodi voluptatum suscipit accusantium?",
      },
      {
          img: profilePic2,
          review: 
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolore beatae, blanditiis repellendus possimus incidunt mollitia saepe aliquid reiciendis ad dolorum illum sapiente culpa voluptates facilis commodi voluptatum suscipit accusantium?",
      },
      {
          img: profilePic3,
          review: 
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolore beatae, blanditiis repellendus possimus incidunt mollitia saepe aliquid reiciendis ad dolorum illum sapiente culpa voluptates facilis commodi voluptatum suscipit accusantium?",
      },
      {
          img: profilePic4,
          review: 
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolore beatae, blanditiis repellendus possimus incidunt mollitia saepe aliquid reiciendis ad dolorum illum sapiente culpa voluptates facilis commodi voluptatum suscipit accusantium?",
      },

    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{background: "skyblue"}}></div>
        </div>
        {/* slider  */}
        <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}

        >

            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonials">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}

        </Swiper>
    </div>
  )
}
