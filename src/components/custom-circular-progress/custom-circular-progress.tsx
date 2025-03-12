import { Box, SxProps } from '@mui/material'
import { Iconify } from '../iconify'

export default function CustomCircularProgress(props: TProps) {
    return (
        <Box sx={SX.Progress}>
            <Iconify
                icon="line-md:loading-loop"
                width={props.width || 80}
                sx={{ color: '#E100FF' }}
            />
        </Box>
    )
}

type TProps = { width?: number }
const SX: { [key: string]: SxProps } = {
    Progress: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
}
