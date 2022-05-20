import React from 'react'

const Button = ({ hrefText = '#', buttonText = 'Submit', className } = props) => {
    return <a className={`${className}`} href={`${hrefText}`}>
        {buttonText}
    </a>
}

export default Button