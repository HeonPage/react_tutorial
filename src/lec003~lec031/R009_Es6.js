import React, { Component } from 'react';

class R009_Es6 extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다 \n 다음 줄입니다.'
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        var Es6String1 = 'Es6'
        var Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열 ${Es6String2}!!
____다음줄입니다
오잉`);

        var LongString = "Es6에 추가된 String 함수들입니다.";
        console.log('startWith : ' + LongString.startsWith("Es6에 추가"));
        console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
        console.log('includes : ' + LongString.includes("추가된 String"));

    }
    render() {
        return (
            <h2>[THIS IS ES6 STRING]</h2>
        );
    }
}

export default R009_Es6;