import React, { Component } from 'react';

class R025_SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: "react"
        }
    }
    stateChange = (flag) => {
        if (flag == 'direct') this.state.StateString = '리액트'
        if (flag == 'setstate') this.setState({ StateString: "리액트2" })
    }
    state = {}
    render() {
        return (
            <div>
                <button onClick={(e) => this.stateChange('direct', e)} > state 직접변경</button>
                <button onClick={(e) => this.stateChange('setstate', e)} > setstate 변경</button>
                <br />
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        );
    }
}

export default R025_SetState;