import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuShare from "../../shared/MenuItems/MenuShare/MenuShare";

const TodaysOffer = ({ items, title, img }) => {

    return (
        <section className="mt-10">
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid md:grid-cols-2 gap-14 mt-20">
                {
                    items.map(item => <MenuShare
                        key={item._id}
                        item={item}
                    ></MenuShare>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to={`/order/${title}`}><button className="btn btn-outline uppercase border-0 border-b-4 font-bold">Ordder your favourite food</button></Link>
            </div>
        </section>
    );
};

export default TodaysOffer;