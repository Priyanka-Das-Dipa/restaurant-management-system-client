import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  return (
    <>
      <section className="my-24">
        <SectionTitle
          subHeading={"From 11:00 am to 10:00 pm"}
          heading={"order online"}
        ></SectionTitle>
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
              <p className="text-4xl uppercase text-center text-white -mt-12">
                Salads
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" />
              <p className="text-4xl uppercase text-center text-white -mt-12">
                Soups
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" />
              <p className="text-4xl uppercase text-center text-white -mt-12">
                pizzas
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" />
              <p className="text-4xl uppercase text-center text-white -mt-12">
                Desserts
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide5} alt="" />
              <p className="text-4xl uppercase text-center text-white -mt-12">
                Salads
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Category;
