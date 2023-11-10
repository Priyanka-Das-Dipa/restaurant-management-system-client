import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menus.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);

  return (
    <>
      <section className="my-24 ">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"From Out Menu"}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
