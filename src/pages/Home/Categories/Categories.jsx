import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Categories = () => {
    return (
        <section className=''>
            <SectionTitle
                subHeading={'From 11.00am to 10.00pm'}
                heading={'order online'}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h2 className='text-3xl text-center font-bold text-gray-500 -mt-20 uppercase'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className='text-3xl text-center font-bold text-gray-500 -mt-20 uppercase'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h2 className='text-3xl text-center font-bold text-gray-500 -mt-20 uppercase'>soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h2 className='text-3xl text-center font-bold text-gray-500 -mt-20 uppercase'>Dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h2 className='text-3xl text-center font-bold text-gray-500 -mt-20 uppercase'>Salad</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Categories;