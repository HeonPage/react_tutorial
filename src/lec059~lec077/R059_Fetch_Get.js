import React, { Component } from 'react';

export default class R059_Fetch_Get extends Component {
    componentDidMount = async () => {
        const res = await fetch('http://date.jsontest.com')
        const body = await res.json()
        alert(body.date + ' ' + body.time)
        console.log(body)
    }
    render() {
        return (
            <>fetch test</>
        );
    }
};
