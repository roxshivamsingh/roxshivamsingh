import { Box, IconButton } from '@mui/material';
import NavBar from '../../components/navbar/navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <div>
            <NavBar />
            <Box sx={{ mt: 10 }} />
            <IconButton>
                <GitHubIcon fontSize='large' />
            </IconButton>
            <IconButton>
                <LinkedInIcon fontSize='large' />
            </IconButton>
        </div>
    );
}