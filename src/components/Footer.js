import React, { Component } from 'react'

import logo from '../assets/logo.svg'

class Footer extends Component {
  render() {
    return (
      <div className='footer-wrap'>
        <div className='footer-container'>
          <div className='footer-content'>
            <div className='logo-wrap'>
              <img className='logo-img' alt='nui logo' src={logo} />
            </div>
            <p className='footer-text'>States for No Ugly Interface. The set of components like checkboxes, forms, maps, and many other sugar components for your pleasure. <br />Keep it simple and non-ugly.</p>
          </div>
          <div className='footer-links'>
            <a className='header-links' href='https://github.com/vasilisakarelova/NUI'>GitHub</a>
            <a className='header-links' href='https://github.com/vasilisakarelova/NUI'>Download</a>
            <span className='header-year'>2017</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
