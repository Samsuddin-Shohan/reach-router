import React from 'react';

const InputGroup = ({label,type,placeholder,id}) => {
    const inputStyle = {
        display:'block',
        borderRadius:'.3rem',
        padding:'.5rem .3rem',
        border:'none',
        margin:'.6rem .3rem',
        outline:'none'
    }
    return (
        <div>
                <label>{label}</label>
                <input style={inputStyle} type={type} placeholder={placeholder} id={id} />
            </div>
    );
};

export default InputGroup;