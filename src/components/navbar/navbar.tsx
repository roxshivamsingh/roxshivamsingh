import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';

import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  SxProps
} from '@mui/material';
// =======================================================================

import classes from "./navbar.module.scss";
import { NAVLINKS, info } from '../../types/info';
import { Iconify } from "../iconify";

export default function NavBar() {

  const { pathname } = useLocation();

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsFixed(window.scrollY > 10)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        console.log("Scroll End");
      })
    }
  }, [])

  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" color={isFixed ? undefined : 'transparent'} elevation={0}>
      <Toolbar>
        <Typography component='a' href="/" sx={SX.Brand}>
          &lt;roxshivamsingh /&gt;
        </Typography>

        <Box component={Stack} direction='row' spacing={{ lg: 3, md: 2, sm: 2, xs: 1 }}>
          {NAVLINKS.map((row, i) => {
            const isActive = row.path === pathname
            const classNames = `${isActive ? classes.active : ''} ${classes.NavItem}`
            return (<Box key={i}
              component={Link}
              to={row.path}
              sx={{
                ...SX.NavLink,
                borderImageSource: isActive ? info.gradient : 'none',
              }}
              className={classNames}
            >
              <Iconify icon={row.icon}
                sx={{
                  display: {
                    lg: 'block',
                    md: 'none',
                    sm: 'none',
                    xs: 'none'
                  }
                }}
              />
              {row.label}
            </Box>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
    <Box sx={{ mt: 10 }} />
  </Box >
  )

}


const SX: { [key: string]: SxProps } = {
  Brand: {
    flexGrow: 1,
    py: 1,
    // display: { xs: 'none', sm: 'block' },
    background: info.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "inherit",
    fontFamily: 'Pacifico',
    "&:hover": {
      textDecoration: "underline",
    },
    fontSize: { lg: 30, sm: 20 }
  },
  NavLink: {
    display: "flex",
    flexDirection: "row",
    gap: 0.5,
    // alignItems: "center",
    color: 'inherit',
    fontWeight: 700,
    textDecoration: "none",
    textTransform: "none",
    p: { sm: 0, xs: 0, lg: 0, md: 0 },
  }

}
