import React, { Component } from 'react'

import Grid from './Grid'
import Typography from './Typography'
import Colors from './Colors'

const subCategorys = {
  'grid': <Grid />,
  'typography': <Typography />,
  'colors': <Colors />
}

class Base extends Component {
  render() {
    const category = subCategorys[this.props.subCategory]

    return (
      <div className='content base'>
        <h1 className='content-headline' >Base</h1>
        { category }
      </div>
    )
  }
}

export default Base
