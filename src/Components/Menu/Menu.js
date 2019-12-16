import React, {Component} from 'react';
import './Menu.scss';

import {
  Link
} from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount = () => {

  }
  render() {
    return (
      <div className="Menu">
        <nav>
          <ul>
            <li>
            <Link to="/">Homepage</Link>
            </li>
            <li>
            <Link to="/about">Movies</Link>
            </li>
            <li>
            <Link to="/users">Popular</Link>
            </li>
            <li>
            <Link to="/users">Latest</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}