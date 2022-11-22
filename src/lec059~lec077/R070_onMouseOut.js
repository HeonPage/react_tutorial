import React, { Component } from 'react';

export default class R070_onMouseOut extends Component {
    MouseOut(tag) {
        console.log('TAG : ' + tag)
    }
    render() {
        return (
            <>
                <div onMouseOut={e => this.MouseOut("div")}>
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type='text' onMouseOut={e => this.MouseOut("input")} />
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option vlaue="react">react</option>
                    <option vlaue="200">200</option>
                </select>
            </>
        );
    }

};
