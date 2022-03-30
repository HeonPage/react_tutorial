import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

export default class R047_ListGroup extends Component {
    render() {
        return (
            <>
                <ListGroup>
                    <ListGroupItemHeading>Heading</ListGroupItemHeading>
                    <ListGroupItem>123<Badge pill>300</Badge></ListGroupItem>
                    <ListGroupItem color='danger'>red</ListGroupItem>
                    <ListGroupItem color='primary' href='#' disabled>disabled</ListGroupItem>
                    <ListGroupItem tag={'a'} href='http://www.naver.com'>Link</ListGroupItem>
                    <ListGroupItem color='primary' tag={'button'} action onClick={e => alert('alert')}>Button</ListGroupItem>

                </ListGroup>
            </>
        );
    }

};
