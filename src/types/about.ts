import dayjs from "dayjs"

export interface ITimelineItem {
    name: string;
    role: string;
    timeline: string;
    duration: ITimelineItemDuration;
    isPresent?: boolean;
    technologies?: string[];
    icon: string;
    align: string;
}

export interface ITimelineItemDuration {
    startDate: string;
    endDate: string;
}

export const ABOUT_EXPERIENCE_TIMELINE_OPTIONS = [
    {
        name: 'IGSS Private Limited',
        role: 'React.js Developer',
        timeline: 'April 2024 - Present',
        duration: { startDate: '2024-04-01', endDate: '' },
        isPresent: true,
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        icon: 'mdi:company',
        align: 'left',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer',
        timeline: 'Aug 2022 - Feb 2024',
        duration: { startDate: '2022-08-01', endDate: '2024-02-01' },
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        icon: 'mdi:company',
        align: 'right',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer (Intern)',
        timeline: 'Aug 2021 - July 2022',
        duration: { startDate: '2021-08-01', endDate: '2022-07-01' },
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript', 'Redux-Toolkit'],
        icon: 'mdi:company',
        align: 'left',
    },
    {
        name: 'Mekvahan',
        role: 'React.js Developer (Intern)',
        timeline: 'May 2020 - May 2021',
        duration: { startDate: '2020-05-01', endDate: '2021-05-01' },
        technologies: ['React.js', 'Laravel', 'PHP', 'Typescript'],
        icon: 'mdi:company',
        align: 'right',
    },
    {
        name: '',
        role: '',
        timeline: '',
        duration: {
            startDate: '',
            endDate: '',
        },
        technologies: [],
        icon: 'mdi:timer-sand',
        align: 'right',

    },

]

export const ABOUT_ACADMIC_TIMELINE_OPTIONS = [
    {
        name: 'GLA University, Mathura',
        role: 'MBA - Information Technology',
        timeline: 'Sept 2024 - Present',
        duration: { startDate: '2024-04-01', endDate: '' },
        isPresent: true,
        icon: 'carbon:education',
        align: 'left',
    },
    {
        name: 'BSA College of Engineering & Technology, Mathura',
        role: 'B. Tech. - Computer Science',
        timeline: 'Aug 2022 - Feb 2024',
        duration: { startDate: '2019-08-01', endDate: '2022-07-01' },
        icon: 'carbon:education',
        align: 'right',
    },
    {
        name: 'GLA University, Mathura',
        role: 'Diploma - Computer Science',
        timeline: 'Aug 2021 - July 2022',
        duration: { startDate: '2016-08-01', endDate: '2019-08-01' },
        icon: 'carbon:education',
        align: 'left',
    },
    {
        name: '',
        role: '',
        timeline: '',
        duration: { startDate: '', endDate: '', },
        technologies: [],
        icon: 'mdi:timer-sand',
        align: 'right',
    },
]

const TRANSFORM_DATE_TO_LABEL = (arr: ITimelineItem[]) => {
    return arr?.map((item) => {
        const { startDate, endDate } = {
            startDate: dayjs(item.duration.startDate, 'YYYY-MM-DD'),
            endDate: dayjs(item.duration.endDate, 'YYYY-MM-DD'),
        }



        return ({
            ...item,
            duration: `${startDate?.isValid() ? startDate.format('MMM-YYYY') : ''} ${endDate?.isValid() ? '-' : (item.duration?.startDate?.length ? item.isPresent ? '- Present' : '' : '')} ${endDate?.isValid() ? endDate.format('MMM-YYYY') : ''}`?.trim()
        })
    })

}

export const ABOUT_EXPIERIENCE_TIMELINE = TRANSFORM_DATE_TO_LABEL(ABOUT_EXPERIENCE_TIMELINE_OPTIONS)
export const ABOUT_ACADMIC_TIMELINE = TRANSFORM_DATE_TO_LABEL(ABOUT_ACADMIC_TIMELINE_OPTIONS)
