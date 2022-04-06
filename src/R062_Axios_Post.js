import React, { Component } from 'react';
import axios from 'axios';

export default class R062_Axios_Post extends Component {
    componentDidMount() {
        axios.post('http://date.jsontest.com', {
            a: 'react',
            b: 200
        }).then(res => alert(res.data.date))
    }

    render() {
        return (
            <>axios Post</>
        );
    }

};
