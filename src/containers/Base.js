import React, { Component } from 'react'

import Grid from './Grid'
import Typography from './Typography'
import Colors from './Colors'

const views = {
  'grid': <Grid />,
  'typography': <Typography />,
  'colors': <Colors />
}

class Base extends Component {
  underlineAnim() {
    setTimeout(() => {
      document.querySelector('.sub-headline').classList.add('underline')
    }, 30)
  }

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
    this.underlineAnim()
  }

  componentDidMount() {
    this.underlineAnim()
  }

  render() {
    return (
      <div className='content base'>
        <h1 className='content-headline' >Base</h1>
        { this.state.subCategory }
      </div>
    )
  }
}

export default Base
