import React from 'react'
import './App.css'
import R024_ReactState from './R024_ReactState';
import R025_SetState from './R025_SetState';
import R026_ForceUpdate from './R026_ForceUpdate';
import R027_ComponentClass from './R027_ComponentClass';
import R028_PureComponentClass from './R028_PureComponentClass';
import R029_ShallowEqual from './R029_shallow-equal';
import R030_FuctionalComponent from './R030_FuctionalComponent';
import R031_Hook from './R031_Hook';
// import Component from './R027_ComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기.</p>
      {/* <R024_ReactState ReactString={"react"} /> */}
      {/* <R025_SetState /> */}
      {/* <R026_ForceUpdate /> */}
      {/* <R027_ComponentClass /> */}
      {/* <R028_PureComponentClass /> */}
      {/* <R029_ShallowEqual /> */}
      {/* <R030_FuctionalComponent contents="this is from app.js" /> */}
      <R031_Hook />
    </div>
  )
}

export default App;