import React, { Component } from 'react'
import { add } from './actions'

class StrAddButton extends Component {
    render() {
        return (
            <input value='Add200' type='button' onClick={this.addString} />
        )
    }

    // dispatch함수를 통해 add함수의 반환 값을 스토어에 전달한다
    addString = () => {
        this.props.store.dispatch(add())
    }
}

export default StrAddButton
