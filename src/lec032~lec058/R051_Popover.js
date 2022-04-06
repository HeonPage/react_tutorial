import React, { Component } from 'react';
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';

export default class R051_Popovers extends Component {
    render() {
        return (
            <>
                <Button id="popover_id" type='button'>
                    popover button
                </Button>
                <UncontrolledPopover placement='right' target='popover_id'>
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>Commodo amet aliqua ea Lorem qui fugiat labore proident Lorem labore non. Mollit ad amet occaecat esse eu. Aute velit non culpa qui dolor magna exercitation laborum do irure exercitation in anim.</PopoverBody>
                </UncontrolledPopover>
            </>
        );
    }

};
