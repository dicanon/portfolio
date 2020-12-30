import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './Screens/Header'


export default class Navbar extends Component {
    render() {
      return (

          <div className="nav-content">
            <img
              src={logo}
              className="nav-logo"
              alt="Logo."
              onClick={this.scrollToTop}
            />
            <ul className="nav-items">
              <li className="nav-item">Section 1</li>
              <li className="nav-item">Section 2</li>
              <li className="nav-item">Section 3</li>
              <li className="nav-item">Section 4</li>
              <li className="nav-item">Section 5</li>
            </ul>
          </div>
        </nav>
      );
    }
  }








<Link
    activeClass="active"
    to="Header"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
        >HOME</Link>