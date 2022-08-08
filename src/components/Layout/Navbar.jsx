import React from 'react';
import {Link} from 'react-router-dom';
import classes from './navbar.module.css';
const Navbar = () => {
    return (
       <nav className={classes.nav}>
        <div>
            <h3>Demo</h3>
        </div>
        <div>
            <ul className={classes.navItem}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/form'>Form</Link></li>
                <li><Link to='/clock'>Clock</Link></li>
                <li><Link to='/todo'>Todo</Link></li>
         
            </ul>
        </div>

       </nav>
    );
};

export default Navbar;