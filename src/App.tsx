import './App.module.scss'
import Router from './routes'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { THEME_OPTIONS } from './types/theme'
import useAppBaseService from './hooks/useAppBaseService'

const theme = createTheme(THEME_OPTIONS)

function App() {
    useAppBaseService()
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    )
}

export default App
