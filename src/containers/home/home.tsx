import {
    Box,
    Container,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    // useMediaQuery,
    // useTheme
} from '@mui/material';
import NavBar from '../../components/navbar/navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { TECH_ICONS } from '../../types/content';
import classes from "./home.module.scss"

import passport from "./photo.png"
export default function Home() {
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <div >
            <NavBar />
            {/* <Box sx={{ mt: 10 }} /> */}
            <Box
                component={"main"}
                display={"flex"}
                flexDirection={{ xs: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"center"}
                minHeight={"calc(100vh - 70px)"}
            >
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Stack spacing={3}>
                                <Typography variant='h4' sx={{ fontWeight: 600, fontFamily: "Roboto" }}>
                                    Front-End React Developer
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: "gray" }}>
                                    Hi. I'm Shivam Singh. A passionate Front-End React Developer based in Mathura, Uttar Pradesh, India
                                </Typography>
                                <Stack direction='row'>
                                    <IconButton>
                                        <GitHubIcon fontSize='large' />
                                    </IconButton>
                                    <IconButton>
                                        <LinkedInIcon fontSize='large' />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Stack display='flex' flexDirection="row-reverse">

                                <Box className={classes.floating}>
                                    <Box
                                        alt="roxshivamsingh"
                                        component="img"
                                        src={passport}
                                        sx={{
                                            height: { xs: "35vh", md: "40vh" },
                                            width: { xs: "35vh", md: "40vh" },
                                            borderRadius: "50%",
                                            p: "0.75rem",
                                            mb: { xs: "1rem", sm: 0 },
                                            mr: { xs: 0, md: "2rem" },

                                            background: "linear-gradient(90deg, hsla(328, 100%, 36%, 1) 0%, hsla(176, 57%, 89%, 1) 100%)",

                                            // background: `-webkit-linear-gradient(135deg, ${["rgb(0,255,164)", "rgb(166,104,255)"]})`

                                        }}


                                    />

                                </Box>


                                {/* <AccountCircleOutlinedIcon sx={{
                                    fontSize: '10rem',
                                    color: "gray"
                                }}
                                    className={classes.floating}
                                /> */}

                            </Stack>
                        </Grid>

                    </Grid>
                    <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                        <Typography variant="h5">
                            Tech Stack |
                        </Typography>
                        {TECH_ICONS.sort().slice(0, 5).map((row) => (<Tooltip key={row} title={row?.replace(".png", "")}>
                            <IconButton size='small'>
                                <img src={`/images/${row}.png`} style={{ width: 40 }} />
                            </IconButton>
                        </Tooltip>))}
                    </Stack>
                </Container>
            </Box>

        </div>
    );
}