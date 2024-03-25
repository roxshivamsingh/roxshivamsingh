import { Box, Typography } from '@mui/material';
import illustration from "./not-found.png"
export default function NotFound() {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            <Box mb={3}>
                <img src={illustration} alt="Random" style={{
                    maxWidth: '100%',
                    borderRadius: '8px',
                    background: "inherit",
                    // mixBlendMode: "multiply"
                }} />
            </Box>
            <Typography variant="h4" gutterBottom>
                Not found.
            </Typography>

        </Box>
    );
}

