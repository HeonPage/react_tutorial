import React, { Component } from 'react';
import axios from 'axios';

export default class R061_Axios_Get extends Component {
    componentDidMount() {
        axios.get('http://date.jsontest.com').then(res => alert(res.data.date))
    }

    render() {
        return (
            <>axios get</>
        );
    }

};
