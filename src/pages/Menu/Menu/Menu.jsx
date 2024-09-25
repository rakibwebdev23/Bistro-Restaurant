import Cover from "../../shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useHooks from "../../../hooks/useHooks";
import TodaysOffer from "../TodaysOffer/TodaysOffer";
import UseHelmet from "../../../components/UseHelmet/UseHelmet";

const Menu = () => {

    const [menu] = useHooks();
    const todayOffer = menu.filter(items => items.category === 'offered');
    const dessertItem = menu.filter(items => items.category === 'dessert');
    const pizzaItem = menu.filter(items => items.category === 'pizza');
    const saladItem = menu.filter(items => items.category === 'salad');
    const soupItem = menu.filter(items => items.category === 'soup');

    return (
        <div>
            <UseHelmet
            helmetTitle={"Menu"}
            ></UseHelmet>
            <Cover
                img={menuImg}
                title={'our menu'}
            ></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"Todays offer"}
            ></SectionTitle>
            <TodaysOffer items={todayOffer}></TodaysOffer>
            <TodaysOffer items={dessertItem} title={"dessert"} img={dessertImg}></TodaysOffer>
            <TodaysOffer items={pizzaItem} title={"pizza"} img={pizzaImg}></TodaysOffer>
            <TodaysOffer items={saladItem} title={"salad"} img={saladImg}></TodaysOffer>
            <TodaysOffer items={soupItem} title={"soup"} img={soupImg}></TodaysOffer>
        </div>
    );
};

export default Menu;