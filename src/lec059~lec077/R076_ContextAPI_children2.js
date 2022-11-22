import React from 'react'
import { Consumer } from './R076_ContextAPI'

const R076_ContextAPI_children2 = () => {
  return (
    <div>
      <Consumer>
        {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
      </Consumer>
    </div>
  )
}

export default R076_ContextAPI_children2
