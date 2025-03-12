import { ThemeOptions } from '@mui/material'

export const THEME_OPTIONS: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: { main: '#8d53ff' },
        secondary: { main: '#ca6be6' },
        // primary: { main: "#B90043" },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 12,
                },
            },
        },
    },
}
