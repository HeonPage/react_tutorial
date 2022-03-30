import React, { Component } from 'react';

class R019_PropsBoolean extends Component {
    state = {}
    render() {
        let { BooleanTrueFalse } = this.props;

        return (
            <div>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        );
    }
}

export default R019_PropsBoolean;