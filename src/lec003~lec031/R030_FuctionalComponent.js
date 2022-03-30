// 함수형 컴포넌트는 클래스형 컴포터넌트와 달리, state가 없고 생명주기 함수를 사용할 수 없다.
// 상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용하고  render()함수가 없으므로 return만 사용해 화면을 그려준다

import React from 'react';

export default function R030_FuctionalComponent(params) {
    let { contents } = params
    return (
        <h2>{contents}</h2>
    )

};
