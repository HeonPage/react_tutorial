import React, { Component } from 'react';

class R023_PropsNode extends Component {
    state = {}
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default R023_PropsNode;