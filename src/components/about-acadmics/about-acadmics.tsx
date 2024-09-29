import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Stack, Typography, } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Grid2 from '@mui/material/Grid2';
// =======================================================================

import { Iconify } from "../../components/iconify";
import { ABOUT_ACADMIC_TIMELINE, ABOUT_ACADMIC_TIMELINE_OPTIONS } from '../../types';
import illustration from "./undraw_education_f8ru.svg"

export default function AboutAcadmics() {

    return (<Grid2 container spacing={2}>
        <Grid2 size={{ xs: 0, sm: 0, md: 4, lg: 4 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
            <LazyLoadImage src={illustration} effect='blur' style={{ width: "100%" }} />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "row-reverse",
                    justifyContent: "right",
                    alignItems: "right"
                }}
            >
                <div className="">
                    <Timeline position='left' sx={SX.Container}>
                        {ABOUT_ACADMIC_TIMELINE?.map((item, i) => {
                            const args = {
                                isLastEl: (ABOUT_ACADMIC_TIMELINE_OPTIONS?.length - 1 !== i),
                                isMidEl: !!(i && ABOUT_ACADMIC_TIMELINE_OPTIONS?.length < (i + 1))
                            }
                            return (<TimelineItem key={i}>
                                <TimelineSeparator>
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
                                    <Typography variant='caption'>{item.duration}</Typography>
                                </TimelineContent>
                            </TimelineItem>)
                        })}

                    </Timeline>
                </div>
            </Box>
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
