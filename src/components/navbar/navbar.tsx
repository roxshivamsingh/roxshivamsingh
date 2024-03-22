import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


const NAVLINKS = ['Home', 'Projects', 'Contact'];

export default function NavBar() {
    return (<Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" elevation={0} color='inherit'
            sx={{ border: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar >
                <Link href=""
                    sx={{
                        flexGrow: 1,
                        color: "inherit",
                        textDecoration: "none",
                        fontFamily: 'Pacifico',
                        "&:hover": {
                            textDecoration: "underline",
                        },
                        fontSize: { lg: 30, sm: 20 }
                    }}

                >
                    roxshivamsingh

                </Link>
                <Box sx={{ ml: 'auto' }}>
                    {NAVLINKS.map((item) => (
                        <Button key={item} sx={{
                            color: 'inherit',
                            fontWeight: 700,
                            textTransform: "none",
                            p: { sm: 0, xs: 0 }
                        }}
                            disableElevation
                            disableRipple
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    </Box>);
}