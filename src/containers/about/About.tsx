import { Box, Container, Typography } from "@mui/material";
// =======================================================================

import Style from "./About.module.scss";
import { info, ViewportEnum } from "../../types";
import Terminal from "../../components/terminal/Terminal";
import { AboutAcadmics, AboutExperience } from "../../components";
import { useMemo } from "react";
import { useAppSelector } from "../../redux";

export default function About() {
  const { viewport } = useAppSelector((state) => state.Util.value);
  console.log(viewport)
  const renderAboutText = useMemo(() => (<>
    <p>
      <span style={{ color: info.baseColor }}>
        {info.username}$
      </span>{" "}
      cat about-{info.username}{" "}
    </p>
    <p>
      <span style={{ color: info.baseColor }}>
        about{info.username} <span className={Style.green}>(main)</span> ${" "}
      </span>
      {info.bio}
    </p>
  </>), [])

  const renderSkillText = <>
    <p>
      <span style={{ color: info.baseColor }}>
        {info.username}
      </span>{" "}
      cd skills/tools
    </p>
    <p>
      <span style={{ color: info.baseColor }}>
        skills/tools <span className={Style.green}>(main)</span> $
      </span>{" "}
      ls
    </p>
    <p style={{ color: info.baseColor }}> Proficient With</p>
    <ul className={Style.skills}>
      {info.skills.proficientWith.map((proficiency, index) => (
        <li key={index}>{proficiency}</li>
      ))}
    </ul>
    <p style={{ color: info.baseColor }}> Exposed To</p>
    <ul className={Style.skills}>
      {info.skills.exposedTo.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </>


  const renderMiscText = <>
    <p>
      <span style={{ color: info.baseColor }}>
        {info.username}
      </span>{" "}
      cd hobbies/interests
    </p>
    <p>
      <span style={{ color: info.baseColor }}>
        hobbies/interests <span className={Style.green}>(main)</span> $
      </span>{" "}
      ls
    </p>
    <ul>
      {info.hobbies.map((hobby, index) => (
        <li key={index}>
          <Box component={"span"} mr={"1rem"}>
            {hobby.emoji}
          </Box>
          {hobby.label}
        </li>
      ))}
    </ul>
  </>

  return (
    <>
      <Container>
        <Typography variant='h4' sx={{ fontWeight: 500 }}>
          About
        </Typography>
        {viewport}
        <Box sx={{ mt: "3rem" }}>

          {[renderAboutText, renderSkillText, renderMiscText]?.map((row, i) => {
            return (<Terminal key={i}>
              {row}
            </Terminal>)
          })}
          <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
            Experience
          </Typography>
          <AboutExperience isDesktop={viewport === ViewportEnum.Desktop} />
          <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
            Acadmics
          </Typography>
          <AboutAcadmics isDesktop={viewport === ViewportEnum.Desktop} />
        </Box>
      </Container>

    </>
  );
}
