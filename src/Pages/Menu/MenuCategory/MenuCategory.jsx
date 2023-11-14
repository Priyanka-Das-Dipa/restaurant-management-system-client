import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  console.log(title)
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="my-10 flex justify-center ">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 uppercase">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
