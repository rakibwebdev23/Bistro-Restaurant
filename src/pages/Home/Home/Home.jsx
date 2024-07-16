import MenuItems from "../../shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import BistroBanner from "../BistroBanner/BistroBanner";
import Categories from "../Categories/Categories";
import Communicate from "../Communicate/Communicate";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BistroBanner></BistroBanner>
            <MenuItems></MenuItems>
            <Communicate></Communicate>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;