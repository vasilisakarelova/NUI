import React, { Component } from 'react'

import Link from './Link'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'menu ' + this.props.type}>
        <Link to="/principles" currentPage={this.props.currentPage} className='menu-link'>Principles</Link>
        <Link to="/using" currentPage={this.props.currentPage} className='menu-link'>Using</Link>
        <Link to="/components" currentPage={this.props.currentPage} className='menu-link'>Components</Link>
        <Link to="/base" currentPage={this.props.currentPage} className='menu-link'>Base</Link>
      </div>
    )
  }
}

export default Menu
