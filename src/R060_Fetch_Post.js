import React, { Component } from 'react';

export default class R060_Fetch_Post extends Component {
    componentDidMount = async () => {
        const res = await fetch('http://date.jsontest.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { a: 'react', b: 200 },
        })
        const body = await res.json()
        alert(body.date)
        console.log(body)
    }
    render() {
        return (
            <>Fetch POST</>
        );
    }

};
