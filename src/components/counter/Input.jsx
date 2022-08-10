import React from 'react';

const Input = ({increaseCount,decreaseCount,handleIncreaseCount,handleDecreaseCount}) => {
    const inputStyle = {
        display:'block',
        borderRadius:'.3rem',
        padding:'.5rem .3rem',
        border:'none',
        margin:'.6rem .3rem',
        // outline:'none'
    }

    return (
        <div>
          <div>
            <label htmlFor="">Increment</label>
            <input type="number" value={increaseCount} onChange={handleIncreaseCount} />
          </div>
          <div>
            <label htmlFor="">Decrement</label>
            <input type="number" value={decreaseCount} onChange = {handleDecreaseCount}/>
          </div>
        </div>
    );
};

export default Input;