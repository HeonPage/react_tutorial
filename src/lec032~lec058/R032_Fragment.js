import React, { Component } from 'react';

// 컴포넌트 단위로 element를 return할 때 하나의 <html> 태그로 전체를 감싸지 않으면 에러가 발생한다
// 이때 <Fragments>태그로 감싸면 불필요한 <html>태그를 추가하지 않고 사용할 수 있다

export default class R03_Fragments extends Component {
    render() {
        return (
            <React.Fragment>
                <p> P Tag</p>
                <span>Span Tag</span>
            </React.Fragment>
        )
    }

};
