import React from 'react'
import Header from './Header'

const App = () => {
    const logo = require('/src/images/logo-white.png')

    return (
        <div>
            <Header logo={logo} />
        </div>
    )
}

export default App