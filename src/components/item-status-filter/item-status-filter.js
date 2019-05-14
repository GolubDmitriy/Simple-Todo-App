import React from 'react';

class ItemStatusFilter extends React.Component {
    
    render() {
        return (
            <span>
                <button className="btn btn-info">
                    All    
                </button>
                <button className="btn btn-outline-secondary">
                    Active    
                </button>
                <button className="btn btn-outline-secondary">
                    Done    
                </button>
            </span>
        );
    }
}

export default ItemStatusFilter;
