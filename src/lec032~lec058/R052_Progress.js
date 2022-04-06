import React, { Component } from 'react';
import { Progress } from 'reactstrap';

export default class R052_Progress extends Component {
    constructor(props) {
        super(props)
        this.state = { progress: 0 }
    }

    componentDidMount() { this.progress() }
    progress = () => {
        if (this.state.progress !== 100) {
            setTimeout(function () {
                this.setState({ progress: this.state.progress + 1 })
                this.progress()
            }.bind(this), 100)
        }
    }

    render() {
        return (
            <>
                <Progress color="info" value={this.state.progress}>{this.state.progress}%</Progress><br />
                <Progress multi>
                    <Progress bar color='warning' value={'25'}>25%</Progress>
                    <Progress bar color='primary' value={'30'}>30%</Progress>
                    <Progress bar color='danger' value={'35'}>35%</Progress>
                </Progress>

            </>
        );
    }

};
