import { Box, IconButton, Tooltip } from '@mui/material';
import NavBar from '../../components/navbar/navbar';
import { TECH_ICONS } from '../../types/content';

export default function Projects() {
    return (
        <div>
            <NavBar />
            <Box sx={{ mt: 10 }} />
            {TECH_ICONS?.map((row) => (<Tooltip title={row?.replace(".png", "")}>
                <IconButton>
                    <img src={`/images/${row}./png`} style={{ width: 50 }} />
                </IconButton>

            </Tooltip>))}

        </div>
    );
}