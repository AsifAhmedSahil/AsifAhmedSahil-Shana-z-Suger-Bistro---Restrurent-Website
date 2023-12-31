import { useState } from "react";
import CoverMenu from "../../../Shared/CoverMenu/CoverMenu";
import orderImg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['dessert','salad','soup','pizza','drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);

  

  // console.log(category)

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const drinks = menu.filter(item => item.category === 'drinks')
  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
    </Helmet>
      <CoverMenu img={orderImg} title="Order Food"></CoverMenu>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
          <Tab>Soups</Tab>
          <Tab>Pizza</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
