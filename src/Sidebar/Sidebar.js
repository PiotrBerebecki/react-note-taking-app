import React from 'react';

import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <ul>
          <li>0 Note</li>
          <li>1 Note</li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
