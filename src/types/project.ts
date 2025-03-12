export type TProjectItem = {
    name: string
    link: TProjectItemLink
    remark: string
    technologies: string[]
}
export type TProjectItemLink = { github: string; live: string; image: string }

// ==========================================================================

const GITHUB_URL = 'https://github.com/roxshivamsingh'

export const _projects: TProjectItem[] = [
    {
        name: 'Content Right',
        remark: 'Chat app like Chat-GPT with Google social login and manual login. When we    enter a prompt, it will give an output in video format. Based on React.js,    Firebase, Redux-Toolkit Material-UI. This app still in development.',
        technologies: ['React.js', 'TypeScript', 'Firebase', 'MUI'],
        link: {
            image: '/images/projects/content-right.png',
            github: 'https://github.com/digitalphora/devgpt-contentright',
            live: 'https://devgpt-contentright.vercel.app',
        },
    },
    {
        name: 'Shorts',
        remark: 'It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI',
        technologies: ['React.js', 'TypeScript', 'Firebase', 'MUI'],
        link: {
            github: `${GITHUB_URL}/shorts`,
            image: 'https://play-lh.googleusercontent.com/GuHDoYst1TFXTngf4aWaJl_joG0kO6DhzOaIqNlWMrha915Zcxz50Ur-UWdngHb3oyg',
            live: 'https://devgpt-contentright.vercel.app',
        },
    },
    {
        name: 'QuesU',
        remark: 'StackOverflow-like apps contain manual login. Create a question, answers, and rate them. Built on Laravel, Bootstrap, and MySQL.',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Composer', 'Bootstrap'],

        link: {
            github: `${GITHUB_URL}/quesu`,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrlhkzU7yw7uOqgryO_EhDKpnbLePrqIX8EKQxLYkmQ&s',
            live: '',
        },
    },
    {
        name: 'VideoShare',
        remark: 'It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI',
        technologies: ['Node.js', 'React.js', 'TypeScript', 'MUI'],
        link: {
            github: `${GITHUB_URL}/videoshare`,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78Yr9IX28mmCnEYoddY4BecelTNqTEO56CsnKYFpUfQ&s',
            live: 'https://videoshare-ashy.vercel.app/',
        },
    },
    {
        name: 'RoyalIndiaShop',
        remark: 'It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI',
        technologies: ['Laravel', 'Bootstrap', 'PHP', 'MySQL', 'NGINX'],
        link: {
            // image: "https://w7.pngwing.com/pngs/75/407/png-transparent-hand-holding-shopping-bag-silhouette-illustration-online-shopping-shopping-bag-logo-coupon-business-shopping-bags-business-woman-rectangle-retail-thumbnail.png",
            image: '/images/projects/shopping-app.png',

            github: '',
            live: 'https://royalindiashop.com',
        },
    },
    {
        name: 'Carbon Cell UI',
        technologies: ['Node.js', 'React.js', 'TypeScript', 'MUI'],
        remark: 'The carbon cell is the dashboard UI. My Carbon Cell company conducted an assessment but they did not even look at which candidate had mimicked the UI so well.',
        link: {
            image: `/images/projects/carbon-cell.png`,
            github: `${GITHUB_URL}/cuddly-robot`,
            live: 'https://cuddly-robot.vercel.app',
        },
    },
]
