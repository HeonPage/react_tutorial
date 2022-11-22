import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

//스토어 생성함수 configureStore 함수의 파라미터로 reducers 폴더 경로를 넘긴다
// reducers 폴더의 index.js에는 데이터 초기값을 설정하고 데이터를 변경해주는 함수가 있는데, 이 함수를 '리듀서'라고 한다
const store = createStore(reducers)

const listener = () => {
    ReactDOM.render(
        // Provider에 데이터를 넘겨주면 중간 컴포넌트에서 props값을 다시 전달해줄 필요 없이 하위 컴포넌트에서 데이터를 사용할 수 있다
        <Provider store={store}>
            <App indexProp="react" />
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(listener)
listener()
