import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="siteName"> WGAP </h1>
        <button onClick={() => window.location = 'mailto:kat2chao@gmail.com'}>Contact Me</button>
       
      </div>

    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
