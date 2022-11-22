import React, { Component } from 'react';

export default class R068_onMouseMove extends Component {
    MouseMove(tag) {
        console.log('TAG : ' + tag)
    }
    render() {
        return (
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type='text' onMouseMove={e => this.MouseMove("input")} />
                <select onMouseMove={e => this.MouseMove("select")}>
                    <option vlaue="react">react</option>
                    <option vlaue="200">200</option>
                </select>
            </>
        );
    }

};
