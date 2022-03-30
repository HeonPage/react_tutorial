import React, { Component } from 'react';

class R015_Map extends Component {
    componentDidMount() {
        var map_Arr = [3, 2, 8, 6];
        let Map_newArr = map_Arr.map(x => x)
        console.log('1. Map_newArr : [' + Map_newArr + ']')

        let Map_multiArr = map_Arr.map(x => x * 2)
        console.log('2. Map_newArr : [' + Map_multiArr + ']')

        var ObjArray = [{ key: 'react', value: '200' }, { key: '리액트', value: '이백' }];
        let Map_ObjArray = ObjArray.map((obj, index) => {
            console.log((index + 3) + ". obj : " + JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value
            return Obj
        });
        console.log("5. Map_objarr : " + JSON.stringify(Map_ObjArray))


    }
    render() {
        return (
            <h2>[THIS IS Map]</h2>
        );
    }
}
export default R015_Map;