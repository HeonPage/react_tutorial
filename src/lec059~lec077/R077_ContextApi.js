import React, { useState } from 'react'
import Children from './R077_ContextApi_children'

const { Provider, Consumer } = React.createContext()
export { Consumer }


const R077_ContextApi = () => {
    const [content, setcontent] = useState('asd')
    return (
        <div>
            <Provider value={content}>
                <Children />
            </Provider>
        </div>
    )
}

export default R077_ContextApi
