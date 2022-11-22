import React, { Component } from 'react';

export default class R072_submit extends Component {
    Submit(e) {
        var inputVal = document.getElementById('inputId').value
        console.log('inputVal: ' + inputVal)
        e.preventDefault()
    }

    render() {
        return (
            <>
                <form onSubmit={this.Submit}>
                    <input type="text" name="inputName" id="inputId" />
                    <input type="submit" value={"Submit"} />
                </form>

            </>

        );
    }
};
