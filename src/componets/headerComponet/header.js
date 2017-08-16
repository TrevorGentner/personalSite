import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className= "logo">
          LOGO
        </div>
          <nav>
            <ul>
              <li >
                <a>Home</a>
              </li>

                <li>
                  <Link to="/Travel">Travel</Link>
                </li>
                  <li>
                    <a>Contact</a>
                  </li>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
