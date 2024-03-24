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
    Box
} from '@mui/material';
const PROJECTS = [{
    label: 'Content Right',
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrGbYVybUZXBmSFDktnjGZk-OCMqDgzQSpMCay2xoAQ&s",
    description: "Chat app like Chat-GPT with Google social login and manual login. When we    enter a prompt, it will give an output in video format. Based on React.js,    Firebase, Redux-Toolkit Material-UI. This app still in development.",

    technologies: ["Node.js", "React.js", "Firebase", "Material-UI"],
    link: {
        github: "https://github.com/digitalphora/devgpt-contentright",
        live: "https://devgpt-contentright.vercel.app/"
    }
},

{
    label: 'Shorts',
    cover: "https://play-lh.googleusercontent.com/GuHDoYst1TFXTngf4aWaJl_joG0kO6DhzOaIqNlWMrha915Zcxz50Ur-UWdngHb3oyg",
    description: "It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI",
    technologies: ["Node.js", "React.js", "Firebase", "Material-UI"],

    link: {
        github: "https://github.com/roxshivamsingh/shorts",
        live: "https://devgpt-contentright.vercel.app/"
    }
},

{
    label: 'Shorts',
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78Yr9IX28mmCnEYoddY4BecelTNqTEO56CsnKYFpUfQ&s",
    description: "It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI",
    technologies: ["Node.js", "React.js", "Firebase", "Material-UI"],

    link: {
        github: "https://github.com/roxshivamsingh/shorts",
        live: "https://devgpt-contentright.vercel.app/"
    }
},



]

export default function Project() {
    return (
        <Container>
            <Box sx={{ mt: 5 }} />
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
                    {PROJECTS?.map((row, i) => (

                        <Grid item key={i}>
                            <Card sx={{ maxWidth: 345, borderRadius: 3 }}
                                elevation={4}
                            >
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={row.cover}
                                    title={row.label}
                                />
                                <CardContent >
                                    <Stack spacing={2}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {row.label}
                                        </Typography>
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
                                <CardActions>
                                    <Stack direction='row' spacing={2}>
                                        {row?.technologies?.map((technology, j) => <Chip label={technology} key={j}
                                            size='small'
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
        </Container>
    );
}
