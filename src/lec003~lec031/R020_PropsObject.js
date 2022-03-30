import React, { Component } from 'react';
import datatype from 'prop-types'

class R020_PropsObject extends Component {
    state = {}
    render() {
        let { ObjectJson } = this.props;


        return (
            <div>
                {JSON.stringify(ObjectJson)}
            </div>
        );
    }
}

R020_PropsObject.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number,
    })
}


export default R020_PropsObject;