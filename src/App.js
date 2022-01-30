import React from 'react'
import './App.css'
import Props from './R020_PropsObject'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기.</p>
      <Props ObjectJson={{ react: "리액트", twohundred: "200" }} />
    </div>
  )
}

export default App;