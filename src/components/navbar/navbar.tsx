import Box from '@mui/material/Box';
import classes from "./Navbar.module.scss";
import Link from '@mui/material/Link';
import { info } from '../../types/info';
import { Container, Stack } from '@mui/material';


const NAVLINKS = ['Home', 'Contact', 'Projects'];

export default function NavBar() {
  return (
    <Container>
      <Stack direction='row' spacing={3}>
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
          &lt;roxshivamsingh /&gt;

        </Link>
        <Stack sx={{ ml: 'auto' }} direction='row' spacing={2}>
          {NAVLINKS.map((item) => (
            <Box key={item} sx={{
              color: 'inherit',
              fontWeight: 700,
              textTransform: "none",
              p: { sm: 0, xs: 0 },
              borderImageSource: info.gradient,
              // textTransform: "capitalize",
            }}


              className={classes.active}
            >
              {item}
            </Box>
          ))}

        </Stack>
      </Stack>
    </Container>
  );
}
// import { useState } from "react";
// import classes from "./Navbar.module.scss";
// import { Link, useLocation } from "react-router-dom";
// import { Box } from "@mui/material";
// import { info } from "../../types/info";
// import ThemeToggle from "../theme-toggle/theme-toggle";

// const links = [
//   {
//     name: "Home",
//     to: "/",
//     active: "home",
//   },
//   {
//     name: "About",
//     to: "/about",
//     active: "about",
//   },
//   {
//     name: info.initials,
//     type: "initials",
//     to: "/",
//     active: "home",
//   },
//   {
//     name: "Projects",
//     to: "/projects",
//     active: "projects",
//   },
// ];
// interface IProps {
//   darkMode: boolean,
//   handleClick: VoidFunction
// }
// export default function Navbar({ darkMode, handleClick }: IProps) {
//   const location = useLocation();
//   const [active, setActive] = useState(
//     location.pathname === "/"
//       ? "home"
//       : location.pathname.slice(1, location.pathname.length)
//   );

//   return (
//     <Box component={"nav"} width={"100%"}>
//       <Box
//         component={"ul"}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         gap={{ xs: "2rem", md: "8rem" }}
//         textTransform={"lowercase"}
//         fontSize={"1rem"}
//       >
//         {links.map((link, index) => (
//           <Box
//             key={index}
//             component={"li"}
//             className={(link.active === active && !link.type) ? classes.active : ''}
//             sx={{
//               borderImageSource: info.gradient,
//               textTransform: "capitalize",
//             }}
//           >
//             <Link
//               to={link.to}
//               onClick={() => setActive(link.active)}
//               className={classes.link}
//             >
//               {!link.type && <p style={{ padding: "0.5rem 0" }}>{link.name}</p>}
//               {link.type && <h1>{link.name}</h1>}
//             </Link>
//           </Box>
//         ))}
//         <li >

//           <ThemeToggle darkMode={darkMode} handleClick={handleClick} />
//         </li>
//       </Box>
//     </Box>
//   );
// }
