import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../../public/img1.jpg'
import image0 from '../../../../public/home-banner.webp'
import image2 from '../../../../public/img2.jpg'
import image3 from '../../../../public/img3.jpg'
import image4 from '../../../../public/img4.jpg'
import image5 from '../../../../public/img5.jpg'
import image6 from '../../../../public/img6.jpg'
import image7 from '../../../../public/img7.jpg'
import image8 from '../../../../public/img8.jpg'
import image9 from '../../../../public/img9.jpg'
import image10 from '../../../../public/img10.jpg'
import image11 from '../../../../public/img11.jpg'
import image12 from '../../../../public/img12.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Banner() {
  return (
    <div className='my-6'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scroll={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><Slider image={image0} text={'only book is your friend '} />  </SwiperSlide>
        <SwiperSlide><Slider  image={image3} text={''} />  </SwiperSlide>
        <SwiperSlide><Slider  image={image4} text={''} />  </SwiperSlide>
        <SwiperSlide><Slider  image={image5} text={''} />  </SwiperSlide>
        <SwiperSlide><Slider  image={image6} text={''} />  </SwiperSlide>
        <SwiperSlide><Slider  image={image2} text={''} />  </SwiperSlide>
        <SwiperSlide><Slider  image={image2} text={''} />  </SwiperSlide>

        
  
      </Swiper>
    </div>
  );
}







// git commit 
// 
// 


// 
// 

// 
// 
//  
// 
// 
// 
// 
// 
//  
// 