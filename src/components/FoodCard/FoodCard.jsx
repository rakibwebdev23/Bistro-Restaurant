import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="Item" />
                
            </figure>
            <p className='absolute right-0 bg-slate-800 text-white px-2 m-8'>{ price }</p>
            <div className="card-body">
                <h2 className="card-title text-left font-bold">{name}</h2>
                <p className='text-left'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 font-bold border-orange-500 text-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;