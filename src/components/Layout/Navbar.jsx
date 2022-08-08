import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import classes from './navbar.module.css';
const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
       <nav className={classes.nav}>
        <div>
            <h3>Demo</h3>
        </div>
        <div>
            <ul className={classes.navItem}>
                <li><Link className={ location.pathname == '/'? classes.activeNavLink:classes.navLink} to='/'>Home</Link></li>
                <li><Link className={ location.pathname == '/form'? classes.activeNavLink:classes.navLink} to='/form'>Form</Link></li>
                <li><Link className={ location.pathname == '/clock'? classes.activeNavLink:classes.navLink} to='/clock'>Clock</Link></li>
                <li><Link className={ location.pathname == '/todo'? classes.activeNavLink:classes.navLink} to='/todo'>Todo</Link></li>
         
            </ul>
        </div>

       </nav>
    );
};

export default Navbar;