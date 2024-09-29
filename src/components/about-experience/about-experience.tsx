import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid2 from '@mui/material/Grid2';

// =======================================================================

import { Iconify } from "../iconify";
import { ABOUT_EXPIERIENCE_TIMELINE } from '../../types';
import illustration from "./undraw_developer_activity_re_39tg.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AboutExperience() {
    return (

        <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                <Timeline position='right' sx={SX.Container}>
                    {ABOUT_EXPIERIENCE_TIMELINE?.map((item, i) => {
                        const args = {
                            isLastEl: (ABOUT_EXPIERIENCE_TIMELINE?.length - 1 !== i),
                            isMidEl: !!(i && ABOUT_EXPIERIENCE_TIMELINE?.length < (i + 1))
                        }
                        return (<TimelineItem key={i}>
                            {/* <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {item.timeline}
                    </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                {/* {i == 0 && (<TimelineDot color='secondary' />)} */}
                                {args.isMidEl && (<TimelineConnector sx={{ color: "#b90064" }} />)}
                                <TimelineDot sx={{ color: "#b90064" }}>
                                    <Iconify icon={item.icon} />
                                </TimelineDot>
                                {args.isLastEl && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', borderRadius: "12px" }}>
                                <Stack>
                                    <Typography variant="h6" component="span">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="subtitle1" component="span">
                                        {item.role}
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 1,
                                        flexWrap: 'wrap',
                                        justifyContent: {
                                            lg: "lft",
                                            xs: "left"
                                        },
                                    }}
                                >
                                    {item.technologies?.map((item, i) => <Chip label={item} size='small' key={i} />)}
                                </Box>
                                <Typography variant='caption'>{item.duration}</Typography>
                            </TimelineContent>
                        </TimelineItem>)
                    })}

                </Timeline>
            </Grid2>
            <Grid2
                size={{ sm: 0, xs: 0, md: 4, lg: 4 }}
                sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
                <LazyLoadImage src={illustration} effect='blur' />
            </Grid2>

        </Grid2>
    );
}

const SX = {
    Container: {
        [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
        },
    }
}
