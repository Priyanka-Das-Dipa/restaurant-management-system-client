import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
        {title &&   <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="my-10 flex justify-center ">
        <button className="uppercase hover:btn-sm font-medium border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
