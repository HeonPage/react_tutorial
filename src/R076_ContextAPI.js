import React from 'react'
import Children from "./R076_ContextAPI_children"
const { Provider, Consumer } = React.createContext()
export { Consumer }

const R076_ContextAPI = () => {
    return (
        <div>
            <Provider value="React2020">
                <Children />
            </Provider>
        </div>
    )
}

export default R076_ContextAPI
