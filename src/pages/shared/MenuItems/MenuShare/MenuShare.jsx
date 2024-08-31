
const MenuShare = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <section className="flex items-center gap-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <p className="uppercase text-xl">{name}</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 text-xl">${price}</p>
        </section>
    );
};

export default MenuShare;