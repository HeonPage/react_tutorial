import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import StrAddButton from './StrAddButton'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React200</h1>
        <span>{this.props.store.getState().data.str}</span>
        <StrAddButton store={this.props.store} />
      </div>
    )
  }
}

export default App;