import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react'
        }
    }

    StateChange = () => {
        this.state.StateString = "리액트"
        this.forceUpdate(); //강제 새로고침
    }
    state = {}
    render() {
        return (<div>
            <button onClick={(e) => this.StateChange('direct', e)}>state 직접변경</button>
            <br></br>
            [State 변경하기] StateString : {this.state.StateString}
        </div>);
    }
}

export default R026_ForceUpdate;