import React from 'react';
import "./Goal.css"
const Goal = () => {

    return (
        <form className='form'>
            <label className='text'>Course Goal</label>
            <input className='id'></input>
            <button className='but' onClick={"enter"}>Add</button>
        </form>
        
            
    
    );
};

export default Goal;