import React, { Component } from 'react'

class StarterTemplate extends Component {
  render() {
    return (
      <div className='section'>
        <span className='section-healine'>starter template</span>
        <p>To make your life even more easier, we’ve created a starter template for You. An example that you can simply copy-paste to your project and get yourself familiat with NUI components better on practice (we promise it won’t take more than 5 mins).</p>
        <pre><code>{`
          <input type="text" placeholder="Placeholder">

          <span class="field">
            <input type="text" placeholder="Placeholder">
            <button type="reset">Reset</button>
          </span>

          <label class="field">
            <span>+7</span>
            <input type="text" placeholder="Phone number">
          </label>

          <label class="field">
            <input type="text" placeholder="Site URL">
            <span>.com</span>
          </label>

          <span class="field">
            <input type="text" placeholder="Site URL">
            <button type="subbmit">Subbmit</button>
          </span>

          <textarea placeholder="Placeholder"></textarea>

          <!-- Ghost -->
          <input class="ghost" type="text" placeholder="Placeholder">

          <span class="field ghost">
            <input type="text" placeholder="Placeholder">
            <button type="reset">Reset</button>
          </span>

          <label class="field ghost">
            <span>+7</span>
            <input type="text" placeholder="Phone number">
          </label>

          <label class="field ghost">
            <input type="text" placeholder="Site URL">
            <span>.com</span>
          </label>

          <span class="field ghost">
            <input type="text" placeholder="Site URL">
            <button type="subbmit">Subbmit</button>
          </span>

          <textarea class="ghost" placeholder="Placeholder"></textarea>`}
        </code></pre>
      </div>
    )
  }
}

export default StarterTemplate
