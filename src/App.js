import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
class App extends Component {

    render() {

        return (
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/About' element={<About />}/>
            </Routes>
        )
    }
}


export default App;