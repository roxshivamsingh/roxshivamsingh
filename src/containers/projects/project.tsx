import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Container,
    Grid,
    Stack,
    Chip,
    CardActions,
    IconButton,
    Box,
    CardHeader,
} from '@mui/material';
// import HttpIcon from '@mui/icons-material/Http';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PROJECT_OPTIONS } from '../../types/info';

export default function Project() {
    return (
        <Container  >
            <Typography variant='h4' sx={{ fontWeight: 500 }}>
                Projects
            </Typography>
            <Stack
                sx={{
                    mt: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Grid container spacing={2} >
                    {PROJECT_OPTIONS?.map((row, i) => (

                        <Grid item key={i} xs={12} sm={12} md={4} lg={4}>
                            <Card sx={{ borderRadius: 3 }}

                                elevation={4}
                            >
                                <CardHeader
                                    // avatar={
                                    //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    //     R
                                    //   </Avatar>
                                    // }
                                    action={
                                        <Box>
                                            <IconButton size='small'>
                                                <GitHubIcon fontSize='small' />
                                            </IconButton>
                                            {/* <IconButton size='small'>
                                                <HttpIcon fontSize='small' />
                                            </IconButton> */}

                                        </Box>
                                    }
                                    title={row.label}

                                // subheader="September 14, 2016"
                                />
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={row.cover}
                                    title={row.label}
                                />
                                <CardContent >
                                    <Stack spacing={2}>


                                        <Typography variant="body2" color="text.secondary"
                                            sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        // noWrap

                                        >

                                            {row.description}
                                        </Typography>

                                    </Stack>
                                </CardContent>
                                <CardActions
                                // sx={{ display: "flex", flexDirection: "column" }}
                                >
                                    <Stack
                                        // sx={{
                                        //     display: "flex",
                                        //     flexDirection: "row",
                                        //     alignItems: "center",
                                        //     justifyContent: "space-between",


                                        // }}
                                        direction='row'
                                        // justifyContent='center'
                                        // alignContent='center'
                                        // alignItems='center'

                                        spacing={1}
                                    >
                                        {row?.technologies?.map((technology, j) =>
                                            <Chip label={technology} size='small'
                                                key={j}

                                            />

                                        )}
                                    </Stack>
                                    {/* <Button size="small">Share</Button> */}
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Stack>
        </Container >
    );
}
