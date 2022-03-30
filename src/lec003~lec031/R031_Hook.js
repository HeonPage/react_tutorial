//함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state와 생명주기 함수와 같은 기능을 사용하기 위해 hook을 사용한다
// hook함수으 ㅣ대표적인 함수는
// useState() useEffect()이다

import React, { useState, useEffect } from 'react';

export default function R031_Hook(params) {
    const [contents, setContents] = useState('[THIS IS REACT]')

    useEffect(() => {
        console.log('useEffect')
    })

    return (
        <div>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
};
