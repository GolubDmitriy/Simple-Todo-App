import React from 'react';
import './FilterBar.css';
import { connect } from 'react-redux';

const FilterBar = ({dispatch}) => {
    return <div>
        <button className="btn btn-filter" onClick={() => dispatch({type: 'FILTER_ALL'})}>All</button>
        <button className="btn btn-filter" onClick={() => dispatch({type: 'FILTER_ACTIVE'})}>Active</button>
        <button className="btn btn-filter" onClick={() => dispatch({type: 'FILTER_DONE'})}>Completed</button>
    </div>;
}

const WrappedFilterBar = connect()(FilterBar)

export default WrappedFilterBar;
