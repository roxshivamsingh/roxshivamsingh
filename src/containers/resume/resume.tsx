import { useMemo } from "react";
import { Container, Stack, Typography } from "@mui/material";
import _ from "lodash";
// =======================================================================

import { useAppSelector } from "../../redux";
import { ContentEnum } from "../../types/content";
import CustomDownloadButton from "../../components/custom-download-button";

export default function Resume() {
    const contents = useAppSelector((state) => state.Contents);

    const resume = contents?.value?.find((item) => item.name === ContentEnum.Resume)

    const renderDownloadButton = useMemo(() => {
        return <CustomDownloadButton
            label="Download Resume/CV"
            file={{ url: _.get(resume, 'data.url', ''), name: _.get(resume, 'data.name', '') }}
        />


    }, [resume])
    return (<Container>
        <Typography variant='h4' sx={{ fontWeight: 500 }}>
            Resume
        </Typography>
        <Stack spacing={2} sx={{ mt: 5 }}>
            {renderDownloadButton}
            <iframe src={_.get(resume, 'link', '')}
                style={{ width: '100%', height: "1100px", border: '0' }}
            />
            {renderDownloadButton}
        </Stack>
    </Container>

    )
}

