import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const FeturedItem = () => {
  return (
    <section className="featured-item bg-fixed p-5 mb-24">
      <SectionTitle
        subHeading={"Chect it Out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="flex p-24 justify-center gap-4">
        <div>
          <img className="" src={feturedImg} alt="" />
        </div>
        <div className="text-white space-y-4">
          <p className="text-2xl">Aug 20, 2023</p>
          <p className="uppercase text-2xl"> WHERE CAN I GET SOME? </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>

          <button className="btn btn-outline border-0 border-b-4 hover:bg-slate-100 hover:text-black  text-white">Secondary</button>
        </div>
      </div>
    </section>
  );
};

export default FeturedItem;
