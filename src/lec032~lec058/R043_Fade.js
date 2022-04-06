import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

export default class R043_Fade extends Component {
    constructor(props) {
        super(props)
        this.state = { fade: true }
    }

    toggle = (e) => {
        this.setState({ fade: !this.state.fade })
    }

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}>Fade</Button>
                <Fade in={this.state.fade} tag="h1">
                    Laborum officia et mollit sint nulla ad esse magna excepteur. Irure esse irure consectetur qui est non quis. Lorem excepteur duis reprehenderit qui ea duis magna anim exercitation amet dolor incididunt. Incididunt laboris qui adipisicing occaecat incididunt ea occaecat anim exercitation elit. Ut ea officia eu Lorem. Fugiat aliquip Lorem velit aute.
                </Fade>
            </div>
        );
    }

};
