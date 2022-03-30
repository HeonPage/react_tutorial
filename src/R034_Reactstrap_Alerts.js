import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

export default class R034_ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <Alert color="light">
                    Simple Alert[color:light]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [color:warninig]
                </UncontrolledAlert>
            </div>
        );
    }

};
