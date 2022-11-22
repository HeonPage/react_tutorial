import React, { Component } from 'react';

export default class R065_Promise_Catch extends Component {
    componentDidMount() {
        new Promise((resolve, reject) => {
            resolve('Success')
            // reject(Error("Error Info"))
        })
            .then(result => {
                console.log("then :" + result)
            })
            .catch(result => console.log("catch :" + result))
    }

    render() {
        return (
            <>Promise</>
        );
    }
};
