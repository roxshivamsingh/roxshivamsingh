import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';

const ProjectNotLive = () => {
    const [randomImage, setRandomImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await axios.get('https://source.unsplash.com/random/800x400');
                setRandomImage(response.request.responseURL);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching image:', error);
                setLoading(false);
            }
        };

        fetchRandomImage();
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    {randomImage && (
                        <Box mb={3}>
                            <img src={randomImage} alt="Random" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                        </Box>
                    )}
                    <Typography variant="h4" gutterBottom>
                        Project Not Live
                    </Typography>
                    <Typography variant="body1">
                        Unfortunately, the project is not live at the moment. Please check back later.
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default ProjectNotLive;
