import { Helmet } from "react-helmet-async"
import Bannar from "../Bannar/Bannar"
import Category from "../Category/Category"
import Featured from "../Featured/Featured"
import PopularItems from "../PopularItems/PopularItems"
import Testimonials from "../Testimonials/Testimonials"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
    </Helmet>
      <Bannar/>
      <Category/>
      <PopularItems/>
      <Featured/>
      <Testimonials/>
    </div>
  )
}

export default Home