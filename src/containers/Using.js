import React, { Component } from 'react'

class Using extends Component {
  render() {
    return (
      <div className='content using'>
        <div className='content-inner'>
          <h1 className='content-headline' >Using</h1>
          <div className='sections'>
            <div className='section'>
              <span className='section-healine'>download</span>
              <p>One of the NUI’s advatage is simplicity in using and installing it. We made sure that you’ll have a possibility to add some personal touch to NUI components easily and spend as less time as possible in adding them to the web page. Here is how you can first of all add the NUI to the project:</p>
              <br />
              <span>yarn add nui (our personal choise)</span><br />
              <span>npm install nui</span><br />
              <span>bower install nui</span><br />
              <br />
              <p>If you are not familiar with package managers, you can just download it by clicking <i>here</i>, or alternatively, go to our GitHub page and clone the latest release to your project folder.
  After that unzip the file and make you sure you keep <i>nui.min.js</i> and <i>nui.min.css</i> in your project folder.</p>
            </div>
            <div className='section'>
              <span className='section-healine'>starter template</span>
            </div>
            <div className='section'>
              <span className='section-healine'>css</span>
            </div>
            <div className='section'>
              <span className='section-healine'>js</span>
            </div>
            <div className='section'>
              <span className='section-healine'>using</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Using
