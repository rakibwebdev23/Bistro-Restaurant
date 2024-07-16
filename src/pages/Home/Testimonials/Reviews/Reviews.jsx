import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";

const Reviews = ({review}) => {

    const {rating, name, details} = review;

    return (
        <>
            <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
               <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{details}</SwiperSlide>
      </Swiper>
        </>
    );
};

export default Reviews;