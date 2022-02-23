import React, {useState} from 'react'
import {
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {Paper, Box, styled} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from './components/Layout'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { grey, blue } from '@mui/material/colors';


let darkTheme = createTheme({
    palette: {
        mode: "dark",
    }
})

let lightTheme = createTheme({
    palette: {
        mode: "light",
    }
})

export default function App() {
    const [theme, setTheme] = useState(darkTheme)

    let toggleTheme = () => {
        setTheme(prevState => prevState.palette.mode === "dark" ? lightTheme : darkTheme)
        console.log(theme)
    }

    return(
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <Routes>
                        <Route path="/" element={<Layout toggleTheme={toggleTheme} />} >
                            <Route path="/" element={<Home/>} />
                        </Route>
                    </Routes>
                </Paper>
            </ThemeProvider>

    )
}