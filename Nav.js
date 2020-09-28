import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div className="staticNav">
            <nav className="nav">
                <div className="navLinks">
                    <div className="taylorMadeLogoWrapper"><Link to="/" style={{ display: 'flex', justifyContent: 'center'}}><img src="https://moongolf.com/wp-content/uploads/2017/03/Taylormade-Logo-WHITE.png" alt="TaylorMade Logo"/></Link></div>
                    <Link className="clubLink" to="/P770" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3>P770</h3></Link>
                    <Link className="clubLink" to="/P790" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3>P790</h3></Link>
                    <Link className="clubLink" to="/P7MC" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3>P7&#183;MC</h3></Link>
                    <Link className="clubLink" to="/P7MB" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3>P7&#183;MB</h3></Link>
                    <Link className="clubLink" to="/Cart" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3>Cart</h3></Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;