import React, { Component } from 'react'
import page from 'page'

import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

import Principles from './containers/Principles'
import Using from './containers/Using'
import Base from './containers/Base'
import Components from './containers/Components'
import Additional from './containers/Additional'
import Themes from './containers/Themes'


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
      page.redirect('/principles')
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
      page.redirect('/using/download')
    })
    page('/using/download', (ctx) => {
      self.setState({
        container: <Using subCategory='download' currentPage='/using/download' />,
        path: '/using'
      })
    })
    page('/using/starter-template', (ctx) => {
      self.setState({
        container: <Using subCategory='starter-template' currentPage='/using/starter-template'/>,
        path: '/using'
      })
    })
    page('/using/css', (ctx) => {
      self.setState({
        container: <Using subCategory='css' currentPage='/using/css'/>,
        path: '/using'
      })
    })
    page('/using/js', (ctx) => {
      self.setState({
        container: <Using subCategory='js' currentPage='/using/js'/>,
        path: '/using'
      })
    })
    page('/using/customize', (ctx) => {
      self.setState({
        container: <Using subCategory='customize' currentPage='/using/customize'/>,
        path: '/using'
      })
    })
    page('/base', (ctx) => {
      self.setState({
        container: <Base />,
        path: ctx.path
      })
      page.redirect('/base/grid')
    })
    page('/base/grid', (ctx) => {
      self.setState({
        container: <Base subCategory='grid' />,
        path: ctx.path
      })
    })
    page('/base/typography', (ctx) => {
      self.setState({
        container: <Base subCategory='typography' />,
        path: ctx.path
      })
    })
    page('/base/colors', (ctx) => {
      self.setState({
        container: <Base subCategory='colors' />,
        path: ctx.path
      })
    })
    page('/components', (ctx) => {
      self.setState({
        container: <Components />,
        path: ctx.path
      })
      page.redirect('/components/buttons')
    })
    page('/components/buttons', (ctx) => {
      self.setState({
        container: <Components subCategory='buttons' />,
        path: ctx.path
      })
    })
    page('/components/fields', (ctx) => {
      self.setState({
        container: <Components subCategory='fields' />,
        path: ctx.path
      })
    })
    page('/components/controls', (ctx) => {
      self.setState({
        container: <Components subCategory='controls' />,
        path: ctx.path
      })
    })
    page('/components/additional', (ctx) => {
      self.setState({
        container: <Components subCategory='additional' />,
        path: ctx.path
      })
    })
    page('/additional', (ctx) => {
      self.setState({
        container: <Additional />,
        path: ctx.path
      })
    })
    page('/themes', (ctx) => {
      self.setState({
        container: <Themes />,
        path: ctx.path
      })
    })
    page()

  }

  render() {
    return (
      <div className='wrap'>
        <Header currentPage={this.state.path} />
        <Menu type={'is-desktop'} currentPage={this.state.path} />
        { this.state.container }
        <Footer />
      </div>
    )
  }
}

export default App
