import { useEffect,useState } from "react"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import MenuItems from "../../../Shared/MenuItems/MenuItems"
import useMenu from "../../../hooks/useMenu"


const PopularItems = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setmenu] = useState([])

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter (item => item.category === 'popular');
    //         setmenu(popularItem)
    //     })
    // },[])

  return (
    <section>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}>

        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
            {
                popular.map(item=> 
                    <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems> )
            }
        </div>
    </section>
  )
}

export default PopularItems