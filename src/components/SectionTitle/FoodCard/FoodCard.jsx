const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>${price}</p>
        </div>
        <div className="card-actions justify-center mb-10">
          <button className="btn btn-outline border-0 border-b-4 uppercase">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
