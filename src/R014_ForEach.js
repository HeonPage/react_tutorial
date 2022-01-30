import React, { Component } from 'react';

class R014_ForEach extends Component {
    componentDidMount() {
        var for_Arr = [3, 2, 8, 6];
        var for_NewArr = [];

        for (var i = 0; i < for_Arr.length; i++) {
            for_NewArr.push(for_Arr[i])
        }
        console.log(for_NewArr)

        var forEach_Arr = [3, 1, 12, 9];
        var forEach_NewArr = [];

        forEach_Arr.forEach(element => {
            forEach_NewArr.push(element)
        });
        console.log(forEach_NewArr)
    }
    render() {
        return (
            <h2>[THIS IS ForEach]</h2>
        );
    }
}
export default R014_ForEach;