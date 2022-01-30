import React, { Component } from 'react';

class R017_Props extends Component {
    state = {}
    render() {
        let props_value = this.props.props_value;
        props_value += ' from App.js'
        return (
            <div>{props_value}</div>
        );
    }
}

export default R017_Props;