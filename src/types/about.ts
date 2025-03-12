import dayjs from 'dayjs'

export interface ITimelineItem {
    name: string
    role: string
    timeline: string
    duration: ITimelineItemDuration
    isPresent?: boolean
    technologies?: string[]
    icon: string
    align: string
}

export interface ITimelineItemDuration {
    startDate: string
    endDate: string
}

export const TRANSFORM_DATE_TO_LABEL = (arr: ITimelineItem[]) => {
    return arr?.map((item) => {
        const { startDate, endDate } = {
            startDate: dayjs(item.duration.startDate, 'YYYY-MM-DD'),
            endDate: dayjs(item.duration.endDate, 'YYYY-MM-DD'),
        }

        return {
            ...item,
            duration: `${
                startDate?.isValid() ? startDate.format('MMM-YYYY') : ''
            } ${
                endDate?.isValid()
                    ? '-'
                    : item.duration?.startDate?.length
                    ? item.isPresent
                        ? '- Present'
                        : ''
                    : ''
            } ${endDate?.isValid() ? endDate.format('MMM-YYYY') : ''}`?.trim(),
        }
    })
}
