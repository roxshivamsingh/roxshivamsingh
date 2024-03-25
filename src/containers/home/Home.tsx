import classes from "./Home.module.scss";
import EmojiBullet from "../../components/emoji-bullet/emoji-bullet";
import passport from "../../assets/images/photo.png";
import { Box } from "@mui/material";
import { info } from "../../types/info";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';
import { Link } from "react-router-dom";
export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (<Box
    component="main"
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center",
      minHeight: "calc(100vh - 70px)"
    }}
  >
    <Box
      className={[classes.avatar, classes.shadowed, classes.floating].join(' ')}
      alt={"image of developer"}
      style={{ background: info.gradient }}
      component={"img"}
      src={passport}
      width={{ xs: "35vh", md: "40vh" }}
      height={{ xs: "35vh", md: "40vh" }}
      borderRadius={"50%"}
      p={"0.75rem"}
      mb={{ xs: "1rem", sm: 0 }}
      mr={{ xs: 0, md: "2rem" }}
    />
    <Box>
      <h1>
        Hi, I'm{" "}
        <span
          style={{
            background: info.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {info.firstName}
        </span>
        <span className={classes.hand}>🤚</span>
      </h1>
      <h2>I'm {info.position}.</h2>
      <Box component={"ul"} p={"0.8rem"}>
        {info.miniBio.map((bio, index) => (
          <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
        ))}
      </Box>
      <Box
        display={"flex"}
        gap={matches ? "1.5rem" : "10px"}

        sx={{ p: { md: "0.8rem", sm: "0.5rem" } }}
        justifyContent={matches ? "left" : "center"}
        fontSize={{ xs: "2rem", md: "2.5rem" }}
      >

        <Link target="_blank" to={info.social.linkedin} >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link target="_blank" to={info.social.github} >
          <GitHubIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  </Box>
  );
}
