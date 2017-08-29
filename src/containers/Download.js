import React, { Component } from 'react'

class Download extends Component {
  render() {
    return (
      <div className='section'>
        <span className='section-healine'>download</span>
        <p>One of the NUI’s advatage is simplicity in using and installing it. We made sure that you’ll have a possibility to add some personal touch to NUI components easily and spend as less time as possible in adding them to the web page. Here is how you can first of all add the NUI to the project:</p>
        <br />
        <span>yarn add nui (our personal choise)</span><br />
        <span>npm install nui</span><br />
        <span>bower install nui</span><br />
        <br />
        <p>If you are not familiar with package managers, you can just download it by clicking <i><a className='content-link' href='http://github.com/vasilisakarelova/NUI'>here</a></i>, or alternatively, go to our GitHub page and clone the latest release to your project folder.
After that unzip the file and make you sure you keep <i>nui.min.js</i> and <i>nui.min.css</i> in your project folder.</p>
      </div>
    )
  }
}

export default Download
