import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

const Category = () => {
  return (
    <>
    <div className="my-20">
    <div className="text-center my-10">
        <p className="text-2xl text-orange-400">---From 11:00am to 10:00pm---</p>
        <hr className="w-[450px] my-3 font-bold mx-auto" />
        <h2 className="text-5xl ">
        ORDER ONLINE
        </h2>
        <hr className="w-[450px] my-3 font-bold mx-auto" />
    </div>
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-4xl uppercase text-center text-white -mt-12">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-4xl uppercase text-center text-white -mt-12">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-4xl uppercase text-center text-white -mt-12">pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-4xl uppercase text-center text-white -mt-12">Desserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-4xl uppercase text-center text-white -mt-12">Salads</p>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
    
    </>
    
  );
};

export default Category;
