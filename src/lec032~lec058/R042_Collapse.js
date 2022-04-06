import React, { Component } from 'react';
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap';

export default class R042_Collase extends Component {
    render() {
        return (
            <div>
                <button color="warning" id="toggle">
                    펼치기/접기
                </button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            REACT 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        );
    }

};
