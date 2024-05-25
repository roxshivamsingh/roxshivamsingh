import classes from "./Home.module.scss";
import EmojiBullet from "../../components/emoji-bullet/emoji-bullet";
import passport from "../../assets/images/photo.png";
import { Box, Typography } from "@mui/material";
import { info } from "../../types/info";
import { SxProps, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { Iconify } from "../../components/iconify";
import HtmlTooltip from "../../components/html-tooltip";
export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (<Box component="main" sx={SX.Container}>
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
        display="flex"
        gap={matches ? "1.5rem" : "10px"}
        sx={{ p: { md: "0.8rem", sm: "0.5rem" } }}
        justifyContent={matches ? "left" : "center"}
        fontSize={{ xs: "2rem", md: "2.5rem" }}
      >
        <Link target="_blank" to={info.social.linkedin} >
          <Iconify icon='line-md:linkedin' width={40} />
        </Link>
        <Link target="_blank" to={info.social.github} >
          <Iconify icon="line-md:github-loop" width={40} />
        </Link>

        <HtmlTooltip
          title={<>
            <Typography fontFamily='Pacifico' gutterBottom>Download Resume</Typography>
            <b>Name:</b> <em>shivam-singh-nodejs.pdf</em>
            <br />
            <b>{"Updated At:"}</b> <em>{'25/05/2024, at 10:00 PM'}</em>
          </>
          }
        >
          <Link target="_blank" to='' style={{ cursor: "pointer" }}>
            <Iconify icon='prime:file-pdf' width={40} sx={SX.IconResume} />
          </Link>
        </HtmlTooltip>
      </Box>
    </Box>
  </Box >
  );

}

const SX: { [key: string]: SxProps } = {
  Container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 70px)"
  },
  IconResume: {
    "&:hover": {
      color: "red"
    }
  }
}