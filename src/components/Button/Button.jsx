import React from 'react';

const Button = ({btnName}) => {
    return (
        <div className='text-center mt-10'>
            <button className="btn btn-outline uppercase border-0 border-b-4 font-bold">{ btnName }</button>
        </div>
    );
};

export default Button;