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
          <span className='content-menu'>
            <Link to='/using/download' currentPage='/using' className='content-link'>Download</Link> /
            <Link to='/using/starter-template' currentPage='/using' className='content-link'> Starter template</Link> /
            <Link to='/using/css' currentPage='/using' className='content-link'> css</Link> /
            <Link to='/using/js' currentPage='/using' className='content-link'> js</Link> /
            <Link to='/using/example' currentPage='/using' className='content-link'> Using</Link>
          </span>
          <div className='sections'>
            { this.state.subCategory }
          </div>
        </div>
      </div>
    )
  }
}

export default Using
