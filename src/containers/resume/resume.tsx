import { Box, Button, Container, SxProps, Typography } from "@mui/material";
// =======================================================================

import { Iconify } from "../../components/iconify";

export default function Resume() {
    return (
        <Container>
            <Typography variant='h4' sx={{ fontWeight: 500 }}>
                Resume
            </Typography>
            <Box sx={SX.Section}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<Iconify icon='heroicons-outline:document-download' />}
                >Download Resume/CV</Button>
            </Box>

        </Container>

    )
}

const SX: { [key: string]: SxProps } = {
    Section: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        mt: 5
    }
}
