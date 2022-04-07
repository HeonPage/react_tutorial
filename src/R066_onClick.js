import React, { Component } from 'react';

export default class R066_onClick extends Component {
    buttoClick = (param) => {
        if (typeof param != 'string') param = "Click a"
        console.log('param : ' + param)
    }

    render() {
        return (
            <>
                <button onClick={e => this.buttoClick("Click button")}>Click button</button>
                <div onClick={e => this.buttoClick("Click div")}>Click div</div>
                <a onClick={e => this.buttoClick("Click a")}>Click a</a>
            </>
        );
    }

};
