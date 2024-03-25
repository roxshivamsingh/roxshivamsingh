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
    CardHeader,
} from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';
import { PROJECT_OPTIONS } from '../../types/info';
import { Link } from 'react-router-dom';
export default function Project() {
    return (
        <Container>
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
                    {PROJECT_OPTIONS?.map((row, i) => (<Grid item key={i} xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ borderRadius: 3 }} elevation={4}>
                            <CardHeader
                                action={<IconButton size='small'
                                    LinkComponent={Link}
                                    href={row.link.github || ''}
                                    target='_blank'
                                    disabled={!row.link.github?.length}
                                >
                                    <GitHubIcon fontSize='small' />
                                </IconButton>}
                                title={<Typography
                                    component={row.link.live ? Link : 'span'}
                                    to={row.link.live || ''}
                                    target='_blank'
                                >
                                    {row.label}
                                </Typography>}

                            // subheader="September 14, 2016"
                            />
                            <Link
                                style={{ textDecoration: "none" }}
                                to={row.link.live}
                                target='_blank'
                            >
                                <CardMedia sx={{ height: 200 }} image={row.cover} title={row.label} />
                            </Link>
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
                                    >

                                        {row.description}
                                    </Typography>

                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Stack direction='row' spacing={1}>
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
        </Container>);
}
