
import { Helmet } from 'react-helmet-async';
import CoverMenu from '../../../Shared/CoverMenu/CoverMenu';
import menuImg from "../../../assets/menu/banner3.jpg"
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
    </Helmet>
    <CoverMenu img={menuImg} title="Our menu"></CoverMenu>

    <SectionTitle subHeading={"don't miss"} heading={"todays offer"}></SectionTitle>

    <MenuCategory
      items={offered}
    >
    </MenuCategory>
    <MenuCategory items={desserts} img={dessertImg} title={"dessert"}></MenuCategory>
    <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
    <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
    <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
    
    </div>
  )
}

export default Menu