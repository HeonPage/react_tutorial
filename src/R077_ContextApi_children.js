import React from 'react'
import { Consumer } from './R077_ContextApi'

const R077_ContextApi_children = () => {
    return (
        <div>
            <Consumer>
                {contextValue =>
                    <button onClick={e => contextValue.setcontent("react200")}>
                        {contextValue.content} 123123
                    </button>}
            </Consumer>
        </div>
    )
}

export default R077_ContextApi_children
