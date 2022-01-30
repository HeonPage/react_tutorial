import React from 'react'
import './App.css'
import Props from './R018_PropsDataType'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기.</p>
      <Props
        String='react'
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 7, 8, 9]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("Function Props : function!")} />
    </div>
  )
}

export default App;