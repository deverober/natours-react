import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import App from './components/App'
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <AppRouter />
)