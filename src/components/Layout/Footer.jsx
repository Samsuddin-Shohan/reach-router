import React from 'react';
import classes from './footer.module.css'

const Footer = () => {
    return (
        <div className= {classes.footer} >
            <h1>Footer</h1>
            <ul>
                <li>Footer1</li>
                <li>Footer2</li>
                <li>Footer3</li>
            </ul>
        </div>
    );
};

export default Footer;