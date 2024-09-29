import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Iconify } from '../iconify';
import { NAVLINKS } from '../../types/info';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function MiniDrawer() {

    const navigate = useNavigate()
    return (<Box
        sx={{
            display: "flex",
            flexDirection: "row",
            // background: "transparent",
            // display: { lg: 'none', xl: 'none', md: 'none' },
        }}
    // PaperProps={{
    //     sx: {
    //         background: "transparent",
    //         border: 'none'
    //     },
    // }}
    // color='transparent'

    >

        <List

            sx={{
                position: "absolute",
                bottom: 0,
                border: "1px solid red",
                // height: "10vh",
                width: "100vw",
                display: "flex",

                flexDirection: "row",
                justifyContent: "center"
            }}
        >
            {NAVLINKS.map((text, i) => (
                <ListItem key={i} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        onClick={() => {
                            navigate(text.path)
                        }}
                    // LinkComponent={Link}
                    // to={text.path}
                    // sx={{ minHeight: 48, px: 2.5, justifyContent: 'center' }}
                    >
                        <ListItemIcon sx={{
                            minWidth: 0,
                            justifyContent: 'center',
                            mr: 'auto'
                        }}>
                            <Iconify icon={text.icon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={text.label}
                            sx={{ opacity: 0 }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>


    </Box>)

}
