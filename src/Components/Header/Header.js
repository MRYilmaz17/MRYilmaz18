import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './Header.scss';

import Menu from '../Menu/Menu'
import MiniProfile from '../MiniProfile/MiniProfile'

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
        <div className="container">

          <div className="logo"></div>

          <Menu />

          <Button outline class="searchButton"> Search </Button>
          <MiniProfile />
        </div>
      </div>
    )
  }
}