import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hook/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <>
      <section className="my-24 ">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"From Out Menu"}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="my-10 flex justify-center ">
          <button className="uppercase hover:btn-sm font-medium border-b-4">
            View Full Menu
          </button>
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
