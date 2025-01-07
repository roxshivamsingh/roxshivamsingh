import { ExperienceLocationEnum, IExperienceItem, TExperienceTypeEnum } from "../types";

export const _experiences: IExperienceItem[] = [
    {
        name: 'Sulovi Technologies Private Limited',
        url: 'https://app.sulovi.com',
        designation: 'Full Stack Developer',
        type: TExperienceTypeEnum.Job,
        region: 'South Delhi, India',
        location: ExperienceLocationEnum.Remote,
        duration: { startDate: '2022-08-01', endDate: '2024-02-01' },
        skills: [],
        remark: {
            description: `My full-stack development skills combine Node.js for backend tasks with React.js and Firebase for building performant and user-friendly web applications. I leverage Material-UI for consistent UIs, Redux Toolkit for efficient state management, and React Virtualization for smooth handling of data-heavy elements. Additionally, I've integrated the WhatsApp Cloud API for seamless guest invitations and the OpenWeather API with Axios for weather forecasting. I even developed a standalone React.js invitation form app to streamline guest RSVP via WhatsApp.`,
            items: [
                "Developed and maintained React.js and Firebase (NoSQL) applications with a focus on adherence to best practices.",
                "Rectified glitches and ambiguous behaviour in components by aligning them with Material-UI guidelines.",
                "Transitioned legacy Redux pipeline to Redux Toolkit for enhanced performance and maintainability.",
                "Integrated WhatsApp cloud API seamlessly into a project chat container to send invitations to guests.",
                "Introduced React Virtualization for efficient handling of notification, list, and chat message bubbles.",
                "Overhauled forms logic with React-Hook-Form and yup library for improved functionality.",
                "Engineered Google Cloud functions as a microservice for backend tasks like WhatsApp Cloud API read and delivered state.",
                "Orchestrated OpenWeather API integration in Node.js with Axios to forecast weather suitability for events up to six days in advance.",
                "Developed a standalone invitation form application utilising React.js, aimed at facilitating the collection of guest feedback. This application streamlined processes for accepting or declining invitations via WhatsApp messages, whereby invitation messages included links to the form application."
            ]
        }
    },
    {
        name: 'Sulovi Technologies Private Limited',
        url: 'https://app.sulovi.com',
        designation: 'Full Stack Developer',
        type: TExperienceTypeEnum.Job,
        region: 'South Delhi, India',
        location: ExperienceLocationEnum.Remote,
        duration: { startDate: '2021-07-01', endDate: '2022-08-01' },
        skills: [],
        remark: {
            description: `I undertook several enhancements to optimize a project's user experience and code maintainability. I addressed inconsistencies in components by aligning them with Material-UI guidelines, eliminating glitches and ambiguous behavior. Additionally, I implemented a single source of truth for theming, reducing code repetition and simplifying maintenance. Furthermore, I integrated React Router DOM to facilitate navigation, while utilizing the useMediaQuery hook ensured a responsive UI that adapts seamlessly across different screen sizes.`,
            items: [
                "Aligned legacy components with Material-UI standards to eliminate glitches and ensure clarity.",
                "Streamlined theming for codebase efficiency and reduced redundancy.",
                "Implemented react-router-dom for structured application routing.",
                "Enhanced UI responsiveness with use-media-query hook for adaptable viewport display.",
                "Implemented robust offline functionality to maintain user experience during connection loss.",
                "Optimized performance by removing unused packages and resolving re-render issues.",
                "Enforced single-tab browsing to mitigate redux store conflicts for improved application stability."
            ]
        }
    },
    {
        name: 'Mekvahan',
        url: 'https://mekvahan.com',
        designation: 'Full Stack Developer',
        type: TExperienceTypeEnum.Internship,
        region: 'Delhi, India',
        location: ExperienceLocationEnum.Remote,
        duration: { startDate: '2020-05-01', endDate: '2021-06-01' },
        skills: [],
        remark: {
            description: `I possess a well-rounded skillset encompassing both frontend and backend development. I effectively streamlined a legacy Laravel codebase by implementing best practices for performance and maintainability. My expertise extends to API development and testing, ensuring reliability and clarity through thorough documentation. Leveraging Amazon SNS, I implemented scheduled OTP delivery via text messages. Additionally, I automated email confirmations with PDF attachments using Laravel's functionalities. Furthermore, I designed and built a seamless React.js frontend that integrates flawlessly with the Laravel backend. I even incorporated the Google Maps API to enhance user experience by displaying nearby shop locations.`,
            items: [
                "Streamlined legacy codebase to adhere to Laravel best practices of eloquent, optimising performance and maintainability.",
                "Conducted thorough debugging and testing of existing APIs to resolve errors and ensure reliability.",
                "Developed and documented APIs using Laravel and maintained comprehensive documentation on Postman.",
                "Orchestrated OTP delivery via text message utilising Amazon SNS service through scheduled cron-jobs.",
                "Automated email notifications for booking confirmations using Laravel PDF package via scheduled cron-jobs.",
                "Designed and implemented React.js frontend, seamlessly integrating with backend APIs on Laravel.",
                "Integrated Google Maps API to retrieve coordinates and identify nearest shop locations for enhanced user experience."
            ]
        }
    },
]
