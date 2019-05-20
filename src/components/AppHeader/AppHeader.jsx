import React from 'react';
import './app-header.css';

const AppHeader = (props) => {
  return (
    <div className="app-header">
      <h1>My Todo List</h1>
      <button className="btn delete-all-btn"
              onClick= { props.deleteAll }
              type="submit">
        Clear All
      </button>
    </div>
  );
};

export default AppHeader;
