import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> The Gender Gap</h1>
        //<a class="btn btn-warning" href="" id="email" target = "_" > click here</a>
        <button onClick={() => window.location = 'mailto:kat2chao@gmail.com'}>Contact Me</button>
      </div>

    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
