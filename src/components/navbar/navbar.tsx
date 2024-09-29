import { useEffect, useState } from "react";
import { useLocation, Link as DomLink } from 'react-router-dom';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  Box,
  Stack,
  Toolbar,
  Link,
  SxProps,
  styled
} from '@mui/material';
// =======================================================================

import classes from "./navbar.module.scss";
import { NAVLINKS, info } from '../../types/info';
import { Iconify } from "../iconify";
import MiniDrawer from "../react-drawer/react-drawer";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  // paddingLeft: 100,
  // paddingLeft: "1rem",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));
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
        {/* <DrawerHeader> */}
        <Link component={DomLink} to="/" sx={SX.Brand}>
          &lt;roxshivamsingh /&gt;
        </Link>

        {/* </DrawerHeader> */}
        <Box component={Stack} direction='row'
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
              xl: 'flex'
            }
          }}
          spacing={{ lg: 3, md: 2, sm: 2, xs: 1 }}>
          {NAVLINKS.map((row, i) => {
            const isActive = row.path === pathname
            const classNames = `${isActive ? classes.active : ''} ${classes.NavItem}`
            return (<Box key={i}
              component={DomLink}
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
    <MiniDrawer />

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
