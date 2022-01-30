import React, { Component } from 'react';

class R024_ReactState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: this.props.ReactString,
            StateNumber: 200,
        }
    }
    state = {}
    render() {
        return (
            <div>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        );
    }
}

export default R024_ReactState;