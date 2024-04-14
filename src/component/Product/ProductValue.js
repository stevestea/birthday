import React from 'react';
import Product from './Product';
const ProductValue = () => {
    const user = [
        {name : "LX600", price: "12 billion "},
        {name : "Maybach S680", price: "17 billion"},
        {name : "Rangerover 2023", price: "16 billion"},
    ];
    return (
        <div>
            <p>Car List</p>
            {user.map((user, index) => (
                <Product key={index} user={user} />
            ))}
        </div>
    );
};

export default ProductValue;