import React, { Component } from 'react';
import datatype from 'prop-types'

class R018_PropsDataType extends Component {
    render() {
        let { String, Number, Boolean, Array, ObjectJson, Function } = this.props
        return (
            <div style={{ padding: "0px" }}>
                <p>StringProps : {String}</p>
                <p>NumberProps : {Number}</p>
                <p>BooleanProps : {Boolean.toString()}</p>
                <p>ArrayProps : {Array.toString()}</p>
                <p>ObjectJsonProps : {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps : {Function}</p>
            </div>
        );
    }
}

R018_PropsDataType.propTypes = {
    String: datatype.string,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}


export default R018_PropsDataType;
