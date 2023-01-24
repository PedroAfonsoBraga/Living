import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../pages/home"
import PostPage from '../pages/Post'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/post' element={<PostPage />} />
            <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
    )
}

export default RoutesMain