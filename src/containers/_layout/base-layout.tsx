import classes from "./base-layout.module.scss";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
import { Box, Fab, Fade, Grid, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material"

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

  return (
    <Fade in={trigger}>
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
export default function BaseLayout(props: IScrollTop) {

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

  return (
    <Box
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
        <Grid item id="back-to-top-anchor">
          <Navbar

          // darkMode={darkMode}
          // handleClick={handleToggleDarkMode}
          />
        </Grid>
        <Grid item flexGrow={1}>
          {/* <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/portfolio"} element={<Portfolio />} />
            <Route
              exact
              path={"/project-not-live"}
              element={<ProjectNotLive />}
            />
          </Routes> */}
          <Outlet />

          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top"
              // variant="dark"
              sx={{ background: "inherit", color: "white", border: "1px solid white" }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Grid>
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
    </Box>
  );
}
