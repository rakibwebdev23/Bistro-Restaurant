import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useHooks from "../../../hooks/useHooks";
import MenuShare from "./MenuShare/MenuShare";

const MenuItems = () => {
    const [menu] = useHooks();
    const popularMenu = menu.filter(items => items.category === 'popular');
    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-14 mt-20">
                {
                    popularMenu.map(item => <MenuShare
                        key={item._id}
                        item={item}
                    ></MenuShare>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to="/menu"><button className="btn btn-outline uppercase border-0 border-b-4 font-bold">View Full Menu</button></Link>
            </div>
        </section>
    );
};

export default MenuItems;