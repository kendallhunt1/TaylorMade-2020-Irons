import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {

    return(
        <div className="footer">
            <div className="footerLinks">
                <div className="clubFooterLink"><a href="/P770" style={{ color: 'inherit', textDecoration: 'inherit'}}>P770</a></div>
                <div className="clubFooterLink"><a href="/P790" style={{ color: 'inherit', textDecoration: 'inherit'}}>P790</a></div>
                <div className="clubFooterLink"><a href="/P7MC" style={{ color: 'inherit', textDecoration: 'inherit'}}>P7&#183;MC</a></div>
                <div className="clubFooterLink"><a href="/P7MB" style={{ color: 'inherit', textDecoration: 'inherit'}}>P7&#183;MB</a></div>
            </div>

            <div className="footerLogoWrapper">
                <Link to="/" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src="https://a.omappapi.com/users/c985b9ce75cb/images/4db3ed93f7e41573685251-3153fdf11c57cdb2a2b0176f40779454.png" alt="TaylorMade Logo" /></Link>
            </div>

            <div className="gitHubAndPortfolioLinks">
                <div className="link">GitHub</div>
                <div className="link">Portfolio</div>
                <div className="link">Resume</div>
            </div>
        </div>
    )
}

export default Footer;