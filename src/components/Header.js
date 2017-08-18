import React, { Component } from 'react'

import Menu from './Menu'
import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo-wrap'>
          <img className='logo-img' alt='nui logo' src={logo} />
        </div>
        <div className='arrow-menu-btn is-down'>
          <img className='arrow' alt='arrow' src={arrow} />
        </div>
        <Menu />
      </div>
    )
  }
}

export default Header
