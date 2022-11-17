import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react"; // basic
import SwiperCore, {Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import Mainimg1 from '../images/Main1.jpg';
import Mainimg2 from '../images/Main2.jpg';
import Mainimg3 from '../images/Main3.jpg';
import Mainimg4 from '../images/Main4.jpg';
import '../style/style.scss';


SwiperCore.use([Pagination, Autoplay]) //Pagination(버튼 클릭시 원하는 이미지)

const Coowo = () => {

    return(
            <Swiper
                 className='StyleCoowo'
                 spaceBetween={50}
                 slidesPerView={1}
                 pagination={{ clickable: true, }}
                 loop={true}		        
                 loopedSlides={1}
                 autoplay={{ delay: 2500, disableOnInteraction: false}}
                 style={{zIndex:0}}
            >
                <SwiperSlide><img src={Mainimg1} alt='Mainimg01' style={{width:'100%'}}/></SwiperSlide>
                <SwiperSlide><img src={Mainimg2} alt='Mainimg02' style={{width:'100%'}}/></SwiperSlide>
                <SwiperSlide><img src={Mainimg3} alt='Mainimg03' style={{width:'100%'}}/></SwiperSlide>
                <SwiperSlide><img src={Mainimg4} alt='Mainimg04' style={{width:'100%'}}/></SwiperSlide>
            </Swiper>
    );
}

export default Coowo;