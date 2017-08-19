import React, { Component } from 'react'

import Link from './Link'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'menu ' + this.props.type}>
        <Link to="/principles" className='menu-link'>Principles</Link>
        <Link to="/using" className='menu-link'>Using</Link>
        <Link to="/components" className='menu-link'>Components</Link>
        <Link to="/base" className='menu-link'>Base</Link>
      </div>
    )
  }
}

export default Menu
