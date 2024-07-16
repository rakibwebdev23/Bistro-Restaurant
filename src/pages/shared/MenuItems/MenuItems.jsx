import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menu from "./Menu/Menu";

const MenuItems = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenus(popularItems);
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-14">
                {
                    menus.map(menu => <Menu
                        key={menu._id}
                        menu={menu}
                    ></Menu>)
                }
            </div>
            <div className="text-center mt-10">
                <button className="btn btn-outline border-0 border-b-4 font-bold">View Full Menu</button>
            </div>
        </section>
    );
};

export default MenuItems;