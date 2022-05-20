import React, { useContext } from 'react'
import Button from './Button'
import headerContext from '../contexts/headerContext'

const Header = (props) => {
    const context = useContext(headerContext)

    return (
        <header className='header'>
            <div className='header__logo-box'>
                <img
                    className='header__logo-box__logo'
                    src={props.logo}
                    alt='logo'
                />
            </div>
            <div className='header__text-box'>
                <h1 className='header__text-box__heading-primary'>
                    <span
                        className='header__text-box__heading-primary__main'>
                        {context.headerTextMain}
                    </span>
                    <span
                        className='header__text-box__heading-primary__sub'>
                        {context.headerTextSub}
                    </span>
                </h1>
                <Button
                    className={'btn btn--white btn--animated'}
                    buttonText={'Discover our tours'}
                />
            </div>

        </header>
    )
}

export default Header