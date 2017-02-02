import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Editor from '../Editor/Editor';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <main className="app">
        <Sidebar/>
        <Editor/>
      </main>
      
    );
  }
}

export default App;
