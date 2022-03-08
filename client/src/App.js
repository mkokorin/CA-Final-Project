import React from "react";


import Navbar from "./components/Navbar/Navbar";
import GlobalHome from '../../client/src/pages/Main/GlobalHome'
import Reviews from './pages/Reviews/Reviews'
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";

const darkTheme = createTheme({
    palette: {
        type: 'light',
    },
})

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<GlobalHome />} exact />
                    <Route path='/Reviews' element={<Reviews />} exact />
                    <Route path='/Auth' element={<Auth />} exact />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    )
}

export default App;