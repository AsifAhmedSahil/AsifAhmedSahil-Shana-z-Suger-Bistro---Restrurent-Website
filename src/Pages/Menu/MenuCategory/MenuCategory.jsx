import CoverMenu from "../../../Shared/CoverMenu/CoverMenu"
import MenuItems from "../../../Shared/MenuItems/MenuItems"


const MenuCategory = ({items,img,title}) => {
  return (
    <div >
        <div >
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
        </div>
    </div>
  )
}

export default MenuCategory