import React, {Component} from 'react';
import './Header.scss';

import {
  Link
} from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount = () => {

  }
  render() {
    return (
      <div className="Header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}