import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default class R048_Modal extends Component {
    constructor(props) {
        super(props)
        this.state = { modal: false }
    }

    toggle = (e) => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        return (
            <>
                <Button color='warning' onClick={this.toggle}>버튼</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Header</ModalHeader>
                    <ModalBody>Magna aliqua adipisicing excepteur tempor eiusmod aliqua velit veniam cupidatat tempor commodo est. Mollit laborum cillum eiusmod consequat mollit excepteur veniam ullamco fugiat reprehenderit nisi sint in sit. Non adipisicing tempor culpa non. Duis excepteur aliqua minim voluptate ullamco qui exercitation ullamco sit cillum sit Lorem. Dolor qui dolore consectetur irure deserunt ullamco ullamco.</ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.toggle}>확인</Button>
                        <Button color='danger' onClick={this.toggle}>닫기</Button>
                    </ModalFooter>
                </Modal>


            </>
        );
    }

};
