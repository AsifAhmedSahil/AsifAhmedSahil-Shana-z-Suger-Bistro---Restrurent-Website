
import { Helmet } from 'react-helmet-async';
import CoverMenu from '../../../Shared/CoverMenu/CoverMenu';
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularItems from '../../Home/PopularItems/PopularItems';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
    </Helmet>
    <CoverMenu img={menuImg} title="Our menu"></CoverMenu>
    
    </div>
  )
}

export default Menu