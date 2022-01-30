import React from 'react'
import './App.css'
import Props from './R021_PropsRequired'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기.</p>
      <Props ReactNumber={200} />
    </div>
  )
}

export default App;