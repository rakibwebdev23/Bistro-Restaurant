import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from "../OrderTab/OrderTab";
import useHooks from "../../../hooks/useHooks";
import UseHelmet from "../../../components/UseHelmet/UseHelmet";
import { useParams } from "react-router-dom";

const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useHooks();

    const drinksItem = menu.filter(items => items.category === 'drinks');
    const dessertItem = menu.filter(items => items.category === 'dessert');
    const pizzaItem = menu.filter(items => items.category === 'pizza');
    const saladItem = menu.filter(items => items.category === 'salad');
    const soupItem = menu.filter(items => items.category === 'soup');
    
    return (
        <div>
            <UseHelmet
                helmetTitle={"Order"}
            ></UseHelmet>
            <Cover
                title={"Our Shop"}
                img={orderImg}
            ></Cover>
            <Tabs className='mt-10 text-center font-bold' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>   
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinksItem}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;