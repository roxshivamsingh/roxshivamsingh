import { TImageLabel, TRANSFORM_DATE_TO_LABEL } from "../types";

export const TECHNOLOGY_OPTIONS: TImageLabel[] = [
    {
        label: "React.js",
        image: "react.png"
    },
    {
        label: "Nestjs",
        image: "nestjs.png"
    },
    {
        label: "Nodejs",
        image: "nodejs.png"
    },
    {
        label: "Express",
        image: "express.png"
    },
    {
        label: "Ant Design",
        image: "ant-design.png"
    },
    {
        label: "Redux Toolkit",
        image: "redux.png"
    },
    {
        label: "Bootstrap",
        image: "bootstrap.png"
    },
    {
        label: "Django",
        image: "django.png"
    },

    {
        label: "FastAPI",
        image: "fastapi.png"
    },
    {
        label: "Firebase",
        image: "firebase.png"
    },
    {
        label: "Github",
        image: "github.png"
    },
    {
        label: "Laravel",
        image: "laravel.png"
    },
    {
        label: "Material UI",
        image: "material-ui.png"
    },
    {
        label: "MongoDB",
        image: "mongodb.png"
    },

    // {
    //     label: "Photo",
    //     image: "photo.png"
    // },
    {
        label: "PHP",
        image: "php.png"
    },
    {
        label: "Postman",
        image: "postman.png"
    },

    {
        label: "SQLite",
        image: "sqlite.png"
    },
    {
        label: "Tailwind",
        image: "tailwind-css.png"
    }
]

export const ABOUT_EXPERIENCE_TIMELINE_OPTIONS = [
    {
        name: 'IGSS Private Limited',
        role: 'React.js Developer',
        timeline: 'April 2024 - Present',
        duration: { startDate: '2024-04-01', endDate: '' },
        isPresent: true,
        technologies: ['React.js', 'Typescript', 'Material-UI', 'React-Google-Chart', 'Redux-Toolkit', 'React-Query', 'API', 'BitBucket'],
        icon: 'mdi:company',
        align: 'left',
    },
    {
        name: 'Sulovi Technologies Private Limited',
        role: 'React.js Developer',
        timeline: 'Aug 2022 - Feb 2024',
        duration: { startDate: '2022-08-01', endDate: '2024-02-01' },
        technologies: ['React.js', 'Typescript', 'Material-UI', 'Redux-Toolkit', 'Firebase', 'Github'],

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

export const ABOUT_EXPIERIENCE_TIMELINE = TRANSFORM_DATE_TO_LABEL(ABOUT_EXPERIENCE_TIMELINE_OPTIONS)
export const ABOUT_ACADMIC_TIMELINE = TRANSFORM_DATE_TO_LABEL(ABOUT_ACADMIC_TIMELINE_OPTIONS)
