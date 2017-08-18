import React, { Component } from 'react'

import Main from './containers/Main'
import Sidebar from './containers/Sidebar'

class App extends Component {
  render() {
    return (
      <div className='wrap'>
        <Main />
        <Sidebar />
      </div>
    )
  }
}

export default App
