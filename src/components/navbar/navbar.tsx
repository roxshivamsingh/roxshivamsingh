import classes from "./Navbar.module.scss";
import { NAVLINKS, info } from '../../types/info';
import {
  Box,
  Stack,
  Link,
  AppBar,
  Toolbar,
  Typography,
  SxProps
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


export default function NavBar() {

  const { pathname } = useLocation();

  // useEffect(() => {
  //   if (window.scrollY >= 392) {
  //     console.log(true)
  //   }

  // }, [window.scrollY])
  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed"
    // elevation={0} sx={{ background: "inherit" }}
    >
      <Toolbar >
        <Typography component='a' href="/" sx={SX.Brand}>
          &lt;roxshivamsingh /&gt;
        </Typography>

        <Stack direction='row' spacing={2}>
          {NAVLINKS.map((item) => {
            const isActive = item.path === pathname
            return (<Box key={item.path}
              component={Link}
              href={item.path}
              sx={{
                ...SX.NavLink,
                borderImageSource: isActive ? info.gradient : 'none',
              }}
              className={isActive ? classes.active : ''}
            >
              {item.label}
            </Box>
            )
          })}
        </Stack>
      </Toolbar>
    </AppBar>
    <Box sx={{ mt: 5 }} />
  </Box>
  )

}


const SX: { [key: string]: SxProps } = {
  Brand: {
    flexGrow: 1,
    py: 1,
    display: { xs: 'none', sm: 'block' },
    background: info.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "inherit",
    textDecoration: "none",
    fontFamily: 'Pacifico',
    "&:hover": {
      textDecoration: "underline",
    },
    fontSize: { lg: 30, sm: 20 }
  },
  NavLink: {
    color: 'inherit',
    fontWeight: 700,
    fontDecoration: "none",
    textTransform: "none",
    p: { sm: 0, xs: 0, lg: 0, md: 0 },
  }

}