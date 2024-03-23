import { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {

  const [darkMode, setDarkMode] = useState(true);

  function handleToggleDarkMode() {
    const oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    const detectedDarkMode = eval(localStorage.getItem("darkMode") || '');

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
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
