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
      container: null,
      path: null
    }
  }

  componentDidMount() {
    const self = this

    page.base('/NUI')
    
    page('/', (ctx) => {
      page.redirect('/principles');
    })
    page('/base', (ctx) => {
      self.setState({
        container: <Base />,
        path: ctx.path
      })
    })
    page('/principles', (ctx) => {
      self.setState({
        container: <Principles />,
        path: ctx.path
      })
    })
    page('/using', (ctx) => {
      self.setState({
        container: <Using />,
        path: ctx.path
      })
    })
    page('/components', (ctx) => {
      self.setState({
        container: <Components />,
        path: ctx.path
      })
    })
    page()
  }

  render() {
    return (
      <div className='wrap'>
        <Footer />
        <Menu type={'is-desktop'} currentPage={this.state.path} />
        { this.state.container }
      </div>
    )
  }
}

export default App
