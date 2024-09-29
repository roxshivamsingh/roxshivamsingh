import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import { Iconify } from "../../components/iconify";
import { Box, Chip, Stack } from '@mui/material';

export default function AboutTimeline() {
    return (<Timeline
        position='right'
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            },
        }}
    >
        {TIMELINE_OPTIONS?.map((item, i) => {
            const args = {
                isLastEl: (TIMELINE_OPTIONS?.length - 1 !== i),
                isMidEl: !!(i && TIMELINE_OPTIONS?.length < (i + 1))
            }
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
const TIMELINE_OPTIONS = [
    {
        name: 'IGSS Private Limited',
        role: 'React.js Developer',
        duration: 'April 2024 - Present',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        icon: 'mdi:company',
        align: 'left',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer',
        duration: 'Aug 2022 - Feb 2024',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        icon: 'mdi:company',
        align: 'right',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer (Intern)',
        duration: 'Aug 2022 - Feb 2024',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        icon: 'mdi:company',
        align: 'left',
    },
    {
        name: 'Mekvahan',
        role: 'React.js Developer (Intern)',
        duration: 'May 2020 - May 2021',
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript'],
        icon: 'mdi:company',
        align: 'right',
    },
    {
        name: '',
        role: '',
        duration: '',
        technologies: [],
        icon: 'mdi:timer-sand',
        align: 'right',

    },

]
