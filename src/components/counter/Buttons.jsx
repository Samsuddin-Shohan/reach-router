import React from 'react';

const Buttons = ({handleIncrease,handleDecrease}) => {
    const buttonStyle = {
        backgroundColor: 'blue',
        color:'white',
        padding:'1rem .8rem',
        margin:'.5rem',
        borderRadius:'10%',
        border:'none',
    };
    return (
        <div>
            <button style={buttonStyle} onClick={handleIncrease}>Increase</button>
            <button style={buttonStyle} onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Buttons;