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

// =======================================================================

import { Iconify } from "../iconify";
import { ABOUT_EXPIERIENCE_TIMELINE } from '../../types';
import illustration from "./undraw_developer_activity_re_39tg.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CSSProperties } from 'react';

export default function AboutExperience(props: TProps) {
    return (<Stack direction='row' justifyContent='space-between'>
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
                        <Box sx={SX.Tech}>
                            {item.technologies?.map((item, i) => <Chip label={item} size='small' key={i} />)}
                        </Box>
                        <Typography variant='caption'>{item.duration}</Typography>
                    </TimelineContent>
                </TimelineItem>)
            })}

        </Timeline>

        {props?.isDesktop && (<Stack sx={SX.ImageContent} >
            <LazyLoadImage src={illustration} effect='blur' style={SX.ImageSize} />
        </Stack>)}


    </Stack>
    );
}



const SX = {
    Tech: {
        display: "flex",
        flexDirection: "row",
        gap: 1,
        flexWrap: 'wrap',
        justifyContent: {
            lg: "lft",
            xs: "left"
        },
    },
    TimelineContent: { py: '12px', borderRadius: "12px" },
    Color: { color: "#b90064" },
    Container: {
        [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
        },
    },
    ImageContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    ImageSize: { maxWidth: "400px" } as CSSProperties
}

type TProps = { isDesktop: boolean }
