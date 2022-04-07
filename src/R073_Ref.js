import React, { Component } from 'react';

export default class R073_Ref extends Component {
    constructor(props) {
        super(props)
        this.InputRef = React.createRef()
    }

    RefFocus = (e) => {
        this.InputRef.current.focus()
    }

    JavascriptFocus() {
        document.getElementById('id').focus()
    }

    render() {
        return (
            <>
                <input id='id' type='text' ref={this.InputRef} />
                <input type='button' value="Ref Focus" onClick={this.RefFocus} />
                <input type='button' value="JavaScript Focus" onClick={this.JavascriptFocus} />

            </>
        );
    }

};
