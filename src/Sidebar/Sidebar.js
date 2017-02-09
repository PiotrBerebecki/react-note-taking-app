import React from 'react';

import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    const notes = this.props.notes;
    const renderNotes = Object.keys(notes)
                              .map(key => {
                                return <li key={key} id={key}>{notes[key].title}</li>;
                              });
    return (
      <aside className="sidebar">
        <h2>Notes</h2>
        <ul className="sidebar__list">
          {renderNotes}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
