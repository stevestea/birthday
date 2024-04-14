import React from 'react';

const Product = (props) => {
    const { name, price } = props.user;
    return (
        <div>
            <h1>Name: {name} </h1>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default Product;