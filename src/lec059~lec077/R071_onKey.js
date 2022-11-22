import React, { Component } from 'react';

export default class R071_onKey extends Component {
    onKey(event, e) {
        var val = e.target.value
        console.log('event : ' + event + ", value : " + val)
    }
    render() {
        return (
            <>
                onKeyDown : <input type={"text"} onKeyDown={e => this.onKey("onKeyDown", e)} /><br />
                onKeyPress : <input type={"text"} onKeyPress={e => this.onKey("onKeyPress", e)} /><br />
                onKeyUp : <input type={"text"} onKeyUp={e => this.onKey("onKeyUp", e)} /><br />



            </>

        );
    }
};
