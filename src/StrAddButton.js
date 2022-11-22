import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from './actions'

class StrAddButton extends Component {
    render() {
        return (
            // <input value='Add200' type='button' onClick={this.addString} />
            <input value='Add200' type='button' onClick={this.props.addString}></input>
        )
    }

    // dispatch함수를 통해 add함수의 반환 값을 스토어에 전달한다
    // addString = () => {
    //     this.props.store.dispatch(add())
    // }
}

let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString: () => dispatch(add())
    }
}

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton)

export default StrAddButton
