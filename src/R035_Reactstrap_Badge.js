import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

export default class R035_Badge extends Component {
    render() {
        return (
            <div>
                <h1>PRODUCT NAME <Badge color='secondary'>hit</Badge></h1>
                <Button color='light' outline>
                    Accessor <Badge color='dark'>4</Badge>
                </Button>
                <Button color='danger' pill>
                    pill
                </Button>
                <Button color='light' href="https://www.naver.com">
                    Link
                </Button>

            </div>
        );
    }

};
