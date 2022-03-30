import React, { Component } from 'react';
import propTypes from 'prop-types';

class R021_PropsRequired extends Component {
    render() {
        let {
            ReactString,
            ReactNumber,
        } = this.props;

        return (
            <div>
                {ReactString}{ReactNumber}
            </div>
        );
    }
}

R021_PropsRequired.propTypes = {
    ReactString: propTypes.isRequired,
}

export default R021_PropsRequired;
