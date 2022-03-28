import React, { Component } from 'react';
import { shallowEqualArrays } from 'shallow-equal'

export default class R029_ShallowEqual extends Component {
    constructor(props) {
        super(props)
        this.state = { StateString: 'react' }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualArrays(this.state, nextState)
    }


    componentDidMount() {
        const object = { react: '200' }
        const array1 = ['react', object]
        const array2 = ['react', object]
        const array3 = ['react', { react: '200' }]

        console.log('shallowEqualArrays(array1,array2):' + shallowEqualArrays(array1, array2))
        console.log('shallowEqualArrays(array2,array3):' + shallowEqualArrays(array2, array3))

    }

    render() {
        console.log('render() 실행')
        return (
            <div>
            </div>
        )
    }
};
