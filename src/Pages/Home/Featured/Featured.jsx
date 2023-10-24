import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import featureImg from "../../../assets/home/featured.jpg"

import "./Featured.css"


const Featured = () => {
  return (
    <div className="feature-image text-white pt-8 my-20 bg-fixed">
        <SectionTitle subHeading="check it out" heading="Featured item"></SectionTitle>

        <div className="md:flex justify-center items-center py-8 px-16 bg-slate-500 bg-opacity-60">
        <div>
            <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Oct 17, 2023</p>
            <h3 className="uppercase">where can i get some?</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi libero asperiores facilis ipsa est excepturi ea quaerat? Odit natus optio error eos iusto praesentium nulla impedit vitae magni exercitationem qui, incidunt doloribus iste recusandae facere perferendis facilis laborum excepturi 
                sint ab nemo. Nemo maiores repudiandae placeat commodi deleniti minima?</h4>

                <button className="btn btn-outline mt-5 border-0 border-b-4">Order Now</button>
        </div>
    </div>
    </div>
    
  )
}

export default Featured