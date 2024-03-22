import { Box, Container, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import NavBar from '../../components/navbar/navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { TECH_ICONS } from '../../types/content';

export default function Home() {
    return (
        <div >
            <NavBar />
            <Box sx={{ mt: 10 }} />
            <Box sx={{
                // mt: "20%"
                // border: "1px solid red",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",

            }}>
                <Container
                // fixed
                // maxWidth="sm"
                >
                    <Grid container>
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
                            <Stack display='flex' direction='row' justifyContent='center'>

                                <AccountCircleOutlinedIcon sx={{
                                    fontSize: '10rem',
                                    color: "gray"
                                }} />

                            </Stack>
                        </Grid>

                    </Grid>
                    <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                        <Typography variant="h5">
                            Tech Stack |
                        </Typography>
                        {TECH_ICONS.sort().slice(0, 5).map((row) => (<Tooltip title={row?.replace(".png", "")}>
                            <IconButton>
                                <img src={`/images/${row}.png`} style={{ width: 40 }} />
                            </IconButton>
                        </Tooltip>))}
                    </Stack>
                </Container>
            </Box>

        </div>
    );
}