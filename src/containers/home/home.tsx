import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const navItems = ['Home', 'Projects', 'Contact Us'];

export default function Home() {



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" elevation={0} color='inherit'>
                <Toolbar >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontFamily: 'Pacifico' }}
                    >
                        roxshivamsingh

                    </Typography>
                    <Box sx={{ ml: 'auto' }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'inherit', fontWeight: 700, textTransform: "none" }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}