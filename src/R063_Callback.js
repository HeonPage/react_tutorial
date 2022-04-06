import React, { Component } from 'react';

export default class R063_Callback extends Component {
    componentDidMount() {
        this.logPrint(1, function (return1) {
            console.log('return1:' + return1)
            this.logPrint(return1, function (return2) {
                console.log('return2:' + return2)
            })
        }.bind(this))
    }

    logPrint(param, callback) {
        console.log('logPrint:' + param)
        param += param
        callback(param)
    }
    render() {
        return (
            <>Callback Function</>
        );
    }
};
