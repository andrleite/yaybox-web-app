import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    
    return (
      <div className="navbar-fixed">
        <nav id="nav_f" className="default_color" role="navigation">
          <div className="container">
            <div className="nav-wrapper">
              <Link id="logo-container" className="brand-logo" to="/">Yaybox</Link>
                <ul className="right hide-on-med-and-down">
                  <li><Link to="#intro">Recursos</Link></li>
                  <li><Link to="#work">Preço</Link></li>
                  <li><Link to="#team">Time</Link></li>
                  <li><a href={this.props.authenticated ? 'http://console.yaybox.com.br:8081' : '/register'}><button className="waves-effect waves-light btn">LOGIN / SIGN UP</button></a></li>
                </ul>
            </div>
          </div>
        </nav>               
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.login.authenticated
  };
}

export default connect(mapStateToProps)(Header);