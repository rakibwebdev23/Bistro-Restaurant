import featureImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featuredStyle mt-20">
            <div className=" hero h-[800px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content h-[600px] w-[75%]">
                    <div className='text-white -mt-20'>
                        <SectionTitle
                        subHeading={'Check it out'}
                        heading={'from our menu'}
                        ></SectionTitle>
                        <div className="md:flex items-center text-white ">
                            <div className='w-1/2'>
                                <img src={featureImg} alt="" />
                            </div>
                            <div className='w-1/2 space-y-2 md:ml-10'>
                                <div className=''>
                                    <p>16 July, 2024</p>
                                    <h1 className=" font-bold uppercase">Where can i get some ?</h1>
                                </div>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                                </p>
                                <button className="btn btn-outline border-0 border-b-4 font-bold text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;