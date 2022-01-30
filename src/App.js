import React from 'react'
import './App.css'
import Props from './R019_PropsBoolean'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기.</p>
      <Props BooleanTrueFalse={false} />
      <Props BooleanTrueFalse />
    </div>
  )
}

export default App;