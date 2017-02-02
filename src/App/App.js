import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Editor from '../Editor/Editor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        note0: {
          id: 0,
          title: '0 A title of a note',
          text: 'Some random note text that should be longer than this',
        },
        note1: {
          id: 1,
          title: '1 Another title of a note',
          text: 'More random note text that should be longer than this',
        }
      },
    }
  }
  render() {
    return (

      <main className="app">
        <Sidebar notes={this.state.notes} />
        <Editor currentNote={this.state.notes.note0} />
      </main>

    );
  }
}

export default App;
