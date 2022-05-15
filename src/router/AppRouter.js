import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../components/App';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter