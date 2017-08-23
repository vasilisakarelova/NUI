import React, { Component } from 'react'

import Link from '../components/Link'

import Buttons from './Buttons'
import Fields from './Fields'
import Controls from './Controls'
import subAdditional from './subAdditional'

const subCategorys = {
  'buttons': <Buttons />,
  'fields': <Fields />,
  'controls': <Controls />,
  'subAdditional': <subAdditional />
}

class Components extends Component {
  render() {
    const category = subCategorys[this.props.subCategory]

    return (
      <div className='content conmponents'>
        <h1 className='content-headline' >Components</h1>
        <Link to="/components/buttons" className='sub-headline'>Buttons</Link>
        <Link to="/components/fields" className='sub-headline'>Fields</Link>
        <Link to="/components/controls" className='sub-headline'>Controls</Link>
        <Link to="/components/additional" className='sub-headline'>Additional</Link>
        { category }
      </div>
    )
  }
}

export default Components
