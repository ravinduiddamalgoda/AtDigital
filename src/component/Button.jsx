import React from 'react';

const Button = ({ word }) => {
    return (
        <button className="bg-secondaryBG text-white font-bold py-1 px-3 rounded hover:bg-primaryBG">
            <p className='font-inter text-md'>{word} </p>
        </button>
    );
};

export default Button;
