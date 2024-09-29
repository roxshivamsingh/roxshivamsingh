import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box, Chip, Stack } from '@mui/material';

import { Iconify } from "../../components/iconify";
import { ABOUT_EXPIERIENCE_TIMELINE } from '../../types';

export default function AboutTimeline() {
    return (<Timeline position='right' sx={SX.Container}>
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
                    {args.isMidEl && (<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />)}
                    <TimelineDot color="secondary">
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
