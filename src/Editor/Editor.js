import React from 'react';

import './Editor.css';

class Editor extends React.Component {
  render() {
    const {currentNote} = this.props;
    return (
      <section className="editor">
        <textarea className="editor__textarea" value={currentNote.text}/>
      </section>
    );
  }
}

export default Editor;
