

const FoodCard = ({item}) => {

    const {price,name,image,recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-2">{price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      
      <button className="btn btn-outline mt-5 border-0 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard