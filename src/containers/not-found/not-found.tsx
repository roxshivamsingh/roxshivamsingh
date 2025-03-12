import { Typography, Container, Link, SxProps, Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// =======================================================================

import NotFoundImage from './not-found.png'

export default function NotFound() {
    return (
        <Container maxWidth="lg" sx={SX.Container}>
            <Typography variant="h1" component="h1" sx={SX.Title}>
                404: Not Found
            </Typography>
            <Box
                component={LazyLoadImage}
                src={NotFoundImage}
                alt=""
                sx={SX.Image}
            />
            <Typography variant="body1" sx={SX.Msg}>
                The page you requested could not be found.
            </Typography>
            <Link href="/" sx={SX.BackButton}>
                Go back to the homepage
            </Link>
        </Container>
    )
}

const SX: { [key: string]: SxProps } = {
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    Title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '24px',
    },
    Image: {
        maxWidth: '100%',
        borderRadius: '8px',
        background: 'inherit',
        // mixBlendMode: "multiply"
    },
    Msg: {
        fontSize: '20px',
        marginBottom: '24px',
    },
    BackButton: {
        fontSize: '18px',
        textDecoration: 'none',
        color: 'primary.main',
    },
} as const
