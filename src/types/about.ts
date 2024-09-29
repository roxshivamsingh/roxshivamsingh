import dayjs from "dayjs"


export const ABOUT_EXPERIENCE_TIMELINE_OPTIONS = [
    {
        name: 'IGSS Private Limited',
        role: 'React.js Developer',
        timeline: 'April 2024 - Present',
        duration: { startDate: '2024-04-01', endDate: '' },
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

export const ABOUT_EXPIERIENCE_TIMELINE = ABOUT_EXPERIENCE_TIMELINE_OPTIONS?.map((item) => {
    const { startDate, endDate } = {
        startDate: dayjs(item.duration.startDate, 'YYYY-MM-DD'),
        endDate: dayjs(item.duration.endDate, 'YYYY-MM-DD'),
    }


    return ({
        ...item,
        duration: `${startDate?.isValid() ? startDate.format('MMM-YYYY') : ''} ${startDate?.isValid() ? '-' : ''} ${endDate?.isValid() ? endDate.format('MMM-YYYY') : ''}`?.trim()
    })
})
