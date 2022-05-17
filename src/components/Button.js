import React from 'react'

const Button = ({ hrefText = '#', buttonText, className } = props) => {
    return <a className={`${className}`} href={`${hrefText ? hrefText : '#'}`}>
        {buttonText}
    </a>
}

export default Button