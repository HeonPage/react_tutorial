import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
    state = {}
    render() {
        console.log('3. render call')
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>
        );
    }
}

export default R004_LifecycleEx;