import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const increasement= () => {
        setCount(count + 1)
    }
    const decreasement= () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={increasement}>Increase</button>
            <button onClick={decreasement}>Decrease</button>

        </div>
    );
};

export default Counter;