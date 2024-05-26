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
    Tooltip,
    SxProps,
} from '@mui/material';
import { Iconify } from "../../components/iconify";
import { Link } from 'react-router-dom';
import { _projects } from '../../types/project';
import { useMemo } from 'react';

export default function Project() {

    const renderProjects = useMemo(() => _projects?.map((row, i) => (<Grid item key={i} xs={12} sm={12} md={12} lg={4}>
        <Card sx={{ borderRadius: 3 }} elevation={4}>
            <CardHeader
                action={<IconButton size='small'
                    LinkComponent={Link}
                    href={row.link.github || ''}
                    target='_blank'
                    disabled={!row.link.github?.length}
                >
                    <Iconify icon="mdi:github" />
                </IconButton>}
                title={<Typography component={row.link.live ? Link : 'span'} to={row.link.live || ''} target='_blank'>
                    {row.name}
                </Typography>}
            />
            <Link style={{ textDecoration: "none" }} to={row.link.live} target='_blank'>
                <CardMedia sx={{ height: 300 }} image={row.link.image} title={row.name} />
            </Link>
            <CardContent>
                <Stack spacing={2}>
                    <Tooltip title={row.remark}>
                        <Typography variant="body2" color="text.secondary" sx={SX.Remark}>
                            {row.remark}
                        </Typography>
                    </Tooltip>
                </Stack>
            </CardContent>
            <CardActions>
                <Stack direction='row' gap={0.5}>
                    {row?.technologies?.map((label, j) => <Chip label={label} size='small' key={j} />)}
                </Stack>
                {/* <Button size="small">Share</Button> */}
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    </Grid>
    )), [])
    return (<Container>
        <Typography variant='h4' sx={{ fontWeight: 500 }}>
            Projects
        </Typography>
        <Stack sx={SX.Container}>
            <Grid container spacing={2} >
                {renderProjects}
            </Grid>
        </Stack>
    </Container>);
}


const SX: { [key: string]: SxProps } = {
    Remark: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
    },
    Container: {
        mt: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}