import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import R059_Fetch_Get from './R059_Fetch_Get';
import R060_Fetch_Post from './R060_Fetch_Post';
import R061_Axios_Get from './R061_Axios_Get';
import R062_Axios_Post from './R062_Axios_Post';
import R063_Callback from './R063_Callback';
import R064_Promise from './R064_Promise';
import R065_Promise_Catch from './R065_Promise_Catch';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기.</p>
      {/* <R059_Fetch_Get /> */}
      {/* <R060_Fetch_Post /> */}
      {/* <R061_Axios_Get /> */}
      {/* <R062_Axios_Post /> */}
      {/* <R063_Callback /> */}
      {/* <R064_Promise /> */}
      <R065_Promise_Catch />
    </div>
  )
}

export default App;