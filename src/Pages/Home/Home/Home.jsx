import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeturedItem from "../FeturedItem/FeturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <FeturedItem></FeturedItem>
        </div>
    );
};

export default Home;