import React, { Component } from 'react';
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';

export default class R045_InputGroup extends Component { //reactstrap v9.0.0 에서 InputGroupAddoOn삭제
    render() {
        return (
            <>
                <InputGroup>
                    <Input placeholder='userid' />
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroup>
                <InputGroup>
                    <Button>button</Button>
                    <Input placeholder='userid' />

                </InputGroup>
            </>
        );
    }

};
