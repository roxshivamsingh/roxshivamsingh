import { CSSProperties } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Stack, Typography, } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// =======================================================================

import { Iconify } from "../../components/iconify";
import { ABOUT_ACADMIC_TIMELINE, ABOUT_ACADMIC_TIMELINE_OPTIONS } from '../../mocks';
import illustration from "./undraw_education_f8ru.svg"

export default function AboutAcadmics(props: TProps) {

    return (<Stack direction='row' justifyContent='space-between'>
        {props?.isDesktop && (<Stack sx={SX.ImageContent}>
            <LazyLoadImage src={illustration} effect='blur' style={SX.ImageSize} />
        </Stack>)}

        <Timeline position='left' sx={SX.Container}>
            {ABOUT_ACADMIC_TIMELINE?.map((item, i) => {
                const args = {
                    isLastEl: (ABOUT_ACADMIC_TIMELINE_OPTIONS?.length - 1 !== i),
                    isMidEl: !!(i && ABOUT_ACADMIC_TIMELINE_OPTIONS?.length < (i + 1))
                }
                return (<TimelineItem key={i}>
                    <TimelineSeparator>
                        {args.isMidEl && (<TimelineConnector sx={SX.Color} />)}
                        <TimelineDot sx={SX.Color}>
                            <Iconify icon={item.icon} />
                        </TimelineDot>
                        {args.isLastEl && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={SX.TimelineContent}>
                        <Stack>
                            <Typography variant="h6" component="span">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle1" component="span">
                                {item.role}
                            </Typography>
                        </Stack>
                        <Typography variant='caption'>{item.duration}</Typography>
                    </TimelineContent>
                </TimelineItem>)
            })}

        </Timeline>
    </Stack>

    );
}

const SX = {
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
