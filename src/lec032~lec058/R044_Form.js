import React, { Component } from 'react';
import { FormGroup, Label, Input, Row, Col, Form } from 'reactstrap';

export default class R044_Form extends Component {
    render() {
        return (
            <Form>
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="sm">
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row Form>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="address" />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="address" />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="address" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }

};
