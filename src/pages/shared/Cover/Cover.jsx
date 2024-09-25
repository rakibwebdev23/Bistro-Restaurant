import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
  return (

    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[650px]">
        <div className="hero-content text-center">
          <div className="md:h-[300px] w-[75%] bg-black bg-opacity-40 text-white flex items-center">
            <div className='px-24'>
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
