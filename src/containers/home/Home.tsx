import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

// =======================================================================

import classes from "./Home.module.scss";
import EmojiBullet from "../../components/emoji-bullet/emoji-bullet";
import { info } from "../../types";
import { Iconify, HtmlTooltip } from "../../components";

export default function Home() {

  return (<Box component="main" sx={SX.Container}>
    <Box
      className={classes.floating}
      alt="image of developer"
      effect="blur"
      style={{ background: info.gradient }}
      component={LazyLoadImage}
      src={'/images/personal/photo.png'}
      sx={SX.Passport}
    />
    {/* <div className={classes.home__img} /> */}
    <Box>
      <h1>
        Hi, I'm <span
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

        sx={SX.Icons}
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
  IconResume: { "&:hover": { color: "red" } },
  Icons: {
    display: "flex",
    gap: { sm: '10px', xs: '10px', md: '1.5rem', lg: '1.5rem' },
    p: { md: "0.8rem", sm: "0.5rem" },
    justifyContent: { lg: 'left', xs: 'center', sm: 'center', md: 'center' },
    fontSize: { xs: "2rem", md: "2.5rem" }
  },
  Passport: {
    width: { xs: "35vh", md: "40vh" },
    height: { xs: "35vh", md: "40vh" },
    borderRadius: '50%',
    p: '0.75rem',
    mb: { xs: "1rem", sm: 0 },
    mr: { xs: 0, md: "2rem" }
  }
}
