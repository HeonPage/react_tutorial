import React, { Component } from 'react';

export default class R069_onMouseOver extends Component {
    MouseOver(tag) {
        console.log('TAG : ' + tag)
    }
    render() {
        return (
            <>
                <div onMouseOver={e => this.MouseOver("div")}>
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type='text' onMouseOver={e => this.MouseOver("input")} />
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option vlaue="react">react</option>
                    <option vlaue="200">200</option>
                </select>
            </>
        );
    }

};
