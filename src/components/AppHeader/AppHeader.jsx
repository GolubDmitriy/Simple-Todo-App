import React from 'react';
import './AppHeader.css';
import { connect } from 'react-redux';

const AppHeader = ({dispatch}) => {
  return (
    <div className="app-header">
      <h1>My Todo List</h1>
      <button className="btn delete-all-btn"
              onClick= { () => dispatch({type: 'DELETE_ALL'}) }
              type="submit">
        Clear All
      </button>
    </div>
  );
};

const WrappedAppHeader = connect()(AppHeader)

export default WrappedAppHeader;
