import React, { Component } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

export default class R038_ButtonGroup extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 10 }
    }

    move = (type, e) => {
        if (type === 'Left') {
            this.setState({ number: this.state.number - 1 })
        }
        else if (type === 'Right') {
            this.setState({ number: this.state.number + 1 })
        }
    }
    render() {
        return (
            <div style={{ padding: "0px" }}>
                <ButtonGroup style={{ padding: "0px" }}>
                    <Button onClick={e => this.move('Left')}>Left</Button>
                    <Button onClick={e => this.move('Right')}>Right</Button>
                </ButtonGroup>
                <br />{this.state.number}
            </div>
        );
    }
};
