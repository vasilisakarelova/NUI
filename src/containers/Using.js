import React, { Component } from 'react'

import Link from '../components/Link'
import Download from './Download'
import StarterTemplate from './StarterTemplate'
import Css from './Css'
import Js from './JS'
import UsingExample from './UsingExample'

const views = {
  'download': <Download />,
  'starter-template': <StarterTemplate />,
  'css': <Css />,
  'js': <Js />,
  'example': <UsingExample />
}

class Using extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subCategory: views[props.subCategory]
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      subCategory: views[nextProps.subCategory]
    })
  }

  render() {
    return (
      <div className='content using'>
        <div className='content-inner'>
          <h1 className='content-headline' >Using</h1>
          <div className='content-menu'>
            <Link to='/using/download' currentPage={this.props.currentPage} className='content-link'>Download</Link> /
            <Link to='/using/starter-template' currentPage={this.props.currentPage} className='content-link'> Starter template</Link> /
            <Link to='/using/css' currentPage={this.props.currentPage} className='content-link'> css</Link> /
            <Link to='/using/js' currentPage={this.props.currentPage} className='content-link'> js</Link> /
            <Link to='/using/example' currentPage={this.props.currentPage} className='content-link'> Using</Link>
          </div>
          <div className='sections'>
            { this.state.subCategory }
          </div>
        </div>
      </div>
    )
  }
}

export default Using
