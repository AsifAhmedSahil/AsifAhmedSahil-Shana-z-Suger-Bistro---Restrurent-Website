import { Link } from "react-router-dom"
import CoverMenu from "../../../Shared/CoverMenu/CoverMenu"
import MenuItems from "../../../Shared/MenuItems/MenuItems"


const MenuCategory = ({items,img,title}) => {
  return (
    <div >
        <div className="pt-8">
            {title && title && <CoverMenu img={img} title={title}></CoverMenu>}
            <div className="grid md:grid-cols-2 gap-10 mb-12 my-16">
            { 
                items.map(item=> 
                    <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems> )
            }
            </div>
            <Link to={`/order/${title}`} className="m">
            <button className="btn btn-outline mt-5 border-0 border-b-4">Add To Cart</button>
            </Link>
        </div>
    </div>
  )
}

export default MenuCategory