import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class R036_Breadcrumb extends Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">go Top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">go Botoom</BreadcrumbItem>
                </Breadcrumb>

                <div id="bottom" style={{ marginTop: "1000px" }}>
                    <span>bottom</span>
                </div>
            </div>
        );
    }

};
