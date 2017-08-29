import React, { Component } from 'react'

import logo from '../assets/NUI.svg'

export default () => (
  <div className='footer-wrap'>
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='logo-wrap'>
          <img className='logo-img' alt='nui logo' src={logo} />
        </div>
        <p className='footer-text'>
          States for No Ugly Interface. The set of components like checkboxes, forms, maps, and many other sugar components for your pleasure. <br />Keep it simple and non-ugly.
        </p>
      </div>
      <div className='footer-links'>
        <span className='footer-year'>2017</span>
        <a className='footer-link' href='https://github.com/vasilisakarelova/NUI'>GitHub</a>
        <a className='footer-link' href='https://github.com/vasilisakarelova/NUI'>Download</a>
      </div>
    </div>
  </div> 
)
