import React, { Component } from 'react'

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
        { category }
      </div>
    )
  }
}

export default Components
