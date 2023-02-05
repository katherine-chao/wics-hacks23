import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="siteName"> WGAP </h1>
        <a className="emailLink" href="mailto:hello@hello.com?subject=Email Subject&body=Hi Bob ">Email Your Rep</a>
        {/* <button onClick={() => window.location = 'mailto:kat2chao@gmail.com'}>Contact Me</button> */}
       
      </div>

    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
