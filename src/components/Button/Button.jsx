import React from 'react';

const variants = {
    primary:{
        backgroundColor:'blue',
        color:'white'
    },
    warning:{
        backgroundColor:'yellow',
        color:'black'
    },
    error:{
        backgroundColor:'red',
        color:'white'
    }

};
const sizes = {
    large:{
        padding:'1rem .8rem'
    },
    medium:{
        padding:'.8rem .6rem'
    },
    small:{
        padding:'.6rem .4rem'
    }
};

const Button = (props) => {

    const variant = variants[props.variant];
    const size = sizes[props.size];
    const {type,text}=props;

    const buttonStyle = {
        backgroundColor: 'blue',
        color:'white',
        padding:'1rem .8rem',
        margin:'.5rem',
        borderRadius:'10%',
        border:'none',
        ...variant,
        ...size
    };
    return (
        <button style={buttonStyle} type={type} >{text}</button>
    );
};

export default Button;