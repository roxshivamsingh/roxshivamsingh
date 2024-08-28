import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import { Iconify } from "../../components/iconify";
import { Chip, Stack } from '@mui/material';

export default function AboutTimeline() {
    return (<Timeline
        position='right'
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            },
        }}
    // position="alternate"
    // sx={{
    //     [`& .${timelineOppositeContentClasses.root}`]: {
    //         flex: 0,
    //         padding: 0
    //     },
    // }}
    >
        {/* <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    {rendomIcon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Eat
                </Typography>
                <Typography>Because you need strength</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                    {rendomIcon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
        </TimelineItem> */}

        {TIMELINE_OPTIONS?.map((item, i) => {
            return (<TimelineItem key={i}>
                {/* <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {item.duration}
                    </TimelineOppositeContent> */}
                <TimelineSeparator>
                    {/* {i == 0 && (<TimelineDot color='secondary' />)} */}
                    {!!(i && TIMELINE_OPTIONS?.length < i + 1) && (<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />)}
                    <TimelineDot color="secondary">
                        <Iconify icon='mdi:timer-sand' />
                    </TimelineDot>
                    <TimelineConnector />
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
                    <Stack direction='row' spacing={1}>
                        {item.technologies?.map((item, i) => <Chip label={item} size='small' key={i} />)}
                    </Stack>
                    <Typography variant='caption'>{item.duration}</Typography>
                </TimelineContent>
            </TimelineItem>)
        })}

    </Timeline>
    );
}
const TIMELINE_OPTIONS = [
    {
        name: 'IGSS Private Limited',
        role: 'React.js Developer',
        duration: 'April 2024 - Present',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        align: 'left',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer',
        duration: 'Aug 2022 - Feb 2024',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        align: 'right',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer',
        duration: 'Aug 2022 - Feb 2024',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        align: 'left',
    },
    {
        name: 'Mekvahan',
        role: 'React.js Developer',
        duration: 'May 2020 - May 2021',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript'],
        align: 'right',

    },

]
