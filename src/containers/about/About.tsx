import { useMemo } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
// =======================================================================

import { ViewportEnum } from "../../types";
import { AboutAcadmics, AboutExperience } from "../../components";
import { useAppSelector } from "../../redux";
import { TECHNOLOGY_OPTIONS } from "../../mocks";

export default function About() {

  const { viewport } = useAppSelector((state) => state.Util.value);

  const renderSkillContent = useMemo(() => {
    return (<>
      <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
        Skills & Abilites
      </Typography>
      <Stack direction='row' flexWrap='wrap' gap={3} sx={{ my: 3 }}>
        {TECHNOLOGY_OPTIONS?.map((item, i) => {
          return (<Stack key={i} alignItems='center' >
            <LazyLoadImage src={`/images/technologies/${item.image}`} effect="blur" width={80} />
            {item.label}
          </Stack>)
        })}
      </Stack>
    </>)
  }, [])

  const renderExperienceContent = useMemo(() => {
    return (<>
      <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
        Experience
      </Typography>
      <AboutExperience isDesktop={viewport === ViewportEnum.Desktop} />
    </>)
  }, [viewport])

  const renderDescriptionContent = useMemo(() => {
    return (<Box sx={SX.Description}>
      As a Senior Full Stack Developer at iGuru Software Solutions Private Limited, I create robust and innovative web applications using a wide array of technologies. I have a Bachelor of Technology degree in Computer Science Engineering from BSACET, Mathura.
      <br /> <br />
      At my previous role at Sulovi Technologies Private Limited, I spearheaded the development and maintenance of applications using React and Firebase, introducing features such as virtualization, WhatsApp cloud API integration, and no-internet functionality. I also implemented a Google Cloud function as a microservice for backend tasks using Python, and migrated the Redux legacy pipeline to Redux Toolkit. I collaborated with other developers, tested the code quality, and documented the features and functionalities. I am always eager to learn new skills, enhance my existing ones, and deliver efficient solutions.
    </Box>)
  }, [])

  return (<Container>
    <Typography variant='h4' sx={{ fontWeight: 500 }}>
      About
    </Typography>
    <Box sx={{ mt: "3rem" }}>
      {renderDescriptionContent}

      {renderSkillContent}

      {renderExperienceContent}
      <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>
        Acadmics
      </Typography>
      <AboutAcadmics isDesktop={viewport === ViewportEnum.Desktop} />
    </Box>
  </Container>
  );
}

const SX = {
  Description: {
    fontSize: '1.3rem',
    // textAlign: 'justify',
    mb: 2,
    letterSpacing: 1,
    fontWeight: 300,
    // background: '#121212',
    borderRadius: '.2rem',
    p: 2
  }
}
