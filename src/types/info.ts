export type TInfoPortfolio = {
  title: string,
  live: string,
  source: string,
  image: string,
  status?: boolean
}

export const NAVLINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },

  { label: 'Projects', path: '/projects' },
  // { label: 'Contact', path: '/contact' },
]
// export const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const colors = ["#B90043", "#E100FF"]
export const info = {
  firstName: "Shivam",
  lastName: "Singh",
  initials: "JS",
  position: "a Software Engineer",
  username: "roxshivamsingh",
  // position: "Surviving on Coffee & Eminem",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "tea",
      text: "Fueled by Tea",
    },
    {
      emoji: "location",
      text: "Based in the India",
    },
    {
      emoji: "job",
      text: "React Developer at Sulovi Technologies",
    },
    {
      emoji: "email",
      text: "roxshivamsingh@gmail.com",
    },
  ],
  social: {
    linkedin: "https://linkedin.com/in/roxshivamsingh",
    github: "https://github.com/roxshivamsingh"
  },
  socials: [
    {
      link: "https://github.com/roxshivamsingh",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/roxshivamsingh",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

  ],

  bio:
    `
    I am a React Developer at Sulovi Technologies Private Limited, where I create robust and innovative web applications using a wide array of technologies. I have a Bachelor of Technology degree in Computer Science Engineering from BSACET, Mathura.
    At Sulovi, I spearheaded the development and maintenance of applications using React and Firebase, introducing features such as virtualization, WhatsApp cloud API integration, and no-internet functionality. I also implemented a Google Cloud function as a microservice for backend tasks using Python, and migrated the Redux legacy pipeline to Redux Toolkit. I collaborated with other developers, tested the code quality, and documented the features and functionalities. I am always eager to learn new skills, enhance my existing ones, and deliver efficient solutions.
  `  ,
  skills: {
    proficientWith: [
      "Node.js",
      "React.js",
      "Redux-Toolkit",
      "Next.js",
      "Laravel",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Firebase",
      "Express.js",
      "TypeScript",
      "Chrome Extension Development",
      "HTML",
      "CSS",
      "Linux",
      "Docker",
      "Postman",
      "Github"
    ],
    exposedTo: [
      "Django",
      "Canva",
    ],
  },

  hobbies: [
    {
      label: "Playing Guitar",
      emoji: "🎸",
    },
    {
      label: "Coding",
      emoji: "🖥️",
    },

    // {
    //   label: "cooking",
    //   emoji: "🌶",
    // },
  ],
  portfolio: [
    // {
    //   title: "Sparkeey",
    //   live: "https://play.google.com/store/apps/details?id=com.app.sparkeey&pcampaignid=web_share",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: sparkeey,
    //   status: true
    // },
    // {
    //   title: "MekGarage",
    //   live: "https://play.google.com/store/apps/details?id=com.mani.mekvahanpartner&pcampaignid=web_share",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: mekgarage,
    //   status: true
    // },
    // {
    //   title: "W3Sports",
    //   live: "https://w3sport.co.uk/",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: w3sport,
    //   status: true
    // },
    // {
    //   title: "Mekvahan",
    //   live: "https://play.google.com/store/apps/details?id=com.myapp.mekvahan&pcampaignid=web_share",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: mekvahan,
    //   status: true
    // },
    // {
    //   title: "Engagr",
    //   live: "/project-not-live",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: engagr,
    //   status: false
    // },
    // {
    //   title: "YubiHealth",
    //   live: "/project-not-live",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: yubihealth,
    //   status: false
    // },
    // {
    //   title: "DRL Healify",
    //   live: "/project-not-live",
    //   source: "https://github.com/roxshivamsingh",
    //   // image: healify,
    //   status: false
    // },
  ] as TInfoPortfolio[],
};




export const PROJECT_OPTIONS = [{
  label: 'Content Right',
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrGbYVybUZXBmSFDktnjGZk-OCMqDgzQSpMCay2xoAQ&s",
  description: "Chat app like Chat-GPT with Google social login and manual login. When we    enter a prompt, it will give an output in video format. Based on React.js,    Firebase, Redux-Toolkit Material-UI. This app still in development.",

  technologies: ["React.js", "TypeScript", "Firebase", "MUI"],
  link: {
    github: "https://github.com/digitalphora/devgpt-contentright",
    live: "https://devgpt-contentright.vercel.app/"
  }
},

{
  label: 'Shorts',
  cover: "https://play-lh.googleusercontent.com/GuHDoYst1TFXTngf4aWaJl_joG0kO6DhzOaIqNlWMrha915Zcxz50Ur-UWdngHb3oyg",
  description: "It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI",
  technologies: ["React.js", "TypeScript", "Firebase", "MUI"],

  link: {
    github: "https://github.com/roxshivamsingh/shorts",
    live: "https://devgpt-contentright.vercel.app/"
  }
},
{
  label: 'QuesU',
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrlhkzU7yw7uOqgryO_EhDKpnbLePrqIX8EKQxLYkmQ&s",
  description: "StackOverflow-like apps contain manual login. Create a question, answers, and rate them. Built on Laravel, Bootstrap, and MySQL.",
  technologies: ["Laravel", "PHP", "MySQL", "Composer", "Bootstrap"],

  link: {
    github: "https://github.com/roxshivamsingh/shorts",
    live: "https://devgpt-contentright.vercel.app/"
  }
},
{
  label: 'VideoShare',
  cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78Yr9IX28mmCnEYoddY4BecelTNqTEO56CsnKYFpUfQ&s",
  description: "It is a short video platform that contains a portrait screen to scroll video.    Tech-Stack I used React.js, Firebase, and Material-UI",
  technologies: ["Node.js", "React.js", "TypeScript", "MUI"],

  link: {
    github: "https://github.com/roxshivamsingh/shorts",
    live: "https://devgpt-contentright.vercel.app/"
  }
},



]
