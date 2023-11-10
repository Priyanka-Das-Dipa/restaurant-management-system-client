

const MenuItem = ({item}) => {
    const {image, name, recipe, price } = item;
    return (
        <div className="flex space-x-3 justify-center mt-10">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] mb-3" src={image} alt="" />
            <div>
                <h1 className="uppercase text-xl font-medium">{name}----------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-400">${price}</p>
        </div>
    );
};

export default MenuItem;