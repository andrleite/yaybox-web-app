import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav id="nav_f" className="default_color" role="navigation">
        <div className="container">
          <div className="nav-wrapper">
            <Link id="logo-container" className="brand-logo" to="/">Yaybox</Link>
              <ul className="right hide-on-med-and-down">
                <li><Link id="recursos" to="/">Recursos</Link></li>
                <li><Link id="preco" to="/">Preço</Link></li>
                <li><Link id="time" to="/">Time</Link></li>
                <li><Link id="login" to="/register"><button className="waves-effect waves-light btn">LOGIN / SIGN UP</button></Link></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;