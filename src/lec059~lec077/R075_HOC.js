import React, { Component } from 'react';
import withHocComponent from './Hoc/withHocComponent';

class R075_HOC extends Component {
    render() {
        console.log('2. HocComponent render')
        return (
            <h2>props.name : {this.props.name}</h2>
        );
    }
};
export default withHocComponent(R075_HOC, 'R075_Hoc')