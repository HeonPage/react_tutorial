import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

export default class R053_Spinner extends Component {
    render() {
        return (
            <>
                <Spinner color='primary' />
                <Spinner color='secondary' />
                <Spinner type="grow" color='warning' />
                <Spinner type="grow" color='primary' />
                <Spinner size="sm" color='dark' />
                <Spinner style={{ width: "3rem", height: "10rem" }} type="grow" color='dark' />
            </>
        );
    }
};
