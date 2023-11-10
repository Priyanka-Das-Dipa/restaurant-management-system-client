import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeturedItem from "../FeturedItem/FeturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Tanstmonial from "../Tanstmonial/Tanstmonial";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <FeturedItem></FeturedItem>
           <Tanstmonial></Tanstmonial>
        </div>
    );
};

export default Home;