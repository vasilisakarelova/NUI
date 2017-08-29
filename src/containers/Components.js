import React, { Component } from 'react'

import Buttons from './Buttons'
import Fields from './Fields'
import Controls from './Controls'
import SubAdditional from './subAdditional'

const views = {
  'buttons': <Buttons />,
  'fields': <Fields />,
  'controls': <Controls />,
  'additional': <SubAdditional />
}

class Components extends Component {
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
      <div className='content conmponents'>
        <div className='content-inner'>
          <h1 className='content-headline' >Components</h1>
          { this.state.subCategory }
        </div>
      </div>
    )
  }
}

export default Components
