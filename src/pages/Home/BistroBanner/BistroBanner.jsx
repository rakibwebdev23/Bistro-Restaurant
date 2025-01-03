import './BistroBanner.css';

const BistroBanner = () => {
    return (
        <div
            className="bistro hero h-[700px] my-20">
            <div className="hero-content text-center">
                <div className="md:h-[300px] w-[75%]  bg-white flex items-center">
                    <div className='px-24'>
                        <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BistroBanner;