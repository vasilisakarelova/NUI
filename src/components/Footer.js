import React, { Component } from 'react'

import Menu from './Menu'

import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'

class Footer extends Component {
  openMobileMenu(ev) {
    const menubtn = ev.target
    const menu = document.querySelector('.footer-container')

    switch (menubtn.classList.contains('is-down')) {
      case true:
        menubtn.classList.remove('is-down')
        menubtn.classList.add('is-up')
        menu.classList.add('is-open')
        break
      default:
        menubtn.classList.remove('is-up')
        menubtn.classList.add('is-down')
        menu.classList.remove('is-open')
        break
    }
  }

  render() {
    return (
      <div className='footer-wrap'>
        <div className='logo-wrap'>
          <img className='logo-img' alt='nui logo' src={logo} />
        </div>
        <div className='arrow-menu-btn'>
          <img className='arrow is-down' alt='arrow' src={arrow} onClick={ev => this.openMobileMenu(ev)} />
        </div>
        <div className='footer-bg'></div>
        <div className='footer-container'>
          <div className='footer'>
            <p className='footer-text'>States for No Ugly Interface. The set of components like checkboxes, forms, maps, and many other sugar components for your pleasure. <br />Keep it simple and non-ugly.</p>
            <div>
              <a className='footer-links' href='https://github.com/vasilisakarelova/NUI'>GitHub</a>
              <a className='footer-links' href='#'>Download</a>
              <span className='footer-year'>2017</span>
            </div>
          </div>
          <Menu type={'is-mobile'}/>
        </div>
      </div>
    )
  }
}

export default Footer
