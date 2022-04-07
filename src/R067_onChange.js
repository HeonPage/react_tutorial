import React, { Component } from 'react';

export default class R067_onChange extends Component {
    change = (e) => {
        var val = e.target.value
        console.log('param : ' + val)
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.change} />
                <select onChange={this.change}>
                    <option vlaue="react">react</option>
                    <option vlaue="200">200</option>
                </select>


            </>
        );
    }

};
