import React, { Component } from 'react';

export default class R064_Promise extends Component {
    componentDidMount() {
        new Promise(resolve => {
            setTimeout(function () {
                resolve('react')
            }, 1000)
        })
            .then(function (result) {
                console.log(result)
                return result + 200
            })
            .then(result => {
                console.log(result)
            })
    }

    render() {
        return (
            <>Promise</>
        );
    }
};
