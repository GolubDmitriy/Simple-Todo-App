import React from 'react';
import './add-item.css';

export default class AddItem extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItemClick(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="add-item"
                onSubmit={this.onSubmit}>
                <input className="add-item-input"
                    onChange={this.onLabelChange}
                    placeholder="Что нужно сделать"
                    type="text"
                    value={this.state.label} />
                <button className="btn add-item-btn">
                    Add    
                </button>
            </form>
        )
    }
}

