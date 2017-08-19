import React, { Component } from 'react'
import page from 'page'

import Footer from './components/Footer'
import Menu from './components/Menu'

import Base from './containers/Base'
import Using from './containers/Using'
import Principles from './containers/Principles'
import Components from './containers/Components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      container: null
    }
  }

  componentDidMount() {
    const self = this

    page('/', (ctx) => {
      self.setState({
        container: <Principles />
      })
    })
    page('/base', (ctx) => {
      self.setState({
        container: <Base />
      })
    })
    page('/principles', (ctx) => {
      self.setState({
        container: <Principles />
      })
    })
    page('/using', (ctx) => {
      self.setState({
        container: <Using />
      })
    })
    page('/components', (ctx) => {
      self.setState({
        container: <Components />
      })
    })
    page()
  }

  render() {
    return (
      <div className='wrap'>
        <Footer />
        <Menu type={'is-desktop'}/>
        { this.state.container }
      </div>
    )
  }
}

export default App
