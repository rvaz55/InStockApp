import React, { Component } from 'react';
import Navbar from "./components/Navbar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">InStock App</h1>
        </header>

        <Navbar />
        <Main />
      
      </div>
    );
  }
}

export default App;
