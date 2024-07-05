import { Outlet } from "react-router-dom";
import classes from "./base-layout.module.scss";
import Navbar from "../../components/navbar";
import {
  Box,
  Fab,
  Fade,
  Grid,
  SxProps,
  useScrollTrigger
} from "@mui/material";
import { Iconify } from "../../components/iconify";
import { useAppSelector } from "../../redux";
import { ReduxStatusEnum } from "../../types/redux";

interface IScrollTop {
  window?: () => Window;
  children: React.ReactElement;
}


function ScrollTop(props: IScrollTop) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (<Fade in={trigger}>
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
    >
      {children}
    </Box>
  </Fade>
  );
}
export default function BaseLayout() {

  // const [darkMode, setDarkMode] = useState(true);

  // function handleToggleDarkMode() {
  //   const oppositeOfCurrentDarkMode = !darkMode;
  //   localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
  //   setDarkMode(oppositeOfCurrentDarkMode);
  // }


  // useEffect(() => {
  //   const detectedDarkMode = eval(localStorage.getItem("darkMode") || '');

  //   if (detectedDarkMode) {
  //     setDarkMode(detectedDarkMode);
  //   } else {
  //     localStorage.setItem("darkMode", "false");
  //   }
  // }, []);
  const auth = useAppSelector((state) => state.Auth);

  return (<Box
    className={classes.dark}
  // className={darkMode ? classes.dark : classes.light}
  >
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
      justifyContent={"space-between"}
    >

      {auth.status === ReduxStatusEnum.Loading ? <Grid item>
        <Box sx={SX.Progress}>
          <Iconify icon='line-md:loading-loop' width={80}
            sx={{ color: '#E100FF' }}
          />
        </Box>
      </Grid> : <>
        <Grid item id="back-to-top-anchor">
          <Navbar
          // darkMode={darkMode}
          // handleClick={handleToggleDarkMode}
          />
        </Grid>
        <Grid item flexGrow={1}>

          <Outlet />
          <ScrollTop>
            <Fab size="small" aria-label="scroll back to top" sx={SX.MoveToTop}>
              <Iconify icon='oui:arrow-up' />
            </Fab>
          </ScrollTop>
        </Grid>
      </>}

      {/* <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>
              Template Created By:{" "}
            </p>
            <p>&copy; {new Date().getFullYear()}</p>
          </Box>
        </Grid> */}
    </Grid>
  </Box >
  );
}

const SX: { [key: string]: SxProps } = {
  Progress: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  MoveToTop: {
    background: "inherit",
    color: "white",
    border: "1px solid white"
  }
}
