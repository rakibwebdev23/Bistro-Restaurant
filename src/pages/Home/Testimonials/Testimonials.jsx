import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="">
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'Testimonials'}
            ></SectionTitle>
            <div>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className="flex flex-col items-center mx-20 space-y-3">
                                <Rating
                                    className="mb-4"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-6xl"></FaQuoteLeft>
                                <p>{review.details}</p>
                                <h4 className="text-2xl font-bold text-yellow-500">{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default Testimonials;