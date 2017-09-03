import React, { Component } from 'react'

class Customize extends Component {
  render() {
    return (
      <div className='section'>
        <span className='section-healine'>Customize</span>
        <p>Customization is (surprise surprise) very easy. Basically, it’s just adding the class to components, that will then update the apperence of an element, including all responsive settings.</p>
        <p>Since we wanted to create the most universal components in minimalistic style, that we are featuring, we came up with 4 main themes: <i>Basic</i>, <i>Round</i>, <i>Sunny</i> and <i>Ghost</i>.</p>
        <p>Basic and Round themes are a shape theme. And basic is the one that will not requre any additional classes, you can just insert compnent and point out which function it should fullfill. Round requires “round” class, and obviosly will only update the components shape. <br/>Sunny and Ghost are color themes, featuring bright and dark colors, depending on what ever mood you are willing to create on your personal website.</p>
        <p>Last, but not least, we guessed you might wanna change the colors to some of your own choice. So we made possible even this. Here is a short code snippet of how you can create Your own color theme.</p>
      </div>
    )
  }
}

export default Customize
