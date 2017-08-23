import React, { Component } from 'react'

import Link from './Link'

class Menu extends Component {
  handleClick(ev) {
    const menu = document.querySelector('.footer-container')
    const menubtn = document.querySelector('.menu-btn .arrow')

    switch(menu.classList.contains('is-open')) {
      case true:
        menubtn.classList.remove('is-up')
        menubtn.classList.add('is-down')
        menu.classList.remove('is-open')
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className={'menu ' + this.props.type} onClick={this.handleClick.bind(this)}>
        <span className='menu-link-wrap'>
          <Link to="/principles" currentPage={this.props.currentPage} className='menu-link'>Principles</Link>
        </span>
        <span className='menu-link-wrap'>
          <Link to="/using" currentPage={this.props.currentPage} className='menu-link'>Using</Link>
        </span>
        <span className='menu-link-wrap'>
          <Link to="/base" currentPage={this.props.currentPage} className='menu-link'>Base</Link>
        </span>
        <div className='sub-menu'>
          <span className='menu-link-wrap'>
            <Link to="/base/grid" currentPage={this.props.currentPage} className='sub-menu-link'>Grid</Link>
          </span>
          <span className='menu-link-wrap'>
            <Link to="/base/typography" currentPage={this.props.currentPage} className='sub-menu-link'>Typography</Link>
          </span>
          <span className='menu-link-wrap'>
            <Link to="/base/colors" currentPage={this.props.currentPage} className='sub-menu-link'>Colors</Link>
          </span>
        </div>
        <span className='menu-link-wrap'>
          <Link to="/components" currentPage={this.props.currentPage} className='menu-link'>Components</Link>
        </span>
        <div className='sub-menu'>
          <span className='menu-link-wrap'>
            <Link to="/components/buttons" currentPage={this.props.currentPage} className='sub-menu-link'>Buttons</Link>
          </span>
          <span className='menu-link-wrap'>
            <Link to="/components/fields" currentPage={this.props.currentPage} className='sub-menu-link'>Fields</Link>
          </span>
          <span className='menu-link-wrap'>
            <Link to="/components/controls" currentPage={this.props.currentPage} className='sub-menu-link'>Controls</Link>
          </span>
          <span className='menu-link-wrap'>
            <Link to="/components/additional" currentPage={this.props.currentPage} className='sub-menu-link'>Additional</Link>
          </span>
        </div>
        <span className='menu-link-wrap'>
          <Link to="/additional" currentPage={this.props.currentPage} className='menu-link'>Additional</Link>
        </span>
        <span className='menu-link-wrap'>
          <Link to="/themes" currentPage={this.props.currentPage} className='menu-link'>Themes</Link>
        </span>
      </div>
    )
  }
}

export default Menu
