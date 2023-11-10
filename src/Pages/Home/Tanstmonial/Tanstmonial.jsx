import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
// FaQuoteLeft
import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Tanstmonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"What our client said"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center p-14 flex flex-col items-center justify-center space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl"></FaQuoteLeft>
                <p className="text-xl">{review.details}</p>
                <h1 className="text-4xl text-orange-400">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tanstmonial;
